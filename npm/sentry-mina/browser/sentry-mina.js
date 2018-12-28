import regeneratorRuntime from '../../../utils/regenerator-runtime/runtime';
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.sentry = t() : e.sentry = t();
}(window, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: r
            });
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e) for (var o in e) t.d(r, o, function(t) {
                return e[t];
            }.bind(null, o));
            return r;
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 24);
    }([ function(e, t, n) {
        "use strict";
        function r(e, t) {
            function n() {
                this.constructor = e;
            }
            w(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
            new n());
        }
        function o(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
            }
            return n;
        }
        function i(e, t, n, r) {
            var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var u = e.length - 1; u >= 0; u--) (o = e[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a), a;
        }
        function a(e, t) {
            return function(n, r) {
                t(n, r, e);
            };
        }
        function u(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }
        function c(e, t, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e));
                    } catch (e) {
                        i(e);
                    }
                }
                function u(e) {
                    try {
                        c(r.throw(e));
                    } catch (e) {
                        i(e);
                    }
                }
                function c(e) {
                    e.done ? o(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(a, u);
                }
                c((r = r.apply(e, t || [])).next());
            });
        }
        function s(e, t) {
            function n(n) {
                return function(a) {
                    return function(n) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (;u; ) try {
                            if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 
                            0) : o.next) && !(i = i.call(o, n[1])).done) return i;
                            switch (o = 0, i && (n = [ 2 & n[0], i.value ]), n[0]) {
                              case 0:
                              case 1:
                                i = n;
                                break;

                              case 4:
                                return u.label++, {
                                    value: n[1],
                                    done: !1
                                };

                              case 5:
                                u.label++, o = n[1], n = [ 0 ];
                                continue;

                              case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;

                              default:
                                if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue;
                                }
                                if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                    u.label = n[1];
                                    break;
                                }
                                if (6 === n[0] && u.label < i[1]) {
                                    u.label = i[1], i = n;
                                    break;
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(n);
                                    break;
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue;
                            }
                            n = t.call(e, u);
                        } catch (e) {
                            n = [ 6, e ], o = 0;
                        } finally {
                            r = i = 0;
                        }
                        if (5 & n[0]) throw n[1];
                        return {
                            value: n[0] ? n[1] : void 0,
                            done: !0
                        };
                    }([ n, a ]);
                };
            }
            var r, o, i, a, u = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: n(0),
                throw: n(1),
                return: n(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
        }
        function l(e, t) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        function f(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator], n = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && n >= e.length && (e = void 0), {
                        value: e && e[n++],
                        done: !e
                    };
                }
            };
        }
        function p(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, o, i = n.call(e), a = [];
            try {
                for (;(void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
            } catch (e) {
                o = {
                    error: e
                };
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i);
                } finally {
                    if (o) throw o.error;
                }
            }
            return a;
        }
        function d() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
            return e;
        }
        function h(e) {
            return this instanceof h ? (this.v = e, this) : new h(e);
        }
        function v(e, t, n) {
            function r(e) {
                s[e] && (c[e] = function(t) {
                    return new Promise(function(n, r) {
                        l.push([ e, t, n, r ]) > 1 || o(e, t);
                    });
                });
            }
            function o(e, t) {
                try {
                    (n = s[e](t)).value instanceof h ? Promise.resolve(n.value.v).then(i, a) : u(l[0][2], n);
                } catch (e) {
                    u(l[0][3], e);
                }
                var n;
            }
            function i(e) {
                o("next", e);
            }
            function a(e) {
                o("throw", e);
            }
            function u(e, t) {
                e(t), l.shift(), l.length && o(l[0][0], l[0][1]);
            }
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var c, s = n.apply(e, t || []), l = [];
            return c = {}, r("next"), r("throw"), r("return"), c[Symbol.asyncIterator] = function() {
                return this;
            }, c;
        }
        function g(e) {
            function t(t, o) {
                n[t] = e[t] ? function(n) {
                    return (r = !r) ? {
                        value: h(e[t](n)),
                        done: "return" === t
                    } : o ? o(n) : n;
                } : o;
            }
            var n, r;
            return n = {}, t("next"), t("throw", function(e) {
                throw e;
            }), t("return"), n[Symbol.iterator] = function() {
                return this;
            }, n;
        }
        function y(e) {
            function t(t) {
                n[t] = e[t] && function(n) {
                    return new Promise(function(r, o) {
                        !function(e, t, n, r) {
                            Promise.resolve(r).then(function(t) {
                                e({
                                    value: t,
                                    done: n
                                });
                            }, t);
                        }(r, o, (n = e[t](n)).done, n.value);
                    });
                };
            }
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, r = e[Symbol.asyncIterator];
            return r ? r.call(e) : (e = f(e), n = {}, t("next"), t("throw"), t("return"), n[Symbol.asyncIterator] = function() {
                return this;
            }, n);
        }
        function b(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t, e;
        }
        function m(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t;
        }
        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        n.r(t), n.d(t, "__extends", function() {
            return r;
        }), n.d(t, "__assign", function() {
            return S;
        }), n.d(t, "__rest", function() {
            return o;
        }), n.d(t, "__decorate", function() {
            return i;
        }), n.d(t, "__param", function() {
            return a;
        }), n.d(t, "__metadata", function() {
            return u;
        }), n.d(t, "__awaiter", function() {
            return c;
        }), n.d(t, "__generator", function() {
            return s;
        }), n.d(t, "__exportStar", function() {
            return l;
        }), n.d(t, "__values", function() {
            return f;
        }), n.d(t, "__read", function() {
            return p;
        }), n.d(t, "__spread", function() {
            return d;
        }), n.d(t, "__await", function() {
            return h;
        }), n.d(t, "__asyncGenerator", function() {
            return v;
        }), n.d(t, "__asyncDelegator", function() {
            return g;
        }), n.d(t, "__asyncValues", function() {
            return y;
        }), n.d(t, "__makeTemplateObject", function() {
            return b;
        }), n.d(t, "__importStar", function() {
            return m;
        }), n.d(t, "__importDefault", function() {
            return _;
        });
        var w = function(e, t) {
            return (w = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }, S = function() {
            return (S = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(5), o = r.getGlobalObject(), i = new (function() {
            function e() {
                this.enabled = !1;
            }
            return e.prototype.disable = function() {
                this.enabled = !1;
            }, e.prototype.enable = function() {
                this.enabled = !0;
            }, e.prototype.log = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.enabled && r.consoleSandbox(function() {
                    o.console.log("Sentry Logger [Log]: " + e.join(" "));
                });
            }, e.prototype.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.enabled && r.consoleSandbox(function() {
                    o.console.warn("Sentry Logger [Warn]: " + e.join(" "));
                });
            }, e.prototype.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.enabled && r.consoleSandbox(function() {
                    o.console.error("Sentry Logger [Error]: " + e.join(" "));
                });
            }, e;
        }())();
        t.logger = i;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isError = function(e) {
            switch (Object.prototype.toString.call(e)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;

              default:
                return e instanceof Error;
            }
        }, t.isErrorEvent = function(e) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(e);
        }, t.isDOMError = function(e) {
            return "[object DOMError]" === Object.prototype.toString.call(e);
        }, t.isDOMException = function(e) {
            return "[object DOMException]" === Object.prototype.toString.call(e);
        }, t.isUndefined = function(e) {
            return void 0 === e;
        }, t.isFunction = function(e) {
            return "function" == typeof e;
        }, t.isString = function(e) {
            return "[object String]" === Object.prototype.toString.call(e);
        }, t.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        }, t.isPlainObject = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
        }, t.isRegExp = function(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e);
        }, t.isNaN = function(e) {
            return e != e;
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(26);
        t.addBreadcrumb = r.addBreadcrumb, t.captureException = r.captureException, t.captureEvent = r.captureEvent, 
        t.captureMessage = r.captureMessage, t.configureScope = r.configureScope, t.withScope = r.withScope;
        var o = n(6);
        t.addGlobalEventProcessor = o.addGlobalEventProcessor, t.getCurrentHub = o.getCurrentHub, 
        t.Hub = o.Hub, t.getHubFromCarrier = o.getHubFromCarrier, t.Scope = o.Scope;
        var i = n(31);
        t.API = i.API;
        var a = n(32);
        t.BaseClient = a.BaseClient;
        var u = n(35);
        t.BaseBackend = u.BaseBackend;
        var c = n(10);
        t.Dsn = c.Dsn;
        var s = n(11);
        t.SentryError = s.SentryError;
        var l = n(14);
        t.RequestBuffer = l.RequestBuffer;
        var f = n(36);
        t.LogLevel = f.LogLevel;
        var p = n(37);
        t.initAndBind = p.initAndBind;
        var d = n(38);
        t.Integrations = d;
    }, function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a), c = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function o() {
            var e;
            return e = regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!c) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", c);

                      case 2:
                        return e.abrupt("return", new Promise(function(e) {
                            !function t() {
                                var n = getApp({
                                    allowDefault: !0
                                });
                                n ? (c = n, e(n)) : setTimeout(t, 20);
                            }();
                        }));

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), (o = function() {
                var t = this, n = arguments;
                return new Promise(function(o, i) {
                    function a(e) {
                        r(c, o, i, a, u, "next", e);
                    }
                    function u(e) {
                        r(c, o, i, a, u, "throw", e);
                    }
                    var c = e.apply(t, n);
                    a(void 0);
                });
            }).apply(this, arguments);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setMinaContext = function(e) {
            a = e;
        }, t.getMinaContext = function() {
            return a;
        }, t.getMinaApiList = function() {
            return Object.keys(a).filter(function(e) {
                return "function" == typeof a[e];
            });
        }, t.getSystemInfo = function() {
            try {
                return u || (u = a.getSystemInfoSync());
            } catch (t) {
                i.logger.warn("getSystemInfoSync is undefined in minaContext");
                var e = {};
                return s.forEach(function(t) {
                    e[t] = "unknow";
                }), e;
            }
        }, t.supportRequest = function() {
            return !!a.request;
        }, t.supportNavigations = function() {
            var e = [ "navigateBack", "navigateTo", "redirectTo", "reLaunch", "switchTab" ].filter(function(e) {
                return !!a[e];
            });
            return e.length > 0 ? e : null;
        }, t.getCurrentPage = function() {
            if ("function" == typeof getCurrentPages) {
                var e = getCurrentPages();
                return e[e.length - 1].route;
            }
            return "unknow";
        }, t.getPrevPage = function(e) {
            if ("function" == typeof getCurrentPages) {
                var t = getCurrentPages();
                if (e || (e = 1), t[t.length - 1 - e]) return t[t.length - 1 - e].route;
            }
            return "unknow";
        }, t.getMinaApp = function() {
            return o.apply(this, arguments);
        }, t.supportStorage = function() {
            return 2 === [ "setStorage", "getStorageSync" ].filter(function(e) {
                return !!a[e];
            }).length;
        }, t.supportLogManager = function() {
            return !!a.getLogManager;
        }, t.isWxUnhandledPromiseError = function(e) {
            return !(!e || "string" != typeof e || !/^(Unhandled|Uncaught)/i.test(e));
        }, t.MINA_PAGE_LIFE_CYCLE = t.MINA_APP_LIFE_CYCLE = t.MINA_SYSTEMINFO_TAGS = void 0;
        var i = n(1), a = "undefined" != typeof wx ? wx : {}, u = null, c = null, s = [ "brand", "model", "language", "version", "system", "platform", "SDKVersion" ];
        t.MINA_SYSTEMINFO_TAGS = s, t.MINA_APP_LIFE_CYCLE = [ "onAppShow", "onAppHide" ], 
        t.MINA_PAGE_LIFE_CYCLE = [ "onLoad", "onShow", "onHide", "onUnload", "onReady" ];
    }, function(e, t, n) {
        "use strict";
        (function(e, r) {
            function o() {
                return "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0);
            }
            function i() {
                return o() ? r : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {};
            }
            function a(e) {
                var t, n, r, o, i, a = [];
                if (!e || !e.tagName) return "";
                if (a.push(e.tagName.toLowerCase()), e.id && a.push("#" + e.id), (t = e.className) && u.isString(t)) for (n = t.split(/\s+/), 
                i = 0; i < n.length; i++) a.push("." + n[i]);
                var c = [ "type", "name", "title", "alt" ];
                for (i = 0; i < c.length; i++) r = c[i], (o = e.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
                return a.join("");
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = n(2);
            t.dynamicRequire = function(e, t) {
                return e.require(t);
            }, t.isNodeEnv = o, t.getGlobalObject = i, t.uuid4 = function() {
                var e = i(), t = e.crypto || e.msCrypto;
                if (void 0 !== t && t.getRandomValues) {
                    var n = new Uint16Array(8);
                    t.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                    var r = function(e) {
                        for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
                        return t;
                    };
                    return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7]);
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16);
                });
            }, t.htmlTreeAsString = function(e) {
                for (var t, n = e, r = [], o = 0, i = 0, u = " > ".length; n && o++ < 5 && !("html" === (t = a(n)) || o > 1 && i + r.length * u + t.length >= 80); ) r.push(t), 
                i += t.length, n = n.parentNode;
                return r.reverse().join(" > ");
            }, t.htmlElementAsString = a, t.parseUrl = function(e) {
                if (!e) return {};
                var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                var n = t[6] || "", r = t[8] || "";
                return {
                    host: t[4],
                    path: t[5],
                    protocol: t[2],
                    relative: t[5] + n + r
                };
            }, t.getEventDescription = function(e) {
                if (e.message) return e.message;
                if (e.exception && e.exception.values && e.exception.values[0]) {
                    var t = e.exception.values[0];
                    return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>";
                }
                return e.event_id || "<unknown>";
            }, t.consoleSandbox = function(e) {
                var t = i();
                if (!("console" in t)) return e();
                var n = t.console, r = {};
                [ "debug", "info", "warn", "error", "log" ].forEach(function(e) {
                    e in t.console && n[e].__sentry__ && (r[e] = n[e].__sentry_wrapped__, n[e] = n[e].__sentry_original__);
                });
                var o = e();
                return Object.keys(r).forEach(function(e) {
                    n[e] = r[e];
                }), o;
            };
        }).call(this, n(27), n(28));
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(13);
        t.addGlobalEventProcessor = r.addGlobalEventProcessor, t.Scope = r.Scope;
        var o = n(29);
        t.getCurrentHub = o.getCurrentHub, t.getHubFromCarrier = o.getHubFromCarrier, t.getMainCarrier = o.getMainCarrier, 
        t.Hub = o.Hub, t.setHubOnCarrier = o.setHubOnCarrier;
    }, function(e, t, n) {
        "use strict";
        function r() {
            var e = [], t = [];
            return function(n, r) {
                var o = r;
                if (l.isNaN(r) ? o = f : l.isUndefined(r) && (o = p), e.length > 0) {
                    var i = e.indexOf(this);
                    -1 !== i ? (e.splice(i + 1), t.splice(i, 1 / 0, n)) : (e.push(this), t.push(n)), 
                    -1 !== e.indexOf(o) && (o = function(n, r) {
                        return e[0] === r ? "[Circular ~]" : "[Circular ~." + t.slice(0, e.indexOf(r)).join(".") + "]";
                    }.call(this, n, o));
                } else e.push(o);
                return o instanceof Error ? function(e) {
                    var t = {
                        message: e.message,
                        name: e.name,
                        stack: e.stack
                    };
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t;
                }(o) : o;
            };
        }
        function o(e, t) {
            return t === f ? NaN : t !== p ? t : void 0;
        }
        function i(e) {
            return JSON.stringify(e, r());
        }
        function a(e) {
            return JSON.parse(e, o);
        }
        function u(e) {
            return function(e) {
                return ~-encodeURI(e).split(/%..|./).length;
            }(JSON.stringify(e));
        }
        function c(e) {
            if ("string" == typeof e) return e.length <= 40 ? e : e.substr(0, 39) + "…";
            if ("number" == typeof e || "boolean" == typeof e || void 0 === e) return e;
            if (l.isNaN(e)) return "[NaN]";
            if (l.isUndefined(e)) return "[undefined]";
            var t = Object.prototype.toString.call(e);
            if ("[object Object]" === t) return "[Object]";
            if ("[object Array]" === t) return "[Array]";
            if ("[object Function]" === t) {
                var n = e.name;
                return n ? "[Function: " + n + "]" : "[Function]";
            }
            return e;
        }
        function s(e, t) {
            if (0 === t) return c(e);
            if (l.isPlainObject(e)) {
                var n = {}, r = e;
                return Object.keys(r).forEach(function(e) {
                    n[e] = s(r[e], t - 1);
                }), n;
            }
            return Array.isArray(e) ? e.map(function(e) {
                return s(e, t - 1);
            }) : c(e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(2), f = "[NaN]", p = "[undefined]";
        t.serialize = i, t.deserialize = a, t.clone = function(e) {
            return a(i(e));
        }, t.fill = function(e, t, n) {
            if (t in e && !e[t].__sentry__) {
                var r = e[t], o = n(r);
                o.__sentry__ = !0, o.__sentry_original__ = r, o.__sentry_wrapped__ = o, e[t] = o;
            }
        }, t.urlEncode = function(e) {
            return Object.keys(e).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
            }).join("&");
        };
        t.serializeObject = s, t.limitObjectDepthToSize = function e(t, n, r) {
            void 0 === n && (n = 3), void 0 === r && (r = 102400);
            var o = s(t, n);
            return u(i(o)) > r ? e(t, n - 1) : o;
        }, t.serializeKeysToEventMessage = function(e, t) {
            if (void 0 === t && (t = 40), !e.length) return "[object has no keys]";
            if (e[0].length >= t) return e[0];
            for (var n = e.length; n > 0; n--) {
                var r = e.slice(0, n).join(", ");
                if (!(r.length > t)) return n === e.length ? r : r + "…";
            }
            return "";
        }, t.assign = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var r = Object(e), o = 0; o < t.length; o++) {
                var i = t[o];
                if (null !== i) for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
            }
            return r;
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), function(e) {
            e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", 
            e.Debug = "debug", e.Critical = "critical";
        }(t.Severity || (t.Severity = {})), function(e) {
            e.fromString = function(t) {
                switch (t) {
                  case "debug":
                    return e.Debug;

                  case "info":
                    return e.Info;

                  case "warn":
                  case "warning":
                    return e.Warning;

                  case "error":
                    return e.Error;

                  case "fatal":
                    return e.Fatal;

                  case "critical":
                    return e.Critical;

                  case "log":
                  default:
                    return e.Log;
                }
            };
        }(t.Severity || (t.Severity = {})), function(e) {
            e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", 
            e.Invalid = "invalid", e.Failed = "failed";
        }(t.Status || (t.Status = {})), function(e) {
            e.fromHttpCode = function(t) {
                return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown;
            };
        }(t.Status || (t.Status = {}));
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(2);
        t.truncate = function(e, t) {
            return void 0 === t && (t = 0), 0 !== t && r.isString(e) ? e.length <= t ? e : e.substr(0, t) + "…" : e;
        }, t.snipLine = function(e, t) {
            var n = e, r = n.length;
            if (r <= 150) return n;
            t > r && (t = r);
            var o = Math.max(t - 60, 0);
            o < 5 && (o = 0);
            var i = Math.min(o + 140, r);
            return i > r - 5 && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), 
            o > 0 && (n = "'{snip} " + n), i < r && (n += " {snip}"), n;
        }, t.safeJoin = function(e, t) {
            if (!Array.isArray(e)) return "";
            for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r];
                try {
                    n.push(String(o));
                } catch (e) {
                    n.push("[value cannot be serialized]");
                }
            }
            return n.join(t);
        }, t.includes = function(e, t) {
            return !(t.length > e.length) && -1 !== e.indexOf(t);
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = n(2), i = n(7), a = n(11), u = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/, c = function() {
            function e(e) {
                "string" == typeof e ? this.fromString(e) : this.fromComponents(e), this.validate();
            }
            return e.prototype.toString = function(e) {
                void 0 === e && (e = !1);
                var t = this, n = t.host, r = t.path, o = t.pass, i = t.port, a = t.projectId;
                return t.protocol + "://" + t.user + (e && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a;
            }, e.prototype.fromString = function(e) {
                var t = u.exec(e);
                if (!t) throw new a.SentryError("Invalid Dsn");
                var n = r.__read(t.slice(1), 6), o = n[0], c = n[1], s = n[2], l = void 0 === s ? "" : s, f = n[3], p = n[4], d = void 0 === p ? "" : p, h = "", v = n[5], g = v.split("/");
                g.length > 1 && (h = g.slice(0, -1).join("/"), v = g.pop()), i.assign(this, {
                    host: f,
                    pass: l,
                    path: h,
                    projectId: v,
                    port: d,
                    protocol: o,
                    user: c
                });
            }, e.prototype.fromComponents = function(e) {
                this.protocol = e.protocol, this.user = e.user, this.pass = e.pass || "", this.host = e.host, 
                this.port = e.port || "", this.path = e.path || "", this.projectId = e.projectId;
            }, e.prototype.validate = function() {
                var e, t;
                try {
                    for (var n = r.__values([ "protocol", "user", "host", "projectId" ]), i = n.next(); !i.done; i = n.next()) {
                        var u = i.value;
                        if (!this[u]) throw new a.SentryError("Invalid Dsn: Missing " + u);
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally {
                    try {
                        i && !i.done && (t = n.return) && t.call(n);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                if ("http" !== this.protocol && "https" !== this.protocol) throw new a.SentryError('Invalid Dsn: Unsupported protocol "' + this.protocol + '"');
                if (this.port && o.isNaN(parseInt(this.port, 10))) throw new a.SentryError('Invalid Dsn: Invalid port number "' + this.port + '"');
            }, e;
        }();
        t.Dsn = c;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = function(e) {
            function t(t) {
                var n = this.constructor, r = e.call(this, t) || this;
                return r.message = t, r.name = n.prototype.constructor.name, Object.setPrototypeOf(r, n.prototype), 
                r;
            }
            return r.__extends(t, e), t;
        }(Error);
        t.SentryError = o;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    o(e, t, n[t]);
                });
            }
            return e;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }
        function a() {
            return "undefined" == typeof document || null == document.location ? "" : document.location.href;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.computeStackTrace = t.installGlobalUnhandledRejectionHandler = t.installGlobalHandler = t.subscribe = t.report = void 0;
        var u = n(2), c = (0, n(5).getGlobalObject)(), s = {
            wrap: function() {
                return function() {};
            },
            report: !1,
            collectWindowErrors: !1,
            computeStackTrace: !1,
            remoteFetching: !1,
            linesOfContext: !1,
            extendToAsynchronousCallbacks: !1
        }, l = [].slice, f = "?", p = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
        s.wrap = function(e) {
            return function() {
                try {
                    return e.apply(this, arguments);
                } catch (e) {
                    throw s.report(e), e;
                }
            };
        }, s.report = function() {
            function e(e, t, n) {
                var r = null;
                if (!t || s.collectWindowErrors) {
                    for (var o in g) if (i(g, o)) try {
                        g[o](e, t, n);
                    } catch (e) {
                        r = e;
                    }
                    if (r) throw r;
                }
            }
            function t(t, n, i, c, l) {
                var d = null;
                if (l = (0, u.isErrorEvent)(l) ? l.error : l, t = (0, u.isErrorEvent)(t) ? t.message : t, 
                b) s.computeStackTrace.augmentStackTraceWithInitialElement(b, n, i, t), o(); else if (l && (0, 
                u.isError)(l)) (d = s.computeStackTrace(l)).mechanism = "onerror", e(d, !0, l); else {
                    var h, v = {
                        url: n,
                        line: i,
                        column: c
                    }, g = t;
                    if ("[object String]" === {}.toString.call(t)) {
                        var y = t.match(p);
                        y && (h = y[1], g = y[2]);
                    }
                    v.func = s.computeStackTrace.guessFunctionName(v.url, v.line), v.context = s.computeStackTrace.gatherContext(v.url, v.line), 
                    e(d = {
                        name: h,
                        message: g,
                        mode: "onerror",
                        mechanism: "onerror",
                        stack: [ r({}, v, {
                            url: v.url || a()
                        }) ]
                    }, !0, null);
                }
                return !!f && f.apply(this, arguments);
            }
            function n(t) {
                var n = t && (t.detail ? t.detail.reason : t.reason) || t, r = s.computeStackTrace(n);
                r.mechanism = "onunhandledrejection", e(r, !0, n);
            }
            function o() {
                var t = b, n = y;
                b = null, y = null, e(t, !1, n);
            }
            function l(e) {
                if (b) {
                    if (y === e) return;
                    o();
                }
                var t = s.computeStackTrace(e);
                throw b = t, y = e, setTimeout(function() {
                    y === e && o();
                }, t.incomplete ? 2e3 : 0), e;
            }
            var f, d, h, v, g = [], y = null, b = null;
            return l.subscribe = function(e) {
                g.push(e);
            }, l.unsubscribe = function(e) {
                for (var t = g.length - 1; t >= 0; --t) g[t] === e && g.splice(t, 1);
                0 === g.length && (d && (c.onerror = f, d = !1), v && (c.onerror = h, v = !1));
            }, l.installGlobalHandler = function() {
                !0 !== d && (f = c.onerror, c.onerror = t, d = !0);
            }, l.installGlobalUnhandledRejectionHandler = function() {
                !0 !== v && (h = c.onunhandledrejection, c.onunhandledrejection = n, v = !0);
            }, l.traceKitWindowOnUnhandledRejection = n, l;
        }(), s.computeStackTrace = function() {
            function e(e) {
                if ("string" != typeof e) return [];
                if (!i(m, e)) {
                    var t = "", n = "";
                    try {
                        n = c.document.domain;
                    } catch (e) {}
                    var r = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(e);
                    r && r[2] === n && (t = function(e) {
                        if (!s.remoteFetching) return "";
                        try {
                            var t = function() {
                                try {
                                    return new c.XMLHttpRequest();
                                } catch (e) {
                                    return new c.ActiveXObject("Microsoft.XMLHTTP");
                                }
                            }();
                            return t.open("GET", e, !1), t.send(""), t.responseText;
                        } catch (e) {
                            return "";
                        }
                    }(e)), m[e] = t ? t.split("\n") : [];
                }
                return m[e];
            }
            function t(t, n) {
                var r, o = /function ([^(]*)\(([^)]*)\)/, i = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/, a = "", c = e(t);
                if (!c.length) return f;
                for (var s = 0; s < 10; ++s) if (a = c[n - s] + a, !(0, u.isUndefined)(a)) {
                    if (r = i.exec(a)) return r[1];
                    if (r = o.exec(a)) return r[1];
                }
                return f;
            }
            function n(t, n) {
                var r = e(t);
                if (!r.length) return null;
                var o = [], i = Math.floor(s.linesOfContext / 2), a = i + s.linesOfContext % 2, c = Math.max(0, n - i - 1), l = Math.min(r.length, n + a - 1);
                n -= 1;
                for (var f = c; f < l; ++f) (0, u.isUndefined)(r[f]) || o.push(r[f]);
                return o.length > 0 ? o : null;
            }
            function r(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&");
            }
            function o(e) {
                return r(e).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+");
            }
            function l(t, n) {
                for (var r, o, i = 0, a = n.length; i < a; ++i) if ((r = e(n[i])).length && (r = r.join("\n"), 
                o = t.exec(r))) return {
                    url: n[i],
                    line: r.substring(0, o.index).split("\n").length,
                    column: o.index - r.lastIndexOf("\n", o.index) - 1
                };
                return null;
            }
            function p(t, n, o) {
                var i, a = e(n), u = new RegExp("\\b" + r(t) + "\\b");
                return o -= 1, a && a.length > o && (i = u.exec(a[o])) ? i.index : null;
            }
            function d(e) {
                if (!(0, u.isUndefined)(c && c.document)) {
                    for (var t, n, i, s, f = [ a() ], p = c.document.getElementsByTagName("script"), d = "" + e, h = 0; h < p.length; ++h) {
                        var v = p[h];
                        v.src && f.push(v.src);
                    }
                    if (i = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(d)) {
                        var g = i[1] ? "\\s+" + i[1] : "", y = i[2].split(",").join("\\s*,\\s*");
                        t = r(i[3]).replace(/;$/, ";?"), n = new RegExp("function" + g + "\\s*\\(\\s*" + y + "\\s*\\)\\s*{\\s*" + t + "\\s*}");
                    } else n = new RegExp(r(d).replace(/\s+/g, "\\s+"));
                    if (s = l(n, f)) return s;
                    if (i = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(d)) {
                        var b = i[1];
                        if (t = o(i[2]), s = l(n = new RegExp("on" + b + "=[\\'\"]\\s*" + t + "\\s*[\\'\"]", "i"), f[0])) return s;
                        if (s = l(n = new RegExp(t), f)) return s;
                    }
                    return null;
                }
            }
            function h(e) {
                if (!e.stack) return null;
                for (var r, o, i, a = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, l = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, d = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, h = /\((\S*)(?::(\d+))(?::(\d+))\)/, v = e.stack.split("\n"), g = [], y = /^(.*) is undefined$/.exec(e.message), b = 0, m = v.length; b < m; ++b) {
                    if (o = a.exec(v[b])) {
                        var _ = o[2] && 0 === o[2].indexOf("native");
                        o[2] && 0 === o[2].indexOf("eval") && (r = h.exec(o[2])) && (o[2] = r[1]), i = {
                            url: _ ? null : o[2],
                            func: o[1] || f,
                            args: _ ? [ o[2] ] : [],
                            line: o[3] ? +o[3] : null,
                            column: o[4] ? +o[4] : null
                        };
                    } else if (o = l.exec(v[b])) i = {
                        url: o[2],
                        func: o[1] || f,
                        args: [],
                        line: +o[3],
                        column: o[4] ? +o[4] : null
                    }; else {
                        if (!(o = c.exec(v[b]))) continue;
                        o[3] && o[3].indexOf(" > eval") > -1 && (r = d.exec(o[3])) ? o[3] = r[1] : 0 !== b || o[5] || (0, 
                        u.isUndefined)(e.columnNumber) || (g[0].column = e.columnNumber + 1), i = {
                            url: o[3],
                            func: o[1] || f,
                            args: o[2] ? o[2].split(",") : [],
                            line: o[4] ? +o[4] : null,
                            column: o[5] ? +o[5] : null
                        };
                    }
                    if (!i.func && i.line && (i.func = t(i.url, i.line)), s.remoteFetching && i.url && "blob:" === i.url.substr(0, 5)) {
                        var w = new XMLHttpRequest();
                        if (w.open("GET", i.url, !1), w.send(""), 200 === w.status) {
                            var S = w.responseText || "", E = (S = S.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                            if (E) {
                                var O = E[1];
                                "~" === O.charAt(0) && (O = ("undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")) + O.slice(1)), 
                                i.url = O.slice(0, -4);
                            }
                        }
                    }
                    i.context = i.line ? n(i.url, i.line) : null, g.push(i);
                }
                return g.length ? (g[0] && g[0].line && !g[0].column && y && (g[0].column = p(y[1], g[0].url, g[0].line)), 
                {
                    mode: "stack",
                    name: e.name,
                    message: e.message,
                    stack: g
                }) : null;
            }
            function v(e, r, o, i) {
                var a = {
                    url: r,
                    line: o
                };
                if (a.url && a.line) {
                    e.incomplete = !1, a.func || (a.func = t(a.url, a.line)), a.context || (a.context = n(a.url, a.line));
                    var u = / '([^']+)' /.exec(i);
                    if (u && (a.column = p(u[1], a.url, a.line)), e.stack.length > 0 && e.stack[0].url === a.url) {
                        if (e.stack[0].line === a.line) return !1;
                        if (!e.stack[0].line && e.stack[0].func === a.func) return e.stack[0].line = a.line, 
                        e.stack[0].context = a.context, !1;
                    }
                    return e.stack.unshift(a), e.partial = !0, !0;
                }
                return e.incomplete = !0, !1;
            }
            function g(e, n) {
                for (var r, o, i, a = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, u = [], c = {}, l = !1, h = g.caller; h && !l; h = h.caller) if (h !== y && h !== s.report) {
                    if (o = {
                        url: null,
                        func: f,
                        args: [],
                        line: null,
                        column: null
                    }, h.name ? o.func = h.name : (r = a.exec(h.toString())) && (o.func = r[1]), void 0 === o.func) try {
                        o.func = r.input.substring(0, r.input.indexOf("{"));
                    } catch (e) {}
                    if (i = d(h)) {
                        o.url = i.url, o.line = i.line, o.func === f && (o.func = t(o.url, o.line));
                        var b = / '([^']+)' /.exec(e.message || e.description);
                        b && (o.column = p(b[1], i.url, i.line));
                    }
                    c["" + h] ? l = !0 : c["" + h] = !0, u.push(o);
                }
                n && u.splice(0, n);
                var m = {
                    mode: "callers",
                    name: e.name,
                    message: e.message,
                    stack: u
                };
                return v(m, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), 
                m;
            }
            function y(r, u) {
                var s = null;
                u = null == u ? 0 : +u;
                try {
                    if (s = function(e) {
                        var r = e.stacktrace;
                        if (r) {
                            for (var o, i = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, a = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, u = r.split("\n"), c = [], s = 0; s < u.length; s += 2) {
                                var l = null;
                                if ((o = i.exec(u[s])) ? l = {
                                    url: o[2],
                                    line: +o[1],
                                    column: null,
                                    func: o[3],
                                    args: []
                                } : (o = a.exec(u[s])) && (l = {
                                    url: o[6],
                                    line: +o[1],
                                    column: +o[2],
                                    func: o[3] || o[4],
                                    args: o[5] ? o[5].split(",") : []
                                }), l) {
                                    if (!l.func && l.line && (l.func = t(l.url, l.line)), l.line) try {
                                        l.context = n(l.url, l.line);
                                    } catch (e) {}
                                    l.context || (l.context = [ u[s + 1] ]), c.push(l);
                                }
                            }
                            return c.length ? {
                                mode: "stacktrace",
                                name: e.name,
                                message: e.message,
                                stack: c
                            } : null;
                        }
                    }(r)) return s;
                } catch (r) {
                    if (b) throw r;
                }
                try {
                    if (s = h(r)) return s;
                } catch (r) {
                    if (b) throw r;
                }
                try {
                    if (s = function(r) {
                        var u = r.message.split("\n");
                        if (u.length < 4) return null;
                        var s, f = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, p = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, d = /^\s*Line (\d+) of function script\s*$/i, h = [], v = c && c.document && c.document.getElementsByTagName("script"), g = [];
                        for (var y in v) i(v, y) && !v[y].src && g.push(v[y]);
                        for (var b = 2; b < u.length; b += 2) {
                            var m = null;
                            if (s = f.exec(u[b])) m = {
                                url: s[2],
                                func: s[3],
                                args: [],
                                line: +s[1],
                                column: null
                            }; else if (s = p.exec(u[b])) {
                                m = {
                                    url: s[3],
                                    func: s[4],
                                    args: [],
                                    line: +s[1],
                                    column: null
                                };
                                var _ = +s[1], w = g[s[2] - 1];
                                if (w) {
                                    var S = e(m.url);
                                    if (S) {
                                        var E = (S = S.join("\n")).indexOf(w.innerText);
                                        E >= 0 && (m.line = _ + S.substring(0, E).split("\n").length);
                                    }
                                }
                            } else if (s = d.exec(u[b])) {
                                var O = a().replace(/#.*$/, ""), x = l(new RegExp(o(u[b + 1])), [ O ]);
                                m = {
                                    url: O,
                                    func: "",
                                    args: [],
                                    line: x ? x.line : s[1],
                                    column: null
                                };
                            }
                            if (m) {
                                m.func || (m.func = t(m.url, m.line));
                                var j = n(m.url, m.line), k = j ? j[Math.floor(j.length / 2)] : null;
                                j && k.replace(/^\s*/, "") === u[b + 1].replace(/^\s*/, "") ? m.context = j : m.context = [ u[b + 1] ], 
                                h.push(m);
                            }
                        }
                        return h.length ? {
                            mode: "multiline",
                            name: r.name,
                            message: u[0],
                            stack: h
                        } : null;
                    }(r)) return s;
                } catch (r) {
                    if (b) throw r;
                }
                try {
                    if (s = g(r, u + 1)) return s;
                } catch (r) {
                    if (b) throw r;
                }
                return {
                    name: r.name,
                    message: r.message,
                    mode: "failed"
                };
            }
            var b = !1, m = {};
            return y.augmentStackTraceWithInitialElement = v, y.computeStackTraceFromStackProp = h, 
            y.guessFunctionName = t, y.gatherContext = n, y.ofCaller = function(e) {
                e = 1 + (null == e ? 0 : +e);
                try {
                    throw new Error();
                } catch (t) {
                    return y(t, e + 1);
                }
            }, y.getSource = e, y;
        }(), s.extendToAsynchronousCallbacks = function() {
            var e = function(e) {
                var t = c[e];
                c[e] = function() {
                    var e = l.call(arguments), n = e[0];
                    return "function" == typeof n && (e[0] = s.wrap(n)), t.apply ? t.apply(this, e) : t(e[0], e[1]);
                };
            };
            e("setTimeout"), e("setInterval");
        }, s.remoteFetching = !1, s.collectWindowErrors = !0, s.linesOfContext = 11;
        var d = s.report;
        t.report = d;
        var h = s.report.subscribe;
        t.subscribe = h;
        var v = s.report.installGlobalHandler;
        t.installGlobalHandler = v;
        var g = s.report.installGlobalUnhandledRejectionHandler;
        t.installGlobalUnhandledRejectionHandler = g;
        var y = s.computeStackTrace;
        t.computeStackTrace = y;
    }, function(e, t, n) {
        "use strict";
        function r() {
            var e = i.getGlobalObject();
            return e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [], 
            e.__SENTRY__.globalEventProcessors;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0), i = n(5), a = n(7), u = function() {
            function e() {
                this.notifyingListeners = !1, this.scopeListeners = [], this.eventProcessors = [], 
                this.breadcrumbs = [], this.user = {}, this.tags = {}, this.extra = {};
            }
            return e.prototype.addScopeListener = function(e) {
                this.scopeListeners.push(e);
            }, e.prototype.addEventProcessor = function(e) {
                return this.eventProcessors.push(e), this;
            }, e.prototype.notifyScopeListeners = function() {
                var e = this;
                this.notifyingListeners || (this.notifyingListeners = !0, setTimeout(function() {
                    e.scopeListeners.forEach(function(t) {
                        t(e);
                    }), e.notifyingListeners = !1;
                }, 0));
            }, e.prototype.notifyEventProcessors = function(e, t) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var n, i, a, u, c, s, l;
                    return o.__generator(this, function(f) {
                        switch (f.label) {
                          case 0:
                            a = e, f.label = 1;

                          case 1:
                            f.trys.push([ 1, 8, 9, 10 ]), u = o.__values(o.__spread(r(), this.eventProcessors)), 
                            c = u.next(), f.label = 2;

                          case 2:
                            if (c.done) return [ 3, 7 ];
                            s = c.value, f.label = 3;

                          case 3:
                            return f.trys.push([ 3, 5, , 6 ]), [ 4, s(o.__assign({}, a), t) ];

                          case 4:
                            return null === (a = f.sent()) ? [ 2, null ] : [ 3, 6 ];

                          case 5:
                            return f.sent(), [ 3, 6 ];

                          case 6:
                            return c = u.next(), [ 3, 2 ];

                          case 7:
                            return [ 3, 10 ];

                          case 8:
                            return l = f.sent(), n = {
                                error: l
                            }, [ 3, 10 ];

                          case 9:
                            try {
                                c && !c.done && (i = u.return) && i.call(u);
                            } finally {
                                if (n) throw n.error;
                            }
                            return [ 7 ];

                          case 10:
                            return [ 2, a ];
                        }
                    });
                });
            }, e.prototype.setUser = function(e) {
                return this.user = e, this.notifyScopeListeners(), this;
            }, e.prototype.setTag = function(e, t) {
                var n;
                return this.tags = o.__assign({}, this.tags, ((n = {})[e] = t, n)), this.notifyScopeListeners(), 
                this;
            }, e.prototype.setExtra = function(e, t) {
                var n;
                return this.extra = o.__assign({}, this.extra, ((n = {})[e] = t, n)), this.notifyScopeListeners(), 
                this;
            }, e.prototype.setFingerprint = function(e) {
                return this.fingerprint = e, this.notifyScopeListeners(), this;
            }, e.prototype.setLevel = function(e) {
                return this.level = e, this.notifyScopeListeners(), this;
            }, e.clone = function(t) {
                var n = new e();
                return a.assign(n, t, {
                    scopeListeners: []
                }), t && (n.extra = a.assign(t.extra), n.tags = a.assign(t.tags), n.breadcrumbs = o.__spread(t.breadcrumbs), 
                n.eventProcessors = o.__spread(t.eventProcessors)), n;
            }, e.prototype.clear = function() {
                this.breadcrumbs = [], this.tags = {}, this.extra = {}, this.user = {}, this.level = void 0, 
                this.fingerprint = void 0, this.notifyScopeListeners();
            }, e.prototype.addBreadcrumb = function(e, t) {
                this.breadcrumbs = void 0 !== t && t >= 0 ? o.__spread(this.breadcrumbs, [ e ]).slice(-t) : o.__spread(this.breadcrumbs, [ e ]), 
                this.notifyScopeListeners();
            }, e.prototype.applyFingerprint = function(e) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [ e.fingerprint ] : [], 
                this.fingerprint ? e.fingerprint = e.fingerprint.concat(this.fingerprint) : e.message && (e.fingerprint = e.fingerprint.concat(e.message)), 
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
            }, e.prototype.applyToEvent = function(e, t, n) {
                return o.__awaiter(this, void 0, void 0, function() {
                    return o.__generator(this, function(r) {
                        return this.extra && Object.keys(this.extra).length && (e.extra = o.__assign({}, this.extra, e.extra)), 
                        this.tags && Object.keys(this.tags).length && (e.tags = o.__assign({}, this.tags, e.tags)), 
                        this.user && Object.keys(this.user).length && (e.user = o.__assign({}, this.user, e.user)), 
                        this.level && (e.level = this.level), this.applyFingerprint(e), (!e.breadcrumbs || 0 === e.breadcrumbs.length) && this.breadcrumbs.length > 0 && (e.breadcrumbs = void 0 !== n && n >= 0 ? this.breadcrumbs.slice(-n) : this.breadcrumbs), 
                        [ 2, this.notifyEventProcessors(e, t) ];
                    });
                });
            }, e;
        }();
        t.Scope = u, t.addGlobalEventProcessor = function(e) {
            r().push(e);
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = function() {
            function e() {
                this.buffer = [];
            }
            return e.prototype.add = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t = this;
                    return r.__generator(this, function(n) {
                        return -1 === this.buffer.indexOf(e) && this.buffer.push(e), e.then(function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(t) {
                                    return [ 2, this.remove(e) ];
                                });
                            });
                        }).catch(function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(t) {
                                    return [ 2, this.remove(e) ];
                                });
                            });
                        }), [ 2, e ];
                    });
                });
            }, e.prototype.remove = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(t) {
                        return [ 2, this.buffer.splice(this.buffer.indexOf(e), 1)[0] ];
                    });
                });
            }, e.prototype.length = function() {
                return this.buffer.length;
            }, e.prototype.drain = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t = this;
                    return r.__generator(this, function(n) {
                        return [ 2, new Promise(function(n) {
                            var r = setTimeout(function() {
                                e && e > 0 && n(!1);
                            }, e);
                            Promise.all(t.buffer).then(function() {
                                clearTimeout(r), n(!0);
                            }).catch(function() {
                                n(!0);
                            });
                        }) ];
                    });
                });
            }, e;
        }();
        t.RequestBuffer = o;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    i(e, t, n[t]);
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a), c = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function u(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function i(e) {
                        a(c, r, o, i, u, "next", e);
                    }
                    function u(e) {
                        a(c, r, o, i, u, "throw", e);
                    }
                    var c = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function s(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }(e) : t;
        }
        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function f(e, t) {
            return (f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MinaBackend = void 0;
        var p = n(3), d = n(8), h = n(2), v = n(1), g = n(16), y = n(12), b = n(17), m = n(4), _ = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), s(this, l(t).apply(this, arguments));
            }
            var n, r;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t);
            }(t, p.BaseBackend), n = t, (r = [ {
                key: "install",
                value: function() {
                    if (!this.options.dsn) throw new p.SentryError("Invariant exception: install() must not be called when disabled");
                    return Error.stackTraceLimit = 50, !0;
                }
            }, {
                key: "eventFromException",
                value: function() {
                    var e = u(regeneratorRuntime.mark(function e(t, n) {
                        var r, i, a;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!(0, h.isErrorEvent)(t) || !t.error) {
                                    e.next = 6;
                                    break;
                                }
                                t = t.error, r = (0, g.eventFromStacktrace)((0, y.computeStackTrace)(t)), e.next = 19;
                                break;

                              case 6:
                                if (!(0, h.isError)(t)) {
                                    e.next = 10;
                                    break;
                                }
                                r = (0, g.eventFromStacktrace)((0, y.computeStackTrace)(t)), e.next = 19;
                                break;

                              case 10:
                                if (!((0, h.isPlainObject)(t) && n && n.syntheticException)) {
                                    e.next = 15;
                                    break;
                                }
                                i = t, r = (0, g.eventFromPlainObject)(i, n.syntheticException), e.next = 19;
                                break;

                              case 15:
                                return a = t, e.next = 18, this.eventFromMessage(a, void 0, n);

                              case 18:
                                r = e.sent;

                              case 19:
                                return r = o({}, r, {
                                    event_id: n && n.event_id,
                                    exception: o({}, r.exception, {
                                        mechanism: {
                                            handled: !0,
                                            type: "generic"
                                        }
                                    })
                                }), e.abrupt("return", r);

                              case 21:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "eventFromMessage",
                value: function() {
                    var e = u(regeneratorRuntime.mark(function e(t, n, r) {
                        var o, i, a;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return o = {
                                    event_id: r && r.event_id,
                                    level: n,
                                    message: t
                                }, this.options.attachStacktrace && r && r.syntheticException && (i = (0, y.computeStackTrace)(r.syntheticException), 
                                a = (0, g.prepareFramesForEvent)(i.stack), o.stacktrace = {
                                    frames: a
                                }), e.abrupt("return", o);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t, n, r) {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "sendEvent",
                value: function() {
                    var e = u(regeneratorRuntime.mark(function e(t) {
                        var n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.options.dsn) {
                                    e.next = 3;
                                    break;
                                }
                                return v.logger.warn("Event has been skipped because no Dsn is configured."), e.abrupt("return", {
                                    status: d.Status.Skipped,
                                    reason: "Event has been skipped because no Dsn is configured."
                                });

                              case 3:
                                if (this.transport || (n = this.options.transportOptions ? this.options.transportOptions : {
                                    dsn: this.options.dsn
                                }, this.options.transport ? this.transport = new this.options.transport({
                                    dsn: this.options.dsn
                                }) : (0, m.supportRequest)() && (this.transport = new b.RequestTransport(n))), this.transport) {
                                    e.next = 7;
                                    break;
                                }
                                return v.logger.warn("Event has been skipped because no transport is configured."), 
                                e.abrupt("return", {
                                    status: d.Status.Skipped,
                                    reason: "Event has been skipped because no transport is configured."
                                });

                              case 7:
                                return e.abrupt("return", this.transport.captureEvent(t));

                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }()
            } ]) && c(n.prototype, r), t;
        }();
        t.MinaBackend = _;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            var t = {
                stacktrace: {
                    frames: o(e.stack)
                },
                type: e.name,
                value: e.message
            };
            return void 0 === t.type && "" === t.value && (t.value = "Unrecoverable error caught"), 
            t;
        }
        function o(e) {
            if (!e || !e.length) return [];
            var t = e, n = t[0].func || "", r = t[t.length - 1].func || "";
            return ((0, a.includes)(n, "captureMessage") || (0, a.includes)(n, "captureException")) && (t = t.slice(1)), 
            (0, a.includes)(r, "sentryWrapped") && (t = t.slice(0, -1)), t.map(function(e) {
                return {
                    colno: e.column,
                    filename: e.url || t[0].url,
                    function: e.func || "?",
                    in_app: !0,
                    lineno: e.line
                };
            }).slice(0, s).reverse();
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.exceptionFromStacktrace = r, t.eventFromPlainObject = function(e, t) {
            var n = Object.keys(e).sort(), r = {
                extra: {
                    __serialized__: (0, i.limitObjectDepthToSize)(e)
                },
                fingerprint: [ (0, u.md5)(n.join("")) ],
                message: "Non-Error exception captured with keys: ".concat((0, i.serializeKeysToEventMessage)(n))
            };
            if (t) {
                var a = (0, c.computeStackTrace)(t), s = o(a.stack);
                r.stacktrace = {
                    frames: s
                };
            }
            return r;
        }, t.eventFromStacktrace = function(e) {
            return {
                exception: {
                    values: [ r(e) ]
                }
            };
        }, t.prepareFramesForEvent = o;
        var i = n(7), a = n(9), u = n(46), c = n(12), s = 50;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "BaseTransport", {
            enumerable: !0,
            get: function() {
                return r.BaseTransport;
            }
        }), Object.defineProperty(t, "RequestTransport", {
            enumerable: !0,
            get: function() {
                return o.RequestTransport;
            }
        });
        var r = n(18), o = n(47);
    }, function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a), c = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function o(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, i) {
                    function a(e) {
                        r(c, o, i, a, u, "next", e);
                    }
                    function u(e) {
                        r(c, o, i, a, u, "throw", e);
                    }
                    var c = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BaseTransport = void 0;
        var a = n(3), u = n(4), c = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.options = t, this.url = new a.API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth(), 
                this.supportStorage = (0, u.supportStorage)(), this.tasks = this.loadTasks(), this.task = null;
                var n = parseInt(t.retry, 10);
                isNaN(n) && (n = 2), this.retry = n + 1;
            }
            var t, n;
            return t = e, (n = [ {
                key: "addTask",
                value: function(e) {
                    var t = {
                        event: e,
                        ctime: Date.now()
                    };
                    this.tasks.push(t), this.manageTask();
                }
            }, {
                key: "saveTasks",
                value: function() {
                    this.supportStorage && (0, u.getMinaContext)().setStorage({
                        key: "transport_tasks",
                        data: this.tasks
                    });
                }
            }, {
                key: "loadTasks",
                value: function() {
                    return this.supportStorage && (0, u.getMinaContext)().getStorageSync("transport_tasks") || [];
                }
            }, {
                key: "manageTask",
                value: function() {
                    var e = o(regeneratorRuntime.mark(function e() {
                        var t, n, r = this;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!this.task && 0 !== this.tasks.length) {
                                    e.next = 3;
                                    break;
                                }
                                return this.saveTasks(), e.abrupt("return");

                              case 3:
                                this.task = this.tasks.shift(), t = regeneratorRuntime.mark(function e(t) {
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return e.prev = 0, e.next = 3, r.processTask(r.task);

                                          case 3:
                                            return e.abrupt("return", "break");

                                          case 6:
                                            return e.prev = 6, e.t0 = e.catch(0), e.next = 10, new Promise(function(e) {
                                                setTimeout(e, 2e3 * Math.pow(2, t));
                                            });

                                          case 10:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e, this, [ [ 0, 6 ] ]);
                                }), n = 0;

                              case 6:
                                if (!(n < this.retry)) {
                                    e.next = 14;
                                    break;
                                }
                                return e.delegateYield(t(n), "t0", 8);

                              case 8:
                                if ("break" !== e.t0) {
                                    e.next = 11;
                                    break;
                                }
                                return e.abrupt("break", 14);

                              case 11:
                                n++, e.next = 6;
                                break;

                              case 14:
                                this.task.event._resolve && "function" == typeof this.task.event._resolve && this.task.event._resolve({}), 
                                this.task = null, this.saveTasks(), this.manageTask();

                              case 18:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "processTask",
                value: function() {
                    var e = o(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                throw new a.SentryError("Transport Class has to implement `processTask` method");

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "captureEvent",
                value: function() {
                    var e = o(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                throw new a.SentryError("Transport Class has to implement `captureEvent` method");

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            } ]) && i(t.prototype, n), e;
        }();
        t.BaseTransport = c;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function o(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    a(e, t, n[t]);
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function u(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a), c = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function s(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }(e) : t;
        }
        function l(e, t, n) {
            return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = function(e, t) {
                    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)); ) ;
                    return e;
                }(e, t);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(n) : o.value;
                }
            })(e, t, n || e);
        }
        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function p(e, t) {
            return (p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MinaClient = void 0;
        var d = n(3), h = n(15), v = n(20), g = n(4), y = function(e) {
            function t(e) {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), s(this, f(t).call(this, h.MinaBackend, e));
            }
            var n, r;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t);
            }(t, d.BaseClient), n = t, (r = [ {
                key: "prepareEvent",
                value: function() {
                    var e, n = (e = regeneratorRuntime.mark(function e(n, r, a) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n.platform = n.platform || "javascript", n.sdk = i({}, n.sdk, {
                                    name: v.SDK_NAME,
                                    packages: o(n.sdk && n.sdk.packages || []).concat([ {
                                        name: "npm:sentry-mina",
                                        version: v.SDK_VERSION
                                    } ]),
                                    version: v.SDK_VERSION
                                }), r.tags = r.tags || {}, r.tags.page = (0, g.getCurrentPage)(), e.abrupt("return", l(f(t.prototype), "prepareEvent", this).call(this, n, r, a));

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }), function() {
                        var t = this, n = arguments;
                        return new Promise(function(r, o) {
                            function i(e) {
                                u(c, r, o, i, a, "next", e);
                            }
                            function a(e) {
                                u(c, r, o, i, a, "throw", e);
                            }
                            var c = e.apply(t, n);
                            i(void 0);
                        });
                    });
                    return function(e, t, r) {
                        return n.apply(this, arguments);
                    };
                }()
            }, {
                key: "showReportDialog",
                value: function() {}
            } ]) && c(n.prototype, r), t;
        }();
        t.MinaClient = y;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SDK_VERSION = t.SDK_NAME = void 0, t.SDK_NAME = "sentry.mina", t.SDK_VERSION = "0.0.7";
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "Breadcrumbs", {
            enumerable: !0,
            get: function() {
                return r.Breadcrumbs;
            }
        }), Object.defineProperty(t, "TryCatch", {
            enumerable: !0,
            get: function() {
                return o.TryCatch;
            }
        }), Object.defineProperty(t, "LogManager", {
            enumerable: !0,
            get: function() {
                return i.LogManager;
            }
        }), Object.defineProperty(t, "GlobalHandlers", {
            enumerable: !0,
            get: function() {
                return a.GlobalHandlers;
            }
        });
        var r = n(49), o = n(50), i = n(51), a = n(52);
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.compareVersion = function(e, t) {
            e = e.split("."), t = t.split(".");
            for (var n = Math.max(e.length, t.length); e.length < n; ) e.push("0");
            for (;t.length < n; ) t.push("0");
            for (var r = 0; r < n; r++) {
                var o = parseInt(e[r]), i = parseInt(t[r]);
                if (o > i) return 1;
                if (o < i) return -1;
            }
            return 0;
        }, t.fill = function(e, t, n) {
            try {
                if (!(t in e) || e[t].__sentry__) return;
                var o = e[t], i = n(o);
                if (i.__sentry__ = !0, i.__sentry_original__ = o, i.__sentry_wrapped__ = i, Object.defineProperties && Object.getOwnPropertyDescriptor) {
                    if (!Object.getOwnPropertyDescriptor(e, t).configurable) throw new Error("unable to config");
                    Object.defineProperties(e, function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e;
                    }({}, t, {
                        value: i
                    }));
                } else e[t] = i;
            } catch (e) {
                r.logger.warn("fail to reset property ".concat(t));
            }
        }, t.globalErrorFingerprint = function(e) {
            try {
                return (0, o.isError)(e) && (e = e.message), e.split("\n").slice(0, 2);
            } catch (e) {
                return null;
            }
        };
        var r = n(1), o = n(2);
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    o(e, t, n[t]);
                });
            }
            return e;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function i(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a), c = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function a(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function a(e) {
                        i(c, r, o, a, u, "next", e);
                    }
                    function u(e) {
                        i(c, r, o, a, u, "throw", e);
                    }
                    var c = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function u() {
            f += 1, setTimeout(function() {
                f -= 1;
            });
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.shouldIgnoreOnError = function() {
            return f > 0;
        }, t.ignoreNextOnError = u, t.wrap = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0;
            if (!(0, s.isFunction)(t)) return t;
            try {
                if (t.__sentry__) return t;
                if (t.__sentry_wrapped__) return t.__sentry_wrapped__;
            } catch (e) {
                return t;
            }
            var i = function() {
                o && (0, s.isFunction)(o) && o.apply(this, arguments);
                var i, f = Array.prototype.slice.call(arguments);
                try {
                    var p = f.map(function(t) {
                        return e(t, n);
                    });
                    return t.handleEvent ? t.handleEvent.apply(this, p) : t.apply(this, p);
                } catch (e) {
                    throw u(), (0, c.withScope)((i = a(regeneratorRuntime.mark(function t(o) {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o.addEventProcessor(function() {
                                    var e = a(regeneratorRuntime.mark(function e(t) {
                                        var o;
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return o = r({}, t), n.mechanism && (o.exception = o.exception || {}, o.exception.mechanism = n.mechanism), 
                                                o.extra = r({}, o.extra, {
                                                    arguments: (0, l.serializeObject)(f, 2)
                                                }), e.abrupt("return", o);

                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, this);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }()), (0, c.captureException)(e);

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    })), function(e) {
                        return i.apply(this, arguments);
                    })), e;
                }
            };
            try {
                for (var f in t) Object.prototype.hasOwnProperty.call(t, f) && (i[f] = t[f]);
            } catch (e) {}
            return i.prototype = t.prototype, t.__sentry_wrapped__ = i, i.__sentry__ = !0, i.__sentry_original__ = t, 
            i;
        };
        var c = n(3), s = n(2), l = n(7), f = 0;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n];
            }
            return t.default = e, t;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "addGlobalEventProcessor", {
            enumerable: !0,
            get: function() {
                return i.addGlobalEventProcessor;
            }
        }), Object.defineProperty(t, "addBreadcrumb", {
            enumerable: !0,
            get: function() {
                return i.addBreadcrumb;
            }
        }), Object.defineProperty(t, "captureException", {
            enumerable: !0,
            get: function() {
                return i.captureException;
            }
        }), Object.defineProperty(t, "captureEvent", {
            enumerable: !0,
            get: function() {
                return i.captureEvent;
            }
        }), Object.defineProperty(t, "captureMessage", {
            enumerable: !0,
            get: function() {
                return i.captureMessage;
            }
        }), Object.defineProperty(t, "configureScope", {
            enumerable: !0,
            get: function() {
                return i.configureScope;
            }
        }), Object.defineProperty(t, "withScope", {
            enumerable: !0,
            get: function() {
                return i.withScope;
            }
        }), Object.defineProperty(t, "getHubFromCarrier", {
            enumerable: !0,
            get: function() {
                return i.getHubFromCarrier;
            }
        }), Object.defineProperty(t, "getCurrentHub", {
            enumerable: !0,
            get: function() {
                return i.getCurrentHub;
            }
        }), Object.defineProperty(t, "Hub", {
            enumerable: !0,
            get: function() {
                return i.Hub;
            }
        }), Object.defineProperty(t, "Scope", {
            enumerable: !0,
            get: function() {
                return i.Scope;
            }
        }), Object.defineProperty(t, "MinaBackend", {
            enumerable: !0,
            get: function() {
                return a.MinaBackend;
            }
        }), Object.defineProperty(t, "MinaClient", {
            enumerable: !0,
            get: function() {
                return u.MinaClient;
            }
        }), Object.defineProperty(t, "defaultIntegrations", {
            enumerable: !0,
            get: function() {
                return c.defaultIntegrations;
            }
        }), Object.defineProperty(t, "init", {
            enumerable: !0,
            get: function() {
                return c.init;
            }
        }), Object.defineProperty(t, "lastEventId", {
            enumerable: !0,
            get: function() {
                return c.lastEventId;
            }
        }), Object.defineProperty(t, "showReportDialog", {
            enumerable: !0,
            get: function() {
                return c.showReportDialog;
            }
        }), Object.defineProperty(t, "SDK_NAME", {
            enumerable: !0,
            get: function() {
                return s.SDK_NAME;
            }
        }), Object.defineProperty(t, "SDK_VERSION", {
            enumerable: !0,
            get: function() {
                return s.SDK_VERSION;
            }
        }), Object.defineProperty(t, "SYSTEMINFO_TAGS", {
            enumerable: !0,
            get: function() {
                return p.MINA_SYSTEMINFO_TAGS;
            }
        }), t.Transports = t.Integrations = void 0, n(25);
        var i = n(3), a = n(15), u = n(19), c = n(48), s = n(20), l = r(n(21)), f = r(n(17));
        t.Transports = f;
        var p = n(4), d = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    o(e, t, n[t]);
                });
            }
            return e;
        }({}, i.Integrations, l);
        t.Integrations = d;
    }, function(e, t, n) {
        "use strict";
        "undefined" == typeof window && (window = {
            console: console
        });
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = i.getCurrentHub();
            if (r && r[e]) return r[e].apply(r, o.__spread(t));
            throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.");
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0), i = n(6);
        t.captureException = function(e) {
            var t;
            try {
                throw new Error("Sentry syntheticException");
            } catch (e) {
                t = e;
            }
            return r("captureException", e, {
                originalException: e,
                syntheticException: t
            });
        }, t.captureMessage = function(e, t) {
            var n;
            try {
                throw new Error(e);
            } catch (e) {
                n = e;
            }
            return r("captureMessage", e, t, {
                originalException: e,
                syntheticException: n
            });
        }, t.captureEvent = function(e) {
            return r("captureEvent", e);
        }, t.addBreadcrumb = function(e) {
            r("addBreadcrumb", e);
        }, t.configureScope = function(e) {
            r("configureScope", e);
        }, t.withScope = function(e) {
            r("withScope", e);
        }, t._callOnClient = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            r.apply(void 0, o.__spread([ "invokeClient", e ], t));
        };
    }, function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined");
        }
        function r() {
            throw new Error("clearTimeout has not been defined");
        }
        function o(e) {
            if (s === setTimeout) return setTimeout(e, 0);
            if ((s === n || !s) && setTimeout) return s = setTimeout, setTimeout(e, 0);
            try {
                return s(e, 0);
            } catch (t) {
                try {
                    return s.call(null, e, 0);
                } catch (t) {
                    return s.call(this, e, 0);
                }
            }
        }
        function i() {
            h && p && (h = !1, p.length ? d = p.concat(d) : v = -1, d.length && a());
        }
        function a() {
            if (!h) {
                var e = o(i);
                h = !0;
                for (var t = d.length; t; ) {
                    for (p = d, d = []; ++v < t; ) p && p[v].run();
                    v = -1, t = d.length;
                }
                p = null, h = !1, function(e) {
                    if (l === clearTimeout) return clearTimeout(e);
                    if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
                    try {
                        l(e);
                    } catch (t) {
                        try {
                            return l.call(null, e);
                        } catch (t) {
                            return l.call(this, e);
                        }
                    }
                }(e);
            }
        }
        function u(e, t) {
            this.fun = e, this.array = t;
        }
        function c() {}
        var s, l, f = e.exports = {};
        !function() {
            try {
                s = "function" == typeof setTimeout ? setTimeout : n;
            } catch (e) {
                s = n;
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r;
            } catch (e) {
                l = r;
            }
        }();
        var p, d = [], h = !1, v = -1;
        f.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            d.push(new u(e, t)), 1 !== d.length || h || o(a);
        }, u.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", 
        f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, 
        f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, 
        f.listeners = function(e) {
            return [];
        }, f.binding = function(e) {
            throw new Error("process.binding is not supported");
        }, f.cwd = function() {
            return "/";
        }, f.chdir = function(e) {
            throw new Error("process.chdir is not supported");
        }, f.umask = function() {
            return 0;
        };
    }, function(e, t) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            function r() {
                var e = l.getGlobalObject();
                return e.__SENTRY__ = e.__SENTRY__ || {
                    hub: void 0
                }, e;
            }
            function o(e) {
                var t = r(), n = a(t);
                return u(t, e), n;
            }
            function i(e) {
                return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
            }
            function a(e) {
                return e && e.__SENTRY__ && e.__SENTRY__.hub ? e.__SENTRY__.hub : (e.__SENTRY__ = {}, 
                e.__SENTRY__.hub = new p(), e.__SENTRY__.hub);
            }
            function u(e, t) {
                return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = n(0), s = n(1), l = n(5), f = n(13);
            t.API_VERSION = 3;
            var p = function() {
                function e(e, n, r) {
                    void 0 === n && (n = new f.Scope()), void 0 === r && (r = t.API_VERSION), this.version = r, 
                    this.stack = [], this.stack.push({
                        client: e,
                        scope: n
                    });
                }
                return e.prototype.invokeClient = function(e) {
                    for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    var o = this.getStackTop();
                    o && o.client && o.client[e] && (t = o.client)[e].apply(t, c.__spread(n, [ o.scope ]));
                }, e.prototype.invokeClientAsync = function(e) {
                    for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    var o = this.getStackTop();
                    o && o.client && o.client[e] && (t = o.client)[e].apply(t, c.__spread(n, [ o.scope ])).catch(function(e) {
                        s.logger.error(e);
                    });
                }, e.prototype.isOlderThan = function(e) {
                    return this.version < e;
                }, e.prototype.bindClient = function(e) {
                    var t = this.getStackTop();
                    t.client = e, t && t.scope && e && t.scope.addScopeListener(function(t) {
                        if (e.getBackend) try {
                            e.getBackend().storeScope(t);
                        } catch (e) {}
                    });
                }, e.prototype.pushScope = function() {
                    var e = this.getStack(), t = e.length > 0 ? e[e.length - 1].scope : void 0, n = f.Scope.clone(t);
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: n
                    }), n;
                }, e.prototype.popScope = function() {
                    return void 0 !== this.getStack().pop();
                }, e.prototype.withScope = function(e) {
                    var t = this.pushScope();
                    try {
                        e(t);
                    } finally {
                        this.popScope();
                    }
                }, e.prototype.getClient = function() {
                    return this.getStackTop().client;
                }, e.prototype.getScope = function() {
                    return this.getStackTop().scope;
                }, e.prototype.getStack = function() {
                    return this.stack;
                }, e.prototype.getStackTop = function() {
                    return this.stack[this.stack.length - 1];
                }, e.prototype.captureException = function(e, t) {
                    var n = this._lastEventId = l.uuid4();
                    return this.invokeClientAsync("captureException", e, c.__assign({}, t, {
                        event_id: n
                    })), n;
                }, e.prototype.captureMessage = function(e, t, n) {
                    var r = this._lastEventId = l.uuid4();
                    return this.invokeClientAsync("captureMessage", e, t, c.__assign({}, n, {
                        event_id: r
                    })), r;
                }, e.prototype.captureEvent = function(e, t) {
                    var n = this._lastEventId = l.uuid4();
                    return this.invokeClientAsync("captureEvent", e, c.__assign({}, t, {
                        event_id: n
                    })), n;
                }, e.prototype.lastEventId = function() {
                    return this._lastEventId;
                }, e.prototype.addBreadcrumb = function(e, t) {
                    this.invokeClient("addBreadcrumb", e, c.__assign({}, t));
                }, e.prototype.configureScope = function(e) {
                    var t = this.getStackTop();
                    t.scope && t.client && e(t.scope);
                }, e.prototype.run = function(e) {
                    var t = o(this);
                    try {
                        e(this);
                    } finally {
                        o(t);
                    }
                }, e.prototype.getIntegration = function(e) {
                    try {
                        return this.getClient().getIntegration(e);
                    } catch (t) {
                        return s.logger.warn("Cannot retrieve integration " + e.id + " from the current Hub"), 
                        null;
                    }
                }, e;
            }();
            t.Hub = p, t.getMainCarrier = r, t.makeMain = o, t.getCurrentHub = function() {
                var n = r();
                i(n) && !a(n).isOlderThan(t.API_VERSION) || u(n, new p());
                try {
                    var o = l.dynamicRequire(e, "domain").active;
                    if (!o) return a(n);
                    if (!i(o) || a(o).isOlderThan(t.API_VERSION)) {
                        var c = a(n).getStackTop();
                        u(o, new p(c.client, f.Scope.clone(c.scope)));
                    }
                    return a(o);
                } catch (e) {
                    return a(n);
                }
            }, t.hasHubOnCarrier = i, t.getHubFromCarrier = a, t.setHubOnCarrier = u;
        }).call(this, n(30)(e));
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l;
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i;
                }
            }), e.webpackPolyfill = 1), e;
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(7), o = n(10), i = function() {
            function e(e) {
                this.dsn = e, this.dsnObject = new o.Dsn(e);
            }
            return e.prototype.getDsn = function() {
                return this.dsnObject;
            }, e.prototype.getStoreEndpoint = function() {
                return "" + this.getBaseUrl() + this.getStoreEndpointPath();
            }, e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                var e = {
                    sentry_key: this.dsnObject.user,
                    sentry_version: "7"
                };
                return this.getStoreEndpoint() + "?" + r.urlEncode(e);
            }, e.prototype.getBaseUrl = function() {
                var e = this.dsnObject, t = e.protocol ? e.protocol + ":" : "", n = e.port ? ":" + e.port : "";
                return t + "//" + e.host + n;
            }, e.prototype.getStoreEndpointPath = function() {
                var e = this.dsnObject;
                return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/";
            }, e.prototype.getRequestHeaders = function(e, t) {
                var n = this.dsnObject, r = [ "Sentry sentry_version=7" ];
                return r.push("sentry_timestamp=" + new Date().getTime()), r.push("sentry_client=" + e + "/" + t), 
                r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                };
            }, e.prototype.getReportDialogEndpoint = function(e) {
                void 0 === e && (e = {});
                var t = this.dsnObject, n = this.getBaseUrl() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/", r = [];
                for (var o in r.push("dsn=" + t.toString()), e) if ("user" === o) {
                    if (!e.user) continue;
                    e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email));
                } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                return r.length ? n + "?" + r.join("&") : n;
            }, e;
        }();
        t.API = i;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = n(8), i = n(33), a = n(1), u = n(5), c = n(9), s = n(10), l = n(34), f = function() {
            function e(e, t) {
                this.backend = new e(t), this.options = t, t.dsn && (this.dsn = new s.Dsn(t.dsn)), 
                this.integrations = l.setupIntegrations(this.options);
            }
            return e.prototype.install = function() {
                if (!this.isEnabled()) return this.installed = !1;
                var e = this.getBackend();
                return !this.installed && e.install && e.install(), this.installed = !0;
            }, e.prototype.buffer = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(t) {
                        return [ 2, this.getBackend().getBuffer().add(e) ];
                    });
                });
            }, e.prototype.captureException = function(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var o = this;
                    return r.__generator(this, function(i) {
                        return [ 2, this.buffer(r.__awaiter(o, void 0, void 0, function() {
                            var o;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                  case 0:
                                    return [ 4, this.getBackend().eventFromException(e, t) ];

                                  case 1:
                                    return o = r.sent(), [ 2, this.captureEvent(o, t, n) ];
                                }
                            });
                        })) ];
                    });
                });
            }, e.prototype.captureMessage = function(e, t, n, o) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var i = this;
                    return r.__generator(this, function(a) {
                        return [ 2, this.buffer(r.__awaiter(i, void 0, void 0, function() {
                            var i;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                  case 0:
                                    return [ 4, this.getBackend().eventFromMessage(e, t, n) ];

                                  case 1:
                                    return i = r.sent(), [ 2, this.captureEvent(i, n, o) ];
                                }
                            });
                        })) ];
                    });
                });
            }, e.prototype.captureEvent = function(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var o = this;
                    return r.__generator(this, function(i) {
                        return [ 2, this.buffer(r.__awaiter(o, void 0, void 0, function() {
                            var o = this;
                            return r.__generator(this, function(i) {
                                return [ 2, this.processEvent(e, function(e) {
                                    return r.__awaiter(o, void 0, void 0, function() {
                                        return r.__generator(this, function(t) {
                                            return [ 2, this.getBackend().sendEvent(e) ];
                                        });
                                    });
                                }, t, n) ];
                            });
                        })) ];
                    });
                });
            }, e.prototype.addBreadcrumb = function(e, t, n) {
                var o = this.getOptions(), i = o.beforeBreadcrumb, a = o.maxBreadcrumbs, c = void 0 === a ? 30 : a;
                if (!(c <= 0)) {
                    var s = new Date().getTime() / 1e3, l = r.__assign({
                        timestamp: s
                    }, e), f = i ? u.consoleSandbox(function() {
                        return i(l, t);
                    }) : l;
                    null !== f && this.getBackend().storeBreadcrumb(f) && n && n.addBreadcrumb(f, Math.min(c, 100));
                }
            }, e.prototype.getDsn = function() {
                return this.dsn;
            }, e.prototype.getOptions = function() {
                return this.options;
            }, e.prototype.getBackend = function() {
                return this.backend;
            }, e.prototype.isEnabled = function() {
                return !1 !== this.getOptions().enabled && void 0 !== this.dsn;
            }, e.prototype.prepareEvent = function(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var o, i, a, s, l, f, p, d, h;
                    return r.__generator(this, function(v) {
                        return o = this.getOptions(), i = o.environment, a = o.maxBreadcrumbs, s = void 0 === a ? 30 : a, 
                        l = o.release, f = o.dist, void 0 === (p = r.__assign({}, e)).environment && void 0 !== i && (p.environment = i), 
                        void 0 === p.release && void 0 !== l && (p.release = l), void 0 === p.dist && void 0 !== f && (p.dist = f), 
                        p.message && (p.message = c.truncate(p.message, 250)), (d = p.exception && p.exception.values && p.exception.values[0]) && d.value && (d.value = c.truncate(d.value, 250)), 
                        (h = p.request) && h.url && (h.url = c.truncate(h.url, 250)), void 0 === p.event_id && (p.event_id = u.uuid4()), 
                        t ? [ 2, t.applyToEvent(p, n, Math.min(s, 100)) ] : [ 2, p ];
                    });
                });
            }, e.prototype.processEvent = function(e, t, n, u) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var c, s, l, f, p, d, h;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return this.isEnabled() ? (c = this.getOptions(), s = c.beforeSend, "number" == typeof (l = c.sampleRate) && Math.random() > l ? [ 2, {
                                status: o.Status.Skipped
                            } ] : [ 4, this.prepareEvent(e, u, n) ]) : [ 2, {
                                status: o.Status.Skipped
                            } ];

                          case 1:
                            if (null === (f = r.sent())) return [ 2, {
                                status: o.Status.Skipped
                            } ];
                            p = f, r.label = 2;

                          case 2:
                            return r.trys.push([ 2, 5, , 6 ]), n && n.data && !0 === n.data.__sentry__ || !s ? [ 3, 4 ] : [ 4, s(f, n) ];

                          case 3:
                            void 0 === (p = r.sent()) && a.logger.error("`beforeSend` method has to return `null` or a valid event"), 
                            r.label = 4;

                          case 4:
                            return [ 3, 6 ];

                          case 5:
                            return d = r.sent(), i.forget(this.captureException(d, {
                                data: {
                                    __sentry__: !0
                                },
                                originalException: d
                            })), [ 2, {
                                reason: "Event processing in beforeSend method threw an exception",
                                status: o.Status.Invalid
                            } ];

                          case 6:
                            return null === p ? [ 2, {
                                reason: "Event dropped due to being discarded by beforeSend method",
                                status: o.Status.Skipped
                            } ] : [ 4, t(p) ];

                          case 7:
                            return (h = r.sent()).event = p, h.status, o.Status.RateLimit, [ 2, h ];
                        }
                    });
                });
            }, e.prototype.close = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(t) {
                        return [ 2, this.getBackend().getBuffer().drain(e) ];
                    });
                });
            }, e.prototype.getIntegrations = function() {
                return this.integrations || {};
            }, e.prototype.getIntegration = function(e) {
                try {
                    return this.integrations[e.id] || null;
                } catch (t) {
                    return a.logger.warn("Cannot retrieve integration " + e.id + " from the current Client"), 
                    null;
                }
            }, e;
        }();
        t.BaseClient = f;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0);
        t.forget = function(e) {
            e.catch(function(e) {
                console.error(e);
            });
        }, t.filterAsync = function(e, t, n) {
            return r.__awaiter(this, void 0, void 0, function() {
                var o;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return [ 4, Promise.all(e.map(t, n)) ];

                      case 1:
                        return o = r.sent(), [ 2, e.filter(function(e, t) {
                            return o[t];
                        }) ];
                    }
                });
            });
        };
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            var t, n, r, o, u = e.defaultIntegrations && a.__spread(e.defaultIntegrations) || [], c = e.integrations, s = [];
            if (Array.isArray(c)) {
                var l = c.map(function(e) {
                    return e.name;
                }), f = [];
                try {
                    for (var p = a.__values(u), d = p.next(); !d.done; d = p.next()) {
                        var h = d.value;
                        -1 === l.indexOf(i(h)) && -1 === f.indexOf(i(h)) && (s.push(h), f.push(i(h)));
                    }
                } catch (e) {
                    t = {
                        error: e
                    };
                } finally {
                    try {
                        d && !d.done && (n = p.return) && n.call(p);
                    } finally {
                        if (t) throw t.error;
                    }
                }
                try {
                    for (var v = a.__values(c), g = v.next(); !g.done; g = v.next()) {
                        var y = g.value;
                        -1 === f.indexOf(i(y)) && (s.push(y), f.push(i(y)));
                    }
                } catch (e) {
                    r = {
                        error: e
                    };
                } finally {
                    try {
                        g && !g.done && (o = v.return) && o.call(v);
                    } finally {
                        if (r) throw r.error;
                    }
                }
            } else {
                if ("function" != typeof c) return a.__spread(u);
                s = c(u), s = Array.isArray(s) ? s : [ s ];
            }
            return s;
        }
        function o(e, n) {
            if (-1 === t.installedIntegrations.indexOf(i(e))) {
                try {
                    e.setupOnce();
                } catch (t) {
                    u.logger.warn("Integration " + i(e) + ': The install method is deprecated. Use "setupOnce".'), 
                    e.install && e.install(n);
                }
                t.installedIntegrations.push(i(e)), u.logger.log("Integration installed: " + i(e));
            }
        }
        function i(e) {
            return e.constructor.id || e.name;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(0), u = n(1);
        t.installedIntegrations = [], t.getIntegrationsToSetup = r, t.setupIntegration = o, 
        t.setupIntegrations = function(e) {
            var t = {};
            return r(e).forEach(function(n) {
                t[i(n)] = n, o(n, e);
            }), t;
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = n(1), i = n(11), a = n(14), u = function() {
            function e(e) {
                this.buffer = new a.RequestBuffer(), this.options = e, this.options.dsn || o.logger.warn("No DSN provided, backend will not do anything.");
            }
            return e.prototype.eventFromException = function(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        throw new i.SentryError("Backend has to implement `eventFromException` method");
                    });
                });
            }, e.prototype.eventFromMessage = function(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        throw new i.SentryError("Backend has to implement `eventFromMessage` method");
                    });
                });
            }, e.prototype.sendEvent = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        throw new i.SentryError("Backend has to implement `sendEvent` method");
                    });
                });
            }, e.prototype.storeBreadcrumb = function(e) {
                return !0;
            }, e.prototype.storeScope = function(e) {}, e.prototype.getBuffer = function() {
                return this.buffer;
            }, e;
        }();
        t.BaseBackend = u;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), function(e) {
            e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Debug = 2] = "Debug", e[e.Verbose = 3] = "Verbose";
        }(t.LogLevel || (t.LogLevel = {}));
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(6), o = n(1);
        t.initAndBind = function(e, t) {
            if (!0 === t.debug && o.logger.enable(), !r.getCurrentHub().getClient()) {
                var n = new e(t);
                r.getCurrentHub().bindClient(n), n.install();
            }
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(39);
        t.Dedupe = r.Dedupe;
        var o = n(40);
        t.FunctionToString = o.FunctionToString;
        var i = n(41);
        t.SDKInformation = i.SDKInformation;
        var a = n(42);
        t.InboundFilters = a.InboundFilters;
        var u = n(43);
        t.Debug = u.Debug;
        var c = n(44);
        t.RewriteFrames = c.RewriteFrames;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = n(6), i = n(1), a = n(5), u = function() {
            function e() {
                this.name = e.id;
            }
            return e.prototype.setupOnce = function() {
                var t = this;
                o.addGlobalEventProcessor(function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        var t;
                        return r.__generator(this, function(r) {
                            if (t = o.getCurrentHub().getIntegration(e)) {
                                try {
                                    if (t.shouldDropEvent(n, t.previousEvent)) return [ 2, null ];
                                } catch (e) {
                                    return [ 2, t.previousEvent = n ];
                                }
                                return [ 2, t.previousEvent = n ];
                            }
                            return [ 2, n ];
                        });
                    });
                });
            }, e.prototype.shouldDropEvent = function(e, t) {
                return !(!t || (this.isSameMessageEvent(e, t) ? (i.logger.warn("Event dropped due to being a duplicate of previous event (same message).\nEvent: " + a.getEventDescription(e)), 
                0) : !this.isSameExceptionEvent(e, t) || (i.logger.warn("Event dropped due to being a duplicate of previous event (same exception).\nEvent: " + a.getEventDescription(e)), 
                0)));
            }, e.prototype.isSameMessageEvent = function(e, t) {
                var n = e.message, r = t.message;
                return !(!n && !r || n && !r || !n && r || n !== r || !this.isSameFingerprint(e, t) || !this.isSameStacktrace(e, t));
            }, e.prototype.getFramesFromEvent = function(e) {
                var t = e.exception;
                if (!t) return e.stacktrace ? e.stacktrace.frames : void 0;
                try {
                    return t.values[0].stacktrace.frames;
                } catch (e) {
                    return;
                }
            }, e.prototype.isSameStacktrace = function(e, t) {
                var n = this.getFramesFromEvent(e), r = this.getFramesFromEvent(t);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (n = n, (r = r).length !== n.length) return !1;
                for (var o = 0; o < r.length; o++) {
                    var i = r[o], a = n[o];
                    if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1;
                }
                return !0;
            }, e.prototype.getExceptionFromEvent = function(e) {
                return e.exception && e.exception.values && e.exception.values[0];
            }, e.prototype.isSameExceptionEvent = function(e, t) {
                var n = this.getExceptionFromEvent(t), r = this.getExceptionFromEvent(e);
                return !!(n && r && n.type === r.type && n.value === r.value && this.isSameFingerprint(e, t) && this.isSameStacktrace(e, t));
            }, e.prototype.isSameFingerprint = function(e, t) {
                var n = e.fingerprint, r = t.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                n = n, r = r;
                try {
                    return !(n.join("") !== r.join(""));
                } catch (e) {
                    return !1;
                }
            }, e.id = "Dedupe", e;
        }();
        t.Dedupe = u;
    }, function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {
                this.name = e.id;
            }
            return e.prototype.setupOnce = function() {
                r = Function.prototype.toString, Function.prototype.toString = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this.__sentry__ ? this.__sentry_original__ : this;
                    return r.apply(n, e);
                };
            }, e.id = "FunctionToString", e;
        }();
        t.FunctionToString = o;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(1), o = function() {
            function e() {
                this.name = "SDKInformation";
            }
            return e.prototype.setupOnce = function() {
                r.logger.warn("SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core.");
            }, e;
        }();
        t.SDKInformation = o;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = n(6), i = n(2), a = n(1), u = n(5), c = n(9), s = [ /^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/ ], l = function() {
            function e(t) {
                void 0 === t && (t = {}), this.options = t, this.name = e.id;
            }
            return e.prototype.setupOnce = function() {
                var t = this;
                o.addGlobalEventProcessor(function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        var t, i, a, u, c;
                        return r.__generator(this, function(r) {
                            return (t = o.getCurrentHub()) && (i = t.getIntegration(e)) && (a = t.getClient(), 
                            u = a ? a.getOptions() : {}, c = i.mergeOptions(u), i.shouldDropEvent(n, c)) ? [ 2, null ] : [ 2, n ];
                        });
                    });
                });
            }, e.prototype.shouldDropEvent = function(e, t) {
                return this.isSentryError(e, t) ? (a.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + u.getEventDescription(e)), 
                !0) : this.isIgnoredError(e, t) ? (a.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + u.getEventDescription(e)), 
                !0) : this.isBlacklistedUrl(e, t) ? (a.logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + u.getEventDescription(e) + ".\nUrl: " + this.getEventFilterUrl(e)), 
                !0) : !this.isWhitelistedUrl(e, t) && (a.logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + u.getEventDescription(e) + ".\nUrl: " + this.getEventFilterUrl(e)), 
                !0);
            }, e.prototype.isSentryError = function(e, t) {
                if (void 0 === t && (t = {}), !t.ignoreInternal) return !1;
                try {
                    return "SentryError" === e.exception.values[0].type;
                } catch (e) {
                    return !1;
                }
            }, e.prototype.isIgnoredError = function(e, t) {
                var n = this;
                return void 0 === t && (t = {}), !(!t.ignoreErrors || !t.ignoreErrors.length) && this.getPossibleEventMessages(e).some(function(e) {
                    return t.ignoreErrors.some(function(t) {
                        return n.isMatchingPattern(e, t);
                    });
                });
            }, e.prototype.isBlacklistedUrl = function(e, t) {
                var n = this;
                if (void 0 === t && (t = {}), !t.blacklistUrls || !t.blacklistUrls.length) return !1;
                var r = this.getEventFilterUrl(e);
                return !!r && t.blacklistUrls.some(function(e) {
                    return n.isMatchingPattern(r, e);
                });
            }, e.prototype.isWhitelistedUrl = function(e, t) {
                var n = this;
                if (void 0 === t && (t = {}), !t.whitelistUrls || !t.whitelistUrls.length) return !0;
                var r = this.getEventFilterUrl(e);
                return !r || t.whitelistUrls.some(function(e) {
                    return n.isMatchingPattern(r, e);
                });
            }, e.prototype.mergeOptions = function(e) {
                return void 0 === e && (e = {}), {
                    blacklistUrls: r.__spread(this.options.blacklistUrls || [], e.blacklistUrls || []),
                    ignoreErrors: r.__spread(this.options.ignoreErrors || [], e.ignoreErrors || [], s),
                    ignoreInternal: void 0 === this.options.ignoreInternal || this.options.ignoreInternal,
                    whitelistUrls: r.__spread(this.options.whitelistUrls || [], e.whitelistUrls || [])
                };
            }, e.prototype.isMatchingPattern = function(e, t) {
                return i.isRegExp(t) ? t.test(e) : "string" == typeof t && c.includes(e, t);
            }, e.prototype.getPossibleEventMessages = function(e) {
                if (e.message) return [ e.message ];
                if (!e.exception) return [];
                try {
                    var t = e.exception.values[0], n = t.type, r = t.value;
                    return [ "" + r, n + ": " + r ];
                } catch (t) {
                    return a.logger.error("Cannot extract message for event " + u.getEventDescription(e)), 
                    [];
                }
            }, e.prototype.getEventFilterUrl = function(e) {
                try {
                    return e.stacktrace ? e.stacktrace.frames[0].filename : e.exception ? e.exception.values[0].stacktrace.frames[0].filename : null;
                } catch (t) {
                    return a.logger.error("Cannot extract url for event " + u.getEventDescription(e)), 
                    null;
                }
            }, e.id = "InboundFilters", e;
        }();
        t.InboundFilters = l;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = n(6), i = function() {
            function e(t) {
                this.name = e.id, this.options = r.__assign({
                    debugger: !1,
                    stringify: !1
                }, t);
            }
            return e.prototype.setupOnce = function() {
                var t = this;
                o.addGlobalEventProcessor(function(n, i) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        var t;
                        return r.__generator(this, function(r) {
                            return (t = o.getCurrentHub().getIntegration(e)) && (t.options.debugger, t.options.stringify ? (console.log(JSON.stringify(n, null, 2)), 
                            i && console.log(JSON.stringify(i, null, 2))) : (console.log(n), i && console.log(i))), 
                            [ 2, n ];
                        });
                    });
                });
            }, e.id = "Debug", e;
        }();
        t.Debug = i;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = n(6), i = n(45), a = function() {
            function e(t) {
                void 0 === t && (t = {});
                var n = this;
                this.name = e.id, this.iteratee = function(e) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var t;
                        return r.__generator(this, function(n) {
                            return e.filename && e.filename.startsWith("/") && (t = this.root ? i.relative(this.root, e.filename) : i.basename(e.filename), 
                            e.filename = "app:///" + t), [ 2, e ];
                        });
                    });
                }, t.root && (this.root = t.root), t.iteratee && (this.iteratee = t.iteratee);
            }
            return e.prototype.setupOnce = function() {
                var t = this;
                o.addGlobalEventProcessor(function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        var t;
                        return r.__generator(this, function(r) {
                            return (t = o.getCurrentHub().getIntegration(e)) ? [ 2, t.process(n) ] : [ 2, n ];
                        });
                    });
                });
            }, e.prototype.process = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, n, o, i, a, u, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            if (!(t = this.getFramesFromEvent(e))) return [ 3, 4 ];
                            for (o in n = [], t) n.push(o);
                            i = 0, r.label = 1;

                          case 1:
                            return i < n.length ? (a = n[i], u = t, c = a, [ 4, this.iteratee(t[a]) ]) : [ 3, 4 ];

                          case 2:
                            u[c] = r.sent(), r.label = 3;

                          case 3:
                            return i++, [ 3, 1 ];

                          case 4:
                            return [ 2, e ];
                        }
                    });
                });
            }, e.prototype.getFramesFromEvent = function(e) {
                var t = e.exception;
                if (!t) return e.stacktrace ? e.stacktrace.frames : void 0;
                try {
                    return t.values[0].stacktrace.frames;
                } catch (e) {
                    return;
                }
            }, e.id = "RewriteFrames", e;
        }();
        t.RewriteFrames = a;
    }, function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0, r = e.length - 1; r >= 0; r--) {
                var o = e[r];
                "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), 
                n--);
            }
            if (t) for (;n--; n) e.unshift("..");
            return e;
        }
        function o(e) {
            var t = s.exec(e);
            return t ? t.slice(1) : [];
        }
        function i() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            for (var n = "", o = !1, i = e.length - 1; i >= -1 && !o; i--) {
                var a = i >= 0 ? e[i] : "/";
                a && (n = a + "/" + n, o = "/" === a.charAt(0));
            }
            return (o ? "/" : "") + (n = r(n.split("/").filter(function(e) {
                return !!e;
            }), !o).join("/")) || ".";
        }
        function a(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++) ;
            for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) ;
            return t > n ? [] : e.slice(t, n - t + 1);
        }
        function u(e) {
            var t = c(e), n = "/" === e.substr(-1), o = r(e.split("/").filter(function(e) {
                return !!e;
            }), !t).join("/");
            return o || t || (o = "."), o && n && (o += "/"), (t ? "/" : "") + o;
        }
        function c(e) {
            return "/" === e.charAt(0);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        t.resolve = i, t.relative = function(e, t) {
            e = i(e).substr(1), t = i(t).substr(1);
            for (var n = a(e.split("/")), r = a(t.split("/")), o = Math.min(n.length, r.length), u = o, c = 0; c < o; c++) if (n[c] !== r[c]) {
                u = c;
                break;
            }
            var s = [];
            for (c = u; c < n.length; c++) s.push("..");
            return (s = s.concat(r.slice(u))).join("/");
        }, t.normalize = u, t.isAbsolute = c, t.join = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return u(e.join("/"));
        }, t.dirname = function(e) {
            var t = o(e), n = t[0], r = t[1];
            return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
        }, t.basename = function(e, t) {
            var n = o(e)[2];
            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), 
            n;
        };
    }, function(e, t, n) {
        "use strict";
        var r;
        !function(o) {
            function i(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
            }
            function a(e, t, n, r, o, a) {
                return i((u = i(i(t, e), i(r, a))) << (c = o) | u >>> 32 - c, n);
                var u, c;
            }
            function u(e, t, n, r, o, i, u) {
                return a(t & n | ~t & r, e, t, o, i, u);
            }
            function c(e, t, n, r, o, i, u) {
                return a(t & r | n & ~r, e, t, o, i, u);
            }
            function s(e, t, n, r, o, i, u) {
                return a(t ^ n ^ r, e, t, o, i, u);
            }
            function l(e, t, n, r, o, i, u) {
                return a(n ^ (t | ~r), e, t, o, i, u);
            }
            function f(e, t) {
                var n, r, o, a, f;
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                var p = 1732584193, d = -271733879, h = -1732584194, v = 271733878;
                for (n = 0; n < e.length; n += 16) r = p, o = d, a = h, f = v, p = u(p, d, h, v, e[n], 7, -680876936), 
                v = u(v, p, d, h, e[n + 1], 12, -389564586), h = u(h, v, p, d, e[n + 2], 17, 606105819), 
                d = u(d, h, v, p, e[n + 3], 22, -1044525330), p = u(p, d, h, v, e[n + 4], 7, -176418897), 
                v = u(v, p, d, h, e[n + 5], 12, 1200080426), h = u(h, v, p, d, e[n + 6], 17, -1473231341), 
                d = u(d, h, v, p, e[n + 7], 22, -45705983), p = u(p, d, h, v, e[n + 8], 7, 1770035416), 
                v = u(v, p, d, h, e[n + 9], 12, -1958414417), h = u(h, v, p, d, e[n + 10], 17, -42063), 
                d = u(d, h, v, p, e[n + 11], 22, -1990404162), p = u(p, d, h, v, e[n + 12], 7, 1804603682), 
                v = u(v, p, d, h, e[n + 13], 12, -40341101), h = u(h, v, p, d, e[n + 14], 17, -1502002290), 
                p = c(p, d = u(d, h, v, p, e[n + 15], 22, 1236535329), h, v, e[n + 1], 5, -165796510), 
                v = c(v, p, d, h, e[n + 6], 9, -1069501632), h = c(h, v, p, d, e[n + 11], 14, 643717713), 
                d = c(d, h, v, p, e[n], 20, -373897302), p = c(p, d, h, v, e[n + 5], 5, -701558691), 
                v = c(v, p, d, h, e[n + 10], 9, 38016083), h = c(h, v, p, d, e[n + 15], 14, -660478335), 
                d = c(d, h, v, p, e[n + 4], 20, -405537848), p = c(p, d, h, v, e[n + 9], 5, 568446438), 
                v = c(v, p, d, h, e[n + 14], 9, -1019803690), h = c(h, v, p, d, e[n + 3], 14, -187363961), 
                d = c(d, h, v, p, e[n + 8], 20, 1163531501), p = c(p, d, h, v, e[n + 13], 5, -1444681467), 
                v = c(v, p, d, h, e[n + 2], 9, -51403784), h = c(h, v, p, d, e[n + 7], 14, 1735328473), 
                p = s(p, d = c(d, h, v, p, e[n + 12], 20, -1926607734), h, v, e[n + 5], 4, -378558), 
                v = s(v, p, d, h, e[n + 8], 11, -2022574463), h = s(h, v, p, d, e[n + 11], 16, 1839030562), 
                d = s(d, h, v, p, e[n + 14], 23, -35309556), p = s(p, d, h, v, e[n + 1], 4, -1530992060), 
                v = s(v, p, d, h, e[n + 4], 11, 1272893353), h = s(h, v, p, d, e[n + 7], 16, -155497632), 
                d = s(d, h, v, p, e[n + 10], 23, -1094730640), p = s(p, d, h, v, e[n + 13], 4, 681279174), 
                v = s(v, p, d, h, e[n], 11, -358537222), h = s(h, v, p, d, e[n + 3], 16, -722521979), 
                d = s(d, h, v, p, e[n + 6], 23, 76029189), p = s(p, d, h, v, e[n + 9], 4, -640364487), 
                v = s(v, p, d, h, e[n + 12], 11, -421815835), h = s(h, v, p, d, e[n + 15], 16, 530742520), 
                p = l(p, d = s(d, h, v, p, e[n + 2], 23, -995338651), h, v, e[n], 6, -198630844), 
                v = l(v, p, d, h, e[n + 7], 10, 1126891415), h = l(h, v, p, d, e[n + 14], 15, -1416354905), 
                d = l(d, h, v, p, e[n + 5], 21, -57434055), p = l(p, d, h, v, e[n + 12], 6, 1700485571), 
                v = l(v, p, d, h, e[n + 3], 10, -1894986606), h = l(h, v, p, d, e[n + 10], 15, -1051523), 
                d = l(d, h, v, p, e[n + 1], 21, -2054922799), p = l(p, d, h, v, e[n + 8], 6, 1873313359), 
                v = l(v, p, d, h, e[n + 15], 10, -30611744), h = l(h, v, p, d, e[n + 6], 15, -1560198380), 
                d = l(d, h, v, p, e[n + 13], 21, 1309151649), p = l(p, d, h, v, e[n + 4], 6, -145523070), 
                v = l(v, p, d, h, e[n + 11], 10, -1120210379), h = l(h, v, p, d, e[n + 2], 15, 718787259), 
                d = l(d, h, v, p, e[n + 9], 21, -343485551), p = i(p, r), d = i(d, o), h = i(h, a), 
                v = i(v, f);
                return [ p, d, h, v ];
            }
            function p(e) {
                var t, n = "", r = 32 * e.length;
                for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n;
            }
            function d(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n;
            }
            function h(e) {
                var t, n, r = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
                return r;
            }
            function v(e) {
                return unescape(encodeURIComponent(e));
            }
            function g(e) {
                return function(e) {
                    return p(f(d(e), 8 * e.length));
                }(v(e));
            }
            function y(e, t) {
                return function(e, t) {
                    var n, r, o = d(e), i = [], a = [];
                    for (i[15] = a[15] = void 0, o.length > 16 && (o = f(o, 8 * e.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], 
                    a[n] = 1549556828 ^ o[n];
                    return r = f(i.concat(d(t)), 512 + 8 * t.length), p(f(a.concat(r), 640));
                }(v(e), v(t));
            }
            function b(e, t, n) {
                return t ? n ? y(t, e) : h(y(t, e)) : n ? g(e) : h(g(e));
            }
            void 0 === (r = function() {
                return b;
            }.call(t, n, t, e)) || (e.exports = r);
        }();
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function o(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a), c = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function i(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, i) {
                    function a(e) {
                        o(c, r, i, a, u, "next", e);
                    }
                    function u(e) {
                        o(c, r, i, a, u, "throw", e);
                    }
                    var c = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function u(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }(e) : t;
        }
        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RequestTransport = void 0;
        var l = n(8), f = n(18), p = n(4), d = function(e) {
            function t(e) {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), u(this, c(t).call(this, e));
            }
            var n, r;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t);
            }(t, f.BaseTransport), n = t, (r = [ {
                key: "processTask",
                value: function() {
                    var e = i(regeneratorRuntime.mark(function e(t) {
                        var n = this;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.abrupt("return", new Promise(function(e, r) {
                                    (0, p.getMinaContext)().request({
                                        url: n.url,
                                        method: "POST",
                                        data: t.event,
                                        success: function(t) {
                                            200 === t.statusCode ? e({
                                                status: l.Status.fromHttpCode(t.statusCode)
                                            }) : r(new Error("request fail with status code: ".concat(t.statusCode)));
                                        },
                                        fail: function(e) {
                                            r(e);
                                        }
                                    });
                                }));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "captureEvent",
                value: function() {
                    var e = i(regeneratorRuntime.mark(function e(t) {
                        var n = this;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.abrupt("return", new Promise(function(e) {
                                    t._resolve = e, n.addTask(t);
                                }));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }()
            } ]) && a(n.prototype, r), t;
        }();
        t.RequestTransport = d;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = function(e) {
            void 0 === e.defaultIntegrations && (e.defaultIntegrations = u), e.minaContext && (0, 
            i.setMinaContext)(e.minaContext), (0, r.initAndBind)(o.MinaClient, e);
            var t = (0, i.getSystemInfo)(), n = (0, i.getMinaContext)().getLaunchOptionsSync ? (0, 
            i.getMinaContext)().getLaunchOptionsSync() : null;
            (0, r.configureScope)(function(e) {
                t && i.MINA_SYSTEMINFO_TAGS.forEach(function(n) {
                    e.setTag("mina_".concat(n), t[n] || "unknow");
                }), n && (n.scene && e.setTag("scene", n.scene), e.setExtra("launch", n));
            }), n && (0, r.addBreadcrumb)({
                category: "app-life-cycle",
                data: {
                    name: "onAppLaunch",
                    args: n
                }
            });
        }, t.showReportDialog = function() {
            throw new r.SentryError("showReportDialog not support");
        }, t.lastEventId = function() {
            return (0, r.getCurrentHub)().lastEventId();
        }, t.defaultIntegrations = void 0;
        var r = n(3), o = n(19), i = n(4), a = n(21), u = [ new r.Integrations.Dedupe(), new r.Integrations.InboundFilters(), new r.Integrations.FunctionToString(), new a.GlobalHandlers(), new a.Breadcrumbs(), new a.LogManager() ];
        t.defaultIntegrations = u;
    }, function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function i(e) {
            try {
                var t = (0, p.deserialize)(e);
                g.addBreadcrumb({
                    category: "sentry",
                    event_id: t.event_id,
                    level: t.level || c.Severity.fromString("error"),
                    message: (0, f.getEventDescription)(t)
                }, {
                    event: t
                });
            } catch (e) {
                l.logger.error("Error while adding sentry type breadcrumb");
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Breadcrumbs = void 0;
        var a = n(3), u = n(4), c = n(8), s = n(2), l = n(1), f = n(5), p = n(7), d = n(9), h = n(22), v = (0, 
        f.getGlobalObject)(), g = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.name = e.id, this.ctx = (0, u.getMinaContext)(), this.options = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}, o = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }))), o.forEach(function(t) {
                            r(e, t, n[t]);
                        });
                    }
                    return e;
                }({
                    console: !0,
                    request: !0,
                    navigation: !0,
                    api: !0,
                    lifecycle: !0
                }, t);
            }
            var t, n, l;
            return t = e, l = [ {
                key: "addBreadcrumb",
                value: function(t, n) {
                    (0, a.getCurrentHub)().getIntegration(e) && (0, a.getCurrentHub)().addBreadcrumb(t, n);
                }
            } ], (n = [ {
                key: "instrumentConsole",
                value: function() {
                    if ("console" in v) {
                        var t = [ "info", "warn", "error", "log" ], n = this.options.console ? t : [];
                        (0, s.isArray)(this.options.console) && (n = this.options.console), t.forEach(function(t) {
                            t in v.console && (0, h.fill)(v.console, t, function(r) {
                                return function() {
                                    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                                    if (n.indexOf(t) > -1) {
                                        var f = {
                                            category: "console",
                                            data: {
                                                extra: {
                                                    arguments: (0, p.serializeObject)(i, 2)
                                                },
                                                logger: t
                                            },
                                            level: c.Severity.fromString(t),
                                            message: (0, d.safeJoin)(i, " ")
                                        };
                                        "assert" === t && !1 === i[0] && (f.message = "Assertion failed: ".concat((0, d.safeJoin)(i.slice(1), " ") || "console.assert"), 
                                        f.data.extra.arguments = (0, p.serializeObject)(i.slice(1), 2)), e.addBreadcrumb(f, {
                                            input: i,
                                            level: t
                                        });
                                    }
                                    if ("warn" !== t && "error" !== t || (0, u.isWxUnhandledPromiseError)(i[0]) && (0, 
                                    s.isError)(i[1]) && (0, a.captureException)(i[1]), r) try {
                                        Function.prototype.apply.call(r, v.console, i);
                                    } catch (e) {
                                        r.apply(v.console, i);
                                    }
                                };
                            });
                        });
                    }
                }
            }, {
                key: "instrumentMinaApi",
                value: function() {
                    var t = this, n = (0, u.getMinaApiList)();
                    (0, s.isArray)(this.options.api) ? n = this.options.api : this.options.api || (n = []), 
                    n.forEach(function(n) {
                        t.ctx[n] && "function" == typeof t.ctx[n] && (0, h.fill)(t.ctx, n, function(r) {
                            return function() {
                                for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                                return e.addBreadcrumb({
                                    category: "mina-api",
                                    data: {
                                        args: i,
                                        name: n
                                    }
                                }), r.apply(t.ctx, i);
                            };
                        });
                    });
                }
            }, {
                key: "instrumentRequest",
                value: function() {
                    (0, u.supportRequest)() && (0, h.fill)(this.ctx, "request", function(t) {
                        return function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.method ? n.method.toUpperCase() : "GET", o = n.url, u = (0, 
                            a.getCurrentHub)().getClient(), s = u && u.getDsn();
                            if (s) {
                                var l = new a.API(s).getStoreEndpoint();
                                if (l && (0, d.includes)(o, l)) return "POST" === r && n.data && i(n.data), t.call(this.ctx, n);
                            }
                            var f = {
                                method: r,
                                url: o,
                                header: n.header,
                                dataType: n.dataType
                            }, p = n.success, h = n.fail;
                            return n.success = function(t) {
                                p && p(t), f.status_code = t.statusCode, e.addBreadcrumb({
                                    category: "request",
                                    data: f,
                                    type: "http"
                                });
                            }, n.fail = function(t) {
                                h && h(t), e.addBreadcrumb({
                                    category: "request",
                                    data: f,
                                    level: c.Severity.Error,
                                    type: "http"
                                });
                            }, t.call(this.ctx, n);
                        };
                    });
                }
            }, {
                key: "instrumentNavigation",
                value: function() {
                    function t(e) {
                        return function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.url;
                            return !n && t.delta && (n = (0, u.getPrevPage)(t.delta)), n && o(n), e.call(this, t);
                        };
                    }
                    var n = this, r = (0, u.supportNavigations)();
                    if (r) {
                        var o = function(t) {
                            var n = (0, u.getCurrentPage)();
                            e.addBreadcrumb({
                                category: "navigation",
                                data: {
                                    from: n,
                                    to: t
                                }
                            });
                        };
                        r.forEach(function(e) {
                            (0, h.fill)(n.ctx, e, t);
                        });
                    }
                }
            }, {
                key: "instrumentLifeCycle",
                value: function() {
                    var t = this.ctx;
                    u.MINA_APP_LIFE_CYCLE.forEach(function(n) {
                        t[n] && t[n](function(t) {
                            e.addBreadcrumb({
                                category: "app-life-cycle",
                                data: {
                                    name: n,
                                    args: t
                                }
                            });
                        });
                    });
                }
            }, {
                key: "setupOnce",
                value: function() {
                    this.options.console && this.instrumentConsole(), this.options.navigation && this.instrumentNavigation(), 
                    this.options.request && this.instrumentRequest(), this.options.api && this.instrumentMinaApi(), 
                    this.options.lifecycle && this.instrumentLifeCycle();
                }
            } ]) && o(t.prototype, n), l && o(t, l), e;
        }();
        t.Breadcrumbs = g, g.id = "Breadcrumbs";
    }, function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function o(e, t) {
            if (!e.__sentry__) {
                var n = t(e);
                return n.__sentry__ = !0, n.__sentry_original__ = e, n.__sentry_wrapped__ = n, n;
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fill = o, t.TryCatch = void 0;
        var i = n(23), a = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.ignoreOnError = 0, this.name = "TryCatch";
            }
            var t, n;
            return t = e, (n = [ {
                key: "wrapTimeFunction",
                value: function(e) {
                    var t = this;
                    return function() {
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        var a = r[0];
                        return r[0] = (0, i.wrap)(a, {
                            mechanism: {
                                data: {
                                    function: e.name || "<anonymous>"
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), e.apply(t, r);
                    };
                }
            }, {
                key: "setupOnce",
                value: function() {
                    setTimeout = o(setTimeout, this.wrapTimeFunction.bind(this)), setInterval = o(setInterval, this.wrapTimeFunction.bind(this));
                }
            } ]) && r(t.prototype, n), e;
        }();
        t.TryCatch = a, a.id = "TryCatch";
    }, function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LogManager = void 0;
        var i = n(3), a = n(4), u = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.options = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}, o = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }))), o.forEach(function(t) {
                            r(e, t, n[t]);
                        });
                    }
                    return e;
                }({
                    level: 0
                }, t), this.name = "LogManager", this.logManager = null;
            }
            var t, n;
            return t = e, (n = [ {
                key: "instrumentLogManager",
                value: function() {
                    if (!this.logManager) {
                        var e = this.logManager = (0, a.getMinaContext)().getLogManager(this.options.level);
                        (0, i.addGlobalEventProcessor)(function(t, n) {
                            return e.log("sentry-event", {
                                event: t,
                                hint: n
                            }), t;
                        });
                    }
                }
            }, {
                key: "setupOnce",
                value: function() {
                    (0, a.supportLogManager)() && this.instrumentLogManager();
                }
            } ]) && o(t.prototype, n), e;
        }();
        t.LogManager = u, u.id = "LogManager";
    }, function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a), c = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    i(e, t, n[t]);
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GlobalHandlers = void 0;
        var u = n(3), c = n(1), s = n(16), l = n(12), f = n(23), p = n(4), d = n(22), h = n(2), v = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.name = "GlobalHandlers", this.ctx = (0, p.getMinaContext)(), this.options = o({
                    onerror: !0,
                    onpagenotfound: !0
                }, t);
            }
            var t, n;
            return t = e, (n = [ {
                key: "setupOnce",
                value: function() {
                    var t, n = (t = regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                (0, l.subscribe)(function(t, n, r) {
                                    if (!(0, f.shouldIgnoreOnError)()) {
                                        var o = (0, u.getCurrentHub)().getIntegration(e);
                                        o && (0, u.getCurrentHub)().captureEvent(o.eventFromGlobalHandler(t), {
                                            originalException: r,
                                            data: {
                                                stack: t
                                            }
                                        });
                                    }
                                }), this.options.onerror && this.ctx.onError && (c.logger.log("Global Error Handler attached: onError"), 
                                this.installGlobalErrorHandler()), this.options.onpagenotfound && this.ctx.onPageNotFound && (c.logger.log("Global Handler attached: onPageNotFound"), 
                                this.installGlobalPageNotFoundHandler());

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }), function() {
                        var e = this, n = arguments;
                        return new Promise(function(o, i) {
                            function a(e) {
                                r(c, o, i, a, u, "next", e);
                            }
                            function u(e) {
                                r(c, o, i, a, u, "throw", e);
                            }
                            var c = t.apply(e, n);
                            a(void 0);
                        });
                    });
                    return function() {
                        return n.apply(this, arguments);
                    };
                }()
            }, {
                key: "installGlobalErrorHandler",
                value: function() {
                    this.ctx.onError(function(e) {
                        (0, u.withScope)(function(t) {
                            var n, r = (0, d.globalErrorFingerprint)(e);
                            if (r && t.setFingerprint(r), (0, h.isError)(e)) n = e; else if (r) {
                                var o = r[0] || "UnknowAppError", i = r[1] || o;
                                (n = new Error(i)).name = o, n.stack = e;
                            } else (n = new Error("UnknowAppError")).stack = e;
                            (0, u.captureException)(n);
                        });
                    });
                }
            }, {
                key: "installGlobalPageNotFoundHandler",
                value: function() {
                    this.ctx.onPageNotFound(function(e) {
                        (0, u.captureEvent)({
                            message: "page not found",
                            extra: e
                        });
                    });
                }
            }, {
                key: "eventFromGlobalHandler",
                value: function(e) {
                    var t = (0, s.eventFromStacktrace)(e);
                    return o({}, t, {
                        exception: o({}, t.exception, {
                            mechanism: {
                                data: {
                                    mode: e.mode
                                },
                                handled: !1,
                                type: e.mechanism
                            }
                        })
                    });
                }
            } ]) && a(t.prototype, n), e;
        }();
        t.GlobalHandlers = v, v.id = "GlobalHandlers";
    } ]);
});