// tslint:disable:no-console
import { Request, Response, RequestHandler } from 'express';
import { getTokenUserId } from '../utils/jwt.utils';
import * as model from './sickday.model';
import * as SickDayService from './sickday.service';
import * as EmployeeService from '../employee/employee.service';

export const getAllSickDays: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const sickdays = await SickDayService.getAllSickDays();
    res.status(200).json({ sickdays });
  } catch (error) {
    console.error('[sickday.controller][getAllSickDays][Error] ', error);
    res.status(500).json({
      message: 'There was an error fetching sick days.',
    });
  }
};

// @ts-ignore
export const getSickDay: RequestHandler = async (
  req: model.IGetSickDayReq,
  res: Response
) => {
  try {
    const sickDay = await SickDayService.getSickDay(req.body.sickDayID);
    res.status(200).json({ sickDay });
  } catch (error) {
    console.error('[sickday.controller][getSickDay][Error] ', error);
    res.status(500).json({
      message:
        'There was an error fetching sick day ' + req.body.sickDayID + '.',
    });
  }
};

// @ts-ignore
export const getOwnSickDays: RequestHandler = async (
  req: model.IGetSickDayReq,
  res: Response
) => {
  try {
    const myID = getTokenUserId(req.headers.authorization);
    if (myID && typeof myID === 'number') {
      const empID = await EmployeeService.getEmployeeIDByUserID(myID);
      const sickDays = await SickDayService.getEmployeeSickDays(empID[0].id);
      res.status(200).json({ sickDays });
      return;
    }
    res.status(200).json({ sickDays: [] });
  } catch (error) {
    console.error('[sickday.controller][getOwnSickDays][Error] ', error);
    res.status(500).json({
      message:
        'There was an error fetching sick day ' + req.body.sickDayID + '.',
    });
  }
};

// @ts-ignore
export const getEmployeeSickDays: RequestHandler = async (
  req: model.IGetEmployeeSickDayReq,
  res: Response
) => {
  try {
    const sickDays = await SickDayService.getEmployeeSickDays(
      req.body.employeeID
    );
    res.status(200).json({ sickDays });
  } catch (error) {
    console.error('[sickday.controller][getEmployeeSickDay][Error] ', error);
    res.status(500).json({
      message:
        'There was an error fetching sick days for employee ' +
        req.body.employeeID +
        '.',
    });
  }
};

export const newSickDay: RequestHandler = async (
  req: model.IAddSickDayReq,
  res: Response
) => {
  try {
    const result = await SickDayService.newSickDay(req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error('[sickday.controller][newSickDay][Error] ', error);
    res.status(500).json({
      message: 'There was an error adding a sick day.',
    });
  }
};

// @ts-ignore
export const deleteSickDay: RequestHandler = async (
  req: model.IDeleteSickDayReq,
  res: Response
) => {
  try {
    const result = await SickDayService.deleteSickDay(req.body.sickDayID);
    res.status(200).json({ result });
  } catch (error) {
    console.error('[sickday.controller][deleteSickDay][Error] ', error);
    res.status(500).json({
      message:
        'There was an error deleting a sick day' + req.body.sickDayID + '.',
    });
  }
};

// @ts-ignore
export const updateSickDay: RequestHandler = async (
  req: model.IUpdateSickDayReq,
  res: Response
) => {
  try {
    const result = await SickDayService.updateSickDay(req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error('[sickday.controller][updateSickDay][Error] ', error);
    res.status(500).json({
      message: 'There was an error updating sick day' + req.body.id + '.',
    });
  }
};
