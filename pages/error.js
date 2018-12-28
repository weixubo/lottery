function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _analyse = require("./../utils/analyse.js"), MeetUsers = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "提示",
            backgroundColor: "#f0f0f0",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, n.data = {
            navigationTitle: "提示",
            error: null,
            supportOpenSetting: !0,
            authImageUrl: "",
            errorImageUrl: "https://cdn.readhub.cn/mina/lottery/error_icon@3x.png"
        }, n.methods = {
            reload: function() {
                _wepy2.default.switchTab({
                    url: "index"
                });
            },
            openSetting: function() {
                this.supportOpenSetting ? wx.showModal({
                    title: "提示",
                    content: "需要获取您的用户信息，请到小程序设置页面打开授权",
                    success: function(e) {
                        e.confirm && wx.openSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] && _wepy2.default.switchTab({
                                    url: "index"
                                });
                            }
                        });
                    }
                }) : _wepy2.default.showModal({
                    title: "授权方式",
                    content: "方式一：在小程序列表页，长按并滑动删除「抽奖助手」搜索「抽奖助手」并重新进入进行授权。        方式二：点击右上角「...」---\x3e「关于抽奖助手」，在跳转后的页面，点击右上角「...」---\x3e「设置」，进行授权。",
                    confirmText: "知道了",
                    showCancel: !1
                });
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onUnload",
        value: function() {
            this.error = null;
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
                        if (e.prev = 0, (0, _analyse.screenView)("error"), "auth" !== this.error.errorType) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, this.$parent.login();

                      case 5:
                        _wepy2.default.switchTab({
                            url: "index"
                        });

                      case 6:
                        e.next = 11;
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.error = this.$parent.globalData.error, console.log(this.error), this.isAndroid = this.$parent.isAndroid();
                        try {
                            this.supportOpenSetting = wx.canIUse("openSetting");
                        } catch (e) {
                            this.supportOpenSetting = !1;
                        }

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

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(MeetUsers, "pages/error"));