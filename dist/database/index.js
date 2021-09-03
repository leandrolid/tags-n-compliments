"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var path_1 = __importDefault(require("path"));
var JS = path_1.default.join(__dirname, '..', 'entities', '*.js');
var TS = path_1.default.join(__dirname, '..', 'entities', '*.ts');
var DATABASE = path_1.default.join(__dirname, 'tags_n_comliments.sqlite');
console.log(JS);
console.log(TS);
exports.default = typeorm_1.createConnection({
    type: 'sqlite',
    database: DATABASE,
    migrations: ['migrations/*.ts', 'migrations/*.js'],
    entities: [JS, TS],
})
    .then(function (test) { return console.log(test); })
    .catch(function (err) {
    throw new Error(err.message);
});
