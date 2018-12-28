function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment);

require("./../npm/moment/locale/zh-cn.js");

var currentLocale = _moment2.default.locale();

_moment2.default.locale(currentLocale);