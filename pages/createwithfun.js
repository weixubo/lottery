function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, i) {
                try {
                    var s = t[n](i), o = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(o);
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
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), _CreateGameButton = require("./../components/CreateGameButton.js"), _CreateGameButton2 = _interopRequireDefault(_CreateGameButton), _DateTimePicker = require("./../components/DateTimePicker.js"), _DateTimePicker2 = _interopRequireDefault(_DateTimePicker), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _upyun = require("./../services/upyun.js"), _tools = require("./../utils/tools.js"), _Pay = require("./../components/Pay.js"), _Pay2 = _interopRequireDefault(_Pay), _pay = require("./../services/pay.js"), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.set/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _lodash5 = require("./../npm/lodash.findindex/index.js"), _lodash6 = _interopRequireDefault(_lodash5), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _currency = require("./../npm/currency.js/dist/currency.min.js"), _currency2 = _interopRequireDefault(_currency), _PopupBox = require("./../components/PopupBox.js"), _PopupBox2 = _interopRequireDefault(_PopupBox), _SwitchSelector = require("./../components/SwitchSelector.js"), _SwitchSelector2 = _interopRequireDefault(_SwitchSelector), _textarea = require("./../libs/textarea.js"), _pangu = require("./../npm/pangu/dist/browser/pangu.js"), _pangu2 = _interopRequireDefault(_pangu);

_moment2.default.locale("zh-cn");

var Index = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        a.config = {
            enablePullDownRefresh: !1,
            backgroundTextStyle: "light",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, a.$repeat = {}, a.$props = {
            CreateGameButton: {
                "v-bind:desc.sync": "buttonDesc",
                "v-bind:text.sync": "buttonText",
                "v-bind:icon.sync": "buttonIcon",
                "v-bind:style.sync": "buttonStyle"
            },
            datetimepicker: {
                "xmlns:v-bind": "",
                "v-bind:minuteInterval.once": "minuteInterval",
                "v-bind:defaultDetetime.once": "drawtime"
            },
            Pay: {
                "v-bind:type.sync": "payType",
                "v-bind:redpacket.sync": "isEnableRedpacket"
            },
            PiPopupBox: {
                "v-bind:id.once": "piPopupboxId"
            },
            SwitchSelector: {
                "v-bind:list.once": "groupSelectorList",
                "v-bind:selectedIndex.sync": "groupSelectorIndex"
            }
        }, a.$events = {}, a.components = {
            CreateGameButton: _CreateGameButton2.default,
            datetimepicker: _DateTimePicker2.default,
            Pay: _Pay2.default,
            PopupBox: _PopupBox2.default,
            PiPopupBox: _PopupBox2.default,
            SwitchSelector: _SwitchSelector2.default
        }, a.computed = {
            dateDistance: function() {
                if (!this.drawtime) return "";
                var e = (0, _moment2.default)(), t = (0, _moment2.default)(this.drawtime), r = _moment2.default.duration(t.diff(e)), a = Math.floor(r.asDays());
                return 0 === a ? "(今天)" : "(" + a + " 天后)";
            },
            isGroupDisable: function() {
                return !this.checkGroupable();
            },
            moneyCountLength: function() {
                return "pro" === this.viewType ? ("" + this.payed_max_vprize_count).length : ("" + this.max_vprize_count).length;
            },
            drawErrorClass: function() {
                if ("time" === this.gameEndType) if (this.drawtime) {
                    if (this.drawtime < (0, _moment2.default)()) return "error error-1";
                    if (this.drawtime > (0, _moment2.default)().add(7, "days")) return "error error-2";
                } else if (this.startCheck) return "error error-3";
                return null;
            },
            drawErrorText: function() {
                if ("time" === this.gameEndType) {
                    if (console.log(this.drawtime), !this.drawtime) return "请设置开奖时间";
                    if (this.drawtime < (0, _moment2.default)()) return "时间不能早于当前";
                    if (this.drawtime > (0, _moment2.default)().add(7, "days")) return "时间不能大于一周";
                }
                return null;
            },
            buttonText: function() {
                if (this.id) return "保存修改";
                var e = this.getGameTotalAmount(), t = e.total;
                return e.needPay ? t ? "支付￥" + (0, _currency2.default)(t).multiply(.01).multiply(1.02).format() + " 发起抽奖" : "支付并发起抽奖" : "chatroom" === this.gameEndType ? "发起现场抽奖" : this.groupable ? "发起组队抽奖" : "发起新抽奖";
            },
            buttonIcon: function() {
                return "https://cdn.readhub.cn/mina/lottery/icn-pi-addnew@3x.png";
            },
            buttonDesc: function() {
                if (this.id) return "";
                var e = this.getGameTotalAmount(), t = e.total;
                return e.needPay ? t ? "含 2% 手续费 ￥" + (0, _currency2.default)(t).multiply(.01).multiply(.02).format() : "需收取红包总金额 2% 的手续费" : "";
            },
            minuteInterval: function() {
                return 1;
            },
            conditionCheck: function() {
                return this.startCheck ? this.gameUserCount || this.drawtime ? "success" : "error" : "success";
            },
            displayDatetime: function() {
                if (!this.drawtime) return {};
                var e = (0, _moment2.default)(this.drawtime), t = "";
                return e.isSame((0, _moment2.default)(), "year") ? t += e.format("M月D日") : t += e.format("YYYY年M月D日"), 
                {
                    year: t,
                    week: e.format("ddd"),
                    time: e.format("HH:mm")
                };
            }
        }, a.events = {
            DP_DatetimeChange: function(e) {
                a.drawtime = e;
            },
            PayFail: function(e) {
                console.log("fail");
            },
            PaySuccess: function(e) {
                a.payed = !0, a.viewType = "pro", a.$apply();
            },
            SwitchItemChoose: function(e, t) {
                a.groupSelectorIndex = t;
            }
        }, a.data = {
            navigationTitle: "抽奖助手",
            initialGameDescription: "",
            gameDescription: "",
            viewType: "default",
            id: "",
            inited: !1,
            gamePicture: "",
            initGameUserCount: "",
            gameUserCount: "",
            gameEndType: -1,
            drawtime: null,
            startCheck: !1,
            dateToggle: !1,
            appMaxUserCount: 1024,
            configWidth: "auto",
            configListWidth: "auto",
            animationData: {},
            payType: "pro",
            unusedCount: 0,
            gamePrizes: [ a.getInitGamePrize() ],
            initialGamePrizes: [ a.getInitGamePrize() ],
            payed: !1,
            createButtonIcon: "",
            imageStyle: "",
            gameType: "physical",
            avaliableRedPacket: !0,
            numberOfPeopleError: null,
            max_vprize_count: 100,
            payed_max_vprize_count: 1e3,
            alertType: "user",
            groupable: !1,
            groupSelectorList: [ 2, 4, 6, 8 ],
            groupSelectorIndex: 2,
            needGetUserInfo: !0,
            tipsAnimationData: {},
            isLimitTimeFree: !1,
            isEnableRedpacket: !0,
            createTipsShow: !1,
            buttonStyle: "background: #e5c527; color: rgba(0, 0, 0, 0.7);",
            piPopupboxId: "piyixia",
            randomAnimate: !1,
            randomAnimatePrizes: [],
            randomAnimationData: {},
            forceHideGetUserInfo: !1
        }, a._userRandomPrize = [], a.methods = {
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
            randomPrize: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, a, n, i, s, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!this._randomPrize) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            return this._randomPrize = !0, r = +t.target.dataset.index, a = this.getRandomPrize(), 
                            n = a.prize, this.randomAnimate = !0, this.randomAnimatePrizes = a.prizes, this.$apply(), 
                            i = 1e3, s = wx.createAnimation({
                                duration: i,
                                timingFunction: "ease-in-out"
                            }), o = 30 * (a.randomIndex + 1), s.translateY(-o).step(), this.randomAnimationData = s.export(), 
                            e.next = 16, new Promise(function(e) {
                                setTimeout(e, i);
                            });

                          case 16:
                            n && (this.gamePrizes[r].name = n.name, this.gamePrizes[r].count = n.default_count, 
                            this.initialGamePrizes[r].name = n.name, this.initialGamePrizes[r].count = n.default_count), 
                            this.randomAnimationData = {}, this._randomPrize = !1, this.randomAnimate = !1, 
                            this.methods.checkDataAndSync.call(this, t), this.$apply();

                          case 22:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            hidePiyixiaTip: function() {
                this.$broadcast("PopupBoxHide", "piyixia");
            },
            editGameDescription: function() {
                this.textarea.edit(this.gameDescription);
            },
            gameGroupableChange: function(e) {
                this.groupable = e.detail.value;
            },
            confirmCreate: function() {
                this.needCheckAlert = !1, this._createGame(this._e);
            },
            checkNumberOfPeople: function() {
                this.checkGameUserCount();
            },
            checkDataAndSync: function(e) {
                var t = +e.target.dataset.index, r = e.target.dataset.type, a = (0, _lodash2.default)(this.gamePrizes, "[" + t + "]." + r, "");
                this.checkPrizeItem(t, r, a), this.syncGamePrizes();
            },
            wranChangeTypeMoney: function() {
                this.id && wx.showToast({
                    title: "实物抽奖不支持改为红包抽奖",
                    icon: "none"
                });
            },
            wranChangeType: function() {
                this.id && wx.showToast({
                    title: "已支付的红包抽奖不支持改为实物抽奖",
                    icon: "none"
                });
            },
            wranChangeMoney: function() {
                this.id && wx.showToast({
                    title: "已支付的红包抽奖不支持更改红包金额和数量",
                    icon: "none"
                });
            },
            changeGameType: function(e, t) {
                var r = this;
                this.isChangingType = !0;
                var a = +t.target.dataset.index, n = (0, _lodash2.default)(this.gamePrizes, "[" + a + "].type", 1);
                if ((e = parseInt(e)) !== n) {
                    var i = this.getInitGamePrize();
                    i.type = e, this.gamePrizes[a] = i, this.syncGamePrizes(), setTimeout(function() {
                        r.isChangingType = !1;
                    }, 50);
                }
            },
            focusGameName: function(e) {
                this.initialGamePrizes.forEach(function(e) {
                    e.focus = !1;
                }), this.initialGamePrizes[e].focus = !0;
            },
            changeGameDescription: function(e) {
                this.gameDescription = e.detail.value;
            },
            deleteGamePrize: function(e) {
                1 !== this.gamePrizes.length && (this.id && 2 === this.gamePrizes[e].type || (this.gamePrizes.splice(e, 1), 
                this.initialGamePrizes.splice(e, 1), this.$apply()));
            },
            newGamePrize: function() {
                this.gamePrizes.length >= 5 || (this.gamePrizes.push(this.getInitGamePrize()), this.initialGamePrizes.push(this.getInitGamePrize()), 
                this.$apply());
            },
            changeToProView: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, (0, _analyse2.default)("edit_paidversion"), e.next = 4, this.needPayPro();

                          case 4:
                            if (t = e.sent, !this.isLimitTimeFree && !t) {
                                e.next = 11;
                                break;
                            }
                            return this.isLimitTimeFree ? this.payType = "free" : this.payType = "pro", this.$apply(), 
                            e.abrupt("return", this.$broadcast("PayShow", "pro"));

                          case 11:
                            this.viewType = "pro";

                          case 12:
                            this.initialGamePrizes = JSON.parse(JSON.stringify(this.gamePrizes)), this.$apply(), 
                            e.next = 20;
                            break;

                          case 16:
                            return e.prev = 16, e.t0 = e.catch(0), this.creating = !1, e.abrupt("return", wx.showToast({
                                title: "无法获取支付信息",
                                icon: "none"
                            }));

                          case 20:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, 16 ] ]);
                }));
                return e;
            }(),
            onChangeNumberOfPrize: function(e) {
                var t = +e.target.dataset.index;
                return this.gamePrizes[t].count = parseInt(e.detail.value), e.detail.value;
            },
            toggleDatetimePicker: function() {
                this.dateToggle = !this.dateToggle, this.dateToggle && (this.drawtime || (this.drawtime = this.$invoke("datetimepicker", "getNearDatetime", (0, 
                _moment2.default)().add(60, "minutes"))), this.$invoke("datetimepicker", "selectDatetime", this.drawtime));
            },
            chooseImage: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, _wepy2.default.chooseImage({
                                count: 1
                            });

                          case 3:
                            if (t = e.sent, console.log(t), !t.tempFilePaths[0]) {
                                e.next = 13;
                                break;
                            }
                            return e.next = 8, this.imageNeedCrop(t.tempFilePaths[0]);

                          case 8:
                            if (r = e.sent, !this.supportCrop || !r) {
                                e.next = 11;
                                break;
                            }
                            return e.abrupt("return", _wepy2.default.navigateTo({
                                url: "crop?image=" + encodeURIComponent(t.tempFilePaths[0])
                            }));

                          case 11:
                            return e.next = 13, this.uploadImage(t.tempFilePaths[0]);

                          case 13:
                            e.next = 20;
                            break;

                          case 15:
                            e.prev = 15, e.t0 = e.catch(0), wx.hideLoading && wx.hideLoading(), "chooseImage:fail cancel" !== e.t0.errMsg && _wepy2.default.showModal({
                                title: "提示",
                                content: "更换图片失败，请重新选择",
                                showCancel: !1
                            }), console.error(e.t0);

                          case 20:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, 15 ] ]);
                }));
                return e;
            }(),
            createGame: function(e) {
                this._createGame(e);
            },
            onPrizeAmountChange: function(e) {
                var t = +e.target.dataset.index;
                this.gamePrizes[t].amount = Math.round(parseFloat(100 * e.detail.value));
            },
            onPrizeChange: function(e) {
                var t = +e.target.dataset.index, r = _pangu2.default.spacing(e.detail.value);
                return this.gamePrizes[t].name = r, r;
            },
            syncData: function() {
                this.syncGamePrizes();
            },
            minus: function(e) {
                var t = this.gamePrizes[e].count;
                t = parseInt(t, 10), isNaN(t) && (t = 1), t--, t < 1 && (t = 1), this.gamePrizes[e].count = t, 
                this.syncGamePrizes();
            },
            plus: function(e) {
                var t = this.gamePrizes[e].count;
                t = parseInt(t, 10), isNaN(t) && (t = 1), t++, t > 100 && (t = 100), this.gamePrizes[e].count = t, 
                this.syncGamePrizes();
            },
            chooseCondition: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, r, a = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = [ "按时间自动开奖", "按人数自动开奖", "手动开奖" ], e.next = 3, this.$parent.isWxWork();

                          case 3:
                            r = e.sent, this.$parent.avaliable("chatroom") && !r && t.push("现场抽奖"), wx.showActionSheet({
                                itemList: t,
                                success: function(e) {
                                    var t = [ "time", "user", "manual", "chatroom" ];
                                    a.setCondition(t[e.tapIndex]), a.$apply();
                                },
                                fail: function(e) {
                                    console.log(e.errMsg);
                                }
                            });

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            onChangeNumberOfPeople: function(e) {
                var t = parseInt(e.detail.value, 10);
                isNaN(t) && (t = 0), this.gameUserCount = t;
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getDefaultRandomPrize",
        value: function() {
            var e = (0, _lodash2.default)(this.config, "default_index", []);
            if (0 === e.length) return null;
            var t = (0, _lodash2.default)(this.config, "prize_list", []);
            if (0 === t.length) return null;
            var r = Math.floor(Math.random() * e.length), a = t[e[r]];
            return a && this._userRandomPrize.push(a), a;
        }
    }, {
        key: "getRandomPrize",
        value: function() {
            var e = this, t = (0, _lodash2.default)(this.config, "prize_list", []).filter(function(t) {
                return !((0, _lodash6.default)(e._userRandomPrize, function(e) {
                    return e.name === t.name;
                }) > -1);
            });
            if (0 === t.length) {
                if (!((0, _lodash2.default)(this.config, "prize_list", []).length > 0)) return null;
                t = (0, _lodash2.default)(this.config, "prize_list", []), this._userRandomPrize = [];
            }
            var r = Math.floor(Math.random() * t.length), a = t[r];
            return a && this._userRandomPrize.push(a), {
                prize: a,
                prizes: t,
                randomIndex: r
            };
        }
    }, {
        key: "getInitGamePrize",
        value: function() {
            var e = this.getDefaultRandomPrize();
            return this.initialPrizeName && (e = {
                name: this.initialPrizeName,
                default_count: this.initialPrizeCount
            }, this.initialPrizeName = void 0), e ? {
                name: e.name,
                count: e.default_count,
                level: 1,
                type: 1
            } : {
                name: "",
                count: "",
                level: 1,
                type: 1
            };
        }
    }, {
        key: "checkGroupable",
        value: function() {
            var e = !0;
            if ("time" !== this.gameEndType && (e = !1), this.gamePrizes) for (var t = this.gamePrizes.length, r = 0; r < t; r++) 2 === this.gamePrizes[r].type && (e = !1);
            return !e && this.groupable && (this.groupable = !1, this.$apply()), e;
        }
    }, {
        key: "checkData",
        value: function() {
            for (var e = !0, t = 0, r = this.gamePrizes.length; t < r; t++) {
                var a = this.gamePrizes[t];
                1 === a.type ? (this.checkPrizeItem(t, "name", a.name) || (e = !1), this.checkPrizeItem(t, "count", a.count) || (e = !1)) : 2 === a.type && (this.checkPrizeItem(t, "amount", a.amount) || (e = !1), 
                this.checkPrizeItem(t, "count", a.count) || (e = !1));
            }
            return -1 === this.gameEndType && (e = !1), this.checkGameUserCount() || (e = !1), 
            this.checkDrawTime() || (e = !1), this.getGameTotalAmount().total > 5e6 && (wx.showToast({
                title: "红包抽奖总金额不能超过 50000 元",
                icon: "none"
            }), e = !1), e;
        }
    }, {
        key: "getGameTotalAmount",
        value: function() {
            var e = 0, t = !1;
            return (0, _lodash2.default)(this, "gamePrizes", []).forEach(function(r) {
                if (2 === r.type) {
                    var a = parseInt(r.count), n = parseInt(r.amount);
                    t = !0, a && n && !isNaN(a) && !isNaN(n) && n <= 2e4 && (e += a * n);
                }
            }), {
                total: e,
                needPay: t
            };
        }
    }, {
        key: "getGameType",
        value: function(e) {
            if (e) {
                var t = (0, _lodash2.default)(e.prizes, "data[0].type", null);
                if (t && 2 === t) return "money";
            }
            return "physical";
        }
    }, {
        key: "uploadImage",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = "/minalottery/cover/" + (0, _tools.fileName)(t), wx.showLoading && _wepy2.default.showLoading({
                            title: "上传中"
                        }), e.next = 4, (0, _upyun.upload)(t, r);

                      case 4:
                        a = e.sent, 200 === a.statusCode ? (this.gamePicture = "https://cdn.readhub.cn" + r, 
                        console.log(this.gamePicture), this.$apply()) : _wepy2.default.showModal({
                            title: "提示",
                            content: "更换图片失败，请重新选择",
                            showCancel: !1
                        }), wx.hideLoading && wx.hideLoading();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "checkPrizeItem",
        value: function(e, t, r) {
            var a = this.gamePrizes[e];
            if (this.isChangingType) return !0;
            var n = !1;
            if (r || (n = !0), "name" === t) ; else if ("amount" === t) (parseFloat(r) > 2e4 || parseFloat(r) < 100) && (n = !0); else if ("count" === t && (isNaN(r) && (n = !0), 
            "pro" === this.viewType && 2 === a.type ? parseInt(r) > this.payed_max_vprize_count && (n = !0) : "default" === this.viewType && 2 === a.type ? parseInt(r) > this.max_vprize_count && (n = !0) : parseInt(r) > 100 && (n = !0), 
            "user" === this.gameEndType)) {
                var i = parseInt(this.gameUserCount), s = 0;
                this.gamePrizes.forEach(function(e) {
                    var t = parseInt(e.count);
                    t && !isNaN(t) && (s += t);
                }), i && !isNaN(i) && s > i && (this.numberOfPeopleError = "error-1");
            }
            return (0, _lodash4.default)(this.gamePrizes[e], "errors." + t, n), !n;
        }
    }, {
        key: "checkGameUserCount",
        value: function() {
            var e = parseInt(this.gameUserCount), t = 0;
            return this.gamePrizes.forEach(function(e) {
                var r = parseInt(e.count);
                r && !isNaN(r) && (t += r);
            }), "user" !== this.gameEndType || (!e || isNaN(e) ? this.numberOfPeopleError = "error-0" : t > e ? this.numberOfPeopleError = "error-1" : e > 1024 && "pro" !== this.viewType ? this.numberOfPeopleError = "error-2" : this.numberOfPeopleError = null, 
            !this.numberOfPeopleError);
        }
    }, {
        key: "checkDrawTime",
        value: function() {
            return "time" !== this.gameEndType || !(!this.drawtime || !(this.drawtime > (0, 
            _moment2.default)() || this.drawtime <= (0, _moment2.default)().add(7, "days")));
        }
    }, {
        key: "showCreateTips",
        value: function() {
            this.createTipsShow = !0;
            var e = wx.createAnimation({
                duration: 300
            });
            e.top(0).step(), this.tipsAnimationData = e.export(), this.$apply();
        }
    }, {
        key: "hideCreateTips",
        value: function() {
            this.createTipsShow = !1;
            var e = wx.createAnimation({
                duration: 300
            });
            e.top(-126).step(), this.tipsAnimationData = e.export(), this.$apply();
        }
    }, {
        key: "syncGamePrizes",
        value: function() {
            try {
                var e = JSON.parse(JSON.stringify(this.gamePrizes));
                e.forEach(function(e) {
                    e.amount && (e.amount = e.amount / 100);
                }), this.initialGamePrizes = e;
            } catch (e) {
                console.error(e);
            }
        }
    }, {
        key: "getPayAmount",
        value: function(e) {
            var t = (0, _lodash2.default)(e.prizes, "[0].count", null), r = (0, _lodash2.default)(e.prizes, "[0].amount", null);
            return t && r ? Math.round(parseFloat(t * r * 1.02)) : 0;
        }
    }, {
        key: "imageNeedCrop",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getImageInfo({
                            src: t
                        });

                      case 3:
                        if (r = e.sent, 900 !== r.width || 450 !== r.height) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 6:
                        return e.abrupt("return", !0);

                      case 9:
                        return e.prev = 9, e.t0 = e.catch(0), console.error(e.t0), e.abrupt("return", !0);

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 9 ] ]);
            }));
            return e;
        }()
    }, {
        key: "checkGameMoneyPayment",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        r = 0, _wepy2.default.showLoading({
                            title: "支付确认中..."
                        });

                      case 2:
                        if (!(r < 5)) {
                            e.next = 21;
                            break;
                        }
                        return e.prev = 3, e.next = 6, (0, _pay.getGameByPaymentId)(t);

                      case 6:
                        if (a = e.sent, !(n = (0, _lodash2.default)(a, "data.id", null))) {
                            e.next = 11;
                            break;
                        }
                        return _wepy2.default.hideLoading(), e.abrupt("return", _wepy2.default.redirectTo({
                            url: "/pages/lottery/pages/game?id=" + n + "&from=create"
                        }));

                      case 11:
                        return e.next = 13, new Promise(function(e) {
                            setTimeout(e, 2e3);
                        });

                      case 13:
                        e.next = 18;
                        break;

                      case 15:
                        e.prev = 15, e.t0 = e.catch(3), console.error(e.t0);

                      case 18:
                        r++, e.next = 2;
                        break;

                      case 21:
                        _wepy2.default.hideLoading(), wx.showToast({
                            title: "支付确认失败",
                            icon: "none"
                        });

                      case 23:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 3, 15 ] ]);
            }));
            return e;
        }()
    }, {
        key: "_createMoneyGame",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, r && !isNaN(r)) {
                            e.next = 3;
                            break;
                        }
                        throw new Error("金额错误");

                      case 3:
                        return _wepy2.default.showLoading({
                            title: "生成订单..."
                        }), e.next = 6, (0, _pay.createPayment)({
                            product_id: 2048,
                            price: Math.round(parseFloat(1.02 * r)),
                            extra: t
                        });

                      case 6:
                        if (a = e.sent, _wepy2.default.hideLoading(), console.log(a), !a.errors) {
                            e.next = 11;
                            break;
                        }
                        throw new Error((0, _lodash2.default)(a.errors, "[0].title", "创建订单失败"));

                      case 11:
                        return a.data.request_info.timeStamp = "" + a.data.request_info.timeStamp, _wepy2.default.showLoading({
                            title: "支付中..."
                        }), e.next = 15, _wepy2.default.requestPayment(a.data.request_info);

                      case 15:
                        _wepy2.default.hideLoading(), this.checkGameMoneyPayment(a.data.id), e.next = 26;
                        break;

                      case 19:
                        e.prev = 19, e.t0 = e.catch(0), console.log(e.t0), _wepy2.default.hideLoading(), 
                        n = e.t0.message, "requestPayment:fail cancel" === e.t0.errMsg && (n = "已取消支付"), 
                        wx.showToast({
                            title: n,
                            icon: "none"
                        });

                      case 26:
                        return e.prev = 26, this.creating = !1, e.finish(26);

                      case 29:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 19, 26, 29 ] ]);
            }));
            return e;
        }()
    }, {
        key: "checkAlert",
        value: function() {
            var e = this.gameEndType;
            if (this.id) {
                if (_GameManager2.default.getEditGame().draw_type === e) return !1;
            }
            if ("user" === e) this.alertType = e; else if ("manual" === e) this.alertType = e; else if ("chatroom" === e) this.alertType = e; else {
                if (!this.groupable) return !1;
                this.alertType = "group";
            }
            return !0;
        }
    }, {
        key: "_createGame",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, n, i, s, o, u, c, h, p = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log(t), this._e = t, -2 !== (r = (0, _lodash2.default)(this.$parent.globalData, "userProfile.state"))) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", wx.showToast({
                            title: "账号违规已被屏蔽，不能发起抽奖",
                            icon: "none"
                        }));

                      case 5:
                        if (!this.creating) {
                            e.next = 7;
                            break;
                        }
                        return e.abrupt("return");

                      case 7:
                        if (this.creating = !0, this.startCheck = !0, this.checkData()) {
                            e.next = 16;
                            break;
                        }
                        return this.syncGamePrizes(), this.creating = !1, console.log("check Data fail"), 
                        this.$apply(), this.scrollToErrorPos(), e.abrupt("return");

                      case 16:
                        if (!this.needCheckAlert) {
                            e.next = 21;
                            break;
                        }
                        if (!this.checkAlert()) {
                            e.next = 21;
                            break;
                        }
                        return this.$apply(), this.creating = !1, e.abrupt("return", this.$broadcast("PopupBoxShow"));

                      case 21:
                        return this.needCheckAlert = !1, a = !1, e.prev = 23, e.next = 26, this.needPay();

                      case 26:
                        a = e.sent, e.next = 33;
                        break;

                      case 29:
                        return e.prev = 29, e.t0 = e.catch(23), this.creating = !1, e.abrupt("return", wx.showToast({
                            title: "无法获取支付信息",
                            icon: "none"
                        }));

                      case 33:
                        if (!a) {
                            e.next = 39;
                            break;
                        }
                        return this.creating = !1, this._e = t, this.payType = "default", this.$apply(), 
                        e.abrupt("return", this.$broadcast("PayShow"));

                      case 39:
                        if (this.gamePrizes = this.gamePrizes.map(function(e, t) {
                            return e.level = t + 1, 1 === e.level && (e.image = p.gamePicture), e;
                        }), n = {
                            draw_type: this.gameEndType,
                            description: this.gameDescription,
                            prizes: this.gamePrizes,
                            form_id: t.detail.formId,
                            theme: "funny"
                        }, this.groupable && (n.groupable = this.groupable, this.groupSelectorIndex > -1 ? n.group_max_user = parseInt(this.groupSelectorList[this.groupSelectorIndex]) : n.group_max_user || (n.group_max_user = 6)), 
                        this.gameUserCount && "user" === this.gameEndType && (n.min_user_count = parseInt(this.gameUserCount, 10)), 
                        this.drawtime && "time" === this.gameEndType && (n.latest_draw_time = this.drawtime.toISOString()), 
                        i = !1, this.id ? (n.id = this.id, i = !0) : i = !1, console.log(n), this.creating = !1, 
                        s = this.getGameTotalAmount(), !s.needPay || n.id) {
                            e.next = 51;
                            break;
                        }
                        return e.abrupt("return", this._createMoneyGame(n, s.total));

                      case 51:
                        return e.prev = 51, console.log("creating game", n), _wepy2.default.showLoading({
                            title: n.id ? "保存中..." : "创建中..."
                        }), e.next = 56, _GameManager2.default.createGame(n);

                      case 56:
                        if (o = e.sent, !(u = o.data) || !u.id) {
                            e.next = 70;
                            break;
                        }
                        if (this.creating = !1, c = "/pages/lottery/pages/game?id=" + u.id, i || (c = "/pages/lottery/pages/game?id=" + u.id + "&from=create"), 
                        !n.id) {
                            e.next = 67;
                            break;
                        }
                        return _GameManager2.default.temp("editGame", u, 3e3), e.abrupt("return", _wepy2.default.navigateBack());

                      case 67:
                        return e.abrupt("return", _wepy2.default.redirectTo({
                            url: c
                        }));

                      case 68:
                        e.next = 85;
                        break;

                      case 70:
                        if (h = "发起失败", console.log(o), 11007 !== (0, _lodash2.default)(o, "errors[0].code", null)) {
                            e.next = 76;
                            break;
                        }
                        h = "存在敏感词", e.next = 83;
                        break;

                      case 76:
                        if (12003 !== (0, _lodash2.default)(o, "errors[0].code", null) || this.isLimitTimeFree) {
                            e.next = 82;
                            break;
                        }
                        return this.creating = !1, this._e = t, e.abrupt("return", this.$broadcast("PayShow"));

                      case 82:
                        h = o.errors[0].title;

                      case 83:
                        return this.creating = !1, e.abrupt("return", wx.showToast({
                            title: h,
                            icon: "none"
                        }));

                      case 85:
                        e.next = 92;
                        break;

                      case 87:
                        e.prev = 87, e.t1 = e.catch(51), wx.showToast({
                            title: "发起失败",
                            icon: "none"
                        }), this.creating = !1, console.error(e.t1);

                      case 92:
                        return e.prev = 92, _wepy2.default.hideLoading(), e.finish(92);

                      case 95:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 23, 29 ], [ 51, 87, 92, 95 ] ]);
            }));
            return e;
        }()
    }, {
        key: "setCondition",
        value: function(e) {
            this.gameEndType = e;
        }
    }, {
        key: "scrollToErrorPos",
        value: function() {
            var e = this;
            wx.pageScrollTo && wx.createSelectorQuery && setTimeout(function() {
                var t = wx.createSelectorQuery();
                t.selectViewport().scrollOffset(), t.select(".error").boundingClientRect(), t.exec(function(t) {
                    var r = t[0].scrollTop, a = t[1], n = r + a.top - e.systemInfo.screenHeight + 64 + a.height + 50;
                    n > 0 ? wx.pageScrollTo({
                        scrollTop: n
                    }) : wx.pageScrollTo({
                        scrollTop: 0
                    });
                });
            }, 250);
        }
    }, {
        key: "needPay",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("user" === this.gameEndType) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 2:
                        if (!this.id) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 4:
                        if (!(parseInt(this.gameUserCount, 10) <= this.appMaxUserCount)) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 6:
                        if (!this.payed) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 8:
                        return e.next = 10, (0, _pay.getUnusedVoucher)();

                      case 10:
                        if (t = e.sent, !(t.meta.count > 0)) {
                            e.next = 13;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 13:
                        return e.abrupt("return", !0);

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "needPayPro",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.payed) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 2:
                        if (!this.isLimitTimeFree) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 4:
                        return e.next = 6, (0, _pay.getUnusedVoucher)();

                      case 6:
                        if (t = e.sent, this.unusedCount = t.meta.count, this.$apply(), !(t.meta.count > 0)) {
                            e.next = 11;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 11:
                        return e.abrupt("return", !0);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getGamePicture",
        value: function(e) {
            for (var t = 0, r = e.length; t < r; t++) if (e[t].image) return e[t].image;
        }
    }, {
        key: "initPage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.id) {
                            e.next = 21;
                            break;
                        }
                        if (t = _GameManager2.default.getEditGame(), t.id === this.id) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return", _wepy2.default.navigateBack());

                      case 4:
                        this.groupable = !!t.groupable, this.group_max_user && (this.groupSelectorIndex = (0, 
                        _lodash6.default)(this.groupSelectorList, function(e) {
                            return "" + e == "" + r.group_max_user;
                        })), this.gameType = this.getGameType(t), this.gamePrizes = t.prizes.data, this.syncGamePrizes(), 
                        this.gamePicture = this.getGamePicture(this.gamePrizes), this.gameUserCount = t.min_user_count, 
                        this.gameDescription = t.description, this.initialGameDescription = t.description, 
                        this.initGameUserCount = t.min_user_count, this.gameEndType = t.draw_type, this.drawtime = (0, 
                        _moment2.default)(t.latest_draw_time), this.$invoke("datetimepicker", "selectDatetime", this.drawtime), 
                        this.startCheck = !1, t.prizes.data.length > 1 || this.gameUserCount > 1024 || t.description ? this.viewType = "pro" : this.viewType = "default", 
                        e.next = 30;
                        break;

                      case 21:
                        this.viewType = "default", this.gamePrizes = [ this.getInitGamePrize() ], this.syncGamePrizes(), 
                        this.gamePicture = "", this.initGameUserCount = "", this.gameEndType = "time", this.drawtime = null, 
                        this.startCheck = !1, this.setCondition(this.gameEndType);

                      case 30:
                        "chatroom" === this.gameEndType && (this.createButtonIcon = "https://cdn.readhub.cn/mina/lottery/real-time-icon@3x.png"), 
                        this.$apply();

                      case 32:
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
            this.$parent.globalData.cropImage && (this.uploadImage(this.$parent.globalData.cropImage), 
            this.$parent.globalData.cropImage = ""), this.textarea && (this.gameDescription = this.textarea.getContent(), 
            this.$apply()), (0, _analyse.screenView)("createwithfun");
        }
    }, {
        key: "onUnload",
        value: function() {
            this.id = "", this.inited = !1, this.gamePicture = "", this.gameUserCount = "", 
            this.gameEndType = -1, this.drawtime = null, this.startCheck = !1, this.dateToggle = !1, 
            this.payed = !1, this.viewType = "default", this.gameDescription = "", this.initialGameDescription = "", 
            this.unusedCount = 0, this.gamePrizes = [ this.getInitGamePrize() ], this.initialGamePrizes = [ this.getInitGamePrize() ], 
            this.payed = !1, this.payType = "pro", this.isChangingType = !1, this.needCheckAlert = !0, 
            this.textarea = null;
        }
    }, {
        key: "checkNeedPay",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, this.needPayPro();

                      case 3:
                        t = e.sent, this.payed = !t, this.$apply(), e.next = 11;
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
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.inited = !1, this.needCheckAlert = !0, e.prev = 2, this.initialPrizeName = t.prizeName, 
                        r = parseInt(t.prizeCount, 10), isNaN(r) && (r = 1), this.initialPrizeCount = r, 
                        this.id = t.id, e.next = 10, this.$parent.appInit();

                      case 10:
                        return this.config = this.$parent.globalData.themeFunnyConfig, e.next = 13, this.$parent.needUpdateUserInfo();

                      case 13:
                        return this.needGetUserInfo = e.sent, this.checkNeedPay(), e.next = 17, this.$parent.systemInfo();

                      case 17:
                        if (a = e.sent, this.systemInfo = a, this.supportCrop = !!wx.createCanvasContext, 
                        this.imageStyle = "width: 100%; height: " + a.windowWidth / 2 + "px;", this.configListWidth = 3 * a.windowWidth - 12 + "px", 
                        this.configWidth = a.windowWidth - 24 + "px", this.$parent.globalData.appConfig) {
                            e.next = 26;
                            break;
                        }
                        return e.next = 26, this.$parent.fetchConfig();

                      case 26:
                        return this.isLimitTimeFree = this.$parent.shelve("voucher"), this.isEnableRedpacket = !this.$parent.shelve("redpacket"), 
                        console.log("isLimitTimeFree", this.isLimitTimeFree), console.log("isEnableRedpacket", this.isEnableRedpacket), 
                        this.appMaxUserCount = (0, _lodash2.default)(this.$parent.globalData.appConfig, "pay_lottery_condition.max_user_count", 1024), 
                        this.max_vprize_count = (0, _lodash2.default)(this.$parent.globalData.appConfig, "pay_lottery_condition.max_vprize_count", 100), 
                        this.payed_max_vprize_count = (0, _lodash2.default)(this.$parent.globalData.appConfig, "pay_lottery_condition.payed_max_vprize_count", 1e3), 
                        e.next = 35, this.initPage();

                      case 35:
                        this.textarea = (0, _textarea.createTextArea)({
                            id: "gamedescription",
                            navigationTitle: "抽奖说明",
                            placeholder: "填写此次抽奖的说明",
                            value: this.gameDescription,
                            style: "min-height: 150px;"
                        }), e.next = 43;
                        break;

                      case 38:
                        return e.prev = 38, e.t0 = e.catch(2), this.id = "", console.error(e.t0), e.abrupt("return", _wepy2.default.navigateBack());

                      case 43:
                        return this.inited = !0, this.$apply(), e.next = 47, new Promise(function(e) {
                            setTimeout(e, 1e3);
                        });

                      case 47:
                        return e.next = 49, this.$parent.firstShow("piyixiatip");

                      case 49:
                        n = e.sent, n && this.$broadcast("PopupBoxShow", "piyixia");

                      case 51:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 2, 38 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/createwithfun"));