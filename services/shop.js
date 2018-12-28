function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, u) {
                try {
                    var s = t[o](u), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.suggest = exports.getGoodsList = exports.getGoodsItem = exports.goodsRefund = void 0;

var goodsRefund = exports.goodsRefund = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("refund goods " + t), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + t + "/refund",
                    method: "POST",
                    data: {
                        form_id: r
                    }
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}(), getGoodsItem = exports.getGoodsItem = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get goods item"), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/market/goods/" + t,
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
    return function(t) {
        return e.apply(this, arguments);
    };
}(), getGoodsList = exports.getGoodsList = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get goods list"), t = t ? "" + _config2.default.API_HOST + t : _config2.default.API_HOST + "/market/goods", 
                e.abrupt("return", (0, _request.superRequest)({
                    url: t,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), suggest = exports.suggest = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("shop suggest"), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/market/goods/suggest",
                    method: "POST",
                    data: {
                        content: t
                    }
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _request = require("./../libs/request.js");