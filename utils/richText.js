function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function element(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    return new Node({
        name: e,
        attrs: t,
        children: n
    });
}

function text(e) {
    return new Node({
        type: "text",
        text: (0, _lodash2.default)(e)
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Node = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}();

exports.element = element, exports.text = text;

var _lodash = require("./../npm/lodash.escape/index.js"), _lodash2 = _interopRequireDefault(_lodash), _lodash3 = require("./../npm/lodash.get/index.js"), _lodash4 = _interopRequireDefault(_lodash3), _lodash5 = require("./../npm/lodash.findindex/index.js"), _lodash6 = _interopRequireDefault(_lodash5), Node = exports.Node = function() {
    function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1];
        _classCallCheck(this, e), e.isNode(t) && (t = t.toJSON()), e.isNode(n) || (n = null), 
        this.parent = n, this.data = t || {}, this.type = "unknow", this.elementType = "unknow", 
        this.preProcess();
    }
    return _createClass(e, [ {
        key: "preProcess",
        value: function() {
            var t = this;
            "string" == typeof this.data.text ? (this.type = "text", this.elementType = (0, 
            _lodash4.default)(this, "data.name", "text").toLocaleLowerCase()) : "string" == typeof this.data.name && (this.type = "element", 
            this.elementType = (0, _lodash4.default)(this, "data.name", "text").toLocaleLowerCase()), 
            "element" === this.type && (0, _lodash4.default)(this.data, "children", []).forEach(function(n, a, i) {
                n instanceof e || (i[a] = new e(n, t));
            });
        }
    }, {
        key: "nodeType",
        value: function() {
            return this.type;
        }
    }, {
        key: "children",
        value: function() {
            return (0, _lodash4.default)(this, "data.children", []);
        }
    }, {
        key: "toJSON",
        value: function() {
            var t = {};
            for (var n in this.data) if (this.data.hasOwnProperty(n)) {
                var a = this.data[n];
                t[n] = "children" === n && a ? a.map(function(t) {
                    return e.isNode(t) ? t.toJSON() : t;
                }) : a;
            }
            return t;
        }
    }, {
        key: "valid",
        value: function() {
            var e = this.nodeType();
            return "text" === e && "string" == typeof this.data.text || "element" === e && "string" == typeof this.data.name;
        }
    }, {
        key: "_insert",
        value: function(t, n) {
            var a = this.nodeType();
            return "element" !== a ? (console.warn(a + " can not appendChild"), !1) : (e.isNode(t) || (t = new e(t)), 
            t.valid() ? (this.data.children || (this.data.children = []), t.parent && (t.parent.removeChild(t), 
            t.parent = this), this.data.children.slice(n, 0, t), !0) : (console.warn("node not valid"), 
            !1));
        }
    }, {
        key: "_childNodeIndex",
        value: function(e) {
            var t = this.children();
            return (0, _lodash6.default)(t, function(t) {
                return t === e;
            });
        }
    }, {
        key: "insertBefore",
        value: function(e, t) {
            var n = this._childNodeIndex(e);
            return n > -1 && this._insert(t, n), n;
        }
    }, {
        key: "appendChild",
        value: function(e) {
            return this._insert(e, this.children().length);
        }
    }, {
        key: "removeChild",
        value: function(e) {
            var t = this._childNodeIndex(e);
            return t > -1 && (this.data.children.splice(t, 1), e.parent = null), t;
        }
    } ], [ {
        key: "treval",
        value: function(t, n) {
            var a = t.nodeType();
            "text" === a ? n(t) : "element" === a && (n(t), t.children().forEach(function(t) {
                e.treval(t, n);
            }));
        }
    }, {
        key: "isNode",
        value: function(t) {
            return t instanceof e;
        }
    } ]), e;
}();