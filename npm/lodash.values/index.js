function arrayMap(r, e) {
    for (var t = -1, n = r ? r.length : 0, o = Array(n); ++t < n; ) o[t] = e(r[t], t, r);
    return o;
}

function baseTimes(r, e) {
    for (var t = -1, n = Array(r); ++t < r; ) n[t] = e(t);
    return n;
}

function baseValues(r, e) {
    return arrayMap(e, function(e) {
        return r[e];
    });
}

function overArg(r, e) {
    return function(t) {
        return r(e(t));
    };
}

function arrayLikeKeys(r, e) {
    var t = isArray(r) || isArguments(r) ? baseTimes(r.length, String) : [], n = t.length, o = !!n;
    for (var i in r) !e && !hasOwnProperty.call(r, i) || o && ("length" == i || isIndex(i, n)) || t.push(i);
    return t;
}

function baseKeys(r) {
    if (!isPrototype(r)) return nativeKeys(r);
    var e = [];
    for (var t in Object(r)) hasOwnProperty.call(r, t) && "constructor" != t && e.push(t);
    return e;
}

function isIndex(r, e) {
    return !!(e = null == e ? MAX_SAFE_INTEGER : e) && ("number" == typeof r || reIsUint.test(r)) && r > -1 && r % 1 == 0 && r < e;
}

function isPrototype(r) {
    var e = r && r.constructor;
    return r === ("function" == typeof e && e.prototype || objectProto);
}

function isArguments(r) {
    return isArrayLikeObject(r) && hasOwnProperty.call(r, "callee") && (!propertyIsEnumerable.call(r, "callee") || objectToString.call(r) == argsTag);
}

function isArrayLike(r) {
    return null != r && isLength(r.length) && !isFunction(r);
}

function isArrayLikeObject(r) {
    return isObjectLike(r) && isArrayLike(r);
}

function isFunction(r) {
    var e = isObject(r) ? objectToString.call(r) : "";
    return e == funcTag || e == genTag;
}

function isLength(r) {
    return "number" == typeof r && r > -1 && r % 1 == 0 && r <= MAX_SAFE_INTEGER;
}

function isObject(r) {
    var e = typeof r;
    return !!r && ("object" == e || "function" == e);
}

function isObjectLike(r) {
    return !!r && "object" == typeof r;
}

function keys(r) {
    return isArrayLike(r) ? arrayLikeKeys(r) : baseKeys(r);
}

function values(r) {
    return r ? baseValues(r, keys(r)) : [];
}

var MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", reIsUint = /^(?:0|[1-9]\d*)$/, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, propertyIsEnumerable = objectProto.propertyIsEnumerable, nativeKeys = overArg(Object.keys, Object), isArray = Array.isArray;

module.exports = values;