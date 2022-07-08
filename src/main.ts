import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./api/routes";
import logger from "./api/middlewares/logger.middleware";
import * as dbConnection from './api/utils/mysql.connector';
import { init as jwtInit } from './api/utils/jwt.utils';
import { generateToken, Payload } from "./api/utils/jwt.utils";
import { ACCESS } from './api/middlewares/auth.middleware'

dotenv.config();

// Load databse info from env variables
dbConnection.init();

// Load the token key (so we can sign and verify JWTs)
jwtInit();

const app = express()
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(helmet())
    .use(cors())
    .use(logger)
    .use('/api/', routes);

if (process.env.NODE_ENV !== 'production') {
    /**
     * Create the test payload you want here. The appropriate JWT will be logged to
     * the console
     */
    const payload: Payload = {
        username: 'Chris',
        accessTypes: [
            ACCESS.USERS_ALL,
            ACCESS.USERS_CHANGE_OWN_PASSWORD,
            ACCESS.USERS_RESET_PASSWORD,
            ACCESS.USERS_GRANT_PRIVILEGES,
            ACCESS.USERS_REVOKE_PRIVILEGES,

            ACCESS.EMPLOYEES_ALL,
            ACCESS.EMPLOYEES_GET,
            ACCESS.EMPLOYEES_NEW,
            ACCESS.EMPLOYEES_DELETE,
            ACCESS.EMPLOYEES_UPDATE
        ]
    };
    // tslint:disable:no-console
    console.log('JWT', generateToken(payload));
}

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`H-rapi listening on port ${PORT}`);
});