function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(o, u) {
                try {
                    var a = r[o](u), s = a.value;
                } catch (e) {
                    return void t(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.choiceLottery = exports.getVirtualPrizes = exports.getLotteryDownloadLink = exports.getRandomGame = exports.gameShareInfo = exports.gameShared = exports.scratch = exports.getGroup = exports.joinGroup = exports.createGroup = exports.hideGame = exports.shareGroupPyqImage = exports.shareMessageImage = exports.shareGroupMessageImage = exports.shareImage = exports.manualStart = exports.postContact = exports.getGameResultByParticipator = exports.getGameResult = exports.getGameLuckyUsers = exports.getGameUsers = exports.getGame = exports.joinGame = exports.updateGame = exports.createGame = exports.getUserGames = exports.getOfficialGames = void 0;

var getOfficialGames = exports.getOfficialGames = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r ? r = "" + _config2.default.API_HOST + r : (r = _config2.default.API_HOST + "/public_lottery?page=1&size=5", 
                t && (r = r + "&filter=" + t)), e.abrupt("return", (0, _request.superRequest)({
                    url: r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), getUserGames = exports.getUserGames = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r ? r = "" + _config2.default.API_HOST + r : (r = _config2.default.API_HOST + "/lottery?page=1&size=5", 
                t && (r = r + "&filter=" + t)), e.abrupt("return", (0, _request.superRequest)({
                    url: r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), createGame = exports.createGame = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("create game: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery",
                    method: "POST",
                    data: r
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), updateGame = exports.updateGame = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("update game: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r.id,
                    method: "POST",
                    data: r
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), joinGame = exports.joinGame = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t, n) {
        var o;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("join game: " + r), o = {
                    form_id: t
                }, n && (o.join_code = n), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/join",
                    method: "POST",
                    data: o
                }));

              case 4:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t, n) {
        return e.apply(this, arguments);
    };
}(), getGame = exports.getGame = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get game: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getGameUsers = exports.getGameUsers = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get game users: " + r), t = t ? "" + _config2.default.API_HOST + t : _config2.default.API_HOST + "/lottery/" + r + "/users?page=1&size=200", 
                e.abrupt("return", (0, _request.superRequest)({
                    url: t,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), getGameLuckyUsers = exports.getGameLuckyUsers = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get game lucky users: " + r), t = t ? "" + _config2.default.API_HOST + t : _config2.default.API_HOST + "/lottery/" + r + "/lucky_users?page=1&size=21", 
                e.abrupt("return", (0, _request.superRequest)({
                    url: t,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), getGameResult = exports.getGameResult = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get game result by initiator: " + r), e.abrupt("return", (0, 
                _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/result",
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getGameResultByParticipator = exports.getGameResultByParticipator = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get game result by participator: " + r), e.abrupt("return", (0, 
                _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/result",
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), postContact = exports.postContact = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("post contact: " + t), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/contact",
                    method: "POST",
                    data: t
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), manualStart = exports.manualStart = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("manual start: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/draw",
                    method: "POST"
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), shareImage = exports.shareImage = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("share image: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/share_image?type=" + t,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), shareGroupMessageImage = exports.shareGroupMessageImage = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("share group message image: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/group_share_image",
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), shareMessageImage = exports.shareMessageImage = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("share message image: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/wechat_share_image",
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), shareGroupPyqImage = exports.shareGroupPyqImage = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("share group pyq image: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/group_pyq_share_image",
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), hideGame = exports.hideGame = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("hide game: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/hide",
                    method: "POST"
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), createGroup = exports.createGroup = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("create group: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery_group",
                    method: "POST",
                    data: {
                        form_id: t,
                        lottery_id: r
                    }
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), joinGroup = exports.joinGroup = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("join group: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery_group/" + r + "/join",
                    method: "POST",
                    data: {
                        form_id: t
                    }
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), getGroup = exports.getGroup = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get group: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery_group/" + r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), scratch = exports.scratch = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("scratch game: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/scratch",
                    method: "POST"
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), gameShared = exports.gameShared = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("share game: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/shared",
                    method: "POST"
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), gameShareInfo = exports.gameShareInfo = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("game share info: " + r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/shared",
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getRandomGame = exports.getRandomGame = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get random game"), r = r ? "" + _config2.default.API_HOST + r : _config2.default.API_HOST + "/lottery/get_random", 
                e.abrupt("return", (0, _request.superRequest)({
                    url: r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getLotteryDownloadLink = exports.getLotteryDownloadLink = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get download link", r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/lottery/" + r + "/result_download",
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), getVirtualPrizes = exports.getVirtualPrizes = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("get virtual prizes", r), e.abrupt("return", (0, _request.superRequest)({
                    url: _config2.default.API_HOST + "/virtual_prizes?prize_id=" + r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), choiceLottery = exports.choiceLottery = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("choose lottery"), r = r ? "" + _config2.default.API_HOST + r : _config2.default.API_HOST + "/choice_lottery?size=4", 
                e.abrupt("return", (0, _request.superRequest)({
                    url: r,
                    method: "GET"
                }, {
                    retry: 1
                }));

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _request = require("./../libs/request.js");