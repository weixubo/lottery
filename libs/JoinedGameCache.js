function addJoinGameId(e) {
    e && ids.push(e);
}

function checkJoinedGameId(e) {
    return ids.indexOf(e) > -1;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.addJoinGameId = addJoinGameId, exports.checkJoinedGameId = checkJoinedGameId;

var ids = [];