import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils/jwt.utils';

export enum ACCESS {
    USERS_ALL = 'getAllUsers',
    USERS_NEW = 'newUser',
    USERS_DELETE = 'deleteUser',
    USERS_RESET_PASSWORD = 'resetPassword',
    USERS_CHANGE_OWN_PASSWORD = 'changeOwnPassword',
    USERS_GRANT_PRIVILEGES = 'grantPrivileges',
    USERS_REVOKE_PRIVILEGES = 'revokePrivileges',

    EMPLOYEES_ALL = "getAllEmployees",
    EMPLOYEES_NEW = "newEmployee",
    EMPLOYEES_GET = "getEmployee",
    EMPLOYEES_UPDATE = "updateEmployee",
    EMPLOYEES_DELETE = "deleteEmployee",

    HOLIDAYS_ALL = "getAllHolidays",
    HOLIDAYS_GET_REQUEST = "getHolidayRequest",
    HOLIDAYS_GET_EMPLOYEE_REQUESTS = "getEmployeeHolidayRequests",
    HOLIDAYS_UPDATE_REQUEST = "updateHolidayRequest",
    HOLIDAYS_NEW_REQUEST = "newHolidayRequest",
    HOLIDAYS_DELETE_REQUEST = "deleteHolidayRequest",
    HOLIDAYS_APPROVE_REQUEST = "approveHolidayRequest",
    HOLIDAYS_REJECT_REQUEST = "rejectHolidayRequest"
}
/**
 * middleware to check whether user has access to a specific endpoint
 *
 * @param allowedAccessTypes list of allowed access types of a specific endpoint
 */
export const authorize = (allowedAccessTypes: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        let jwt = req.headers.authorization;

        // verify request has token
        if (!jwt) {
            return res.status(401).json({ message: 'Invalid token ' });
        }

        // remove Bearer if using Bearer Authorization mechanism
        if (jwt.toLowerCase().startsWith('bearer')) {
            jwt = jwt.slice('bearer'.length).trim();
        }

        // verify token hasn't expired yet
        const decodedToken = await validateToken(jwt);

        const hasAccessToEndpoint = allowedAccessTypes.some(
            (at) => decodedToken.accessTypes.some((uat) => uat === at)
        );

        if (!hasAccessToEndpoint) {
            return res.status(401).json({ message: 'Not enough privileges to access endpoint' });
        }
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Expired token' });
            return;
        }

        res.status(500).json({ message: 'Failed to authenticate user' });
    }
};
