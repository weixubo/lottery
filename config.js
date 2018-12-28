Object.defineProperty(exports, "__esModule", {
    value: !0
});

var API_HOST = "https://lucky.nocode.com", WS_HOST = "wss://lucky-live.nocode.com";

exports.default = {
    API_HOST: API_HOST,
    WS_HOST: WS_HOST,
    SHARE_TITLE: "抽奖助手",
    TENCENT_KEY: "4WIBZ-LPU3P-4GKDD-LLHFE-3F4OF-3AB2C",
    VERSION: "0.4.59",
    RENDER_VERSION: "0.0.1",
    API_VERSION: "v2",
    UPYUN: {
        bucket: "cdn-readhub-me",
        operator: "minalotteryfront",
        getSignatureUrl: API_HOST + "/upyun/signatrue"
    }
};