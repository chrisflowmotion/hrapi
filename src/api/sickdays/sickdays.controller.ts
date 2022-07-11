// tslint:disable:no-console
import { Request, Response, RequestHandler } from "express";
import * as model from "./sickdays.model";
import * as SickDayService from "./sickdays.service";

export const getAllSickDays: RequestHandler = async (req: Request, res: Response) => {
    try {
        const sickdays = await SickDayService.getAllSickDays();
        res.status(200).json({ sickdays });
    }
    catch (error) {
        console.error('[sickday.controller][getAllSickDays][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching sick days.'
        });
    }
};


// @ts-ignore
export const getSickDay: RequestHandler = async (req: model.IGetSickDayReq, res: Response) => {
    try {
        const sickDay = await SickDayService.getSickDay(req.body.sickDayID);
        res.status(200).json({ sickDay });
    }
    catch (error) {
        console.error('[sickday.controller][getSickDay][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching sick day ' + req.body.sickDayID + '.'
        });
    }
};


// @ts-ignore
export const getEmployeeSickDays: RequestHandler = async (req: model.IGetEmployeeHolidayReq, res: Response) => {
    try {
        const sickDays = await SickDayService.getEmployeeSickDays(req.body.employeeID);
        res.status(200).json({ sickDays });
    }
    catch (error) {
        console.error('[sickday.controller][getEmployeeSickDay][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching sick days for employee ' + req.body.employeeID + '.'
        });
    }
};


export const newSickDay: RequestHandler = async (req: model.IAddSickDayReq, res: Response) => {
    try {
        const result = await SickDayService.newSickDay(req.body);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[sickday.controller][newSickDay][Error] ', error);
        res.status(500).json({
            message: 'There was an error adding a sick day.'
        });
    }
};

// @ts-ignore
export const deleteSickDay: RequestHandler = async (req: model.IDeleteSickDayReq, res: Response) => {
    try {
        const result = await SickDayService.deleteSickDay(req.body.sickDayID);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[sickday.controller][deleteSickDay][Error] ', error);
        res.status(500).json({
            message: 'There was an error deleting a sick day' + req.body.sickDayID + '.'
        });
    }
};

// @ts-ignore
export const updateSickDay: RequestHandler = async (req: model.IUpdateSickDayReq, res: Response) => {
    try {
        const result = await SickDayService.updateSickDay(req.body);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[sickday.controller][updateSickDay][Error] ', error);
        res.status(500).json({
            message: 'There was an error updating sick day' + req.body.id + '.'
        });
    }
};