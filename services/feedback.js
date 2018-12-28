function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(u, o) {
                try {
                    var a = t[u](o), i = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(i).then(function(e) {
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
}), exports.likeLottery = exports.getComplaint = exports.getComplaintList = exports.complaintReply = exports.certificateUpdate = exports.complaint = void 0;

var complaint = exports.complaint = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/complaint",
                    method: "POST",
                    data: t
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), certificateUpdate = exports.certificateUpdate = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/certificate",
                    method: "POST",
                    data: t
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), complaintReply = exports.complaintReply = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/complaint/" + t + "/reply",
                    method: "POST",
                    data: r
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}(), getComplaintList = exports.getComplaintList = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = t ? _config2.default.API_HOST + "/" + _config2.default.API_VERSION + t : _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/complaint", 
                e.abrupt("return", (0, _request.superRequest)({
                    url: t,
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
}(), getComplaint = exports.getComplaint = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/complaint/" + t,
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
    return function(t) {
        return e.apply(this, arguments);
    };
}(), likeLottery = exports.likeLottery = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/lottery/" + t + "/like",
                    method: "POST"
                }, {
                    retry: 1
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _request = require("./../libs/request.js");