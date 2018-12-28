function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var n = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function t(u, o) {
                try {
                    var i = n[u](o), a = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(a).then(function(e) {
                    t("next", e);
                }, function(e) {
                    t("throw", e);
                });
                e(a);
            }
            return t("next");
        });
    };
}
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.upload = void 0;

var upload = exports.upload = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(n, r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", new Promise(function(e, t) {
                    upyun.upload({
                        localPath: n,
                        remotePath: r,
                        success: function(n) {
                            return e(n);
                        },
                        fail: function(e) {
                            var n = e.errMsg;
                            return t(n);
                        }
                    });
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(n, r) {
        return e.apply(this, arguments);
    };
}(), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _upyun = require("./../libs/upyun.js"), _upyun2 = _interopRequireDefault(_upyun), upyun = new _upyun2.default(_config2.default.UPYUN);