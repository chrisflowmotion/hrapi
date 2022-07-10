import { Request } from 'express';
import { IEmployee } from '../employee/employee.model';

export enum Status {
    pending = 'PENDING',
    accepted = 'ACCEPTED',
    rejected = 'REJECTED'
};

export interface IHolidayRequest {
    id: string | number | undefined;

    name: string;
    start_date: string;
    end_date: string;

    status: Status;
    days_used: number;
    employee: string | number;
};

export interface IUpdateHolidayRequest {
    id: string | number | undefined;

    name?: string;
    start_date?: string;
    end_date?: string;

    days_used?: number;
}


// tslint:disable:no-empty-interface
export interface IGetHolidayReq extends Request<any, any, { requestID: IHolidayRequest['id'] }> { };
export interface IGetEmployeeHolidayReq extends Request<any, any, { employeeID: IEmployee['id'] }> { };
export interface IAddHolidayReq extends Request { };
export interface IUpdateHolidayReq extends Request<any, any, IUpdateHolidayRequest> { };
export interface IDeleteHolidayReq extends Request<any, any, { requestID: IHolidayRequest['id'] }> { };

export interface IApproveHolidayReq extends Request<any, any, { requestID: IHolidayRequest['id'] }> { };
export interface IRejectHolidayReq extends Request<any, any, { requestID: IHolidayRequest['id'] }> { };