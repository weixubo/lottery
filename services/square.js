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
}), exports.refund = exports.display = exports.verify = exports.createSquareGame = exports.getSquare = exports.publicSquareList = exports.getSquareGames = void 0;

var getSquareGames = exports.getSquareGames = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = r ? "" + _config2.default.API_HOST + r : _config2.default.API_HOST + "/square_lottery", 
                e.abrupt("return", (0, _request.superRequest)({
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
    return function(r) {
        return e.apply(this, arguments);
    };
}(), publicSquareList = exports.publicSquareList = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = r ? "" + _config2.default.API_HOST + r : _config2.default.API_HOST + "/square", 
                e.abrupt("return", (0, _request.superRequest)({
                    url: r,
                    method: "GET"
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getSquare = exports.getSquare = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get square: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/square_lottery/" + r,
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
    return function(r) {
        return e.apply(this, arguments);
    };
}(), createSquareGame = exports.createSquareGame = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        var n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("create square game: " + r + " " + t), n = "", n = t.id ? "PATCH" : "POST", 
                e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/square_lottery/" + r + "/lottery",
                    method: n,
                    data: t
                }));

              case 4:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), verify = exports.verify = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("verify square: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/square_lottery/" + r + "/verify",
                    method: "POST",
                    data: {
                        form_id: t
                    }
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
}(), display = exports.display = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t, n) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("display square: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/square_lottery/" + r + "/display",
                    method: "POST",
                    data: {
                        form_id: n,
                        display_start: t
                    }
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t, n) {
        return e.apply(this, arguments);
    };
}(), refund = exports.refund = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t, n) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("refund square: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/square_lottery/" + r + "/refund",
                    method: "POST",
                    data: {
                        form_id: t,
                        reason: n || ""
                    }
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t, n) {
        return e.apply(this, arguments);
    };
}(), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _request = require("./../libs/request.js");