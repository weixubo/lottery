function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}

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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _currency = require("./../npm/currency.js/dist/currency.min.js"), _currency2 = _interopRequireDefault(_currency), _chou = require("./../services/chou.js"), _Badge = require("./../libs/Badge.js"), Badge = _interopRequireWildcard(_Badge), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "我的",
            usingComponents: {
                Layout: "../components/Layout/Layout",
                BottomNavigation: "../components/BottomNavigation/BottomNavigation"
            }
        }, r.data = {
            userProfileStyle: "",
            buttomNavigationActiveIndex: 1,
            navigationTitle: "我的",
            profile: {
                create_count: 0,
                lucky_count: 0,
                all_count: 0,
                balance: 0,
                unused_square_ids: []
            },
            needGetUserInfo: !0,
            showAccount: !0,
            showBadge: !1,
            forceHideGetUserInfo: !1,
            certificateName: "",
            animateStep: "",
            animated: !1,
            nocodeStyle: "",
            nocodeMainStyle: "",
            hideFollowBar: !1
        }, r.computed = {
            userBalance: function() {
                return (0, _currency2.default)(this.profile.balance).multiply(.01).format();
            },
            userInfo: function() {
                try {
                    return this.$parent.globalData.userInfo;
                } catch (e) {
                    return {};
                }
            }
        }, r.methods = {
            goToPoints: function() {
                wx.showToast({
                    title: "敬请期待",
                    icon: "success",
                    duration: 1e3
                });
            },
            closeFollowBar: function() {
                this.hideFollowBar = !0, this.$parent.expireCache("profileFollowBar");
            },
            onAnimateStart: function() {
                var e = this;
                this.animateStep || this.animated || (this.animateStep = "blur", this.animateTimer && clearTimeout(this.animateTimer), 
                setTimeout(function() {
                    e.animated = !0;
                }, 3e3));
            },
            onAnimateCancel: function() {
                var e = this;
                this.animated && this.animateStep && (this.animateStep = "", setTimeout(function() {
                    e.animated = !1, e.$apply();
                }, 2e3));
            },
            goToStore: function() {
                wx.navigateToMiniProgram({
                    appId: "wx208098f03b358302",
                    success: function(e) {
                        (0, _analyse2.default)("gotoStore");
                    }
                });
            },
            goToMore: function() {
                wx.navigateTo({
                    url: "/pages/me/more/more"
                });
            },
            getUserInfo: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, wx.showLoading(), e.next = 4, this.$parent.updateUserInfo(t.detail);

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
            goToCertificate: function() {
                wx.navigateTo({
                    url: "/pages/lottery/pages/certificate"
                });
            },
            goToProManager: function() {
                wx.navigateTo({
                    url: "/pages/lottery/pages/promanager"
                });
            },
            goToAutoSubmit: function() {
                wx.navigateTo({
                    url: "/pages/square/pages/selfsubmit"
                });
            },
            goToAccount: function() {
                wx.navigateTo({
                    url: "/pages/uncommonly/pages/account"
                });
            },
            goToMinaSuggest: function() {
                wx.navigateTo({
                    url: "/pages/uncommonly/pages/minasuggest"
                });
            },
            goToUserGames: function(e) {
                "all" === e ? (0, _analyse2.default)("my_all") : "initiator" === e ? (0, _analyse2.default)("my_initiator") : "lucky" === e && (0, 
                _analyse2.default)("my_win"), wx.navigateTo({
                    url: "usergames?filter=" + e
                });
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "loadData",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, (0, _chou.UserProfile)();

                      case 2:
                        t = e.sent, this.profile = t.data, this.$parent.globalData.profile = t.data, this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "saveAddress",
        value: function(e) {
            console.log(e);
        }
    }, {
        key: "initPage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, this.$parent.appInit();

                      case 3:
                        return this.showBadge = Badge.needShow((0, _lodash2.default)(this, "$parent.globalData.profile.new_complaint_message", ""), "profile"), 
                        Badge.showed((0, _lodash2.default)(this, "$parent.globalData.profile.new_complaint_message", ""), "profile"), 
                        e.next = 7, this.$parent.needUpdateUserInfo();

                      case 7:
                        return this.needGetUserInfo = e.sent, e.next = 10, this.$parent.systemInfo();

                      case 10:
                        return t = e.sent, e.next = 13, this.$parent.isIphoneX();

                      case 13:
                        return n = e.sent, r = t.screenHeight, e.next = 17, this.$parent.supportCustomNavigationBar();

                      case 17:
                        a = e.sent, a && (r -= n ? 64 : 44), this.userProfileStyle = "height: " + r + "px", 
                        this.profile = this.$parent.globalData.profile, this.loadData(), e.next = 27;
                        break;

                      case 24:
                        e.prev = 24, e.t0 = e.catch(0), console.error(e.t0);

                      case 27:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 24 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {
            this.animateTimer && (clearTimeout(this.animateTimer), this.animateTimer = null), 
            this.animateStep = "", this.animated = !1, this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            this.$parent.globalData.prevTab = "profile", this.certificateName = this.$parent.globalData.userProfile.certificate_name, 
            (0, _analyse.screenView)("profile"), this.initPage();
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$parent.systemInfo();

                      case 2:
                        return n = e.sent, this.nocodeStyle = "height: " + n.screenHeight + "px; overflow: hidden;", 
                        r = 20, n.statusBarHeight && (r = n.statusBarHeight), this.nocodeMainStyle = "padding-top: " + (64 + r) + "px;", 
                        e.next = 9, this.$parent.checkCacheExpired("profileFollowBar", (0, _moment2.default)().add(1, "days").toDate());

                      case 9:
                        this.hideFollowBar = e.sent, this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/profile"));