function isObject(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
}

module.exports = isObject;