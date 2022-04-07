import express from 'express';
import { ApplicationConfig, NoteApplication } from './application';
export { ApplicationConfig };
export declare class ExpressServer {
    readonly app: express.Application;
    readonly lbApp: NoteApplication;
    private server?;
    constructor(options?: ApplicationConfig);
    boot(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
}
