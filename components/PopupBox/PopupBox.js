var _tools = require("./../../utils/tools.js"), systemInfo = (0, _tools.getSystemInfo)();

Component({
    data: {
        popupBoxShow: !1,
        contentStyle: "width: " + (systemInfo.windowWidth - 50) + "px;",
        animate: !1
    },
    properties: {
        showClose: {
            type: Boolean,
            value: !0
        },
        disableClose: {
            type: Boolean,
            value: !1
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