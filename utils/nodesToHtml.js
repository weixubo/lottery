function renderAttrs(e) {
    var t = "";
    if (e && "object" === (void 0 === e ? "undefined" : _typeof(e))) for (var r in e) e.hasOwnProperty(r) && (t += r + '="' + e[r] + '" ');
    return t;
}

function renderNode(e) {
    if (e.name) {
        var t = "";
        if (e.attrs && (t = renderAttrs(e.attrs)), e.children) {
            var r = "";
            r = t ? "<" + e.name + " " + t + ">" : "<" + e.name + ">";
            for (var o = "</" + e.name + ">", n = r, f = 0, a = e.children.length; f < a; f++) n += renderNode(e.children[f]);
            return n += o;
        }
        return "<" + e.name + " " + t + " />";
    }
    return "text" === e.type ? e.text || "" : "";
}

function nodesToHtml(e) {
    "[object Array]" !== Object.prototype.toString.call(e) && (e = [ e ]);
    for (var t = "", r = 0, o = e.length; r < o; r++) t += renderNode(e[r]);
    return t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

exports.default = nodesToHtml;