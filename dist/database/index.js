"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
// const DATABASE = path.join(__dirname, 'tags_n_comliments.sqlite');
// console.log(JS);
// console.log(TS);
typeorm_1.createConnection()
    .then(function (res) {
    console.log('db.connected:', res.isConnected);
    // console.log('entities:', process.env.ENTITIES_FOLDER);
})
    .catch(function (err) {
    throw new Error(err.message);
});
