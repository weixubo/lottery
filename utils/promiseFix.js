function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getStorage(e) {
    return new Promise(function(t, n) {
        _wepy2.default.getStorage({
            key: e,
            success: function(e) {
                t(e.data);
            },
            fail: function() {
                t(null);
            }
        });
    });
}

function setStorage(e, t) {
    return new Promise(function(n, o) {
        _wepy2.default.setStorage({
            key: e,
            data: t,
            success: function(e) {
                n(!0);
            },
            fail: function(e) {
                _wepy2.default.clearStorage(), n(!1);
            }
        });
    });
}

function removeStorage(e) {
    return new Promise(function(t, n) {
        _wepy2.default.removeStorage({
            key: e,
            success: function(e) {
                t(!0);
            },
            fail: function(e) {
                t(!1);
            }
        });
    });
}

function openSetting() {
    return new Promise(function(e, t) {
        _wepy2.default.openSetting({
            success: function(t) {
                e(t);
            },
            fail: function(t) {
                e(t);
            }
        });
    });
}

function saveImageToPhotosAlbum(e) {
    return new Promise(function(t, n) {
        wx.saveImageToPhotosAlbum({
            filePath: e,
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                n(e);
            }
        });
    });
}

function getSetting() {
    return new Promise(function(e, t) {
        wx.getSetting({
            success: function(t) {
                e(t);
            },
            fail: function(e) {
                t(e);
            }
        });
    });
}

function authorize(e) {
    return new Promise(function(t, n) {
        wx.authorize({
            scope: e,
            success: function(e) {
                t();
            },
            fail: function(e) {
                n(e);
            }
        });
    });
}

function getLocation(e) {
    return authorize("scope.userLocation").then(function() {
        return new Promise(function(t, n) {
            wx.getLocation({
                type: e || "wgs84",
                success: function(e) {
                    t(e);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    });
}

function getShareInfo(e) {
    return new Promise(function(t, n) {
        wx.getShareInfo({
            shareTicket: e,
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                n(e);
            }
        });
    });
}

function getNetworkType() {
    return new Promise(function(e, t) {
        wx.getNetworkType({
            success: function(t) {
                e(t.networkType);
            },
            fail: function(e) {
                t(e);
            }
        });
    });
}

function getSystemInfo() {
    return new Promise(function(e, t) {
        wx.getSystemInfo({
            success: function(t) {
                e(t);
            },
            fail: function(e) {
                t(e);
            }
        });
    });
}

function downLoadFile(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return new Promise(function(n, o) {
        wx.downloadFile({
            url: e,
            header: t,
            success: function(e) {
                n(e);
            },
            fail: function(e) {
                o(e);
            }
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getStorage = getStorage, exports.setStorage = setStorage, exports.removeStorage = removeStorage, 
exports.openSetting = openSetting, exports.saveImageToPhotosAlbum = saveImageToPhotosAlbum, 
exports.getSetting = getSetting, exports.authorize = authorize, exports.getLocation = getLocation, 
exports.getShareInfo = getShareInfo, exports.getNetworkType = getNetworkType, exports.getSystemInfo = getSystemInfo, 
exports.downLoadFile = downLoadFile;

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);