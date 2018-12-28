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
}(), _pay = require("./../services/pay.js"), _ListManager2 = require("./ListManager.js"), _ListManager3 = _interopRequireDefault(_ListManager2), _currency = require("./../npm/currency.js/dist/currency.min.js"), _currency2 = _interopRequireDefault(_currency), _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), TransactionRecordManager = function(e) {
    function t() {
        return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
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
                        return e.abrupt("return", (0, _pay.incomeExpense)(t));

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
            console.log(e), e.data.forEach(function(e) {
                e.displayBalance = (0, _currency2.default)(e.balance).multiply(.01).format(), e.displayAmount = (0, 
                _currency2.default)(e.amount).multiply(.01).format();
                var t = "交易记录";
                switch (e.event_type) {
                  case 0:
                    t = "发起红包抽奖";
                    break;

                  case 1:
                    t = "红包抽奖中奖";
                    break;

                  case 2:
                    t = "红包抽奖退款";
                    break;

                  case 3:
                    t = "余额提现";
                }
                e.displayTitle = t, e.displayDate = (0, _moment2.default)(e.created_at).format("YYYY-MM-DD HH:mm");
            });
        }
    } ]), t;
}(_ListManager3.default), transactionRecordManager = new TransactionRecordManager();

exports.default = transactionRecordManager;