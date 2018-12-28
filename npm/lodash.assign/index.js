function apply(r, e, t) {
    switch (t.length) {
      case 0:
        return r.call(e);

      case 1:
        return r.call(e, t[0]);

      case 2:
        return r.call(e, t[0], t[1]);

      case 3:
        return r.call(e, t[0], t[1], t[2]);
    }
    return r.apply(e, t);
}

function baseTimes(r, e) {
    for (var t = -1, n = Array(r); ++t < r; ) n[t] = e(t);
    return n;
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

function assignValue(r, e, t) {
    var n = r[e];
    hasOwnProperty.call(r, e) && eq(n, t) && (void 0 !== t || e in r) || (r[e] = t);
}

function baseKeys(r) {
    if (!isPrototype(r)) return nativeKeys(r);
    var e = [];
    for (var t in Object(r)) hasOwnProperty.call(r, t) && "constructor" != t && e.push(t);
    return e;
}

function baseRest(r, e) {
    return e = nativeMax(void 0 === e ? r.length - 1 : e, 0), function() {
        for (var t = arguments, n = -1, o = nativeMax(t.length - e, 0), i = Array(o); ++n < o; ) i[n] = t[e + n];
        n = -1;
        for (var a = Array(e + 1); ++n < e; ) a[n] = t[n];
        return a[e] = i, apply(r, this, a);
    };
}

function copyObject(r, e, t, n) {
    t || (t = {});
    for (var o = -1, i = e.length; ++o < i; ) {
        var a = e[o], s = n ? n(t[a], r[a], a, t, r) : void 0;
        assignValue(t, a, void 0 === s ? r[a] : s);
    }
    return t;
}

function createAssigner(r) {
    return baseRest(function(e, t) {
        var n = -1, o = t.length, i = o > 1 ? t[o - 1] : void 0, a = o > 2 ? t[2] : void 0;
        for (i = r.length > 3 && "function" == typeof i ? (o--, i) : void 0, a && isIterateeCall(t[0], t[1], a) && (i = o < 3 ? void 0 : i, 
        o = 1), e = Object(e); ++n < o; ) {
            var s = t[n];
            s && r(e, s, n, i);
        }
        return e;
    });
}

function isIndex(r, e) {
    return !!(e = null == e ? MAX_SAFE_INTEGER : e) && ("number" == typeof r || reIsUint.test(r)) && r > -1 && r % 1 == 0 && r < e;
}

function isIterateeCall(r, e, t) {
    if (!isObject(t)) return !1;
    var n = typeof e;
    return !!("number" == n ? isArrayLike(t) && isIndex(e, t.length) : "string" == n && e in t) && eq(t[e], r);
}

function isPrototype(r) {
    var e = r && r.constructor;
    return r === ("function" == typeof e && e.prototype || objectProto);
}

function eq(r, e) {
    return r === e || r !== r && e !== e;
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

var MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", reIsUint = /^(?:0|[1-9]\d*)$/, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, propertyIsEnumerable = objectProto.propertyIsEnumerable, nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max, nonEnumShadows = !propertyIsEnumerable.call({
    valueOf: 1
}, "valueOf"), isArray = Array.isArray, assign = createAssigner(function(r, e) {
    if (nonEnumShadows || isPrototype(e) || isArrayLike(e)) return void copyObject(e, keys(e), r);
    for (var t in e) hasOwnProperty.call(e, t) && assignValue(r, t, e[t]);
});

module.exports = assign;