import { Request } from 'express';

export interface IEmployee {
    id: string | number | undefined;

    forename: string;
    middle_name?: string;
    surname: string;

    email?: string;
    phone: string | undefined;

    address_line_1: string;
    address_line_2: string;
    address_line_3?: string;
    address_city: string;
    address_postcode: string;
    holiday_allowance: number;
}

// tslint:disable:no-empty-interface
export interface IGetEmployeeReq extends Request<{ id: IEmployee['id'] }> { };
export interface IAddEmployeeReq extends Request { };
export interface IUpdateEmployeeReq extends Request<{ id: IEmployee['id'] }, any, IEmployee> { };
export interface IDeleteEmployeeReq extends Request<{ id: IEmployee['id'] }> { };
