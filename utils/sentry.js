function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    return r.default = e, r;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _sentryMina = require("./../npm/sentry-mina/browser/sentry-mina.js"), Sentry = _interopRequireWildcard(_sentryMina), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config);

Sentry.init({
    dsn: "https://511b9e5e3c634cb58e51fd438394119a@sentry.nocode-tech.com/2",
    maxBreadcrumbs: 30,
    release: _config2.default.VERSION,
    integrations: [ new Sentry.Integrations.Breadcrumbs({
        api: !1
    }) ]
}), exports.default = Sentry;