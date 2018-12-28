function isObjectLike(t) {
    return !!t && "object" == typeof t;
}

function isString(t) {
    return "string" == typeof t || !isArray(t) && isObjectLike(t) && objectToString.call(t) == stringTag;
}

var stringTag = "[object String]", objectProto = Object.prototype, objectToString = objectProto.toString, isArray = Array.isArray;

module.exports = isString;