function _interopRequireWildcard(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e.default = t, e;
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, r) {
            function n(a, s) {
                try {
                    var i = e[a](s), o = i.value;
                } catch (t) {
                    return void r(t);
                }
                if (!i.done) return Promise.resolve(o).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(o);
            }
            return n("next");
        });
    };
}

var _game = require("./../../services/game.js"), GameService = _interopRequireWildcard(_game), _tools = require("./../../utils/tools.js"), systemInfo = (0, 
_tools.getSystemInfo)();

Component({
    data: {
        passwordBgLeftAnimationData: {},
        passwordBgRightAnimationData: {},
        passwordInputAnimationData: {},
        passwordConfirmAnimationData: {},
        isConfirmSuccess: !1
    },
    properties: {
        game: {
            type: Object,
            value: null
        }
    },
    methods: {
        onPasswordChange: function(t) {
            this._password = t.detail.value;
        },
        joinPasswordGame: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                var r, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (r = this.properties.game, !r.square_id || r.square_verified) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return", wx.showToast({
                            title: "通过审核前不可参与",
                            icon: "none"
                        }));

                      case 3:
                        if (!this.condition_error) {
                            t.next = 5;
                            break;
                        }
                        return t.abrupt("return", wx.showToast({
                            title: this.condition_error,
                            icon: "none"
                        }));

                      case 5:
                        if (-2 !== r.audit_state) {
                            t.next = 7;
                            break;
                        }
                        return t.abrupt("return", wx.showModal({
                            title: "提示",
                            content: "因图片或文本内容违规，将不会开奖，请更换图片。如有疑问请联系我们",
                            showCancel: !1
                        }));

                      case 7:
                        if (!this.joining) {
                            t.next = 9;
                            break;
                        }
                        return t.abrupt("return");

                      case 9:
                        return this.joining = !0, t.prev = 10, t.next = 13, GameService.joinGame(r.id, e.detail.formId, this._password);

                      case 13:
                        if (n = t.sent, n.errors) {
                            t.next = 18;
                            break;
                        }
                        return t.abrupt("return", !0);

                      case 18:
                        return "口令不正确" !== n.errors[0].title && wx.showToast({
                            title: n.errors[0].title,
                            icon: "none"
                        }), t.abrupt("return", !1);

                      case 20:
                        t.next = 28;
                        break;

                      case 22:
                        return t.prev = 22, t.t0 = t.catch(10), wx.showToast({
                            title: t.t0.message,
                            icon: "none"
                        }), this.triggerEvent("joinerror", {
                            game: this.properties.game
                        }, {
                            bubbles: !0,
                            composed: !0
                        }), console.error(t.t0), t.abrupt("return", !1);

                      case 28:
                        return t.prev = 28, this.joining = !1, t.finish(28);

                      case 31:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 10, 22, 28, 31 ] ]);
            }));
            return t;
        }(),
        verifyPassword: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                var r, n, a, s, i;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!this.verifyingPassword) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (this.verifyingPassword = !0, r = !1, !this._password) {
                            t.next = 8;
                            break;
                        }
                        return t.next = 7, this.joinPasswordGame(e);

                      case 7:
                        r = t.sent;

                      case 8:
                        if (!r) {
                            t.next = 27;
                            break;
                        }
                        return this.setData({
                            isConfirmSuccess: !0
                        }), t.next = 12, new Promise(function(t) {
                            setTimeout(t, 500);
                        });

                      case 12:
                        return n = wx.createAnimation({
                            duration: 500,
                            timingFunction: "ease"
                        }), n.opacity(0).step(), this.setData({
                            passwordInputAnimationData: n.export()
                        }), t.next = 17, new Promise(function(t) {
                            setTimeout(t, 500);
                        });

                      case 17:
                        return a = wx.createAnimation({
                            duration: 500,
                            timingFunction: "ease"
                        }), s = wx.createAnimation({
                            duration: 500,
                            timingFunction: "ease"
                        }), a.translateX(-(systemInfo.windowWidth / 2 + 50)).step(), s.translateX(systemInfo.windowWidth / 2 + 50).step(), 
                        this.setData({
                            passwordBgRightAnimationData: s.export(),
                            passwordBgLeftAnimationData: a.export()
                        }), t.next = 24, new Promise(function(t) {
                            setTimeout(t, 500);
                        });

                      case 24:
                        this.triggerEvent("joinsuccess", {
                            game: this.properties.game
                        }, {
                            bubbles: !0,
                            composed: !0
                        }), t.next = 34;
                        break;

                      case 27:
                        return wx.showToast({
                            title: "口令不正确",
                            icon: "none"
                        }), i = wx.createAnimation({
                            timingFunction: "ease",
                            duration: 40
                        }), i.translateX(-6).step().translateX(6).step().translateX(-6).step().translateX(6).step().translateX(-6).step().translateX(6).step().translateX(-6).step().translateX(6).step().translateX(-6).step().translateX(0).step(), 
                        this.setData({
                            passwordConfirmAnimationData: i.export()
                        }), t.next = 33, new Promise(function(t) {
                            setTimeout(t, 500);
                        });

                      case 33:
                        this.setData({
                            passwordConfirmAnimationData: wx.createAnimation().export()
                        });

                      case 34:
                        this.verifyingPassword = !1;

                      case 35:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }
});