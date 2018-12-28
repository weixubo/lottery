function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, i) {
            function r(a, o) {
                try {
                    var n = e[a](o), s = n.value;
                } catch (t) {
                    return void i(t);
                }
                if (!n.done) return Promise.resolve(s).then(function(t) {
                    r("next", t);
                }, function(t) {
                    r("throw", t);
                });
                t(s);
            }
            return r("next");
        });
    };
}

var _tools = require("./../../utils/tools.js"), _lodash = require("./../../npm/lodash.get/index.js"), _lodash2 = _interopRequireDefault(_lodash), _analyse = require("./../../utils/analyse.js"), _analyse2 = _interopRequireDefault(_analyse), _game = require("./../../services/game.js"), systemInfo = (0, 
_tools.getSystemInfo)(), defaultUser = {
    avatar: "https://cdn.readhub.cn/mina/lottery/icn-waiting-avatar@3x.png",
    nick_name: "待组队",
    showType: "default"
};

Component({
    data: {
        optType: "default",
        guideShow: !1,
        isParticipated: !1,
        joinOptStyle: "",
        groupJoinOptAnimationData: {},
        groupConnectAnimationData: {},
        groupGroupOptAnimationData: {},
        guideAnimationData: {},
        groupConnectStyle: "",
        groupOptStyle: "",
        initiatorGroupLabel: "去组队",
        groupJoinStat: "0",
        groupGuideStyle: "left: " + (systemInfo.windowWidth - 230) / 2 + "px;",
        actionsheetList: [ {
            label: "邀请微信好友组队",
            openType: "share"
        }, {
            label: ""
        }, {
            label: "查看队内好友"
        } ],
        groupUsers: [],
        groupParticipatorConnectStyle: "",
        groupParticipatorOptStyle: "",
        shouldHideShare: !0
    },
    properties: {
        game: {
            type: Object,
            value: null,
            observer: function(t, e) {
                this.refreshView(!!e);
            }
        }
    },
    methods: {
        refreshView: function(t) {
            var e = this.properties.game;
            if (e) {
                var i = this.data, r = i.isParticipated, a = i.optType, o = i.joinOptStyle, n = i.groupConnectStyle, s = i.groupOptStyle, u = i.initiatorGroupLabel, p = i.groupJoinStat, l = i.shouldHideShare, c = i.groupParticipatorConnectStyle, h = i.groupParticipatorOptStyle;
                r || (r = e.is_participator);
                var d = (systemInfo.windowWidth - 110) / 2 - 50;
                a = r ? e.is_initiator || !e.group || this.isGroupInitiator() ? "group-initiator" : "group-participator" : "default", 
                r && "group-participator" === a && !t ? (s = "left: -90px;", c = "width: " + d + "px; left: 35px;", 
                h = "left: " + (systemInfo.windowWidth - 110) / 2 + "px;") : r && !t ? (o = "left: -90px;", 
                n = "width: " + d + "px; left: 35px;", s = "left: " + (systemInfo.windowWidth - 110) / 2 + "px;") : (o = "left: " + (systemInfo.windowWidth - 110) / 2 + "px;", 
                n = "width: " + d + "px; left: " + (systemInfo.windowWidth - 20 - d - 14) + "px;", 
                s = "left: " + (systemInfo.windowWidth - 20) + "px;");
                var f = e.group;
                if (f) {
                    var g = (0, _lodash2.default)(f, "max_user_count", 6), m = (0, _lodash2.default)(f, "users.data", []).length, _ = "继续组队";
                    m < g ? (l = !1, _ = "继续组队") : m === g && (l = !0, _ = "组队已满"), u = _, p = (0, _lodash2.default)(f, "users.data", []).length + "/" + f.max_user_count;
                } else l = !1, u = "去组队", p = "0";
                this.setData({
                    isParticipated: r,
                    optType: a,
                    joinOptStyle: o,
                    groupConnectStyle: n,
                    groupOptStyle: s,
                    initiatorGroupLabel: u,
                    groupJoinStat: p,
                    groupUsers: this.getGroupUsers(),
                    groupParticipatorConnectStyle: c,
                    groupParticipatorOptStyle: h,
                    shouldHideShare: l
                }), t && this.slideGroupOptLeft();
            }
        },
        isGroupInitiator: function() {
            var t = (0, _lodash2.default)(this, "properties.game.group.initiator_id", null), e = wx.getStorageSync("USER_1");
            return !e || t === (0, _lodash2.default)(e, "user_id", "");
        },
        onTouchStart: function(t) {
            this._posX = t.touches[0].clientX;
        },
        onPressMove: function(t) {
            if ((0, _lodash2.default)(this, "data.isParticipated", !1)) {
                var e = t.touches[0].clientX - this._posX;
                0 !== e && (e > 0 ? e > 50 && this.slideGroupOptRight() : e < -50 && this.slideGroupOptLeft());
            }
        },
        slideGroupOptRight: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, i, r, a, o, n, s, u;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if ((0, _lodash2.default)(this, "data.isParticipated", !1)) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (!this.sliding) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return this.sliding = !0, e = (systemInfo.windowWidth - 110) / 2, i = systemInfo.windowWidth / 2 + 55 + 15, 
                        r = wx.createAnimation({}), a = wx.createAnimation({}), o = wx.createAnimation({}), 
                        r.left(e).step({
                            duration: 400
                        }), a.left(i).step({
                            duration: 350,
                            timingFunction: "ease-in-out"
                        }), o.left(systemInfo.windowWidth - 20).step({
                            duration: 200
                        }), n = r.export(), s = a.export(), u = o.export(), this.setData({
                            groupJoinOptAnimationData: n,
                            groupConnectAnimationData: s,
                            groupGroupOptAnimationData: u
                        }), t.next = 19, new Promise(function(t) {
                            setTimeout(t, 400);
                        });

                      case 19:
                        this.sliding = !1;

                      case 20:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }(),
        slideGroupOptLeft: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, i, r, a, o, n, s;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if ((0, _lodash2.default)(this, "data.isParticipated", !1)) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (!this.sliding) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return this.sliding = !0, e = (systemInfo.windowWidth - 110) / 2, i = wx.createAnimation({}), 
                        r = wx.createAnimation({}), a = wx.createAnimation({}), i.left(-90).step({
                            duration: 200
                        }), r.left(35).step({
                            duration: 350,
                            timingFunction: "ease-in-out"
                        }), a.left(e).step({
                            duration: 400
                        }), o = i.export(), n = r.export(), s = a.export(), this.setData({
                            groupJoinOptAnimationData: o,
                            groupConnectAnimationData: n,
                            groupGroupOptAnimationData: s
                        }), t.next = 18, new Promise(function(t) {
                            setTimeout(t, 400);
                        });

                      case 18:
                        this.sliding = !1;

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }(),
        createGroup: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                var i, r, a;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, i = this.properties.game, -2 !== i.audit_state) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return", wx.showModal({
                            title: "提示",
                            content: "因图片或文本内容违规，将不会开奖，请更换图片。如有疑问请联系我们",
                            showCancel: !1
                        }));

                      case 4:
                        if (!this.isCreateGroup) {
                            t.next = 6;
                            break;
                        }
                        return t.abrupt("return");

                      case 6:
                        if (this.isCreateGroup = !0, r = void 0, r = i.groupable ? [ {
                            label: "邀请微信好友组队",
                            openType: "share"
                        }, {
                            label: "生成分享图片组队"
                        }, {
                            label: "查看队内好友"
                        } ] : [ {
                            label: "邀请微信好友组队",
                            openType: "share"
                        }, {
                            label: ""
                        }, {
                            label: "查看队内好友"
                        } ], i.group) {
                            t.next = 16;
                            break;
                        }
                        return t.next = 12, (0, _game.createGroup)(i.id, "");

                      case 12:
                        if (a = t.sent, a.data.id) {
                            t.next = 15;
                            break;
                        }
                        throw new Error("发起组队失败");

                      case 15:
                        i.group = a.data;

                      case 16:
                        this.triggerEvent("sharegroup", {
                            enable: !0,
                            group: i.group,
                            actionsheetList: r
                        }, {
                            bubbles: !0,
                            composed: !0
                        }), this.setData({
                            groupUsers: this.getGroupUsers()
                        }), t.next = 24;
                        break;

                      case 20:
                        t.prev = 20, t.t0 = t.catch(0), console.error(t.t0), wx.showToast({
                            title: t.t0.message,
                            icon: "none"
                        });

                      case 24:
                        return t.prev = 24, this.isCreateGroup = !1, (0, _analyse2.default)("detail_group_invite", {
                            id: this.properties.game.id
                        }, "game_" + this.properties.game.state + "_" + (this.properties.game.is_official ? "pub" : "pri")), 
                        t.finish(24);

                      case 28:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 0, 20, 24, 28 ] ]);
            }));
            return t;
        }(),
        onChoose: function(t) {
            var e = t.detail.item, i = t.detail.index;
            (0, _lodash2.default)(this.properties.game, "is_official", !1) && (0, _analyse2.default)("detail_invite_public", {
                id: this.properties.game.id
            }, "game_" + this.properties.game.state + "_" + (this.properties.game.is_official ? "pub" : "pri")), 
            1 === i ? ((0, _analyse2.default)("detail_invite", {
                source: (0, _lodash2.default)(this.properties.game, "is_official", !1) ? "公共抽奖" : "私人抽奖",
                type: "生成分享图"
            }, "game_" + this.properties.game.state + "_" + (this.properties.game.is_official ? "pub" : "pri")), 
            this.genShareImage()) : 2 === i ? "查看队内好友" === e.label && this.showGroupDetail() : 0 === i && (0, 
            _analyse2.default)("detail_invite", {
                source: (0, _lodash2.default)(this.properties.game, "is_official", !1) ? "公共抽奖" : "私人抽奖",
                type: "邀请微信好友"
            }, "game_" + this.properties.game.state + "_" + (this.properties.game.is_official ? "pub" : "pri"));
        },
        showGroupDetail: function() {
            this.selectComponent("#groupDetailBox").show();
        },
        enableGroupable: function() {
            this.triggerEvent("sharegroup", {
                enable: !0
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        onActionSheetShow: function() {
            this.triggerEvent("sharegroup", {
                enable: !0
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        onActionSheetHide: function() {
            this.triggerEvent("sharegroup", {
                enable: !0
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        genShareImage: function() {
            wx.navigateTo({
                url: "/pages/generateimage?id=" + this.properties.game + "&type=group_share_image"
            });
        },
        getGroupUsers: function() {
            for (var t = (0, _lodash2.default)(this, "properties.game.group.initiator_id", null), e = (0, 
            _lodash2.default)(this, "properties.game.group.max_user_count", 6), i = (0, _lodash2.default)(this, "properties.game.group.users.data", []).map(function(e) {
                return e.id === t ? e.showType = "initiator" : e.showType = "part", e;
            }).sort(function(t, e) {
                var i = 1, r = 1;
                return "initiator" === t.showType && (i = 10), "initiator" === e.showType && (r = 10), 
                r - i;
            }), r = [], a = i.length; a < e; a++) r.push(defaultUser);
            return i.concat(r);
        },
        onJoinSuccess: function() {
            var t = this;
            setTimeout(function() {
                "group-initiator" === t.data.optType && t.showGuide();
            }, 600);
        },
        showGuide: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.setData({
                            guideShow: !0
                        }), e = wx.createAnimation({}), e.opacity(1).step({
                            duration: 500
                        }), this.setData({
                            guideAnimationData: e.export()
                        }), t.next = 6, new Promise(function(t) {
                            setTimeout(t, 3e3);
                        });

                      case 6:
                        return e.opacity(0).step({
                            duration: 200
                        }), this.setData({
                            guideAnimationData: e.export()
                        }), t.next = 10, new Promise(function(t) {
                            setTimeout(t, 200);
                        });

                      case 10:
                        this.setData({
                            guideShow: !1
                        });

                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }
});