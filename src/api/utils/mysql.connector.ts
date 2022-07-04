
// tslint:disable:no-console
import { createPool, Pool } from 'mysql2';

let pool: Pool;

export const init = () => {
    try {
        pool = createPool({
            connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10),
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log('DB connection pool created.');
    }
    catch (error) {
        console.error('[mysql.connector][init][Error]: ', error);
        throw new Error('Failed to create connection pool');
    }
};

export const execute = <T>(query: string, params: string[] | object): Promise<T> => {
    try {
        if (!pool) throw new Error('Pool was not created');

        return new Promise<T>((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    // @ts-ignore
                    resolve(results);
                }
            });
        });
    }
    catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed ot execute Query');
    }
}