function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function s(a, r) {
                try {
                    var i = e[a](r), o = i.value;
                } catch (t) {
                    return void n(t);
                }
                if (!i.done) return Promise.resolve(o).then(function(t) {
                    s("next", t);
                }, function(t) {
                    s("throw", t);
                });
                t(o);
            }
            return s("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var s = e[n];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(t, s.key, s);
        }
    }
    return function(e, n, s) {
        return n && t(e.prototype, n), s && t(e, s), e;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _RoomUsers = require("./../libs/RoomUsers.js"), _RoomUsers2 = _interopRequireDefault(_RoomUsers), _RoomDanmu = require("./../libs/RoomDanmu.js"), _RoomDanmu2 = _interopRequireDefault(_RoomDanmu), _tools = require("./../utils/tools.js"), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _chatroom = require("./../services/chatroom.js"), _pangu = require("./../npm/pangu/dist/browser/pangu.js"), _pangu2 = _interopRequireDefault(_pangu), _chou = require("./../services/chou.js"), _game = require("./../services/game.js"), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _currency = require("./../npm/currency.js/dist/currency.min.js"), _currency2 = _interopRequireDefault(_currency), _lodash3 = require("./../npm/lodash.filter/index.js"), _lodash4 = _interopRequireDefault(_lodash3), token = "", lastSocketPing = new Date().getTime(), _count = 1, Index = function(t) {
    function e() {
        _classCallCheck(this, e);
        var t = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
        return t.config = {
            navigationBarTitleText: "抽奖详情",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, t.data = {
            navigationTitle: "抽奖详情",
            resultStatusStyle: "",
            disableSlotCountAnimation: !0,
            slotMachineCountStyle: "",
            slotMachineCount: 0,
            chatBarStyle: "width: 50%;",
            isUrgingShow: !0,
            isAndroid: !1,
            isInitiatorOnline: !1,
            urgingLock: !1,
            socketConnecting: !0,
            slotAStop: !1,
            slotBStop: !1,
            slotCStop: !1,
            aSlotStyle: "transform: translateY(-1140px);-webkit-transform: translateY(-1140px)",
            bSlotStyle: "transform: translateY(-1140px);-webkit-transform: translateY(-1140px)",
            cSlotStyle: "transform: translateY(-1140px);-webkit-transform: translateY(-1140px)",
            lightState: 0,
            slotStyle: "",
            slotStacksStyle: "",
            slotWinnerStyle: "",
            roomStyle: "",
            winnerAnimationData: {},
            globalMessage: "随时开奖",
            isIphoneX: !1,
            inputFlag: !0,
            users: [],
            danmuStacks: [],
            roomContentHeight: 0,
            roomUsers: [],
            inited: !1,
            game: null,
            gamePrev: [],
            id: null,
            joining: !1,
            gameResult: null,
            livingUserCount: 0,
            needGetUserInfo: !0,
            forceHideGetUserInfo: !1
        }, t.computed = {
            joinUserCount: function() {
                if (this._joinUserCount) return this._joinUserCount;
                if (!this.game) return 0;
                try {
                    return this.game.user_count;
                } catch (t) {
                    return 0;
                }
            },
            joinUsers: function() {
                var t = this;
                if (!this.game) return [];
                try {
                    var e = (0, _lodash2.default)(this.game, "users.data", []);
                    if (0 === e.length) return e = this.game_users || [], [ {
                        avatar: this.$parent.globalData.userInfo.avatar
                    } ].concat(e.filter(function(e) {
                        return e.id !== t.$parent.globalData.userInfo.user_id;
                    })).slice(0, 7);
                    if (this.game.is_participator) {
                        var n = this.game.users.data.slice(0, 6);
                        return 0 === n.length ? [] : [ {
                            avatar: this.$parent.globalData.userInfo.avatar
                        } ].concat(n.filter(function(e) {
                            return e.id !== t.$parent.globalData.userInfo.user_id;
                        }));
                    }
                    return this.game.users.data.slice(0, 7);
                } catch (t) {
                    return console.error(t), [];
                }
            },
            prize: function() {
                return this.game ? (0, _lodash2.default)(this.game, "prizes.data[0]", {}) : {};
            },
            owner: function() {
                return this.game ? (0, _lodash2.default)(this.game, "initiator", {}) : {};
            },
            gameUsers: function() {
                return this._gameUsers();
            },
            luckUsers: function() {
                return this.game ? this.lucky_users || (0, _lodash2.default)(this.game, "lucky_users.data", []) : [];
            },
            currentWinner: function() {
                return this.isCurrentWinner();
            }
        }, t.methods = {
            getUserInfo: function() {
                function t(t) {
                    return e.apply(this, arguments);
                }
                var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, wx.showLoading(), t.next = 4, this.$parent.updateUserInfo(e.detail);

                          case 4:
                            return t.next = 6, this.$parent.updateWxWorkUserInfo();

                          case 6:
                            this.forceHideGetUserInfo = !0, this.$apply();

                          case 8:
                            return t.prev = 8, this.initSocket(), wx.hideLoading(), t.finish(8);

                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, t, this, [ [ 0, , 8, 12 ] ]);
                }));
                return t;
            }(),
            goToGenerage: function() {
                (0, _analyse2.default)("detail_showoff"), _GameManager2.default.temp("generate_image_game", this.game), 
                _GameManager2.default.temp("userPrize", this.getUserPrize()), _wepy2.default.navigateTo({
                    url: "generateimage?type=winner_share_image&id=" + this.game.id
                });
            },
            goToUsers: function() {
                this.game.is_participator && _GameManager2.default.temp(this.game.id + "_currentuser", {
                    id: this.$parent.globalData.userInfo.user_id,
                    avatar: this.$parent.globalData.userInfo.avatar
                }), _wepy2.default.navigateTo({
                    url: "users?id=" + this.game.id
                });
            },
            toToCreate: function(t) {
                t.detail.formId && ((0, _analyse2.default)("detail_new", {
                    state: (0, _lodash2.default)(this.game, "state", -2),
                    role: (0, _lodash2.default)(this.game, "is_initiator", !1) ? "发起人" : (0, _lodash2.default)(this.game, "is_participator", !1) ? "参与者" : "未参与"
                }, "gameroom"), (0, _chou.saveFormId)(t.detail.formId), wx.navigateTo({
                    url: "create?type=chatroom"
                }));
            },
            previewPrizeImage: function() {
                var t = this.prize.image || "https://cdn.readhub.cn/minalottery/default-prize@3x.png";
                wx.previewImage({
                    urls: [ t ]
                });
            },
            HideUrging: function() {
                if (!this.game.is_initiator) {
                    var t = this.systemInfo;
                    this.chatBarStyle = "width: " + (t.windowWidth - 16) + "px;", this.isUrgingShow = !1;
                }
            },
            ShowUrging: function() {
                if (!this.game.is_initiator) {
                    var t = this.systemInfo;
                    this.chatBarStyle = "width: " + (t.windowWidth - 24 - 91) + "px;", this.isUrgingShow = !0;
                }
            },
            startGame: function() {
                function t() {
                    return e.apply(this, arguments);
                }
                var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!this.startingGame) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return");

                          case 2:
                            return t.next = 4, _wepy2.default.showModal({
                                title: "提示",
                                content: "将进行开奖，请确认",
                                confirmColor: "#e6575c"
                            });

                          case 4:
                            if (e = t.sent, !e.cancel) {
                                t.next = 7;
                                break;
                            }
                            return t.abrupt("return");

                          case 7:
                            return this.startingGame = !0, t.prev = 8, t.next = 11, (0, _chatroom.manualStart)(this.game.id);

                          case 11:
                            t.next = 17;
                            break;

                          case 13:
                            t.prev = 13, t.t0 = t.catch(8), wx.showToast({
                                title: t.t0.message,
                                icon: "none"
                            }), console.error(t.t0);

                          case 17:
                            return t.prev = 17, this.startingGame = !1, t.finish(17);

                          case 20:
                          case "end":
                            return t.stop();
                        }
                    }, t, this, [ [ 8, 13, 17, 20 ] ]);
                }));
                return t;
            }(),
            sendMessage: function(t) {
                var e = t.detail.value;
                if (!(0 === e.length || e.length > 20)) return this.game.is_initiator ? this.changeGlobalMessage(t.detail.value) : (this.addDanmu({
                    type: 2,
                    data: {
                        msg: t.detail.value,
                        avatar: this.currentUser.avatar
                    }
                }), this.sendUserSocketMessage(t.detail.value)), this.inputFlag = !this.inputFlag, 
                this.$apply(), "";
            },
            urging: function() {
                var t = this;
                if (!this.urgingLock) {
                    this.urgingLock = !0, setTimeout(function() {
                        t.urgingLock = !1, t.$apply();
                    }, 2e3);
                    var e = [ "快开奖", "怎么还不开奖", "快点开奖吧", "我等的花儿都谢了", "早开早安心", "你开奖，我开心", "让我们一起开奖", "让一让，我要中奖了", "奖品请给我一个永抱", "我这么可爱一定会中奖的" ], n = e[Math.floor(Math.random() * e.length)];
                    this.addDanmu({
                        type: 2,
                        data: {
                            msg: n,
                            avatar: this.currentUser.avatar
                        }
                    }), this.sendUserSocketMessage(n);
                }
            }
        }, t.images = [], t;
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "getUserPrize",
        value: function() {
            var t = this, e = (0, _lodash2.default)(this.game, "myPrize", null);
            if (e) return e.displayAmount = (0, _currency2.default)(e.amount).multiply(.01).format(), 
            e.redemptionInfo = (0, _lodash2.default)(e, "info.content[0]", null), e;
            try {
                var n = function() {
                    for (var e = (0, _lodash2.default)(t.game, "lucky_users.data", []), n = null, s = 0, a = e.length; s < a; s++) if (n = e[s], 
                    n.id === (0, _lodash2.default)(t.$parent.globalData, "userInfo.user_id", "")) {
                        var r = (0, _lodash4.default)((0, _lodash2.default)(t.game, "prizes.data", []), function(t) {
                            return t.id === n.prize_id;
                        });
                        if (r.length > 0) {
                            var i = r[0];
                            return i.displayAmount = (0, _currency2.default)(i.amount).multiply(.01).format(), 
                            i.redemptionInfo = (0, _lodash2.default)(i, "info.content[0]", null), {
                                v: i
                            };
                        }
                    }
                    return {
                        v: null
                    };
                }();
                if ("object" === (void 0 === n ? "undefined" : _typeof(n))) return n.v;
            } catch (t) {
                return console.log(t), null;
            }
        }
    }, {
        key: "isCurrentWinner",
        value: function() {
            try {
                for (var t = this.lucky_users || this.game.lucky_users.data, e = null, n = 0, s = t.length; n < s; n++) if (e = t[n], 
                e.id === this.$parent.globalData.userInfo.user_id) return !0;
                return !1;
            } catch (t) {
                return !1;
            }
        }
    }, {
        key: "_gameUsers",
        value: function() {
            if (this.game) {
                var t = [], e = this.game_users || [];
                if (e = e.concat((0, _lodash2.default)(this.game, "users.data", [])), 0 === e.length) return [ {
                    id: this.$parent.globalData.userInfo.user_id,
                    avatar: this.$parent.globalData.userInfo.avatar
                }, {
                    id: "default",
                    avatar: "https://cdn.readhub.cn/mina/lottery/incard-default@3x.png"
                } ];
                var n = e.length;
                if (n < 5) {
                    for (var s = Math.ceil(5 / n), a = 0; a < s; a++) t = t.concat(e);
                    return t.concat([ {
                        id: "default",
                        avatar: "https://cdn.readhub.cn/mina/lottery/incard-default@3x.png"
                    } ]);
                }
                return e.slice(0, 50).concat([ {
                    id: "default",
                    avatar: "https://cdn.readhub.cn/mina/lottery/incard-default@3x.png"
                } ]);
            }
            return [];
        }
    }, {
        key: "onShow",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if ((0, _analyse.screenView)("gameroom"), !this.inited || 0 !== this.game.state && 1 !== this.game.state) {
                            t.next = 15;
                            break;
                        }
                        if (this.socketTimer && clearInterval(this.socketTimer), console.log(lastSocketPing), 
                        !(new Date().getTime() - lastSocketPing > 13e3)) {
                            t.next = 14;
                            break;
                        }
                        clearInterval(this.socketTimer);
                        try {
                            wx.closeSocket();
                        } catch (t) {}
                        return this.RoomUser.clear(), this.RoomDanmu.clear(), this.livingUserCount = 0, 
                        this.$apply(), console.log("reconnect socket"), this.initSocket(), t.abrupt("return");

                      case 14:
                        this.socketTimer = setInterval(function() {
                            if (new Date().getTime() - lastSocketPing > 13e3) {
                                clearInterval(e.socketTimer);
                                try {
                                    wx.closeSocket();
                                } catch (t) {}
                                return e.RoomUser.clear(), e.RoomDanmu.clear(), e.livingUserCount = 0, e.$apply(), 
                                void setTimeout(function() {
                                    e.initSocket();
                                }, 1e3 * Math.random() + 1e3);
                            }
                            e.sendSocketMessage({
                                type: "f"
                            });
                        }, 8e3);

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return this.messageImage ? {
                title: _pangu2.default.spacing(this.$parent.globalData.userInfo.nick_name + "正在抽奖，快来参与"),
                path: "/pages/gameroom?id=" + this.id,
                imageUrl: this.messageImage,
                success: function(t) {
                    console.log("share success", t);
                },
                fail: function() {
                    console.log("share error");
                }
            } : {
                title: _pangu2.default.spacing(this.$parent.globalData.userInfo.nick_name + "正在抽奖，快来参与"),
                path: "/pages/gameroom?id=" + this.id,
                success: function(t) {
                    console.log("share success", t);
                },
                fail: function() {
                    console.log("share error");
                }
            };
        }
    }, {
        key: "refreshPage",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, _GameManager2.default.fetchGame(this.id);

                      case 2:
                        if (e = t.sent, console.log(e), e) {
                            t.next = 6;
                            break;
                        }
                        throw new Error("404");

                      case 6:
                        this.game = e, this.initiatorId = (0, _lodash2.default)(this.game, "initiator.id", ""), 
                        this.$apply(), this.game.is_initiator && this.initShareMessageImage();

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onUnload",
        value: function() {
            this.currentUser = null, this.resultStatusStyle = "", this.slotMachineCountStyle = "", 
            this.slotMachineCount = 0, this.chatBarStyle = "width: 50%;", this.isUrgingShow = !0, 
            this.initiatorId = "", this.inited = !1, this.game = null, this.gamePrev = [], this.id = null, 
            this.joining = !1, this.animateBgStyleLeft = "auto", this.failToJoinEndGame = !1, 
            this.gameResult = null, this.winnerAnimationData = {}, this.slotAStop = !1, this.slotBStop = !1, 
            this.slotCStop = !1, this.aSlotStyle = "transform: translateY(-1140px);-webkit-transform: translateY(-1140px)", 
            this.bSlotStyle = "transform: translateY(-1140px);-webkit-transform: translateY(-1140px)", 
            this.cSlotStyle = "transform: translateY(-1140px);-webkit-transform: translateY(-1140px)", 
            this.lightState = 0, this.slotStyle = "", this.slotStacksStyle = "", this.slotWinnerStyle = "", 
            this.roomStyle = "", this.globalMessage = "随时开奖", this.inputFlag = !0, this.users = [], 
            this.danmuStacks = [], this.roomContentHeight = 0, this.roomUsers = [], this.animated = !1, 
            this.livingUserCount = 0, this.socketConnecting = !0, this.urgingLock = !1, this.isInitiatorOnline = !1, 
            this.lucky_users = null, this.game_users = null, this.disableSlotCountAnimation = !0, 
            this._joinUserCount = 0, this.stopLight(), clearTimeout(this.slotTimer), clearInterval(this.slotAStop), 
            clearInterval(this.slotBStop), clearInterval(this.slotCStop), this.refreshTimer && clearInterval(this.refreshTimer), 
            this.socketTimer && clearTimeout(this.socketTimer), this.testTimer && clearTimeout(this.testTimer);
            try {
                wx.closeSocket();
            } catch (t) {}
        }
    }, {
        key: "startLight",
        value: function() {
            var t = this;
            this.lightTimer = setTimeout(function() {
                1 === t.lightState ? t.lightState = 2 : t.lightState = 1, t.$apply(), t.startLight();
            }, 300);
        }
    }, {
        key: "stopLight",
        value: function() {
            console.log("stop light"), this.lightTimer && (clearTimeout(this.lightTimer), this.lightState = 0, 
            this.$apply());
        }
    }, {
        key: "addRoomUser",
        value: function(t) {
            console.log("add room user: ", t), this.RoomUser.add({
                id: t.userId,
                avatar: t.avatar
            }), this.users = this.RoomUser.users;
        }
    }, {
        key: "removeRoomUser",
        value: function(t) {
            console.log("remove room user: ", t), this.RoomUser.remove({
                id: t.userId
            }), this.users = this.RoomUser.users, this.$apply();
        }
    }, {
        key: "addDanmu",
        value: function(t) {
            this.RoomDanmu.add(t), this.danmuStacks = this.RoomDanmu.renderStacks, this.$apply();
        }
    }, {
        key: "addRoomMessage",
        value: function() {}
    }, {
        key: "changeGlobalMessage",
        value: function(t) {
            this.globalMessage = t, this.sendUserSocketMessage(t), this.addDanmu({
                type: 3,
                data: {
                    msg: t,
                    avatar: this.game.initiator.avatar
                }
            });
        }
    }, {
        key: "initSlot",
        value: function() {
            this.startPos = 105 * (this._gameUsers().length - 1) - (26 * (this.systemInfo.windowWidth - 24) / 2 / 35 - 50) / 2, 
            this.endPos = 40, this.posA = this.posB = this.posC = this.startPos, this.aSlotStyle = "transform: translateY(" + -this.startPos + "px);-webkit-transform: translateY(" + -this.startPos + "px)", 
            this.bSlotStyle = "transform: translateY(" + -this.startPos + "px);-webkit-transform: translateY(" + -this.startPos + "px)", 
            this.cSlotStyle = "transform: translateY(" + -this.startPos + "px);-webkit-transform: translateY(" + -this.startPos + "px)", 
            this.maxSpeed = 28;
        }
    }, {
        key: "startSlotAnimate",
        value: function() {
            var t = this;
            this.slotTimer = (0, _tools.requestAnimationFrame)(function() {
                t.aSlotStyle = "transform: translateY(" + -t.posA + "px);-webkit-transform: translateY(" + -t.posA + "px)", 
                t.bSlotStyle = "transform: translateY(" + -t.posB + "px);-webkit-transform: translateY(" + -t.posB + "px)", 
                t.cSlotStyle = "transform: translateY(" + -t.posC + "px);-webkit-transform: translateY(" + -t.posC + "px)", 
                t.$apply(), t.startSlotAnimate();
            });
        }
    }, {
        key: "startSlotA",
        value: function() {
            var t = this;
            console.log("start slot a");
            var e = this.startPos, n = 15;
            this.slotATimer = setInterval(function() {
                if (e -= n, t.slotAStop ? (n = (e - t.endPos) / (100 * (t._gameUsers().length - 1)) * t.maxSpeed, 
                0 === t._gameUsers().length && (n = 1), isNaN(n) && (n = 1)) : n < t.maxSpeed - 4 && (n = (t.startPos - e) / (100 * (t._gameUsers().length - 1)) * t.maxSpeed, 
                isNaN(n) && (n = t.maxSpeed - 3)), e < t.endPos && (e = t.startPos - e), n <= 1 && t.slotAStop) return console.log("stop slot a"), 
                clearInterval(t.slotATimer), void (t.posA = -t.endPos);
                t.posA = e;
            }, 1e3 / 60);
        }
    }, {
        key: "startSlotB",
        value: function() {
            var t = this;
            console.log("start slot b");
            var e = this.startPos, n = 15;
            this.slotBTimer = setInterval(function() {
                if (e -= n, t.slotBStop ? (n = (e - t.endPos) / (100 * (t._gameUsers().length - 1)) * t.maxSpeed, 
                0 === t._gameUsers().length && (n = 1), isNaN(n) && (n = 1)) : n < t.maxSpeed - 4 && (n = (t.startPos - e) / (100 * (t._gameUsers().length - 1)) * t.maxSpeed, 
                isNaN(n) && (n = t.maxSpeed - 3)), e < t.endPos && (e = t.startPos - e), n <= 1 && t.slotBStop) return console.log("stop slot b"), 
                clearInterval(t.slotBTimer), void (t.posB = -t.endPos);
                t.posB = e;
            }, 1e3 / 60);
        }
    }, {
        key: "startSlotC",
        value: function() {
            var t = this;
            console.log("start slot c");
            var e = this.startPos, n = 15;
            this.slotCTimer = setInterval(function() {
                if (e -= n, t.slotCStop ? (n = (e - t.endPos) / (100 * (t._gameUsers().length - 1)) * t.maxSpeed, 
                0 === t._gameUsers().length && (n = 1), isNaN(n) && (n = 1)) : n < t.maxSpeed - 4 && (n = (t.startPos - e) / (100 * (t._gameUsers().length - 1)) * t.maxSpeed, 
                isNaN(n) && (n = t.maxSpeed - 3)), e < t.endPos && (e = t.startPos - e), n <= 1 && t.slotCStop) return console.log("stop slot c"), 
                clearInterval(t.slotCTimer), setTimeout(function() {
                    console.log("stop slot animate"), clearTimeout(t.slotTimer), t.stopLight();
                }, 100), void (t.posC = -t.endPos);
                t.posC = e;
            }, 1e3 / 60);
        }
    }, {
        key: "stopSlotAnimate",
        value: function() {
            var t = this;
            this.slotAStop = !0, setTimeout(function() {
                t.slotBStop = !0, setTimeout(function() {
                    t.slotCStop = !0;
                }, 100);
            }, 100);
        }
    }, {
        key: "initRoom",
        value: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "startWinnerAnimate",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n, s, a, r;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return console.log("start winner animate"), t.next = 3, new Promise(function(t) {
                            setTimeout(t, 6e3);
                        });

                      case 3:
                        e = this.lucky_users || (0, _lodash2.default)(this.game, "lucky_users.data", []), 
                        n = Math.ceil(e.length / 3), s = wx.createAnimation({
                            timingFunction: "linner"
                        }), a = 0;

                      case 7:
                        if (!(a < n)) {
                            t.next = 18;
                            break;
                        }
                        return t.next = 10, new Promise(function(t) {
                            setTimeout(t, 2e3);
                        });

                      case 10:
                        r = 106 * (a + 1), a === n - 1 && (r += 52), s.bottom(-r).step({
                            duration: 500
                        }), this.winnerAnimationData = s.export(), this.$apply();

                      case 15:
                        a++, t.next = 7;
                        break;

                      case 18:
                        console.log("stop winner animate"), this.stopSlotAnimate();

                      case 20:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "showResult",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n, s, a;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.disableSlotCountAnimation = !0, this.$apply(), t.next = 4, new Promise(function(t) {
                            setTimeout(t, 100);
                        });

                      case 4:
                        this.slotAStop = !0, this.slotBStop = !0, this.slotCStop = !0, e = wx.createAnimation({
                            timingFunction: "linner"
                        }), n = this.lucky_users || (0, _lodash2.default)(this.game, "lucky_users.data", []), 
                        s = Math.ceil(n.length / 3), a = 106 * s + 52, e.bottom(-a).step({
                            duration: 500
                        }), this.aSlotStyle = "transform: translateY(" + -this.endPos + "px);-webkit-transform: translateY(" + this.endPos + "px)", 
                        this.bSlotStyle = "transform: translateY(" + -this.endPos + "px);-webkit-transform: translateY(" + this.endPos + "px)", 
                        this.cSlotStyle = "transform: translateY(" + -this.endPos + "px);-webkit-transform: translateY(" + this.endPos + "px)", 
                        this.winnerAnimationData = e.export(), this.$apply();

                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "sendSocketMessage",
        value: function(t) {
            wx.sendSocketMessage({
                data: JSON.stringify(t)
            });
        }
    }, {
        key: "sendUserSocketMessage",
        value: function(t) {
            this.sendSocketMessage({
                type: "b",
                userId: this.currentUser.user_id,
                name: this.currentUser.nick_name,
                avatar: this.currentUser.avatar,
                msg: t
            });
        }
    }, {
        key: "checkInitiatorOnline",
        value: function() {
            this.isInitiatorOnline = this.RoomUser.checkOnline(this.initiatorId), this.$apply();
        }
    }, {
        key: "startSlotAllAnimate",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return console.log("start all animate"), this.game.state = 2, this.disableSlotCountAnimation = !1, 
                        this.animated = !0, this.initSlot(), this.$apply(), t.next = 8, new Promise(function(t) {
                            setTimeout(t, 600);
                        });

                      case 8:
                        return t.next = 10, this.startCountAnimation();

                      case 10:
                        this.startSlotAnimate(), this.startLight(), this.startSlotA(), setTimeout(this.startSlotB.bind(this), 500), 
                        setTimeout(this.startSlotC.bind(this), 1e3), this.startWinnerAnimate(), console.log("all animate end");

                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "initSocket",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (this.currentUser = this.$parent.globalData.userInfo, this.currentUser && (!this.needGetUserInfo || this.forceHideGetUserInfo)) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        return console.log("debug", this.currentUser), this.socketConnecting = !0, this.$apply(), 
                        t.next = 8, (0, _chatroom.join)(this.game.id);

                      case 8:
                        e = t.sent, token = e.data.token, console.log(token);
                        try {
                            wx.closeSocket();
                        } catch (t) {}
                        wx.connectSocket({
                            url: _config2.default.WS_HOST,
                            header: {
                                token: "" + token,
                                version: _config2.default.VERSION
                            }
                        }), wx.onSocketOpen(function(t) {
                            n.socketConnecting = !1, n.sendSocketMessage({
                                type: "f"
                            }), console.log("open: ", t);
                        }), wx.onSocketError(function(t) {
                            console.log("error: ", t);
                        }), wx.onSocketMessage(function() {
                            var t = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                                var s;
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        if (e.data && "string" == typeof e.data) {
                                            t.next = 2;
                                            break;
                                        }
                                        return t.abrupt("return");

                                      case 2:
                                        s = JSON.parse(e.data), t.t0 = s.type, t.next = "f" === t.t0 ? 6 : "g" === t.t0 ? 8 : "e" === t.t0 ? 10 : "a" === t.t0 ? 13 : "b" === t.t0 ? 16 : "d" === t.t0 ? 25 : "c" === t.t0 ? 28 : "h" === t.t0 ? 31 : 39;
                                        break;

                                      case 6:
                                        return n.sendSocketMessage({
                                            type: "g"
                                        }), t.abrupt("break", 39);

                                      case 8:
                                        return lastSocketPing = new Date().getTime(), t.abrupt("break", 39);

                                      case 10:
                                        return n.livingUserCount = s.count, n.$apply(), t.abrupt("break", 39);

                                      case 13:
                                        return s.userId === n.initiatorId && (n.isInitiatorOnline = !0), n.addRoomUser(s), 
                                        t.abrupt("break", 39);

                                      case 16:
                                        if (s.userId !== n.currentUser.user_id) {
                                            t.next = 18;
                                            break;
                                        }
                                        return t.abrupt("return");

                                      case 18:
                                        if (-1 !== s.msg.indexOf("加入了抽奖") || s.userId !== n.initiatorId) {
                                            t.next = 23;
                                            break;
                                        }
                                        return n.globalMessage = s.msg, n.addDanmu({
                                            type: 3,
                                            data: {
                                                msg: s.msg,
                                                avatar: n.game.initiator.avatar
                                            }
                                        }), n.$apply(), t.abrupt("break", 39);

                                      case 23:
                                        return s.msg.indexOf("加入了抽奖") > -1 ? n.addDanmu({
                                            type: 1,
                                            data: {
                                                msg: s.msg,
                                                avatar: s.avatar
                                            }
                                        }) : n.addDanmu({
                                            type: 2,
                                            data: {
                                                msg: s.msg,
                                                avatar: s.avatar
                                            }
                                        }), t.abrupt("break", 39);

                                      case 25:
                                        return s.userId === n.initiatorId && (n.isInitiatorOnline = !1), n.removeRoomUser(s), 
                                        t.abrupt("break", 39);

                                      case 28:
                                        return n.globalMessage = s.lastTextMessage, s.userInfos.forEach(function(t) {
                                            t.userId === n.initiatorId && (n.isInitiatorOnline = !0), n.addRoomUser(t);
                                        }), t.abrupt("break", 39);

                                      case 31:
                                        return console.log("start ----------"), n.lucky_users = s.userInfos.map(function(t) {
                                            return {
                                                avatar: t.avatar,
                                                id: t.userId,
                                                nick_name: t.name
                                            };
                                        }), n._joinUserCount = s.joinCount || 1, console.log("luck_users", n.lucky_users), 
                                        n.game_users = n.RoomUser.getOnlineUsers(), n.roomStyle = "height: " + (550 + 106 * Math.ceil(n.lucky_users.length / 3)) + "px;", 
                                        n.startSlotAllAnimate(), t.abrupt("break", 39);

                                      case 39:
                                        console.log("message: ", s);

                                      case 40:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t, n);
                            }));
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        }()), wx.onSocketClose(function(t) {
                            console.log("close: ", t);
                        }), this.socketTimer = setInterval(function() {
                            if (new Date().getTime() - lastSocketPing > 2e4) {
                                clearInterval(n.socketTimer);
                                try {
                                    wx.closeSocket();
                                } catch (t) {}
                                return n.RoomUser.clear(), n.RoomDanmu.clear(), n.livingUserCount = 0, n.$apply(), 
                                void setTimeout(function() {
                                    n.initSocket();
                                }, 1e3 * Math.random() + 1e3);
                            }
                            n.sendSocketMessage({
                                type: "f"
                            });
                        }, 8e3);

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onHide",
        value: function() {
            console.log("hide"), this.socketTimer && clearInterval(this.socketTimer), this._testTiner && clearTimeout(this._testTiner), 
            lastSocketPing = 0;
            try {
                wx.closeSocket();
            } catch (t) {}
        }
    }, {
        key: "test",
        value: function() {
            var t = this;
            this.testTimer = setTimeout(function() {
                t.addDanmu({
                    type: 2,
                    data: {
                        msg: "这是一条测试弹幕",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/vGQn0QqnKI2psToTWpPydRPaKvx0mgvy1R2cX3xor0hfGwz1LyJXFAwj9QIGj8SqDfhKVibEmO9acSRYsx17ddQ/0"
                    }
                }), t.addRoomUser({
                    avatar: "https://wx.qlogo.cn/mmopen/vi_32/vGQn0QqnKI2psToTWpPydRPaKvx0mgvy1R2cX3xor0hfGwz1LyJXFAwj9QIGj8SqDfhKVibEmO9acSRYsx17ddQ/0",
                    userId: _count++
                }), t.test();
            }, 20);
        }
    }, {
        key: "startCountAnimation",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return console.log("start count animation"), t.next = 3, new Promise(function(t) {
                            setTimeout(t, 1e3);
                        });

                      case 3:
                        return this.slotMachineCount = 3, this.$apply(), t.next = 7, new Promise(function(t) {
                            setTimeout(t, 1e3);
                        });

                      case 7:
                        return this.slotMachineCount = 2, this.$apply(), t.next = 11, new Promise(function(t) {
                            setTimeout(t, 1e3);
                        });

                      case 11:
                        return this.slotMachineCount = 1, this.$apply(), t.next = 15, new Promise(function(t) {
                            setTimeout(t, 300);
                        });

                      case 15:
                        this.slotMachineCount = 0, this.$apply(), console.log("end count animation");

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "initShareMessageImage",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n, s;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, this.$parent.systemInfo();

                      case 2:
                        if (e = t.sent, n = "", !((0, _tools.versionCompare)(e.SDKVersion, "1.5.0") >= 0)) {
                            t.next = 15;
                            break;
                        }
                        return t.prev = 5, t.next = 8, (0, _game.shareMessageImage)(this.game.id);

                      case 8:
                        s = t.sent, n = s.data.url, t.next = 15;
                        break;

                      case 12:
                        t.prev = 12, t.t0 = t.catch(5), console.error(t.t0);

                      case 15:
                        this.messageImage = n;

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 5, 12 ] ]);
            }));
            return t;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                var n, s, a, r, i, o, u, l, c, h, m;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        n = e.id, s = e.from;
                        try {
                            e.scene && (console.log(e.scene), a = decodeURIComponent(e.scene), console.log(a), 
                            a && (n = a));
                        } catch (t) {
                            console.log(t);
                        }
                        return this.id = n, this.inited = !1, this.from = s, t.next = 8, this.$parent.appInit();

                      case 8:
                        return console.log("app init success"), t.next = 11, this.$parent.needUpdateUserInfo();

                      case 11:
                        return this.needGetUserInfo = t.sent, console.log("pageInfo", this.$parent.globalData.pageInfo), 
                        t.prev = 13, t.next = 16, this.$parent.systemInfo();

                      case 16:
                        return r = t.sent, t.next = 19, this.$parent.isIphoneX();

                      case 19:
                        return i = t.sent, this.systemInfo = r, t.next = 23, this.$parent.isAndroid();

                      case 23:
                        return this.isAndroid = t.sent, this.isIphoneX = i, this.slotStyle = "width: " + (r.windowWidth - 24) + "px;height: " + (r.windowWidth - 24) / 2 + "px;", 
                        this.slotStacksStyle = "width: " + (r.windowWidth - 70) + "px;height: " + 26 * (r.windowWidth - 24) / 2 / 35 + "px;", 
                        this.slotMachineCountStyle = "top: 15px; left: " + ((r.windowWidth - 70 - 18) / 3 - 70) / 2 + "px;", 
                        this.resultStatusStyle = "top: " + (26 * (r.windowWidth - 24) / 2 / 35 / 2 - 45) + "px;", 
                        this.slotWinnerStyle = "width: " + (r.windowWidth - 24) + "px;", this._joinUserCount = 0, 
                        console.log("start refresh page"), t.next = 34, this.refreshPage();

                      case 34:
                        if (!(this.isCurrentWinner() || this.game.is_initiator && 2 === this.game.state)) {
                            t.next = 40;
                            break;
                        }
                        return t.next = 37, _GameManager2.default.fetchGameResult(this.game.id);

                      case 37:
                        this.gameResult = t.sent, this.game.gameResult = this.gameResult, this.gameResult.prize && (this.game.myPrize = this.gameResult.prize);

                      case 40:
                        for (console.log("refresh page success"), o = 20, r.statusBarHeight && (o = r.statusBarHeight), 
                        this.roomContentHeight = r.screenHeight - 61 - (this.game.is_initiator ? 0 : -25) - o - 140 - 44 - 48, 
                        i && (this.roomContentHeight = this.roomContentHeight - 38), u = 0, l = (0, _lodash2.default)(this.game, "prizes.data[0].name", ""), 
                        c = 0, h = l.length; c < h; c++) /[\u0000-\u00FF]/.test(l[c]) ? u += .5 : u += 1;
                        if (m = 19 * u, m > r.windowWidth - 24 - 32 - 8 - 36 - 1 && (this.roomContentHeight = this.roomContentHeight - 26), 
                        this.game.is_initiator && 2 !== this.game.state && -1 !== this.game.state ? wx.showShareMenu({
                            withShareTicket: !0
                        }) : _wepy2.default.hideShareMenu(), this.game.is_initiator ? this.chatBarStyle = "width: " + (r.windowWidth - 16) + "px;" : this.chatBarStyle = "width: " + (r.windowWidth - 24 - 91) + "px;", 
                        console.log("init socket"), 0 !== this.game.state && 1 !== this.game.state) {
                            t.next = 56;
                            break;
                        }
                        return t.next = 56, this.initSocket();

                      case 56:
                        console.log("init socket success"), this.RoomUser = new _RoomUsers2.default(this, r.windowWidth - 24, this.roomContentHeight, 30, 25, 200, this.isAndroid), 
                        console.log("RoomUser success"), this.RoomDanmu = new _RoomDanmu2.default(this, Math.floor((this.roomContentHeight - 27) / 70)), 
                        console.log("RoomDanmu success"), this.roomStyle = "height: " + (450 + 106 * Math.ceil((0, 
                        _lodash2.default)(this.game, "lucky_users.data", []).length / 3)) + "px;", console.log("roomStyle success"), 
                        2 !== this.game.state || this.animated || (this.roomStyle = "height: " + (550 + 106 * Math.ceil((0, 
                        _lodash2.default)(this.game, "lucky_users.data", []).length / 3)) + "px;", this.animated = !0, 
                        this.initSlot(), this.showResult()), console.log("init slot"), this.initSlot(), 
                        t.next = 73;
                        break;

                      case 68:
                        t.prev = 68, t.t0 = t.catch(13), console.error(t.t0), wx.showToast({
                            title: "加载失败",
                            icon: "none",
                            duration: 1e3
                        }), setTimeout(function() {
                            wx.switchTab({
                                url: "index"
                            });
                        }, 1e3);

                      case 73:
                        this.inited = !0, this.$apply();

                      case 75:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 13, 68 ] ]);
            }));
            return t;
        }()
    } ]), e;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/gameroom"));