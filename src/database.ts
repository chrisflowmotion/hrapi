import { createPool, Pool } from "mysql";

let pool: Pool;

export const init = () => {
    try {
        pool = createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        // tslint:disable-next-line:no-console
        console.log("MySQL connection pool created");
    }
    catch (error) {
        // tslint:disable-next-line:no-console
        console.error('Failed to initialise pool');
    }
}

export const execute = <T>(query: string, params: string[] | object): Promise<T> => {
    try {
        if (!pool) throw new Error('Connection pool not created');

        return new Promise<T>((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error) reject(error);
                else resolve(results);
            });
        });
    }
    catch (error) {
        throw new Error('QUERY FAILED: ' + query);
    }
}