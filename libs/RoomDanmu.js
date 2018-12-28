function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var s = e[a];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(t, s.key, s);
        }
    }
    return function(e, a, s) {
        return a && t(e.prototype, a), s && t(e, s), e;
    };
}(), danmuId = 1, lastIndex = -1, DELAY = 1200, RoomDanmu = function() {
    function t(e, a) {
        _classCallCheck(this, t), this.ctx = e;
        for (var s = [], n = 0; n < a; n++) s.push([]);
        this.stacks = s, this.temp = [], this.stackCount = a;
    }
    return _createClass(t, [ {
        key: "add",
        value: function(t) {
            var e = this, a = Math.floor(Math.random() * this.stackCount);
            a === lastIndex && (0 === a ? a++ : a--), lastIndex = a;
            var s = new Date().getTime();
            t._addTime = s, t.id = danmuId++;
            var n = t.data.msg;
            if (!n) return 0;
            for (var i = 0, r = 0, u = n.length; r < u; r++) /[\u0000-\u00FF]/.test(n[r]) ? i += .5 : i += 1;
            t.data.length = 14 * i, this.temp[a] && s - this.temp[a] < DELAY ? (t.data.showtime = this.temp[a] + DELAY, 
            this.temp[a] = t.data.showtime, this["timer_" + a] && clearTimeout(this["timer_" + a]), 
            this["timer_" + a] = setTimeout(function() {
                e.refresh();
            }, DELAY)) : (this.temp[a] = s, t.data.showtime = s), this.stacks[a].push(t), this.stacks = this.stacks.map(function(t) {
                return t.filter(function(t) {
                    return !(s - t.showtime > 12e3);
                });
            }), this.renderStacks = this.stacks.map(function(t) {
                return t.filter(function(t) {
                    return !(s < t.data.showtime);
                });
            });
        }
    }, {
        key: "refresh",
        value: function() {
            var t = new Date().getTime();
            this.stacks = this.stacks.map(function(e) {
                return e.filter(function(e) {
                    return !(t - e.data.showtime > 12e3);
                });
            }), this.renderStacks = this.stacks.map(function(e) {
                return e.filter(function(e) {
                    return !(t < e.data.showtime);
                });
            }), this.ctx.$apply();
        }
    }, {
        key: "clear",
        value: function() {
            for (var t = [], e = 0; e < this.stackCount; e++) t.push([]);
            this.stacks = t, this.temp = [];
        }
    } ]), t;
}();

exports.default = RoomDanmu;