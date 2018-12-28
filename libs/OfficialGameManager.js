function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(a, o) {
                try {
                    var i = r[a](o), u = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
            }
            return n("next");
        });
    };
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !r || "object" != typeof r && "function" != typeof r ? e : r;
}

function _inherits(e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    e.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(r, t, n) {
        return t && e(r.prototype, t), n && e(r, n), r;
    };
}(), _game = require("./../services/game.js"), GameService = _interopRequireWildcard(_game), _GameManager2 = require("./GameManager.js"), OfficialGameManager = function(e) {
    function r(e) {
        _classCallCheck(this, r);
        var t = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
        return t.tempData = {}, t.filter = "", t;
    }
    return _inherits(r, e), _createClass(r, [ {
        key: "onRequest",
        value: function() {
            function e(e) {
                return r.apply(this, arguments);
            }
            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", GameService.getOfficialGames(r, this.filter));

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
        value: function(e) {}
    }, {
        key: "getOfficialGames",
        value: function() {
            var e = this;
            return this.getData().map(function(r) {
                return e.previewGame(r, 3);
            });
        }
    } ]), r;
}(_GameManager2.GameManager), officialGameManager = new OfficialGameManager();

exports.default = officialGameManager;