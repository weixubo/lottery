function getValue(t, e) {
    return null == t ? void 0 : t[e];
}

function isHostObject(t) {
    var e = !1;
    if (null != t && "function" != typeof t.toString) try {
        e = !!(t + "");
    } catch (t) {}
    return e;
}

function Hash(t) {
    var e = -1, r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
    }
}

function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

function hashDelete(t) {
    return this.has(t) && delete this.__data__[t];
}

function hashGet(t) {
    var e = this.__data__;
    if (nativeCreate) {
        var r = e[t];
        return r === HASH_UNDEFINED ? void 0 : r;
    }
    return hasOwnProperty.call(e, t) ? e[t] : void 0;
}

function hashHas(t) {
    var e = this.__data__;
    return nativeCreate ? void 0 !== e[t] : hasOwnProperty.call(e, t);
}

function hashSet(t, e) {
    return this.__data__[t] = nativeCreate && void 0 === e ? HASH_UNDEFINED : e, this;
}

function ListCache(t) {
    var e = -1, r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
    }
}

function listCacheClear() {
    this.__data__ = [];
}

function listCacheDelete(t) {
    var e = this.__data__, r = assocIndexOf(e, t);
    return !(r < 0) && (r == e.length - 1 ? e.pop() : splice.call(e, r, 1), !0);
}

function listCacheGet(t) {
    var e = this.__data__, r = assocIndexOf(e, t);
    return r < 0 ? void 0 : e[r][1];
}

function listCacheHas(t) {
    return assocIndexOf(this.__data__, t) > -1;
}

function listCacheSet(t, e) {
    var r = this.__data__, a = assocIndexOf(r, t);
    return a < 0 ? r.push([ t, e ]) : r[a][1] = e, this;
}

function MapCache(t) {
    var e = -1, r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
    }
}

function mapCacheClear() {
    this.__data__ = {
        hash: new Hash(),
        map: new (Map || ListCache)(),
        string: new Hash()
    };
}

function mapCacheDelete(t) {
    return getMapData(this, t).delete(t);
}

function mapCacheGet(t) {
    return getMapData(this, t).get(t);
}

function mapCacheHas(t) {
    return getMapData(this, t).has(t);
}

function mapCacheSet(t, e) {
    return getMapData(this, t).set(t, e), this;
}

function assignValue(t, e, r) {
    var a = t[e];
    hasOwnProperty.call(t, e) && eq(a, r) && (void 0 !== r || e in t) || (t[e] = r);
}

function assocIndexOf(t, e) {
    for (var r = t.length; r--; ) if (eq(t[r][0], e)) return r;
    return -1;
}

function baseIsNative(t) {
    return !(!isObject(t) || isMasked(t)) && (isFunction(t) || isHostObject(t) ? reIsNative : reIsHostCtor).test(toSource(t));
}

function baseSet(t, e, r, a) {
    if (!isObject(t)) return t;
    e = isKey(e, t) ? [ e ] : castPath(e);
    for (var o = -1, n = e.length, i = n - 1, s = t; null != s && ++o < n; ) {
        var c = toKey(e[o]), u = r;
        if (o != i) {
            var l = s[c];
            u = a ? a(l, c, s) : void 0, void 0 === u && (u = isObject(l) ? l : isIndex(e[o + 1]) ? [] : {});
        }
        assignValue(s, c, u), s = s[c];
    }
    return t;
}

function baseToString(t) {
    if ("string" == typeof t) return t;
    if (isSymbol(t)) return symbolToString ? symbolToString.call(t) : "";
    var e = t + "";
    return "0" == e && 1 / t == -INFINITY ? "-0" : e;
}

function castPath(t) {
    return isArray(t) ? t : stringToPath(t);
}

function getMapData(t, e) {
    var r = t.__data__;
    return isKeyable(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
}

function getNative(t, e) {
    var r = getValue(t, e);
    return baseIsNative(r) ? r : void 0;
}

function isIndex(t, e) {
    return !!(e = null == e ? MAX_SAFE_INTEGER : e) && ("number" == typeof t || reIsUint.test(t)) && t > -1 && t % 1 == 0 && t < e;
}

function isKey(t, e) {
    if (isArray(t)) return !1;
    var r = typeof t;
    return !("number" != r && "symbol" != r && "boolean" != r && null != t && !isSymbol(t)) || (reIsPlainProp.test(t) || !reIsDeepProp.test(t) || null != e && t in Object(e));
}

function isKeyable(t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
}

function isMasked(t) {
    return !!maskSrcKey && maskSrcKey in t;
}

function toKey(t) {
    if ("string" == typeof t || isSymbol(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -INFINITY ? "-0" : e;
}

function toSource(t) {
    if (null != t) {
        try {
            return funcToString.call(t);
        } catch (t) {}
        try {
            return t + "";
        } catch (t) {}
    }
    return "";
}

function memoize(t, e) {
    if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(FUNC_ERROR_TEXT);
    var r = function() {
        var a = arguments, o = e ? e.apply(this, a) : a[0], n = r.cache;
        if (n.has(o)) return n.get(o);
        var i = t.apply(this, a);
        return r.cache = n.set(o, i), i;
    };
    return r.cache = new (memoize.Cache || MapCache)(), r;
}

function eq(t, e) {
    return t === e || t !== t && e !== e;
}

function isFunction(t) {
    var e = isObject(t) ? objectToString.call(t) : "";
    return e == funcTag || e == genTag;
}

function isObject(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
}

function isObjectLike(t) {
    return !!t && "object" == typeof t;
}

function isSymbol(t) {
    return "symbol" == typeof t || isObjectLike(t) && objectToString.call(t) == symbolTag;
}

function toString(t) {
    return null == t ? "" : baseToString(t);
}

function set(t, e, r) {
    return null == t ? t : baseSet(t, e, r);
}

var FUNC_ERROR_TEXT = "Expected a function", HASH_UNDEFINED = "__lodash_hash_undefined__", INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, funcTag = "[object Function]", genTag = "[object GeneratorFunction]", symbolTag = "[object Symbol]", reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reEscapeChar = /\\(\\)?/g, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsUint = /^(?:0|[1-9]\d*)$/, freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = root["__core-js_shared__"], maskSrcKey = function() {
    var t = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
}(), funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Symbol = root.Symbol, splice = arrayProto.splice, Map = getNative(root, "Map"), nativeCreate = getNative(Object, "create"), symbolProto = Symbol ? Symbol.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;

Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, 
Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, 
ListCache.prototype.delete = listCacheDelete, ListCache.prototype.get = listCacheGet, 
ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, 
MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, 
MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet;

var stringToPath = memoize(function(t) {
    t = toString(t);
    var e = [];
    return reLeadingDot.test(t) && e.push(""), t.replace(rePropName, function(t, r, a, o) {
        e.push(a ? o.replace(reEscapeChar, "$1") : r || t);
    }), e;
});

memoize.Cache = MapCache;

var isArray = Array.isArray;

module.exports = set;