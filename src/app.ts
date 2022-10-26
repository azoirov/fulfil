import { connect } from "mongoose";
import { MONGO_URI } from "@config";
import express from "express";
import { IRoute } from "@/interfaces/route.interface";
import { errorResponder } from "@middlewares/error.middleware";
import "reflect-metadata";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import docs from "@docs/index";

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
    this.initializeSwagger();
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

  private initializeSwagger() {
    const swaggerDoc = swaggerJsDoc(docs);
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
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
