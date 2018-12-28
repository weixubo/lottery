Component({
    data: {
        actionSheetStyle: "z-index: -1; opacity: 0;",
        showed: !1
    },
    properties: {
        items: {
            type: Array,
            value: [],
            observer: function(e) {
                this.refresh();
            }
        },
        name: {
            type: String,
            value: "default"
        }
    },
    methods: {
        show: function() {
            this.refresh(!0), this.triggerEvent("actionsheetshow", {
                id: this.properties.name
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        hide: function() {
            this.refresh(!1), this.triggerEvent("actionsheethide", {
                id: this.properties.name
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        choose: function(e) {
            var t = e.currentTarget.dataset.index;
            this.triggerEvent("choose", {
                item: this.properties.items[t],
                index: t
            }), this.triggerEvent("actionsheethide", {
                id: this.properties.name
            }, {
                bubbles: !0,
                composed: !0
            }), this.refresh(!1);
        },
        refresh: function(e) {
            var t = this.properties.items || [], i = t.length, s = "", o = this.data.showed;
            if (void 0 !== e && (o = e), o) s = "bottom: 0px;"; else {
                var r = void 0;
                r = 0 === i ? 100 : 105 + 50 * i + i, s = "bottom: -" + r + "px;";
            }
            this.setData({
                actionSheetStyle: s,
                showed: o
            });
        }
    }
});