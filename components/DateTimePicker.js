function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment), DateTimePicker = function(e) {
    function t() {
        var e, n, r, i;
        _classCallCheck(this, t);
        for (var a = arguments.length, u = Array(a), o = 0; o < a; o++) u[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        r.props = {
            minuteInterval: Number,
            defaultDetetime: Date
        }, r.data = {
            minutes: [],
            hours: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ],
            stages: [ "上午", "下午" ],
            days: []
        }, r.methods = {
            onDatetimeChange: function(e) {
                var t = e.detail.value;
                if (t.join(" ") === this.value.join(" ")) return !1;
                try {
                    this.datetime = this.genDatetimeFromValue(t), this.$emit("DP_DatetimeChange", this.datetime), 
                    this.$apply();
                } catch (e) {
                    console.error(e);
                }
            },
            selectDatetime: function(e) {
                this.datetime = (0, _moment2.default)(e), this.setData({
                    datetime: this.datetime
                }), this.render(this.datetime), this.$apply();
            }
        }, r.computed = {
            value: function() {
                if (!this.loaded) return [ 0, 0, 0, 0 ];
                var e = this.genValue(this.originDays, this.datetime);
                return this.value = e, e;
            }
        }, i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "genLegalMinutes",
        value: function(e) {
            for (var t = [], n = 0; n < 60; ) t.push(n), n += e;
            return t;
        }
    }, {
        key: "genDays",
        value: function(e, t, n, r) {
            var i = [];
            if (!n || !r) throw new Error("require start and end");
            for (var a = n; a.isSameOrBefore(r); ) i.push(a), a = (0, _moment2.default)(a).add(1, "days");
            return i;
        }
    }, {
        key: "getNearDatetime",
        value: function(e) {
            for (e.add(1, "minutes"); !function(e, t) {
                var n = e.minute();
                return -1 !== t.indexOf(n);
            }(e, this.legalMinutes); ) e.add(1, "minutes");
            return e;
        }
    }, {
        key: "genValue",
        value: function(e, t) {
            if (!e || 0 === e.length) return [ 0, 0, 0 ];
            for (var n = 0, r = 0; r < e.length; r++) if (e[r].isSame(t, "day")) {
                n = r;
                break;
            }
            return [ n, this.getHourIndex(t), this.getMinuteIndex(t) ];
        }
    }, {
        key: "getStageIndex",
        value: function(e) {
            return e.hour() <= 12 ? 0 : 1;
        }
    }, {
        key: "getHourIndex",
        value: function(e) {
            return e.hour();
        }
    }, {
        key: "getMinuteIndex",
        value: function(e) {
            var t = e.minute();
            return this.legalMinutes.indexOf(t);
        }
    }, {
        key: "getHourFromIndex",
        value: function(e, t) {
            return this.hours[t];
        }
    }, {
        key: "getMinuteFromIndex",
        value: function(e) {
            return this.legalMinutes[e];
        }
    }, {
        key: "getDateFromIndex",
        value: function(e) {
            return this.originDays[e];
        }
    }, {
        key: "genDatetimeFromValue",
        value: function(e) {
            var t = this.getDateFromIndex(e[0]);
            t.set("hour", this.getHourFromIndex(void 0, e[1])), t.set("minute", this.getMinuteFromIndex(e[2]));
            var n = t.get("millisecond");
            return t.subtract(n, "milliseconds"), t;
        }
    }, {
        key: "render",
        value: function(e) {
            var t = this.genDays(e, 60, this.start, this.end);
            this.originDays = t, this.days = this.originDays.map(function(e) {
                return e.format("MM月DD日 ddd");
            });
        }
    }, {
        key: "onLoad",
        value: function() {
            this.loaded = !0, this.minuteInterval = this.minuteInterval || 1, this.legalMinutes = this.genLegalMinutes(this.minuteInterval), 
            this.minutes = this.legalMinutes.map(function(e) {
                return e < 10 ? "0" + e : "" + e;
            });
            var e = (0, _moment2.default)();
            this.start = e, this.end = (0, _moment2.default)(e).add(7, "days"), this.datetime = this.getNearDatetime((0, 
            _moment2.default)(this.defaultDetetime || e)), this.render(this.datetime), this.$apply();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = DateTimePicker;