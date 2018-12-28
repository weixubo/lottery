var _chou = require("./../../services/chou.js");

Component({
    properties: {
        index: {
            type: Number,
            value: -1
        },
        badge: {
            type: Boolean,
            value: !1
        }
    },
    created: function() {
        wx.hideTabBar && wx.hideTabBar();
    },
    methods: {
        goToCreate: function(e) {
            e.detail.formId && (0, _chou.saveFormId)(e.detail.formId, "contacts"), wx.navigateTo({
                url: "/pages/create"
            });
        },
        goToList: function(e) {
            e.detail.formId && (0, _chou.saveFormId)(e.detail.formId, "contacts"), 0 !== this.properties.index && wx.switchTab({
                url: "/pages/index"
            });
        },
        goToProfile: function(e) {
            e.detail.formId && (0, _chou.saveFormId)(e.detail.formId, "contacts"), 1 !== this.properties.index && wx.switchTab({
                url: "/pages/profile"
            });
        }
    }
});