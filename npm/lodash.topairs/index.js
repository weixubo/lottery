function arrayMap(e, t) {
    for (var r = -1, a = e ? e.length : 0, o = Array(a); ++r < a; ) o[r] = t(e[r], r, e);
    return o;
}

function baseTimes(e, t) {
    for (var r = -1, a = Array(e); ++r < e; ) a[r] = t(r);
    return a;
}

function baseToPairs(e, t) {
    return arrayMap(t, function(t) {
        return [ t, e[t] ];
    });
}

function getValue(e, t) {
    return null == e ? void 0 : e[t];
}

function isHostObject(e) {
    var t = !1;
    if (null != e && "function" != typeof e.toString) try {
        t = !!(e + "");
    } catch (e) {}
    return t;
}

function mapToArray(e) {
    var t = -1, r = Array(e.size);
    return e.forEach(function(e, a) {
        r[++t] = [ a, e ];
    }), r;
}

function overArg(e, t) {
    return function(r) {
        return e(t(r));
    };
}

function setToPairs(e) {
    var t = -1, r = Array(e.size);
    return e.forEach(function(e) {
        r[++t] = [ e, e ];
    }), r;
}

function arrayLikeKeys(e, t) {
    var r = isArray(e) || isArguments(e) ? baseTimes(e.length, String) : [], a = r.length, o = !!a;
    for (var n in e) !t && !hasOwnProperty.call(e, n) || o && ("length" == n || isIndex(n, a)) || r.push(n);
    return r;
}

function baseGetTag(e) {
    return objectToString.call(e);
}

function baseIsNative(e) {
    return !(!isObject(e) || isMasked(e)) && (isFunction(e) || isHostObject(e) ? reIsNative : reIsHostCtor).test(toSource(e));
}

function baseKeys(e) {
    if (!isPrototype(e)) return nativeKeys(e);
    var t = [];
    for (var r in Object(e)) hasOwnProperty.call(e, r) && "constructor" != r && t.push(r);
    return t;
}

function createToPairs(e) {
    return function(t) {
        var r = getTag(t);
        return r == mapTag ? mapToArray(t) : r == setTag ? setToPairs(t) : baseToPairs(t, e(t));
    };
}

function getNative(e, t) {
    var r = getValue(e, t);
    return baseIsNative(r) ? r : void 0;
}

function isIndex(e, t) {
    return !!(t = null == t ? MAX_SAFE_INTEGER : t) && ("number" == typeof e || reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < t;
}

function isMasked(e) {
    return !!maskSrcKey && maskSrcKey in e;
}

function isPrototype(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || objectProto);
}

function toSource(e) {
    if (null != e) {
        try {
            return funcToString.call(e);
        } catch (e) {}
        try {
            return e + "";
        } catch (e) {}
    }
    return "";
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
    var t = isObject(e) ? objectToString.call(e) : "";
    return t == funcTag || t == genTag;
}

function isLength(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER;
}

function isObject(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
}

function isObjectLike(e) {
    return !!e && "object" == typeof e;
}

function keys(e) {
    return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e);
}

var MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag = "[object DataView]", reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsUint = /^(?:0|[1-9]\d*)$/, freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = root["__core-js_shared__"], maskSrcKey = function() {
    var e = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
}(), funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), propertyIsEnumerable = objectProto.propertyIsEnumerable, nativeKeys = overArg(Object.keys, Object), DataView = getNative(root, "DataView"), Map = getNative(root, "Map"), Promise = getNative(root, "Promise"), Set = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap), getTag = baseGetTag;

(DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(e) {
    var t = objectToString.call(e), r = t == objectTag ? e.constructor : void 0, a = r ? toSource(r) : void 0;
    if (a) switch (a) {
      case dataViewCtorString:
        return dataViewTag;

      case mapCtorString:
        return mapTag;

      case promiseCtorString:
        return promiseTag;

      case setCtorString:
        return setTag;

      case weakMapCtorString:
        return weakMapTag;
    }
    return t;
});

var isArray = Array.isArray, toPairs = createToPairs(keys);

module.exports = toPairs;