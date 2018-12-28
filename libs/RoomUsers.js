function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(t, s.key, s);
        }
    }
    return function(e, i, s) {
        return i && t(e.prototype, i), s && t(e, s), e;
    };
}(), _lodash = require("./../npm/lodash.findindex/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.indexof/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _lodash5 = require("./../npm/lodash.concat/index.js"), _lodash6 = _interopRequireDefault(_lodash5), _lodash7 = require("./../npm/lodash.filter/index.js"), _lodash8 = _interopRequireDefault(_lodash7), RoomUsers = function() {
    function t(e, i, s, r, a, n, h) {
        _classCallCheck(this, t), this.ctx = e, this.users = [], this.temp = [], this.width = i, 
        this.height = s, this.activityRadius = r, this.picRadius = a, this.layer = 0, this.relativeArr = [], 
        this.relativeFlag = 0, this.count = 0, this.maxRenderCount = n, this.isAndroid = h, 
        this.lastRenderTime = 0;
    }
    return _createClass(t, [ {
        key: "randomAbsolutePoint",
        value: function() {
            var t = this.width - this.activityRadius, e = this.height - 2 * this.activityRadius;
            return {
                x: parseInt(Math.random() * t),
                y: parseInt(Math.random() * e)
            };
        }
    }, {
        key: "randomRelativePoint",
        value: function(t) {
            var e = 2 * this.activityRadius, i = Math.random() * (2 * e), s = parseInt(i + t.x - e), r = Math.random() - .5 > 0 ? 1 : -1;
            return {
                x: s,
                y: parseInt(Math.sqrt(e * e - (t.x - s) * (t.x - s))) * r + t.y
            };
        }
    }, {
        key: "testOverlay",
        value: function(t, e) {
            var i = Math.abs(t.x - e.x), s = Math.abs(t.y - e.y);
            return !(Math.sqrt(i * i + s * s) >= 2 * this.activityRadius);
        }
    }, {
        key: "testAvailable",
        value: function(t, e) {
            if (e.x < 0 || e.x > this.width || e.y < 0 || e.y > this.height) return !1;
            for (var i = (0, _lodash6.default)(t), s = !0; i.length > 0; ) {
                var r = i.pop()._point;
                if (this.testOverlay(r, e)) {
                    s = !1;
                    break;
                }
            }
            return s;
        }
    }, {
        key: "randomPoint",
        value: function() {
            for (var t = this, e = null, i = (0, _lodash8.default)(this.users, function(e) {
                return e._layer === t.layer;
            }), s = this.relativeArr; this.count <= 200; ) {
                if (this.relativeFlag) if (s.length > 0) {
                    var r = s.pop();
                    e = this.randomRelativePoint(r), this.relativeFlag = 1;
                } else this.relativeFlag = 0, this.count = 0; else e = this.randomAbsolutePoint();
                if (e && this.testAvailable(i, e)) {
                    this.count = 0, this.relativeFlag = !this.relativeFlag;
                    break;
                }
                e && (this.count = this.count + 1);
            }
            return this.count > 200 && (this.layer++, this.relativeArr = [], this.count = 0, 
            this.relativeFlag = 0, e = this.randomAbsolutePoint()), this.relativeArr.push(e), 
            e;
        }
    }, {
        key: "add",
        value: function(t) {
            if (!((0, _lodash2.default)(this.temp, function(e) {
                return e.id === t.id;
            }) > -1)) {
                var e = (0, _lodash2.default)(this.users, function(e) {
                    return e.id === t.id;
                });
                if (e > -1) return this.users[e]._state = "toShow", void (this.timer || this.refresh());
                this.temp.push(t), this.temp.length > this.maxRenderCount && this.temp.shift(), 
                this.timer || this.refresh();
            }
        }
    }, {
        key: "refresh",
        value: function() {
            var t = this;
            this.timer && (clearTimeout(this.timer), this.timer = null), this.lastRenderTime = new Date().getTime();
            var e = this.temp.splice(0, 3), i = e.length;
            if (0 === i) return this.ctx.users = this.users, void this.ctx.$apply();
            if (e.forEach(function(e) {
                var i = t.randomPoint();
                e._point = i, e._state = "toShow", e._layer = t.layer, t.users.push(e);
            }), this.users = this.users.filter(function(t) {
                return "toShow" === t._state;
            }), this.users.length > this.maxRenderCount) for (var s = this.users.length - this.maxRenderCount, r = 0; r < s; r++) this.users[r]._state = "toHide";
            var a = this.users[this.users.length - 1]._layer, n = [ 1, .9, .8, .5 ];
            this.isAndroid && (n = [ 1, .9, .8, .5 ]), this.users.forEach(function(t) {
                var e = n[a - t._layer];
                e || (e = .1), t._opacity = e;
            });
            var h = this.users.filter(function(t) {
                return "toShow" === t._state;
            }).length;
            h < 30 && (this.ctx.livingUserCount = h), console.log("refresh", i, this.users.length, this.temp.length, e), 
            this.ctx.users = this.users, this.ctx.$apply(), this.timer = setTimeout(function() {
                t.refresh();
            }, Math.max(250 * i / 3), 40);
        }
    }, {
        key: "remove",
        value: function(t) {
            for (var e = this.users.length, i = 0; i < e; i++) if (t.id === this.users[i].id) {
                this.users[i]._state = "toHide";
                break;
            }
            this.timer || this.refresh(), console.log("remove room user: ", t);
        }
    }, {
        key: "checkOnline",
        value: function(t) {
            var e = (0, _lodash4.default)(this.users, function(e) {
                return console.log(t, e.id), e.id === t && "toHide" !== e._state;
            });
            return console.log(e), -1 !== e;
        }
    }, {
        key: "clear",
        value: function() {
            this.temp = [], this.users = [], this.layer = 0, this.count = 0, this.lastRenderTime = 0, 
            this.timer = null, console.log("clear");
        }
    }, {
        key: "getOnlineUsers",
        value: function() {
            return this.users.filter(function(t) {
                return "toHide" !== t._state;
            });
        }
    } ]), t;
}();

exports.default = RoomUsers;