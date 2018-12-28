function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, o) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !o || "object" != typeof o && "function" != typeof o ? e : o;
}

function _inherits(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _tools = require("./../utils/tools.js"), systemInfo = (0, 
_tools.getSystemInfo)(), Pay = function(e) {
    function o() {
        var e, t, p, n;
        _classCallCheck(this, o);
        for (var r = arguments.length, i = Array(r), u = 0; u < r; u++) i[u] = arguments[u];
        return t = p = _possibleConstructorReturn(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(i))), 
        p.data = {
            popupBoxShow: !1,
            contentStyle: "width: " + (systemInfo.windowWidth - 50) + "px;"
        }, p.props = {
            showClose: {
                type: Boolean,
                default: !0
            },
            id: {
                type: String,
                default: "default-popupbox"
            },
            disableClose: {
                type: Boolean,
                default: !1
            }
        }, p.events = {
            PopupBoxShow: function(e, o) {
                o && (o = e), (o = o || "default-popupbox") === p.id && (p.popupBoxShow = !0, p.$emit("onPopupBoxShow", p.id), 
                p.$apply());
            },
            PopupBoxHide: function(e, o) {
                o && (o = e), (o = o || "default-popupbox") === p.id && (p.popupBoxShow = !1, p.$emit("onPopupBoxHide", p.id), 
                p.$apply());
            }
        }, p.methods = {
            closePopupBox: function() {
                this.disableClose || (this.popupBoxShow = !1, this.$emit("onPopupBoxHide", this.id));
            }
        }, n = t, _possibleConstructorReturn(p, n);
    }
    return _inherits(o, e), o;
}(_wepy2.default.component);

exports.default = Pay;