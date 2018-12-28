function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function createTextArea(e) {
    var t = new TextArea(e);
    return TEXT_AREAS[t.id] = t, t;
}

function getTextArea(e) {
    return console.log("current text area", TEXT_AREAS), TEXT_AREAS[e];
}

function destoryTextArea(e) {
    return !!e && (delete TEXT_AREAS[e], !0);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
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
}();

exports.createTextArea = createTextArea, exports.getTextArea = getTextArea, exports.destoryTextArea = destoryTextArea;

var DEFAULT_OPTIONS = {
    navigationTitle: "编辑",
    placeholder: "请输入",
    confirmText: "完成",
    value: ""
}, TEXT_AREAS = {}, TextArea = function() {
    function e(t) {
        if (_classCallCheck(this, e), this.content = "", this.options = _extends({}, DEFAULT_OPTIONS, t), 
        !this.options.id) throw new Error("miss id");
        this.id = this.options.id, this.content = this.options.value;
    }
    return _createClass(e, [ {
        key: "edit",
        value: function(e) {
            e && (this.content = e), wx.navigateTo({
                url: "/pages/textarea?id=" + this.id + "&placeholder=" + this.options.placeholder + "&navigationTitle=" + this.options.navigationTitle + "&confirmText=" + this.options.confirmText + "&value=" + this.content
            });
        }
    }, {
        key: "setContent",
        value: function(e) {
            this.content = e;
        }
    }, {
        key: "getContent",
        value: function() {
            return this.content;
        }
    } ]), e;
}();