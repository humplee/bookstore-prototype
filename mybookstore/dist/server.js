"use strict";
//import errorHandler from "errorhandler";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
/**
 * Error Handler. Provides full stack - remove for production
 */
//app.use(errorHandler());
/**
 * Start Express server.
 */
var server = index_1.default.listen(index_1.default.get("port"), function () {
    console.log("  Press CTRL-C to stop\n");
    console.log(" please run front-end and mongod as well\n");
    console.log("add book at localhost/4000 \n");
});
exports.default = server;
// THIS LINE MUST RUN ON COMMAND!!!      mongod --dbpath=/data
//# sourceMappingURL=server.js.map