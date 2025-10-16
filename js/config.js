// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    "hongniuzy2Source": {
        "api": "http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8",
        "name": "紅牛資源",
        "adult": false
    },
    "lziSource": {
        "api": "http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8",
        "name": "量子資源",
        "adult": false
    },
    "openMovieSource": {
        "api": "http://vod-demo.onrender.com/pubdovod.php",
        "name": "開放電影",
        "adult": false
    },
    "highQualityResourceSource": {
        "api": "http://api.1080zyku.com/inc/api.php/provide/vod",
        "name": "优质资源库",
        "adult": false
    },
    "39MovieSource": {
        "api": "http://39kan.com/api.php/provide/vod",
        "name": "39影視",
        "adult": false
    },
    "paradiseResourceSource": {
        "api": "http://vipmv.cc/api.php/provide/vod",
        "name": "天堂资源",
        "adult": false
    },
    "lohResourceSource": {
        "api": "http://lehootv.com/api.php/provide/vod",
        "name": "乐活影视",
        "adult": false
    },
    "chinatownSource1": {
        "api": "http://tangrenjie.tv/api.php/provide/vod",
        "name": "唐人街",
        "adult": false
    },
    "kudianResourceSource1": {
        "api": "http://api.kuapi.cc/api.php/provide/vod",
        "name": "酷点资源",
        "adult": false
    },
    "wolongResourceSource1": {
        "api": "http://collect.wolongzyw.com/api.php/provide/vod",
        "name": "卧龙资源",
        "adult": false
    },
    "kudianResourceSource2": {
        "api": "http://kudian10.com/api.php/provide/vod",
        "name": "酷点资源",
        "adult": false
    },
    "chinatownSource2": {
        "api": "http://tangrenjie.tv/api.php/provide/vod/at/xm",
        "name": "唐人街",
        "adult": false
    },
    "forestResourceSource": {
        "api": "http://slapibf.com/api.php/provide/vod",
        "name": "森林资源",
        "adult": false
    },
    "ykResourceNetSource": {
        "api": "http://api.ykapi.net/api.php/provide/vod",
        "name": "影库资源网",
        "adult": false
    },
    "expressResourceSource1": {
        "api": "http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8",
        "name": "快车资源",
        "adult": false
    },
    "tantanResourceSource": {
        "api": "http://apittzy.com/api.php/provide/vod",
        "name": "探探资源",
        "adult": false
    },
    "lightningResourceSource1": {
        "api": "http://sdzyapi.com/api.php/provide/vod/from/sdm3u8",
        "name": "閃電資源",
        "adult": false
    },
    "goldenEagleResourceSource": {
        "api": "http://jyzyapi.com/provide/vod/from/jinyingm3u8",
        "name": "金鹰资源",
        "adult": false
    },
    "lightSpeedResourceSource": {
        "api": "http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8",
        "name": "光速资源",
        "adult": false
    },
    "oscarResourceNetSource": {
        "api": "http://aosikazy.com/api.php/provide/vod",
        "name": "奥斯卡资源网",
        "adult": false
    },
    "oldDuckResourceSource": {
        "api": "http://api.apilyzy.com/api.php/provide/vod",
        "name": "老鸭资源采集",
        "adult": false
    },
    "ukuResourceSource1": {
        "api": "http://api.ukuapi.com/api.php/provide/vod",
        "name": "U酷资源",
        "adult": false
    },
    "bigDipperResourceSource": {
        "api": "http://m3u8.bdxzyapi.com/api.php/provide/vod",
        "name": "北斗星资源",
        "adult": false
    },
    "cherryBlossomResourceNetSource1": {
        "api": "http://m3u8.apiyhzy.com/api.php/provide/vod",
        "name": "樱花资源网",
        "adult": false
    },
    "kudianResourceSource3": {
        "api": "http://api.kuapi.cc/api.php/provide/vod",
        "name": "酷点资源",
        "adult": false
    },
    "lightningResourceSource2": {
        "api": "http://sdzyapi.com/api.php/provide/vod",
        "name": "闪电资源",
        "adult": false
    },
    "fastResourceSource1": {
        "api": "http://feisuzy.com/api.php/provide/vod",
        "name": "飞速资源",
        "adult": false
    },
    "kuaiboResourceSource": {
        "api": "http://www.kuaibozy.com/api.php/provide/vod",
        "name": "快播资源",
        "adult": false
    },
    "baiduResourceSource1": {
        "api": "http://api.apibdzy.com/api.php/provide/vod",
        "name": "百度资源",
        "adult": false
    },
    "aidanMovieSource": {
        "api": "http://lovedan.net/api.php/provide/vod",
        "name": "艾旦影视",
        "adult": false
    },
    "piaohuaMovieSource1": {
        "api": "http://www.zzrhgg.com/api.php/provide/vod",
        "name": "飘花电影",
        "adult": false
    },
    "netizenMovieSource": {
        "api": "http://prinevillesda.org/api.php/provide/vod",
        "name": "网民电影",
        "adult": false
    },
    "silkStockingResourceSource": {
        "api": "http://siwazyw.cc/api.php/provide/vod",
        "name": "丝袜资源",
        "adult": false
    },
    "skyResourceSource": {
        "api": "http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8",
        "name": "天空資源",
        "adult": false
    },
    "overseasWatchResourceSource1": {
        "api": "http://haiwaikan.com/api.php/provide/vod",
        "name": "海外看資源",
        "adult": false
    },
    "overseasWatchVodSource": {
        "api": "https://haiwaikan.com/api.php/provide/vod/",
        "name": "海外看|点播🪜",
        "adult": false
    },
    "360VodSource": {
        "api": "https://360zy.com/api.php/provide/vod/",
        "name": "360|点播",
        "adult": false
    },
    "heimuerVodSource": {
        "api": "https://www.heimuer.tv/api.php/provide/vod",
        "name": "黑木耳|点播",
        "adult": false
    },
    "citongVodSource": {
        "api": "http://ys9.cttv.vip/api.php/provide/vod/",
        "name": "刺桐|点播",
        "adult": false
    },
    "officialVodSource": {
        "api": "http://gwcms.cttv.vip/api.php/provide/vod/",
        "name": "官网|点播",
        "adult": false
    },
    "amateurVodSource": {
        "api": "https://yyff.540734621.xyz/api.php/provide/vod/",
        "name": "业余|点播",
        "adult": false
    },
    "huaweiBarVodSource": {
        "api": "https://hw8.live/api.php/provide/vod/",
        "name": "华为吧|点播",
        "adult": false
    },
    "minionVodSource": {
        "api": "https://iqyi.xiaohuangrentv.com/api.php/provide/vod/",
        "name": "小黄人|点播",
        "adult": false
    },
    "niuniuVodSource": {
        "api": "https://api.niuniuzy.me/api.php/provide/vod/",
        "name": "牛牛|点播",
        "adult": false
    },
    "yayaVodSource": {
        "api": "https://cj.yayazy.net/api.php/provide/vod/",
        "name": "丫丫|点播",
        "adult": false
    },
    "ukuVodSource": {
        "api": "https://api.ukuapi.com/api.php/provide/vod/",
        "name": "U酷|点播",
        "adult": false
    },
    "luxuryVodSource": {
        "api": "https://hhzyapi.com/api.php/provide/vod",
        "name": "豪华|点播",
        "adult": false
    },
    "speedVodSource": {
        "api": "https://jszyapi.com/api.php/provide/vod",
        "name": "极速|点播",
        "adult": false
    },
    "49VodSource": {
        "api": "https://49zyw.com/api.php/provide/vod/",
        "name": "四九|点播",
        "adult": false
    },
    "sonyVodSource": {
        "api": "https://suoniapi.com/api.php/provide/vod/",
        "name": "索尼|点播",
        "adult": false
    },
    "ikunVodSource": {
        "api": "https://ikunzyapi.com/api.php/provide/vod/",
        "name": "ikun|点播",
        "adult": false
    },
    "extraordinaryVodSource": {
        "api": "http://cj.ffzyapi.com/api.php/provide/vod/",
        "name": "非凡|点播",
        "adult": false
    },
    "quantumVodSource": {
        "api": "https://cj.lziapi.com/api.php/provide/vod/",
        "name": "量子|点播",
        "adult": false
    },
    "stormVodSource": {
        "api": "https://bfzyapi.com/api.php/provide/vod/",
        "name": "暴风|点播",
        "adult": false
    },
    "redBullVodSource": {
        "api": "https://www.hongniuzy2.com/api.php/provide/vod/",
        "name": "红牛|点播",
        "adult": false
    },
    "fastResourceSource2": {
        "api": "https://www.feisuzyapi.com/api.php/provide/vod/",
        "name": "飞速|点播",
        "adult": false
    },
    "quickLookVodSource": {
        "api": "https://www.kuaikan-api.com/api.php/provide/vod/",
        "name": "快看|点播",
        "adult": false
    },
    "bearPawVodSource": {
        "api": "https://xzcjz.com/api.php/provide/vod/",
        "name": "熊掌|点播",
        "adult": false
    },
    "expressResourceSource2": {
        "api": "https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/",
        "name": "快车|点播",
        "adult": false
    },
    "lightningResourceSource3": {
        "api": "http://sdzyapi.com/api.php/provide/vod/",
        "name": "闪电|点播",
        "adult": false
    },
    "cherryBlossomResourceNetSource2": {
        "api": "https://m3u8.apiyhzy.com/api.php/provide/vod/",
        "name": "樱花|点播",
        "adult": false
    },
    "wolongResourceSource2": {
        "api": "https://collect.wolongzyw.com/api.php/provide/vod/",
        "name": "卧龙|点播",
        "adult": false
    },
    "piaohuaMovieSource2": {
        "api": "http://www.ahjiuman.com/api.php/provide/vod/at/json",
        "name": "飘花|点播",
        "adult": false
    },
    "tianyiVodSource": {
        "api": "https://www.911ysw.top/tianyi.php/provide/vod/",
        "name": "天翼|点播",
        "adult": false
    },
    "huyaVodSource": {
        "api": "https://www.huyaapi.com/api.php/provide/vod/",
        "name": "虎牙|点播",
        "adult": false
    },
    "baiduResourceSource2": {
        "api": "https://api.apibdzy.com/api.php/provide/vod/",
        "name": "百度|点播",
        "adult": false
    },
    "piaolingVodSource": {
        "api": "https://p2100.net/api.php/provide/vod/",
        "name": "飘零|点播",
        "adult": false
    },
    "endlessVodSource": {
        "api": "https://api.wujinapi.com/api.php/provide/vod/",
        "name": "无尽|点播",
        "adult": false
    },
    "suboVodSource": {
        "api": "https://subocaiji.com/api.php/provide/vod/",
        "name": "速博|点播",
        "adult": false
    },
    "moduVodSource": {
        "api": "https://caiji.moduapi.cc/api.php/provide/vod/",
        "name": "魔都|点播",
        "adult": false
    },
    "biggestVodSource": {
        "api": "http://zuidazy.me/api.php/provide/vod/",
        "name": "最大|点播",
        "adult": false
    },
    "qihuVodSource": {
        "api": "https://caiji.qhzyapi.com/api.php/provide/vod/",
        "name": "奇虎|点播",
        "adult": false
    },
    "fireFoxVodSource": {
        "api": "https://hhzyapi.com/api.php/provide/vod/",
        "name": "火狐|点播",
        "adult": false
    },
    "sinaVodSource": {
        "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod/",
        "name": "新浪|点播",
        "adult": false
    },
    "fastCloudVodSource": {
        "api": "https://www.kuaiyunzy.com/api.php/provide/vod/",
        "name": "快云|点播",
        "adult": false
    }
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
