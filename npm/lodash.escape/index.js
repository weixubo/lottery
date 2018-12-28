function basePropertyOf(e) {
    return function(t) {
        return null == e ? void 0 : e[t];
    };
}

function baseToString(e) {
    if ("string" == typeof e) return e;
    if (isSymbol(e)) return symbolToString ? symbolToString.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -INFINITY ? "-0" : t;
}

function isObjectLike(e) {
    return !!e && "object" == typeof e;
}

function isSymbol(e) {
    return "symbol" == typeof e || isObjectLike(e) && objectToString.call(e) == symbolTag;
}

function toString(e) {
    return null == e ? "" : baseToString(e);
}

function escape(e) {
    return e = toString(e), e && reHasUnescapedHtml.test(e) ? e.replace(reUnescapedHtml, escapeHtmlChar) : e;
}

var INFINITY = 1 / 0, symbolTag = "[object Symbol]", reUnescapedHtml = /[&<>"'`]/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source), htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "`": "&#96;"
}, freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), escapeHtmlChar = basePropertyOf(htmlEscapes), objectProto = Object.prototype, objectToString = objectProto.toString, Symbol = root.Symbol, symbolProto = Symbol ? Symbol.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;

module.exports = escape;