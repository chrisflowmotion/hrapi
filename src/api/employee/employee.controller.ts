import { Request, Response } from "express";

export const getEmployees = (req: Request, res: Response) => {
    res.send('All employees here');
}

export const getEmployee = (req: Request, res: Response) => {
    res.send('Employee ' + req.params.id);
}