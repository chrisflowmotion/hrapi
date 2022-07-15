import { Request } from 'express';
import { IEmployee } from '../employee/employee.model';

export interface IEmergencyContact {
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
}

export interface IUpdateEmergencyContact {
  id: string | number;

  forename?: string;
  middle_name?: string;
  surname?: string;

  email?: string;
  phone?: string | undefined;

  address_line_1?: string;
  address_line_2?: string;
  address_line_3?: string;
  address_city?: string;
  address_postcode?: string;
}

// tslint:disable:no-empty-interface
export interface IGetEmergencyContactReq
  extends Request<any, any, { contactID: IEmergencyContact['id'] }> {}

export interface IGetEmployeeEmergencyContactReq
  extends Request<any, any, { employeeID: IEmployee['id'] }> {}

export interface IAddEmergencyContactReq extends Request {}

export interface IUpdateEmergencyContactReq
  extends Request<any, any, IUpdateEmergencyContact> {}

export interface IDeleteEmergencyContactReq
  extends Request<any, any, { contactID: IEmergencyContact['id'] }> {}
