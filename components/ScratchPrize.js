function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function i(r, a) {
                try {
                    var s = e[r](a), o = s.value;
                } catch (t) {
                    return void n(t);
                }
                if (!s.done) return Promise.resolve(o).then(function(t) {
                    i("next", t);
                }, function(t) {
                    i("throw", t);
                });
                t(o);
            }
            return i("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _game = require("./../services/game.js"), _tools = require("./../utils/tools.js"), ScratchPrize = function(t) {
    function e() {
        var t, n, i, r;
        _classCallCheck(this, e);
        for (var a = arguments.length, s = Array(a), o = 0; o < a; o++) s[o] = arguments[o];
        return n = i = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(s))), 
        i.data = {
            height: 81,
            disableScroll: !1,
            scratchGuideStyle: "",
            guideShow: !1,
            arrowStyle: ""
        }, i.computed = {
            resultType: function() {
                if (console.log("stage", this.stage), this.game) {
                    if (this.prize) return 1;
                    return !!(0, _lodash2.default)(this, "game.lucky_users.meta.my_prize_id", null) ? 1 : this.game.is_participator ? 2 : 2 === this.game.state ? 3 : this.scratchError ? 4 : 0;
                }
                return 0;
            },
            winnerPrize: function() {
                return this.prize || (0, _lodash2.default)(this, "game.myPrize", null);
            },
            userContact: function() {
                return !(!this.game || !this.game.gameResult) && !!(0, _tools.getUserContact)(this.game.gameResult);
            }
        }, i.events = {
            ScratchReset: function() {
                i.changeToStage0();
            }
        }, i.props = {
            width: {
                type: Number
            },
            stage: {
                type: Number,
                default: 0
            },
            game: {
                type: Object,
                default: null,
                twoWay: !0
            }
        }, i.methods = {
            copyValue: function() {
                (0, _analyse2.default)("detail_copy_prize", {
                    id: this.game.id
                }), wx.setClipboardData && (wx.setClipboardData({
                    data: this.winnerPrize.info.content[0].value,
                    success: function() {}
                }), _wepy2.default.showToast({
                    title: "已复制",
                    icon: "success",
                    duration: 500
                }));
            },
            goToGenerage: function() {
                (0, _analyse2.default)("detail_showoff"), _GameManager2.default.temp("generate_image_game", this.game), 
                _wepy2.default.navigateTo({
                    url: "/pages/generateimage?type=winner_share_image&id=" + this.game.id
                });
            },
            goToPrize: function(t) {
                (0, _analyse2.default)("detail_fillin_info", {
                    id: this.game.id
                }), _GameManager2.default.temp("game", this.game), _GameManager2.default.temp("gameResult", this.game.gameResult), 
                _wepy2.default.navigateTo({
                    url: "/pages/prize?id=" + this.game.id
                });
            },
            touchstart: function(t) {
                if (console.log("touch start"), this.game.condition_error) return wx.showToast({
                    title: this.condition_error,
                    icon: "none"
                });
                if (this.initContext(), 1 !== this.stage && this.changeToStage1(), 1 === this.stage && this.scratch(), 
                t.changedTouches) {
                    this.disableScroll = !0, this.$apply();
                    var e = t.changedTouches[t.changedTouches.length - 1];
                    this.startX = e.x, this.startY = e.y, this.context.setFillStyle("#f8f6f0"), this.context.beginPath(), 
                    this.context.arc(e.x, e.y, 17.5, 0, 2 * Math.PI, !0), this.context.closePath(), 
                    this.context.fill(), this.context.draw(!0);
                }
            },
            touchmove: function(t) {
                if (!this.game.condition_error && t.changedTouches) {
                    var e = t.changedTouches[t.changedTouches.length - 1];
                    this.context.beginPath(), this.context.moveTo(this.startX, this.startY), this.startX = e.x, 
                    this.startY = e.y, this.context.lineTo(e.x, e.y), this.context.closePath(), this.context.stroke(), 
                    this.context.draw(!0);
                }
            },
            touchend: function(t) {
                if (this.disableScroll = !1, this.game.condition_error) return void this.$apply();
                this.$apply(), this.check();
            },
            touchcancel: function() {
                if (this.disableScroll = !1, this.game.condition_error) return void this.$apply();
                this.$apply(), this.check();
            }
        }, r = n, _possibleConstructorReturn(i, r);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "scratch",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!this.scratched && !this.scratching) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return console.log("scratch"), this.scratching = !0, t.prev = 4, t.next = 7, (0, 
                        _game.scratch)(this.game.id);

                      case 7:
                        e = t.sent, 1 === e.data.result ? (this.prize = e.data.prize, this.$root.refreshPage && this.$root.refreshPage()) : (this.game.is_participator = !0, 
                        console.log("show guide"), this.guideShow = !0, setTimeout(function() {
                            n.guideShow = !1, n.$apply();
                        }, 6e3)), t.next = 15;
                        break;

                      case 11:
                        t.prev = 11, t.t0 = t.catch(4), this.scratchError = !0, console.error(t.t0);

                      case 15:
                        return t.prev = 15, this.scratched = !0, this.scratching = !1, t.finish(15);

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 4, 11, 15, 19 ] ]);
            }));
            return t;
        }()
    }, {
        key: "changeToStage0",
        value: function() {
            this.stage = 0, this.$apply();
        }
    }, {
        key: "changeToStage1",
        value: function() {
            var t = this;
            this.guideShow = !1, this.scratched = !1, this.scratching = !1, this.scratchError = !1, 
            this.disableScroll = !1, this.prize = null, 1 !== this.stage && (this.stage = 1, 
            console.log("changeToStage1"), this.$apply(), setTimeout(function() {
                t.initContext(!0), t.context.clearRect(0, 0, t.width, t.height), t.context.globalCompositeOperation = "", 
                t.context.setFillStyle("#bbbcbf"), t.context.fillRect(0, 0, t.width, t.height), 
                t.context.drawImage("https://cdn.readhub.cn/mina/lottery/icn-guagua@3x.png", (t.width - 124) / 2, 33, 124, 16), 
                t.context.draw(), t.context.globalCompositeOperation = "destination-out", console.log("draw done");
            }, 0));
        }
    }, {
        key: "changeToStage2",
        value: function() {
            console.log("change to stage 2"), this.disableScroll = !1, 1 === this.stage && (this.stage = 2, 
            this.$apply());
        }
    }, {
        key: "check",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n, i, r, a, s, o, c = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (1 === this.stage) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return console.log("check"), t.next = 5, this.$root.$parent.isAndroid();

                      case 5:
                        return e = t.sent, n = 20, e && (n = 5), t.next = 10, new Promise(function(t, e) {
                            wx.canvasGetImageData({
                                canvasId: "scratchCanvas",
                                x: 0,
                                y: 0,
                                width: c.width,
                                height: c.height,
                                success: function(e) {
                                    t(e.data);
                                },
                                fail: function(t) {
                                    e(t);
                                }
                            });
                        });

                      case 10:
                        for (i = t.sent, r = i.length, a = 0, s = 0; s < r - 3; s += 4) 0 === i[s] && 0 === i[s + 1] && 0 === i[s + 2] && 0 === i[s + 3] && a++;
                        o = 100 * a / (this.width * this.height), (o > n || e) && (console.log("match condition"), 
                        console.log(this.stage), 2 !== this.stage && this.changeToStage2());

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "initContext",
        value: function(t) {
            !t && this.context || (this.context = wx.createCanvasContext("scratchCanvas"), this.context.setLineWidth(35), 
            this.context.setLineJoin("round"), this.context.setStrokeStyle("#f8f6f0"), this.context.globalCompositeOperation = "");
        }
    }, {
        key: "onLoad",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.guideShow = !1, this.scratched = !1, this.scratching = !1, this.scratchError = !1, 
                        this.prize = null, this.initContext(), t.next = 8, this.$root.$parent.isIphoneX();

                      case 8:
                        return e = t.sent, t.next = 11, this.$root.$parent.systemInfo();

                      case 11:
                        n = t.sent, e && (this.scratchGuideStyle = "bottom: 88px;"), this.arrowStyle = "left: " + (n.windowWidth / 4 - 10) + "px", 
                        this.$apply();

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    } ]), e;
}(_wepy2.default.component);

exports.default = ScratchPrize;