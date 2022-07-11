// tslint:disable:no-console
import { Request, Response, RequestHandler } from "express";
import { generateToken, Payload } from "../utils/jwt.utils";
import * as model from "./auth.model";
import * as AuthService from "./auth.service";

export const getAllUsers: RequestHandler = async (req: Request, res: Response) => {
    try {
        const users = await AuthService.getAllUsers();
        res.status(200).json({ users });
    }
    catch (error) {
        console.error('[auth.controller][getAllUsers][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching users.'
        });
    }
}

// @ts-ignore
export const authenticateUser: RequestHandler = async (req: model.IAuthenticateUser, res: Response) => {
    try {
        const payload: boolean | Payload = await AuthService.authenticate(req.body);

        if (typeof payload === "object") {
            const userToken = generateToken(payload);
            res.status(200).json({ userToken });
        }

        return false;
    }
    catch (error) {
        console.error('[auth.controller][authenticateUser][Error] ', error);
        res.status(500).json({
            message: 'There was an error authenticating user '
        });
    }
};

export const newUser: RequestHandler = async (req: model.IAddUserReq, res: Response) => {
    try {
        const result = await AuthService.newUser(req.body);
        res.status(200).json(result);
    }
    catch (error) {
        console.error('[auth.controller][newUser][Error] ', error);
        res.status(500).json({
            message: 'There was an error adding a new user.'
        });
    }
};

// @ts-ignore
export const deleteUser: RequestHandler = async (req: model.IDeleteUserReq, res: Response) => {
    try {
        const result = await AuthService.deleteUser(req.body.userID);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[auth.controller][deleteUser][Error] ', error);
        res.status(500).json({
            message: 'There was an error deleting user ' + req.body.userID + '.'
        });
    }
};

// @ts-ignore
export const resetPassword: RequestHandler = async (req: model.IResetPasswordReq, res: Response) => {
    try {
        const result = await AuthService.resetPassword(req.body.userID, req.body.newPassword);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[auth.controller][resetPassword][Error] ', error);
        res.status(500).json({
            message: 'There was an error updating password for user ' + req.body.userID + '.'
        });
    }
};

// @ts-ignore
export const changeOwnPassword: RequestHandler = async (req: model.IChangeOwnPassword, res: Response) => {
    try {
        const result = await AuthService.changeOwnPassword(req.body.username, req.body.currentPassword, req.body.newPassword);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[auth.controller][resetOwnPassword][Error] ', error);
        res.status(500).json({
            message: 'There was an error changing your (' + req.body.username + ') password'
        });
    }
};

// @ts-ignore
export const grantPrivileges: RequestHandler = async (req: model.IGrantPrivilegesReq, res: Response) => {
    try {
        const result = await AuthService.grantPrivileges(req.body.userID, req.body.privileges);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[auth.controller][grantPrivileges][Error] ', error);
        res.status(500).json({
            message: 'There was an error granting privileges to user ' + req.body.userID + '.'
        });
    }
};

// @ts-ignore
export const grantPrivilege: RequestHandler = async (req: model.IGrantPrivilegeReq, res: Response) => {
    try {
        const result = await AuthService.grantPrivilege(req.body.userID, req.body.privilege);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[auth.controller][grantPrivilege][Error] ', error);
        res.status(500).json({
            message: 'There was an error granting privilege ' + req.body.privilege + ' to user ' + req.body.userID + '.'
        });
    }
};

// @ts-ignore
export const revokePrivileges: RequestHandler = async (req: model.IRevokePrivilegesReq, res: Response) => {
    try {
        const result = await AuthService.revokePrivileges(req.body.userID, req.body.privileges);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[auth.controller][revokePrivileges][Error] ', error);
        res.status(500).json({
            message: 'There was an error revoking privileges from user ' + req.body.userID + '.'
        });
    }
};

// @ts-ignore
export const revokePrivilege: RequestHandler = async (req: model.IRevokePrivilegeReq, res: Response) => {
    try {
        const result = await AuthService.revokePrivilege(req.body.userID, req.body.privilege);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error('[auth.controller][revokePrivilege][Error] ', error);
        res.status(500).json({
            message: 'There was an error revoking privilege ' + req.body.privilege + ' from user ' + req.body.userID + '.'
        });
    }
};
