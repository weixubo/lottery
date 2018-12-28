function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function i(n, a) {
                try {
                    var s = t[n](a), o = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(o);
            }
            return i("next");
        });
    };
}

var _game = require("./../../services/game.js"), GameService = _interopRequireWildcard(_game);

Component({
    data: {
        bgAnimationData: {},
        isParticipated: !1
    },
    properties: {
        game: {
            type: Object,
            value: null,
            observer: function(e) {
                e && e.is_participator !== this.data.isParticipated && this.setData({
                    isParticipated: e.is_participator,
                    bgAnimationData: {}
                });
            }
        }
    },
    methods: {
        joinGame: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, i, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.properties.game.is_participator && !this.data.isParticipated) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (!this.properties.game.square_id || this.properties.game.square_verified) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return", wx.showToast({
                            title: "通过审核前不可参与",
                            icon: "none"
                        }));

                      case 4:
                        if (!this.properties.game.condition_error) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return", wx.showToast({
                            title: this.properties.game.condition_error,
                            icon: "none"
                        }));

                      case 6:
                        if (-2 !== this.properties.game.audit_state) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return", wx.showModal({
                            title: "提示",
                            content: "因图片或文本内容违规，将不会开奖，请更换图片。如有疑问请联系我们",
                            showCancel: !1
                        }));

                      case 8:
                        if (!this.joining) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        return this.joining = !0, e.prev = 11, r = wx.createAnimation({
                            timingFunction: "ease"
                        }), r.scale(1, 1).step({
                            duration: 200
                        }).scale(.9, .9).step({
                            duration: 100
                        }), i = r.export(), this.setData({
                            bgAnimationData: i
                        }), e.next = 18, new Promise(function(e) {
                            setTimeout(e, 300);
                        });

                      case 18:
                        return e.next = 20, GameService.joinGame(this.properties.game.id, t.detail.formId);

                      case 20:
                        n = e.sent, n.errors ? 11004 === n.errors[0].code ? (wx.showToast({
                            title: n.errors[0].message || n.errors[0].title,
                            icon: "none"
                        }), this.triggerEvent("joinerror", {
                            game: this.properties.game
                        }, {
                            bubbles: !0,
                            composed: !0
                        }), this.resetAnimate()) : (wx.showToast({
                            title: n.errors[0].message || n.errors[0].title,
                            icon: "none"
                        }), this.resetAnimate()) : (this.joining = !1, this.setData({
                            isParticipated: !0
                        }), this.triggerEvent("joinsuccess", {
                            game: this.properties.game
                        }, {
                            bubbles: !0,
                            composed: !0
                        })), e.next = 30;
                        break;

                      case 24:
                        e.prev = 24, e.t0 = e.catch(11), console.error(e.t0), wx.showToast({
                            title: e.t0.message,
                            icon: "none"
                        }), this.resetAnimate(), this.triggerEvent("joinerror", {
                            game: this.properties.game
                        }, {
                            bubbles: !0,
                            composed: !0
                        });

                      case 30:
                        return e.prev = 30, this.joining = !1, e.finish(30);

                      case 33:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 11, 24, 30, 33 ] ]);
            }));
            return e;
        }(),
        resetAnimate: function() {
            var e = wx.createAnimation({
                timingFunction: "ease"
            });
            e.scale(0, 0).step({
                duration: 0
            });
            var t = e.export();
            this.setData({
                bgAnimationData: t
            });
        }
    }
});