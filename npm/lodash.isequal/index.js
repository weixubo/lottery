function arrayFilter(e, t) {
    for (var a = -1, r = null == e ? 0 : e.length, n = 0, o = []; ++a < r; ) {
        var s = e[a];
        t(s, a, e) && (o[n++] = s);
    }
    return o;
}

function arrayPush(e, t) {
    for (var a = -1, r = t.length, n = e.length; ++a < r; ) e[n + a] = t[a];
    return e;
}

function arraySome(e, t) {
    for (var a = -1, r = null == e ? 0 : e.length; ++a < r; ) if (t(e[a], a, e)) return !0;
    return !1;
}

function baseTimes(e, t) {
    for (var a = -1, r = Array(e); ++a < e; ) r[a] = t(a);
    return r;
}

function baseUnary(e) {
    return function(t) {
        return e(t);
    };
}

function cacheHas(e, t) {
    return e.has(t);
}

function getValue(e, t) {
    return null == e ? void 0 : e[t];
}

function mapToArray(e) {
    var t = -1, a = Array(e.size);
    return e.forEach(function(e, r) {
        a[++t] = [ r, e ];
    }), a;
}

function overArg(e, t) {
    return function(a) {
        return e(t(a));
    };
}

function setToArray(e) {
    var t = -1, a = Array(e.size);
    return e.forEach(function(e) {
        a[++t] = e;
    }), a;
}

function Hash(e) {
    var t = -1, a = null == e ? 0 : e.length;
    for (this.clear(); ++t < a; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}

function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {}, this.size = 0;
}

function hashDelete(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
}

function hashGet(e) {
    var t = this.__data__;
    if (nativeCreate) {
        var a = t[e];
        return a === HASH_UNDEFINED ? void 0 : a;
    }
    return hasOwnProperty.call(t, e) ? t[e] : void 0;
}

function hashHas(e) {
    var t = this.__data__;
    return nativeCreate ? void 0 !== t[e] : hasOwnProperty.call(t, e);
}

function hashSet(e, t) {
    var a = this.__data__;
    return this.size += this.has(e) ? 0 : 1, a[e] = nativeCreate && void 0 === t ? HASH_UNDEFINED : t, 
    this;
}

function ListCache(e) {
    var t = -1, a = null == e ? 0 : e.length;
    for (this.clear(); ++t < a; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}

function listCacheClear() {
    this.__data__ = [], this.size = 0;
}

function listCacheDelete(e) {
    var t = this.__data__, a = assocIndexOf(t, e);
    return !(a < 0) && (a == t.length - 1 ? t.pop() : splice.call(t, a, 1), --this.size, 
    !0);
}

function listCacheGet(e) {
    var t = this.__data__, a = assocIndexOf(t, e);
    return a < 0 ? void 0 : t[a][1];
}

function listCacheHas(e) {
    return assocIndexOf(this.__data__, e) > -1;
}

function listCacheSet(e, t) {
    var a = this.__data__, r = assocIndexOf(a, e);
    return r < 0 ? (++this.size, a.push([ e, t ])) : a[r][1] = t, this;
}

function MapCache(e) {
    var t = -1, a = null == e ? 0 : e.length;
    for (this.clear(); ++t < a; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}

function mapCacheClear() {
    this.size = 0, this.__data__ = {
        hash: new Hash(),
        map: new (Map || ListCache)(),
        string: new Hash()
    };
}

function mapCacheDelete(e) {
    var t = getMapData(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
}

function mapCacheGet(e) {
    return getMapData(this, e).get(e);
}

function mapCacheHas(e) {
    return getMapData(this, e).has(e);
}

function mapCacheSet(e, t) {
    var a = getMapData(this, e), r = a.size;
    return a.set(e, t), this.size += a.size == r ? 0 : 1, this;
}

function SetCache(e) {
    var t = -1, a = null == e ? 0 : e.length;
    for (this.__data__ = new MapCache(); ++t < a; ) this.add(e[t]);
}

function setCacheAdd(e) {
    return this.__data__.set(e, HASH_UNDEFINED), this;
}

function setCacheHas(e) {
    return this.__data__.has(e);
}

function Stack(e) {
    var t = this.__data__ = new ListCache(e);
    this.size = t.size;
}

function stackClear() {
    this.__data__ = new ListCache(), this.size = 0;
}

function stackDelete(e) {
    var t = this.__data__, a = t.delete(e);
    return this.size = t.size, a;
}

function stackGet(e) {
    return this.__data__.get(e);
}

function stackHas(e) {
    return this.__data__.has(e);
}

function stackSet(e, t) {
    var a = this.__data__;
    if (a instanceof ListCache) {
        var r = a.__data__;
        if (!Map || r.length < LARGE_ARRAY_SIZE - 1) return r.push([ e, t ]), this.size = ++a.size, 
        this;
        a = this.__data__ = new MapCache(r);
    }
    return a.set(e, t), this.size = a.size, this;
}

function arrayLikeKeys(e, t) {
    var a = isArray(e), r = !a && isArguments(e), n = !a && !r && isBuffer(e), o = !a && !r && !n && isTypedArray(e), s = a || r || n || o, i = s ? baseTimes(e.length, String) : [], c = i.length;
    for (var u in e) !t && !hasOwnProperty.call(e, u) || s && ("length" == u || n && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || isIndex(u, c)) || i.push(u);
    return i;
}

function assocIndexOf(e, t) {
    for (var a = e.length; a--; ) if (eq(e[a][0], t)) return a;
    return -1;
}

function baseGetAllKeys(e, t, a) {
    var r = t(e);
    return isArray(e) ? r : arrayPush(r, a(e));
}

function baseGetTag(e) {
    return null == e ? void 0 === e ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(e) ? getRawTag(e) : objectToString(e);
}

function baseIsArguments(e) {
    return isObjectLike(e) && baseGetTag(e) == argsTag;
}

function baseIsEqual(e, t, a, r, n) {
    return e === t || (null == e || null == t || !isObjectLike(e) && !isObjectLike(t) ? e !== e && t !== t : baseIsEqualDeep(e, t, a, r, baseIsEqual, n));
}

function baseIsEqualDeep(e, t, a, r, n, o) {
    var s = isArray(e), i = isArray(t), c = s ? arrayTag : getTag(e), u = i ? arrayTag : getTag(t);
    c = c == argsTag ? objectTag : c, u = u == argsTag ? objectTag : u;
    var g = c == objectTag, l = u == objectTag, y = c == u;
    if (y && isBuffer(e)) {
        if (!isBuffer(t)) return !1;
        s = !0, g = !1;
    }
    if (y && !g) return o || (o = new Stack()), s || isTypedArray(e) ? equalArrays(e, t, a, r, n, o) : equalByTag(e, t, c, a, r, n, o);
    if (!(a & COMPARE_PARTIAL_FLAG)) {
        var f = g && hasOwnProperty.call(e, "__wrapped__"), p = l && hasOwnProperty.call(t, "__wrapped__");
        if (f || p) {
            var h = f ? e.value() : e, T = p ? t.value() : t;
            return o || (o = new Stack()), n(h, T, a, r, o);
        }
    }
    return !!y && (o || (o = new Stack()), equalObjects(e, t, a, r, n, o));
}

function baseIsNative(e) {
    return !(!isObject(e) || isMasked(e)) && (isFunction(e) ? reIsNative : reIsHostCtor).test(toSource(e));
}

function baseIsTypedArray(e) {
    return isObjectLike(e) && isLength(e.length) && !!typedArrayTags[baseGetTag(e)];
}

function baseKeys(e) {
    if (!isPrototype(e)) return nativeKeys(e);
    var t = [];
    for (var a in Object(e)) hasOwnProperty.call(e, a) && "constructor" != a && t.push(a);
    return t;
}

function equalArrays(e, t, a, r, n, o) {
    var s = a & COMPARE_PARTIAL_FLAG, i = e.length, c = t.length;
    if (i != c && !(s && c > i)) return !1;
    var u = o.get(e);
    if (u && o.get(t)) return u == t;
    var g = -1, l = !0, y = a & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
    for (o.set(e, t), o.set(t, e); ++g < i; ) {
        var f = e[g], p = t[g];
        if (r) var h = s ? r(p, f, g, t, e, o) : r(f, p, g, e, t, o);
        if (void 0 !== h) {
            if (h) continue;
            l = !1;
            break;
        }
        if (y) {
            if (!arraySome(t, function(e, t) {
                if (!cacheHas(y, t) && (f === e || n(f, e, a, r, o))) return y.push(t);
            })) {
                l = !1;
                break;
            }
        } else if (f !== p && !n(f, p, a, r, o)) {
            l = !1;
            break;
        }
    }
    return o.delete(e), o.delete(t), l;
}

function equalByTag(e, t, a, r, n, o, s) {
    switch (a) {
      case dataViewTag:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        e = e.buffer, t = t.buffer;

      case arrayBufferTag:
        return !(e.byteLength != t.byteLength || !o(new Uint8Array(e), new Uint8Array(t)));

      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+e, +t);

      case errorTag:
        return e.name == t.name && e.message == t.message;

      case regexpTag:
      case stringTag:
        return e == t + "";

      case mapTag:
        var i = mapToArray;

      case setTag:
        var c = r & COMPARE_PARTIAL_FLAG;
        if (i || (i = setToArray), e.size != t.size && !c) return !1;
        var u = s.get(e);
        if (u) return u == t;
        r |= COMPARE_UNORDERED_FLAG, s.set(e, t);
        var g = equalArrays(i(e), i(t), r, n, o, s);
        return s.delete(e), g;

      case symbolTag:
        if (symbolValueOf) return symbolValueOf.call(e) == symbolValueOf.call(t);
    }
    return !1;
}

function equalObjects(e, t, a, r, n, o) {
    var s = a & COMPARE_PARTIAL_FLAG, i = getAllKeys(e), c = i.length;
    if (c != getAllKeys(t).length && !s) return !1;
    for (var u = c; u--; ) {
        var g = i[u];
        if (!(s ? g in t : hasOwnProperty.call(t, g))) return !1;
    }
    var l = o.get(e);
    if (l && o.get(t)) return l == t;
    var y = !0;
    o.set(e, t), o.set(t, e);
    for (var f = s; ++u < c; ) {
        g = i[u];
        var p = e[g], h = t[g];
        if (r) var T = s ? r(h, p, g, t, e, o) : r(p, h, g, e, t, o);
        if (!(void 0 === T ? p === h || n(p, h, a, r, o) : T)) {
            y = !1;
            break;
        }
        f || (f = "constructor" == g);
    }
    if (y && !f) {
        var b = e.constructor, d = t.constructor;
        b != d && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof d && d instanceof d) && (y = !1);
    }
    return o.delete(e), o.delete(t), y;
}

function getAllKeys(e) {
    return baseGetAllKeys(e, keys, getSymbols);
}

function getMapData(e, t) {
    var a = e.__data__;
    return isKeyable(t) ? a["string" == typeof t ? "string" : "hash"] : a.map;
}

function getNative(e, t) {
    var a = getValue(e, t);
    return baseIsNative(a) ? a : void 0;
}

function getRawTag(e) {
    var t = hasOwnProperty.call(e, symToStringTag), a = e[symToStringTag];
    try {
        e[symToStringTag] = void 0;
        var r = !0;
    } catch (e) {}
    var n = nativeObjectToString.call(e);
    return r && (t ? e[symToStringTag] = a : delete e[symToStringTag]), n;
}

function isIndex(e, t) {
    return !!(t = null == t ? MAX_SAFE_INTEGER : t) && ("number" == typeof e || reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < t;
}

function isKeyable(e) {
    var t = typeof e;
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
}

function isMasked(e) {
    return !!maskSrcKey && maskSrcKey in e;
}

function isPrototype(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || objectProto);
}

function objectToString(e) {
    return nativeObjectToString.call(e);
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

function eq(e, t) {
    return e === t || e !== e && t !== t;
}

function isArrayLike(e) {
    return null != e && isLength(e.length) && !isFunction(e);
}

function isEqual(e, t) {
    return baseIsEqual(e, t);
}

function isFunction(e) {
    if (!isObject(e)) return !1;
    var t = baseGetTag(e);
    return t == funcTag || t == genTag || t == asyncTag || t == proxyTag;
}

function isLength(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER;
}

function isObject(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
}

function isObjectLike(e) {
    return null != e && "object" == typeof e;
}

function keys(e) {
    return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e);
}

function stubArray() {
    return [];
}

function stubFalse() {
    return !1;
}

var LARGE_ARRAY_SIZE = 200, HASH_UNDEFINED = "__lodash_hash_undefined__", COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2, MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsUint = /^(?:0|[1-9]\d*)$/, typedArrayTags = {};

typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, 
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;

var freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), freeExports = "object" == typeof exports && exports && !exports.nodeType && exports, freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal.process, nodeUtil = function() {
    try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}(), nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray, arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = root["__core-js_shared__"], funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, maskSrcKey = function() {
    var e = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
}(), nativeObjectToString = objectProto.toString, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Buffer = moduleExports ? root.Buffer : void 0, Symbol = root.Symbol, Uint8Array = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol ? Symbol.toStringTag : void 0, nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object), DataView = getNative(root, "DataView"), Map = getNative(root, "Map"), Promise = getNative(root, "Promise"), Set = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create"), dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap), symbolProto = Symbol ? Symbol.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;

Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, 
Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, 
ListCache.prototype.delete = listCacheDelete, ListCache.prototype.get = listCacheGet, 
ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, 
MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, 
MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, 
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas, 
Stack.prototype.clear = stackClear, Stack.prototype.delete = stackDelete, Stack.prototype.get = stackGet, 
Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;

var getSymbols = nativeGetSymbols ? function(e) {
    return null == e ? [] : (e = Object(e), arrayFilter(nativeGetSymbols(e), function(t) {
        return propertyIsEnumerable.call(e, t);
    }));
} : stubArray, getTag = baseGetTag;

(DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(e) {
    var t = baseGetTag(e), a = t == objectTag ? e.constructor : void 0, r = a ? toSource(a) : "";
    if (r) switch (r) {
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

var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(e) {
    return isObjectLike(e) && hasOwnProperty.call(e, "callee") && !propertyIsEnumerable.call(e, "callee");
}, isArray = Array.isArray, isBuffer = nativeIsBuffer || stubFalse, isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isEqual;