"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressServer = void 0;
const tslib_1 = require("tslib");
const events_1 = require("events");
const express_1 = tslib_1.__importDefault(require("express"));
const path_1 = tslib_1.__importDefault(require("path"));
const application_1 = require("./application");
class ExpressServer {
    constructor(options = {}) {
        this.app = (0, express_1.default)();
        this.lbApp = new application_1.NoteApplication(options);
        // Expose the front-end assets via Express, not as LB4 route
        this.app.use('/api', this.lbApp.requestHandler);
        // Custom Express routes
        this.app.get('/', function (_req, res) {
            res.sendFile(path_1.default.join(__dirname, '../public/express.html'));
        });
        this.app.get('/hello', function (_req, res) {
            res.send('Hello world!');
        });
        // Serve static files in the public folder
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
    }
    async boot() {
        await this.lbApp.boot();
    }
    async start() {
        var _a, _b;
        await this.lbApp.start();
        const port = (_a = this.lbApp.restServer.config.port) !== null && _a !== void 0 ? _a : 3000;
        const host = (_b = this.lbApp.restServer.config.host) !== null && _b !== void 0 ? _b : '127.0.0.1';
        this.server = this.app.listen(port, host);
        await (0, events_1.once)(this.server, 'listening');
    }
    // For testing purposes
    async stop() {
        if (!this.server)
            return;
        await this.lbApp.stop();
        this.server.close();
        await (0, events_1.once)(this.server, 'close');
        this.server = undefined;
    }
}
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=server.js.map