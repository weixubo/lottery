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
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _tools = require("./../utils/tools.js"), _currency = require("./../npm/currency.js/dist/currency.min.js"), _currency2 = _interopRequireDefault(_currency), _game = require("./../services/game.js"), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _promiseFix = require("./../utils/promiseFix.js"), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), saveImageLock = !1, Index = function(e) {
    function t() {
        var e, r, n, a, s = this;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "抽奖助手",
            disableScroll: !0,
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, n.data = {
            navigationTitle: "抽奖助手",
            generating: !1,
            isAndroid: !1,
            shareImage: null,
            imageStyle: "",
            containerStyle: "",
            error: null,
            isIphoneX: !1,
            type: "",
            downloadUrl: "",
            hasSafeArea: !1,
            isPro: !1
        }, n.events = {}, n.methods = {
            previewImage: function() {
                this.shareImage && wx.previewImage({
                    current: this.shareImage,
                    urls: [ this.shareImage ]
                });
            },
            retry: function() {
                this.generate(this.type);
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
                                e.next = 23;
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
                            }), saveImageLock = !1, e.next = 23;
                            break;

                          case 15:
                            return e.prev = 15, e.t0 = e.catch(8), console.error(e.t0), saveImageLock = !1, 
                            e.next = 21, (0, _promiseFix.getSetting)();

                          case 21:
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

                          case 23:
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
        key: "getUserPrize",
        value: function() {
            try {
                var e = this.user.user_id, t = this.game.lucky_users.data.filter(function(t) {
                    return t.id === e;
                })[0].prize_id;
                return this.game.prizes.data.filter(function(e) {
                    return e.id === t;
                })[0];
            } catch (e) {
                return console.error(e), null;
            }
        }
    }, {
        key: "winnerRate",
        value: function() {
            var e = 100 * this.game.lucky_users.meta.count / this.game.user_count;
            if ("ontime" === this.game.draw_type) {
                var t = 0;
                (0, _lodash2.default)(this.game, "prizes.data", []).forEach(function(e) {
                    t += e.count;
                });
                try {
                    e = 100 * t / this.game.min_user_count;
                } catch (e) {
                    console.error(e);
                }
            }
            return e < .01 ? e.toFixed(4) : e < 1 ? e.toFixed(2) : Math.floor(e);
        }
    }, {
        key: "suitableFontSize",
        value: function(e, t, r) {
            for (var n = r, a = (0, _tools.realCount)(e) * n; a > t; ) n -= 2, a = (0, _tools.realCount)(e) * n;
            return console.log("suitableFontSize: " + r + " " + n), n;
        }
    }, {
        key: "downLoadImage",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getStorage({
                            key: "SESSION_NEW_1"
                        });

                      case 3:
                        return r = e.sent, console.log("download image: " + t), e.next = 7, (0, _promiseFix.downLoadFile)(t, {
                            Authorization: "Bearer " + r.data.token,
                            version: _config2.default.VERSION
                        });

                      case 7:
                        if (n = e.sent, console.log(n), n.tempFilePath && 404 !== n.statusCode) {
                            e.next = 11;
                            break;
                        }
                        throw new Error("download image " + t + " fail");

                      case 11:
                        return console.log("download image success: " + n.tempFilePath), e.abrupt("return", n.tempFilePath);

                      case 15:
                        return e.prev = 15, e.t0 = e.catch(0), console.error(e.t0), e.abrupt("return", "");

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 15 ] ]);
            }));
            return e;
        }()
    }, {
        key: "generateGroupShareImage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, s, i, o, u, c, l = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("gen group share image"), t = wx.createCanvasContext("canvas"), 
                        e.next = 4, (0, _game.shareGroupPyqImage)(this.game.id);

                      case 4:
                        return r = e.sent, e.next = 7, this.downLoadImage(r.data.url);

                      case 7:
                        return n = e.sent, e.next = 10, _wepy2.default.getImageInfo({
                            src: n
                        });

                      case 10:
                        return a = e.sent, console.log("imageInfo", a), s = a.width, i = a.height, o = r.data.qrcodePosition, 
                        t.drawImage(n, 0, 0, s, i), u = this.user.avatar, e.prev = 17, e.next = 20, this.downLoadImage(this.user.avatar);

                      case 20:
                        u = e.sent, console.log("downloadAvatarImage: " + u), e.next = 27;
                        break;

                      case 24:
                        e.prev = 24, e.t0 = e.catch(17), console.error(e.t0);

                      case 27:
                        return t.drawImage(u, 78, 64, 120, 120), t.drawImage("/images/avatar_mask.png", 78, 64, 120, 120), 
                        t.setFillStyle("#ffe9bd"), t.setFontSize(42), t.fillText(this.user.nick_name, 238, 134), 
                        e.next = 34, this.downLoadImage("https://lucky.nocode.com/lottery_group/" + this.game.group.id + "/qrcode");

                      case 34:
                        return c = e.sent, t.drawImage(c, o.x, o.y, 280, 280), t.drawImage("/images/qrcode_mask.png", o.x, o.y, 280, 280), 
                        t.draw(), e.next = 40, new Promise(function(e) {
                            setTimeout(e, 1e3);
                        });

                      case 40:
                        return e.next = 42, new Promise(function(e, t) {
                            wx.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: s,
                                height: i,
                                destWidth: s,
                                destHeight: i,
                                canvasId: "canvas",
                                success: function(t) {
                                    console.log("gen winner share image success"), l.shareImage = t.tempFilePath, e();
                                },
                                fail: function(e) {
                                    console.log("gen winner share image fail"), console.error(e), t(e);
                                }
                            });
                        });

                      case 42:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 17, 24 ] ]);
            }));
            return e;
        }()
    }, {
        key: "generateWinnerShareImage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, s, i, o, u, c, l, g = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.prize) {
                            e.next = 4;
                            break;
                        }
                        return e.next = 3, _GameManager2.default.fetchGameResult(this.game.id);

                      case 3:
                        this.prize = e.sent.prize;

                      case 4:
                        return console.log("gen winner share image"), t = wx.createCanvasContext("canvas"), 
                        console.log("draw background"), t.drawImage("funny" === this.game.theme ? "/images/winner_share_bg_funny.png" : "/images/winner_share_bg.png", 0, 0, 960, 1360), 
                        console.log("draw avatar"), r = this.user.avatar, e.prev = 10, e.next = 13, this.downLoadImage(this.user.avatar);

                      case 13:
                        r = e.sent, console.log("downloadAvatarImage: " + r), e.next = 20;
                        break;

                      case 17:
                        e.prev = 17, e.t0 = e.catch(10), console.error(e.t0);

                      case 20:
                        if (t.drawImage(r, 406, 106, 146, 146), t.drawImage("funny" === this.game.theme ? "/images/avatar_mask_funny.png" : "/images/avatar_mask.png", 406, 106, 146, 146), 
                        console.log("draw user name"), t.setFillStyle("funny" === this.game.theme ? "#2e2708" : "#ffe9c2"), 
                        t.setFontSize(34), t.setTextAlign("center"), t.fillText(this.user.nick_name, 480, 300), 
                        console.log(this.prize), n = "我中奖了：" + this.prize.name, 2 === this.prize.type && (a = (0, 
                        _currency2.default)(this.prize.amount).multiply(.01).format(), n = "我中奖了：幸运金 " + a + " 元"), 
                        t.setFontSize(this.suitableFontSize(n, 760, 54)), t.fillText(n, 480, 425), console.log("draw prize image: " + this.prize.image), 
                        e.prev = 33, s = this.prize.image) {
                            e.next = 37;
                            break;
                        }
                        throw new Error("use default image");

                      case 37:
                        return -1 === s.indexOf("!mina.lottery") && (s += "!mina.lottery"), e.next = 40, 
                        this.downLoadImage(s);

                      case 40:
                        i = e.sent, t.drawImage(i, 129, 533, 700, 350), e.next = 47;
                        break;

                      case 44:
                        e.prev = 44, e.t1 = e.catch(33), t.drawImage("funny" === this.game.theme ? "/images/default-prize-pi@3x.png" : "/images/default-prize@3x.png", 129, 533, 700, 350);

                      case 47:
                        return t.setFillStyle("rgba(0, 0, 0, 0.5)"), t.setFontSize(34), t.setTextAlign("left"), 
                        o = "" + this.game.user_count, u = 0, o.length < 3 ? u = 4 * (3 - o.length) : o.length > 3 && (u = -4 * (o.length - 3)), 
                        c = 10, l = -10, console.log("diff: " + u), console.log("draw share icn"), t.drawImage("/images/share_icn_people.png", 163 + u + c, 926, 60, 36), 
                        console.log("draw join count"), t.fillText("参与人数 " + o, 214 + u + c, 959), console.log("draw share icn percent"), 
                        t.drawImage("/images/share_icn_percent.png", 514 + u + l, 926, 60, 36), console.log("draw winner rate"), 
                        t.fillText("中奖率 " + this.winnerRate() + "%", 566 + u + l, 959), t.draw(), e.next = 67, 
                        new Promise(function(e) {
                            setTimeout(e, 1e3);
                        });

                      case 67:
                        return console.log("draw end"), e.next = 70, new Promise(function(e, t) {
                            wx.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: 960,
                                height: 1360,
                                destWidth: 960,
                                destHeight: 1360,
                                canvasId: "canvas",
                                success: function(t) {
                                    console.log("gen winner share image success"), g.shareImage = t.tempFilePath, e();
                                },
                                fail: function(e) {
                                    console.log("gen winner share image fail"), console.error(e), t(e);
                                }
                            });
                        });

                      case 70:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 10, 17 ], [ 33, 44 ] ]);
            }));
            return e;
        }()
    }, {
        key: "generate",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
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
                        if (this.generating = !0, this.$apply(), "winner_share_image" !== t) {
                            e.next = 10;
                            break;
                        }
                        return e.next = 8, this.generateWinnerShareImage();

                      case 8:
                        e.next = 19;
                        break;

                      case 10:
                        if ("group_share_image" !== t) {
                            e.next = 15;
                            break;
                        }
                        return e.next = 13, this.generateGroupShareImage();

                      case 13:
                        e.next = 19;
                        break;

                      case 15:
                        if ("download_image" !== t) {
                            e.next = 19;
                            break;
                        }
                        return e.next = 18, this.downLoadImage("https://cdn.readhub.cn/minalottery/share-to-moment.png");

                      case 18:
                        this.shareImage = e.sent;

                      case 19:
                        this.generating = !1, this.error = null, this.$apply(), e.next = 30;
                        break;

                      case 24:
                        e.prev = 24, e.t0 = e.catch(0), console.error(e.t0), this.generating = !1, this.error = e.t0, 
                        this.$apply();

                      case 30:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 24 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            this.error = null, this.shareImage = null, saveImageLock = !1, this.generating = !1, 
            this.game = null, this.user = null;
        }
    }, {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("generateimage");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, a, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$parent.appInit();

                      case 2:
                        return console.log(t), saveImageLock = !1, this.shareImage = "", this.error = null, 
                        e.next = 8, this.$parent.systemInfo();

                      case 8:
                        return r = e.sent, this.windowWidth = r.screenWidth, this.windowHeight = r.screenHeight, 
                        n = this.windowHeight - (r.statusBarHeight || 20) - 64 - 44, this.isPro && (n -= 76), 
                        e.next = 15, this.$parent.hasSafeArea();

                      case 15:
                        if (this.hasSafeArea = e.sent, this.hasSafeArea && (n -= 20), a = n - 40, this.imageStyle = "height: " + a + "px;", 
                        this.containerStyle = "height: " + n + "px;", this.retry = !1, s = t.type, !t.id) {
                            e.next = 26;
                            break;
                        }
                        return e.next = 25, _GameManager2.default.fetchGame(t.id);

                      case 25:
                        this.game = e.sent;

                      case 26:
                        if (this.user = this.$parent.globalData.userInfo, this.prize = _GameManager2.default.temp("userPrize"), 
                        console.log(this.prize), console.log("gen " + s + " image"), console.log(this.game, this.user, this.prize), 
                        s && "download_image" === s) {
                            e.next = 35;
                            break;
                        }
                        if (s && this.game && this.user) {
                            e.next = 35;
                            break;
                        }
                        if (this.prize || "winner_share_image" !== s) {
                            e.next = 35;
                            break;
                        }
                        return e.abrupt("return", _wepy2.default.navigateBack());

                      case 35:
                        this.type = s, this.generate(s);

                      case 37:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/generateimage"));