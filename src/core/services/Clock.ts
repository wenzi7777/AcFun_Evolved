import Logger from "../api/Logger";
import I18n from "../api/I18n";

class Clock implements Service{
    private runtimeDate: Date | null = null;
    private sunriseTime = "06:00";
    private sunsetTime = "18:00";

    public start() {
        Logger.info({message: 'ClockService is starting...'});
        this.runtimeDate = new Date();
    }

    public stop() {
        this.runtimeDate = null;
        Logger.info({message: 'ClockService is stopping...'});
    }

    public now() {
        return this.runtimeDate;
    }

    public getTimestamp() {
        return this.runtimeDate?.getTime()
    }

    public isNight ()  {
        const now = new Date();
        const currentTime = now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0');

        const sunriseDate = new Date(now.toDateString() + ' ' + this.sunriseTime);
        const sunsetDate = new Date(now.toDateString() + ' ' + this.sunsetTime);
        const currentDate = new Date(now.toDateString() + ' ' + currentTime);

        return currentDate >= sunsetDate || currentDate <= sunriseDate;
    };

    public toReadableTime({timestamp}: {timestamp: number}): string {
        const now = this.runtimeDate?.getTime() || Date.now();
        const diffInMs = now - timestamp;
        const diffInSec = diffInMs / 1000;
        const diffInMin = diffInSec / 60;
        const diffInHours = diffInMin / 60;
        const diffInDays = diffInHours / 24;

        if (diffInDays >= 7) {
            // 超过7天，显示完整日期时间
            const date = new Date(timestamp);
            const options: Intl.DateTimeFormatOptions = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            };
            return date.toLocaleString(I18n.getLocate(), options);
        } else if (diffInDays >= 1) {
            // 1天以上，7天以内，显示几天前
            const days = Math.floor(diffInDays);
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (diffInHours >= 1) {
            // 1天以内，显示几小时前
            const hours = Math.floor(diffInHours);
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else {
            return I18n.t({key: 'just-now'}); // 如果时间差小于1小时，你可以选择显示 "Just now" 或其他信息
        }
    }


}

export default new Clock();