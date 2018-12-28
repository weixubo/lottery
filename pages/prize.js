function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, s) {
                try {
                    var o = t[a](s), i = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.set/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _lodash5 = require("./../npm/lodash.assign/index.js"), _lodash6 = _interopRequireDefault(_lodash5), _analyse = require("./../utils/analyse.js"), _tools = require("./../utils/tools.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var s = arguments.length, o = Array(s), i = 0; i < s; i++) o[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationBarTitleText: "中奖详情",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, r.computed = {
            userContact: function() {
                return this.result ? this.getContact(this.result) : "";
            },
            prizeName: function() {
                try {
                    return this.game ? this.game.prizes.data[0].name : "";
                } catch (e) {
                    return "";
                }
            },
            endDate: function() {
                try {
                    if (this.game && this.game.contact_set_deadline) {
                        return (0, _moment2.default)(this.game.contact_set_deadline).format("MM月DD日 HH:mm");
                    }
                    return "";
                } catch (e) {
                    return "";
                }
            }
        }, r.data = {
            navigationTitle: "中奖详情",
            inited: !1,
            id: "",
            game: null,
            result: null,
            initNotes: ""
        }, r.methods = {
            textareaTap: function() {
                (0, _lodash2.default)(this, "game.contact_set_disabled", !1) && wx.showToast({
                    title: "超时不能填写了，下次中奖再来",
                    icon: "none"
                });
            },
            addressManager: function() {
                var e = this;
                if ((0, _lodash2.default)(this, "game.contact_set_disabled", !1)) return void wx.showToast({
                    title: "超时不能填写了，下次中奖再来",
                    icon: "none"
                });
                wx.getSetting({
                    success: function(t) {
                        t.authSetting["scope.address"] ? wx.chooseAddress({
                            success: function(t) {
                                delete t.errMsg, e.saveAddress(t);
                            }
                        }) : wx.authorize({
                            scope: "scope.address",
                            success: function() {
                                wx.chooseAddress({
                                    success: function(t) {
                                        delete t.errMsg, e.saveAddress(t);
                                    }
                                });
                            },
                            fail: function() {
                                wx.showModal({
                                    title: "提示",
                                    content: "需要获取您的收货地址信息，请到小程序设置页面打开授权",
                                    success: function(t) {
                                        t.confirm && wx.openSetting({
                                            success: function(t) {
                                                t.authSetting["scope.address"] && wx.chooseAddress({
                                                    success: function(t) {
                                                        delete t.errMsg, e.saveAddress(t);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            },
            goToGame: function() {
                _wepy2.default.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + this.id
                });
            },
            userInput: function(e) {
                (0, _lodash4.default)(this, "result.contact", (0, _lodash6.default)((0, _lodash2.default)(this, "result.contact", {}), {
                    notes: e.detail.value
                }));
            },
            sendPrizeContact: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!(0, _lodash2.default)(this, "game.contact_set_disabled", !1)) {
                                e.next = 3;
                                break;
                            }
                            return wx.showToast({
                                title: "超时不能填写了，下次中奖再来",
                                icon: "none"
                            }), e.abrupt("return");

                          case 3:
                            if (!this.sending) {
                                e.next = 5;
                                break;
                            }
                            return e.abrupt("return");

                          case 5:
                            if (this.sending = !0, "funny" === this.game.theme || this.check()) {
                                e.next = 10;
                                break;
                            }
                            return this.sending = !1, wx.showToast({
                                title: "请填写收货地址",
                                icon: "none"
                            }), e.abrupt("return");

                          case 10:
                            if ("funny" !== this.game.theme || (0, _lodash2.default)(this, "result.contact", "")) {
                                e.next = 14;
                                break;
                            }
                            return this.sending = !1, wx.showToast({
                                title: "请输入内容",
                                icon: "none"
                            }), e.abrupt("return");

                          case 14:
                            return e.prev = 14, e.next = 17, _GameManager2.default.saveContact(this.id, this.result.contact);

                          case 17:
                            if (n = e.sent, this.sending = !1, !n) {
                                e.next = 27;
                                break;
                            }
                            if (!((0, _tools.currentPages)().length > 1)) {
                                e.next = 24;
                                break;
                            }
                            return e.abrupt("return", wx.navigateBack());

                          case 24:
                            wx.reLaunch({
                                url: "/pages/index"
                            });

                          case 25:
                            e.next = 28;
                            break;

                          case 27:
                            wx.showToast({
                                title: "发送失败",
                                icon: "none"
                            });

                          case 28:
                            e.next = 35;
                            break;

                          case 30:
                            e.prev = 30, e.t0 = e.catch(14), wx.showToast({
                                title: "发送失败",
                                icon: "none"
                            }), this.sending = !1, console.error(e.t0);

                          case 35:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 14, 30 ] ]);
                }));
                return e;
            }()
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "saveAddress",
        value: function(e) {
            (0, _lodash4.default)(this, "result.contact", (0, _lodash6.default)((0, _lodash2.default)(this, "result.contact", {}), e)), 
            this.$apply();
        }
    }, {
        key: "getContact",
        value: function(e) {
            var t = e.contact;
            return t && (t.telNumber || t.userName || t.cityName || t.countyName || t.detailInfo || t.provinceName) ? t.userName + ", " + t.telNumber + ", " + t.provinceName + t.cityName + t.countyName + t.detailInfo : "";
        }
    }, {
        key: "getNotes",
        value: function(e) {
            var t = e.contact;
            if (t) {
                if (t.notes) return t.notes;
                if (t.detail && !this.getContact(e)) return t.detail;
            }
            return "";
        }
    }, {
        key: "check",
        value: function() {
            return !!this.getContact(this.result);
        }
    }, {
        key: "initPage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, t = _GameManager2.default.temp("game")) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, _GameManager2.default.fetchGame(this.options.id);

                      case 5:
                        t = e.sent;

                      case 6:
                        if (t) {
                            e.next = 8;
                            break;
                        }
                        throw new Error("request game fail");

                      case 8:
                        if (n = _GameManager2.default.temp("gameResult")) {
                            e.next = 13;
                            break;
                        }
                        return e.next = 12, _GameManager2.default.fetchGameResult(this.options.id);

                      case 12:
                        n = e.sent;

                      case 13:
                        if (n) {
                            e.next = 15;
                            break;
                        }
                        throw new Error("request game result fail");

                      case 15:
                        if (this.game = t, this.result = n, 1 === n.result) {
                            e.next = 19;
                            break;
                        }
                        throw new Error("不是中奖者");

                      case 19:
                        this.initNotes = this.getNotes(n), this.id = this.game.id, this.sending = !1, this.startCheck = !1, 
                        this.$apply(), e.next = 30;
                        break;

                      case 26:
                        e.prev = 26, e.t0 = e.catch(0), console.error(e.t0), wx.showToast({
                            title: e.t0.message,
                            icon: "none"
                        });

                      case 30:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 26 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            this.inited = !1, this.id = "", this.game = null, this.result = null, this.initNotes = "", 
            this.sending = !1;
        }
    }, {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("prize");
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.options = e, this.initPage();
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/prize"));