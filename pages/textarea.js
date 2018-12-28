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
});

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _textarea = require("./../libs/textarea.js"), Index = function(e) {
    function t() {
        var e, n, a, o;
        _classCallCheck(this, t);
        for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationBarTitleText: "编辑",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, a.data = {
            navigationTitle: "编辑",
            value: "",
            placeholder: "",
            confirmText: "",
            maxlength: 5e3,
            style: ""
        }, a.methods = {
            userInput: function(e) {
                this.content = e.detail.value;
            },
            userConfirm: function() {
                this.textarea && (this.textarea.setContent(this.content), _wepy2.default.navigateBack());
            }
        }, o = n, _possibleConstructorReturn(a, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onUnload",
        value: function() {
            this.textarea = null, this.navigationTitle = "编辑", this.value = "", this.placeholder = "", 
            this.confirmText = "", this.content = "";
        }
    }, {
        key: "onLoad",
        value: function(e) {
            console.log(e);
            var t = e.id, n = (0, _textarea.getTextArea)(t);
            this.textarea = n, this.navigationTitle = e.navigationTitle, this.value = e.value, 
            this.placeholder = e.placeholder, this.confirmText = e.confirmText, this.content = this.value, 
            this.textarea.options.maxlength && (this.maxlength = this.textarea.options.maxlength), 
            this.textarea.options.style && (this.style = this.textarea.options.style);
        }
    }, {
        key: "onShow",
        value: function() {
            this.$parent.globalData.textareaOpen = !0;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/textarea"));