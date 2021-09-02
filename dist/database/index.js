"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env',
});
// export const connection = (async () => {
//   await createConnection();
//   getConnection('default');
// })();
exports.default = typeorm_1.createConnection({
    name: 'default',
    // type: process.env.DB_TYPE ,
    type: process.env.NODE_ENV === 'dev' ? 'sqlite' : 'postgres',
    database: process.env.DB_DATABASE,
    url: process.env.DB_URL,
    migrations: ['migrations/*.ts', 'migrations/*.js'],
    entities: [
        path_1.default.join(__dirname, '..', 'entities', '*.js'),
        path_1.default.join(__dirname, '..', 'entities', '*.ts'),
    ],
});
