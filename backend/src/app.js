import express from "express";
import mongoose from "mongoose";
// import bodyParser from "body-parser";
import routes from "./routes";
import databaseConfig from "./config/database";

class App {

  constructor() {

    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
    // this.bodyParser = bodyParser();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then((res) => {
      console.log(`Conectou`);
    }).catch((err) => {
      console.log(`Not Connection ${err}`);
    });
    mongoose.Promise = global.Promise;
  }

  middlewares() {
    this.express.use(express.json());
  }

  // bodyParser() {
  //   this.bodyParser.use(bodyParser.json());
  //   this.bodyParser.use(bodyParser.urlencoded({ extended: false }));
  // }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;