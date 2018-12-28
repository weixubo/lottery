function isBoolean(o) {
    return !0 === o || !1 === o || isObjectLike(o) && objectToString.call(o) == boolTag;
}

function isObjectLike(o) {
    return !!o && "object" == typeof o;
}

var boolTag = "[object Boolean]", objectProto = Object.prototype, objectToString = objectProto.toString;

module.exports = isBoolean;