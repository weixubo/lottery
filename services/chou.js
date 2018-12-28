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
                    var a = r[u](o), s = a.value;
                } catch (e) {
                    return void t(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
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
import regeneratorRuntime from '../utils/regenerator-runtime/runtime';

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateUserAvatar = exports.getUserPageGames = exports.getUserPage = exports.phoneNumber = exports.bannerAds = exports.sponsorRequest = exports.UserProfile = exports.saveFormId = exports.getThemeFunnyConfig = exports.getAppConfig = exports.UserInfo = exports.UpdateUserInfo = exports.refreshToken = exports.UserLogin = exports.certificateCancle = exports.certificate = void 0;

var certificate = exports.certificate = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/user/certificate",
                    method: "GET"
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
}(), certificateCancle = exports.certificateCancle = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/certificate/" + r.id,
                    method: "POST",
                    data: {
                        type: "revoke"
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
}(), UserLogin = exports.UserLogin = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/user/login",
                    method: "POST",
                    data: {
                        code: r,
                        platform: t ? "wechatQy" : "wechat"
                    }
                }, {
                    retry: 1
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
}(), refreshToken = exports.refreshToken = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/user/refresh_token",
                    method: "GET"
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
}(), UpdateUserInfo = exports.UpdateUserInfo = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t, n) {
        var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("update user info", r, t, n), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/user/profile",
                    method: "POST",
                    data: {
                        encrypted_data: r,
                        iv: t,
                        platform: n ? "wechatQy" : "wechat",
                        code: u
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
}(), UserInfo = exports.UserInfo = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/profile",
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
}(), getAppConfig = exports.getAppConfig = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/config",
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
}(), getThemeFunnyConfig = exports.getThemeFunnyConfig = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/theme/funny/config",
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
}(), saveFormId = exports.saveFormId = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t, n) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return");

              case 2:
                if (console.info("save formId: " + r + " " + t, n), "the formId is a mock one" !== r) {
                    e.next = 5;
                    break;
                }
                return e.abrupt("return");

              case 5:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/form_id",
                    method: "POST",
                    data: {
                        form_id: r,
                        type: t || "",
                        params: n || {}
                    }
                }));

              case 6:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t, n) {
        return e.apply(this, arguments);
    };
}(), UserProfile = exports.UserProfile = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/user/info",
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
}(), sponsorRequest = exports.sponsorRequest = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/sponsor",
                    method: "POST",
                    data: {
                        content: r
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
}(), bannerAds = exports.bannerAds = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/banner_ads",
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
}(), phoneNumber = exports.phoneNumber = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/" + _config2.default.API_VERSION + "/wechat/phone",
                    method: "POST",
                    data: {
                        encrypted_data: r,
                        iv: t,
                        code: n
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
}(), getUserPage = exports.getUserPage = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/user_page?user_id=" + r,
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
}(), getUserPageGames = exports.getUserPageGames = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = t ? "" + _config2.default.API_HOST + t : _config2.default.API_HOST + "/user_square_lotteries?user_id=" + r, 
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
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), updateUserAvatar = exports.updateUserAvatar = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/user/avatar",
                    method: "POST",
                    data: {
                        avatar: r
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
}(), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _request = require("./../libs/request.js");