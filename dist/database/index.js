"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
// const DATABASE = path.join(__dirname, 'tags_n_comliments.sqlite');
// console.log(JS);
// console.log(TS);
exports.default = typeorm_1.createConnection()
    .then(function (res) { return console.log('db.connected:', res.isConnected); })
    .catch(function (err) {
    throw new Error(err.message);
});
