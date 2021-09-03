"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var typeorm_1 = require("typeorm");
var path_1 = __importDefault(require("path"));
// import dotenv from 'dotenv';
// dotenv.config({
//   path: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env',
// });
// export const connection = (async () => {
//   await createConnection();
//   getConnection('default');
// })();
var JS = path_1.default.join(__dirname, '..', 'entities', '*.js');
var TS = path_1.default.join(__dirname, '..', 'entities', '*.ts');
console.log(JS);
console.log(TS);
var connection = function () {
    typeorm_1.createConnection({
        name: 'default',
        // type: process.env.DB_TYPE ,
        type: process.env.NODE_ENV === 'dev' ? 'sqlite' : 'postgres',
        database: process.env.DB_DATABASE,
        url: process.env.DB_URL,
        migrations: ['migrations/*.ts', 'migrations/*.js'],
        entities: [JS, TS],
    });
};
exports.connection = connection;
try {
    connection();
}
catch (error) {
    throw new Error(error.message);
}
