import Version from "./Version";

class Logger {
    private readonly environment: environment;

    constructor() {
        this.environment = Version.getEnvironment();
    }

    private formatMessage({ level, message }: { level: string, message: string }): string {
        const timestamp = new Date().toISOString();
        return `%c[${timestamp}] [${level}] ${message}`;
    }

    private getStackTrace(): string {
        const stack = new Error().stack;
        if (!stack) return '';
        return stack.split('\n').slice(3).join('\n');
    }

    private log({ level, message }: { level: string, message: string }, css: string) {
        const formattedMessage = this.formatMessage({ level, message });
        if (this.environment === 'Development') {
            console.log(formattedMessage, css);
            console.log(this.getStackTrace());
        } else {
            console.log(formattedMessage, css);
        }
    }

    public success({ message }: { message: string }) {
        this.log({ level: 'SUCCESS', message }, 'background: #39c5bb; color: white;');
    }

    public info({ message }: { message: string }) {
        this.log({ level: 'INFO', message }, 'background: blue; color: white;');
    }

    public error({ message }: { message: string }) {
        this.log({ level: 'ERROR', message }, 'background: #fd4c5d; color: white;');
    }

    public debug({ message }: { message: string }) {
        if (this.environment === 'Development') {
            this.log({ level: 'DEBUG', message }, 'background: gray; color: white;');
        }
    }

    public warn({ message }: { message: string }) {
        this.log({ level: 'WARN', message }, 'background: tomato; color: white;');
    }
}

export default new Logger();