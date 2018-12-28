function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void r(e);
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
}(), _feedback = require("./../services/feedback.js"), _ListManager2 = require("./ListManager.js"), _ListManager3 = _interopRequireDefault(_ListManager2), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), ComplaintManager = function(e) {
    function t(e, r) {
        _classCallCheck(this, t);
        var n = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
        return n.uid = e, n;
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
                        return e.abrupt("return", (0, _feedback.getComplaintList)(t));

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getGroupedResult",
        value: function() {
            var e = this, t = this.getData(), r = [ {
                label: "进行中",
                list: []
            }, {
                label: "已结束",
                list: []
            } ];
            return t.forEach(function(t) {
                var n = {};
                n.id = t.id, n.prize = (0, _lodash2.default)(t, "lottery.prizes.data[0].name", ""), 
                n.count = (0, _lodash2.default)(t, "lottery.prizes.data[0].count", 0), (0, _lodash2.default)(t, "complainant.id", "") === e.uid ? n.type = "发起投诉" : n.type = "被投诉", 
                0 !== t.state ? r[0].list.push(n) : r[1].list.push(n);
            }), r;
        }
    } ]), t;
}(_ListManager3.default);

exports.default = ComplaintManager;