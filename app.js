
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var s = t[a](o), u = s.value;
                } catch (e) {
                    return void r(e);
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
}(), _wepy = require("./npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

require("./npm/wepy-async-function/index.js");
import regeneratorRuntime from 'utils/regenerator-runtime/runtime';

var _chou = require("./services/chou.js"), _tools = require("./utils/tools.js"), _analyse = require("./utils/analyse.js"), _config = require("./config.js"), _config2 = _interopRequireDefault(_config), _promiseFix = require("./utils/promiseFix.js"), _wxwork = require("./services/wxwork.js"), _lodash = require("./npm/lodash.assign/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./npm/lodash.get/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _sentry = require("./utils/sentry.js"), _sentry2 = _interopRequireDefault(_sentry), _default = function(e) {
    function t() {
        _classCallCheck(this, t);
        var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.config = {
            pages: [ "pages/index", "pages/create", "pages/error", "pages/game", "pages/contact", "pages/prize", "pages/shareimage", "pages/users", "pages/crop", "pages/gameroom", "pages/profile", "pages/redirectCreate", "pages/generateimage", "pages/officialshare", "pages/usergames", "pages/winnerusers", "pages/groupgame", "pages/groupgamefix", "pages/besponsor", "pages/textarea", "pages/createwithfun", "pages/editor", "pages/sponsorcontact", "pages/squaregames", "pages/redirectback", "pages/selfsubmit", "pages/redemptioncodes", "pages/webview", "pages/me/more/more", "pages/me/points/points" ],
            subPackages: [ {
                root: "pages/square/",
                pages: [ "pages/selfsubmit", "pages/squaregame", "pages/createsquaregame", "pages/refund" ]
            }, {
                root: "pages/uncommonly/",
                pages: [ "pages/minasuggest", "pages/question", "pages/account", "pages/transactionrecord", "pages/proguide", "pages/selfsubmitguide", "pages/homepage" ]
            }, {
                root: "pages/lottery/",
                pages: [ "pages/game", "pages/pay", "pages/promanager", "pages/certificate", "pages/certificateform" ]
            }, {
                root: "pages/feedback",
                pages: [ "pages/evaluation", "pages/complaint", "pages/complaintdetail", "pages/manager", "pages/usercomplaint", "pages/complaintreplay" ]
            }, {
                root: "pages/shop/",
                pages: [ "pages/list", "pages/item", "pages/suggest" ]
            } ],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTitleText: "抽奖助手",
                navigationBarTextStyle: "black",
                backgroundColor: "#f0f0f0",
                navigationStyle: "custom"
            },
            tabBar: {
                color: "#f0f0f0",
                selectedColor: "#f0f0f0",
                backgroundColor: "#f0f0f0",
                borderStyle: "white",
                list: [ {
                    pagePath: "pages/index",
                    text: "",
                    iconPath: "/images/cut-20.png",
                    selectedIconPath: "/images/cut-20.png"
                }, {
                    pagePath: "pages/redirectCreate",
                    text: "",
                    iconPath: "/images/cut-20.png",
                    selectedIconPath: "/images/cut-20.png"
                }, {
                    pagePath: "pages/profile",
                    text: "",
                    iconPath: "/images/cut-20.png",
                    selectedIconPath: "/images/cut-20.png"
                } ]
            },
            functionalPages: !0,
            networkTimeout: {
                request: 1e4,
                uploadFile: 15e3,
                downloadFile: 15e3,
                connectSocket: 6e4
            },
            navigateToMiniProgramAppIdList: [ "wx5b768b801d27f022", "wxa344448166586158", "wxa827b8816b0c9d87", "wxd0dd83106bcb1b64", "wxc3a8c0b476dfa08c", "wx4ea9ad59b3439641", "wxd20d6ec9f2d58b18", "wx208098f03b358302", "wxbb4bed34eb6ff304", "wx5d00ed1a6a62ee24" ]
        }, e.globalData = {
            userInfo: {},
            error: null,
            animatedGames: [],
            pageInfo: {},
            inited: !1,
            appConfig: null,
            prevTab: "index",
            hasUpdate: !1,
            canUpdate: !1,
            userProfile: {
                phone_authorized: !1
            },
            profile: {
                balance: 0,
                square_unused_count: 0,
                unused_square_ids: [],
                all_count: 0,
                create_count: 0,
                lucky_count: 0,
                show_square: !0
            },
            themeFunnyConfig: {
                prize_list: [ {
                    name: "一起吃饭",
                    default_count: 1
                }, {
                    name: "一起喝酒",
                    default_count: 2
                }, {
                    name: "一起上学",
                    default_count: 2
                }, {
                    name: "一起上班",
                    default_count: 1
                } ],
                default_index: [ 0, 1, 2 ]
            },
            bannerAds: {},
            editorHtmlContent: "",
            textareaOpen: !1
        }, e.use("requestfix"), e.use("promisify"), e;
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "systemInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.globalData.systemInfo) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 4, _wepy2.default.getSystemInfo();

                      case 4:
                        t = e.sent, this.globalData.systemInfo = t;

                      case 6:
                        return e.abrupt("return", t);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "isAndroid",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.globalData.systemInfo) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 4, _wepy2.default.getSystemInfo();

                      case 4:
                        t = e.sent, this.globalData.systemInfo = t;

                      case 6:
                        return e.abrupt("return", (0, _tools.isAndroid)(t));

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "isIphoneX",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.globalData.systemInfo) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 4, _wepy2.default.getSystemInfo();

                      case 4:
                        t = e.sent, this.globalData.systemInfo = t;

                      case 6:
                        return e.abrupt("return", (0, _tools.isIphoneX)(t));

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "isWxWork",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.globalData.systemInfo) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 4, _wepy2.default.getSystemInfo();

                      case 4:
                        t = e.sent, this.globalData.systemInfo = t;

                      case 6:
                        return e.abrupt("return", (0, _tools.isWxWork)(t));

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "supportCustomNavigationBar",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.globalData.systemInfo) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 4, _wepy2.default.getSystemInfo();

                      case 4:
                        t = e.sent, this.globalData.systemInfo = t;

                      case 6:
                        return e.abrupt("return", (0, _tools.supportCustomNavigationBar)(t));

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "pixelRatio",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.globalData.systemInfo) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 4, _wepy2.default.getSystemInfo();

                      case 4:
                        t = e.sent, this.globalData.systemInfo = t;

                      case 6:
                        return e.abrupt("return", t.pixelRatio);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "hasPhoneNumber",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", (0, _lodash4.default)(this, "globalData.userProfile.phone_authorized", !1));

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "auth",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, new Promise(function(e, r) {
                            if (!wx.authorize) return !0;
                            wx.authorize({
                                scope: t,
                                success: function() {
                                    e(!0);
                                },
                                fail: function() {
                                    e(!1);
                                }
                            });
                        });

                      case 2:
                        return r = e.sent, e.abrupt("return", r);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "removeUsedSquare",
        value: function(e) {
            var t = (0, _lodash4.default)(this, "globalData.profile.unused_square_ids", []), r = t.indexOf(e);
            r > -1 && this.globalData.profile.unused_square_ids.splice(r, 1);
        }
    }, {
        key: "needLogin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("check need login"), e.prev = 1, e.next = 4, _wepy2.default.getStorage({
                            key: "SESSION_NEW_1"
                        });

                      case 4:
                        return t = e.sent, e.next = 7, this.isWxWork();

                      case 7:
                        if (r = e.sent, console.log(t), t.data && t.data.token && !(new Date().getTime() - t.data.time > 432e6)) {
                            e.next = 11;
                            break;
                        }
                        return e.abrupt("return", !0);

                      case 11:
                        return e.next = 13, new Promise(function(e, t) {
                            r ? wx.qy.checkSession({
                                success: function(t) {
                                    console.log("wx.qy.checkSession", t), e(t);
                                },
                                fail: function(e) {
                                    t(e);
                                }
                            }) : wx.checkSession({
                                success: function(t) {
                                    e(t);
                                },
                                fail: function(e) {
                                    t(e);
                                }
                            });
                        });

                      case 13:
                        if (!r || this.globalData.wxWorkData) {
                            e.next = 15;
                            break;
                        }
                        return e.abrupt("return", !0);

                      case 15:
                        return e.abrupt("return", !1);

                      case 18:
                        return e.prev = 18, e.t0 = e.catch(1), console.error(e.t0), e.abrupt("return", !0);

                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 18 ] ]);
            }));
            return e;
        }()
    }, {
        key: "isStorageExist",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getStorage({
                            key: t
                        });

                      case 3:
                        return e.abrupt("return", !0);

                      case 6:
                        return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", !1);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 6 ] ]);
            }));
            return e;
        }()
    }, {
        key: "refreshToken",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, (0, _chou.refreshToken)();

                      case 2:
                        return t = e.sent.access_token, e.next = 5, _wepy2.default.setStorage({
                            key: "SESSION_NEW_1",
                            data: {
                                time: new Date().getTime(),
                                token: t
                            }
                        });

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "appLogin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, o, s, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, this.needLogin();

                      case 3:
                        if (!(t = e.sent)) {
                            e.next = 30;
                            break;
                        }
                        return console.log("wechat login"), e.next = 8, this.isWxWork();

                      case 8:
                        return r = e.sent, e.next = 11, new Promise(function(e, t) {
                            wx.login({
                                success: function(t) {
                                    e(t);
                                },
                                fail: function(e) {
                                    t(e);
                                }
                            });
                        });

                      case 11:
                        return n = e.sent, console.log("loginInfo", n), a = n.code, e.next = 16, (0, _chou.UserLogin)(a, r);

                      case 16:
                        return o = e.sent, console.log("access", o), e.next = 20, _wepy2.default.setStorage({
                            key: "SESSION_NEW_1",
                            data: {
                                time: new Date().getTime(),
                                token: o.access_token
                            }
                        });

                      case 20:
                        if (!r) {
                            e.next = 30;
                            break;
                        }
                        // return e.next = 23, new Promise(function(e, t) {
                        //     wx.qy.login({
                        //         success: function(t) {
                        //             console.log("wx.qy.login", t), e(t);
                        //         },
                        //         fail: function(e) {
                        //             t(e);
                        //         }
                        //     });
                        // });

                      case 23:
                        return s = e.sent, console.log("wxLoginInfo", s), e.next = 27, (0, _wxwork.login)(s.code);

                      case 27:
                        u = e.sent, this.globalData.wxWorkData = u.data, console.log(u);

                      case 30:
                        console.log("app login success"), e.next = 38;
                        break;

                      case 33:
                        throw e.prev = 33, e.t0 = e.catch(0), console.error(e.t0), e.t0.errorType = "network", 
                        e.t0;

                      case 38:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 33 ] ]);
            }));
            return e;
        }()
    }, {
        key: "getWechatLoginInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, new Promise(function(e, t) {
                            wx.login({
                                success: function(t) {
                                    e(t);
                                },
                                fail: function(t) {
                                    e({
                                        code: ""
                                    });
                                }
                            });
                        });

                      case 2:
                        return e.abrupt("return", e.sent);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "checkSessionExpired",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, console.log("check if session expired"), e.next = 4, this.isWxWork();

                      case 4:
                        return t = e.sent, e.next = 7, new Promise(function(e, r) {
                            t ? wx.qy.checkSession({
                                success: function(t) {
                                    console.log("session not expired"), e(!1);
                                },
                                fail: function(t) {
                                    console.log("session expired", t), e(!0);
                                }
                            }) : wx.checkSession({
                                success: function(t) {
                                    console.log("session not expired"), e(!1);
                                },
                                fail: function(t) {
                                    console.log("session expired", t), e(!0);
                                }
                            });
                        });

                      case 7:
                        return e.abrupt("return", e.sent);

                      case 10:
                        return e.prev = 10, e.t0 = e.catch(0), console.error(e.t0), e.abrupt("return", !0);

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 10 ] ]);
            }));
            return e;
        }()
    }, {
        key: "updateUserInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, a, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log(t), e.prev = 1, e.next = 4, this.checkSessionExpired();

                      case 4:
                        if (r = e.sent, n = "", !r) {
                            e.next = 21;
                            break;
                        }
                        return console.log("wx session expired, relogin ..."), e.next = 10, this.getWechatLoginInfo();

                      case 10:
                        return a = e.sent, n = a.code, e.prev = 12, e.next = 15, _wepy2.default.getUserInfo({
                            withCredentials: !0
                        });

                      case 15:
                        t = e.sent, e.next = 21;
                        break;

                      case 18:
                        e.prev = 18, e.t0 = e.catch(12), console.log(e.t0);

                      case 21:
                        if (t.encryptedData) {
                            e.next = 31;
                            break;
                        }
                        return e.prev = 22, e.next = 25, _wepy2.default.getUserInfo({
                            withCredentials: !0
                        });

                      case 25:
                        t = e.sent, e.next = 31;
                        break;

                      case 28:
                        e.prev = 28, e.t1 = e.catch(22), console.log(e.t1);

                      case 31:
                        return e.next = 33, this.isWxWork();

                      case 33:
                        return o = e.sent, e.next = 36, (0, _chou.UpdateUserInfo)(t.encryptedData, t.iv, o, n);

                      case 36:
                        if (s = e.sent, s.data) {
                            e.next = 39;
                            break;
                        }
                        throw new Error("update userInfo fail");

                      case 39:
                        return this.globalData.userInfo = s.data, e.next = 42, _wepy2.default.setStorage({
                            key: "USER_1",
                            data: s.data
                        });

                      case 42:
                        console.log("save user info", s.data), e.next = 48;
                        break;

                      case 45:
                        e.prev = 45, e.t2 = e.catch(1), console.error(e.t2);

                      case 48:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 45 ], [ 12, 18 ], [ 22, 28 ] ]);
            }));
            return e;
        }()
    }, {
        key: "updateWxWorkUserInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.isWxWork();

                      case 2:
                        if (t = e.sent, e.prev = 3, !t) {
                            e.next = 16;
                            break;
                        }
                        return console.log("update wxWork user info"), e.next = 8, new Promise(function(e, t) {
                            wx.qy.getEnterpriseUserInfo({
                                success: function(t) {
                                    e(t);
                                },
                                fail: function(e) {
                                    t(e);
                                }
                            });
                        });

                      case 8:
                        return r = e.sent, console.log("encypted data", r), e.next = 12, (0, _wxwork.updateProfile)(r.encryptedData, r.iv);

                      case 12:
                        n = e.sent.data, console.log("update success", n), this.globalData.wxWorkData || (this.globalData.wxWorkData = {}), 
                        (0, _lodash2.default)(this.globalData.wxWorkData, n);

                      case 16:
                        e.next = 21;
                        break;

                      case 18:
                        e.prev = 18, e.t0 = e.catch(3), console.error(e.t0);

                      case 21:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 3, 18 ] ]);
            }));
            return e;
        }()
    }, {
        key: "needUpdateUserInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, !this.notNeedUpdateUserInfo) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 3:
                        if (console.log("check need update user info"), this.globalData.userInfo && this.globalData.userInfo.nick_name) {
                            e.next = 7;
                            break;
                        }
                        return console.log("globalData.userInfo not found"), e.abrupt("return", !0);

                      case 7:
                        return t = void 0, e.prev = 8, e.next = 11, _wepy2.default.getUserInfo();

                      case 11:
                        t = e.sent, e.next = 18;
                        break;

                      case 14:
                        return e.prev = 14, e.t0 = e.catch(8), console.error(e.t0), e.abrupt("return", !0);

                      case 18:
                        if (console.log(t), t) {
                            e.next = 22;
                            break;
                        }
                        return console.log("getUserInfo fail"), e.abrupt("return", !0);

                      case 22:
                        return this.notNeedUpdateUserInfo = !0, e.abrupt("return", !1);

                      case 26:
                        return e.prev = 26, e.t1 = e.catch(0), console.error(e.t1), e.abrupt("return", !0);

                      case 30:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 26 ], [ 8, 14 ] ]);
            }));
            return e;
        }()
    }, {
        key: "updateUserInfoIfModified",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, console.log("updateUserInfoIfModified"), this.globalData.userInfo && this.globalData.userInfo.nick_name) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 4:
                        return t = void 0, e.prev = 5, e.next = 8, _wepy2.default.getUserInfo({
                            withCredentials: !0
                        });

                      case 8:
                        t = e.sent, e.next = 15;
                        break;

                      case 11:
                        return e.prev = 11, e.t0 = e.catch(5), console.error(e.t0), e.abrupt("return", !1);

                      case 15:
                        if (t) {
                            e.next = 18;
                            break;
                        }
                        return console.log("getUserInfo fail"), e.abrupt("return", !1);

                      case 18:
                        if (t.userInfo.avatarUrl !== this.globalData.userInfo.avatar || t.userInfo.nickName !== this.globalData.userInfo.nick_name) {
                            e.next = 21;
                            break;
                        }
                        return console.log("userInfo not changed"), e.abrupt("return", !1);

                      case 21:
                        return e.next = 23, this.isWxWork();

                      case 23:
                        return r = e.sent, e.next = 26, (0, _chou.UpdateUserInfo)(t.encryptedData, t.iv, r);

                      case 26:
                        if (n = e.sent, n.data) {
                            e.next = 29;
                            break;
                        }
                        throw new Error("update userInfo fail");

                      case 29:
                        return this.globalData.userInfo = (0, _lodash2.default)({}, this.globalData.userInfo, n.data), 
                        wx.setStorage({
                            key: "USER_1",
                            data: this.globalData.userInfo
                        }), e.abrupt("return", !0);

                      case 34:
                        return e.prev = 34, e.t1 = e.catch(0), console.error(e.t1), e.abrupt("return", !1);

                      case 38:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 34 ], [ 5, 11 ] ]);
            }));
            return e;
        }()
    }, {
        key: "getUserInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log("get user info"), (0, _lodash4.default)(this, "globalData.wxWorkData.name", "")) {
                            e.next = 4;
                            break;
                        }
                        return e.next = 4, this.updateWxWorkUserInfo();

                      case 4:
                        if (!this.globalData.userInfo || !this.globalData.userInfo.user_id) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return", this.globalData.userInfo);

                      case 6:
                        return e.prev = 6, e.next = 9, _wepy2.default.getStorage({
                            key: "USER_1"
                        });

                      case 9:
                        return t = e.sent, console.log("get userInfo from storage", t), e.abrupt("return", t.data);

                      case 14:
                        return e.prev = 14, e.t0 = e.catch(6), console.log(e.t0), e.abrupt("return", {});

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 6, 14 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.globalData.pageInfo = t;

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {
            this.saveAnimatedGamesToCache();
        }
    }, {
        key: "onError",
        value: function(e) {
            console.error("app-error: " + e);
        }
    }, {
        key: "fetchConfig",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, console.log("fetch app config"), e.next = 4, (0, _chou.getAppConfig)();

                      case 4:
                        return t = e.sent, this.globalData.appConfig = t.data, t.data.theme_funny_config && (this.globalData.themeFunnyConfig = t.data.theme_funny_config), 
                        t.data.banner_ads && (this.globalData.bannerAds = t.data.banner_ads), console.log("fetch app config success", t.data), 
                        this.configLoaded = !0, e.abrupt("return", t);

                      case 13:
                        e.prev = 13, e.t0 = e.catch(0), this.configLoaded = !1, console.error(e.t0);

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 13 ] ]);
            }));
            return e;
        }()
    }, {
        key: "fetchThemeFunnyConfig",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("fetch theme funny config"), e.prev = 1, e.next = 4, (0, _chou.getThemeFunnyConfig)();

                      case 4:
                        t = e.sent, this.globalData.themeFunnyConfig = t.data, console.log("fetch theme funny config success", t.data), 
                        e.next = 12;
                        break;

                      case 9:
                        e.prev = 9, e.t0 = e.catch(1), console.error(e.t0);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 9 ] ]);
            }));
            return e;
        }()
    }, {
        key: "fetchBannerAds",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("fetch banner ads"), e.prev = 1, e.next = 4, (0, _chou.bannerAds)();

                      case 4:
                        t = e.sent, this.globalData.bannerAds = t.data || {}, console.log("fetch banner ads success", t.data), 
                        e.next = 13;
                        break;

                      case 9:
                        e.prev = 9, e.t0 = e.catch(1), this.globalData.bannerAds = {}, console.error(e.t0);

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 9 ] ]);
            }));
            return e;
        }()
    }, {
        key: "shelve",
        value: function(e) {
            return (0, _lodash4.default)(this, "globalData.appConfig.unshelve_funcs", []).indexOf(e) > -1;
        }
    }, {
        key: "avaliable",
        value: function(e) {
            return -1 === (0, _lodash4.default)(this, "globalData.appConfig.invisible_funcs", []).indexOf(e);
        }
    }, {
        key: "isGroupNeedAnimate",
        value: function(e) {
            var t = -1 === (0, _lodash4.default)(this, "globalData.animatedGroups", []).indexOf(e);
            return t && (this.globalData.animatedGroups.push(e), this.saveAnimatedGroupsToCache()), 
            t;
        }
    }, {
        key: "loadAnimatedGroupsCache",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getStorage({
                            key: "AnimatedGroupCache"
                        });

                      case 3:
                        return t = e.sent, console.log("AnimatedGroupCache", t.data), e.abrupt("return", t.data);

                      case 8:
                        return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", []);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 8 ] ]);
            }));
            return e;
        }()
    }, {
        key: "saveAnimatedGroupsToCache",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, console.log("save AnimatedGroupCache", this.globalData.animatedGroups), 
                        e.next = 4, _wepy2.default.setStorage({
                            key: "AnimatedGroupCache",
                            data: this.globalData.animatedGroups.slice(-10)
                        });

                      case 4:
                        e.next = 9;
                        break;

                      case 6:
                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 6 ] ]);
            }));
            return e;
        }()
    }, {
        key: "isGameNeedAnimate",
        value: function(e) {
            var t = -1 === (0, _lodash4.default)(this, "globalData.animatedGames", []).indexOf(e);
            return t && (this.globalData.animatedGames.push(e), this.saveAnimatedGamesToCache()), 
            t;
        }
    }, {
        key: "loadAnimatedGamesCache",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getStorage({
                            key: "AnimatedGameCache"
                        });

                      case 3:
                        return t = e.sent, console.log("AnimatedGameCache", t.data), e.abrupt("return", t.data);

                      case 8:
                        return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", []);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 8 ] ]);
            }));
            return e;
        }()
    }, {
        key: "saveAnimatedGamesToCache",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, (0, _lodash4.default)(this, "globalData.animatedGames", null)) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return console.log("save AnimatedGameCache", this.globalData.animatedGames), e.next = 6, 
                        _wepy2.default.setStorage({
                            key: "AnimatedGameCache",
                            data: this.globalData.animatedGames.slice(-50)
                        });

                      case 6:
                        e.next = 11;
                        break;

                      case 8:
                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 8 ] ]);
            }));
            return e;
        }()
    }, {
        key: "needShowGuide",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getStorage({
                            key: "GuideShow1"
                        });

                      case 3:
                        return e.abrupt("return", !1);

                      case 6:
                        return e.prev = 6, e.t0 = e.catch(0), _wepy2.default.setStorage({
                            key: "GuideShow1",
                            data: !0
                        }), e.abrupt("return", !0);

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 6 ] ]);
            }));
            return e;
        }()
    }, {
        key: "needShowGroupGuide",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getStorage({
                            key: "GuideShow2"
                        });

                      case 3:
                        return e.abrupt("return", !1);

                      case 6:
                        return e.prev = 6, e.t0 = e.catch(0), _wepy2.default.setStorage({
                            key: "GuideShow2",
                            data: !0
                        }), e.abrupt("return", !0);

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 6 ] ]);
            }));
            return e;
        }()
    }, {
        key: "isNotificationShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getStorage({
                            key: "appNotification"
                        });

                      case 3:
                        return e.abrupt("return", !1);

                      case 6:
                        return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", !0);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 6 ] ]);
            }));
            return e;
        }()
    }, {
        key: "hideNotification",
        value: function() {
            try {
                _wepy2.default.setStorage({
                    key: "appNotification",
                    data: !0
                });
            } catch (e) {}
        }
    }, {
        key: "firstShow",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getStorage({
                            key: t
                        });

                      case 3:
                        return e.abrupt("return", !1);

                      case 6:
                        return e.prev = 6, e.t0 = e.catch(0), _wepy2.default.setStorage({
                            key: t,
                            data: !0
                        }), e.abrupt("return", !0);

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 6 ] ]);
            }));
            return e;
        }()
    }, {
        key: "expireCache",
        value: function(e) {
            try {
                wx.setStorage({
                    key: e,
                    data: {
                        expireAt: new Date().getTime()
                    }
                });
            } catch (e) {}
        }
    }, {
        key: "checkCacheExpired",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getStorage({
                            key: t
                        });

                      case 3:
                        if (n = e.sent.data, !(new Date(n.expireAt) < new Date())) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return", !0);

                      case 8:
                        return e.abrupt("return", !1);

                      case 9:
                        e.next = 15;
                        break;

                      case 11:
                        return e.prev = 11, e.t0 = e.catch(0), _wepy2.default.setStorage({
                            key: t,
                            data: {
                                expireAt: new Date(r).getTime()
                            }
                        }), e.abrupt("return", !1);

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 11 ] ]);
            }));
            return e;
        }()
    }, {
        key: "checkSystem",
        value: function(e) {
            var t = e.system;
            try {
                var r = t.split(" ");
                "iOS" === r[0] && (0, _tools.versionCompare)(r[1], "9.0.0") < 0 && wx.showModal({
                    title: "警告",
                    content: "您的当前 iOS 系统版本为 " + r[1] + ", 为了正常使用小程序，请升级到最新的版本"
                });
            } catch (e) {}
        }
    }, {
        key: "onLaunch",
        value: function(e) {
            (0, _analyse.initTracker)(this), wx.hideTabBar && wx.hideTabBar(), e && e.scene && (0, 
            _analyse.appLaunchScene)(e.scene);
        }
    }, {
        key: "getUpdate",
        value: function() {
            var e = this;
            if (wx.getUpdateManager) {
                if (this.updateManager) return;
                console.log("start update"), this.updateManager = wx.getUpdateManager(), this.updateManager.onCheckForUpdate(function(t) {
                    e.globalData.hasUpdate = t.hasUpdate, console.log("check update: " + t.hasUpdate);
                }), this.updateManager.onUpdateReady(_asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.globalData.canUpdate = !0, console.log("update ready"), e.configLoaded) {
                                t.next = 5;
                                break;
                            }
                            return t.next = 5, e.fetchConfig();

                          case 5:
                            if (!((0, _tools.versionCompare)((0, _lodash4.default)(e, "globalData.appConfig.support_version", "") || "0.1.10", _config2.default.VERSION) > 0)) {
                                t.next = 11;
                                break;
                            }
                            return console.log("apply update"), wx.showToast({
                                title: "抽奖助手正在更新版本",
                                icon: "loading",
                                duration: 1500
                            }), t.next = 10, new Promise(function(e) {
                                setTimeout(e, 1500);
                            });

                          case 10:
                            e.updateManager.applyUpdate();

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))), this.updateManager.onUpdateFailed(function() {
                    console.log("update download fail"), e.globalData.canUpdate = !1;
                });
            }
        }
    }, {
        key: "downLoadImage",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("download image: " + t), e.next = 3, (0, _promiseFix.downLoadFile)(t);

                      case 3:
                        if (r = e.sent, r.tempFilePath && 404 !== r.statusCode) {
                            e.next = 6;
                            break;
                        }
                        throw new Error("download image " + t + " fail");

                      case 6:
                        return console.log("download image success: " + r.tempFilePath), e.abrupt("return", r.tempFilePath);

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "saveImageToPhotosAlbum",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.downLoadImage(t);

                      case 2:
                        return r = e.sent, e.next = 5, (0, _promiseFix.saveImageToPhotosAlbum)(r);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "updateUserProfile",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, console.log("fetch user profile"), e.next = 4, (0, _chou.UserProfile)();

                      case 4:
                        t = e.sent, this.globalData.profile = t.data, console.log("fetch user profile success", t.data), 
                        e.next = 12;
                        break;

                      case 9:
                        e.prev = 9, e.t0 = e.catch(0), console.error(e.t0);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 9 ] ]);
            }));
            return e;
        }()
    }, {
        key: "getUserProfile",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, (0, _chou.UserInfo)();

                      case 3:
                        if (t = e.sent, this.globalData.userProfile = t.data, this.globalData.userInfo && this.globalData.userInfo.avatar) {
                            e.next = 14;
                            break;
                        }
                        return this.globalData.userInfo = t.data, e.prev = 7, e.next = 10, _wepy2.default.setStorage({
                            key: "USER_1",
                            data: t.data
                        });

                      case 10:
                        e.next = 14;
                        break;

                      case 12:
                        e.prev = 12, e.t0 = e.catch(7);

                      case 14:
                        t.data.info && (this.globalData.profile = t.data.info), this.userProfileloaded = !0, 
                        e.next = 22;
                        break;

                      case 18:
                        e.prev = 18, e.t1 = e.catch(0), this.userProfileloaded = !1, console.error(e.t1);

                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 18 ], [ 7, 12 ] ]);
            }));
            return e;
        }()
    }, {
        key: "hasSafeArea",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.systemInfo();

                      case 2:
                        return t = e.sent, e.abrupt("return", (0, _tools.hasSafeArea)(t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "appInit",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log("app start init"), !this.globalData.inited) {
                            e.next = 9;
                            break;
                        }
                        if (this.userProfileloaded) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 5, this.getUserProfile();

                      case 5:
                        if (this.configLoaded) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 8, this.fetchConfig();

                      case 8:
                        return e.abrupt("return", !0);

                      case 9:
                        return e.prev = 9, e.next = 12, this.systemInfo();

                      case 12:
                        return t = e.sent, this.checkSystem(t), e.next = 16, this.appLogin();

                      case 16:
                        return e.prev = 16, e.next = 19, Promise.all([ this.fetchConfig(), this.getUserProfile() ]);

                      case 19:
                        e.next = 24;
                        break;

                      case 21:
                        e.prev = 21, e.t0 = e.catch(16), console.error(e.t0);

                      case 24:
                        return e.next = 26, this.getUserInfo();

                      case 26:
                        return r = e.sent, console.log("userInfo", r), n = (0, _analyse.initTracker)(this), 
                        r.user_id && (n.set("&uid", r.user_id), _sentry2.default.configureScope(function(e) {
                            e.setUser(r);
                        })), this.globalData.userInfo = r, e.next = 33, this.loadAnimatedGamesCache();

                      case 33:
                        return this.globalData.animatedGames = e.sent, e.next = 36, this.loadAnimatedGroupsCache();

                      case 36:
                        return this.globalData.animatedGroups = e.sent, this.globalData.inited = !0, e.next = 40, 
                        this.updateUserInfoIfModified();

                      case 40:
                        console.log("app inited"), e.next = 47;
                        break;

                      case 43:
                        throw e.prev = 43, e.t1 = e.catch(9), this.globalData.error = e.t1, e.t1;

                      case 47:
                        this.getUpdate();

                      case 48:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 9, 43 ], [ 16, 21 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: [ "createSelectorQuery" ]
}));