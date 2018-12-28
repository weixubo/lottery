function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function realCount(e) {
    for (var t = 0, r = 0, n = e.length; r < n; r++) /[\u0000-\u00FF]/.test(e[r]) ? t += .5 : t += 1;
    return t;
}

function stringWithMaxLenght(e, t) {
    for (var r = "", n = 0, a = 0, o = e.length; a < o && (/[\u0000-\u00FF]/.test(e[a]) ? n += .5 : n += 1, 
    n <= t); a++) r += e[a];
    return r;
}

function versionCompare(e, t) {
    e = e.split("."), t = t.split(".");
    var r = e[0], n = t[0];
    return e.shift(), t.shift(), e = r + "." + e.join(""), t = n + "." + t.join(""), 
    parseFloat(e) - parseFloat(t);
}

function absoluteDatetime(e) {
    var t = (0, _moment2.default)();
    e = (0, _moment2.default)(e);
    var r = t.toDate().getTime() - e.toDate().getTime();
    if (r < 36e5) {
        var n = Math.floor(r / 6e4);
        return 0 === n ? "刚刚" : n + " 分钟前";
    }
    return t.isSame(e, "day") ? Math.floor(r / 36e5) + " 小时前" : t.isSame(e, "year") ? e.format("MM-DD") : e.format("YYYY-MM-DD");
}

function displayDatetime(e) {
    var t = _moment2.default.localeData(), r = (0, _moment2.default)(), n = e.year(), a = e.month() + 1, o = e.date(), i = r.year(), u = r.month() + 1, s = r.date();
    if (n !== i) return e.format("" + t.longDateFormat("L"));
    if (a === u) {
        if (o === s) return e.format("LT");
        if (o - s == 1) return _pangu2.default.spacing(e.format(t.calendar("nextDay")));
    }
    return e.format("" + t.ordinal(a, "M") + t.ordinal(o, "D"));
}

function displaySimpleDatetime(e) {
    return e.format("MM月DD日 HH:mm");
}

function getNearDatetime(e, t) {
    for (e = (0, _moment2.default)(e); !function(e, t) {
        var r = e.minute();
        return -1 !== t.indexOf(r);
    }(e, t); ) e.add(1, "minutes");
    return e;
}

function imageUrl(e, t) {
    return t && 3 === t ? e + "@3x.png" : e + "@2x.png";
}

function fileName(e) {
    return new _uuid2.default(1).toString();
}

function requestAnimationFrame(e) {
    var t = new Date().getTime(), r = Math.max(lastTime + 16, t);
    return setTimeout(function() {
        e(lastTime = r);
    }, r - t);
}

function currentPages() {
    return getCurrentPages();
}

function getContact(e) {
    var t = e.contact;
    return t && (t.telNumber || t.userName || t.cityName || t.countyName || t.detailInfo || t.provinceName) ? t.userName + ", " + t.telNumber + ", " + t.provinceName + t.cityName + t.countyName + t.detailInfo + "\n" : "";
}

function getNotes(e) {
    var t = e.contact;
    if (t) {
        if (t.notes) return t.notes + "\n";
        if (t.detail && !getContact(e)) return t.detail + "\n";
    }
    return "";
}

function getUserContact(e) {
    return e ? getContact(e) + getNotes(e) : "";
}

function wxAvatar(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 46;
    return rAvatar.test(e) ? e.replace(rAvatar, "$1" + t) : e;
}

function checkEditorVersion(e) {
    return console.log(e, _config2.default.RENDER_VERSION), !e.minRenderVersion || versionCompare(_config2.default.RENDER_VERSION, e.minRenderVersion) >= 0;
}

function randomBanner(e) {
    if ("[object Array]" !== Object.prototype.toString.call(e)) return e;
    var t = Math.floor(Math.random() * e.length);
    return console.log(t), e[t];
}

function squareStatus(e) {
    return e.lottery || -1 === e.state ? e.refund_state ? 8 : 1 === e.display_state ? 7 : 2 === e.display_state ? 5 : -1 === e.verify_state ? 4 : e.verify_state ? 1 === e.verify_state ? 2 : 2 === e.verify_state ? 3 : void 0 : 1 : -1;
}

function squareExpireDate(e) {
    return (0, _moment2.default)(e).add(1, "months").format("YYYY-M-D HH:mm");
}

function ncFormat(e) {
    return e ? (e = e.replace(/\s*【[^【】]+】\s*/gi, ""), e = e.replace(/[“”]([^“”]+)[“”]/g, "「$1」"), 
    e = e.replace(/"([^"]+)"/g, "「$1」"), e = e.replace(/^「([^」]+)」/, "$1"), e = e.replace(/•/g, "·"), 
    e = e.replace(/[！]/g, "。"), e = e.replace(/[!]/g, "."), e = _pangu2.default.spacing(e), 
    e = e.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]\s*):/g, "$1："), 
    e = e.replace(/(\d+)\s*[:|：]\s*(\d+)/g, "$1:$2")) : "";
}

function decodeScene(e) {
    try {
        e = decodeURIComponent(e);
        var t = e.split("&"), r = {};
        return t.forEach(function(e) {
            var t = e.split("=");
            2 === t.length && (r[t[0]] = t[1]);
        }), r;
    } catch (e) {
        return null;
    }
}

function isGamePro(e) {
    try {
        var t = !1;
        return e.prizes.data.forEach(function(e) {
            3 === e.type && (t = !0);
        }), t || e.is_payed;
    } catch (e) {
        return !1;
    }
}

function throttle(e, t, r) {
    var n = null, a = void 0;
    return function() {
        var o = this, i = arguments, u = +new Date();
        clearTimeout(n), a || (a = u), u - a >= r ? (e.apply(o, i), a = u) : n = setTimeout(function() {
            e.apply(o, i);
        }, t);
    };
}

function isAndroid(e) {
    return e.system.indexOf("Android") > -1;
}

function isIphoneX(e) {
    return e.model.indexOf("iPhone X") > -1;
}

function isWxWork(e) {
    return "wxwork" === e.environment;
}

function hasSafeArea(e) {
    return RSafeArea.test(e.model);
}

function supportCustomNavigationBar(e) {
    return versionCompare(e.version, "6.6.0") >= 0 && versionCompare(e.SDKVersion, "1.7.0") >= 0;
}

function getSystemInfo() {
    return systemInfo || (systemInfo = wx.getSystemInfoSync()), systemInfo;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.realCount = realCount, exports.stringWithMaxLenght = stringWithMaxLenght, 
exports.versionCompare = versionCompare, exports.absoluteDatetime = absoluteDatetime, 
exports.displayDatetime = displayDatetime, exports.displaySimpleDatetime = displaySimpleDatetime, 
exports.getNearDatetime = getNearDatetime, exports.imageUrl = imageUrl, exports.fileName = fileName, 
exports.requestAnimationFrame = requestAnimationFrame, exports.currentPages = currentPages, 
exports.getContact = getContact, exports.getNotes = getNotes, exports.getUserContact = getUserContact, 
exports.wxAvatar = wxAvatar, exports.checkEditorVersion = checkEditorVersion, exports.randomBanner = randomBanner, 
exports.squareStatus = squareStatus, exports.squareExpireDate = squareExpireDate, 
exports.ncFormat = ncFormat, exports.decodeScene = decodeScene, exports.isGamePro = isGamePro, 
exports.throttle = throttle, exports.isAndroid = isAndroid, exports.isIphoneX = isIphoneX, 
exports.isWxWork = isWxWork, exports.hasSafeArea = hasSafeArea, exports.supportCustomNavigationBar = supportCustomNavigationBar, 
exports.getSystemInfo = getSystemInfo;

var _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), _pangu = require("./../npm/pangu/dist/browser/pangu.js"), _pangu2 = _interopRequireDefault(_pangu), _uuid = require("./../libs/uuid.js"), _uuid2 = _interopRequireDefault(_uuid), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), lastTime = 0, rAvatar = /^(https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/[^\/]+\/)(\d+)$/, RSafeArea = /iphone x|iphone xs|iphone xs max|iphone xr/i, systemInfo = void 0;