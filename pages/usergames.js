function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(s);
            }
            return a("next");
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
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _GamePreviewCard = require("./../components/GamePreviewCard.js"), _GamePreviewCard2 = _interopRequireDefault(_GamePreviewCard), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _chou = require("./../services/chou.js"), _game = require("./../services/game.js"), _GameChooseSheet = require("./../components/GameChooseSheet.js"), _GameChooseSheet2 = _interopRequireDefault(_GameChooseSheet), _analyse = require("./../utils/analyse.js"), Index = function(e) {
    function t() {
        var e, n, a, r, i = this;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), u = 0; u < o; u++) s[u] = arguments[u];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        a.config = {
            enablePullDownRefresh: !0,
            navigationBarTitleText: "我参与的",
            backgroundTextStyle: "dark",
            usingComponents: {
                LazyImage: "../components/LazyImage/LazyImage",
                Layout: "../components/Layout/Layout"
            }
        }, a.$repeat = {}, a.$props = {
            GPCPending: {
                "xmlns:v-bind": "",
                "v-bind:items.sync": "pendingGames"
            },
            GPCDone: {
                "v-bind:items.sync": "doneGames"
            }
        }, a.$events = {}, a.components = {
            GPCPending: _GamePreviewCard2.default,
            GPCDone: _GamePreviewCard2.default,
            actionsheet: _GameChooseSheet2.default
        }, a.data = {
            buttomNavigationActiveIndex: 0,
            filter: "filter",
            inited: !1,
            pendingGames: [],
            doneGames: [],
            isEmpty: !0,
            hasMoreGames: !0,
            loadingText: "点击加载历史抽奖",
            swiperStyle: "",
            navigationTitle: "我参与的",
            profile: {
                join_count: 0,
                create_count: 0,
                lucky_count: 0
            },
            needGetUserInfo: !0,
            forceHideGetUserInfo: !1
        }, a.computed = {
            emptyDesc: function() {
                var e = "";
                return "all" === this.filter ? e = "暂无抽奖" : "initiator" === this.filter ? e = "暂未发起抽奖" : "lucky" === this.filter && (e = "暂无中奖记录"), 
                e;
            }
        }, a.methods = {
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
            goToGame: function(e) {
                _wepy2.default.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + e.id
                });
            },
            createGame: function(e) {
                e.detail.formId && ((0, _chou.saveFormId)(e.detail.formId), this.$parent.avaliable("chatroom") ? this.$broadcast("GameChooseSheetShow") : wx.navigateTo({
                    url: "create"
                }));
            },
            loadMore: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (e.prev = 0, !this.loadingHistiry) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            return this.loadingHistiry = !0, this.loadingText = "加载中...", this.$apply(), e.next = 8, 
                            _GameManager2.default.load();

                          case 8:
                            t = _GameManager2.default.getGroupedGames(), t.forEach(function(e) {
                                "待开奖" === e.label ? n.pendingGames = e.games : n.doneGames = e.games;
                            }), _GameManager2.default.getData().length > 0 && (this.isEmpty = !1), this.hasMoreGames = !_GameManager2.default.isLoadEnd, 
                            this.loadingHistiry = !1, this.loadingText = "点击加载历史抽奖", this.$apply(), e.next = 23;
                            break;

                          case 17:
                            e.prev = 17, e.t0 = e.catch(0), wx.showToast({
                                title: e.t0.message,
                                icon: "none"
                            }), this.loadingHistiry = !1, this.loadingText = "重新加载历史抽奖", this.$apply();

                          case 23:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, 17 ] ]);
                }));
                return e;
            }()
        }, a.events = {
            GPC_CARD_CLICK: function(e) {
                "chatroom" === e.draw_type ? _wepy2.default.navigateTo({
                    url: "gameroom?id=" + e.id
                }) : _wepy2.default.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + e.id
                });
            },
            GPC_CARD_HIDE: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, (0, _game.hideGame)(t.id);

                          case 3:
                            if (n = e.sent, n.data) {
                                e.next = 6;
                                break;
                            }
                            throw new Error("fail");

                          case 6:
                            a.pendingGames = a.pendingGames.filter(function(e) {
                                return e.id !== t.id;
                            }), a.doneGames = a.doneGames.filter(function(e) {
                                return e.id !== t.id;
                            }), _GameManager2.default.hideGame(t.id), a.$apply(), e.next = 16;
                            break;

                          case 12:
                            e.prev = 12, e.t0 = e.catch(0), console.log(e.t0), wx.showToast({
                                title: "移除失败",
                                icon: "none"
                            });

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e, i, [ [ 0, 12 ] ]);
                }));
                return e;
            }(),
            NavigationSelectChoose: function(e, t, n) {
                0 === e ? a.filter = "" : 1 === e && (a.filter = "initiator"), a.onPullDownRefresh();
            }
        }, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, a = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, this.$parent.appInit();

                      case 3:
                        return _GameManager2.default.setFilter(this.filter), e.next = 6, _GameManager2.default.refresh();

                      case 6:
                        if (t = e.sent) {
                            e.next = 10;
                            break;
                        }
                        return wx.stopPullDownRefresh(), e.abrupt("return");

                      case 10:
                        n = _GameManager2.default.getGroupedGames(), n.forEach(function(e) {
                            "待开奖" === e.label ? a.pendingGames = e.games : a.doneGames = e.games;
                        }), _GameManager2.default.getData().length > 0 && (this.isEmpty = !1), this.hasMoreGames = !_GameManager2.default.isLoadEnd, 
                        this.loadingText = "点击加载历史抽奖", this.$apply(), wx.stopPullDownRefresh(), e.next = 22;
                        break;

                      case 19:
                        e.prev = 19, e.t0 = e.catch(0), wx.stopPullDownRefresh();

                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 19 ] ]);
            }));
            return e;
        }()
    }, {
        key: "initPage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, _GameManager2.default.setFilter(this.filter), e.next = 4, _GameManager2.default.refresh();

                      case 4:
                        this.hasMoreGames = !_GameManager2.default.isLoadEnd, t = _GameManager2.default.getGroupedGames(), 
                        t.forEach(function(e) {
                            "待开奖" === e.label ? n.pendingGames = e.games : n.doneGames = e.games;
                        }), _GameManager2.default.getData().length > 0 && (this.isEmpty = !1), e.next = 14;
                        break;

                      case 10:
                        e.prev = 10, e.t0 = e.catch(0), wx.showToast({
                            title: e.t0.message,
                            icon: "none"
                        }), console.error(e.t0);

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 10 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return {
                title: "推荐抽奖助手给你，来试试",
                path: "/pages/index",
                success: function(e) {
                    console.log("share success", e);
                },
                fail: function() {
                    console.log("share error");
                }
            };
        }
    }, {
        key: "onUnload",
        value: function() {
            this.filter = "", this.inited = !1, this.pendingGames = [], this.doneGames = [], 
            this.isEmpty = !0, this.hasMoreGames = !0, this.loadingText = "点击加载历史抽奖";
        }
    }, {
        key: "onShow",
        value: function() {
            this.$parent.globalData.prevTab = "index", (0, _analyse.screenView)("usergames");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.filter = t.filter, "all" === this.filter ? this.navigationTitle = "全部抽奖" : "initiator" === this.filter ? this.navigationTitle = "我发起的" : "lucky" === this.filter && (this.navigationTitle = "中奖记录"), 
                        wx.setNavigationBarTitle({
                            title: this.navigationTitle
                        }), this.inited = !1, e.next = 6, this.$parent.appInit();

                      case 6:
                        return e.next = 8, this.$parent.needUpdateUserInfo();

                      case 8:
                        return this.needGetUserInfo = e.sent, e.next = 11, this.initPage();

                      case 11:
                        return clearTimeout(this.timer), e.next = 14, this.$parent.systemInfo();

                      case 14:
                        n = e.sent, this.swiperStyle = "height: " + 328 * (n.windowWidth - 12) / 720 + "px;", 
                        this.inited = !0, this.$apply();

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/usergames"));