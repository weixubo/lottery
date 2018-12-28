function Upyun(t) {
    this.bucket = t.bucket, this.operator = t.operator, this.getSignatureUrl = t.getSignatureUrl;
}

Upyun.prototype.upload = function(t) {
    var e = this;
    t.remotePath || (t.remotePath = t.localPath.split("//")[1]);
    var r = new Date().toGMTString(), a = {
        "save-key": t.remotePath,
        bucket: e.bucket,
        expiration: Math.round(new Date().getTime() / 1e3) + 3600,
        date: r
    }, o = Base64.encode(JSON.stringify(a)), n = [ "POST", "/" + e.bucket, r, o ].join("&");
    e.getSignature(n, function(r, a) {
        if (r) return t.fail && t.fail(r), void (t.complete && t.complete(r));
        wx.uploadFile({
            url: "https://v0.api.upyun.com/" + e.bucket,
            filePath: t.localPath,
            name: "file",
            formData: {
                authorization: "UPYUN " + e.operator + ":" + a,
                policy: o
            },
            success: t.success,
            fail: t.fail,
            complete: t.complete
        });
    });
}, Upyun.prototype.getSignature = function(t, e) {
    wx.request({
        url: this.getSignatureUrl,
        data: {
            data: t
        },
        success: function(t) {
            e(null, t.data.signature);
        },
        fail: function(t) {
            e(t);
        }
    });
};

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(t) {
        var e, r, a, o, n, i, c, h = "", u = 0;
        for (t = Base64._utf8_encode(t); u < t.length; ) e = t.charCodeAt(u++), r = t.charCodeAt(u++), 
        a = t.charCodeAt(u++), o = e >> 2, n = (3 & e) << 4 | r >> 4, i = (15 & r) << 2 | a >> 6, 
        c = 63 & a, isNaN(r) ? i = c = 64 : isNaN(a) && (c = 64), h = h + this._keyStr.charAt(o) + this._keyStr.charAt(n) + this._keyStr.charAt(i) + this._keyStr.charAt(c);
        return h;
    },
    decode: function(t) {
        var e, r, a, o, n, i, c, h = "", u = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < t.length; ) o = this._keyStr.indexOf(t.charAt(u++)), 
        n = this._keyStr.indexOf(t.charAt(u++)), i = this._keyStr.indexOf(t.charAt(u++)), 
        c = this._keyStr.indexOf(t.charAt(u++)), e = o << 2 | n >> 4, r = (15 & n) << 4 | i >> 2, 
        a = (3 & i) << 6 | c, h += String.fromCharCode(e), 64 != i && (h += String.fromCharCode(r)), 
        64 != c && (h += String.fromCharCode(a));
        return h = Base64._utf8_decode(h);
    },
    _utf8_encode: function(t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", r = 0; r < t.length; r++) {
            var a = t.charCodeAt(r);
            a < 128 ? e += String.fromCharCode(a) : a > 127 && a < 2048 ? (e += String.fromCharCode(a >> 6 | 192), 
            e += String.fromCharCode(63 & a | 128)) : (e += String.fromCharCode(a >> 12 | 224), 
            e += String.fromCharCode(a >> 6 & 63 | 128), e += String.fromCharCode(63 & a | 128));
        }
        return e;
    },
    _utf8_decode: function(t) {
        for (var e = "", r = 0, a = c1 = c2 = 0; r < t.length; ) a = t.charCodeAt(r), a < 128 ? (e += String.fromCharCode(a), 
        r++) : a > 191 && a < 224 ? (c2 = t.charCodeAt(r + 1), e += String.fromCharCode((31 & a) << 6 | 63 & c2), 
        r += 2) : (c2 = t.charCodeAt(r + 1), c3 = t.charCodeAt(r + 2), e += String.fromCharCode((15 & a) << 12 | (63 & c2) << 6 | 63 & c3), 
        r += 3);
        return e;
    }
};

module.exports = Upyun;