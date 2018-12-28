function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function r(o, i) {
                try {
                    var a = e[o](i), s = a.value;
                } catch (t) {
                    return void n(t);
                }
                if (!a.done) return Promise.resolve(s).then(function(t) {
                    r("next", t);
                }, function(t) {
                    r("throw", t);
                });
                t(s);
            }
            return r("next");
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

var _extends = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
}, _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _analyse = require("./../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _constants = require("./constants.js"), GamePreviewCard = function(t) {
    function e() {
        var t, n, r, o;
        _classCallCheck(this, e);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
        r.data = _extends({
            gpc1Style: "",
            startX: 0,
            startY: 0,
            imageStyle: "",
            isAndroid: !1,
            gameUserEndStyle: "",
            autoplay: !0,
            indicatorDots: !0,
            gpc3ImageStyle: ""
        }, _constants.PREVIEW_TYPE), r.computed = {
            games: function() {
                return this.items;
            },
            animatePrizeCountStart: function() {
                try {
                    if (this.items) {
                        return this.items[0].prizes[0].count;
                    }
                    return 0;
                } catch (t) {
                    return 0;
                }
            },
            animatePrizeCountEnd: function() {
                try {
                    if (this.items) {
                        var t = this.items[0].prizes[0];
                        return (t.increase_count || 0) + t.count;
                    }
                    return 0;
                } catch (t) {
                    return 0;
                }
            }
        }, r.props = {
            items: {
                type: Array,
                default: [],
                twoWay: !0
            },
            type: {
                type: String,
                default: 1
            }
        }, r.methods = {
            goToHomePage: function(t) {
                console.log(t), t.enable_user_page && wx.navigateTo({
                    url: "/pages/uncommonly/pages/homepage?id=" + t.id
                });
            },
            goToMinaApp: function(t) {
                (0, _analyse2.default)("detail_sponsormina", {
                    id: t.id
                }), "wx01bb1ef166cd3f4e" === t.sponsor.appid && wx.navigateTo({
                    url: t.sponsor.path
                });
            },
            hide: function(t) {
                this.$emit("GPC_CARD_HIDE", t);
            },
            click: function(t) {
                this.$emit("GPC_CARD_CLICK", t);
            },
            seeUserContact: function(t) {
                this.$emit("GPC_CARD_USER_CONTACT", t);
            },
            touchStart: function(t) {
                this.items.forEach(function(t, e) {
                    t.isTouchMove && (t.isTouchMove = !1);
                }), this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY, this.$apply();
            },
            touchMove: function(t) {
                var e = this, n = t.currentTarget.dataset.index, r = e.data.startX, o = e.data.startY, i = t.changedTouches[0].clientX, a = t.changedTouches[0].clientY, s = e.angle({
                    X: r,
                    Y: o
                }, {
                    X: i,
                    Y: a
                });
                this.items.forEach(function(t, e) {
                    if (t.isTouchMove = !1, Math.abs(s) > 10) return !1;
                    t.id === n && (t.isTouchMove = !(i > r));
                }), this.$apply();
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "angle",
        value: function(t, e) {
            var n = e.X - t.X, r = e.Y - t.Y;
            return 360 * Math.atan(r / n) / (2 * Math.PI);
        }
    }, {
        key: "onLoad",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, this.$root.$parent.systemInfo();

                      case 2:
                        return e = t.sent, this.imageStyle = "width: 100%; height: " + e.windowWidth / 2 + "px;", 
                        t.next = 6, this.$root.$parent.isAndroid();

                      case 6:
                        this.isAndroid = t.sent, this.gpc1Style = "flex-basis: " + (e.windowWidth - 24) + "px;", 
                        this.gameUserEndStyle = "left: " + (e.windowWidth - 104) / 2 + "px;", this.gpc3ImageStyle = "width: 100%; height: " + (e.windowWidth - 20) / 2 + "px;", 
                        this.$apply();

                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    } ]), e;
}(_wepy2.default.component);

exports.default = GamePreviewCard;