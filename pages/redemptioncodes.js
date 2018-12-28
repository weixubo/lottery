function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, i) {
                try {
                    var a = t[o](i), s = a.value;
                } catch (e) {
                    return void n(e);
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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _GameManager = require("./../libs/GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), _analyse = require("./../utils/analyse.js"), _game = require("./../services/game.js"), Index = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.config = {
            navigationBarTitleText: "添加兑换码",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, r.data = {
            navigationTitle: "添加兑换码",
            prize: null,
            view: "add",
            value: ""
        }, r.computed = {
            codes: function() {
                return this.value.split("\n").filter(function(e) {
                    return !!e.replace(/^\s+|\s+$/g, "");
                });
            }
        }, r.events = {}, r.methods = {
            onChange: function(e) {
                this.value = e.detail.value;
            },
            confirm: function() {
                return 0 === this.codes.length ? wx.showToast({
                    title: "请输入兑换码",
                    icon: "none"
                }) : this.codes.length > 50 ? wx.showToast({
                    title: "最多添加 50 个兑换码",
                    icon: "none"
                }) : void (this.view = "preview");
            },
            clear: function() {
                var e = this;
                wx.showModal({
                    title: "提示",
                    content: "确认清空？",
                    success: function(t) {
                        t.confirm && (e.value = "", e.$apply());
                    }
                });
            },
            done: function() {
                this.prize.virtual_prizes = this.codes, this.prize.count = this.codes.length, wx.navigateBack();
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {
            (0, _analyse.screenView)("redemptioncodes");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = _GameManager2.default.temp("optprize"), this.prize = n, r = n.virtual_prizes || [], 
                        !n.id) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 6, (0, _game.getVirtualPrizes)(n.id);

                      case 6:
                        o = e.sent, r = o.data;

                      case 8:
                        this.value = r.join("\n"), this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/redemptioncodes"));