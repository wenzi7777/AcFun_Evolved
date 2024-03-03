export const getTimestamp = () => {
    return new Date().getTime()
}

export const getIsoTime = () => {
    return new Date().toISOString();
}

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