function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, i) {
                try {
                    var o = t[n](i), u = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(u);
            }
            return a("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.GameManager = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _game = require("./../services/game.js"), GameService = _interopRequireWildcard(_game), _ListManager2 = require("./ListManager.js"), _ListManager3 = _interopRequireDefault(_ListManager2), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.find/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), _tools = require("./../utils/tools.js"), _currency = require("./../npm/currency.js/dist/currency.min.js"), _currency2 = _interopRequireDefault(_currency), _JoinedGameCache = require("./JoinedGameCache.js"), GameManager = exports.GameManager = function(e) {
    function t(e) {
        _classCallCheck(this, t);
        var r = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return r.tempData = {}, r.filter = "", r;
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onRequest",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", GameService.getUserGames(t, this.filter));

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "process",
        value: function(e) {}
    }, {
        key: "setFilter",
        value: function(e) {
            this.filter = e || "";
        }
    }, {
        key: "previewGame",
        value: function(e, t) {
            if (!e) return {};
            var r = {
                previewType: t
            };
            try {
                r.shopPrize = (0, _lodash4.default)((0, _lodash2.default)(e, "prizes.data", []), function(e) {
                    return 4 === e.type;
                });
                var a = e.prizes.data[0];
                if (r.sponsor = e.sponsor || (0, _lodash2.default)(a, "extra.sponsor", null), (0, 
                _lodash2.default)(r.sponsor, "appid") && 2 === t && (0, _lodash2.default)(r.sponsor, "name") ? r.canRedirectToMinaApp = !0 : r.canRedirectToMinaApp = !1, 
                e.readable_conditions && e.readable_conditions.length > 0 && (r.readable_conditions = e.readable_conditions), 
                a.auto_increase && (r.supportShareIncreaseCount = !0), e.square_id && (r.square_id = e.square_id, 
                r.square_verified = e.square_verified), e.square && (r.square_id = e.square.square_id, 
                r.square_verified = e.square.verified), r.groupable = !!e.groupable, r.guaranteed = !!e.guaranteed, 
                r.is_official = !!e.is_official, r.joined = e.joined, (0, _JoinedGameCache.checkJoinedGameId)(e.id) && (r.joined = !0), 
                r.prevLottery && (0, _JoinedGameCache.checkJoinedGameId)(r.prevLottery.id) && (r.prevLottery.joined = !0), 
                r.banner = (0, _lodash2.default)(a, "extra.banner", null), r.prizes = e.prizes.data.sort(function(e, t) {
                    return (e.level ? +e.level : 1) - (t.level ? +t.level : 1);
                }).map(function(t) {
                    return t.amount && (t.displayAmount = (0, _currency2.default)(t.amount).multiply(.01).format()), 
                    t.groupable = !!e.groupable, t;
                }), r.prizeImage = r.prizes[0].image, r.prizeImages = r.prizes.reduce(function(e, t) {
                    return t.image && e.push(t.image), e;
                }, []), r.id = e.id, r.state = e.state, r.is_initiator = e.is_initiator, r.is_participator = e.is_participator, 
                r.draw_type = e.draw_type, r.theme = e.theme || "default-theme", "ontime" === e.draw_type) {
                    var n = 0;
                    (0, _lodash2.default)(e, "prizes.data", []).forEach(function(e) {
                        n += e.count;
                    });
                    try {
                        r.winnerRate = this.winnerRate(100 * n / e.min_user_count);
                    } catch (e) {
                        console.error(e), r.winnerRate = "未知";
                    }
                }
                return e.min_user_count && (r.minUserCount = e.min_user_count), e.latest_draw_time && (r.endTime = (0, 
                _tools.displayDatetime)((0, _moment2.default)(e.latest_draw_time)), r.simpleEndTime = (0, 
                _tools.displaySimpleDatetime)((0, _moment2.default)(e.latest_draw_time))), e.finished_at && (r.endTime = (0, 
                _tools.displayDatetime)((0, _moment2.default)(e.finished_at)), r.simpleEndTime = (0, 
                _tools.displaySimpleDatetime)((0, _moment2.default)(e.finished_at))), e.initiator && (r.initiator = e.initiator), 
                e.is_initiator && 2 === e.state && (r.deliveryInfo = {
                    total: (0, _lodash2.default)(e, "contact_users.meta.count", 0),
                    filled: (0, _lodash2.default)(e, "contact_users.meta.filled_count", 0)
                }), e.hideEndTag && (r.hideEndTag = e.hideEndTag), e.square && (r.square = e.square), 
                void 0 !== e.weight && (r.weight = e.weight), r.initiator = e.initiator, r;
            } catch (e) {
                return console.error(e), null;
            }
        }
    }, {
        key: "winnerRate",
        value: function(e) {
            return e < .01 ? e.toFixed(4) : e < 1 ? e.toFixed(2) : Math.floor(e);
        }
    }, {
        key: "isSponsorGame",
        value: function(e) {
            return (0, _lodash2.default)(e, "is_official", !1) || !!(0, _lodash2.default)(e, "prizes.data[0].extra.sponsor", !1);
        }
    }, {
        key: "hasBanner",
        value: function(e) {
            return !!(0, _lodash2.default)(e, "prizes.data[0].extra.banner", !1);
        }
    }, {
        key: "getGroupedGames",
        value: function() {
            var e = this, t = this.getData(), r = [ {
                label: "待开奖",
                games: []
            }, {
                label: "已结束",
                games: []
            } ];
            return t.forEach(function(t) {
                if (0 === t.state || 1 === t.state) r[0].games.push(e.previewGame(t, 1)); else {
                    var a = 4;
                    t.prizes.data.length > 1 && (a = 5), r[1].games.push(e.previewGame(t, a));
                }
            }), console.log(r), r;
        }
    }, {
        key: "getGameById",
        value: function(e) {
            var t = this.getData();
            return (0, _lodash4.default)(t, function(t) {
                return t.id === e;
            });
        }
    }, {
        key: "hideGame",
        value: function(e) {
            this.datas.data = this.datas.data.filter(function(t) {
                return t.id !== e;
            });
        }
    }, {
        key: "editGame",
        value: function(e) {
            this._editGame = e;
        }
    }, {
        key: "getEditGame",
        value: function() {
            return this._editGame;
        }
    }, {
        key: "removeTemp",
        value: function(e) {
            var t = this.tempData[e];
            return t && delete this.tempData[e], t;
        }
    }, {
        key: "temp",
        value: function(e, t, r) {
            var a = this;
            if (!t) return this.tempData[e];
            this.tempData[e] = t, r && setTimeout(function() {
                a.tempData[e] = null;
            }, r);
        }
    }, {
        key: "fetchGame",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, GameService.getGame(t);

                      case 2:
                        if (r = e.sent, !r.errors) {
                            e.next = 7;
                            break;
                        }
                        throw a = new Error(r.errors[0].title || "加载失败"), a.type = "app", a;

                      case 7:
                        if (!r.error) {
                            e.next = 11;
                            break;
                        }
                        throw n = new Error(r.error.message), n.type = "app", n;

                      case 11:
                        return e.abrupt("return", r.data);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "createGame",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = void 0, !t.id) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 4, GameService.updateGame(t);

                      case 4:
                        r = e.sent, e.next = 10;
                        break;

                      case 7:
                        return e.next = 9, GameService.createGame(t);

                      case 9:
                        r = e.sent;

                      case 10:
                        return e.abrupt("return", r);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "joinGame",
        value: function() {
            function e(e, r, a) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, GameService.joinGame(t.id, r, a);

                      case 2:
                        return n = e.sent, e.abrupt("return", n);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "fetchGameResult",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, GameService.getGameResult(t);

                      case 2:
                        return r = e.sent, e.abrupt("return", r.data);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "saveContact",
        value: function() {
            function e(e, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                var a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, GameService.postContact(t, r);

                      case 2:
                        return a = e.sent, e.abrupt("return", a.data);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "manualStart",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, GameService.manualStart(t);

                      case 2:
                        return r = e.sent, e.abrupt("return", r);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_ListManager3.default), gameManager = new GameManager();

exports.default = gameManager;