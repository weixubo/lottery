function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var s = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (s[a] = e[a]);
    return s.default = e, s;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _tools = require("./../../../utils/tools.js"), _analyse = require("./../../../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _Badge = require("./../../../libs/Badge.js"), Badge = _interopRequireWildcard(_Badge), _lodash = require("./../../../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash);

Page({
    data: {
        navigationTitle: "更多",
        showBadge: !1
    },
    goToQuestion: function() {
        (0, _analyse2.default)("my_instruction"), wx.navigateTo({
            url: "/pages/uncommonly/pages/question"
        });
    },
    goToFeedbackManager: function() {
        Badge.showed((0, _lodash2.default)(this, "$parent.globalData.profile.new_complaint_message", ""), "more"), 
        this.showBadge = !1, wx.navigateTo({
            url: "/pages/feedback/pages/manager"
        });
    },
    goToAccount: function() {
        wx.navigateTo({
            url: "/pages/uncommonly/pages/account"
        });
    },
    addressManager: function() {
        var e = this;
        (0, _analyse2.default)("my_address"), wx.getSetting({
            success: function(s) {
                s.authSetting["scope.address"] ? wx.chooseAddress({
                    success: function(s) {
                        delete s.errMsg, e.saveAddress(s);
                    }
                }) : wx.authorize({
                    scope: "scope.address",
                    success: function() {
                        wx.chooseAddress({
                            success: function(s) {
                                delete s.errMsg, e.saveAddress(s);
                            }
                        });
                    },
                    fail: function() {
                        wx.showModal({
                            title: "提示",
                            content: "需要获取您的收货地址信息，请到小程序设置页面打开授权",
                            success: function(s) {
                                s.confirm && wx.openSetting({
                                    success: function(s) {
                                        s.authSetting["scope.address"] && wx.chooseAddress({
                                            success: function(s) {
                                                delete s.errMsg, e.saveAddress(s);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onLoad: function() {
        var e = Badge.needShow((0, _lodash2.default)(this, "$parent.globalData.profile.new_complaint_message", ""), "more");
        this.setData({
            showBadge: e
        });
    }
});