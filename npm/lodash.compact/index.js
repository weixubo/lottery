function compact(o) {
    for (var r = -1, t = o ? o.length : 0, c = 0, a = []; ++r < t; ) {
        var e = o[r];
        e && (a[c++] = e);
    }
    return a;
}

module.exports = compact;