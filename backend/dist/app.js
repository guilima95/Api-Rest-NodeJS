"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _database = require('./config/database'); var _database2 = _interopRequireDefault(_database);

class App {

  constructor() {
    
    this.express = _express2.default.call(void 0, );
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    _mongoose2.default.connect(_database2.default.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    });
  }

  middlewares() {
    this.express.use(_express2.default.json());
  }

  routes() {
    this.express.use(_routes2.default);
  }
}

exports. default = new App().express;