import { Request } from 'express';

export enum Status {
    pending = 'PENDING',
    accepted = 'ACCEPTED',
    rejected = 'REJECTED'
};

export interface IHolidayRequest {
    id: string | number | undefined;

    name: string;
    startDate: string;
    endDate: string;

    status: Status;
    daysUsed: number;
    employee: string | number;
};


// tslint:disable:no-empty-interface
export interface IGetHolidayRequest extends Request<{ id: IHolidayRequest['id'] }> { };
export interface IAddHolidayRequest extends Request { };
export interface IUpdateHolidayRequest extends Request<{ id: IHolidayRequest['id'] }, any, IHolidayRequest> { };
export interface IDeleteHolidayRequest extends Request<{ id: IHolidayRequest['id'] }> { };