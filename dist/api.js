"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
require("reflect-metadata");
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importStar(require("express"));
require("express-async-errors");
var database_1 = require("./database");
var routes_1 = require("./routes");
var api = express_1.default();
exports.api = api;
dotenv_1.default.config({
    path: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env.test',
});
database_1.connection();
api.use(express_1.json());
api.use(routes_1.router);
api.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({
            type: err.name,
            error: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
