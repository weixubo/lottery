function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var u = t[a](o), i = u.value;
                } catch (e) {
                    return void r(e);
                }
                if (!u.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
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
}(), _chou = require("./../services/chou.js"), _ListManager2 = require("./ListManager.js"), _ListManager3 = _interopRequireDefault(_ListManager2), _GameManager = require("./GameManager.js"), _GameManager2 = _interopRequireDefault(_GameManager), UserSquareManager = function(e) {
    function t(e, r) {
        _classCallCheck(this, t);
        var n = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
        return n.id = e, n;
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onRequest",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", (0, _chou.getUserPageGames)(this.id, t));

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "process",
        value: function(e) {
            e.data.forEach(function(e) {
                e.prevLottery = _GameManager2.default.previewGame(e, 9);
            });
        }
    }, {
        key: "getData",
        value: function() {
            try {
                return this.datas.data.forEach(function(e) {
                    e.prevLottery = _GameManager2.default.previewGame(e, 9);
                }), this.datas.data;
            } catch (e) {
                return [];
            }
        }
    }, {
        key: "getGroupedGames",
        value: function() {
            var e = this.getData(), t = [ {
                label: "待开奖",
                games: []
            }, {
                label: "已结束",
                games: []
            } ];
            return e.forEach(function(e) {
                e.hideEndTag = !0, 0 === e.state || 1 === e.state ? t[0].games.push(e) : t[1].games.push(e);
            }), t;
        }
    } ]), t;
}(_ListManager3.default);

exports.default = UserSquareManager;