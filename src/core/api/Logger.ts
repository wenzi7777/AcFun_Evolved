import Version from "./Version";
import Preferences from "./Preferences";

class Logger {
    private readonly environment: environment;
    private readonly logLevelPriority: { [key: string]: number } = {
        'ERROR': 1,
        'WARN': 2,
        'INFO': 3,
        'DEBUG': 4,
        'SUCCESS': 5,
    };

    constructor() {
        this.environment = Version.getEnvironment();
    }

    private formatMessage({level, message}: { level: string, message: string }): string {
        const timestamp = new Date().toISOString();
        return `%c[${timestamp}] [${level}] ${message}`;
    }

    private getStackTrace(): string {
        const stack = new Error().stack;
        if (!stack) return '';
        return stack.split('\n').slice(3).join('\n');
    }

    private shouldLog(level: string): boolean {
        if (level !== 'ERROR' && level !== 'WARN' && level !== 'INFO' && level !== 'DEBUG' && level !== 'SUCCESS') return true;
        const currentLogLevel = Preferences.getPreference({
            category: 'developer',
            k: 'logLevel'
        }).toUpperCase() || 'ERROR';
        return this.logLevelPriority[level] <= this.logLevelPriority[currentLogLevel];
    }

    private log({level, message}: { level: string, message: string }, cssArray?: any) {
        if (!this.shouldLog(level)) return;

        let formattedMessage = ''

        if (level !== 'ERROR' && level !== 'WARN' && level !== 'INFO' && level !== 'DEBUG' && level !== 'SUCCESS') {
            formattedMessage = `[${level}] ${message}`
        } else {
            formattedMessage = this.formatMessage({level, message});
        }


        if (this.environment === 'Development') {
            console.log(formattedMessage, ...cssArray);
            console.log(this.getStackTrace());
        } else {
            console.log(formattedMessage, ...cssArray);
        }
    }

    public success({message}: { message: string }) {
        this.log({level: 'SUCCESS', message}, ['background: #39c5bb; color: white;']);
    }

    public info({message}: { message: string }) {
        this.log({level: 'INFO', message}, ['background: blue; color: white;']);
    }

    public error({message}: { message: string }) {
        this.log({level: 'ERROR', message}, ['background: #fd4c5d; color: white;']);
    }

    public debug({message}: { message: string }) {
        this.log({level: 'DEBUG', message}, ['background: gray; color: white;']);
    }

    public warn({message}: { message: string }) {
        this.log({level: 'WARN', message}, ['background: tomato; color: white;']);
    }

    public dangerLogWithoutUserPermission({role, message, cssArray}: { role: string, message: string, cssArray?: any }) {
        this.log({level: role, message}, cssArray);
    }

}

export default new Logger();