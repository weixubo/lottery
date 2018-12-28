function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, s) {
                try {
                    var i = t[a](s), o = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
            }
            return n("next");
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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _GameUsersManager = require("./../libs/GameUsersManager.js"), _GameUsersManager2 = _interopRequireDefault(_GameUsersManager), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _analyse = require("./../utils/analyse.js"), _tools = require("./../utils/tools.js"), _promiseFix = require("./../utils/promiseFix.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "抽奖参与用户",
            usingComponents: {
                Layout: "../components/Layout/Layout",
                BannerAd: "../components/BannerAd/BannerAd"
            }
        }, n.data = {
            navigationTitle: "抽奖参与用户",
            inited: !1,
            users: [],
            count: 0,
            hasMore: !0,
            loading: !1,
            userFlex: "flex: 0 0 10%;",
            shouldHideAd: !1,
            banner: null,
            imageSize: 96
        }, n.computed = {}, n.methods = {
            loadMore: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
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
                            this.users = this.getUsers(), this.hasMore = !this.gameUsersManager.isLoadEnd, this.count = this.gameUsersManager.count, 
                            this.$apply();

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 2, , 5, 8 ] ]);
                }));
                return e;
            }()
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "initPage",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.gameUsersManager = new _GameUsersManager2.default(t), this.id = t, e.next = 4, 
                        this.gameUsersManager.refresh();

                      case 4:
                        this.users = this.getUsers(), this.hasMore = !this.gameUsersManager.isLoadEnd, this.count = this.gameUsersManager.count, 
                        r = _GameManager2.default.temp("users_game"), r && r.id === t && !r.is_official && r.is_payed && (this.shouldHideAd = !0);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getUsers",
        value: function() {
            var e = _GameManager2.default.temp(this.id + "_currentuser");
            return console.log("user", e), e ? [ e ].concat(this.gameUsersManager.getData().filter(function(t) {
                return t.id !== e.id;
            })) : this.gameUsersManager.getData();
        }
    }, {
        key: "onUnload",
        value: function() {
            this.inited = !1, this.users = [], this.id = null, this.banner = null;
        }
    }, {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("users");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.inited = !1, e.prev = 1, e.next = 4, (0, _promiseFix.getNetworkType)();

                      case 4:
                        r = e.sent, "wifi" === r && (this.imageSize = 132), e.next = 10;
                        break;

                      case 8:
                        e.prev = 8, e.t0 = e.catch(1);

                      case 10:
                        return e.prev = 10, e.next = 13, this.initPage(t.id);

                      case 13:
                        return this.banner = (0, _tools.randomBanner)(this.$parent.globalData.bannerAds.users), 
                        e.next = 16, this.$parent.systemInfo();

                      case 16:
                        n = e.sent, this.userFlex = "flex: 0 0 " + Math.floor(n.windowWidth / 37) + "%", 
                        e.next = 24;
                        break;

                      case 20:
                        return e.prev = 20, e.t1 = e.catch(10), wx.showToast({
                            title: "加载失败",
                            icon: "none",
                            duration: 1e3
                        }), e.abrupt("return", setTimeout(function() {
                            wx.navigateBack();
                        }, 1e3));

                      case 24:
                        this.inited = !0, this.$apply();

                      case 26:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 8 ], [ 10, 20 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/users"));