var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(t, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.WeCropper = e();
}(void 0, function() {
    function t(t) {
        return "function" == typeof t;
    }
    function e(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
    }
    function o(t) {
        for (var e = [], o = arguments.length - 1; o-- > 0; ) e[o] = arguments[o + 1];
        y.forEach(function(o, n) {
            void 0 !== e[n] && (t[o] = e[n]);
        });
    }
    function n(t, e) {
        Object.defineProperties(t, e);
    }
    function r() {
        return p || (p = wx.getSystemInfoSync()), p;
    }
    function a() {
        var t = this, e = r(), o = e.windowWidth;
        t.attachPage = function() {
            var e = getCurrentPages();
            e[e.length - 1].wecropper = t;
        }, t.createCtx = function() {
            var e = t.id;
            e ? t.ctx = wx.createCanvasContext(e) : console.error("constructor: create canvas context failed, 'id' must be valuable");
        }, t.deviceRadio = o / 750;
    }
    function i() {
        var t = this, o = [ "ready", "beforeImageLoad", "beforeDraw", "imageLoad" ];
        t.on = function(n, r) {
            return o.indexOf(n) > -1 ? "function" == typeof r && ("ready" === n ? r(t) : t["on" + e(n)] = r) : console.error("event: " + n + " is invalid"), 
            t;
        };
    }
    function c(t, e) {
        return "data:" + e + ";base64," + t;
    }
    function u(t) {
        return t = t.toLowerCase().replace(/jpg/i, "jpeg"), "image/" + t.match(/png|jpeg|bmp|gif/)[0];
    }
    function d(t) {
        var e = "";
        if ("string" == typeof t) e = t; else for (var o = 0; o < t.length; o++) e += String.fromCharCode(t[o]);
        return x.encode(e);
    }
    function f(t, e, o, n, r, a) {
        wx.canvasGetImageData({
            canvasId: t,
            x: e,
            y: o,
            width: n,
            height: r,
            success: function(t) {
                a(t);
            },
            fail: function(t) {
                a(null), console.error("canvasGetImageData error: " + t);
            }
        });
    }
    function s(t) {
        var e = t.width, o = t.height, n = e * o * 3, r = n + 54, a = [ 66, 77, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0 ], i = [ 40, 0, 0, 0, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & o, o >> 8 & 255, o >> 16 & 255, o >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], c = (4 - 3 * e % 4) % 4, u = t.data, f = "", s = e << 2, h = o, l = String.fromCharCode;
        do {
            for (var g = s * (h - 1), v = "", p = 0; p < e; p++) {
                var y = p << 2;
                v += l(u[g + y + 2]) + l(u[g + y + 1]) + l(u[g + y]);
            }
            for (var m = 0; m < c; m++) v += String.fromCharCode(0);
            f += v;
        } while (--h);
        return d(a.concat(i)) + d(f);
    }
    function h(e, o, n, r, a, i, d) {
        void 0 === d && (d = function() {}), void 0 === i && (i = "png"), i = u(i), /bmp/.test(i) ? f(e, o, n, r, a, function(e) {
            var o = s(e);
            t(d) && d(c(o, "image/" + i));
        }) : console.error("暂不支持生成'" + i + "'类型的base64图片");
    }
    function l() {
        var e = this, o = e.id, n = e.deviceRadio, r = e.width, a = e.height, i = e.cut, c = i.x;
        void 0 === c && (c = 0);
        var u = i.y;
        void 0 === u && (u = 0);
        var d = i.width;
        void 0 === d && (d = r);
        var f = i.height;
        void 0 === f && (f = a), e.updateCanvas = function(o) {
            return e.croperTarget && e.ctx.drawImage(e.croperTarget, e.imgLeft, e.imgTop, e.scaleWidth, e.scaleHeight), 
            t(e.onBeforeDraw) && e.onBeforeDraw(e.ctx, e), e.setBoundStyle(void 0, o), e.ctx.draw(), 
            e;
        }, e.pushOrign = function(o) {
            return e.src = o, t(e.onBeforeImageLoad) && e.onBeforeImageLoad(e.ctx, e), wx.getImageInfo({
                src: o,
                success: function(o) {
                    var n = o.width / o.height;
                    e.croperTarget = o.path, n < d / f ? (e.rectX = c, e.baseWidth = d, e.baseHeight = d / n, 
                    e.rectY = u - Math.abs((f - e.baseHeight) / 2)) : (e.rectY = u, e.baseWidth = f * n, 
                    e.baseHeight = f, e.rectX = c - Math.abs((d - e.baseWidth) / 2)), e.imgLeft = e.rectX, 
                    e.imgTop = e.rectY, e.scaleWidth = e.baseWidth, e.scaleHeight = e.baseHeight, e.updateCanvas(), 
                    t(e.onImageLoad) && e.onImageLoad(e.ctx, e);
                }
            }), e.update(), e;
        }, e.getCropperBase64 = function(t) {
            void 0 === t && (t = function() {}), S.convertToBMP({
                canvasId: o,
                x: c,
                y: u,
                width: d,
                height: f
            }, t);
        }, e.getCropperImage = function() {
            this.updateCanvas(!0);
            for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a];
            var i = toString.call(r[0]), s = r[r.length - 1];
            return setTimeout(function() {
                switch (i) {
                  case "[object Object]":
                    var a = r[0], h = a.quality;
                    void 0 === h && (h = 10), "number" != typeof h ? console.error("quality：" + h + " is invalid") : (h < 0 || h > 10) && console.error("quality should be ranged in 0 ~ 10"), 
                    wx.canvasToTempFilePath({
                        canvasId: o,
                        x: c,
                        y: u,
                        width: d,
                        height: f,
                        destWidth: d * h / (10 * n),
                        destHeight: f * h / (10 * n),
                        quality: 1,
                        success: function(o) {
                            t(s) && s.call(e, o.tempFilePath);
                        },
                        fail: function(o) {
                            t(s) && s.call(e, null);
                        }
                    });
                    break;

                  case "[object Function]":
                    wx.canvasToTempFilePath({
                        canvasId: o,
                        x: c,
                        y: u,
                        width: d,
                        height: f,
                        destWidth: d / n,
                        destHeight: f / n,
                        quality: 1,
                        success: function(o) {
                            t(s) && s.call(e, o.tempFilePath);
                        },
                        fail: function(o) {
                            t(s) && s.call(e, null);
                        }
                    });
                }
            }, 1e3), e;
        };
    }
    function g() {
        var t = this;
        t.src && (t.__oneTouchStart = function(e) {
            t.touchX0 = Math.round(e.x), t.touchY0 = Math.round(e.y);
        }, t.__oneTouchMove = function(e) {
            var o, n;
            if (t.touchended) return t.updateCanvas();
            o = Math.round(e.x - t.touchX0), n = Math.round(e.y - t.touchY0);
            var r = Math.round(t.rectX + o), a = Math.round(t.rectY + n);
            t.outsideBound(r, a), t.updateCanvas();
        }, t.__twoTouchStart = function(e, o) {
            var n, r, a;
            t.touchX1 = Math.round(t.rectX + t.scaleWidth / 2), t.touchY1 = Math.round(t.rectY + t.scaleHeight / 2), 
            n = Math.round(o.x - e.x), r = Math.round(o.y - e.y), a = Math.round(Math.sqrt(n * n + r * r)), 
            t.oldDistance = a;
        }, t.__twoTouchMove = function(e, o) {
            var n = t.oldScale, r = t.oldDistance, a = t.scale, i = t.zoom;
            t.newScale = C(n, r, i, e, o), t.newScale <= 1 && (t.newScale = 1), t.newScale >= a && (t.newScale = a), 
            t.scaleWidth = Math.round(t.newScale * t.baseWidth), t.scaleHeight = Math.round(t.newScale * t.baseHeight);
            var c = Math.round(t.touchX1 - t.scaleWidth / 2), u = Math.round(t.touchY1 - t.scaleHeight / 2);
            t.outsideBound(c, u), t.updateCanvas();
        }, t.__xtouchEnd = function() {
            t.oldScale = t.newScale, t.rectX = t.imgLeft, t.rectY = t.imgTop;
        });
    }
    function v() {
        var t = this, e = t.width, o = t.height, n = t.cut, r = n.x;
        void 0 === r && (r = 0);
        var a = n.y;
        void 0 === a && (a = 0);
        var i = n.width;
        void 0 === i && (i = e);
        var c = n.height;
        void 0 === c && (c = o), t.outsideBound = function(e, o) {
            t.imgLeft = e >= r ? r : t.scaleWidth + e - r <= i ? r + i - t.scaleWidth : e, t.imgTop = o >= a ? a : t.scaleHeight + o - a <= c ? a + c - t.scaleHeight : o;
        }, t.setBoundStyle = function(n, u) {
            void 0 === n && (n = {});
            var d = n.color;
            void 0 === d && (d = "#ffffff");
            var f = n.mask;
            void 0 === f && (f = "rgba(0, 0, 0, 0.8)");
            var s = n.lineWidth;
            void 0 === s && (s = 1), u && (f = "rgba(0,0,0,0)"), t.ctx.beginPath(), t.ctx.setFillStyle(f), 
            t.ctx.fillRect(0, 0, r, o), t.ctx.fillRect(r, 0, i, a), t.ctx.fillRect(r, a + c, i, o - a - c), 
            t.ctx.fillRect(r + i, 0, e - r - i, o), t.ctx.fill(), t.enableViewRect && !u && (t.ctx.setStrokeStyle("#ffffff"), 
            t.ctx.strokeRect(r + (i - c) / 2, a, c, c), t.ctx.setFontSize(12), t.ctx.setFillStyle("rgba(255, 255, 255, 0.4)"), 
            t.ctx.setTextAlign("center"), t.ctx.fillText("方框内容用于显示在首页", r + i / 2, a + c + 34));
        };
    }
    var p = void 0, y = [ "touchstarted", "touchmoved", "touchended" ], m = {}, b = {
        id: {
            default: "cropper",
            get: function() {
                return m.id;
            },
            set: function(t) {
                "string" != typeof t && console.error("id：" + t + " is invalid"), m.id = t;
            }
        },
        width: {
            default: 750,
            get: function() {
                return m.width;
            },
            set: function(t) {
                "number" != typeof t && console.error("width：" + t + " is invalid"), m.width = t;
            }
        },
        height: {
            default: 750,
            get: function() {
                return m.height;
            },
            set: function(t) {
                "number" != typeof t && console.error("height：" + t + " is invalid"), m.height = t;
            }
        },
        scale: {
            default: 2.5,
            get: function() {
                return m.scale;
            },
            set: function(t) {
                "number" != typeof t && console.error("scale：" + t + " is invalid"), m.scale = t;
            }
        },
        zoom: {
            default: 5,
            get: function() {
                return m.zoom;
            },
            set: function(t) {
                "number" != typeof t ? console.error("zoom：" + t + " is invalid") : (t < 0 || t > 10) && console.error("zoom should be ranged in 0 ~ 10"), 
                m.zoom = t;
            }
        },
        src: {
            default: "cropper",
            get: function() {
                return m.src;
            },
            set: function(t) {
                "string" != typeof t && console.error("id：" + t + " is invalid"), m.src = t;
            }
        },
        cut: {
            default: {},
            get: function() {
                return m.cut;
            },
            set: function(t) {
                "object" !== (void 0 === t ? "undefined" : _typeof(t)) && console.error("id：" + t + " is invalid"), 
                m.cut = t;
            }
        },
        onReady: {
            default: null,
            get: function() {
                return m.ready;
            },
            set: function(t) {
                m.ready = t;
            }
        },
        onBeforeImageLoad: {
            default: null,
            get: function() {
                return m.beforeImageLoad;
            },
            set: function(t) {
                m.beforeImageLoad = t;
            }
        },
        onImageLoad: {
            default: null,
            get: function() {
                return m.imageLoad;
            },
            set: function(t) {
                m.imageLoad = t;
            }
        },
        onBeforeDraw: {
            default: null,
            get: function() {
                return m.beforeDraw;
            },
            set: function(t) {
                m.beforeDraw = t;
            }
        }
    }, w = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, x = function(t, e) {
        return e = {
            exports: {}
        }, t(e, e.exports), e.exports;
    }(function(t, e) {
        !function(o) {
            var n = e, r = t && t.exports == n && t, a = "object" == (void 0 === w ? "undefined" : _typeof(w)) && w;
            a.global !== a && a.window !== a || (o = a);
            var i = function(t) {
                this.message = t;
            };
            i.prototype = new Error(), i.prototype.name = "InvalidCharacterError";
            var c = function(t) {
                throw new i(t);
            }, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = /[\t\n\f\r ]/g, f = function(t) {
                t = String(t).replace(d, "");
                var e = t.length;
                e % 4 == 0 && (t = t.replace(/==?$/, ""), e = t.length), (e % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(t)) && c("Invalid character: the string to be decoded is not correctly encoded.");
                for (var o, n, r = 0, a = "", i = -1; ++i < e; ) n = u.indexOf(t.charAt(i)), o = r % 4 ? 64 * o + n : n, 
                r++ % 4 && (a += String.fromCharCode(255 & o >> (-2 * r & 6)));
                return a;
            }, s = function(t) {
                t = String(t), /[^\0-\xFF]/.test(t) && c("The string to be encoded contains characters outside of the Latin1 range.");
                for (var e, o, n, r, a = t.length % 3, i = "", d = -1, f = t.length - a; ++d < f; ) e = t.charCodeAt(d) << 16, 
                o = t.charCodeAt(++d) << 8, n = t.charCodeAt(++d), r = e + o + n, i += u.charAt(r >> 18 & 63) + u.charAt(r >> 12 & 63) + u.charAt(r >> 6 & 63) + u.charAt(63 & r);
                return 2 == a ? (e = t.charCodeAt(d) << 8, o = t.charCodeAt(++d), r = e + o, i += u.charAt(r >> 10) + u.charAt(r >> 4 & 63) + u.charAt(r << 2 & 63) + "=") : 1 == a && (r = t.charCodeAt(d), 
                i += u.charAt(r >> 2) + u.charAt(r << 4 & 63) + "=="), i;
            }, h = {
                encode: s,
                decode: f,
                version: "0.1.0"
            };
            if (n && !n.nodeType) if (r) r.exports = h; else for (var l in h) h.hasOwnProperty(l) && (n[l] = h[l]); else o.base64 = h;
        }(w);
    }), S = {
        convertToImage: h,
        convertToBMP: function(t, e) {
            void 0 === t && (t = {});
            var o = t.canvasId, n = t.x, r = t.y, a = t.width, i = t.height;
            return void 0 === e && (e = function() {}), h(o, n, r, a, i, "bmp", e);
        }
    }, C = function(t, e, o, n, r) {
        var a, i, c;
        return a = Math.round(r.x - n.x), i = Math.round(r.y - n.y), c = Math.round(Math.sqrt(a * a + i * i)), 
        t + .001 * o * (c - e);
    }, M = {
        touchStart: function(t) {
            var e = this, n = t.touches, r = n[0], a = n[1];
            o(e, !0, null, null), e.__oneTouchStart(r), t.touches.length >= 2 && e.__twoTouchStart(r, a);
        },
        touchMove: function(t) {
            var e = this, n = t.touches, r = n[0], a = n[1];
            o(e, null, !0), 1 === t.touches.length && e.__oneTouchMove(r), t.touches.length >= 2 && e.__twoTouchMove(r, a);
        },
        touchEnd: function(t) {
            var e = this;
            o(e, !1, !1, !0), e.__xtouchEnd();
        }
    }, T = function(t) {
        var e = this, o = {};
        return n(e, b), Object.keys(b).forEach(function(t) {
            o[t] = b[t].default;
        }), Object.assign(e, o, t), e.prepare(), e.attachPage(), e.createCtx(), e.observer(), 
        e.cutt(), e.methods(), e.init(), e.update(), e;
    };
    return T.prototype.init = function() {
        var t = this, e = t.src;
        return t.version = "1.2.0", "function" == typeof t.onReady && t.onReady(t.ctx, t), 
        e && t.pushOrign(e), o(t, !1, !1, !1), t.oldScale = 1, t.newScale = 1, t;
    }, Object.assign(T.prototype, M), T.prototype.prepare = a, T.prototype.observer = i, 
    T.prototype.methods = l, T.prototype.cutt = v, T.prototype.update = g, T;
});