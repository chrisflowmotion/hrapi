import { Request } from 'express';
import { IEmployee } from '../employee/employee.model';

export interface ISickDay {
    id: string | number | undefined;
    start_date: string;
    end_date: string;
    days_used: number;
    reason: string;
    employee: string | number;
};

export interface IUpdateSickDay {
    id: string | number | undefined;
    start_date?: string;
    end_date?: string;
    days_used?: number;
    reason?: string;
};


// tslint:disable:no-empty-interface
export interface IGetSickDayReq extends Request<any, any, { sickDayID: ISickDay['id'] }> { };
export interface IGetEmployeeHolidayReq extends Request<any, any, { employeeID: IEmployee['id'] }> { };
export interface IAddSickDayReq extends Request { };
export interface IUpdateSickDayReq extends Request<any, any, IUpdateSickDay> { };
export interface IDeleteSickDayReq extends Request<any, any, { sickDayID: ISickDay['id'] }> { };