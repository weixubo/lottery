function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _analyse = require("./../../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _tools = require("./../../utils/tools.js"), systemInfo = (0, 
_tools.getSystemInfo)();

Component({
    data: {
        imageStyle: "width: 100%; height: " + systemInfo.windowWidth / 2 + "px;",
        countWidth: 0,
        descWidth: 0,
        shopPrize: 0,
        certificateGuideBanner: !1
    },
    properties: {
        item: {
            type: Object,
            value: null
        }
    },
    methods: {
        goToHomePage: function() {
            var e = this.properties.item.initiator;
            e.enable_user_page && wx.navigateTo({
                url: "/pages/uncommonly/pages/homepage?id=" + e.id
            });
        },
        certificateGuideDialog: function() {
            this.setData({
                certificateGuideBanner: !0
            });
        },
        goToGuide: function() {
            wx.navigateTo({
                url: "/pages/lottery/pages/certificate"
            });
        },
        certificateBannerClose: function() {
            this.setData({
                certificateGuideBanner: !1
            });
        },
        goToMinaApp: function() {
            var e = this.properties.item;
            (0, _analyse2.default)("detail_sponsormina", {
                id: e.id
            }), "wx01bb1ef166cd3f4e" === e.sponsor.appid && wx.navigateTo({
                url: e.sponsor.path
            });
        }
    },
    ready: function() {
        var e = wx.createSelectorQuery().in(this);
        e.select(".gpc-3-desc").boundingClientRect(function(e) {
            e && this.setData({
                descWidth: e.width - 38
            });
        }.bind(this)).exec(), e.select(".gpc-3-desc-count").boundingClientRect(function(e) {
            e && this.setData({
                countWidth: e.width
            });
        }.bind(this)).exec(), e.select(".shop_prize").boundingClientRect(function(e) {
            e && this.setData({
                shopPrize: e.width + 10
            });
        }.bind(this)).exec();
    }
});