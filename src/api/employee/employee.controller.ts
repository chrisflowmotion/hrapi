// tslint:disable:no-console
import { Request, Response, RequestHandler } from 'express';
import * as model from './employee.model';
import * as EmployeeService from './employee.service';
import { getTokenUserId } from '../utils/jwt.utils';

export const getAllEmployees: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const employees = await EmployeeService.getAllEmployees();
    res.status(200).json({ employees });
  } catch (error) {
    console.error('[employee.controller][getAllEmployees][Error] ', error);
    res.status(500).json({
      message: 'There was an error fetching employees.',
    });
  }
};

// @ts-ignore
export const getOwnProfile: RequestHandler = async (
  req: model.IGetEmployeeReq,
  res: Response
) => {
  try {
    const myID = getTokenUserId(req.headers.authorization);
    if (myID && typeof myID === 'number') {
      const employee = await EmployeeService.getEmployeeByUserID(myID);
      res.status(200).json({ employee });
      return;
    }

    res.status(200).json({ message: 'Could not get ID from auth token' });
  } catch (error) {
    console.error('[employee.controller][getEmployee][Error] ', error);
    res.status(500).json({
      message: 'There was an error fetching your profile',
    });
  }
};

// @ts-ignore
export const updateOwnProfile: RequestHandler = async (
  req: model.IUpdateEmployee,
  res: Response
) => {
  try {
    // @ts-ignore
    const myID = getTokenUserId(req.headers.authorization);
    if (myID && typeof myID === 'number') {
      // @ts-ignore
      req.body.id = myID;
      // @ts-ignore
      const result = await EmployeeService.updateEmployee(req.body, true);
      res.status(200).json({ result });
      return;
    }
    res.status(200).json({ message: 'Could not get ID from auth token' });
  } catch (error) {
    console.error('[employee.controller][getEmployee][Error] ', error);
    res.status(500).json({
      message: 'There was an error updating your profile',
    });
  }
};

// @ts-ignore
export const getEmployee: RequestHandler = async (
  req: model.IGetEmployeeReq,
  res: Response
) => {
  try {
    const employee = await EmployeeService.getEmployee(req.body.employeeID);
    res.status(200).json({ employee });
  } catch (error) {
    console.error('[employee.controller][getEmployee][Error] ', error);
    res.status(500).json({
      message:
        'There was an error fetching employee' + req.body.employeeID + '.',
    });
  }
};

export const newEmployee: RequestHandler = async (
  req: model.IAddEmployeeReq,
  res: Response
) => {
  try {
    const result = await EmployeeService.newEmployee(req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error('[employee.controller][newEmployee][Error] ', error);
    res.status(500).json({
      message: 'There was an error adding a new employee.',
    });
  }
};

// @ts-ignore
export const updateEmployee: RequestHandler = async (
  req: model.IUpdateEmployeeReq,
  res: Response
) => {
  try {
    const result = await EmployeeService.updateEmployee(req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error('[employee.controller][updateEmployee][Error] ', error);
    res.status(500).json({
      message: 'There was an error updating employee ' + req.body.id + '.',
    });
  }
};

// @ts-ignore
export const deleteEmployee: RequestHandler = async (
  req: model.IDeleteEmployeeReq,
  res: Response
) => {
  try {
    const result = await EmployeeService.deleteEmployee(req.body.employeeID);
    res.status(200).json({ result });
  } catch (error) {
    console.error('[employee.controller][updateEmployee][Error] ', error);
    res.status(500).json({
      message:
        'There was an error updating employee ' + req.body.employeeID + '.',
    });
  }
};
