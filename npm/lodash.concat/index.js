function arrayPush(e, r) {
    for (var t = -1, o = r.length, n = e.length; ++t < o; ) e[n + t] = r[t];
    return e;
}

function baseFlatten(e, r, t, o, n) {
    var a = -1, l = e.length;
    for (t || (t = isFlattenable), n || (n = []); ++a < l; ) {
        var c = e[a];
        r > 0 && t(c) ? r > 1 ? baseFlatten(c, r - 1, t, o, n) : arrayPush(n, c) : o || (n[n.length] = c);
    }
    return n;
}

function copyArray(e, r) {
    var t = -1, o = e.length;
    for (r || (r = Array(o)); ++t < o; ) r[t] = e[t];
    return r;
}

function isFlattenable(e) {
    return isArray(e) || isArguments(e) || !!(spreadableSymbol && e && e[spreadableSymbol]);
}

function concat() {
    for (var e = arguments.length, r = Array(e ? e - 1 : 0), t = arguments[0], o = e; o--; ) r[o - 1] = arguments[o];
    return e ? arrayPush(isArray(t) ? copyArray(t) : [ t ], baseFlatten(r, 1)) : [];
}

function isArguments(e) {
    return isArrayLikeObject(e) && hasOwnProperty.call(e, "callee") && (!propertyIsEnumerable.call(e, "callee") || objectToString.call(e) == argsTag);
}

function isArrayLike(e) {
    return null != e && isLength(e.length) && !isFunction(e);
}

function isArrayLikeObject(e) {
    return isObjectLike(e) && isArrayLike(e);
}

function isFunction(e) {
    var r = isObject(e) ? objectToString.call(e) : "";
    return r == funcTag || r == genTag;
}

function isLength(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER;
}

function isObject(e) {
    var r = typeof e;
    return !!e && ("object" == r || "function" == r);
}

function isObjectLike(e) {
    return !!e && "object" == typeof e;
}

var MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, Symbol = root.Symbol, propertyIsEnumerable = objectProto.propertyIsEnumerable, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0, isArray = Array.isArray;

module.exports = concat;