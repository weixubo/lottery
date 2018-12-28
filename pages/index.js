function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
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
        return new Promise(function(e, a) {
            function n(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void a(e);
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
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _OfficialGameManager = require("./../libs/OfficialGameManager.js"), _OfficialGameManager2 = _interopRequireDefault(_OfficialGameManager), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _lodash = require("./../npm/lodash.findindex/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.get/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _tools = require("./../utils/tools.js"), _PublicSquareManager = require("./../libs/PublicSquareManager.js"), _PublicSquareManager2 = _interopRequireDefault(_PublicSquareManager), _Badge = require("./../libs/Badge.js"), Badge = _interopRequireWildcard(_Badge), _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), _ActionSheet = require("./../components/ActionSheet.js"), _ActionSheet2 = _interopRequireDefault(_ActionSheet), INDEX_GAMES_CACHE_KEY = "INDEX_GAMES_CACHE", Index = function(e) {
    function t() {
        var e, a, n, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            enablePullDownRefresh: !0,
            backgroundTextStyle: "dark",
            usingComponents: {
                LazyImage: "../components/LazyImage/LazyImage",
                Layout: "../components/Layout/Layout",
                OfficialLottery: "../components/OfficialLottery/OfficialLottery",
                SuggestSquareLottery: "../components/SuggestSquareLottery/SuggestSquareLottery",
                NormalSquareLottery: "../components/NormalSquareLottery/NormalSquareLottery",
                BottomNavigation: "../components/BottomNavigation/BottomNavigation",
                BannerAd: "../components/BannerAd/BannerAd"
            }
        }, n.computed = {
            bannerImage: function() {
                var e = (0, _lodash4.default)(_OfficialGameManager2.default, "meta.public_banner", "");
                return e || "https://cdn.readhub.cn/mina/lottery/official-banner@3x.png";
            }
        }, n.$repeat = {}, n.$props = {
            actionsheet: {
                "xmlns:v-on": "",
                "xmlns:v-bind": "",
                "v-bind:items.sync": "actionsheetList"
            }
        }, n.$events = {
            actionsheet: {
                "v-on:ActionSheetChoose": "chooseActionSheet"
            }
        }, n.components = {
            actionsheet: _ActionSheet2.default
        }, n.data = {
            buttomNavigationActiveIndex: 0,
            inited: !1,
            doneGames: [],
            isEmpty: !0,
            loadingText: "点击加载历史抽奖",
            navigationTitle: "公共抽奖",
            needGetUserInfo: !1,
            banner: null,
            hasMoreSquareGames: !1,
            squareLoading: !1,
            showBadge: !1,
            hideFollowBar: !1,
            showReload: !1,
            actionsheetList: [ {
                label: "分享给朋友",
                openType: "share"
            }, {
                label: "下载分享图"
            } ],
            forceHideGetUserInfo: !1,
            suggestSquareLotteries: [],
            normalSquareLotteries: []
        }, n.methods = {
            closeFollowBar: function() {
                this.hideFollowBar = !0, this.$parent.expireCache("followBar");
            },
            lotterytap: function(e) {
                var t = e.detail, a = (0, _lodash2.default)(this.doneGames, function(e) {
                    return e.id === t.id;
                });
                "chatroom" === t.draw_type ? _wepy2.default.navigateTo({
                    url: "gameroom?id=" + t.id
                }) : _wepy2.default.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + t.id + "&index=" + a
                });
            },
            goToLottery: function(e) {
                var t = e.detail;
                wx.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + t.id
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
                            return e.prev = 6, this.forceHideGetUserInfo = !0, this.$apply(), wx.hideLoading(), 
                            e.finish(6);

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, , 6, 11 ] ]);
                }));
                return e;
            }(),
            chooseActionSheet: function(e, t) {
                1 === t && wx.navigateTo({
                    url: "/pages/generateimage?type=download_image"
                });
            },
            share: function() {
                this.$broadcast("ActionSheetShow");
            },
            copyOfficialName: function() {
                wx.setClipboardData({
                    data: "抽奖助手",
                    success: function() {
                        wx.showToast({
                            title: "已复制",
                            icon: "none"
                        });
                    }
                });
            },
            goToFollow: function() {
                var e = encodeURIComponent("https://mp.weixin.qq.com/s/pbaymuQoK7j039GKLYtPzg");
                wx.navigateTo({
                    url: "/pages/webview?url=" + e
                });
            },
            loadMoreSquare: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            _wepy2.default.navigateTo({
                                url: "/pages/squaregames"
                            });

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            goToAccount: function() {
                wx.navigateTo({
                    url: "/pages/uncommonly/pages/account"
                });
            },
            goToSponsor: function() {
                wx.navigateTo({
                    url: "besponsor"
                });
            },
            goToMyGames: function() {
                (0, _analyse2.default)("list_mylottery"), wx.navigateTo({
                    url: "usergames?filter=all"
                });
            },
            goToGame: function(e) {
                _wepy2.default.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + e.id
                });
            },
            loadMore: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
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
                            _OfficialGameManager2.default.load();

                          case 8:
                            this.doneGames = _OfficialGameManager2.default.getOfficialGames(), (_OfficialGameManager2.default.getData().length > 0 || this.squareGames.length > 0) && (this.isEmpty = !1), 
                            this.loadingHistiry = !1, this.loadingText = "点击加载历史抽奖", this.$apply(), e.next = 20;
                            break;

                          case 15:
                            e.prev = 15, e.t0 = e.catch(0), this.loadingHistiry = !1, this.loadingText = "重新加载历史抽奖", 
                            this.$apply();

                          case 20:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, 15 ] ]);
                }));
                return e;
            }()
        }, n.events = {
            GPC_CARD_CLICK: function(e) {
                var t = (0, _lodash2.default)(n.doneGames, function(t) {
                    return t.id === e.id;
                });
                "chatroom" === e.draw_type ? _wepy2.default.navigateTo({
                    url: "gameroom?id=" + e.id
                }) : _wepy2.default.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + e.id + "&index=" + t
                });
            },
            NavigationSelectChoose: function(e, t, a) {
                0 === e ? n.filter = "" : 1 === e && (n.filter = "initiator"), n.onPullDownRefresh();
            }
        }, r = a, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, this.$parent.appInit();

                      case 3:
                        return e.next = 5, _OfficialGameManager2.default.refresh();

                      case 5:
                        if (t = e.sent) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        return this.squareGames = [], e.next = 11, this.loadSquareList();

                      case 11:
                        this.doneGames = _OfficialGameManager2.default.getOfficialGames(), (_OfficialGameManager2.default.getData().length > 0 || this.squareGames.length > 0) && (this.isEmpty = !1), 
                        this.loadingText = "点击加载历史抽奖", this.$apply(), e.next = 21;
                        break;

                      case 17:
                        e.prev = 17, e.t0 = e.catch(0), wx.showToast({
                            title: e.t0.message,
                            icon: "none"
                        }), console.error(e.t0);

                      case 21:
                        return e.prev = 21, wx.stopPullDownRefresh(), e.finish(21);

                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 17, 21, 24 ] ]);
            }));
            return e;
        }()
    }, {
        key: "loadSquareList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
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
                        this.squareGames = _PublicSquareManager2.default.getData().slice(0, 10), this.suggestSquareLotteries = this.squareGames.filter(function(e) {
                            return e.weight && e.weight > 0;
                        }), this.normalSquareLotteries = this.squareGames.filter(function(e) {
                            return !e.weight || e.weight <= 0;
                        }), this.hasMoreSquareGames = !_PublicSquareManager2.default.isLoadEnd || _PublicSquareManager2.default.getData().length > 10;

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 6 ] ]);
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
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, this.showReload = !1, this.isPageInit = !0, this.$apply(), 0 !== this.doneGames.length) {
                            e.next = 11;
                            break;
                        }
                        return _OfficialGameManager2.default.setFilter(this.filter), e.next = 8, _OfficialGameManager2.default.refresh();

                      case 8:
                        if (t = e.sent) {
                            e.next = 11;
                            break;
                        }
                        throw new Error("加载失败");

                      case 11:
                        return this.doneGames = _OfficialGameManager2.default.getOfficialGames(), e.next = 14, 
                        this.loadSquareList();

                      case 14:
                        return (_OfficialGameManager2.default.getData().length > 0 || this.squareGames.length > 0) && (this.isEmpty = !1), 
                        e.next = 17, this.$parent.checkCacheExpired("followBar", (0, _moment2.default)().add(3, "days").toDate());

                      case 17:
                        this.hideFollowBar = e.sent, e.next = 25;
                        break;

                      case 20:
                        e.prev = 20, e.t0 = e.catch(0), wx.showToast({
                            title: e.t0.message,
                            icon: "none"
                        }), this.showReload = !0, console.error(e.t0);

                      case 25:
                        return e.prev = 25, this.inited = !0, this.$apply(), e.finish(25);

                      case 29:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 20, 25, 29 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return {
                title: "推荐抽奖助手给你，来试试",
                path: "/pages/index",
                imageUrl: "https://cdn.readhub.cn/minalottery/share-to-friend.png",
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
            this.sponsorGames = [], this.isEmpty = !0, this.loadingText = "点击加载历史抽奖", this.isOnload = !1, 
            this.banner = null, this.squareGames = [];
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
                        (0, _analyse.screenView)("index"), this.$parent.globalData.prevTab = "index", this.isOnload || this.initPage(), 
                        (0, _lodash4.default)(this, "$parent.globalData.profile.new_complaint_message", "") && (this.showBadge = Badge.needShow(this.$parent.globalData.profile.new_complaint_message, "profile")), 
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
        key: "setCache",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.setStorage({
                            key: INDEX_GAMES_CACHE_KEY,
                            data: {
                                sponsorGames: this.sponsorGames || null,
                                pendingGames: this.pendingGames || null,
                                doneGames: this.doneGames || null
                            }
                        });

                      case 3:
                        e.next = 8;
                        break;

                      case 5:
                        e.prev = 5, e.t0 = e.catch(0), console.error(e.t0);

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 5 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {}
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.squareGames = [], console.log("redirect: ", this.$parent.indexRedirect), 
                        !this.$parent.indexRedirect) {
                            e.next = 6;
                            break;
                        }
                        return a = this.$parent.indexRedirect, this.$parent.indexRedirect = "", e.abrupt("return", wx.navigateTo({
                            url: a
                        }));

                      case 6:
                        return this.isOnload = !0, this.filter = "", this.inited = !1, this.$apply(), e.next = 12, 
                        this.$parent.appInit();

                      case 12:
                        return this.showBadge = Badge.needShow((0, _lodash4.default)(this, "$parent.globalData.profile.new_complaint_message", ""), "profile"), 
                        e.next = 15, this.initPage();

                      case 15:
                        return clearTimeout(this.timer), e.next = 18, this.$parent.isIphoneX();

                      case 18:
                        this.isIphoneX = e.sent, this.isOnload = !1, this.banner = (0, _tools.randomBanner)(this.$parent.globalData.bannerAds.index), 
                        this.$apply();
                        try {
                            t.scene && (n = (0, _tools.decodeScene)(t.scene), n.f && (0, _analyse2.default)("offline", {
                                from: n.f
                            }));
                        } catch (e) {
                            console.log(e);
                        }

                      case 23:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/index"));