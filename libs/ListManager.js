function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function a(r, s) {
                try {
                    var i = e[r](s), o = i.value;
                } catch (t) {
                    return void n(t);
                }
                if (!i.done) return Promise.resolve(o).then(function(t) {
                    a("next", t);
                }, function(t) {
                    a("throw", t);
                });
                t(o);
            }
            return a("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
import regeneratorRuntime from './../utils/regenerator-runtime/runtime';
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, n, a) {
        return n && t(e.prototype, n), a && t(e, a), e;
    };
}(), _lodash = require("./../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), ListManager = function() {
    function t(e) {
        _classCallCheck(this, t), this.init(e);
    }
    return _createClass(t, [ {
        key: "init",
        value: function(t) {
            t ? (this.datas = t, this.datas.links && this.datas.data && this.datas.links.next && 0 !== this.datas.data.length ? this.isLoadEnd = !1 : this.isLoadEnd = !0) : (this.isLoadEnd = !1, 
            this.datas = {
                data: [],
                meta: {
                    count: 0
                },
                links: {
                    next: ""
                }
            });
        }
    }, {
        key: "onRequest",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "getData",
        value: function() {
            try {
                return this.datas.data;
            } catch (t) {
                return [];
            }
        }
    }, {
        key: "getNextUrl",
        value: function() {
            return (0, _lodash2.default)(this.datas, "links.next");
        }
    }, {
        key: "refresh",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!this.isFreshing) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return", !1);

                      case 2:
                        return this.isFreshing = !0, e = void 0, t.prev = 4, t.next = 7, this.onRequest("", this);

                      case 7:
                        return e = t.sent, 0 !== e.data.length && (0, _lodash2.default)(e, "links.next") ? this.isLoadEnd = !1 : this.isLoadEnd = !0, 
                        this.meta = (0, _lodash2.default)(e, "meta", {}), e.meta && e.meta.count && (this.count = e.meta.count), 
                        this.process(e), this.datas = e, t.abrupt("return", this);

                      case 16:
                        throw t.prev = 16, t.t0 = t.catch(4), t.t0;

                      case 19:
                        return t.prev = 19, this.isFreshing = !1, t.finish(19);

                      case 22:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 4, 16, 19, 22 ] ]);
            }));
            return t;
        }()
    }, {
        key: "load",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (console.log("load"), !this.isLoadEnd && !this.isLoading) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        return this.isLoading = !0, e = void 0, t.prev = 5, t.next = 8, this.onRequest(this.getNextUrl(), this);

                      case 8:
                        e = t.sent, t.next = 15;
                        break;

                      case 11:
                        throw t.prev = 11, t.t0 = t.catch(5), this.isLoading = !1, t.t0;

                      case 15:
                        return console.log("resp", e), this.isLoading = !1, this.meta = (0, _lodash2.default)(e, "meta", {}), 
                        0 !== e.data.length && (0, _lodash2.default)(e, "links.next") ? this.isLoadEnd = !1 : this.isLoadEnd = !0, 
                        e.meta && e.meta.count && (this.count = e.meta.count), this.process(e), e.data = this.datas.data.concat(e.data), 
                        this.datas = e, t.abrupt("return", this);

                      case 24:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 5, 11 ] ]);
            }));
            return t;
        }()
    }, {
        key: "process",
        value: function(t) {}
    } ]), t;
}();

exports.default = ListManager;