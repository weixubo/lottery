function isObjectLike(e) {
    return !!e && "object" == typeof e;
}

function isNumber(e) {
    return "number" == typeof e || isObjectLike(e) && objectToString.call(e) == numberTag;
}

var numberTag = "[object Number]", objectProto = Object.prototype, objectToString = objectProto.toString;

module.exports = isNumber;