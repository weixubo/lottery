function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function o(r, a) {
                try {
                    var s = t[r](a), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(i);
            }
            return o("next");
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
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _analyse = require("./../utils/analyse.js"), _PopupBox = require("./../components/PopupBox.js"), _PopupBox2 = _interopRequireDefault(_PopupBox), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), Index = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        o.config = {
            navigationBarTitleText: "我要上首页",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, o.data = {
            navigationTitle: "我要上首页",
            text: "",
            isAndroid: !1,
            iosUnsupportMessage: "iPhone 用户不能在小程序中继续",
            isNarrowScreen: !1
        }, o.components = {
            PopupBox: _PopupBox2.default
        }, o.events = {
            onPopupBoxHide: function() {}
        }, o.methods = {
            contactUs: function() {
                _wepy2.default.navigateTo({
                    url: "/pages/sponsorcontact"
                });
            },
            selfSubmit: function() {
                wx.navigateTo({
                    url: "/pages/lottery/pages/pay?type=square"
                });
            },
            hide: function() {
                return this.$broadcast("PopupBoxHide");
            },
            toBuy: function() {
                wx.navigateTo({
                    url: "/pages/lottery/pages/pay?type=square"
                });
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShareAppMessage",
        value: function() {
            return {
                title: "我要上首页",
                path: "/pages/besponsor",
                success: function(e) {
                    console.log("share success", e);
                },
                fail: function() {
                    console.log("share error");
                }
            };
        }
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$parent.isAndroid();

                      case 2:
                        return this.isAndroid = e.sent, this.iosUnsupportMessage = (0, _lodash2.default)(this.$parent.globalData, "appConfig.square_mention_ios", "iPhone 用户不能在小程序中继续"), 
                        e.next = 6, this.$parent.systemInfo();

                      case 6:
                        t = e.sent, t.windowWidth < 375 && (this.isNarrowScreen = !0), this.$apply(), (0, 
                        _analyse.screenView)("besponsor");

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/besponsor"));