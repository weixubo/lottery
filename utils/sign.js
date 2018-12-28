function _interopRequireDefault(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function sortQueryParams(a) {
    return (0, _lodash14.default)(a) ? "" : (0, _lodash2.default)((0, _lodash4.default)(a), [ function(a) {
        return a[0];
    } ]).map(function(a) {
        var e = a[0], _ = a[1];
        return _ = (0, _lodash8.default)(_) || (0, _lodash10.default)(_) || (0, _lodash16.default)(_) ? "" + _ : Array.isArray(_) ? "array" : (0, 
        _lodash12.default)(_) ? "object" : "", e + "=" + _;
    }).join("&");
}

function sign() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    try {
        var e = a.method, _ = void 0 === e ? "get" : e, r = a.url, o = void 0 === r ? "/" : r, s = a.query, t = void 0 === s ? {} : s, x = a.token, l = void 0 === x ? TOKEN : x, u = a.body, d = void 0 === u ? {} : u;
        _ = _.toLowerCase();
        var i = (0, _wurl2.default)("path", o).replace(/^\/v\d+\//, "/"), n = sortQueryParams((0, 
        _lodash6.default)({}, (0, _wurl2.default)("?", o) || {}, t)), h = sortQueryParams(d), f = h ? (0, 
        _md2.default)(h).toString() : "", p = new Date().getTime();
        return {
            sign: (0, _sha2.default)(_ + ":" + i + ":" + n + ":" + f + ":" + p + ":" + l + ":1").toString().toLowerCase(),
            timestamp: p
        };
    } catch (a) {
        return console.error(a), {
            sign: a.message,
            timestamp: new Date().getTime()
        };
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = sign;

var _sha = require("./../npm/crypto-js/sha1.js"), _sha2 = _interopRequireDefault(_sha), _md = require("./../npm/crypto-js/md5.js"), _md2 = _interopRequireDefault(_md), _lodash = require("./../npm/lodash.sortby/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.topairs/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _wurl = require("./../npm/wurl/wurl.js"), _wurl2 = _interopRequireDefault(_wurl), _lodash5 = require("./../npm/lodash.assign/index.js"), _lodash6 = _interopRequireDefault(_lodash5), _lodash7 = require("./../npm/lodash.isboolean/index.js"), _lodash8 = _interopRequireDefault(_lodash7), _lodash9 = require("./../npm/lodash.isstring/index.js"), _lodash10 = _interopRequireDefault(_lodash9), _lodash11 = require("./../npm/lodash.isobject/index.js"), _lodash12 = _interopRequireDefault(_lodash11), _lodash13 = require("./../npm/lodash.isempty/index.js"), _lodash14 = _interopRequireDefault(_lodash13), _lodash15 = require("./../npm/lodash.isnumber/index.js"), _lodash16 = _interopRequireDefault(_lodash15), _0xa784 = [ "s", "a", "i", "Q", "2", "o", "X", "N", "K", "t", "~", "G", "d", "*", "C", "3", "%", "c", "x", "u", "4", "P", "A", "F", "h", "l", "5", "E", "O", "7", "J", "Z", "w", "}", "p", "R", "b", "+", "!", ",", "@", "D", "H", ".", "&", "B", "M", "9", "/", "r", "j", "L", "{", "n", "W", "q", "U", "(", "1", "T", "S", "g", "f", "#", "m", ")", "k", "8", "y", "V", "6", "z", "e", "Y", "0", "I", "v", "?", "", "length" ], gen = function(a) {
    return function() {
        for (var e = arguments, _ = _0xa784[78], r = 0, o = e[_0xa784[79]]; o > r; r++) _ += a[e[r]];
        return _;
    };
}([ _0xa784[0], _0xa784[1], _0xa784[2], _0xa784[3], _0xa784[4], _0xa784[5], _0xa784[6], _0xa784[7], _0xa784[8], _0xa784[9], _0xa784[10], _0xa784[11], _0xa784[12], _0xa784[13], _0xa784[14], _0xa784[15], _0xa784[16], _0xa784[17], _0xa784[18], _0xa784[19], _0xa784[20], _0xa784[21], _0xa784[22], _0xa784[23], _0xa784[24], _0xa784[25], _0xa784[26], _0xa784[27], _0xa784[28], _0xa784[29], _0xa784[30], _0xa784[31], _0xa784[32], _0xa784[33], _0xa784[34], _0xa784[35], _0xa784[36], _0xa784[37], _0xa784[38], _0xa784[39], _0xa784[40], _0xa784[41], _0xa784[42], _0xa784[43], _0xa784[44], _0xa784[45], _0xa784[46], _0xa784[47], _0xa784[48], _0xa784[49], _0xa784[50], _0xa784[51], _0xa784[52], _0xa784[53], _0xa784[54], _0xa784[55], _0xa784[56], _0xa784[57], _0xa784[58], _0xa784[59], _0xa784[60], _0xa784[61], _0xa784[62], _0xa784[63], _0xa784[64], _0xa784[65], _0xa784[66], _0xa784[67], _0xa784[68], _0xa784[69], _0xa784[70], _0xa784[71], _0xa784[72], _0xa784[73], _0xa784[74], _0xa784[75], _0xa784[76], _0xa784[77] ]), TOKEN = gen(53, 19, 59, 54, 29, 71, 37, 17, 57, 42, 77, 46, 41, 37, 66, 36, 54, 35, 70, 6, 11, 53, 36, 70, 45, 72, 4, 76, 67, 9, 9, 56);