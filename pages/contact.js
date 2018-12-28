function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.find/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), _tools = require("./../utils/tools.js"), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _chou = require("./../services/chou.js"), _PopupBox = require("./../components/PopupBox.js"), _PopupBox2 = _interopRequireDefault(_PopupBox), _game = require("./../services/game.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "中奖者信息",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, r.data = {
            inited: !1,
            result: null,
            game: null,
            navigationTitle: "中奖者信息",
            downloadinited: !1,
            downloadLink: ""
        }, r.computed = {
            canCopy: function() {
                return !(0, _lodash2.default)(this, "result.contact_users.meta.has_more", !1);
            },
            group: function() {
                try {
                    if (this.result) {
                        var e = [];
                        return (0, _lodash2.default)(this, "result.contact_users.data", []).forEach(function(t) {
                            var n = (0, _tools.getUserContact)(t);
                            n ? (e[0] || (e[0] = []), t.displayContact = n, e[0].push(t)) : (e[1] || (e[1] = []), 
                            e[1].push(t));
                        }), e;
                    }
                    return [];
                } catch (e) {
                    return [];
                }
            },
            endDate: function() {
                try {
                    if (this.game) {
                        return (0, _moment2.default)(this.game.contact_set_deadline).format("MM月DD日 HH:mm");
                    }
                    return "";
                } catch (e) {
                    return "";
                }
            },
            remindDate: function() {
                try {
                    if (this.game) {
                        return (0, _moment2.default)(this.game.finished_at).add(1, "days").add(1, "hours").format("MM月DD日 HH:mm");
                    }
                    return "";
                } catch (e) {
                    return "";
                }
            },
            needRemind: function() {
                try {
                    if (this.game) {
                        var e = (0, _moment2.default)(this.game.finished_at).add(1, "days").add(1, "hours");
                        return (0, _moment2.default)() < e;
                    }
                    return !1;
                } catch (e) {
                    return !1;
                }
            }
        }, r.components = {
            PopupBox: _PopupBox2.default
        }, r.methods = {
            showDownload: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!this.isFetching) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            return this.isFetching = !0, this.downloadinited = !1, this.downloadLink = "", this.$broadcast("PopupBoxShow"), 
                            this.$apply(), e.prev = 7, e.next = 10, (0, _game.getLotteryDownloadLink)(this.id);

                          case 10:
                            t = e.sent, this.downloadLink = t.data.url, e.next = 17;
                            break;

                          case 14:
                            e.prev = 14, e.t0 = e.catch(7), this.downloadLink = "";

                          case 17:
                            return e.prev = 17, this.isFetching = !1, this.downloadinited = !0, this.$apply(), 
                            e.finish(17);

                          case 22:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 7, 14, 17, 22 ] ]);
                }));
                return e;
            }(),
            collectFormId: function(e) {
                e.detail.formId && (0, _chou.saveFormId)(e.detail.formId);
            },
            copyLink: function() {
                wx.setClipboardData({
                    data: this.downloadLink,
                    success: function(e) {
                        _wepy2.default.showToast({
                            title: "已复制",
                            icon: "success",
                            duration: 1e3
                        });
                    },
                    fail: function(e) {
                        console.error(e);
                    }
                });
            },
            copyAllUserInfo: function() {
                var e = this;
                if (!wx.setClipboardData) return this.$invoke("toast", "show", {
                    title: "微信版本过低",
                    duration: 1e3
                });
                (0, _analyse2.default)("info_copyall", {
                    id: (0, _lodash2.default)(this, "game.id", "")
                });
                try {
                    var t = "";
                    if ((0, _lodash2.default)(this, "result.contact_users.data", []).forEach(function(n) {
                        var r = e.getPrize(n.prize_id), a = n.nick_name, o = (0, _tools.getUserContact)(n) || "未填写";
                        t += r ? r.name + "\t" : "\t", t += a + "\t" + o.replace("\n", " ").replace("\t", " ").replace("\v", " ") + "\t\n";
                    }), !t) return;
                    wx.setClipboardData({
                        data: t,
                        success: function(e) {
                            _wepy2.default.showToast({
                                title: "已复制",
                                icon: "success",
                                duration: 1e3
                            });
                        },
                        fail: function(e) {
                            _wepy2.default.showToast({
                                title: "复制失败, 请联系客服导出",
                                icon: "none"
                            }), console.error(e);
                        }
                    });
                } catch (e) {
                    _wepy2.default.showToast({
                        title: "复制失败, 请联系客服导出",
                        icon: "none"
                    }), console.error(e);
                }
            },
            makePhoneCall: function(e) {
                "phone" === e.type && _wepy2.default.makePhoneCall({
                    phoneNumber: e.value
                });
            },
            copyInfo: function(e) {
                var t = (0, _tools.getUserContact)(e);
                wx.setClipboardData && t && wx.setClipboardData({
                    data: t,
                    success: function(e) {
                        _wepy2.default.showToast({
                            title: "已复制",
                            icon: "success",
                            duration: 1e3
                        });
                    }
                });
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getPrize",
        value: function(e) {
            return (0, _lodash4.default)((0, _lodash2.default)(this, "result.prizes", []), function(t) {
                return t.id === e;
            });
        }
    }, {
        key: "initPage",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _GameManager2.default.fetchGameResult(t);

                      case 2:
                        if (n = e.sent) {
                            e.next = 5;
                            break;
                        }
                        throw new Error("request game result fail");

                      case 5:
                        this.game = _GameManager2.default.temp("game"), _GameManager2.default.temp("game", null), 
                        this.result = n;

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            this.inited = !1, this.result = null;
        }
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ((0, _analyse.screenView)("contact"), !this.inited) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 4, this.initPage(this.options.id);

                      case 4:
                        this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.inited = !1, this.options = t, this.id = t.id, e.next = 5, this.$parent.appInit();

                      case 5:
                        return e.prev = 5, e.next = 8, this.initPage(t.id);

                      case 8:
                        e.next = 13;
                        break;

                      case 10:
                        return e.prev = 10, e.t0 = e.catch(5), e.abrupt("return", this.$invoke("toast", "show", {
                            title: "加载失败",
                            duration: 1e3
                        }).then(function() {
                            _wepy2.default.navigateBack();
                        }));

                      case 13:
                        this.inited = !0, this.$apply();

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 5, 10 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/contact"));