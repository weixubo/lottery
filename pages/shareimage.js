function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, s) {
                try {
                    var i = t[a](s), o = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
            }
            return n("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _promiseFix = require("./../utils/promiseFix.js"), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _game = require("./../services/game.js"), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.find/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), saveImageLock = !1, Index = function(e) {
    function t() {
        var e, r, n, a, s = this;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "生成分享图",
            disableScroll: !0,
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, n.data = {
            navigationTitle: "生成分享图",
            generating: !1,
            shareImage: null,
            imageStyle: "",
            containerStyle: "",
            error: null,
            id: null,
            isPro: !1,
            config: [ {
                type: "default",
                thumbnail: "https://cdn.readhub.cn/mina/lottery/icn-p-1@3x.png"
            }, {
                type: "blue",
                thumbnail: "https://cdn.readhub.cn/mina/lottery/icn-p-2@3x.png"
            }, {
                type: "gray",
                thumbnail: "https://cdn.readhub.cn/mina/lottery/icn-p-3@3x.png"
            }, {
                type: "pink",
                thumbnail: "https://cdn.readhub.cn/mina/lottery/icn-p-4@3x.png"
            }, {
                type: "black",
                thumbnail: "https://cdn.readhub.cn/mina/lottery/icn-p-5@3x.png"
            }, {
                type: "brown",
                thumbnail: "https://cdn.readhub.cn/mina/lottery/icn-p-6@3x.png"
            } ],
            theme: "default",
            hasSafeArea: !1
        }, n.events = {}, n.methods = {
            retry: function() {
                this.changeTheme(this.theme);
            },
            chooseTheme: function(e) {
                var t = e.currentTarget.dataset.id;
                t && this.changeTheme(t);
            },
            previewImage: function() {
                this.shareImage && wx.previewImage({
                    current: this.shareImage,
                    urls: [ this.shareImage ]
                });
            },
            saveImage: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!n.shareImage) {
                                e.next = 22;
                                break;
                            }
                            if (!saveImageLock) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            if (saveImageLock = !0, (0, _analyse2.default)("share_savepic"), wx.saveImageToPhotosAlbum) {
                                e.next = 8;
                                break;
                            }
                            return wx.previewImage({
                                urls: [ n.shareImage ],
                                success: function() {},
                                fail: function() {},
                                complete: function() {
                                    saveImageLock = !1;
                                }
                            }), e.abrupt("return");

                          case 8:
                            return e.prev = 8, e.next = 11, (0, _promiseFix.saveImageToPhotosAlbum)(n.shareImage);

                          case 11:
                            _wepy2.default.showToast({
                                title: "保存成功",
                                icon: "success"
                            }), saveImageLock = !1, e.next = 22;
                            break;

                          case 15:
                            return e.prev = 15, e.t0 = e.catch(8), saveImageLock = !1, e.next = 20, (0, _promiseFix.getSetting)();

                          case 20:
                            t = e.sent, t.authSetting["scope.writePhotosAlbum"] ? _wepy2.default.showModal({
                                title: "提示",
                                content: "图片保存失败",
                                showCancel: !1
                            }) : wx.showModal({
                                title: "提示",
                                content: "需要获取相册访问权限，请到小程序设置页面打开授权",
                                success: function(e) {
                                    e.confirm && wx.openSetting({
                                        success: function(e) {}
                                    });
                                }
                            });

                          case 22:
                          case "end":
                            return e.stop();
                        }
                    }, e, s, [ [ 8, 15 ] ]);
                }));
                return e;
            }()
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "changeTheme",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, !this.generating) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return", wx.showToast({
                            title: "图片生成中，请稍后再试",
                            icon: "none"
                        }));

                      case 3:
                        if (!this.temp[t]) {
                            e.next = 11;
                            break;
                        }
                        return console.log("theme " + t + " image exist", this.temp[t]), this.generating = !1, 
                        this.theme = t, this.shareImage = this.temp[t], this.error = null, this.$apply(), 
                        e.abrupt("return");

                      case 11:
                        if (this.shareImage = "", this.error = null, this.theme = t, this.generating = !0, 
                        this.$apply(), r = void 0, "default" === t ? r = this.shareImages.url : (n = (0, 
                        _lodash4.default)((0, _lodash2.default)(this, "shareImages.more_types", []), function(e) {
                            return e.type === t;
                        }), console.log("theme config", n), r = (0, _lodash2.default)(n, "url", "")), r) {
                            e.next = 22;
                            break;
                        }
                        return e.next = 21, this.getShareImageUrl(this.id, t);

                      case 21:
                        r = e.sent;

                      case 22:
                        if (r = r.replace(/^http:/, "https:"), console.log(r, t), r) {
                            e.next = 26;
                            break;
                        }
                        throw new Error("没有分享图");

                      case 26:
                        return console.log("remote", r), e.next = 29, this.downLoadImage(r);

                      case 29:
                        this.shareImage = e.sent, this.temp[this.theme] = this.shareImage, console.log("local", this.shareImage), 
                        e.next = 39;
                        break;

                      case 34:
                        e.prev = 34, e.t0 = e.catch(0), console.error(e.t0), this.error = !0, wx.showToast({
                            title: e.t0.message,
                            icon: "none"
                        });

                      case 39:
                        return e.prev = 39, this.generating = !1, this.$apply(), e.finish(39);

                      case 43:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 34, 39, 43 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            this.temp = {}, this.id = null, this.shareImage = null, this.error = null, saveImageLock = !1, 
            this.shareImages = {};
        }
    }, {
        key: "downLoadImage",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("download image: " + t), e.next = 3, (0, _promiseFix.downLoadFile)(t);

                      case 3:
                        if (r = e.sent, console.log(r), r.tempFilePath && 404 !== r.statusCode) {
                            e.next = 7;
                            break;
                        }
                        throw new Error("图片下载失败");

                      case 7:
                        return console.log("download image success: " + r.tempFilePath), e.abrupt("return", r.tempFilePath);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getShareImageUrl",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("gen share image url: ", t, r), e.next = 3, (0, _game.shareImage)(t, r);

                      case 3:
                        return n = e.sent, e.abrupt("return", (0, _lodash2.default)(n, "data.url", ""));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("shareimage");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, a, s, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$parent.appInit();

                      case 2:
                        return this.temp = {}, this.isPro = "pro" === t.gt, this.shareImages = _GameManager2.default.temp("shareImage") || {}, 
                        _GameManager2.default.temp("shareImage", ""), saveImageLock = !1, r = (0, _lodash2.default)(this, "$parent.globalData.appConfig.share_image_types", null), 
                        r && (this.config = r), e.next = 11, this.$parent.systemInfo();

                      case 11:
                        return n = e.sent, this.windowWidth = n.screenWidth, this.windowHeight = n.screenHeight, 
                        a = this.windowHeight - (n.statusBarHeight || 20) - 64 - 44, this.isPro && (a -= 76), 
                        e.next = 18, this.$parent.hasSafeArea();

                      case 18:
                        if (this.hasSafeArea = e.sent, this.hasSafeArea && (a -= 20), s = a - 40, this.imageStyle = "height: " + s + "px;", 
                        this.containerStyle = "height: " + a + "px;", this.retry = !1, i = t.id) {
                            e.next = 27;
                            break;
                        }
                        return e.abrupt("return", _wepy2.default.switchTab({
                            url: "index"
                        }));

                      case 27:
                        this.id = i, this.changeTheme(this.theme);

                      case 29:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/shareimage"));