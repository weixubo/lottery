function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, i) {
                try {
                    var o = t[a](i), s = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
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
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _FormIdAction = require("./../components/FormIdAction.js"), _FormIdAction2 = _interopRequireDefault(_FormIdAction), _game2 = require("./../services/game.js"), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _tools = require("./../utils/tools.js"), _Finger = require("./../components/Finger.js"), _Finger2 = _interopRequireDefault(_Finger), defaultUser = {
    avatar: "https://cdn.readhub.cn/mina/lottery/icn-waiting-avatar@3x.png",
    nick_name: "待组队",
    showType: "default"
}, Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "组队邀请",
            usingComponents: {
                LotteryRichText: "../components/LotteryRichText/LotteryRichText",
                LazyImage: "../components/LazyImage/LazyImage",
                Layout: "../components/Layout/Layout",
                NormalLottery: "../components/NormalLottery/NormalLottery"
            }
        }, n.data = {
            navigationTitle: "组队邀请",
            inited: !1,
            fromShare: !1,
            prevGame: null,
            prizeNameStyle: "",
            contentStyle: "",
            game: null,
            group: null,
            needGetUserInfo: !0,
            groupJoinOptAnimationData: {},
            groupConnectAnimationData: {},
            groupGroupOptAnimationData: {},
            failToJoinEndGame: !1,
            animateStep: "animate-0",
            bgAnimationData: {},
            btnAnimationData: {},
            condition_error: "",
            guideShow: !1,
            guideAnimationData: {},
            forceHideGetUserInfo: !1
        }, n.events = {
            onTouchStart: function() {
                n._posY = 0, n._posX = 0;
            },
            onPressMove: function(e) {
                var t = n._posX + e.deltaX;
                0 !== t && (t > 0 ? t > 50 ? (n.slideGroupOptRight(), n._posX = 0) : n._posX = t : t < -50 ? (n.slideGroupOptLeft(), 
                n._posX = 0) : n._posX = t);
            },
            onTouchEnd: function() {
                n._posY = 0, n._posX = 0;
            }
        }, n.computed = {
            groupConnectStyle: function() {
                if (this.systemInfo && this.game) {
                    var e = (this.systemInfo.windowWidth - 110) / 2 - 50;
                    return this.game.is_participator ? "width: " + e + "px; left: 35px;" : "width: " + e + "px; left: 100%;";
                }
                return "";
            },
            joinOptStyle: function() {
                return this.systemInfo && this.group ? 1 === this.group.join_state ? "left: -90px;" : "left: " + (this.systemInfo.windowWidth - 110) / 2 + "px;" : "";
            },
            shouldHideShare: function() {
                var e = (0, _lodash2.default)(this, "group", null);
                return !!e && !((0, _lodash2.default)(e, "users.data", []).length < e.max_user_count);
            },
            groupParticipatorConnectStyle: function() {
                if (this.systemInfo && this.game) {
                    var e = (this.systemInfo.windowWidth - 110) / 2 - 50;
                    return "width: " + e + "px; left: " + (this.systemInfo.windowWidth - e - 35) + "px;";
                }
                return "";
            },
            groupParticipatorOptStyle: function() {
                return this.systemInfo && this.group ? "left: " + (this.systemInfo.windowWidth - 20) + "px;" : "";
            },
            groupOptStyle: function() {
                return this.systemInfo && this.group ? "left: " + (this.systemInfo.windowWidth - 110) / 2 + "px;" : "";
            },
            joinUsers: function() {
                var e = this;
                if (!this.game) return [];
                try {
                    if (this.game.is_participator) {
                        var t = this.game.users.data.slice(0, 6);
                        return [ {
                            avatar: this.$parent.globalData.userInfo.avatar
                        } ].concat(t.filter(function(t) {
                            return t.id !== e.$parent.globalData.userInfo.user_id;
                        }));
                    }
                    return this.game.users.data.slice(0, 7);
                } catch (e) {
                    return [];
                }
            },
            joinUserCount: function() {
                if (!this.game) return 0;
                try {
                    return this.game.user_count;
                } catch (e) {
                    return 0;
                }
            },
            errorMessage: function() {
                var e = (0, _lodash2.default)(this, "group.join_state", -1), t = "", r = (0, _lodash2.default)(this, "game.state", 0);
                return 2 === r ? t = "抽奖已结束" : -1 === r ? t = "抽奖已过期" : 2 === e ? t = "该队已满" : 3 === e ? t = "已参与组队，同一抽奖只能参队一次" : 4 === e && (t = "已参与该抽奖，不能同时参队"), 
                t;
            },
            groupUsers: function() {
                for (var e = (0, _lodash2.default)(this, "group.initiator_id", null), t = (0, _lodash2.default)(this, "group.max_user_count", 6), r = (0, 
                _lodash2.default)(this, "group.users.data", []).map(function(t) {
                    return t.id === e ? t.showType = "initiator" : t.showType = "part", t;
                }).sort(function(e, t) {
                    var r = 1, n = 1;
                    return "initiator" === e.showType && (r = 10), "initiator" === t.showType && (n = 10), 
                    n - r;
                }), n = [], a = r.length; a < t; a++) n.push(defaultUser);
                return r.concat(n);
            },
            canShare: function() {
                return this.isInitiator();
            },
            maxUserCount: function() {
                return (0, _lodash2.default)(this, "group.max_user_count", 6);
            }
        }, n.$repeat = {}, n.$props = {
            Finger: {}
        }, n.$events = {}, n.components = {
            FormIdAction: _FormIdAction2.default,
            Finger: _Finger2.default
        }, n.methods = {
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
            goToUsers: function() {
                this.game.is_participator && _GameManager2.default.temp(this.game.id + "_currentuser", {
                    id: this.$parent.globalData.userInfo.user_id,
                    avatar: this.$parent.globalData.userInfo.avatar
                }), _wepy2.default.navigateTo({
                    url: "users?id=" + this.game.id
                });
            },
            goToGame: function(e) {
                "2" === e ? (0, _analyse2.default)("group_view", {
                    id: this.game.id
                }, "groupgame") : "3" === e && (0, _analyse2.default)("group_myown", {
                    id: this.game.id
                }, "groupgame"), wx.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + this.game.id
                });
            },
            goToIndex: function() {
                wx.switchTab({
                    url: "index"
                });
            },
            joinGroup: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, a, i = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (e.prev = 0, !this.isJoinGroup) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            return this.isJoinGroup = !0, r = wx.createAnimation({
                                timingFunction: "ease"
                            }), r.scale(1, 1).step({
                                duration: 200
                            }).scale(.9, .9).step({
                                duration: 100
                            }), this.animateStep = "animate-1", this.bgAnimationData = r.export(), this.$apply(), 
                            e.next = 11, new Promise(function(e) {
                                setTimeout(e, 300);
                            });

                          case 11:
                            return this.animateStep = "animate-2", this.$apply(), e.next = 15, (0, _game2.joinGroup)(this.group.id, t.detail.formId);

                          case 15:
                            n = {
                                avatar: this.$parent.globalData.userInfo.avatar,
                                id: this.$parent.globalData.userInfo.user_id,
                                nick_name: this.$parent.globalData.userInfo.nick_name
                            }, this.game.users.data.push(n), this.group.users.data.push(n), this.group.join_state = 1, 
                            this.game.user_count = this.game.user_count + 1, this.game.is_participator = !0, 
                            this.$apply(), setTimeout(function() {
                                i.slideGroupOptLeft(), i.$apply();
                            }, 50), e.next = 30;
                            break;

                          case 25:
                            e.prev = 25, e.t0 = e.catch(0), console.error(e.t0), wx.showToast({
                                title: e.t0.message,
                                icon: "none"
                            }), this.onShow();

                          case 30:
                            return e.prev = 30, wx.hideLoading(), a = wx.createAnimation({
                                timingFunction: "ease"
                            }), a.scale(0, 0).step({
                                duration: 1
                            }), this.bgAnimationData = a.export(), this.animateStep = "animate-0", this.isJoinGroup = !1, 
                            this.$apply(), (0, _analyse2.default)("group_join", {
                                id: this.game.id
                            }, "groupgame"), e.finish(30);

                          case 40:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, 25, 30, 40 ] ]);
                }));
                return e;
            }()
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onUnload",
        value: function() {
            this.inited = !1, this.messageImage = "";
        }
    }, {
        key: "slideGroupOptRight",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.game.is_participator) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (!this.sliding) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        return this.sliding = !0, t = (this.systemInfo.windowWidth - 110) / 2, r = this.systemInfo.windowWidth / 2 + 55 + 15, 
                        n = wx.createAnimation({}), a = wx.createAnimation({}), i = wx.createAnimation({}), 
                        n.left(t).step({
                            duration: 400
                        }), a.left(r).step({
                            duration: 350,
                            timingFunction: "ease-in-out"
                        }), i.left(this.systemInfo.windowWidth - 20).step({
                            duration: 200
                        }), this.groupJoinOptAnimationData = n.export(), this.groupConnectAnimationData = a.export(), 
                        this.groupGroupOptAnimationData = i.export(), e.next = 18, new Promise(function(e) {
                            setTimeout(e, 400);
                        });

                      case 18:
                        this.sliding = !1;

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "slideGroupOptLeft",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.game.is_participator) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (!this.sliding) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        return this.sliding = !0, t = (this.systemInfo.windowWidth - 110) / 2, r = wx.createAnimation({}), 
                        n = wx.createAnimation({}), a = wx.createAnimation({}), r.left(-90).step({
                            duration: 200
                        }), n.left(35).step({
                            duration: 350,
                            timingFunction: "ease-in-out"
                        }), a.left(t).step({
                            duration: 400
                        }), this.groupJoinOptAnimationData = r.export(), this.groupConnectAnimationData = n.export(), 
                        this.groupGroupOptAnimationData = a.export(), e.next = 17, new Promise(function(e) {
                            setTimeout(e, 400);
                        });

                      case 17:
                        this.sliding = !1, console.log(123);

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "startGroupInitiatorAnimate",
        value: function() {
            var e = this;
            setTimeout(function() {
                e.showGuide();
            }, 600);
        }
    }, {
        key: "showGuide",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.guideShow = !0, this.$apply(), t = wx.createAnimation({}), t.opacity(1).step({
                            duration: 500
                        }), this.guideAnimationData = t.export(), this.$apply(), e.next = 8, new Promise(function(e) {
                            setTimeout(e, 3e3);
                        });

                      case 8:
                        return t.opacity(0).step({
                            duration: 200
                        }), this.guideAnimationData = t.export(), this.$apply(), e.next = 13, new Promise(function(e) {
                            setTimeout(e, 200);
                        });

                      case 13:
                        this.guideShow = !1, this.$apply();

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "initShareMessageImage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, this.messageImage = "", !(t = (0, _lodash2.default)(this.game, "group_share_image.url", ""))) {
                            e.next = 6;
                            break;
                        }
                        return this.messageImage = t, e.abrupt("return");

                      case 6:
                        return e.next = 8, this.$parent.systemInfo();

                      case 8:
                        if (r = e.sent, n = "", a = this.game.id, !((0, _tools.versionCompare)(r.SDKVersion, "1.5.0") >= 0)) {
                            e.next = 24;
                            break;
                        }
                        return e.prev = 12, e.next = 15, (0, _game2.shareGroupMessageImage)(this.game.id);

                      case 15:
                        if (i = e.sent, this.game.id === a) {
                            e.next = 18;
                            break;
                        }
                        return e.abrupt("return");

                      case 18:
                        n = i.data.url, e.next = 24;
                        break;

                      case 21:
                        e.prev = 21, e.t0 = e.catch(12), console.error(e.t0);

                      case 24:
                        this.messageImage = n, e.next = 30;
                        break;

                      case 27:
                        e.prev = 27, e.t1 = e.catch(0), console.error(e.t1);

                      case 30:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 27 ], [ 12, 21 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = this.messageImage || (0, _lodash2.default)(this, "game.group_share_image.url"), t = (0, 
            _lodash2.default)(this, "group.max_user_count", 6) - (0, _lodash2.default)(this, "group.users.meta.count", 1), r = "仅剩 " + t + " 个名额，我需要你一起组队抽奖";
            return e ? {
                imageUrl: e,
                title: r,
                path: "/pages/groupgamefix?id=" + this.group.id + "&share=1",
                success: function(e) {
                    console.log("share success", e);
                },
                fail: function() {
                    console.log("share error");
                }
            } : {
                title: r,
                path: "/pages/groupgamefix?id=" + this.group.id + "&share=1",
                success: function(e) {
                    console.log("share success", e);
                },
                fail: function() {
                    console.log("share error");
                }
            };
        }
    }, {
        key: "isInitiator",
        value: function() {
            return (0, _lodash2.default)(this, "$parent.globalData.userInfo.user_id", -1) === (0, 
            _lodash2.default)(this, "group.initiator_id", "null");
        }
    }, {
        key: "resetAnimate",
        value: function() {
            this.bgAnimationData = {}, this.btnAnimationData = {}, this.failToJoinEndGame = !1, 
            this.animateStep = "animate-0", this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, this.$parent.appInit();

                      case 3:
                        return e.next = 5, this.$parent.needUpdateUserInfo();

                      case 5:
                        return this.needGetUserInfo = e.sent, e.next = 8, this.$parent.systemInfo();

                      case 8:
                        if (t = e.sent, this.systemInfo = t, t.statusBarHeight ? this.contentStyle = "min-height: " + (t.screenHeight - t.statusBarHeight - 44) + "px" : this.contentStyle = "min-height: " + (t.screenHeight - 64) + "px", 
                        this.prizeNameStyle = "width: " + (t.windowWidth - 135) + "px;", this.id) {
                            e.next = 14;
                            break;
                        }
                        throw new Error("组队不存在");

                      case 14:
                        return e.next = 16, (0, _game2.getGroup)(this.id);

                      case 16:
                        if (r = e.sent, n = r.data) {
                            e.next = 20;
                            break;
                        }
                        throw new Error("组队不存在");

                      case 20:
                        if (this.group = n, !this.fromShare) {
                            e.next = 31;
                            break;
                        }
                        return e.next = 24, _GameManager2.default.fetchGame(n.lottery_id);

                      case 24:
                        if (a = e.sent) {
                            e.next = 27;
                            break;
                        }
                        throw new Error("抽奖不存在");

                      case 27:
                        this.game = a, this.condition_error = a.condition_error, e.next = 39;
                        break;

                      case 31:
                        if ((i = _GameManager2.default.temp("game")) && i.id === n.lottery_id) {
                            e.next = 36;
                            break;
                        }
                        return e.next = 35, _GameManager2.default.fetchGame(n.lottery_id);

                      case 35:
                        i = e.sent;

                      case 36:
                        if (i) {
                            e.next = 38;
                            break;
                        }
                        throw new Error("抽奖不存在");

                      case 38:
                        this.game = i;

                      case 39:
                        this.prevGame = _GameManager2.default.previewGame(this.game, 2), this.isInitiator() && 2 !== this.game.state && -1 !== this.game.state ? _wepy2.default.showShareMenu({}) : _wepy2.default.hideShareMenu(), 
                        this.inited = !0, 0 === this.group.join_state && this.startGroupInitiatorAnimate(), 
                        this.$apply(), this.initShareMessageImage(), e.next = 51;
                        break;

                      case 47:
                        e.prev = 47, e.t0 = e.catch(0), wx.showToast({
                            title: e.t0.message,
                            icon: "none"
                        }), console.error(e.t0);

                      case 51:
                        (0, _analyse.screenView)("groupgame");

                      case 52:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 47 ] ]);
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
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.messageImage = "", this.fromShare = !!t.share, this.id = t.id;
                        try {
                            r = decodeURIComponent(t.scene), n = {}, r.split("&").forEach(function(e) {
                                var t = e.split("=");
                                n[t[0]] = t[1];
                            }), n.id && (this.id = n.id), n.share && (this.fromShare = !0);
                        } catch (e) {}

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/groupgamefix"));