function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    return r.default = e, r;
}

function initTracker(e) {
    return tracker || (tracker = ga.GoogleAnalytics.getInstance(e).setAppName("抽奖助手小程序").setAppVersion("" + _config2.default.VERSION).newTracker("UA-115768895-1"), 
    tracker.setTrackerServer("https://mina-ga.nocode.com"), tracker);
}

function getTracker() {
    return tracker;
}

function screenView(e, r) {
    if (tracker && needTrack) {
        console.log("screenView: " + e), tracker.setScreenName(e);
        var a = new HitBuilders.ScreenViewBuilder();
        r && r.dimensions && r.dimensions.forEach(function(e, r) {
            a = a.setCustomDimension(r + 1, e);
        }), tracker.send(a.build());
    }
}

function pageLoadOptions(e) {
    tracker && needTrack && console.log("pageLoadOptions", e);
}

function appLaunchScene(e) {
    if (console.log("appLaunchScene", e), tracker && needTrack) {
        var r = ga.CampaignParams.buildFromWeappScene(e).toUrl();
        tracker.setCampaignParamsOnNextHit(r);
    }
}

function report(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments[2];
    console.log("report: " + e, r);
    var t = 1, n = "";
    if (tracker && r) {
        n = (0, _lodash2.default)(r).join("_"), console.log("setLabel: " + (0, _lodash2.default)(r).join("_")), 
        t = 1;
        var o = new HitBuilders.EventBuilder().setCategory(e).setAction("click").setValue(t).setLabel(n).build();
        a && (o.cd = a), tracker.send(o);
    }
    console.log("wx report: " + e), wx.reportAnalytics && wx.reportAnalytics(e, r || {});
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initTracker = initTracker, exports.getTracker = getTracker, exports.screenView = screenView, 
exports.pageLoadOptions = pageLoadOptions, exports.appLaunchScene = appLaunchScene, 
exports.default = report;

var _wxappGa = require("./../npm/wxapp-ga/ga.js"), ga = _interopRequireWildcard(_wxappGa), _config = require("./../config.js"), _config2 = _interopRequireDefault(_config), _lodash = require("./../npm/lodash.values/index.js"), _lodash2 = _interopRequireDefault(_lodash), needTrack = !0;

console.log("ga track: " + needTrack);

var HitBuilders = ga.HitBuilders, tracker = void 0;