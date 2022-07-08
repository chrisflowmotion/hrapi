// tslint:disable:no-console
import { Request, Response, RequestHandler } from "express";
import * as model from "./employee.model";
import * as EmployeeService from "./employee.service";

export const getAllEmployees: RequestHandler = async (req: Request, res: Response) => {
    try {
        const employees = await EmployeeService.getAllEmployees();
        res.status(200).json({ employees });
    }
    catch (error) {
        console.error('[employee.controller][getAllEmployees][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching employees.'
        });
    }
}

// @ts-ignore
export const getEmployee: RequestHandler = async (req: model.IGetEmployeeReq, res: Response) => {
    try {
        const employee = await EmployeeService.getEmployee(req.body.employeeID);
        res.status(200).json({ employee });
    }
    catch (error) {
        console.error('[employee.controller][getEmployee][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching employee' + req.body.employeeID + '.'
        });
    }
};

export const newEmployee: RequestHandler = async (req: model.IAddEmployeeReq, res: Response) => {
    try {
        const result = await EmployeeService.newEmployee(req.body);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[employee.controller][newEmployee][Error] ', error);
        res.status(500).json({
            message: 'There was an error adding a new employee.'
        });
    }
};

// @ts-ignore
export const updateEmployee: RequestHandler = async (req: model.IUpdateEmployeeReq, res: Response) => {
    try {
        const result = await EmployeeService.updateEmployee(req.body);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[employee.controller][updateEmployee][Error] ', error);
        res.status(500).json({
            message: 'There was an error updating employee ' + req.body.id + '.'
        });
    }
};

// @ts-ignore
export const deleteEmployee: RequestHandler = async (req: model.IDeleteEmployeeReq, res: Response) => {
    try {
        const result = await EmployeeService.deleteEmployee(req.body.employeeID);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[employee.controller][updateEmployee][Error] ', error);
        res.status(500).json({
            message: 'There was an error updating employee ' + req.body.employeeID + '.'
        });
    }
};