function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(u, a) {
                try {
                    var o = t[u](a), i = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
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
}), exports.payProduct = void 0;

var payProduct = exports.payProduct = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
        var n, u;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = {
                    product_id: t
                }, r && (n.extra = r), e.next = 4, (0, _pay.createPayment)(n);

              case 4:
                return u = e.sent, u.data.request_info.timeStamp = "" + u.data.request_info.timeStamp, 
                e.next = 8, _wepy2.default.requestPayment(u.data.request_info);

              case 8:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _pay = require("./../services/pay.js");