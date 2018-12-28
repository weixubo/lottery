function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(s, i) {
                try {
                    var n = t[s](i), o = n.value;
                } catch (e) {
                    return void a(e);
                }
                if (!n.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
            }
            return r("next");
        });
    };
}

function processImage(e) {
    var t = rImage.exec(e);
    return e && t ? e.slice(0, e.length - t[2].length) : e;
}

var _analyse = require("./../../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _lodash = require("./../../npm/lodash.isequal/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../../npm/lodash.get/index.js"), _lodash4 = _interopRequireDefault(_lodash3), rImage = /\.(png|jpg|jpeg|gif)(!.+)$/, temp = {};

Component({
    data: {
        supportObserver: !!wx.createIntersectionObserver,
        views: [],
        __id: ""
    },
    created: function() {
        if (!this.data.__id) {
            var e = Math.random().toString(36).substr(2, 9);
            this.data.__id = e, temp[e] = {
                showedImages: [],
                observers: {},
                errorImages: [],
                timer: null
            };
        }
    },
    ready: function() {
        if (!this.data.__id) {
            var e = Math.random().toString(36).substr(2, 9);
            this.data.__id = e, temp[e] = {
                showedImages: [],
                observers: {},
                errorImages: [],
                timer: null
            };
        }
        this.properties.disableObserver || this.addObserver();
    },
    detached: function() {
        if (temp[this.data.__id]) {
            if (temp[this.data.__id].timer && (clearTimeout(temp[this.data.__id].timer), temp[this.data.__id].timer = null), 
            temp[this.data.__id].observers) {
                for (var e in temp[this.data.__id].observers) temp[this.data.__id].observers.hasOwnProperty(e) && temp[this.data.__id].observers[e].disconnect();
                temp[this.data.__id].observers = {};
            }
            temp[this.data.__id] = void 0, delete temp[this.data.__id];
        }
    },
    properties: {
        content: {
            type: String,
            value: "",
            observer: function(e) {
                this.refreshView(e);
            }
        },
        game: {
            type: Object,
            value: null
        },
        disableImagePreview: {
            type: Boolean,
            value: !1
        },
        lazyLoad: {
            type: Boolean,
            value: !0
        },
        disableObserver: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        onError: function(e) {
            if (temp[this.data.__id].errorImages && !(0, _lodash4.default)(e, "target.dataset.errorimg", "")) {
                var t = (0, _lodash4.default)(e, "target.dataset.img", "");
                t && (temp[this.data.__id].errorImages.push(t), this.refreshView(this.properties.content));
            }
        },
        preview: function(e) {
            var t = e.target.dataset.errorimg || e.target.dataset.img, a = this.data.views.reduce(function(e, t) {
                return "img" === t.tagName && t.src ? e.push(t.errorSrc || t.src) : "nc-images" === t.type && (e = e.concat(t.images.map(function(e) {
                    return e.errorSrc || e.src;
                }))), e;
            }, []);
            wx.previewImage({
                current: t,
                urls: a
            });
        },
        copyInfo: function(e) {
            var t = this, a = e.target.dataset.value;
            wx.setClipboardData && a && wx.setClipboardData({
                data: a,
                success: function(e) {
                    t.properties.game && (0, _analyse2.default)("detail_copy_area", {
                        id: t.properties.game.id
                    }), wx.showToast({
                        title: "已复制",
                        icon: "none"
                    });
                }
            });
        },
        mergeImages: function(e) {
            for (var t = [], a = [], r = 1, s = temp[this.data.__id].showedImages || [], i = 0, n = e.length; i < n; i++) {
                var o = e[i];
                "img" === o.tagName ? (-1 === s.indexOf(o.src) ? o.showed = !1 : o.showed = !0, 
                this.properties.lazyLoad || (o.showed = !0), temp[this.data.__id].errorImages && temp[this.data.__id].errorImages.indexOf(o.src) > -1 && (o.errorSrc = processImage(o.src)), 
                o.index = r++, a.push(o)) : (a.length > 0 && (t.push({
                    type: "nc-images",
                    images: a
                }), a = []), t.push(o));
            }
            return a.length > 0 && (t.push({
                type: "nc-images",
                images: a
            }), a = []), t;
        },
        getComponent: function(e) {
            try {
                var t = /<(\w+)\s+\w+.*?>/gi, a = t.exec(e), r = "unknow";
                a && (r = a[1]);
                for (var s = {
                    type: "unknow",
                    data: {},
                    tagName: r
                }, i = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gi, n = i.exec(e); n; ) {
                    var o = n[1], d = n[2];
                    if (0 === o.indexOf("data-")) s.data[o.slice(5)] = d; else if ("class" === o) {
                        for (var c = d.split(/\s/), h = c.length, m = 0; m < h; m++) if (0 === c[m].indexOf("nc-")) {
                            s.type = c[m];
                            break;
                        }
                    } else "type" !== o && "data" !== o && "tagName" !== o && (s[o] = d);
                    n = i.exec(e);
                }
                return s;
            } catch (t) {
                return console.error("unknow component: ", e), {
                    type: "unknow",
                    data: {}
                };
            }
        },
        addImageObserver: function(e) {
            var t = this;
            try {
                if (!this.properties.lazyLoad || !temp[this.data.__id] || temp[this.data.__id].showedImages.indexOf(e.src) > -1) return;
                var a = e.src + "-" + e.index;
                temp[this.data.__id].observers[a] || -1 !== temp[this.data.__id].showedImages.indexOf(e.src) || (temp[this.data.__id].observers[a] = this.createIntersectionObserver(), 
                temp[this.data.__id].observers[a].relativeToViewport({
                    bottom: 0
                }).observe(".preview-image-" + e.index, function(e) {
                    e.dataset && e.dataset.src && t.data.__id && temp[t.data.__id] && temp[t.data.__id].showedImages && -1 === temp[t.data.__id].showedImages.indexOf(e.dataset.src) && (temp[t.data.__id].showedImages = temp[t.data.__id].showedImages.concat(e.dataset.src), 
                    temp[t.data.__id].observers[a].disconnect(), delete temp[t.data.__id].observers[a], 
                    console.log("show image: " + e.dataset.src), t.refreshView(t.properties.content));
                }));
            } catch (e) {
                console.error(e);
            }
        },
        addObserver: function() {
            var e = this, t = function() {
                var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var a, r = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, new Promise(function(e) {
                                r.createSelectorQuery().select(".preview-image").boundingClientRect(function() {
                                    var t = _asyncToGenerator(regeneratorRuntime.mark(function t(a) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                e(a);

                                              case 1:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t, r);
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments);
                                    };
                                }()).exec();
                            });

                          case 2:
                            a = e.sent, a && this.data.views && this.data.views.forEach(function(e) {
                                "img" === e.tagName && e.src ? r.addImageObserver({
                                    src: e.src,
                                    index: e.index
                                }) : "nc-images" === e.type && e.images.forEach(function(e) {
                                    r.addImageObserver({
                                        src: e.src,
                                        index: e.index
                                    });
                                });
                            }), this.data.__id && temp[this.data.__id] && (temp[this.data.__id].timer = setTimeout(function() {
                                try {
                                    t.call(r);
                                } catch (e) {
                                    console.error(e);
                                }
                            }, 350));

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }();
            this.data.__id && temp[this.data.__id] && this.data.supportObserver && (temp[this.data.__id].timer = setTimeout(function() {
                try {
                    t.call(e);
                } catch (e) {
                    console.error(e);
                }
            }, 200));
        },
        refreshView: function(e) {
            try {
                if (e) {
                    var t = [], a = /<\s*section[^>]*>(.*?)<\s*\/\s*section>|<\s*img[^>]*\/>|<\s*img[^>]*>/gi;
                    this.properties.disableImagePreview && (a = /<\s*section[^>]*>(.*?)<\s*\/\s*section>/gi);
                    for (var r = 0, s = a.exec(e); s; ) s.index > r && t.push({
                        type: "html",
                        value: e.slice(r, s.index)
                    }), r = s.index + s[0].length, t.push(this.getComponent(s[0])), s = a.exec(e);
                    r < e.length && t.push({
                        type: "html",
                        value: e.slice(r)
                    });
                    var i = this.mergeImages(t);
                    (0, _lodash2.default)(i, this.data.views) || this.setData({
                        views: i
                    });
                } else (0, _lodash2.default)([], this.data.views) || this.setData({
                    views: []
                });
            } catch (e) {
                console.error(e);
            }
        }
    }
});