function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function a(n, o) {
                try {
                    var u = r[n](o), i = u.value;
                } catch (e) {
                    return void t(e);
                }
                if (!u.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
            }
            return a("next");
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

var _createClass = function() {
    function e(e, r) {
        for (var t = 0; t < r.length; t++) {
            var a = r[t];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(r, t, a) {
        return t && e(r.prototype, t), a && e(r, a), r;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _PublicSquareManager = require("./../libs/PublicSquareManager.js"), _PublicSquareManager2 = _interopRequireDefault(_PublicSquareManager), _analyse = require("./../utils/analyse.js"), Index = function(e) {
    function r() {
        var e, t, a, n;
        _classCallCheck(this, r);
        for (var o = arguments.length, u = Array(o), i = 0; i < o; i++) u[i] = arguments[i];
        return t = a = _possibleConstructorReturn(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(u))), 
        a.config = {
            navigationBarTitleText: "自助福利",
            backgroundTextStyle: "dark",
            onReachBottomDistance: 260,
            usingComponents: {
                LazyImage: "../components/LazyImage/LazyImage",
                Layout: "../components/Layout/Layout",
                NormalSquareLottery: "../components/NormalSquareLottery/NormalSquareLottery"
            }
        }, a.data = {
            inited: !1,
            squareGames: [],
            hasMoreSquareGames: !1,
            squareLoading: !1,
            needGetUserInfo: !0,
            navigationTitle: "自助福利",
            forceHideGetUserInfo: !1
        }, a.methods = {
            goToLottery: function(e) {
                var r = e.detail;
                wx.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + r.id
                });
            },
            getUserInfo: function() {
                function e(e) {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, wx.showLoading(), e.next = 4, this.$parent.updateUserInfo(r.detail);

                          case 4:
                            return e.next = 6, this.$parent.updateWxWorkUserInfo();

                          case 6:
                            this.forceHideGetUserInfo = !0, this.$apply();

                          case 8:
                            return e.prev = 8, wx.hideLoading(), e.finish(8);

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, , 8, 11 ] ]);
                }));
                return e;
            }(),
            loadMore: function() {
                function e() {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            this._loadMore();

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, n = t, _possibleConstructorReturn(a, n);
    }
    return _inherits(r, e), _createClass(r, [ {
        key: "loadSquareList",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (0 !== this.squareGames.length) {
                            e.next = 9;
                            break;
                        }
                        return e.prev = 1, e.next = 4, _PublicSquareManager2.default.refresh();

                      case 4:
                        e.next = 9;
                        break;

                      case 6:
                        e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);

                      case 9:
                        this.squareGames = _PublicSquareManager2.default.getData().slice(10), this.hasMoreSquareGames = !_PublicSquareManager2.default.isLoadEnd;

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 6 ] ]);
            }));
            return e;
        }()
    }, {
        key: "_loadMore",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.hasMoreSquareGames || _PublicSquareManager2.default.isLoading) {
                            e.next = 11;
                            break;
                        }
                        return this.squareLoading = !0, e.prev = 2, e.next = 5, _PublicSquareManager2.default.load();

                      case 5:
                        this.squareGames = _PublicSquareManager2.default.getData().slice(10), this.hasMoreSquareGames = !_PublicSquareManager2.default.isLoadEnd;

                      case 7:
                        return e.prev = 7, this.squareLoading = !1, e.finish(7);

                      case 10:
                        this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 2, , 7, 10 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onReachBottom",
        value: function() {
            this._loadMore();
        }
    }, {
        key: "initPage",
        value: function() {
            function e() {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = _PublicSquareManager2.default.getData().slice(10), 0 !== r.length) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 4, _PublicSquareManager2.default.load();

                      case 4:
                        r = _PublicSquareManager2.default.getData().slice(10);

                      case 5:
                        this.squareGames = r, this.hasMoreSquareGames = !_PublicSquareManager2.default.isLoadEnd;

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("squaregames");
            var e = _PublicSquareManager2.default.getData().slice(10);
            e.length > 0 && (this.squareGames = e, this.$apply());
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.inited = !1, e.next = 3, this.$parent.appInit();

                      case 3:
                        return e.next = 5, this.$parent.needUpdateUserInfo();

                      case 5:
                        return this.needGetUserInfo = e.sent, e.next = 8, this.initPage();

                      case 8:
                        this.inited = !0, this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), r;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/squaregames"));