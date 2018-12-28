function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function s(a, i) {
                try {
                    var n = t[a](i), o = n.value;
                } catch (e) {
                    return void r(e);
                }
                if (!n.done) return Promise.resolve(o).then(function(e) {
                    s("next", e);
                }, function(e) {
                    s("throw", e);
                });
                e(o);
            }
            return s("next");
        });
    };
}

function processImage(e) {
    var t = rImage.exec(e);
    return e && t ? e.slice(0, e.length - t[2].length) : rMinaLottery.test(e) ? e.slice(0, -13) : rSquare.test(e) ? e.slice(0, -7) : e;
}

function addListener(e, t) {
    e && (temp.listeners[e] = t), temp.timer || (temp.timer = setInterval(function() {
        try {
            Object.keys(temp.listeners).forEach(function(e) {
                temp.listeners[e]();
            });
        } catch (e) {}
    }, 200));
}

function removeListener(e) {
    e && delete temp.listeners[e], 0 === Object.keys(temp.listeners).length && temp.timer && (clearInterval(temp.timer), 
    temp.timer = null);
}

var _lodash = require("./../../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), rImage = /\.(png|jpg|jpeg|gif)(!.+)$/, rMinaLottery = /!mina\.lottery$/, rSquare = /!square$/, temp = {
    listeners: {},
    timer: null
};

Component({
    data: {
        supportObserver: !!wx.createIntersectionObserver,
        showed: !1,
        errorImage: "",
        __id: ""
    },
    created: function() {
        if (!this.data.__id) {
            var e = Math.random().toString(36).substr(2, 9);
            this.data.__id = e, temp[e] = {
                showedImages: [],
                observers: {}
            };
        }
    },
    ready: function() {
        if (!this.data.__id) {
            var e = Math.random().toString(36).substr(2, 9);
            this.data.__id = e, temp[e] = {
                showedImages: [],
                observers: {}
            };
        }
        this.properties.disableLazy || this.addObserver();
    },
    detached: function() {
        this.clean();
    },
    properties: {
        src: {
            type: String,
            value: "",
            observer: function(e, t) {
                try {
                    if (t && temp[this.data.__id].showedImages) {
                        var r = temp[this.data.__id].showedImages.indexOf(t);
                        r > -1 && (temp[this.data.__id].showedImages.splice(r, 1), temp[this.data.__id].observers[t] && (temp[this.data.__id].observers[t].disconnect(), 
                        temp[this.data.__id].observers[t] = void 0));
                    }
                    this.refreshView();
                } catch (e) {
                    console.error(e);
                }
            }
        },
        styles: {
            type: String,
            value: ""
        },
        mode: {
            type: String,
            value: "scaleToFill"
        },
        disableLazy: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        clean: function() {
            try {
                if (this.data.__id && (removeListener(this.data.__id), temp[this.data.__id] && temp[this.data.__id].observers)) {
                    for (var e in temp[this.data.__id].observers) temp[this.data.__id].observers.hasOwnProperty(e) && temp[this.data.__id].observers[e].disconnect();
                    temp[this.data.__id].observers = {}, temp[this.data.__id] = void 0, delete temp[this.data.__id];
                }
            } catch (e) {
                console.error(e);
            }
        },
        onError: function(e) {
            this.data.errorImage || this.properties.src !== (0, _lodash2.default)(e, "target.dataset.img", "") || this.setData({
                errorImage: processImage(this.properties.src)
            });
        },
        onLoad: function() {},
        addImageObserver: function(e) {
            var t = this;
            if (e.src && temp[this.data.__id] && !(temp[this.data.__id].showedImages.indexOf(e.src) > -1)) {
                var r = e.src;
                temp[this.data.__id].observers[r] || -1 !== temp[this.data.__id].showedImages.indexOf(e.src) || (temp[this.data.__id].observers[r] = this.createIntersectionObserver(), 
                temp[this.data.__id].observers[r].relativeToViewport({
                    bottom: 0
                }).observe(".preview-image", function(e) {
                    try {
                        e.dataset && e.dataset.src && t.data.__id && temp[t.data.__id] && temp[t.data.__id].showedImages && -1 === temp[t.data.__id].showedImages.indexOf(e.dataset.src) && (temp[t.data.__id].showedImages = temp[t.data.__id].showedImages.concat(e.dataset.src), 
                        temp[t.data.__id].observers[r].disconnect(), delete temp[t.data.__id].observers[r], 
                        console.log("show image: " + e.dataset.src), t.refreshView());
                    } catch (e) {
                        console.error(e);
                    }
                }));
            }
        },
        addObserver: function() {
            var e = function() {
                var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var r, s = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (e.prev = 0, !(temp[t.data.__id].showedImages.indexOf(t.properties.src) > -1)) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            return e.next = 5, new Promise(function(e) {
                                t.createSelectorQuery().select(".preview-image").boundingClientRect(function() {
                                    var t = _asyncToGenerator(regeneratorRuntime.mark(function t(r) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                e(r);

                                              case 1:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t, s);
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments);
                                    };
                                }()).exec();
                            });

                          case 5:
                            r = e.sent, r && t.addImageObserver({
                                src: t.properties.src
                            }), e.next = 12;
                            break;

                          case 9:
                            e.prev = 9, e.t0 = e.catch(0), console.error(e.t0);

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, 9 ] ]);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), t = this;
            addListener(t.data.__id, e);
        },
        refreshView: function() {
            try {
                var e = this.properties.src, t = temp[this.data.__id].showedImages || [], r = !0;
                -1 === t.indexOf(e) && (r = !1), this.data.showed !== r && this.setData({
                    showed: r
                });
            } catch (e) {
                console.error(e);
            }
        }
    }
});