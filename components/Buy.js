function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function r(s, n) {
                try {
                    var a = t[s](n), i = a.value;
                } catch (e) {
                    return void o(e);
                }
                if (!a.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, o, r) {
        return o && e(t.prototype, o), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _BottomPopupBox = require("./BottomPopupBox.js"), _BottomPopupBox2 = _interopRequireDefault(_BottomPopupBox), _pay = require("./../services/pay.js"), Buy = function(e) {
    function t() {
        var e, o, r, s;
        _classCallCheck(this, t);
        for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.data = {
            payBoxId: "payBoxId",
            addr: null,
            step: 1
        }, r.$repeat = {}, r.$props = {
            PayBox: {
                "xmlns:v-bind": "",
                "v-bind:id.once": "payBoxId"
            }
        }, r.$events = {}, r.components = {
            PayBox: _BottomPopupBox2.default
        }, r.computed = {
            address: function() {
                return this.addr ? this.addr.userName + ", " + this.addr.telNumber + ", " + this.addr.provinceName + this.addr.cityName + this.addr.countyName + this.addr.detailInfo : "未选择";
            },
            buyTips: function() {
                if (this.game) {
                    if (2 === this.game.state || -1 === this.game.state) return "";
                    var e = (0, _lodash2.default)(this.game, "goods.bought", null);
                    return e ? "已购买 " + e + " 次" : "购买后如果抽中该奖品，将会为你免单";
                }
            },
            buttonTitle: function() {
                if (this.game) return this.game.goods && this.game.goods.soldout ? "已售罄" : 1 === this.game.state || 0 === this.game.state ? "等不及了，直接购买" : 2 === this.game.state && (0, 
                _lodash2.default)(this.game, "lucky_users.meta.my_prize_id", null) ? "抽中一个，还想买" : "抽奖结束，直接购买";
            },
            isShow: function() {
                return this.game && this.game.goods;
            }
        }, r.props = {
            game: {
                type: Object,
                default: null
            }
        }, r.events = {
            onPopupBoxHide: function(e) {
                e === this.payBoxId && (this.step = 1);
            }
        }, r.methods = {
            pay: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!this._paying) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            if (this._paying = !0, this.addr) {
                                e.next = 6;
                                break;
                            }
                            return this._paying = !1, e.abrupt("return", _wepy2.default.showToast({
                                title: "请填写收货地址",
                                icon: "none"
                            }));

                          case 6:
                            return e.prev = 6, _wepy2.default.showLoading({
                                title: ""
                            }), e.next = 10, (0, _pay.createPayment)({
                                product_id: 2049,
                                extra: {
                                    goods_id: this.game.goods.id,
                                    price: this.game.goods.price,
                                    contact: {
                                        detail: this.address
                                    },
                                    lottery_id: this.game.id
                                }
                            });

                          case 10:
                            if (t = e.sent, console.log(t), !t.errors) {
                                e.next = 14;
                                break;
                            }
                            throw new Error("创建订单信息失败");

                          case 14:
                            return t.data.request_info.timeStamp = "" + t.data.request_info.timeStamp, e.next = 17, 
                            _wepy2.default.requestPayment(t.data.request_info);

                          case 17:
                            return e.next = 19, new Promise(function(e, t) {
                                setTimeout(function() {
                                    e();
                                }, 1e3);
                            });

                          case 19:
                            _wepy2.default.hideLoading(), this.game.goods.bought = this.game.goods.bought ? this.game.goods.bought : 1, 
                            this.game.is_payed = !0, this.step = 2, this.$apply(), e.next = 31;
                            break;

                          case 26:
                            return e.prev = 26, e.t0 = e.catch(6), _wepy2.default.hideLoading(), console.error(e.t0), 
                            e.abrupt("return", _wepy2.default.showToast({
                                title: e.t0.message || "支付失败",
                                icon: "none"
                            }));

                          case 31:
                            return e.prev = 31, this._paying = !1, e.finish(31);

                          case 34:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 6, 26, 31, 34 ] ]);
                }));
                return e;
            }(),
            showPayBox: function() {
                (0, _lodash2.default)(this.game, "goods.soldout", !1) || this.$broadcast("PopupBoxShow", this.payBoxId);
            },
            addressManager: function() {
                var e = this;
                wx.getSetting({
                    success: function(t) {
                        t.authSetting["scope.address"] ? wx.chooseAddress({
                            success: function(t) {
                                delete t.errMsg, e.saveAddress(t);
                            }
                        }) : wx.authorize({
                            scope: "scope.address",
                            success: function() {
                                wx.chooseAddress({
                                    success: function(t) {
                                        delete t.errMsg, e.saveAddress(t);
                                    }
                                });
                            },
                            fail: function() {
                                wx.showModal({
                                    title: "提示",
                                    content: "需要获取您的收货地址信息，请到小程序设置页面打开授权",
                                    success: function(t) {
                                        t.confirm && wx.openSetting({
                                            success: function(t) {
                                                t.authSetting["scope.address"] && wx.chooseAddress({
                                                    success: function(t) {
                                                        delete t.errMsg, e.saveAddress(t);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }, s = o, _possibleConstructorReturn(r, s);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "saveAddress",
        value: function(e) {
            this.addr = e, console.log(e), this.$apply();
        }
    }, {
        key: "onLoad",
        value: function() {
            this.step = 1;
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = Buy;