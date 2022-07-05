// tslint:disable:no-console
import { Request, Response, RequestHandler } from "express";
import * as model from "./holiday.model";
import * as HolidayService from "./holiday.service";

export const getAllHolidayRequests: RequestHandler = async (req: Request, res: Response) => {
    try {
        const holidayRequests = await HolidayService.getAllHolidayRequests();
        res.status(200).json({ holidayRequests });
    }
    catch (error) {
        console.error('[holiday.controller][getAllHolidays][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching holiday requests.'
        });
    }
};

// @ts-ignore
export const getHolidayRequest: RequestHandler = async (req: model.IGetHolidayRequest, res: Response) => {
    try {
        const holidayRequest = await HolidayService.getHolidayRequest(req.params.id);
        res.status(200).json({ holidayRequest });
    }
    catch (error) {
        console.error('[holiday.controller][getHoliday][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching holiday request' + req.params.id + '.'
        });
    }
};

// @ts-ignore
export const getEmployeeHolidayRequests: RequestHandler = async (req: model.IGetHolidayRequest, res: Response) => {
    try {
        const holidayRequest = await HolidayService.getEmployeeHolidayRequests(req.params.id);
        res.status(200).json({ holidayRequest });
    }
    catch (error) {
        console.error('[holiday.controller][getHoliday][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching holiday request' + req.params.id + '.'
        });
    }
};

export const newHolidayRequest: RequestHandler = async (req: model.IAddHolidayRequest, res: Response) => {
    try {
        const result = await HolidayService.newHolidayRequest(req.body);

        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[holiday.controller][newHoliday][Error] ', error);
        res.status(500).json({
            message: 'There was an error adding a new holiday request.'
        });
    }
};

// @ts-ignore
export const updateHolidayRequest: RequestHandler = async (req: model.IUpdateHolidayRequest, res: Response) => {
    try {
        const result = await HolidayService.updateHolidayRequest(req.body);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[holiday.controller][updateHoliday][Error] ', error);
        res.status(500).json({
            message: 'There was an error updating holiday request ' + req.params.id + '.'
        });
    }
};

// @ts-ignore
export const deleteHolidayRequest: RequestHandler = async (req: model.IDeleteHolidayRequest, res: Response) => {
    try {
        const result = await HolidayService.deleteHolidayRequest(req.params.id);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[holiday.controller][updateHoliday][Error] ', error);
        res.status(500).json({
            message: 'There was an error updating holiday request ' + req.params.id + '.'
        });
    }
};

// @ts-ignore
export const approveHolidayRequest: RequestHandler = async (req: model.IUpdateHolidayRequest, res: Response) => {
    try {
        const result = await HolidayService.approveHolidayRequest(req.params.id);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[holiday.controller][approveHolidayRequest][Error] ', error);
        res.status(500).json({
            message: 'There was an error approving holiday request ' + req.params.id + '.'
        });
    }
};

// @ts-ignore
export const rejectHolidayRequest: RequestHandler = async (req: model.IUpdateHolidayRequest, res: Response) => {
    try {
        const result = await HolidayService.rejectHolidayRequest(req.params.id);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[holiday.controller][rejectHolidayReequest][Error] ', error);
        res.status(500).json({
            message: 'There was an error rejecting holiday request' + req.params.id + '.'
        });
    }
};