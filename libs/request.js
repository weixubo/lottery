function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(a, o) {
                try {
                    var s = r[a](o), u = s.value;
                } catch (e) {
                    return void t(e);
                }
                if (!s.done) return Promise.resolve(u).then(function(e) {
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

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function request(e) {
    var r = e.success || function() {}, t = e.fail || function() {};
    return e.success = function(e) {
        401 === e.statusCode && (wx.removeStorageSync("SESSION_NEW_1"), wx.removeStorageSync("USER_1")), 
        r(e);
    }, e.fail = function(e) {
        t(e);
    }, wx.request(e);
}
import regeneratorRuntime from '../utils/regenerator-runtime/runtime';

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.superRequest = void 0;

var _URL_MAP, superRequest = exports.superRequest = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = {
                    data: {
                        token: ""
                    }
                }, e.prev = 1, e.next = 4, _wepy2.default.getStorage({
                    key: "SESSION_NEW_1"
                });

              case 4:
                t = e.sent, e.next = 9;
                break;

              case 7:
                e.prev = 7, e.t0 = e.catch(1);

              case 9:
                return e.abrupt("return", new Promise(function(e, a) {
                    URL_MAP[r.url] ? r.url = URL_MAP[r.url] : URL_REG.forEach(function(e) {
                        var t = e.exec(r.url);
                        t && (r.url = r.url.slice(0, t.index) + "/v2" + r.url.slice(t.index));
                    });
                    var o = {
                        "X-Request-ID": (0, _tools.fileName)(),
                        version: _config2.default.VERSION
                    };
                    if (t.data.token && (o.Authorization = "Bearer " + t.data.token), r.header = (0, 
                    _lodash2.default)({}, r.header || {}, o), r.data) for (var s in r.data) r.data.hasOwnProperty(s) && (void 0 !== r.data[s] && "function" != typeof r.data[s] || delete r.data[s]);
                    if (ENABLE_SIGN && (!r.method || "get" === r.method.toLowerCase())) {
                        var u = (0, _sign2.default)({
                            method: r.method,
                            url: r.url,
                            query: r.data
                        });
                        r.header.sign = u.sign, r.header.timestamp = u.timestamp;
                    }
                    if (ENABLE_SIGN && r.method && "post" === r.method.toLowerCase()) {
                        var i = (0, _sign2.default)({
                            method: r.method,
                            url: r.url,
                            body: r.data
                        });
                        r.header.sign = i.sign, r.header.timestamp = i.timestamp;
                    }
                    var l = r.success, c = r.fail, d = new Date().getTime();
                    r.success = function(t) {
                        return 200 === t.statusCode ? console.info(new Date().toLocaleString() + " " + r.url + " request success after " + (new Date().getTime() - d) + " ms:", t) : console.warn(new Date().toLocaleString() + " " + r.url + " request success after " + (new Date().getTime() - d) + " ms:", t), 
                        l && l(t), 401 === t.statusCode && (wx.removeStorageSync("SESSION_NEW_1"), wx.removeStorageSync("USER_1")), 
                        502 === t.statusCode ? a(new Error("服务器错误")) : t.data.error ? a(new Error((0, _lodash4.default)(t, "data.error.message", "请求失败"))) : t.data.errors ? a(new Error((0, 
                        _lodash4.default)(t, "data.errors[0].message", "请求失败"))) : e(t.data);
                    }, r.fail = function(t) {
                        console.warn(new Date().toLocaleString() + " " + r.url + " request fail after " + (new Date().getTime() - d) + " ms and retry " + n.retry + ":", t);
                        var o = n.retry || 0;
                        if (o > 0) r.success = l, r.fail = c, setTimeout(function() {
                            e(superRequest(r, {
                                retry: o - 1
                            }));
                        }, 100 * Math.random()); else {
                            var s = new Error("网络异常，请求失败");
                            c && c(s), a(s);
                        }
                    }, console.info(new Date().toLocaleString() + " " + r.url + " " + r.header["X-Request-ID"] + " request begin:", r), 
                    wx.request(r);
                }));

              case 10:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 1, 7 ] ]);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}();

exports.default = request;

var _lodash = require("./../npm/lodash.assign/index.js"), _lodash2 = _interopRequireDefault(_lodash), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _sign = require("./../utils/sign.js"), _sign2 = _interopRequireDefault(_sign), _tools = require("./../utils/tools.js"), _lodash3 = require("./../npm/lodash.get/index.js"), _lodash4 = _interopRequireDefault(_lodash3), URL_MAP = (_URL_MAP = {}, 
_defineProperty(_URL_MAP, _config2.default.API_HOST + "/config", _config2.default.API_HOST + "/v2/config"), 
_defineProperty(_URL_MAP, _config2.default.API_HOST + "/sponsor_request", _config2.default.API_HOST + "/v2/sponsor"), 
_URL_MAP), URL_REG = [], ENABLE_SIGN = !0;