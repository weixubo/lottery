function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _lodash = require("./../../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _analyse = require("./../../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _nodesToHtml = require("./../../utils/nodesToHtml.js"), _nodesToHtml2 = _interopRequireDefault(_nodesToHtml);

Component({
    data: {
        mina: null,
        canIUseRichText: wx.canIUse("rich-text"),
        previewContent: null,
        disableWebView: !1
    },
    properties: {
        game: {
            type: Object,
            value: null,
            observer: function(e) {
                var t = (0, _lodash2.default)(e, "sponsor.appid", "") && (0, _lodash2.default)(e, "sponsor.name", ""), a = null, o = (0, 
                _lodash2.default)(e, "content.imageText", "");
                o && (a = "string" != typeof o ? (0, _nodesToHtml2.default)(o) : o), this.setData({
                    mina: t,
                    previewContent: a
                });
            }
        },
        disableImagePreview: {
            type: Boolean,
            value: !1
        },
        disableObserver: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        redirectMina: function() {
            this.properties.game && ((0, _analyse2.default)("detail_content_sponsormina", {
                id: this.properties.game.id
            }), "wx01bb1ef166cd3f4e" === (0, _lodash2.default)(this, "properties.game.sponsor.appid", "") && wx.navigateTo({
                url: this.properties.game.sponsor.path
            }));
        },
        openGZHartical: function() {
            this.setData({
                disableWebView: !0
            }), (0, _analyse2.default)("detail_content_mpblog", {
                id: this.properties.game.id
            });
        },
        copyInfo: function() {
            var e = this;
            wx.setClipboardData && wx.setClipboardData({
                data: this.properties.game.copyable_info.text,
                success: function(t) {
                    (0, _analyse2.default)("detail_copy_area", {
                        id: e.properties.game.id
                    }), wx.showToast({
                        title: "已复制",
                        icon: "none"
                    });
                }
            });
        }
    }
});