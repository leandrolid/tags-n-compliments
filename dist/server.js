"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
var API_PORT = process.env.PORT || 3000;
api_1.api.listen(API_PORT, function () {
    console.log('server running');
    // console.log('migrations', process.env.MIGRATIONS_FOLDER);
    // console.log('entities', process.env.ENTITIES_FOLDER);
    // console.log('path/url', process.env.DB_PATH);
});
