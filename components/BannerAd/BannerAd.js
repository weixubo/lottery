function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _tools = require("./../../utils/tools.js"), _analyse = require("./../../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse);

Component({
    properties: {
        banner: {
            type: Object,
            value: null
        }
    },
    methods: {
        redirect: function() {
            if (this.properties.banner && this.properties.banner.app_id) {
                var e = "unknow";
                try {
                    var t = (0, _tools.currentPages)();
                    e = t[t.length - 1].route.split("/").pop(), "game" === e && (e = "detail");
                } catch (e) {}
                (0, _analyse2.default)(e + "_ad", {
                    id: this.properties.banner.app_id
                }), "wx01bb1ef166cd3f4e" === this.properties.banner.app_id && wx.navigateTo({
                    url: this.properties.banner.app_path
                });
            }
        }
    }
});