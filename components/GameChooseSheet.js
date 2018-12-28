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
                    var i = t[r](a), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(u);
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), GameChooseSheet = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.data = {
            isIphoneX: !1,
            animationData: {},
            coverStyle: ""
        }, o.props = {
            show: {
                type: Boolean,
                default: !1
            }
        }, o.events = {
            GameChooseSheetShow: function(e) {
                _wepy2.default.navigateTo({
                    url: "/pages/create"
                });
            },
            GameChooseSheetHide: function(e) {
                o._hide();
            }
        }, o.methods = {
            hide: function() {
                this._hide();
            },
            createNormal: function() {
                this._hide(), _wepy2.default.navigateTo({
                    url: "/pages/create"
                });
            },
            createRoom: function() {
                this._hide(), _wepy2.default.navigateTo({
                    url: "/pages/create?type=chatroom"
                });
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "_hide",
        value: function() {
            var e = this, t = _wepy2.default.createAnimation({
                duration: 250
            });
            t.opacity(0).step(), this.animationData = t.export(), this.show = !1, this.$apply(), 
            setTimeout(function() {
                e.coverStyle = "z-index: -100;", e.$apply();
            }, 250);
        }
    }, {
        key: "_show",
        value: function() {
            var e = this, t = _wepy2.default.createAnimation({
                duration: 250
            });
            t.opacity(1).step(), this.coverStyle = "z-index: 998;", this.show = !0, this.$apply(), 
            setTimeout(function() {
                e.animationData = t.export(), e.$apply();
            }, 10);
        }
    }, {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$root.$parent.isIphoneX();

                      case 2:
                        this.isIphoneX = e.sent, this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.component);

exports.default = GameChooseSheet;