import {matchUrlPattern} from "./ace";
import {urlChange} from "./supervisor";

// 匹配收藏夹
export const favoriteUrls = [
    /\/\/www\.acfun\.cn\/member\/favourite\/folder\/(\d+)/
]

// 匹配视频播放器
export const videoPlayerUrls = [
    /\/\/www\.acfun\.cn\/v\/(ac\d+)/
]

// 匹配番剧播放器
export const bangumiPlayerUrls = [
    /\/\/www\.acfun\.cn\/bangumi\/(aa\d+)/
]

// 匹配直播播放器
export const livePlayerUrls = [
    /^\/\/live\.acfun\.cn\/live\/(\d+)/
]

// 匹配直播页面
export const liveUrls = [
    /^\/\/live\.acfun\.cn\/?$/
]

// 匹配番剧列表
export const bangumiListUrls = [
    /^\/\/www\.acfun\.cn\/bangumilist$/
]

// 匹配主站及大部分分区
// ！不匹配文章页面！
export const mainSiteUrls = [
    /^https:\/\/www\.acfun\.cn\/$/, // 主站
    /^\/\/www\.acfun\.cn\/v\/list(?!63$|184$|110$|73$|164$|74$|75$)(\d+)\/index\.htm$/, // 主站 ？分区 -> ？ | 排除所有文章页面
]

// 匹配排行榜页面
export const rankingListUrls = [
    /^\/\/www\.acfun\.cn\/rank\/list$/
]

// 匹配面捕助手页面
export const faceCatcherUrls = [
    /^\/\/www\.acfun\.cn\/face-catcher$/
]

// 匹配下载app页面
export const downloadAppUrls = [
    /^\/\/www\.acfun\.cn\/app\/?$/
]

// 匹配个人中心页面
export const memberUrls = [
    /^\/\/www\.acfun\.cn\/member\/?$/
]

// 匹配创作中心页面
export const uploadCenterUrls = [
    /^\/\/member\.acfun\.cn\/?$/
]

// 匹配消息页面
export const messageUrls = [
    /^\/\/message\.acfun\.cn\/?$/
]

// 匹配动态页面
export const feedsUrls = [
    /^\/\/www\.acfun\.cn\/member\/feeds\/?$/
]

// 匹配频道页面
export const channelUrls = [
    /^\/\/www\.acfun\.cn\/u\/(\d+)/
]

export const pageList = {
    "*": [...favoriteUrls, ...videoPlayerUrls, ...bangumiPlayerUrls, ...livePlayerUrls, ...liveUrls, ...bangumiListUrls, ...mainSiteUrls, ...rankingListUrls, ...faceCatcherUrls, ...downloadAppUrls, ...memberUrls, ...uploadCenterUrls, ...messageUrls, ...feedsUrls, ...channelUrls],
    "favorite": favoriteUrls,
    "videoPlayer": videoPlayerUrls,
    "bangumiPlayer": bangumiPlayerUrls,
    "livePlayer": livePlayerUrls,
    "player": [...videoPlayerUrls, ...bangumiPlayerUrls, ...livePlayerUrls],
    "livePage": liveUrls,
    "bangumiList": bangumiListUrls,
    "main": mainSiteUrls,
    "ranking": rankingListUrls,
    "faceCatcher": faceCatcherUrls,
    "downloadApp": downloadAppUrls,
    "member": memberUrls,
    "uploadCenter": uploadCenterUrls,
    "message": messageUrls,
    "feeds": feedsUrls,
    "channel": channelUrls
}
