/**
 * 获取当前时间戳
 * @returns {number} - 时间戳
 */
export const getTimestamp = () => {
    return new Date().getTime()
}

/**
 * 获取当前日期和时间的ISO 8601格式字符串。
 * ISO 8601格式为YYYY-MM-DDTHH:mm:ss.sssZ，其中T分隔日期和时间，Z表示UTC时间。
 *
 * @returns {string} 当前时间的ISO 8601格式字符串。
 */
export const getIsoTime = () => {
    return new Date().toISOString();
}

/**
 * 根据提供的格式字符串，获取当前日期和时间的可读格式字符串。
 * 默认格式为'YYYY-MM-DD HH:mm:ss'。可以通过传入不同的格式字符串来自定义输出格式。
 *
 * @param {string} [format='YYYY-MM-DD HH:mm:ss'] - 日期和时间的格式字符串。支持的占位符包括:
 *                                                      YYYY - 四位数年份
 *                                                      MM - 两位数月份（01-12）
 *                                                      DD - 两位数日期（01-31）
 *                                                      HH - 两位数小时（00-23）
 *                                                      mm - 两位数分钟（00-59）
 *                                                      ss - 两位数秒钟（00-59）
 * @returns {string} 根据指定格式返回的当前日期和时间字符串。
 */
export const getReadableTime = (format = 'YYYY-MM-DD HH:mm:ss') => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return format
        .replace('YYYY', year)
        .replace('MM', month.toString().padStart(2, '0'))
        .replace('DD', day.toString().padStart(2, '0'))
        .replace('HH', hours.toString().padStart(2, '0'))
        .replace('mm', minutes.toString().padStart(2, '0'))
        .replace('ss', seconds.toString().padStart(2, '0'));
}