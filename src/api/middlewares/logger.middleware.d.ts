import { Request, Response, NextFunction } from 'express';
declare namespace logger {
    function logger(req: Request, res: Response, next: NextFunction): void;
}