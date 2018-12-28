function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
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
        return new Promise(function(e, n) {
            function r(o, i) {
                try {
                    var a = t[o](i), u = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
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

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _createClass = function() {
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _ButtomButton = require("./../components/ButtomButton.js"), _ButtomButton2 = _interopRequireDefault(_ButtomButton), _richText = require("./../utils/richText.js"), richText = _interopRequireWildcard(_richText), _tools = require("./../utils/tools.js"), Index = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.config = {
            navigationBarTitleText: "添加图文详情",
            disableScroll: !0,
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, r.data = {
            navigationTitle: "添加图文详情",
            containerStyle: "",
            contents: [],
            src: null
        }, r.methods = {
            onMessage: function(e) {
                var t = e.detail.data[0];
                "object" === (void 0 === t ? "undefined" : _typeof(t)) && t.imageText ? this.$parent.globalData.editorHtmlContent = t : this.$parent.globalData.editorHtmlContent = "", 
                console.log("onmessage", e);
            }
        }, r.components = {
            ButtomButton: _ButtomButton2.default
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onHide",
        value: function() {
            console.log("onhide");
        }
    }, {
        key: "onUnload",
        value: function() {
            console.log("unload");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, o, i, a, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.tree = [ richText.element("p") ], this.contents = this.tree.map(function(e) {
                            return e.toJSON();
                        }), n = "", r = 2, e.prev = 4, e.next = 7, _wepy2.default.getStorage({
                            key: "SESSION_NEW_1"
                        });

                      case 7:
                        return o = e.sent, n = o.data.token, e.next = 11, _wepy2.default.getStorage({
                            key: "cleanEditorContent"
                        });

                      case 11:
                        i = e.sent, r = i.data, 1 === parseInt(r, 10) && wx.setStorage({
                            key: "cleanEditorContent",
                            data: 2
                        }), e.next = 18;
                        break;

                      case 16:
                        e.prev = 16, e.t0 = e.catch(4);

                      case 18:
                        return e.next = 20, this.$parent.systemInfo();

                      case 20:
                        a = e.sent, u = 0, (0, _tools.versionCompare)(a.version, "6.7.2") >= 0 && (u = 1), 
                        a.statusBarHeight ? this.src = "https://cdn.readhub.cn/mina-editor/index.html?bh=" + a.statusBarHeight + "&h=" + a.screenHeight + "&c=" + r + "&t=" + new Date().getTime() + "&n=" + u : this.src = "https://cdn.readhub.cn/mina-editor/index.html?bh=20&h=" + a.screenHeight + "&c=" + r + "&t=" + new Date().getTime() + "&n=" + u, 
                        t.gid && (this.src += "&a=" + n + "&id=" + t.gid), this.$apply();

                      case 26:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 4, 16 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/editor"));