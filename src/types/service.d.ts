interface Service {
    start(): Promise<any> | void;
    stop(): Promise<any> | void;
}