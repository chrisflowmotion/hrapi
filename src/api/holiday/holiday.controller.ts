// tslint:disable:no-console
import { Request, Response, RequestHandler } from 'express';
import { EmployeeQueries } from '../employee/employee.queries';
import { getTokenUserId } from '../utils/jwt.utils';
import * as model from './holiday.model';
import { HolidayQueries } from './holiday.queries';
import * as HolidayService from './holiday.service';

export const getAllHolidayRequests: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const holidayRequests = await HolidayService.getAllHolidayRequests();
    res.status(200).json({ holidayRequests });
  } catch (error) {
    console.error('[holiday.controller][getAllHolidays][Error] ', error);
    res.status(500).json({
      message: 'There was an error fetching holiday requests.',
    });
  }
};

// @ts-ignore
export const getHolidayRequest: RequestHandler = async (
  req: model.IGetHolidayReq,
  res: Response
) => {
  try {
    const holidayRequest = await HolidayService.getHolidayRequest(
      req.body.requestID
    );
    res.status(200).json({ holidayRequest });
  } catch (error) {
    console.error('[holiday.controller][getHoliday][Error] ', error);
    res.status(500).json({
      message:
        'There was an error fetching holiday request' +
        req.body.requestID +
        '.',
    });
  }
};

// @ts-ignore
export const getOwnHolidayRequests: RequestHandler = async (
  req: model.IAddHolidayReq,
  res: Response
) => {
  try {
    const myID = getTokenUserId(req.headers.authorization);
    if (myID && typeof myID === 'number') {
      const holidayRequests =
        await HolidayService.getEmployeeHolidayRequestsByUserID(myID);
      res.status(200).json({ holidayRequests });
      return;
    }
  } catch (error) {
    console.error('[holiday.controller][getHoliday][Error] ', error);
    res.status(500).json({
      message:
        'There was an error fetching holiday request' +
        req.body.requestID +
        '.',
    });
  }
};

// @ts-ignore
export const getEmployeeHolidayRequests: RequestHandler = async (
  req: model.IGetEmployeeHolidayReq,
  res: Response
) => {
  try {
    const holidayRequests = await HolidayService.getEmployeeHolidayRequests(
      req.body.employeeID
    );
    res.status(200).json({ holidayRequests });
  } catch (error) {
    console.error('[holiday.controller][getHoliday][Error] ', error);
    res.status(500).json({
      message:
        'There was an error fetching holiday request' +
        req.body.employeeID +
        '.',
    });
  }
};

export const newHolidayRequest: RequestHandler = async (
  req: model.IAddHolidayReq,
  res: Response
) => {
  try {
    const result = await HolidayService.newHolidayRequest(req.body);

    res.status(200).json({ result });
  } catch (error) {
    console.error('[holiday.controller][newHoliday][Error] ', error);
    res.status(500).json({
      message: 'There was an error adding a new holiday request.',
    });
  }
};

// @ts-ignore
export const updateHolidayRequest: RequestHandler = async (
  req: model.IUpdateHolidayReq,
  res: Response
) => {
  try {
    const result = await HolidayService.updateHolidayRequest(req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error('[holiday.controller][updateHoliday][Error] ', error);
    res.status(500).json({
      message:
        'There was an error updating holiday request ' + req.body.id + '.',
    });
  }
};

// @ts-ignore
export const updateOwnRequests: RequestHandler = async (
  req: model.IUpdateHolidayReq,
  res: Response
) => {
  try {
    const myID = getTokenUserId(req.headers.authorization);
    if (myID && typeof myID === 'number') {
      const result = await HolidayService.updateOwnHolidayRequest(
        myID,
        req.body
      );
      res.status(200).json({ result });
      return;
    }
    res.status(200).json({ result: false });
  } catch (error) {
    console.error('[holiday.controller][updateHoliday][Error] ', error);
    res.status(500).json({
      message:
        'There was an error updating holiday request ' + req.body.id + '.',
    });
  }
};

// @ts-ignore
export const deleteHolidayRequest: RequestHandler = async (
  req: model.IDeleteHolidayReq,
  res: Response
) => {
  try {
    const result = await HolidayService.deleteHolidayRequest(
      req.body.requestID
    );
    res.status(200).json({ result });
  } catch (error) {
    console.error('[holiday.controller][updateHoliday][Error] ', error);
    res.status(500).json({
      message:
        'There was an error updating holiday request ' +
        req.body.requestID +
        '.',
    });
  }
};

// @ts-ignore
export const approveHolidayRequest: RequestHandler = async (
  req: model.IApproveHolidayReq,
  res: Response
) => {
  try {
    const result = await HolidayService.approveHolidayRequest(
      req.body.requestID
    );
    res.status(200).json({ result });
  } catch (error) {
    console.error('[holiday.controller][approveHolidayRequest][Error] ', error);
    res.status(500).json({
      message:
        'There was an error approving holiday request ' +
        req.body.requestID +
        '.',
    });
  }
};

// @ts-ignore
export const rejectHolidayRequest: RequestHandler = async (
  req: model.IRejectHolidayReq,
  res: Response
) => {
  try {
    const result = await HolidayService.rejectHolidayRequest(
      req.body.requestID
    );
    res.status(200).json({ result });
  } catch (error) {
    console.error('[holiday.controller][rejectHolidayReequest][Error] ', error);
    res.status(500).json({
      message:
        'There was an error rejecting holiday request' +
        req.body.requestID +
        '.',
    });
  }
};
