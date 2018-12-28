function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(a, o) {
                try {
                    var s = r[a](o), u = s.value;
                } catch (e) {
                    return void t(e);
                }
                if (!s.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
            }
            return n("next");
        });
    };
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !r || "object" != typeof r && "function" != typeof r ? e : r;
}

function _inherits(e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    e.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _createClass = function() {
    function e(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(r, t, n) {
        return t && e(r.prototype, t), n && e(r, n), r;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _analyse = require("./../utils/analyse.js"), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.compact/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _lodash5 = require("./../npm/lodash.find/index.js"), _lodash6 = _interopRequireDefault(_lodash5), _lodash7 = require("./../npm/lodash.filter/index.js"), _lodash8 = _interopRequireDefault(_lodash7), _LuckyUsersManager = require("./../libs/LuckyUsersManager.js"), _LuckyUsersManager2 = _interopRequireDefault(_LuckyUsersManager), _currency = require("./../npm/currency.js/dist/currency.min.js"), _currency2 = _interopRequireDefault(_currency), _PopupBox = require("./../components/PopupBox.js"), _PopupBox2 = _interopRequireDefault(_PopupBox), _tools = require("./../utils/tools.js"), Index = function(e) {
    function r() {
        var e, t, n, a;
        _classCallCheck(this, r);
        for (var o = arguments.length, s = Array(o), u = 0; u < o; u++) s[u] = arguments[u];
        return t = n = _possibleConstructorReturn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "中奖者名单",
            usingComponents: {
                Layout: "../components/Layout/Layout",
                BannerAd: "../components/BannerAd/BannerAd"
            }
        }, n.data = {
            navigationTitle: "中奖者名单",
            inited: !1,
            users: [],
            count: 0,
            hasMore: !0,
            loading: !1,
            showClose: !1,
            showedGroup: null,
            banner: null
        }, n.computed = {
            luckyUsersGroup: function() {
                var e = this;
                if (this.game && this.users && this.users.length > 0) {
                    var r = [], t = this.getUserPrize();
                    if (this.users.forEach(function(t) {
                        var n = (0, _lodash6.default)(e.game.prizes.data, function(e) {
                            return e.id === t.prize_id;
                        }) || e.game.prizes.data[0], a = (0, _lodash2.default)(n, "level", 1);
                        r[a] || (r[a] = {
                            prize: n.name,
                            count: n.count,
                            users: []
                        }), r[a].users.push(t);
                    }), t && r[t.level]) {
                        var n = r[t.level].users.sort(function(r, t) {
                            return r.id === e.$parent.globalData.userInfo.user_id ? -1 : t.id === e.$parent.globalData.userInfo.user_id ? 1 : 0;
                        });
                        r[t.level].users = n;
                    }
                    return r = (0, _lodash4.default)(r), r.forEach(function(r) {
                        var t = r.users, n = [];
                        t.forEach(function(r) {
                            var t = e.getGroupFromUserGroups(n, r);
                            t || (t = {
                                groupId: r.group_id,
                                users: []
                            }, n.push(t)), t.users.push(r);
                        }), n.forEach(function(e) {
                            var r = [], t = [];
                            e.users.forEach(function(e) {
                                e.orig_lucky ? r.push(e) : t.push(e);
                            }), e.origins = r, e.others = t;
                        }), r.usergroups = n;
                    }), console.log(r), r;
                }
                return [];
            }
        }, n.components = {
            PopupBox: _PopupBox2.default
        }, n.methods = {
            showGroup: function(e) {
                this.$broadcast("PopupBoxShow"), console.log("show group", e), this.showedGroup = e;
            },
            loadMore: function() {
                function e() {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!this.hasMore || this.gameUsersManager.isLoading) {
                                e.next = 12;
                                break;
                            }
                            return this.loading = !0, e.prev = 2, e.next = 5, this.gameUsersManager.load();

                          case 5:
                            return e.prev = 5, this.loading = !1, e.finish(5);

                          case 8:
                            this.users = this.gameUsersManager.getData(), this.hasMore = !this.gameUsersManager.isLoadEnd, 
                            this.count = this.gameUsersManager.count, this.$apply();

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 2, , 5, 8 ] ]);
                }));
                return e;
            }()
        }, a = t, _possibleConstructorReturn(n, a);
    }
    return _inherits(r, e), _createClass(r, [ {
        key: "getGroupFromUserGroups",
        value: function(e, r) {
            return r.group_id ? (0, _lodash6.default)(e, function(e) {
                return e.groupId === r.group_id;
            }) : null;
        }
    }, {
        key: "getUserPrize",
        value: function() {
            var e = this, r = (0, _lodash2.default)(this.game, "myPrize", null);
            if (r) return r.displayAmount = (0, _currency2.default)(r.amount).multiply(.01).format(), 
            r;
            try {
                var t = function() {
                    for (var r = (0, _lodash2.default)(e.game, "lucky_users.data", []), t = null, n = 0, a = r.length; n < a; n++) if (t = r[n], 
                    t.id === (0, _lodash2.default)(e.$parent.globalData, "userInfo.user_id", "")) {
                        var o = (0, _lodash8.default)((0, _lodash2.default)(e.game, "prizes.data", []), function(e) {
                            return e.id === t.prize_id;
                        });
                        if (o.length > 0) {
                            var s = o[0];
                            return s.displayAmount = (0, _currency2.default)(s.amount).multiply(.01).format(), 
                            {
                                v: s
                            };
                        }
                    }
                    return {
                        v: null
                    };
                }();
                if ("object" === (void 0 === t ? "undefined" : _typeof(t))) return t.v;
            } catch (e) {
                return console.log(e), null;
            }
        }
    }, {
        key: "initPage",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.gameUsersManager = new _LuckyUsersManager2.default(this.game.id), e.next = 3, 
                        this.gameUsersManager.refresh();

                      case 3:
                        this.users = this.gameUsersManager.getData(), this.hasMore = !this.gameUsersManager.isLoadEnd, 
                        this.count = this.gameUsersManager.count;

                      case 6:
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
            this.inited = !1, this.users = [], this.banner = null;
        }
    }, {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("winnerusers");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.inited = !1, e.prev = 1, this.game = _GameManager2.default.temp("game"), 
                        this.game) {
                            e.next = 5;
                            break;
                        }
                        throw new Error("miss game");

                      case 5:
                        return e.next = 7, this.initPage();

                      case 7:
                        this.banner = (0, _tools.randomBanner)(this.$parent.globalData.bannerAds.winnerusers), 
                        e.next = 14;
                        break;

                      case 10:
                        return e.prev = 10, e.t0 = e.catch(1), wx.showToast({
                            title: "加载失败",
                            icon: "none",
                            duration: 1e3
                        }), e.abrupt("return", setTimeout(function() {
                            wx.navigateBack();
                        }, 1e3));

                      case 14:
                        this.inited = !0, this.$apply();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 10 ] ]);
            }));
            return e;
        }()
    } ]), r;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/winnerusers"));