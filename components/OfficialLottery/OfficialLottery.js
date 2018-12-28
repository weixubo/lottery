var _tools = require("./../../utils/tools.js"), systemInfo = (0, _tools.getSystemInfo)();

Component({
    data: {
        imageStyle: "border-radius: 4px 4px 0px 0px;width: 100%; height: " + systemInfo.windowWidth / 2 + "px;",
        gpc3ImageStyle: "border-radius: 4px 4px 0px 0px;width: 100%; height: " + (systemInfo.windowWidth - 20) / 2 + "px;"
    },
    properties: {
        item: {
            type: Object,
            value: null
        }
    },
    methods: {
        click: function() {
            this.triggerEvent("lotterytap", this.properties.item);
        }
    }
});