function GoogleAnalytics(t) {
    this.app = t, this.systemInfo = getSystemInfo(), this.trackers = [], this.appName = "Mini Program", 
    this.appVersion = "unknow", this.log = !0;
    var e = wx.getStorageSync("_ga_cid") || !1;
    e || (e = getUUID(), wx.setStorageSync("_ga_cid", e)), this.cid = e, this.userAgent = buildUserAgentFromSystemInfo(this.systemInfo);
    var i = this.systemInfo.pixelRatio;
    this.sr = param_screen_fix(Math.round(this.systemInfo.windowWidth * i), Math.round(this.systemInfo.windowHeight * i), this.systemInfo), 
    this.vp = [ this.systemInfo.windowWidth, this.systemInfo.windowHeight ].map(function(t) {
        return t;
    }).join("x");
}

function hit_param_fix(t) {
    return String(t).replace(/^&/, "");
}

function Tracker(t, e) {
    this.ga = t, this.trackerServer = "https://www.google-analytics.com", this.hit = {
        tid: e || "",
        cd: ""
    }, this.next_hit = {}, this.sending = !1, this.send_queue = [];
}

function HitBuilder() {
    this.hit = {
        t: "screenview",
        ni: 0
    }, this.custom_dimensions = [], this.custom_metrics = [], this.next_impression_index = 1, 
    this.impression_product_list = {}, this.next_product_index = 1, this.next_promotion_index = 1;
}

function hit_delete_if(t, e, i) {
    t.hit[e] == i && delete t.hit[e];
}

function ScreenViewBuilder() {
    HitBuilder.call(this), this.setHitType("screenview");
}

function EventBuilder() {
    HitBuilder.call(this), this.setHitType("event"), this.setAll({
        ec: "",
        ea: "",
        el: "",
        ev: 0
    });
}

function SocialBuilder() {
    HitBuilder.call(this), this.setHitType("social"), this.setAll({
        sn: "",
        sa: "",
        st: ""
    });
}

function ExceptionBuilder() {
    HitBuilder.call(this), this.setHitType("exception"), this.setAll({
        exd: "",
        exf: 1
    });
}

function TimingBuilder() {
    HitBuilder.call(this), this.setHitType("timing"), this.setAll({
        utc: "",
        utv: "",
        utt: 0,
        utl: ""
    });
}

function Product() {
    this.hit = {};
}

function Promotion() {
    this.hit = {};
}

function ProductAction(t) {
    this.hit = {
        pa: t
    };
}

function CampaignParams() {
    this.params = {}, this.params_map = {
        utm_source: "cs",
        utm_medium: "cm",
        utm_term: "ck",
        utm_content: "cc",
        utm_campaign: "cn",
        gclid: "gclid"
    };
}

function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
        var e = 16 * Math.random() | 0;
        return ("x" == t ? e : 3 & e | 8).toString(16);
    });
}

function buildUserAgentFromSystemInfo(t) {
    var e = t.system.toLowerCase().indexOf("android") > -1, i = !e && -1 == t.model.toLowerCase().indexOf("iphone");
    if (e) return "Mozilla/5.0 (Linux; U; " + t.system + "; " + t.model + " Build/000000) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 Chrome/49.0.0.0 Mobile Safari/537.36 MicroMessenger/" + t.version;
    if (i) {
        var r = t.system.replace(/^.*?([0-9.]+).*?$/, function(t, e) {
            return e;
        }).replace(/\./g, "_");
        return "Mozilla/5.0 (iPad; CPU OS " + r + " like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/10A406 MicroMessenger/" + t.version;
    }
    var r = t.system.replace(/^.*?([0-9.]+).*?$/, function(t, e) {
        return e;
    }).replace(/\./g, "_");
    return "Mozilla/5.0 (iPhone; CPU iPhone OS " + r + " like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 MicroMessenger/" + t.version;
}

function parseUtmParams(t) {
    var e = CampaignParams.parseFromUrl(t), i = e.params_map, r = {};
    for (var o in e.params) r[i[o]] = e.params[o];
    return r;
}

function param_screen_fix(t, e, i) {
    var r = i.system.toLowerCase().indexOf("android") > -1;
    !r && i.model.toLowerCase().indexOf("iphone");
    return [ t, e ].join("x");
}

function getInstance(t) {
    return t = t || {}, t.defaultGoogleAnalyticsInstance || (t.defaultGoogleAnalyticsInstance = new GoogleAnalytics(t)), 
    t.defaultGoogleAnalyticsInstance;
}

GoogleAnalytics.prototype.setAppName = function(t) {
    return this.appName = t, this;
}, GoogleAnalytics.prototype.setAppVersion = function(t) {
    return this.appVersion = t, this;
}, GoogleAnalytics.prototype.getDefaultTracker = function() {
    return this.trackers[0];
}, GoogleAnalytics.prototype.newTracker = function(t) {
    var e = new Tracker(this, t);
    return this.trackers.push(e), e;
}, GoogleAnalytics.prototype.setLog = function(t) {
    return this.log = !!t, this;
}, Tracker.prototype.setTrackerServer = function(t) {
    return this.trackerServer = t, this;
}, Tracker.prototype.get = function(t) {
    return this.hit[hit_param_fix(t)];
}, Tracker.prototype.set = function(t, e) {
    return this.hit[hit_param_fix(t)] = e, this;
}, Tracker.prototype.setAnonymizeIp = function(t) {
    return this.set("aip", t ? 1 : 0);
}, Tracker.prototype.setAppId = function(t) {
    return this.set("aid", t);
}, Tracker.prototype.setAppInstallerId = function(t) {
    return this.set("aiid", t);
}, Tracker.prototype.setAppName = function(t) {
    return this.set("an", t);
}, Tracker.prototype.setAppVersion = function(t) {
    return this.set("av", t);
}, Tracker.prototype.setCampaignParamsOnNextHit = function(t) {
    var e = parseUtmParams(t);
    this.next_hit = {};
    for (var i in e) this.next_hit[i] = e[i];
    return this;
}, Tracker.prototype.setClientId = function(t) {
    return this.set("cid", t);
}, Tracker.prototype.setEncoding = function(t) {
    return this.set("de", t);
}, Tracker.prototype.setLanguage = function(t) {
    return this.set("ul", t);
}, Tracker.prototype.setLocation = function(t) {
    return this.set("geoid", t);
}, Tracker.prototype.setScreenColors = function(t) {
    return this.set("sd", t);
}, Tracker.prototype.setScreenName = function(t) {
    return this.set("cd", t);
}, Tracker.prototype.setScreenResolution = function(t, e) {
    return this.set("sr", [ t, e ].join("x"));
}, Tracker.prototype.setViewportSize = function(t) {
    return this.set("vp", t);
}, Tracker.prototype.send = function(t) {
    return this.send_queue_push(this.ga, t), this;
}, Tracker.prototype.send_queue_push = function(t, e) {
    var i = this, r = {
        v: 1,
        cid: t.cid,
        ds: "app",
        ul: t.systemInfo.language,
        de: "UTF-8",
        sd: "24-bit",
        je: 0,
        an: t.appName,
        av: t.appVersion,
        sr: t.sr,
        vp: t.vp,
        ua: t.userAgent
    };
    for (var o in i.hit) r[o] = i.hit[o];
    for (var o in i.next_hit) r[o] = i.next_hit[o];
    i.next_hit = {};
    for (var o in e) r[o] = e[o];
    this.ga.log && console.log([ "ga.queue.push", r ]), this.send_queue.push([ r, new Date() ]), 
    this._do_send();
}, Tracker.prototype._do_send = function() {
    if (!this.sending) {
        if (this.send_queue.length <= 0) return void (this.sending = !1);
        this.sending = !0;
        for (var t = this, e = []; this.send_queue.length > 0; ) {
            var i = this.send_queue[0], r = i[0];
            r.qt = new Date().getTime() - i[1].getTime(), r.z = Math.floor(2147483648 * Math.random());
            var o = function(t) {
                var e = [];
                for (var i in t) e.push([ encodeURIComponent(i), encodeURIComponent(t[i]) ].join("="));
                return e.join("&");
            }(r), n = e.map(function(t) {
                return t.length;
            }).reduce(function(t, e) {
                return t + e;
            }, 0), s = o.length;
            if ((n + s > 16384 || s > 8192 || e.length >= 20) && e.length > 0) break;
            e.push(o), this.send_queue.shift(), this.ga.log && console.log([ "ga.queue.presend[" + (e.length - 1) + "]", r ]);
        }
        var u = e.join("\r\n"), c = this.trackerServer + "/collect";
        e.length > 1 ? (this.ga.log && console.log([ "ga.queue.send.batch", u ]), c = this.trackerServer + "/batch") : this.ga.log && console.log([ "ga.queue.send.collect", u ]), 
        wx.request({
            url: c,
            data: u,
            method: "POST",
            header: {
                "content-type": "text/plain"
            },
            success: function(e) {
                t.ga.log && console.log([ "ga:success", e ]);
            },
            fail: function(e) {
                t.ga.log && console.log([ "ga:failed", e ]);
            },
            complete: function() {
                t.sending = !1, setTimeout(function() {
                    t._do_send();
                }, 0);
            }
        });
    }
}, HitBuilder.prototype.get = function(t) {
    return this.hit[hit_param_fix(t)];
}, HitBuilder.prototype.set = function(t, e) {
    return this.hit[hit_param_fix(t)] = e, this;
}, HitBuilder.prototype.setAll = function(t) {
    for (var e in t) this.set(e, t[e]);
    return this;
}, HitBuilder.prototype.addImpression = function(t, e) {
    this.impression_product_list[e] || (this.impression_product_list[e] = [ this.next_impression_index, 1 ], 
    this.set("il" + this.next_impression_index + "nm", e), this.next_impression_index++);
    var i = this.impression_product_list[e][0], r = this.impression_product_list[e][1];
    for (var o in t.hit) this.set("il" + i + "pi" + r + o, t.hit[o]);
    return this.impression_product_list[e][1] = r + 1, this;
}, HitBuilder.prototype.addProduct = function(t) {
    var e = this.next_product_index;
    for (var i in t.hit) this.set("pr" + e + i, t.hit[i]);
    return this.next_product_index++, this;
}, HitBuilder.prototype.addPromotion = function(t) {
    var e = this.next_promotion_index;
    for (var i in t.hit) this.set("promo" + e + i, t.hit[i]);
    return this.next_promotion_index++, this;
}, HitBuilder.prototype.setProductAction = function(t) {
    for (var e in t.hit) this.set(e, t.hit[e]);
    return this;
}, HitBuilder.prototype.setPromotionAction = function(t) {
    return this.set("promoa", t);
}, HitBuilder.prototype.setCampaignParamsFromUrl = function(t) {
    var e = parseUtmParams(t);
    return this.setAll(e);
}, HitBuilder.prototype.setCustomDimension = function(t, e) {
    return this.custom_dimensions.push([ t, e ]), this;
}, HitBuilder.prototype.setCustomMetric = function(t, e) {
    return this.custom_metrics.push([ t, e ]), this;
}, HitBuilder.prototype.setNewSession = function() {
    return this.hit.sc = "start", this;
}, HitBuilder.prototype.setEndSession = function() {
    return this.hit.sc = "end", this;
}, HitBuilder.prototype.setNonInteraction = function(t) {
    return this.hit.ni = t ? 1 : 0, this;
}, HitBuilder.prototype.setHitType = function(t) {
    return this.hit.t = t, this;
}, HitBuilder.prototype.build = function() {
    var t, e = this, i = [];
    0 == this.hit.ni && i.push("ni");
    for (var r in this.hit) r.match(/^(cd|cm)\d+$/) && i.push(r);
    i.map(function(t) {
        delete e.hit[t];
    });
    var o = this.custom_dimensions, n = this.custom_metrics;
    for (t = 0; t < o.length; t++) {
        var s = o[t];
        this.hit["cd" + s[0]] = s[1];
    }
    for (t = 0; t < n.length; t++) {
        var u = n[t];
        this.hit["cm" + u[0]] = u[1];
    }
    return this.hit;
}, ScreenViewBuilder.prototype = Object.create(HitBuilder.prototype), ScreenViewBuilder.prototype.constructor = ScreenViewBuilder, 
EventBuilder.prototype = Object.create(HitBuilder.prototype), EventBuilder.prototype.constructor = EventBuilder, 
EventBuilder.prototype.setCategory = function(t) {
    return this.set("ec", t);
}, EventBuilder.prototype.setAction = function(t) {
    return this.set("ea", t);
}, EventBuilder.prototype.setLabel = function(t) {
    return this.set("el", t);
}, EventBuilder.prototype.setValue = function(t) {
    return this.set("ev", t);
}, EventBuilder.prototype.build = function() {
    return hit_delete_if(this, "ev", 0), hit_delete_if(this, "el", ""), HitBuilder.prototype.build.apply(this, arguments);
}, SocialBuilder.prototype = Object.create(HitBuilder.prototype), SocialBuilder.prototype.constructor = SocialBuilder, 
SocialBuilder.prototype.setNetwork = function(t) {
    return this.set("sn", t);
}, SocialBuilder.prototype.setAction = function(t) {
    return this.set("sa", t);
}, SocialBuilder.prototype.setTarget = function(t) {
    return this.set("st", t);
}, SocialBuilder.prototype.build = function() {
    return hit_delete_if(this, "st", ""), HitBuilder.prototype.build.apply(this, arguments);
}, ExceptionBuilder.prototype = Object.create(HitBuilder.prototype), ExceptionBuilder.prototype.constructor = ExceptionBuilder, 
ExceptionBuilder.prototype.setDescription = function(t) {
    return this.set("exd", t);
}, ExceptionBuilder.prototype.setFatal = function(t) {
    return this.set("exf", t ? 1 : 0);
}, TimingBuilder.prototype = Object.create(HitBuilder.prototype), TimingBuilder.prototype.constructor = TimingBuilder, 
TimingBuilder.prototype.setCategory = function(t) {
    return this.set("utc", t);
}, TimingBuilder.prototype.setVariable = function(t) {
    return this.set("utv", t);
}, TimingBuilder.prototype.setValue = function(t) {
    return this.set("utt", t);
}, TimingBuilder.prototype.setLabel = function(t) {
    return this.set("utl", t);
}, TimingBuilder.prototype.build = function() {
    return hit_delete_if(this, "utl", ""), HitBuilder.prototype.build.apply(this, arguments);
}, Product.prototype.setBrand = function(t) {
    return this.hit.br = t, this;
}, Product.prototype.setCategory = function(t) {
    return this.hit.ca = t, this;
}, Product.prototype.setCouponCode = function(t) {
    return this.hit.cc = t, this;
}, Product.prototype.setCustomDimension = function(t, e) {
    return this.hit["cd" + t] = e, this;
}, Product.prototype.setCustomMetric = function(t, e) {
    return this.hit["cm" + t] = e, this;
}, Product.prototype.setId = function(t) {
    return this.hit.id = t, this;
}, Product.prototype.setName = function(t) {
    return this.hit.nm = t, this;
}, Product.prototype.setPosition = function(t) {
    return this.hit.ps = t, this;
}, Product.prototype.setPrice = function(t) {
    return this.hit.pr = t, this;
}, Product.prototype.setQuantity = function(t) {
    return this.hit.qt = t, this;
}, Product.prototype.setVariant = function(t) {
    return this.hit.va = t, this;
}, Promotion.ACTION_CLICK = "click", Promotion.ACTION_VIEW = "view", Promotion.prototype.setCreative = function(t) {
    return this.hit.cr = t, this;
}, Promotion.prototype.setId = function(t) {
    return this.hit.id = t, this;
}, Promotion.prototype.setName = function(t) {
    return this.hit.nm = t, this;
}, Promotion.prototype.setPosition = function(t) {
    return this.hit.ps = t, this;
}, ProductAction.ACTION_ADD = "add", ProductAction.ACTION_CHECKOUT = "checkout", 
ProductAction.ACTION_CHECKOUT_OPTION = "checkout_option", ProductAction.ACTION_CLICK = "click", 
ProductAction.ACTION_DETAIL = "detail", ProductAction.ACTION_PURCHASE = "purchase", 
ProductAction.ACTION_REFUND = "refund", ProductAction.ACTION_REMOVE = "remove", 
ProductAction.prototype.setCheckoutOptions = function(t) {
    return this.hit.col = t, this;
}, ProductAction.prototype.setCheckoutStep = function(t) {
    return this.hit.cos = t, this;
}, ProductAction.prototype.setProductActionList = function(t) {
    return this.hit.pal = t, this;
}, ProductAction.prototype.setProductListSource = function(t) {
    return this.hit.pls = t, this;
}, ProductAction.prototype.setTransactionAffiliation = function(t) {
    return this.hit.ta = t, this;
}, ProductAction.prototype.setTransactionCouponCode = function(t) {
    return this.hit.tcc = t, this;
}, ProductAction.prototype.setTransactionId = function(t) {
    return this.hit.ti = t, this;
}, ProductAction.prototype.setTransactionRevenue = function(t) {
    return this.hit.tr = t, this;
}, ProductAction.prototype.setTransactionShipping = function(t) {
    return this.hit.ts = t, this;
}, ProductAction.prototype.setTransactionTax = function(t) {
    return this.hit.tt = t, this;
}, CampaignParams.prototype.set = function(t, e) {
    return t in this.params_map && (this.params[t] = e), this;
}, CampaignParams.prototype.toUrl = function() {
    var t = [];
    for (var e in this.params) t.push([ encodeURIComponent(e), encodeURIComponent(this.params[e]) ].join("="));
    return "https://example.com?" + t.join("&");
}, CampaignParams.parseFromPageOptions = function(t, e) {
    t = t || {}, e = e || {};
    var i = new CampaignParams();
    for (var r in t) {
        var o = t[r];
        r in e && (r = e[r]), (r.match(/^utm_/) || "gclid" == r) && i.set(r, o);
    }
    return i;
}, CampaignParams.buildFromWeappScene = function(t) {
    var e = {
        1001: "发现栏小程序主入口",
        1005: "顶部搜索框的搜索结果页",
        1006: "发现栏小程序主入口搜索框的搜索结果页",
        1007: "单人聊天会话中的小程序消息卡片",
        1008: "群聊会话中的小程序消息卡片",
        1011: "扫描二维码",
        1012: "长按图片识别二维码",
        1013: "手机相册选取二维码",
        1014: "小程序模版消息",
        1017: "前往体验版的入口页",
        1019: "微信钱包",
        1020: "公众号profile页相关小程序列表",
        1022: "聊天顶部置顶小程序入口",
        1023: "安卓系统桌面图标",
        1024: "小程序profile页",
        1025: "扫描一维码",
        1026: "附近小程序列表",
        1027: "顶部搜索框搜索结果页“使用过的小程序”列表",
        1028: "我的卡包",
        1029: "卡券详情页",
        1030: "自动化测试下打开小程序",
        1031: "长按图片识别一维码",
        1032: "手机相册选取一维码",
        1034: "微信支付完成页",
        1035: "公众号自定义菜单",
        1036: "App 分享消息卡片",
        1037: "小程序打开小程序",
        1038: "从另一个小程序返回",
        1039: "摇电视",
        1042: "添加好友搜索框的搜索结果页",
        1043: "公众号模板消息",
        1044: "带shareTicket的小程序消息卡片",
        1045: "朋友圈广告",
        1046: "朋友圈广告详情页",
        1047: "扫描小程序码",
        1048: "长按图片识别小程序码",
        1049: "手机相册选取小程序码",
        1052: "卡券的适用门店列表",
        1053: "搜一搜的结果页",
        1054: "顶部搜索框小程序快捷入口",
        1056: "音乐播放器菜单",
        1057: "钱包中的银行卡详情页",
        1058: "公众号文章",
        1059: "体验版小程序绑定邀请页",
        1064: "微信连Wifi状态栏",
        1067: "公众号文章广告",
        1068: "附近小程序列表广告",
        1069: "移动应用",
        1071: "钱包中的银行卡列表页",
        1072: "二维码收款页面",
        1073: "客服消息列表下发的小程序消息卡片",
        1074: "公众号会话下发的小程序消息卡片",
        1077: "摇周边",
        1078: "连Wi-Fi成功页",
        1079: "微信游戏中心",
        1081: "客服消息下发的文字链",
        1082: "公众号会话下发的文字链",
        1084: "朋友圈广告原生页",
        1089: "微信聊天主界面下拉",
        1090: "长按小程序右上角菜单唤出最近使用历史",
        1091: "公众号文章商品卡片",
        1092: "城市服务入口",
        1095: "小程序广告组件",
        1096: "聊天记录",
        1097: "微信支付签约页",
        1099: "页面内嵌插件",
        1102: "公众号 profile 页服务预览"
    }, i = new CampaignParams();
    return t in e ? (i.set("utm_source", "小程序场景"), i.set("utm_medium", t + ":" + e[t])) : t && (i.set("utm_source", "小程序场景"), 
    i.set("utm_medium", t + ":")), i;
}, CampaignParams.parseFromUrl = function(t) {
    var e = t.replace(/^[^?]+\?/, ""), i = new CampaignParams(), r = i.params_map;
    return e.split("&").map(function(t) {
        var e = t.split("="), o = decodeURIComponent(e[0]);
        if (2 == e.length && "" !== e[1] && r[o]) {
            var n = decodeURIComponent(e[1]);
            i.set(o, n);
        }
    }), i;
};

var getSystemInfo = function() {
    return "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? wx.getSystemInfoSync() : {
        brand: "unknow",
        screenWidth: 0,
        screenHeight: 0,
        windowWidth: 0,
        windowHeight: 0,
        pixelRatio: 1,
        language: "zh_CN",
        system: "unknow",
        model: "unknow",
        version: "unknow",
        platform: "unknow",
        fontSizeSetting: 0,
        SDKVersion: "unknow"
    };
};

module.exports = {
    GoogleAnalytics: {
        getInstance: getInstance
    },
    HitBuilders: {
        HitBuilder: HitBuilder,
        ScreenViewBuilder: ScreenViewBuilder,
        EventBuilder: EventBuilder,
        SocialBuilder: SocialBuilder,
        ExceptionBuilder: ExceptionBuilder,
        TimingBuilder: TimingBuilder
    },
    Product: Product,
    ProductAction: ProductAction,
    Promotion: Promotion,
    CampaignParams: CampaignParams
};