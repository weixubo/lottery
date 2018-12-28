var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
    return typeof r;
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
};

!function(r, t, e) {
    "function" == typeof define && void 0 !== define.amd ? define(function() {
        return e();
    }) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? (module.exports = e(), 
    module.exports.default = module.exports) : r.UUID = e();
}(void 0, 0, function() {
    var r = function(r, t) {
        for (var e = [], n = 0; n < r; n++) e[n] = Math.floor(Math.random() * t + 1);
        return e;
    }, t = function(r, t, e, n, o, i) {
        for (var f = t; f <= e; f++) o[i++] = function(r, t) {
            var e = r.toString(16);
            return e.length < 2 && (e = "0" + e), t && (e = e.toUpperCase()), e;
        }(r[f], n);
        return o;
    }, e = function(r, t, e, n, o) {
        for (var i = t; i <= e; i += 2) n[o++] = parseInt(r.substr(i, 2), 16);
    }, n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split(""), o = [ 0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0 ], i = function(r, t) {
        if (t % 4 != 0) throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
        for (var e = "", o = 0, i = 0; o < t; ) if (i = 256 * i + r[o++], o % 4 == 0) {
            for (var f = 52200625; f >= 1; ) {
                var a = Math.floor(i / f) % 85;
                e += n[a], f /= 85;
            }
            i = 0;
        }
        return e;
    }, f = function(r, t) {
        var e = r.length;
        if (e % 5 != 0) throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
        void 0 === t && (t = new Array(4 * e / 5));
        for (var n = 0, i = 0, f = 0; n < e; ) {
            var a = r.charCodeAt(n++) - 32;
            if (a < 0 || a >= o.length) break;
            if (f = 85 * f + o[a], n % 5 == 0) {
                for (var u = 16777216; u >= 1; ) t[i++] = Math.trunc(f / u % 256), u /= 256;
                f = 0;
            }
        }
        return t;
    }, a = function(r, t) {
        var e = {
            ibits: 8,
            obits: 8,
            obigendian: !0
        };
        for (var n in t) void 0 !== e[n] && (e[n] = t[n]);
        for (var o, i, f, a = [], u = 0, d = 0, s = 0, p = r.length; 0 === d && (i = r.charCodeAt(u++)), 
        o = i >> e.ibits - (d + 8) & 255, d = (d + 8) % e.ibits, e.obigendian ? 0 === s ? f = o << e.obits - 8 : f |= o << e.obits - 8 - s : 0 === s ? f = o : f |= o << s, 
        !(0 === (s = (s + 8) % e.obits) && (a.push(f), u >= p)); ) ;
        return a;
    }, u = function(r, t) {
        var e = {
            ibits: 32,
            ibigendian: !0
        };
        for (var n in t) void 0 !== e[n] && (e[n] = t[n]);
        var o = "", i = 4294967295;
        e.ibits < 32 && (i = (1 << e.ibits) - 1);
        for (var f = r.length, a = 0; a < f; a++) for (var u = r[a] & i, d = 0; d < e.ibits; d += 8) e.ibigendian ? o += String.fromCharCode(u >> e.ibits - 8 - d & 255) : o += String.fromCharCode(u >> d & 255);
        return o;
    }, d = function(r, t, e, n, o, i, f, a) {
        return [ a, f, i, o, n, e, t, r ];
    }, s = function() {
        return d(0, 0, 0, 0, 0, 0, 0, 0);
    }, p = function(r) {
        for (var t = s(), e = 0; e < 8; e++) t[e] = Math.floor(r % 256), r /= 256;
        return t;
    }, c = function(r) {
        for (var t = 0, e = 7; e >= 0; e--) t *= 256, t += r[e];
        return Math.floor(t);
    }, h = function(r, t) {
        for (var e = 0, n = 0; n < 8; n++) e += r[n] + t[n], r[n] = Math.floor(e % 256), 
        e = Math.floor(e / 256);
        return e;
    }, l = function(r, t) {
        for (var e = 0, n = 0; n < 8; n++) e += r[n] * t, r[n] = Math.floor(e % 256), e = Math.floor(e / 256);
        return e;
    }, v = function(r, t) {
        var e = s();
        if (t % 8 != 0) throw new Error("ui64_ror: only bit rotations supported with a multiple of digit bits");
        for (var n = Math.floor(t / 8), o = 0; o < n; o++) {
            for (var i = 6; i >= 0; i--) e[i + 1] = e[i];
            for (e[0] = r[0], i = 0; i < 7; i++) r[i] = r[i + 1];
            r[i] = 0;
        }
        return c(e);
    }, b = function(r, t) {
        var e = (65535 & r) + (65535 & t);
        return (r >> 16) + (t >> 16) + (e >> 16) << 16 | 65535 & e;
    }, y = function(r, t) {
        return r << t & 4294967295 | r >>> 32 - t & 4294967295;
    }, m = function(r, t) {
        r[t >> 5] |= 128 << 24 - t % 32, r[15 + (t + 64 >> 9 << 4)] = t;
        for (var e = Array(80), n = 1732584193, o = -271733879, i = -1732584194, f = 271733878, a = -1009589776, u = 0; u < r.length; u += 16) {
            for (var d = n, s = o, p = i, c = f, h = a, l = 0; l < 80; l++) {
                e[l] = l < 16 ? r[u + l] : y(e[l - 3] ^ e[l - 8] ^ e[l - 14] ^ e[l - 16], 1);
                var v = b(b(y(n, 5), function(r, t, e, n) {
                    return r < 20 ? t & e | ~t & n : r < 40 ? t ^ e ^ n : r < 60 ? t & e | t & n | e & n : t ^ e ^ n;
                }(l, o, i, f)), b(b(a, e[l]), function(r) {
                    return r < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514;
                }(l)));
                a = f, f = i, i = y(o, 30), o = n, n = v;
            }
            n = b(n, d), o = b(o, s), i = b(i, p), f = b(f, c), a = b(a, h);
        }
        return [ n, o, i, f, a ];
    }, x = function(r) {
        return u(m(a(r, {
            ibits: 8,
            obits: 32,
            obigendian: !0
        }), 8 * r.length), {
            ibits: 32,
            ibigendian: !0
        });
    }, g = function(r, t) {
        function e(r, t, e, n, o, i) {
            return b(y(b(b(t, r), b(n, i)), o), e);
        }
        function n(r, t, n, o, i, f, a) {
            return e(t & n | ~t & o, r, t, i, f, a);
        }
        function o(r, t, n, o, i, f, a) {
            return e(t & o | n & ~o, r, t, i, f, a);
        }
        function i(r, t, n, o, i, f, a) {
            return e(t ^ n ^ o, r, t, i, f, a);
        }
        function f(r, t, n, o, i, f, a) {
            return e(n ^ (t | ~o), r, t, i, f, a);
        }
        r[t >> 5] |= 128 << t % 32, r[14 + (t + 64 >>> 9 << 4)] = t;
        for (var a = 1732584193, u = -271733879, d = -1732584194, s = 271733878, p = 0; p < r.length; p += 16) {
            var c = a, h = u, l = d, v = s;
            a = n(a, u, d, s, r[p + 0], 7, -680876936), s = n(s, a, u, d, r[p + 1], 12, -389564586), 
            d = n(d, s, a, u, r[p + 2], 17, 606105819), u = n(u, d, s, a, r[p + 3], 22, -1044525330), 
            a = n(a, u, d, s, r[p + 4], 7, -176418897), s = n(s, a, u, d, r[p + 5], 12, 1200080426), 
            d = n(d, s, a, u, r[p + 6], 17, -1473231341), u = n(u, d, s, a, r[p + 7], 22, -45705983), 
            a = n(a, u, d, s, r[p + 8], 7, 1770035416), s = n(s, a, u, d, r[p + 9], 12, -1958414417), 
            d = n(d, s, a, u, r[p + 10], 17, -42063), u = n(u, d, s, a, r[p + 11], 22, -1990404162), 
            a = n(a, u, d, s, r[p + 12], 7, 1804603682), s = n(s, a, u, d, r[p + 13], 12, -40341101), 
            d = n(d, s, a, u, r[p + 14], 17, -1502002290), u = n(u, d, s, a, r[p + 15], 22, 1236535329), 
            a = o(a, u, d, s, r[p + 1], 5, -165796510), s = o(s, a, u, d, r[p + 6], 9, -1069501632), 
            d = o(d, s, a, u, r[p + 11], 14, 643717713), u = o(u, d, s, a, r[p + 0], 20, -373897302), 
            a = o(a, u, d, s, r[p + 5], 5, -701558691), s = o(s, a, u, d, r[p + 10], 9, 38016083), 
            d = o(d, s, a, u, r[p + 15], 14, -660478335), u = o(u, d, s, a, r[p + 4], 20, -405537848), 
            a = o(a, u, d, s, r[p + 9], 5, 568446438), s = o(s, a, u, d, r[p + 14], 9, -1019803690), 
            d = o(d, s, a, u, r[p + 3], 14, -187363961), u = o(u, d, s, a, r[p + 8], 20, 1163531501), 
            a = o(a, u, d, s, r[p + 13], 5, -1444681467), s = o(s, a, u, d, r[p + 2], 9, -51403784), 
            d = o(d, s, a, u, r[p + 7], 14, 1735328473), u = o(u, d, s, a, r[p + 12], 20, -1926607734), 
            a = i(a, u, d, s, r[p + 5], 4, -378558), s = i(s, a, u, d, r[p + 8], 11, -2022574463), 
            d = i(d, s, a, u, r[p + 11], 16, 1839030562), u = i(u, d, s, a, r[p + 14], 23, -35309556), 
            a = i(a, u, d, s, r[p + 1], 4, -1530992060), s = i(s, a, u, d, r[p + 4], 11, 1272893353), 
            d = i(d, s, a, u, r[p + 7], 16, -155497632), u = i(u, d, s, a, r[p + 10], 23, -1094730640), 
            a = i(a, u, d, s, r[p + 13], 4, 681279174), s = i(s, a, u, d, r[p + 0], 11, -358537222), 
            d = i(d, s, a, u, r[p + 3], 16, -722521979), u = i(u, d, s, a, r[p + 6], 23, 76029189), 
            a = i(a, u, d, s, r[p + 9], 4, -640364487), s = i(s, a, u, d, r[p + 12], 11, -421815835), 
            d = i(d, s, a, u, r[p + 15], 16, 530742520), u = i(u, d, s, a, r[p + 2], 23, -995338651), 
            a = f(a, u, d, s, r[p + 0], 6, -198630844), s = f(s, a, u, d, r[p + 7], 10, 1126891415), 
            d = f(d, s, a, u, r[p + 14], 15, -1416354905), u = f(u, d, s, a, r[p + 5], 21, -57434055), 
            a = f(a, u, d, s, r[p + 12], 6, 1700485571), s = f(s, a, u, d, r[p + 3], 10, -1894986606), 
            d = f(d, s, a, u, r[p + 10], 15, -1051523), u = f(u, d, s, a, r[p + 1], 21, -2054922799), 
            a = f(a, u, d, s, r[p + 8], 6, 1873313359), s = f(s, a, u, d, r[p + 15], 10, -30611744), 
            d = f(d, s, a, u, r[p + 6], 15, -1560198380), u = f(u, d, s, a, r[p + 13], 21, 1309151649), 
            a = f(a, u, d, s, r[p + 4], 6, -145523070), s = f(s, a, u, d, r[p + 11], 10, -1120210379), 
            d = f(d, s, a, u, r[p + 2], 15, 718787259), u = f(u, d, s, a, r[p + 9], 21, -343485551), 
            a = b(a, c), u = b(u, h), d = b(d, l), s = b(s, v);
        }
        return [ a, u, d, s ];
    }, w = function(r) {
        return u(g(a(r, {
            ibits: 8,
            obits: 32,
            obigendian: !1
        }), 8 * r.length), {
            ibits: 32,
            ibigendian: !1
        });
    }, U = 0, A = 0, D = function() {
        if (1 === arguments.length && "string" == typeof arguments[0]) this.parse.apply(this, arguments); else if (arguments.length >= 1 && "number" == typeof arguments[0]) this.make.apply(this, arguments); else {
            if (arguments.length >= 1) throw new Error("UUID: constructor: invalid arguments");
            for (var r = 0; r < 16; r++) this[r] = 0;
        }
    };
    return D.prototype = "undefined" != typeof Uint8Array ? new Uint8Array(16) : Buffer ? new Buffer(16) : new Array(16), 
    D.prototype.constructor = D, D.prototype.make = function(t) {
        var e, n = this;
        if (1 === t) {
            var o = new Date(), i = o.getTime();
            i !== U ? A = 0 : A++, U = i;
            var f = p(i);
            l(f, 1e4), h(f, d(1, 178, 29, 210, 19, 129, 64, 0)), A > 0 && h(f, p(A));
            var a;
            a = v(f, 8), n[3] = 255 & a, a = v(f, 8), n[2] = 255 & a, a = v(f, 8), n[1] = 255 & a, 
            a = v(f, 8), n[0] = 255 & a, a = v(f, 8), n[5] = 255 & a, a = v(f, 8), n[4] = 255 & a, 
            a = v(f, 8), n[7] = 255 & a, a = v(f, 8), n[6] = 15 & a;
            var u = r(2, 255);
            n[8] = u[0], n[9] = u[1];
            var s = r(6, 255);
            for (s[0] |= 1, s[0] |= 2, e = 0; e < 6; e++) n[10 + e] = s[e];
        } else if (4 === t) {
            var c = r(16, 255);
            for (e = 0; e < 16; e++) this[e] = c[e];
        } else {
            if (3 !== t && 5 !== t) throw new Error("UUID: make: invalid version");
            var b = "", y = "object" === _typeof(arguments[1]) && arguments[1] instanceof D ? arguments[1] : new D().parse(arguments[1]);
            for (e = 0; e < 16; e++) b += String.fromCharCode(y[e]);
            b += arguments[2];
            var m = 3 === t ? w(b) : x(b);
            for (e = 0; e < 16; e++) n[e] = m.charCodeAt(e);
        }
        return n[6] &= 15, n[6] |= t << 4, n[8] &= 63, n[8] |= 128, n;
    }, D.prototype.format = function(r) {
        var e, n;
        return "z85" === r ? e = i(this, 16) : "b16" === r ? (n = Array(32), t(this, 0, 15, !0, n, 0), 
        e = n.join("")) : void 0 !== r && "std" !== r || (n = new Array(36), t(this, 0, 3, !1, n, 0), 
        n[8] = "-", t(this, 4, 5, !1, n, 9), n[13] = "-", t(this, 6, 7, !1, n, 14), n[18] = "-", 
        t(this, 8, 9, !1, n, 19), n[23] = "-", t(this, 10, 15, !1, n, 24), e = n.join("")), 
        e;
    }, D.prototype.toString = function(r) {
        return this.format(r);
    }, D.prototype.parse = function(r, t) {
        if ("string" != typeof r) throw new Error("UUID: parse: invalid argument (type string expected)");
        if ("z85" === t) f(r, this); else if ("b16" === t) e(r, 0, 35, this, 0); else if (void 0 === t || "std" === t) {
            var n = {
                nil: "00000000-0000-0000-0000-000000000000",
                "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
                "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
                "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
                "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
            };
            if (void 0 !== n[r]) r = n[r]; else if (!r.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) throw new Error('UUID: parse: invalid string representation (expected "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")');
            e(r, 0, 7, this, 0), e(r, 9, 12, this, 4), e(r, 14, 17, this, 6), e(r, 19, 22, this, 8), 
            e(r, 24, 35, this, 10);
        }
        return this;
    }, D.prototype.export = function() {
        for (var r = Array(16), t = 0; t < 16; t++) r[t] = this[t];
        return r;
    }, D.prototype.import = function(r) {
        if (!("object" === (void 0 === r ? "undefined" : _typeof(r)) && r instanceof Array)) throw new Error("UUID: import: invalid argument (type Array expected)");
        if (16 !== r.length) throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
        for (var t = 0; t < 16; t++) {
            if ("number" != typeof r[t]) throw new Error("UUID: import: invalid array element #" + t + " (type Number expected)");
            if (!isFinite(r[t]) || Math.floor(r[t]) !== r[t]) throw new Error("UUID: import: invalid array element #" + t + " (Number with integer value expected)");
            if (!(r[t] >= 0 && r[t] <= 255)) throw new Error("UUID: import: invalid array element #" + t + " (Number with integer value in range 0...255 expected)");
            this[t] = r[t];
        }
        return this;
    }, D.prototype.compare = function(r) {
        if ("object" !== (void 0 === r ? "undefined" : _typeof(r))) throw new Error("UUID: compare: invalid argument (type UUID expected)");
        if (!(r instanceof D)) throw new Error("UUID: compare: invalid argument (type UUID expected)");
        for (var t = 0; t < 16; t++) {
            if (this[t] < r[t]) return -1;
            if (this[t] > r[t]) return 1;
        }
        return 0;
    }, D.prototype.fold = function(r) {
        if (void 0 === r) throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
        if (r < 1 || r > 4) throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
        for (var t = 16 / Math.pow(2, r), e = new Array(t), n = 0; n < t; n++) {
            for (var o = 0, i = 0; n + i < 16; i += t) o ^= this[n + i];
            e[n] = o;
        }
        return e;
    }, D;
});