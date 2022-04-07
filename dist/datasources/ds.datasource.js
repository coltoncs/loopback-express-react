"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.DsDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'ds',
    connector: 'memory',
    localStorage: '',
    file: './data/ds.json',
};
let DsDataSource = class DsDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
DsDataSource.dataSourceName = 'ds';
DsDataSource.defaultConfig = config;
DsDataSource = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.ds', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], DsDataSource);
exports.DsDataSource = DsDataSource;
//# sourceMappingURL=ds.datasource.js.map