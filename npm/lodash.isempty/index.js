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

function overArg(e, t) {
    return function(r) {
        return e(t(r));
    };
}

function baseGetTag(e) {
    return objectToString.call(e);
}

function baseIsNative(e) {
    return !(!isObject(e) || isMasked(e)) && (isFunction(e) || isHostObject(e) ? reIsNative : reIsHostCtor).test(toSource(e));
}

function getNative(e, t) {
    var r = getValue(e, t);
    return baseIsNative(r) ? r : void 0;
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

function isEmpty(e) {
    if (isArrayLike(e) && (isArray(e) || "string" == typeof e || "function" == typeof e.splice || isBuffer(e) || isArguments(e))) return !e.length;
    var t = getTag(e);
    if (t == mapTag || t == setTag) return !e.size;
    if (nonEnumShadows || isPrototype(e)) return !nativeKeys(e).length;
    for (var r in e) if (hasOwnProperty.call(e, r)) return !1;
    return !0;
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

function stubFalse() {
    return !1;
}

var MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag = "[object DataView]", reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), freeExports = "object" == typeof exports && exports && !exports.nodeType && exports, freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = root["__core-js_shared__"], maskSrcKey = function() {
    var e = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
}(), funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Buffer = moduleExports ? root.Buffer : void 0, propertyIsEnumerable = objectProto.propertyIsEnumerable, nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object), DataView = getNative(root, "DataView"), Map = getNative(root, "Map"), Promise = getNative(root, "Promise"), Set = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nonEnumShadows = !propertyIsEnumerable.call({
    valueOf: 1
}, "valueOf"), dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap), getTag = baseGetTag;

(DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(e) {
    var t = objectToString.call(e), r = t == objectTag ? e.constructor : void 0, o = r ? toSource(r) : void 0;
    if (o) switch (o) {
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

var isArray = Array.isArray, isBuffer = nativeIsBuffer || stubFalse;

module.exports = isEmpty;