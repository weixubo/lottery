function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _analyse = require("./../utils/analyse.js"), _FormIdAction = require("./../components/FormIdAction.js"), _FormIdAction2 = _interopRequireDefault(_FormIdAction), _TransactionRecordManager = require("./../libs/TransactionRecordManager.js"), _TransactionRecordManager2 = _interopRequireDefault(_TransactionRecordManager), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "交易记录",
            usingComponents: {
                Layout: "../components/Layout/Layout"
            }
        }, r.data = {
            navigationTitle: "交易记录",
            inited: !1,
            records: [],
            hasMore: !0,
            loading: !1
        }, r.components = {
            FormIdAction: _FormIdAction2.default
        }, r.methods = {
            loadMore: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!this.hasMore || _TransactionRecordManager2.default.isLoading) {
                                e.next = 11;
                                break;
                            }
                            return this.loading = !0, e.prev = 2, e.next = 5, _TransactionRecordManager2.default.load();

                          case 5:
                            return e.prev = 5, this.loading = !1, e.finish(5);

                          case 8:
                            this.records = _TransactionRecordManager2.default.getData(), this.hasMore = !_TransactionRecordManager2.default.isLoadEnd, 
                            this.$apply();

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 2, , 5, 8 ] ]);
                }));
                return e;
            }()
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return (0, _analyse.screenView)("transactionrecord"), this.inited = !1, e.prev = 2, 
                        e.next = 5, this.initPage();

                      case 5:
                        e.next = 10;
                        break;

                      case 7:
                        return e.prev = 7, e.t0 = e.catch(2), e.abrupt("return", this.$invoke("toast", "show", {
                            title: "加载失败",
                            duration: 1e3
                        }).then(function() {
                            _wepy2.default.navigateBack();
                        }));

                      case 10:
                        this.inited = !0, this.$apply();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 2, 7 ] ]);
            }));
            return e;
        }()
    }, {
        key: "initPage",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _TransactionRecordManager2.default.refresh();

                      case 2:
                        this.records = _TransactionRecordManager2.default.getData(), this.hasMore = !_TransactionRecordManager2.default.isLoadEnd;

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            this.inited = !1, this.users = [], this.id = null;
        }
    } ]), t;
}(_wepy2.default.page);

exports.default = Index;