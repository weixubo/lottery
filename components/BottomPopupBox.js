function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function n(r, u) {
                try {
                    var p = t[r](u), i = p.value;
                } catch (e) {
                    return void o(e);
                }
                if (!p.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
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
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), ButtomPopupBox = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var u = arguments.length, p = Array(u), i = 0; i < u; i++) p[i] = arguments[i];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(p))), 
        n.data = {
            popupBoxShow: !1
        }, n.props = {
            showClose: {
                type: Boolean,
                default: !0
            },
            id: {
                type: String,
                default: "default-popupbox"
            }
        }, n.events = {
            PopupBoxShow: function(e, t) {
                t && (t = e), (t = t || "default-popupbox") === n.id && (n.popupBoxShow = !0, n.$emit("onPopupBoxShow", n.id), 
                n.$apply());
            },
            PopupBoxHide: function(e, t) {
                t && (t = e), (t = t || "default-popupbox") === n.id && (n.popupBoxShow = !1, n.$emit("onPopupBoxHide", n.id), 
                n.$apply());
            }
        }, n.methods = {
            closePopupBox: function() {
                this.popupBoxShow = !1, this.$emit("onPopupBoxHide", this.id);
            }
        }, r = o, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.component);

exports.default = ButtomPopupBox;