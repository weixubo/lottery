function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(u, a) {
                try {
                    var o = r[u](a), s = o.value;
                } catch (e) {
                    return void t(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.valueAdded = exports.payForOther = exports.getFrientPayInfo = exports.createFriendPay = exports.getTransfer = exports.activeTransfer = exports.transferProduct = exports.reveiveTransfer = exports.getProductList = exports.incomeExpense = exports.withdraw = exports.getGameByPaymentId = exports.getUnusedVoucher = exports.getPayment = exports.createPayment = void 0;

var createPayment = exports.createPayment = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/payment",
                    method: "POST",
                    data: r
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getPayment = exports.getPayment = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/payment/" + r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getUnusedVoucher = exports.getUnusedVoucher = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/voucher/unused",
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), getGameByPaymentId = exports.getGameByPaymentId = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/get_by_payment_id?payment_id=" + r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), withdraw = exports.withdraw = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/withdraw",
                    method: "POST",
                    data: r
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), incomeExpense = exports.incomeExpense = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r ? r = "" + _config2.default.API_HOST + r : (r = _config2.default.API_HOST + "/income_expense?page=1&size=5", 
                t && (r = r + "&filter=" + t)), e.abrupt("return", (0, _request.superRequest)({
                    url: r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), getProductList = exports.getProductList = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/products_onsale?system=" + (r.system || "android"),
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), reveiveTransfer = exports.reveiveTransfer = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/product_transfer_apply",
                    method: "POST",
                    data: {
                        code: r
                    }
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), transferProduct = exports.transferProduct = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/product_transfer",
                    method: "POST",
                    data: r
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), activeTransfer = exports.activeTransfer = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/product_transfer_active",
                    method: "POST",
                    data: {
                        code: r
                    }
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getTransfer = exports.getTransfer = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/product_transfer?code=" + r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), createFriendPay = exports.createFriendPay = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/pay_by_other",
                    method: "POST",
                    data: r
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getFrientPayInfo = exports.getFrientPayInfo = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/pay_for_other_info?code=" + r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), payForOther = exports.payForOther = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/pay_for_other",
                    method: "POST",
                    data: {
                        code: r
                    }
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), valueAdded = exports.valueAdded = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/payment/value_added",
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _request = require("./../libs/request.js");