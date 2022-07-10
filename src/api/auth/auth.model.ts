import { Request } from 'express';
import { ACCESS } from '../middlewares/auth.middleware';

export interface IUser {
    id: number;
    username: string;
    password: string;
    salt: string;
    privileges: ACCESS[];
};

// tslint:disable:no-empty-interface
export interface IAuthenticateUser extends Request<any, any, { username: IUser['username'], password: IUser['password'] }> { };

export interface IAddUserReq extends Request { };
export interface IDeleteUserReq extends Request<any, any, { userID: IUser['id'] }> { };

export interface IResetPasswordReq extends Request<any, any, { userID: IUser['id'], newPassword: IUser['password'] }> { };
export interface IChangeOwnPassword extends Request<{ username: IUser['username'], currentPassword: IUser['password'], newPassword: IUser['password'] }> { };

export interface IGrantPrivilegeReq extends Request<any, any, { userID: IUser['id'], privilege: ACCESS }> { };
export interface IGrantPrivilegesReq extends Request<any, any, { userID: IUser['id'], privileges: IUser['privileges'] }> { };

export interface IRevokePrivilegeReq extends Request<any, any, { userID: IUser['id'], privilege: ACCESS }> { };
export interface IRevokePrivilegesReq extends Request<any, any, { userID: IUser['id'], privileges: IUser['privileges'] }> { };