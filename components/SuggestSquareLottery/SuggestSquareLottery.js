Component({
    properties: {
        item: {
            type: Object,
            value: null
        }
    },
    data: function() {
        return {
            tagWidth: 0,
            shopPrize: 0
        };
    },
    methods: {
        click: function() {
            this.triggerEvent("lotterytap", this.properties.item);
        }
    },
    ready: function() {
        var t = wx.createSelectorQuery().in(this);
        t.select(".tags").boundingClientRect(function(t) {
            t && this.setData({
                tagWidth: t.width
            });
        }.bind(this)).exec(), t.select(".shop_prize").boundingClientRect(function(t) {
            t && this.setData({
                shopPrize: t.width + 10
            });
        }.bind(this)).exec();
    }
});