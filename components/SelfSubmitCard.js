function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
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
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _square = require("./../services/square.js"), squareOpts = _interopRequireWildcard(_square), _PopupBox = require("./PopupBox.js"), _PopupBox2 = _interopRequireDefault(_PopupBox), _chou = require("./../services/chou.js"), SelfSubmitCard = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.data = {
            reviewTipBoxId: "reviewTipBoxId"
        }, n.props = {
            items: {
                type: Array,
                default: [],
                twoWay: !0
            },
            hasPhone: {
                type: Boolean,
                default: !1,
                twoWay: !0
            },
            metaStyle: {
                type: String,
                default: ""
            }
        }, n.$repeat = {}, n.$props = {
            PopupBox: {
                "xmlns:v-bind": "",
                "v-bind:id.once": "reviewTipBoxId"
            }
        }, n.$events = {}, n.components = {
            PopupBox: _PopupBox2.default
        }, n.methods = {
            setTargetSquare: function(e) {
                this.targetIndex = e.currentTarget.dataset.index;
            },
            showReviewTip: function(e) {
                this.$broadcast("PopupBoxShow", this.reviewTipBoxId);
            },
            getPhoneNumber: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if ("getPhoneNumber:ok" === t.detail.errMsg) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return", _wepy2.default.showToast({
                                title: "绑定手机号后才能提交审核",
                                icon: "none"
                            }));

                          case 2:
                            return e.prev = 2, e.next = 5, this.$root.$parent.checkSessionExpired();

                          case 5:
                            if (r = e.sent, n = "", !r) {
                                e.next = 12;
                                break;
                            }
                            return e.next = 10, this.$root.$parent.getWechatLoginInfo();

                          case 10:
                            a = e.sent, n = a.code;

                          case 12:
                            return e.next = 14, (0, _chou.phoneNumber)(t.detail.encryptedData, t.detail.iv, n);

                          case 14:
                            this.$root.$parent.globalData.userProfile.phone_authorized = !0, this.$broadcast("PopupBoxShow", this.reviewTipBoxId), 
                            e.next = 22;
                            break;

                          case 18:
                            e.prev = 18, e.t0 = e.catch(2), console.error(e.t0), _wepy2.default.showToast({
                                title: e.t0.message,
                                icon: "none"
                            });

                          case 22:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 2, 18 ] ]);
                }));
                return e;
            }(),
            goToGame: function(e) {
                2 === e.verify_state || e.lottery && (2 === e.lottery.state || -1 === e.lottery.state) ? _wepy2.default.navigateTo({
                    url: "/pages/lottery/pages/game?id=" + e.lottery.id
                }) : e.lottery && _wepy2.default.navigateTo({
                    url: "/pages/square/pages/squaregame?sid=" + e.id
                });
            },
            refund: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            r = parseInt(t.currentTarget.dataset.index, 10), n = this.items[r], wx.navigateTo({
                                url: "/pages/square/pages/refund?id=" + n.id
                            });

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            review: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!this.reviewing) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            return wx.showLoading({
                                title: "",
                                mask: !0
                            }), this.reviewing = !0, r = parseInt(this.targetIndex, 10), n = this.items[r], 
                            a = t.detail.formId, e.prev = 7, e.next = 10, squareOpts.verify(n.id, a);

                          case 10:
                            this.$emit("SQUARE_LIST_REFRESH"), e.next = 16;
                            break;

                          case 13:
                            e.prev = 13, e.t0 = e.catch(7), _wepy2.default.showToast({
                                title: e.t0.message,
                                icon: "none"
                            });

                          case 16:
                            return e.prev = 16, this.reviewing = !1, wx.hideLoading(), this.$broadcast("PopupBoxHide", this.reviewTipBoxId), 
                            e.finish(16);

                          case 21:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 7, 13, 16, 21 ] ]);
                }));
                return e;
            }(),
            display: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, a, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _wepy2.default.showModal({
                                title: "提示",
                                content: "抽奖将立即显示在首页「自助福利」区域，可以被参与和分享",
                                confirmColor: "#e6575c"
                            });

                          case 2:
                            if (r = e.sent, !r.cancel) {
                                e.next = 5;
                                break;
                            }
                            return e.abrupt("return");

                          case 5:
                            if (!this.displaying) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return");

                          case 7:
                            return wx.showLoading({
                                title: "",
                                mask: !0
                            }), this.displaying = !0, n = parseInt(t.currentTarget.dataset.index, 10), a = this.items[n], 
                            o = t.detail.formId, e.prev = 12, e.next = 15, squareOpts.display(a.id, new Date().toISOString(), o);

                          case 15:
                            this.$emit("SQUARE_LIST_REFRESH"), e.next = 21;
                            break;

                          case 18:
                            e.prev = 18, e.t0 = e.catch(12), _wepy2.default.showToast({
                                title: e.t0.message,
                                icon: "none"
                            });

                          case 21:
                            return e.prev = 21, this.displaying = !1, wx.hideLoading(), e.finish(21);

                          case 25:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 12, 18, 21, 25 ] ]);
                }));
                return e;
            }(),
            edit: function(e) {
                _wepy2.default.navigateTo({
                    url: "/pages/square/pages/createsquaregame?id=" + e.id
                });
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {
            this.refunding = !1, this.reviewing = !1, this.displaying = !1;
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = SelfSubmitCard;