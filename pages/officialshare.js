function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, o) {
                try {
                    var s = t[n](o), i = s.value;
                } catch (e) {
                    return void a(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
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
        for (var a = 0; a < t.length; a++) {
            var r = t[a];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _game = require("./../services/game.js"), _promiseFix = require("./../utils/promiseFix.js"), saveImageLock = !1, Index = function(e) {
    function t() {
        var e, a, r, n, o = this;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), u = 0; u < s; u++) i[u] = arguments[u];
        return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "嵌入到公众号文章",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, r.data = {
            navigationTitle: "嵌入到公众号文章",
            game: null,
            imageUrl: "",
            shareImage: "",
            imageStyle: ""
        }, r.events = {}, r.methods = {
            setClipboard: function() {
                (0, _analyse2.default)("detail_invite", {
                    source: (0, _lodash2.default)(this.game, "is_official", !1) ? "公共抽奖" : "私人抽奖",
                    type: "复制路径"
                }, "officialshare"), wx.setClipboardData && (wx.setClipboardData({
                    data: "pages/lottery/pages/game?id=" + this.game.id,
                    complete: function() {}
                }), setTimeout(function() {
                    _wepy2.default.showToast({
                        title: "已复制链接",
                        icon: "success",
                        duration: 500
                    });
                }, 500));
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
                            if (!r.shareImage) {
                                e.next = 24;
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
                                urls: [ r.shareImage ],
                                success: function() {},
                                fail: function() {},
                                complete: function() {
                                    saveImageLock = !1;
                                }
                            }), e.abrupt("return");

                          case 8:
                            return e.prev = 8, console.log("save image: " + r.shareImage), e.next = 12, (0, 
                            _promiseFix.saveImageToPhotosAlbum)(r.shareImage);

                          case 12:
                            _wepy2.default.showToast({
                                title: "保存成功",
                                icon: "success"
                            }), saveImageLock = !1, e.next = 24;
                            break;

                          case 16:
                            return e.prev = 16, e.t0 = e.catch(8), console.error(e.t0), saveImageLock = !1, 
                            e.next = 22, (0, _promiseFix.getSetting)();

                          case 22:
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

                          case 24:
                          case "end":
                            return e.stop();
                        }
                    }, e, o, [ [ 8, 16 ] ]);
                }));
                return e;
            }()
        }, n = a, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "downLoadImage",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("download image: " + t), e.next = 3, (0, _promiseFix.downLoadFile)(t);

                      case 3:
                        if (a = e.sent, console.log(a), a.tempFilePath && 404 !== a.statusCode) {
                            e.next = 7;
                            break;
                        }
                        throw new Error("download image " + t + " fail");

                      case 7:
                        return console.log("download image success: " + a.tempFilePath), e.abrupt("return", a.tempFilePath);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            this.game = null, this.imageUrl = "", this.shareImage = "";
        }
    }, {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("officialshare");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a, r, n, o = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return a = _GameManager2.default.temp("officialShareGame"), this.game = a, e.next = 4, 
                        this.$parent.systemInfo();

                      case 4:
                        if (r = e.sent, this.imageStyle = "width: " + (r.windowWidth - 30) + "px;", e.prev = 6, 
                        !this.game._shareImageUrl) {
                            e.next = 11;
                            break;
                        }
                        this.imageUrl = this.game._shareImageUrl, e.next = 15;
                        break;

                      case 11:
                        return e.next = 13, (0, _game.shareMessageImage)(this.game.id);

                      case 13:
                        n = e.sent, this.imageUrl = n.data.url;

                      case 15:
                        return e.next = 17, this.downLoadImage(this.imageUrl);

                      case 17:
                        this.shareImage = e.sent, this.$apply(), e.next = 24;
                        break;

                      case 21:
                        e.prev = 21, e.t0 = e.catch(6), this.timer = setTimeout(function() {
                            o.onLoad(t);
                        }, 1e3);

                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 6, 21 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/officialshare"));