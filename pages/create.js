function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, i) {
            function r(a, n) {
                try {
                    var s = t[a](n), o = s.value;
                } catch (e) {
                    return void i(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
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
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, i, r) {
        return i && e(t.prototype, i), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), _CreateGameButton = require("./../components/CreateGameButton.js"), _CreateGameButton2 = _interopRequireDefault(_CreateGameButton), _DateTimePicker = require("./../components/DateTimePicker.js"), _DateTimePicker2 = _interopRequireDefault(_DateTimePicker), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _upyun = require("./../services/upyun.js"), _tools = require("./../utils/tools.js"), _Pay = require("./../components/Pay.js"), _Pay2 = _interopRequireDefault(_Pay), _pay = require("./../services/pay.js"), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.set/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _lodash5 = require("./../npm/lodash.findindex/index.js"), _lodash6 = _interopRequireDefault(_lodash5), _lodash7 = require("./../npm/lodash.find/index.js"), _lodash8 = _interopRequireDefault(_lodash7), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _currency = require("./../npm/currency.js/dist/currency.min.js"), _currency2 = _interopRequireDefault(_currency), _PopupBox = require("./../components/PopupBox.js"), _PopupBox2 = _interopRequireDefault(_PopupBox), _SwitchSelector = require("./../components/SwitchSelector.js"), _SwitchSelector2 = _interopRequireDefault(_SwitchSelector), _textarea = require("./../libs/textarea.js"), _nodesToHtml = require("./../utils/nodesToHtml.js"), _nodesToHtml2 = _interopRequireDefault(_nodesToHtml), _chou = require("./../services/chou.js"), _pangu = require("./../npm/pangu/dist/browser/pangu.js"), _pangu2 = _interopRequireDefault(_pangu);

_moment2.default.locale("zh-cn");

var Index = function(e) {
    function t() {
        var e, i, r, a;
        _classCallCheck(this, t);
        for (var n = arguments.length, s = Array(n), o = 0; o < n; o++) s[o] = arguments[o];
        return i = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            enablePullDownRefresh: !1,
            backgroundTextStyle: "light",
            usingComponents: {
                HtmlViews: "../components/HtmlViews/HtmlViews",
                Layout: "../components/Layout/Layout"
            }
        }, r.$repeat = {}, r.$props = {
            CreateGameButton: {
                "v-bind:desc.sync": "buttonDesc",
                "v-bind:text.sync": "buttonText",
                "v-bind:icon.sync": "buttonIcon"
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
            LimitFreeBox: {
                "v-bind:id.once": "limitFreeBoxId"
            },
            SwitchSelector: {
                "v-bind:list.once": "groupSelectorList",
                "v-bind:selectedIndex.sync": "groupSelectorIndex"
            }
        }, r.$events = {}, r.components = {
            CreateGameButton: _CreateGameButton2.default,
            datetimepicker: _DateTimePicker2.default,
            Pay: _Pay2.default,
            PopupBox: _PopupBox2.default,
            LimitFreeBox: _PopupBox2.default,
            SwitchSelector: _SwitchSelector2.default
        }, r.computed = {
            dateDistance: function() {
                if (!this.drawtime) return "";
                var e = (0, _moment2.default)(), t = (0, _moment2.default)(this.drawtime), i = _moment2.default.duration(t.diff(e)), r = Math.floor(i.asDays());
                return 0 === r ? "(今天)" : "(" + r + " 天后)";
            },
            hasShopPrize: function() {
                var e = (0, _lodash8.default)(this.gamePrizes, function(e) {
                    return 4 === e.type;
                });
                return this.id || e && (this.viewType = "pro"), !!e;
            },
            previewContent: function() {
                if (this.textContent) {
                    var e = this.textContent.imageText;
                    return "string" != typeof e && (e = (0, _nodesToHtml2.default)(e)), e;
                }
                return null;
            },
            isGroupDisable: function() {
                return !this.checkGroupable();
            },
            isPasswordDisable: function() {
                return !this.checkPassword();
            },
            isShareDisable: function() {
                return !this.checkShare();
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
                    if (!this.drawtime) return "请设置开奖时间";
                    if (this.drawtime < (0, _moment2.default)()) return "时间不能早于当前";
                    if (this.drawtime > (0, _moment2.default)().add(7, "days")) return "时间不能大于一周";
                }
                return null;
            },
            buttonText: function() {
                if (this.id) return "保存修改";
                var e = this.getGameTotalAmount(), t = e.total;
                return e.needPay ? t ? "支付￥" + (0, _currency2.default)(t).multiply(.01).multiply(this.hasShopPrize ? 1 : 1.02).format() + " 发起抽奖" : "支付并发起抽奖" : "chatroom" === this.gameEndType ? "发起现场抽奖" : this.groupable ? "发起组队抽奖" : "发起新抽奖";
            },
            buttonIcon: function() {
                return "chatroom" === this.gameEndType ? "https://cdn.readhub.cn/mina/lottery/real-time-icon@3x.png" : this.groupable ? "https://cdn.readhub.cn/mina/lottery/icn-group-on-btn@3x.png" : "";
            },
            buttonDesc: function() {
                if (this.id || this.hasShopPrize) return "";
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
        }, r.events = {
            DP_DatetimeChange: function(e) {
                r.drawtime = e;
            },
            PayFail: function(e) {
                console.log("fail");
            },
            PaySuccess: function(e) {
                r.payed = !0, r.viewType = "pro", r.$apply();
            },
            SwitchItemChoose: function(e, t) {
                r.groupSelectorIndex = t;
            }
        }, r.data = {
            navigationTitle: "抽奖助手",
            initialGameDescription: "",
            gameDescription: "",
            viewType: "default",
            id: "",
            inited: !1,
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
            gamePrizes: [ r.getInitGamePrize() ],
            initialGamePrizes: [ r.getInitGamePrize() ],
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
            isThemeFunny: !1,
            richContentId: "rich-content-in-create",
            textContent: "",
            unusedSquareCount: 0,
            join_code: "",
            passwordable: !1,
            shareable: !1,
            proGuideAnimationData: {},
            limitFreeBoxId: "limitFreeBoxId",
            shopGuideAnimationData: {},
            forceHideGetUserInfo: !1
        }, r.methods = {
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
            removeGoods: function() {
                this.gamePrizes = [ this.getInitGamePrize() ], this.syncGamePrizes(), this.viewType = "default";
            },
            goToShop: function() {
                wx.navigateTo({
                    url: "/pages/shop/pages/list"
                });
            },
            addCodes: function(e) {
                var t = +e.currentTarget.dataset.index;
                _GameManager2.default.temp("optprize", this.gamePrizes[t]), this.checkCodes = !0, 
                wx.navigateTo({
                    url: "redemptioncodes"
                });
            },
            confirmLimitBox: function() {
                this.$broadcast("PopupBoxHide", this.limitFreeBoxId);
            },
            gamePasswordClick: function() {
                this.isPasswordDisable && (this.isGroupDisable ? wx.showToast({
                    title: "仅按时间开奖的实物抽奖支持口令",
                    icon: "none"
                }) : this.hasShopPrize ? wx.showToast({
                    title: "商城奖品不支持组队",
                    icon: "none"
                }) : wx.showToast({
                    title: "口令、组队二选一",
                    icon: "none"
                }));
            },
            showPasswordTip: function() {
                this.alertType = "password", this.$broadcast("PopupBoxShow");
            },
            onPawwordChange: function(e) {
                this.join_code = e.detail.value;
            },
            onPasswordableChange: function(e) {
                this.passwordable = e.detail.value, this.passwordable || (this.join_code = "");
            },
            collectFormId: function(e) {
                e.detail.formId && (this.formIdTimer && clearTimeout(this.formIdTimer), this.formIdTimer = setTimeout(function() {
                    (0, _chou.saveFormId)(e.detail.formId, "contacts");
                }, 300));
            },
            goToProGuide: function() {
                wx.navigateTo({
                    url: "/pages/uncommonly/pages/proguide"
                });
            },
            gameGroupClick: function() {
                this.isGroupDisable && (this.isPasswordDisable ? wx.showToast({
                    title: "仅按时间开奖的实物抽奖可以组队",
                    icon: "none"
                }) : this.hasVirtualPrize() ? wx.showToast({
                    title: "虚拟奖品不支持组队",
                    icon: "none"
                }) : wx.showToast({
                    title: "口令、组队二选一",
                    icon: "none"
                }));
            },
            showShareTip: function() {
                this.alertType = "share", this.$broadcast("PopupBoxShow");
            },
            gameShareableChange: function(e) {
                this.shareable = e.detail.value;
            },
            showGroupTip: function() {
                this.alertType = "group", this.$broadcast("PopupBoxShow");
            },
            goToSelfSubmit: function() {
                var e = this.$parent.globalData.profile.unused_square_ids;
                e.length > 0 && wx.redirectTo({
                    url: "/pages/square/pages/createsquaregame?id=" + e[0]
                });
            },
            clearTextContent: function() {
                var e = this;
                wx.showModal({
                    content: "清空图文介绍内容",
                    confirmText: "清空",
                    confirmColor: "#dd3e34",
                    success: function(t) {
                        t.confirm ? (e.textContent = e.$parent.globalData.editorHtmlContent = "", wx.setStorage({
                            key: "cleanEditorContent",
                            data: 1
                        }), e.$apply()) : t.cancel && console.log("用户点击取消");
                    }
                });
            },
            editRichContent: function() {
                this.id ? _wepy2.default.navigateTo({
                    url: "/pages/editor?gid=" + this.id
                }) : _wepy2.default.navigateTo({
                    url: "/pages/editor"
                });
            },
            piyixia: function() {
                (0, _analyse2.default)("edit_fun"), _wepy2.default.navigateTo({
                    url: "/pages/createwithfun"
                });
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
                var t = +e.target.dataset.index, i = e.target.dataset.type, r = (0, _lodash2.default)(this.gamePrizes, "[" + t + "]." + i, "");
                this.checkPrizeItem(t, i, r), this.syncGamePrizes();
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
                var i = this;
                this.isChangingType = !0;
                var r = +t.target.dataset.index, a = (0, _lodash2.default)(this.gamePrizes, "[" + r + "].type", 1);
                if (e = parseInt(e), (!this.id || 2 !== e && 2 !== a) && e !== a) {
                    if (this.id) {
                        var n = this._gamePrizes[r];
                        if (n.type === e) return this.gamePrizes[r] = n, this.syncGamePrizes(), void setTimeout(function() {
                            i.isChangingType = !1;
                        }, 50);
                    }
                    var s = this.getInitGamePrize(e);
                    s.type = e, this.gamePrizes[r] = s, this.syncGamePrizes(), setTimeout(function() {
                        i.isChangingType = !1;
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
                    var t, i, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, (0, _analyse2.default)("edit_paidversion"), e.next = 4, this.needPayPro();

                          case 4:
                            if (t = e.sent, this.isLimitTimeFree || !t) {
                                e.next = 11;
                                break;
                            }
                            return this.payType = "pro", this.$apply(), e.abrupt("return", this.$broadcast("PayShow", "pro"));

                          case 11:
                            this.viewType = "pro";

                          case 12:
                            if (this.isLimitTimeFree && this.$broadcast("PopupBoxShow", this.limitFreeBoxId), 
                            this.initialGamePrizes = JSON.parse(JSON.stringify(this.gamePrizes)), this.$apply(), 
                            "pro" !== this.viewType) {
                                e.next = 20;
                                break;
                            }
                            return e.next = 18, this.$parent.firstShow("proGuide");

                          case 18:
                            i = e.sent, i && (r = wx.createAnimation({
                                timingFunction: "ease"
                            }), r.left(-1).step({
                                duration: 500
                            }).left(-64).step({
                                delay: 1e3,
                                duration: 500
                            }), this.proGuideAnimationData = r.export(), this.$apply());

                          case 20:
                            e.next = 27;
                            break;

                          case 22:
                            e.prev = 22, e.t0 = e.catch(0), console.error(e.t0), this.creating = !1, wx.showToast({
                                title: "无法获取支付信息",
                                icon: "none"
                            });

                          case 27:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, 22 ] ]);
                }));
                return e;
            }(),
            onChangeNumberOfPrize: function(e) {
                var t = +e.target.dataset.index;
                return (0, _lodash4.default)(this, "gamePrizes[" + t + "].count", parseInt(e.detail.value)), 
                e.detail.value;
            },
            toggleDatetimePicker: function() {
                this.dateToggle = !this.dateToggle, this.dateToggle && (this.drawtime || (this.drawtime = this.$invoke("datetimepicker", "getNearDatetime", (0, 
                _moment2.default)().add(60, "minutes"))), this.$invoke("datetimepicker", "selectDatetime", this.drawtime));
            },
            chooseImage: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var i, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, this.chooseImageIndex = t, e.next = 4, _wepy2.default.chooseImage({
                                count: 1,
                                sizeType: [ "original" ]
                            });

                          case 4:
                            if (i = e.sent, console.log(i), !i.tempFilePaths[0]) {
                                e.next = 14;
                                break;
                            }
                            return e.next = 9, this.imageNeedCrop(i.tempFilePaths[0]);

                          case 9:
                            if (r = e.sent, !this.supportCrop || !r) {
                                e.next = 12;
                                break;
                            }
                            return e.abrupt("return", _wepy2.default.navigateTo({
                                url: "crop?image=" + encodeURIComponent(i.tempFilePaths[0])
                            }));

                          case 12:
                            return e.next = 14, this.uploadImage(i.tempFilePaths[0]);

                          case 14:
                            e.next = 21;
                            break;

                          case 16:
                            e.prev = 16, e.t0 = e.catch(0), wx.hideLoading && wx.hideLoading(), "chooseImage:fail cancel" !== e.t0.errMsg && _wepy2.default.showModal({
                                title: "提示",
                                content: "更换图片失败，请重新选择",
                                showCancel: !1
                            }), console.error(e.t0);

                          case 21:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, 16 ] ]);
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
                var t = +e.target.dataset.index, i = _pangu2.default.spacing(e.detail.value);
                return (0, _lodash4.default)(this, "gamePrizes[" + t + "].name", i), i;
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
                    var t, i, r = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = [ "按时间自动开奖", "按人数自动开奖", "手动开奖" ], e.next = 3, this.$parent.isWxWork();

                          case 3:
                            i = e.sent, this.$parent.avaliable("chatroom") && !i && "pro" !== this.viewType && t.push("现场抽奖"), 
                            wx.showActionSheet({
                                itemList: t,
                                success: function(e) {
                                    var t = [ "time", "user", "manual", "chatroom" ];
                                    r.setCondition(t[e.tapIndex]), r.$apply();
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
        }, a = i, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "hasVirtualPrize",
        value: function() {
            var e = !1;
            if (this.gamePrizes) for (var t = this.gamePrizes.length, i = 0; i < t; i++) if (3 === this.gamePrizes[i].type) {
                e = !0;
                break;
            }
            return e;
        }
    }, {
        key: "checkGroupable",
        value: function() {
            var e = !0;
            if (this.hasShopPrize) return !1;
            if ("time" !== this.gameEndType && (e = !1), this.gamePrizes) for (var t = this.gamePrizes.length, i = 0; i < t; i++) 2 !== this.gamePrizes[i].type && 3 !== this.gamePrizes[i].type || (e = !1);
            return this.passwordable && (e = !1), !e && this.groupable && (this.groupable = !1, 
            this.$apply()), e;
        }
    }, {
        key: "checkPassword",
        value: function() {
            var e = !0;
            return "chatroom" === this.gameEndType && (e = !1), this.groupable && (e = !1), 
            e || (this.join_code = "", this.passwordable = !1), e;
        }
    }, {
        key: "checkShare",
        value: function() {
            var e = !0;
            return "chatroom" === this.gameEndType && (e = !1), e || (this.shareable = !1), 
            e;
        }
    }, {
        key: "getInitGamePrize",
        value: function(e) {
            var t = void 0;
            return this.initialPrizeName && (t = {
                name: this.initialPrizeName,
                default_count: this.initialPrizeCount
            }, this.initialPrizeName = void 0), t = t ? {
                name: t.name,
                count: t.default_count,
                level: 1,
                type: 1
            } : {
                name: "",
                count: "",
                level: 1,
                type: 1
            }, 3 === e && (t.virtual_type = 1, t.virtual_prize_info = {
                key: ""
            }, t.virtual_prizes = []), t;
        }
    }, {
        key: "checkData",
        value: function() {
            for (var e = !0, t = 0, i = this.gamePrizes.length; t < i; t++) {
                var r = this.gamePrizes[t];
                1 === r.type ? (this.checkPrizeItem(t, "name", r.name) || (e = !1), this.checkPrizeItem(t, "count", r.count) || (e = !1)) : 2 === r.type ? (this.checkPrizeItem(t, "amount", r.amount) || (e = !1), 
                this.checkPrizeItem(t, "count", r.count, r.type) || (e = !1)) : 4 === r.type && (this.checkPrizeItem(t, "count", r.count) || (e = !1));
            }
            -1 === this.gameEndType && (e = !1), this.checkGameUserCount() || (e = !1), this.checkDrawTime() || (e = !1);
            var a = this.getGameTotalAmount();
            return !this.hasShopPrize && a.total > 5e6 && (wx.showToast({
                title: "红包抽奖总金额不能超过 50000 元",
                icon: "none"
            }), e = !1), e;
        }
    }, {
        key: "getGameTotalAmount",
        value: function() {
            var e = 0, t = !1;
            return (0, _lodash2.default)(this, "gamePrizes", []).forEach(function(i) {
                if (2 === i.type) {
                    var r = parseInt(i.count), a = parseInt(i.amount);
                    t = !0, r && a && !isNaN(r) && !isNaN(a) && a <= 2e4 && (e += r * a);
                } else if (4 === i.type) {
                    var n = parseInt(i.count), s = parseInt(i.price);
                    t = !0, n && s && !isNaN(n) && !isNaN(s) && (e += n * s);
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
                var i, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return i = "/minalottery/cover/" + (0, _tools.fileName)(t), wx.showLoading && _wepy2.default.showLoading({
                            title: "上传中"
                        }), e.next = 4, (0, _upyun.upload)(t, i);

                      case 4:
                        r = e.sent, 200 === r.statusCode ? (this.gamePrizes[this.chooseImageIndex].image = "https://cdn.readhub.cn" + i, 
                        this.initialGamePrizes[this.chooseImageIndex].image = "https://cdn.readhub.cn" + i, 
                        console.log(this.gamePrizes[this.chooseImageIndex]), this.$apply()) : _wepy2.default.showModal({
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
        value: function(e, t, i) {
            var r = this.gamePrizes[e];
            if (!r) return !0;
            if (this.isChangingType) return !0;
            var a = !1;
            if (i || (a = !0), "name" === t) ; else if ("amount" === t) (parseFloat(i) > 2e4 || parseFloat(i) < 100) && (a = !0); else if ("count" === t) {
                if (isNaN(i) && (a = !0), 4 === r.type) {
                    var n = this.gamePrizes[e];
                    parseInt(i) > n.inventory && (a = !0);
                } else "pro" === this.viewType && 2 === r.type ? parseInt(i) > this.payed_max_vprize_count && (a = !0) : "default" === this.viewType && 2 === r.type ? parseInt(i) > this.max_vprize_count && (a = !0) : "pro" === this.viewType && parseInt(i) > 1024 ? a = !0 : "pro" !== this.viewType && parseInt(i) > 100 && (a = !0);
                if ("user" === this.gameEndType) {
                    var s = parseInt(this.gameUserCount), o = 0;
                    this.gamePrizes.forEach(function(e) {
                        var t = parseInt(e.count);
                        t && !isNaN(t) && (o += t);
                    }), s && !isNaN(s) && o > s && (this.numberOfPeopleError = "error-1");
                }
            }
            return (0, _lodash4.default)(this.gamePrizes[e], "errors." + t, a), !a;
        }
    }, {
        key: "checkGameUserCount",
        value: function() {
            var e = parseInt(this.gameUserCount), t = 0;
            return this.gamePrizes.forEach(function(e) {
                var i = parseInt(e.count);
                i && !isNaN(i) && (t += i);
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
            var t = (0, _lodash2.default)(e.prizes, "[0].count", null), i = (0, _lodash2.default)(e.prizes, "[0].amount", null);
            return t && i ? Math.round(parseFloat(t * i * 1.02)) : 0;
        }
    }, {
        key: "checkGameMoneyPayment",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var i, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        i = 0, _wepy2.default.showLoading({
                            title: "支付确认中..."
                        });

                      case 2:
                        if (!(i < 5)) {
                            e.next = 21;
                            break;
                        }
                        return e.prev = 3, e.next = 6, (0, _pay.getGameByPaymentId)(t);

                      case 6:
                        if (r = e.sent, !(a = (0, _lodash2.default)(r, "data.id", null))) {
                            e.next = 11;
                            break;
                        }
                        return _wepy2.default.hideLoading(), e.abrupt("return", _wepy2.default.redirectTo({
                            url: "/pages/lottery/pages/game?id=" + a + "&from=create"
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
                        i++, e.next = 2;
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
            function e(e, i) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, i) {
                var r, a, n, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, i && !isNaN(i)) {
                            e.next = 3;
                            break;
                        }
                        throw new Error("金额错误");

                      case 3:
                        return _wepy2.default.showLoading({
                            title: "生成订单..."
                        }), r = 2048, a = Math.round(parseFloat(1.02 * i)), this.hasShopPrize && (r = 2050, 
                        a = Math.round(parseFloat(i))), e.next = 9, (0, _pay.createPayment)({
                            product_id: r,
                            price: a,
                            extra: t
                        });

                      case 9:
                        if (n = e.sent, _wepy2.default.hideLoading(), console.log(n), !n.errors) {
                            e.next = 14;
                            break;
                        }
                        throw new Error((0, _lodash2.default)(n.errors, "[0].title", "创建订单失败"));

                      case 14:
                        return n.data.request_info.timeStamp = "" + n.data.request_info.timeStamp, _wepy2.default.showLoading({
                            title: "支付中..."
                        }), e.next = 18, _wepy2.default.requestPayment(n.data.request_info);

                      case 18:
                        _wepy2.default.hideLoading(), this.checkGameMoneyPayment(n.data.id), e.next = 29;
                        break;

                      case 22:
                        e.prev = 22, e.t0 = e.catch(0), console.log(e.t0), _wepy2.default.hideLoading(), 
                        s = e.t0.message, "requestPayment:fail cancel" === e.t0.errMsg && (s = "已取消支付"), 
                        wx.showToast({
                            title: s,
                            icon: "none"
                        });

                      case 29:
                        return e.prev = 29, this.creating = !1, e.finish(29);

                      case 32:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 22, 29, 32 ] ]);
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
            if ("user" === e) this.alertType = e; else if ("manual" === e) this.alertType = e; else {
                if ("chatroom" !== e) return !1;
                this.alertType = e;
            }
            return !0;
        }
    }, {
        key: "cleanEditorContent",
        value: function() {
            this.$parent.globalData.editorHtmlContent = "", this.id || wx.setStorage({
                key: "cleanEditorContent",
                data: 1
            });
        }
    }, {
        key: "_createGame",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var i, r, a, n, s, o, u, c, h;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log(t), this._e = t, -2 !== (i = (0, _lodash2.default)(this.$parent.globalData, "userProfile.state"))) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", wx.showToast({
                            title: "账号违规已被屏蔽，不能发起抽奖",
                            icon: "none"
                        }));

                      case 5:
                        if (!this.hasShopPrize || "chatroom" !== this.gameEndType) {
                            e.next = 7;
                            break;
                        }
                        return e.abrupt("return", wx.showToast({
                            title: "现场抽奖不支持商城奖品",
                            icon: "none"
                        }));

                      case 7:
                        if (!this.creating) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return");

                      case 9:
                        if (this.creating = !0, this.startCheck = !0, this.checkData()) {
                            e.next = 18;
                            break;
                        }
                        return this.syncGamePrizes(), this.creating = !1, console.log("check Data fail"), 
                        this.$apply(), this.scrollToErrorPos(), e.abrupt("return");

                      case 18:
                        if (!this.needCheckAlert) {
                            e.next = 23;
                            break;
                        }
                        if (!this.checkAlert()) {
                            e.next = 23;
                            break;
                        }
                        return this.$apply(), this.creating = !1, e.abrupt("return", this.$broadcast("PopupBoxShow"));

                      case 23:
                        return this.needCheckAlert = !1, r = !1, e.prev = 25, e.next = 28, this.needPay();

                      case 28:
                        r = e.sent, e.next = 35;
                        break;

                      case 31:
                        return e.prev = 31, e.t0 = e.catch(25), this.creating = !1, e.abrupt("return", wx.showToast({
                            title: "无法获取支付信息",
                            icon: "none"
                        }));

                      case 35:
                        if (!r) {
                            e.next = 41;
                            break;
                        }
                        return this.creating = !1, this._e = t, this.payType = "default", this.$apply(), 
                        e.abrupt("return", this.$broadcast("PayShow"));

                      case 41:
                        if (this.gamePrizes = this.gamePrizes.map(function(e, t) {
                            return e.level = t + 1, 3 === e.type && (e.virtual_prize_info.key = e.name, e.virtual_prizes && (e.count = e.virtual_prizes.length)), 
                            e;
                        }), a = {
                            draw_type: this.gameEndType,
                            description: this.gameDescription,
                            prizes: this.gamePrizes,
                            form_id: t.detail.formId,
                            join_code: this.join_code
                        }, a.content = this.textContent || "", a.shareable = this.shareable, a.groupable = this.groupable, 
                        this.groupable && (this.groupSelectorIndex > -1 ? a.group_max_user = parseInt(this.groupSelectorList[this.groupSelectorIndex]) : a.group_max_user || (a.group_max_user = 6)), 
                        this.gameUserCount && "user" === this.gameEndType && (a.min_user_count = parseInt(this.gameUserCount, 10)), 
                        this.drawtime && "time" === this.gameEndType && (a.latest_draw_time = this.drawtime.toISOString()), 
                        n = !1, this.id ? (a.id = this.id, n = !0) : n = !1, console.log(a), this.creating = !1, 
                        s = this.getGameTotalAmount(), !s.needPay || a.id) {
                            e.next = 56;
                            break;
                        }
                        return e.abrupt("return", this._createMoneyGame(a, s.total));

                      case 56:
                        return e.prev = 56, console.log("creating game", a), _wepy2.default.showLoading({
                            title: a.id ? "保存中..." : "创建中..."
                        }), e.next = 61, _GameManager2.default.createGame(a);

                      case 61:
                        if (o = e.sent, _wepy2.default.hideLoading(), !(u = o.data) || !u.id) {
                            e.next = 77;
                            break;
                        }
                        if (this.creating = !1, c = "/pages/lottery/pages/game?id=" + u.id, n || (c = "/pages/lottery/pages/game?id=" + u.id + "&from=create"), 
                        !a.id) {
                            e.next = 73;
                            break;
                        }
                        return _GameManager2.default.temp("editGame", u, 3e3), e.abrupt("return", _wepy2.default.navigateBack());

                      case 73:
                        return this.cleanEditorContent(), e.abrupt("return", _wepy2.default.redirectTo({
                            url: c
                        }));

                      case 75:
                        e.next = 92;
                        break;

                      case 77:
                        if (h = "发起失败", console.log(o), 11007 !== (0, _lodash2.default)(o, "errors[0].code", null)) {
                            e.next = 83;
                            break;
                        }
                        h = "存在敏感词", e.next = 90;
                        break;

                      case 83:
                        if (12003 !== (0, _lodash2.default)(o, "errors[0].message", null) || this.isLimitTimeFree) {
                            e.next = 89;
                            break;
                        }
                        return this.creating = !1, this._e = t, e.abrupt("return", this.$broadcast("PayShow"));

                      case 89:
                        h = o.errors[0].title;

                      case 90:
                        this.creating = !1, wx.showToast({
                            title: h,
                            icon: "none"
                        });

                      case 92:
                        e.next = 99;
                        break;

                      case 94:
                        e.prev = 94, e.t1 = e.catch(56), wx.showToast({
                            title: e.t1.message,
                            icon: "none"
                        }), this.creating = !1, console.error(e.t1);

                      case 99:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 25, 31 ], [ 56, 94 ] ]);
            }));
            return e;
        }()
    }, {
        key: "imageNeedCrop",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getImageInfo({
                            src: t
                        });

                      case 3:
                        if (i = e.sent, 900 !== i.width || 450 !== i.height) {
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
        key: "setCondition",
        value: function(e) {
            this.gameEndType = e;
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
            for (var t = 0, i = e.length; t < i; t++) if (e[t].image) return e[t].image;
        }
    }, {
        key: "scrollToErrorPos",
        value: function() {
            var e = this;
            wx.pageScrollTo && wx.createSelectorQuery && setTimeout(function() {
                var t = wx.createSelectorQuery();
                t.selectViewport().scrollOffset(), t.select(".error").boundingClientRect(), t.exec(function(t) {
                    var i = t[0].scrollTop, r = t[1];
                    if (!r) return wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 0
                    });
                    var a = i + r.top - e.systemInfo.screenHeight + 64 + r.height + 50;
                    a > 0 ? wx.pageScrollTo({
                        scrollTop: a,
                        duration: 0
                    }) : wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 0
                    });
                });
            }, 250);
        }
    }, {
        key: "initPage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, i = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.id) {
                            e.next = 26;
                            break;
                        }
                        if (t = _GameManager2.default.getEditGame(), this.game = t, t.id === this.id) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", _wepy2.default.navigateBack());

                      case 5:
                        this.groupable = !!t.groupable, this.shareable = !!t.shareable, this.join_code = t.join_code, 
                        this.passwordable = !!this.join_code, this.game.group_max_user && (this.groupSelectorIndex = (0, 
                        _lodash6.default)(this.groupSelectorList, function(e) {
                            return "" + e == "" + i.game.group_max_user;
                        })), t.content && (this.$parent.globalData.editorHtmlContent = this.textContent = t.content, 
                        (0, _tools.checkEditorVersion)(t.content) || wx.showModal({
                            title: "警告",
                            content: "当前小程序版本不兼容某些图文内容，请升级小程序"
                        })), this.gameType = this.getGameType(t), this.gamePrizes = t.prizes.data, this._gamePrizes = JSON.parse(JSON.stringify(t.prizes.data)), 
                        this.syncGamePrizes(), this.gameUserCount = t.min_user_count, this.gameDescription = t.description, 
                        this.initialGameDescription = t.description, this.initGameUserCount = t.min_user_count, 
                        this.gameEndType = t.draw_type, this.drawtime = (0, _moment2.default)(t.latest_draw_time), 
                        this.$invoke("datetimepicker", "selectDatetime", this.drawtime), this.startCheck = !1, 
                        (0, _tools.isGamePro)(t) ? this.viewType = "pro" : this.viewType = "default", e.next = 34;
                        break;

                      case 26:
                        this.gamePrizes = [ this.getInitGamePrize() ], this.syncGamePrizes(), this.initGameUserCount = "", 
                        this.gameEndType = "time", this.join_code = "", this.drawtime = null, this.startCheck = !1, 
                        this.setCondition(this.gameEndType);

                      case 34:
                        "chatroom" === this.gameEndType && (this.createButtonIcon = "https://cdn.readhub.cn/mina/lottery/real-time-icon@3x.png"), 
                        this.$apply();

                      case 36:
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
            var e = this;
            try {
                var t = this.$parent.globalData.goods;
                t && this.inited && (this.showTimer = setTimeout(function() {
                    e.gamePrizes = [ {
                        name: t.name,
                        image: t.image,
                        price: t.price,
                        count: 1,
                        type: 4,
                        goods_id: t.id,
                        inventory: t.inventory
                    } ], e.initialGamePrizes = [ {
                        name: t.name,
                        image: t.image,
                        price: t.price,
                        count: 1,
                        type: 4,
                        goods_id: t.id,
                        inventory: t.inventory
                    } ], e.$parent.globalData.goods = null, e.$apply();
                }, 250)), this.syncGamePrizes(), this.$parent.globalData.cropImage && (this.uploadImage(this.$parent.globalData.cropImage), 
                this.$parent.globalData.cropImage = ""), this.textarea && (this.gameDescription = (0, 
                _tools.ncFormat)(this.textarea.getContent()), this.$apply()), this.$parent.globalData.editorHtmlContent && ((0, 
                _tools.checkEditorVersion)(this.$parent.globalData.editorHtmlContent) || wx.showModal({
                    title: "警告",
                    content: "当前小程序版本不兼容某些图文内容，请升级小程序"
                }), this.textContent = this.$parent.globalData.editorHtmlContent, this.$apply()), 
                (0, _analyse.screenView)("create"), this.checkNeedPay();
            } catch (e) {
                console.error(e);
            }
        }
    }, {
        key: "onUnload",
        value: function() {
            this.textarea = null, this.game = null, this.id = "", this.inited = !1, this.checkCodes = !1, 
            this.gameUserCount = "", this.gameEndType = -1, this.drawtime = null, this.startCheck = !1, 
            this.dateToggle = !1, this.payed = !1, this.viewType = "default", this.gameDescription = "", 
            this.initialGameDescription = "", this.unusedCount = 0, this.gamePrizes = [ this.getInitGamePrize() ], 
            this.initialGamePrizes = [ this.getInitGamePrize() ], this.payType = "pro", this.isChangingType = !1, 
            this.needCheckAlert = !0, this.shopGuideTimer && clearTimeout(this.shopGuideTimer), 
            this.showTimer && clearTimeout(this.showTimer), wx.setStorage({
                key: "cleanEditorContent",
                data: 2
            });
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
                var i, r, a, n, s = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.inited = !1, this.needCheckAlert = !0, t.view && (this.viewType = t.view), 
                        e.prev = 3, this.initialPrizeName = t.prizeName, i = parseInt(t.prizeCount, 10), 
                        isNaN(i) && (i = 1), this.initialPrizeCount = i, this.id = t.id, this.cleanEditorContent(), 
                        e.next = 12, this.$parent.appInit();

                      case 12:
                        return this.unusedSquareCount = this.$parent.globalData.profile.unused_square_ids.length, 
                        e.next = 15, this.$parent.needUpdateUserInfo();

                      case 15:
                        return this.needGetUserInfo = e.sent, e.next = 18, this.$parent.systemInfo();

                      case 18:
                        if (r = e.sent, this.systemInfo = r, this.supportCrop = !!wx.createCanvasContext, 
                        this.imageStyle = "width: 100%; height: " + r.windowWidth / 2 + "px;", this.configListWidth = 3 * r.windowWidth - 12 + "px", 
                        this.configWidth = r.windowWidth - 24 + "px", this.$parent.globalData.appConfig) {
                            e.next = 27;
                            break;
                        }
                        return e.next = 27, this.$parent.fetchConfig();

                      case 27:
                        return this.isLimitTimeFree = this.$parent.shelve("voucher"), this.isLimitTimeFree && "pro" === this.viewType && this.$broadcast("PopupBoxShow", this.limitFreeBoxId), 
                        this.isThemeFunny = !this.$parent.shelve("theme_funny"), this.isEnableRedpacket = !this.$parent.shelve("redpacket"), 
                        console.log("isLimitTimeFree", this.isLimitTimeFree), console.log("isEnableRedpacket", this.isEnableRedpacket), 
                        this.appMaxUserCount = (0, _lodash2.default)(this.$parent.globalData.appConfig, "pay_lottery_condition.max_user_count", 1024), 
                        this.max_vprize_count = (0, _lodash2.default)(this.$parent.globalData.appConfig, "pay_lottery_condition.max_vprize_count", 100), 
                        this.payed_max_vprize_count = (0, _lodash2.default)(this.$parent.globalData.appConfig, "pay_lottery_condition.payed_max_vprize_count", 1e3), 
                        e.next = 38, this.initPage();

                      case 38:
                        this.textarea = (0, _textarea.createTextArea)({
                            id: "gamedescription",
                            navigationTitle: "抽奖说明",
                            placeholder: "填写此次抽奖的说明",
                            value: this.gameDescription,
                            style: "min-height: 150px;"
                        }), e.next = 46;
                        break;

                      case 41:
                        return e.prev = 41, e.t0 = e.catch(3), this.id = "", console.error(e.t0), e.abrupt("return", _wepy2.default.navigateBack());

                      case 46:
                        return a = this.$parent.globalData.goods, a && (this.gamePrizes = [ {
                            name: a.name,
                            image: a.image,
                            price: a.price,
                            count: 1,
                            type: 4,
                            goods_id: a.id,
                            inventory: a.inventory
                        } ], this.initialGamePrizes = [ {
                            name: a.name,
                            image: a.image,
                            price: a.price,
                            count: 1,
                            type: 4,
                            goods_id: a.id,
                            inventory: a.inventory
                        } ], this.$parent.globalData.goods = null), this.inited = !0, this.$apply(), e.next = 52, 
                        new Promise(function(e) {
                            setTimeout(e, 1e3);
                        });

                      case 52:
                        return this.createTipsShow = !1, this.createTipsShow && this.showCreateTips(), e.next = 56, 
                        this.$parent.firstShow("createShopGuide");

                      case 56:
                        n = e.sent, n && (this.shopGuideTimer = setTimeout(function() {
                            var e = wx.createAnimation();
                            e.translateY(0).step({
                                duration: 1
                            }).opacity(1).step({
                                duration: 250
                            }).opacity(0).step({
                                duration: 250,
                                delay: 2300
                            }).translateY(-500).step({
                                duration: 1
                            }), s.shopGuideAnimationData = e.export(), s.$apply();
                        }, 500));

                      case 58:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 3, 41 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/create"));