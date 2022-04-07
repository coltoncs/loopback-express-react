"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.givenNote = exports.setupExpressApplication = void 0;
const testlab_1 = require("@loopback/testlab");
const server_1 = require("../../server");
const note_model_1 = require("../../models/note.model");
async function setupExpressApplication() {
    const server = new server_1.ExpressServer({ rest: (0, testlab_1.givenHttpServerConfig)() });
    await server.boot();
    await server.start();
    const lbApp = server.lbApp;
    const client = (0, testlab_1.supertest)(server.app);
    return { server, client, lbApp };
}
exports.setupExpressApplication = setupExpressApplication;
/**
 * Generate a complete Note object for use with tests.
 * @param  A partial (or complete) Note object.
 */
function givenNote(note) {
    const data = Object.assign({
        title: 'start essay',
        content: 'write thesis',
    }, note);
    return new note_model_1.Note(data);
}
exports.givenNote = givenNote;
//# sourceMappingURL=test-helper.js.map