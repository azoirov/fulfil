import { connect } from "mongoose";
import { MONGO_URI } from "@config";
import express from "express";
import { IRoute } from "@/interfaces/route.interface";
import { errorResponder } from "@middlewares/error.middleware";
import "reflect-metadata";
import cors from "cors";

class App {
  private app: express.Application;
  private port: number;

  constructor(routes: IRoute[]) {
    this.app = express();
    this.port = 3000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.connectToDatabase();
    this.initializeErrorHandling();
  }

  private async connectToDatabase() {
    await connect(MONGO_URI);

    console.log(`=====================================`);
    console.log(`🚀 Connected to Database`);
    console.log(`=====================================`);
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorResponder);
  }

  public run() {
    this.app.listen(this.port, () => {
      console.log(`=====================================`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=====================================`);
    });
  }
}

export default App;
