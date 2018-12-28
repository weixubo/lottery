function sync() {
    try {
        wx.setStorage({
            key: KEY,
            data: history
        });
    } catch (t) {}
}

function showed(t, e) {
    if (!t || !e) return !1;
    history.id !== t && (history = {
        id: t
    }), history[e] = !0, sync();
}

function needShow(t, e) {
    return !(!t || !e) && (history.id !== t && (history = {
        id: t
    }, sync()), !history[e]);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.showed = showed, exports.needShow = needShow;

var KEY = "badge", history = {};

try {
    history = wx.getStorageSync(KEY) || {}, console.log("badge", history);
} catch (t) {}