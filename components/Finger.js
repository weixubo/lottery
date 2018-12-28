function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), Finger = function(e) {
    function t() {
        var e, n, o, i;
        _classCallCheck(this, t);
        for (var a = arguments.length, r = Array(a), u = 0; u < a; u++) r[u] = arguments[u];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        o.props = {}, o.methods = {
            _handleTouchStart: function(e) {
                o.now = new Date().getTime(), o.x1 = e.touches[0].pageX, o.y1 = e.touches[0].pageY, 
                o.delta = o.now - (o.last || o.now), null !== o.preTapPosition.x && (o.isDoubleTap = o.delta > 0 && o.delta <= 250 && Math.abs(o.preTapPosition.x - o.x1) < 30 && Math.abs(o.preTapPosition.y - o.y1) < 30), 
                o.preTapPosition.x = o.x1, o.preTapPosition.y = o.y1, o.last = o.now;
                var t = o.preV;
                if (e.touches.length > 1) {
                    var n = {
                        x: e.touches[1].pageX - o.x1,
                        y: e.touches[1].pageY - o.y1
                    };
                    t.x = n.x, t.y = n.y, o.pinchStartLen = o.getLen(t), o._emitEvent("onMultipointStart", e);
                }
                o.longTapTimeout = setTimeout(function() {
                    this._emitEvent("onLongTap", e);
                }.bind(o), 750), o._emitEvent("onTouchStart", e);
            },
            _handleTouchMove: function(e) {
                var t = o.preV, n = e.touches.length, i = e.touches[0].pageX, a = e.touches[0].pageY;
                if (o.isDoubleTap = !1, n > 1) {
                    var r = {
                        x: e.touches[1].pageX - i,
                        y: e.touches[1].pageY - a
                    };
                    null !== t.x && (o.pinchStartLen > 0 && (e.scale = o.getLen(r) / o.pinchStartLen, 
                    o._emitEvent("onPinch", e)), e.angle = o.getRotateAngle(r, t), o._emitEvent("onRotate", e)), 
                    t.x = r.x, t.y = r.y;
                } else null !== o.x2 ? (e.deltaX = i - o.x2, e.deltaY = a - o.y2) : (e.deltaX = 0, 
                e.deltaY = 0), o._emitEvent("onPressMove", e);
                o._cancelLongTap(), o.x2 = i, o.y2 = a;
            },
            _handleTouchCancel: function(e) {
                clearInterval(o.tapTimeout), clearInterval(o.longTapTimeout), clearInterval(o.swipeTimeout), 
                o._emitEvent("onTouchEnd", e);
            },
            _handleTouchEnd: function(e) {
                o._cancelLongTap();
                var t = o;
                e.touches.length < 2 && o._emitEvent("onMultipointEnd", e), o.x2 && Math.abs(o.x1 - o.x2) > 30 || o.y2 && Math.abs(o.preV.y - o.y2) > 30 ? (e.direction = o._swipeDirection(o.x1, o.x2, o.y1, o.y2), 
                o.swipeTimeout = setTimeout(function() {
                    t._emitEvent("onSwipe", e);
                }, 0)) : o.tapTimeout = setTimeout(function() {
                    t._emitEvent("onTap", e), t.isDoubleTap && (t._emitEvent("onDoubleTap", e), t.isDoubleTap = !1);
                }, 0), o.preV.x = 0, o.preV.y = 0, o.scale = 1, o.pinchStartLen = null, o.x1 = o.x2 = o.y1 = o.y2 = null, 
                o._emitEvent("onTouchEnd", e);
            }
        }, i = n, _possibleConstructorReturn(o, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getLen",
        value: function(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y);
        }
    }, {
        key: "dot",
        value: function(e, t) {
            return e.x * t.x + e.y * t.y;
        }
    }, {
        key: "getAngle",
        value: function(e, t) {
            var n = this.getLen(e) * this.getLen(t);
            if (0 === n) return 0;
            var o = this.dot(e, t) / n;
            return o > 1 && (o = 1), Math.acos(o);
        }
    }, {
        key: "cross",
        value: function(e, t) {
            return e.x * t.y - t.x * e.y;
        }
    }, {
        key: "getRotateAngle",
        value: function(e, t) {
            var n = this.getAngle(e, t);
            return this.cross(e, t) > 0 && (n *= -1), 180 * n / Math.PI;
        }
    }, {
        key: "_resetState",
        value: function() {
            this.x = null, this.y = null, this.swiping = !1, this.start = 0;
        }
    }, {
        key: "_emitEvent",
        value: function(e, t) {
            this.$emit(e, t);
        }
    }, {
        key: "_cancelLongTap",
        value: function() {
            clearTimeout(this.longTapTimeout);
        }
    }, {
        key: "_swipeDirection",
        value: function(e, t, n, o) {
            return Math.abs(e - t) >= Math.abs(n - o) ? e - t > 0 ? "Left" : "Right" : n - o > 0 ? "Up" : "Down";
        }
    }, {
        key: "onLoad",
        value: function() {
            this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.scale = 1, this.isDoubleTap = !1, this.delta = null, 
            this.last = null, this.now = null, this.tapTimeout = null, this.longTapTimeout = null, 
            this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            };
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = Finger;