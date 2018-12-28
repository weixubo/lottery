function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, i) {
            function r(n, o) {
                try {
                    var a = t[n](o), s = a.value;
                } catch (e) {
                    return void i(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
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
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, i, r) {
        return i && e(t.prototype, i), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _weCropper = require("./../libs/weCropper.js"), _weCropper2 = _interopRequireDefault(_weCropper), _analyse = require("./../utils/analyse.js"), _lodash = require("./../npm/lodash.set/index.js"), _lodash2 = _interopRequireDefault(_lodash), Crop = function(e) {
    function t() {
        var e, i, r, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
        return i = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.config = {
            navigationBarTitleText: "图片裁剪",
            navigationBarTextStyle: "white",
            backgroundColor: "#000",
            navigationBarBackgroundColor: "#000",
            enablePullDownRefresh: !1,
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, r.data = {
            backIcon: "https://cdn.readhub.cn/mina/lottery/icn_back_white@3x.png",
            navigationStyle: "color: #fff; background: #000;",
            navigationTitle: "图片裁剪",
            cropImage: "",
            containerStyle: "",
            viewportStyle: "",
            image: null,
            viewportHeight: 0,
            scale: 1,
            translateX: 0,
            translateY: 0,
            width: 0,
            height: 0,
            viewportWidth: 0,
            isIphoneX: !1
        }, r.methods = {
            touchStart: function(e) {
                this.cropReady && this.wecropper.touchStart && this.wecropper.touchStart(e);
            },
            touchMove: function(e) {
                this.cropReady && this.wecropper.touchMove && this.wecropper.touchMove(e);
            },
            touchEnd: function(e) {
                this.cropReady && this.wecropper.touchEnd && this.wecropper.touchEnd(e);
            },
            crop: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            wx.showLoading({
                                title: "裁剪中...",
                                mask: !0
                            }), this.wecropper.getCropperImage(function(e) {
                                e ? (wx.hideLoading(), (0, _lodash2.default)(t, "$parent.globalData.cropImage", e), 
                                wx.navigateBack()) : (wx.hideLoading(), console.log("获取图片地址失败，请稍后重试"));
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            chooseImage: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _wepy2.default.chooseImage({
                                count: 1
                            });

                          case 2:
                            if (t = e.sent, !t.tempFilePaths[0]) {
                                e.next = 8;
                                break;
                            }
                            return this.image = t.tempFilePaths[0], e.next = 7, this.updateImageInfo();

                          case 7:
                            this.$apply();

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, n = i, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getLen",
        value: function(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y);
        }
    }, {
        key: "_findIndexByTouchId",
        value: function(e, t) {
            for (var i = 0; i < 2; i++) if (t[i].identifier === e) return i;
            return -1;
        }
    }, {
        key: "updateImageInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wepy2.default.getImageInfo({
                            src: this.image
                        });

                      case 2:
                        t = e.sent, this.width = t.width, this.height = t.height, this.originScale = this.width / this.viewportWidth, 
                        this.imageInitHeight = this.height / this.originScale, this.imageInitWidth = this.viewportWidth, 
                        this.imageInitHeight < this.viewportHeight ? (this.scale = this.viewportHeight / this.imageInitHeight, 
                        this.minScale = this.scale) : (this.scale = 1, this.minScale = null), this.updateViewport();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "updateViewport",
        value: function() {
            var e = this.scale * this.imageInitWidth, t = this.scale * this.imageInitHeight;
            this.maxX = (e - this.viewportWidth) / 2, this.maxY = t - this.viewportHeight;
        }
    }, {
        key: "onUnload",
        value: function() {
            this.wecropper = null, this.cropReady = !1;
        }
    }, {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("crop");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var i, r, n, o = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$parent.systemInfo();

                      case 2:
                        return i = e.sent, e.next = 5, this.$parent.isIphoneX();

                      case 5:
                        if (this.isIphoneX = e.sent, this.containerStyle = "height: " + (i.windowHeight - 60) + "px;", 
                        this.viewportWidth = i.windowWidth - 12, this.viewportHeight = (i.windowWidth - 12) / 2, 
                        this.viewportStyle = "width: " + this.viewportWidth + "px;height: " + this.viewportHeight + "px;", 
                        r = !1, t.showViewRect && "show" === t.showViewRect && (r = !0), !t.image) {
                            e.next = 18;
                            break;
                        }
                        return n = decodeURIComponent(t.image), this.image = n, e.next = 17, this.updateImageInfo();

                      case 17:
                        this.translateY = -(this.scale * this.imageInitHeight - this.viewportHeight) / 2;

                      case 18:
                        this.wecropper = new _weCropper2.default({
                            id: "cropper",
                            src: this.image,
                            width: this.viewportWidth,
                            height: this.viewportWidth,
                            scale: 2.5,
                            zoom: 8,
                            enableViewRect: r,
                            cut: {
                                x: 0,
                                y: (this.viewportWidth - this.viewportHeight) / 2,
                                width: this.viewportWidth,
                                height: this.viewportHeight
                            }
                        }).on("ready", function(e) {
                            o.cropReady = !0, console.log(o.image), console.log("wecropper is ready for work!");
                        }), this.$apply();

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Crop, "pages/crop"));