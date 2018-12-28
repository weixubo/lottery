function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(u, o) {
                try {
                    var i = r[u](o), a = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(a).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(a);
            }
            return n("next");
        });
    };
}
import regeneratorRuntime from '../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateProfile = exports.login = void 0;

var login = exports.login = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/wechatqy/login",
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
}(), updateProfile = exports.updateProfile = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/wechatqy/profile",
                    method: "POST",
                    data: {
                        encrypted_data: r,
                        iv: t
                    }
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _request = require("./../libs/request.js");