import { Request } from 'express';

export interface ISickDay {
    id: string | number | undefined;
    start_date: string;
    end_date: string;
    days_used: number;
    reason: string;
    employee: string | number;
};


// tslint:disable:no-empty-interface
export interface IGetSickDay extends Request<{ id: ISickDay['id'] }> { };
export interface IAddSickDay extends Request { };
export interface IUpdateSickDay extends Request<{ id: ISickDay['id'] }, any, ISickDay> { };
export interface IDeleteSickDay extends Request<{ id: ISickDay['id'] }> { };