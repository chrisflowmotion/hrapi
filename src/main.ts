import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./api/routes";

dotenv.config();

const app = express()
    .use(express.json())
    .use(helmet())
    .use(cors())
    .use('/api/', routes);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`H-rapi listening on port ${PORT}`);
});