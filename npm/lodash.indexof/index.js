function baseFindIndex(e, t, r, n) {
    for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; ) if (t(e[o], o, e)) return o;
    return -1;
}

function baseIndexOf(e, t, r) {
    if (t !== t) return baseFindIndex(e, baseIsNaN, r);
    for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
    return -1;
}

function baseIsNaN(e) {
    return e !== e;
}

function indexOf(e, t, r) {
    var n = e ? e.length : 0;
    if (!n) return -1;
    var i = null == r ? 0 : toInteger(r);
    return i < 0 && (i = nativeMax(n + i, 0)), baseIndexOf(e, t, i);
}

function isObject(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
}

function isObjectLike(e) {
    return !!e && "object" == typeof e;
}

function isSymbol(e) {
    return "symbol" == typeof e || isObjectLike(e) && objectToString.call(e) == symbolTag;
}

function toFinite(e) {
    if (!e) return 0 === e ? e : 0;
    if ((e = toNumber(e)) === INFINITY || e === -INFINITY) {
        return (e < 0 ? -1 : 1) * MAX_INTEGER;
    }
    return e === e ? e : 0;
}

function toInteger(e) {
    var t = toFinite(e), r = t % 1;
    return t === t ? r ? t - r : t : 0;
}

function toNumber(e) {
    if ("number" == typeof e) return e;
    if (isSymbol(e)) return NAN;
    if (isObject(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = isObject(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(reTrim, "");
    var r = reIsBinary.test(e);
    return r || reIsOctal.test(e) ? freeParseInt(e.slice(2), r ? 2 : 8) : reIsBadHex.test(e) ? NAN : +e;
}

var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e308, NAN = NaN, symbolTag = "[object Symbol]", reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt, objectProto = Object.prototype, objectToString = objectProto.toString, nativeMax = Math.max;

module.exports = indexOf;