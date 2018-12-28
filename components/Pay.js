function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var i = t[o](a), s = i.value;
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
}), exports.default = void 0;

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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), Pay = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.data = {
            show: !1,
            payStyle: "",
            payTipId: "payTip",
            isAndroid: !1,
            iosUnsupportMessage: "iPhone 用户不能在小程序中继续"
        }, r.props = {
            type: {
                type: String,
                default: "pro",
                twoWay: !0
            },
            redpacket: {
                type: Boolean,
                default: !0,
                twoWay: !0
            }
        }, r.events = {
            PayShow: function(e) {
                r.payType = e || "default", r._show();
            },
            PayHide: function(e) {
                r._hide();
            }
        }, r.methods = {
            confirmPay: function() {
                return this.$broadcast("PopupBoxHide", this.payTipId);
            },
            hide: function() {
                this._hide(), this.$apply(), this.$emit("PayFail", {
                    type: 0,
                    payType: this.payType
                });
            },
            show: function() {
                this._show();
            },
            pay: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = (0, _lodash2.default)(this.$root.$parent.globalData, "userProfile.state"), 
                            this._hide(), this.$apply(), -2 !== t) {
                                e.next = 6;
                                break;
                            }
                            return this.$emit("PayFail", {
                                type: 1,
                                payType: this.payType
                            }), e.abrupt("return", wx.showToast({
                                title: "账号违规已被屏蔽，不能购买",
                                icon: "none"
                            }));

                          case 6:
                            if ("free" !== this.type) {
                                e.next = 8;
                                break;
                            }
                            return e.abrupt("return", this.$emit("PaySuccess", {
                                payType: this.payType
                            }));

                          case 8:
                            return e.abrupt("return", wx.navigateTo({
                                url: "/pages/lottery/pages/pay"
                            }));

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "_show",
        value: function() {
            this.show = !0;
        }
    }, {
        key: "_hide",
        value: function() {
            this.show = !1;
        }
    }, {
        key: "onHide",
        value: function() {
            console.log("hide");
        }
    }, {
        key: "onUnload",
        value: function() {
            console.log("onUnload");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$root.$parent.systemInfo();

                      case 2:
                        return t = e.sent, e.next = 5, this.$root.$parent.isAndroid();

                      case 5:
                        this.isAndroid = e.sent, this.payStyle = "width: " + (t.windowWidth - 50) + "px;", 
                        this.iosUnsupportMessage = (0, _lodash2.default)(this.$root.$parent.globalData, "appConfig.voucher_mention_ios", "iPhone 用户不能在小程序中继续"), 
                        this.$apply();

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.component);

exports.default = Pay;