function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, o) {
                try {
                    var s = t[r](o), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
            }
            return a("next");
        });
    };
}
import regeneratorRuntime from './../../utils/regenerator-runtime/runtime';
var _tools = require("./../../utils/tools.js"), _analyse = require("./../../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), systemInfo = (0, 
_tools.getSystemInfo)();

Component({
    data: {
        isIphoneX: !1,
        isSupportCustomNavigationBar: !1,
        statusBarHeight: null,
        showBack: !1,
        showHome: !1,
        showCancel: !1
    },
    attached: function() {
        var e = null;
        systemInfo.statusBarHeight && (e = systemInfo.statusBarHeight);
        var t = [];
        try {
            t = (0, _tools.currentPages)();
        } catch (e) {}
        var n = t[0] || {
            route: ""
        }, a = t[t.length - 1] || {
            route: ""
        }, r = t.length > 1, o = -1 === [ "pages/index", "pages/profile" ].indexOf(n.route), s = [ "pages/textarea" ].indexOf(a.route) > -1;
        this.setData({
            statusBarHeight: e,
            isIphoneX: (0, _tools.isIphoneX)(systemInfo),
            isSupportCustomNavigationBar: (0, _tools.supportCustomNavigationBar)(systemInfo),
            showBack: r,
            showHome: o,
            showCancel: s
        });
    },
    properties: {
        forceHideGetUserInfo: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: ""
        },
        navigationStyle: {
            type: String,
            value: ""
        },
        backIcon: {
            type: String,
            value: "https://cdn.readhub.cn/mina/lottery/icn_back@3x.png"
        },
        needGetUserInfo: {
            type: Boolean,
            value: !0
        },
        navigationMorePrize: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        getUserInfo: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("getUserInfo:fail auth deny" !== t.detail.errMsg) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        this.triggerEvent("getuserinfo", t.detail);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }(),
        navigateBack: function() {
            wx.navigateBack();
        },
        navigateHome: function() {
            (0, _analyse2.default)("detail_backtoindex"), wx.switchTab({
                url: "/pages/index"
            });
        }
    }
});