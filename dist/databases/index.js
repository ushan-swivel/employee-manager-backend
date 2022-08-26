"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "connectToDatabase", {
    enumerable: true,
    get: ()=>connectToDatabase
});
const _logger = require("../utils/logger");
const _config = require("../config");
const _mongoose = require("mongoose");
const dbConnection = {
    url: _config.DB_URL
};
const connectToDatabase = ()=>{
    _logger.logger.info('Connecting to Database..');
    if (_config.NODE_ENV !== 'production') {
        (0, _mongoose.set)('debug', true);
    }
    (0, _mongoose.connect)(dbConnection.url);
    _mongoose.connection.on('error', (e)=>{
        _logger.logger.error(e);
    });
    _mongoose.connection.on('open', (e)=>{
        _logger.logger.info('MongoDb Connected');
    });
};

//# sourceMappingURL=index.js.map