import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./api/routes";
import logger from "./api/middlewares/logger.middleware";
import * as dbConnection from './api/utils/mysql.connector';

dotenv.config();

dbConnection.init();

const app = express()
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(helmet())
    .use(cors())
    .use(logger)
    .use('/api/', routes);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`H-rapi listening on port ${PORT}`);
});