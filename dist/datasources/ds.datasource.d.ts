import { juggler } from '@loopback/repository';
export declare class DsDataSource extends juggler.DataSource {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        localStorage: string;
        file: string;
    };
    constructor(dsConfig?: object);
}
