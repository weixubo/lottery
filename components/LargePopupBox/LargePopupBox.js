var _tools = require("./../../utils/tools.js"), systemInfo = (0, _tools.getSystemInfo)(), scale = (systemInfo.windowWidth - 10) / 271, heightPos = (systemInfo.screenHeight - 22 - 65) / scale;

(0, _tools.isIphoneX)(systemInfo) && (heightPos = (systemInfo.screenHeight - 22 - 85) / scale);

var contentHeight = Math.ceil((heightPos - 2) * scale), contentWidth = systemInfo.windowWidth - 20;

Component({
    data: {
        popupBoxShow: !1,
        contentStyle: "width: " + contentWidth + "px; height: " + contentHeight + "px;",
        scrollStyle: "height: " + (contentHeight - 32) + "px",
        animate: !1
    },
    properties: {
        showClose: {
            type: Boolean,
            value: !0
        },
        id: {
            type: String,
            value: "default"
        }
    },
    methods: {
        hide: function() {
            this.properties.disableClose || this.data.popupBoxShow && (this.setData({
                popupBoxShow: !1,
                animate: !1
            }), this.triggerEvent("popupboxhide", {
                id: this.properties.id
            }, {
                bubbles: !0,
                composed: !0
            }));
        },
        show: function() {
            var t = this;
            this.data.popupBoxShow || (this.setData({
                popupBoxShow: !0
            }, function() {
                setTimeout(function() {
                    t.setData({
                        animate: !0
                    });
                }, 20);
            }), this.triggerEvent("popupboxshow", {
                id: this.properties.id
            }, {
                bubbles: !0,
                composed: !0
            }));
        }
    }
});