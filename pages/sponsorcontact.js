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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _analyse = require("./../utils/analyse.js"), _chou = require("./../services/chou.js"), Index = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.config = {
            navigationBarTitleText: "联系我们",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, r.data = {
            navigationTitle: "联系我们",
            text: ""
        }, r.events = {
            onPopupBoxHide: function() {}
        }, r.methods = {
            userInput: function(e) {
                this.text = e.detail.value;
            },
            submit: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!this.requesting) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            if (this.requesting = !0, e.prev = 3, !this.text) {
                                e.next = 11;
                                break;
                            }
                            return e.next = 7, (0, _chou.sponsorRequest)(this.text);

                          case 7:
                            t = e.sent, console.log(t), _wepy2.default.showToast({
                                title: "已提交"
                            }), setTimeout(function() {
                                _wepy2.default.navigateBack();
                            }, 1500);

                          case 11:
                            e.next = 16;
                            break;

                          case 13:
                            e.prev = 13, e.t0 = e.catch(3), wx.showToast({
                                title: "提交失败",
                                icon: "none"
                            });

                          case 16:
                            return e.prev = 16, this.requesting = !1, e.finish(16);

                          case 19:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 3, 13, 16, 19 ] ]);
                }));
                return e;
            }()
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onUnload",
        value: function() {
            this.requesting = !1;
        }
    }, {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("sponsorcontact");
        }
    }, {
        key: "onLoad",
        value: function() {
            this.requesting = !1;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/sponsorcontact"));