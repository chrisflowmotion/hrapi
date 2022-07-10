import { execute } from "../utils/mysql.connector";
import { AuthQueries } from "./auth.queries";
import { IUser } from "./auth.model";
import { generateSalt, encrypt } from "./auth.security";
import { ACCESS } from '../middlewares/auth.middleware';


export const getAllUsers = async () => {
    return execute<IUser[]>(AuthQueries.getAllUsers, []);
};

export const getPassword = async (username: IUser['username']) => {
    return execute<IUser['password']>(AuthQueries.getPassword, [username]);
};

export const authenticate = async (credentials: { username: IUser['username'], password: IUser['password'] }) => {
    const result = await execute<[{ password: IUser['password'], salt: IUser['salt'] }]>(AuthQueries.getPassword, [credentials.username]);

    if (result.length !== 1) {
        return false;
    }

    const encryptedPassword = encrypt(credentials.password, result[0].salt);
    return result[0].password === encryptedPassword;
};

export const newUser = async (user: { username: IUser['username'], password: IUser['password'], privileges: IUser['privileges'] }) => {
    const salt = generateSalt().toString();
    const encryptedPassword = encrypt(user.password, salt);
    const result = await execute<{ affectedRows: number }>(AuthQueries.addUser, [
        user.username,
        encryptedPassword,
        salt,
    ]);


    return result.affectedRows > 0;
};

/**
 * Generate new salt and password for user
 */
export const resetPassword = async (userID: IUser['id'], newPassword: IUser['password']) => {
    const newSalt = generateSalt();
    const encryptedNewPassword = encrypt(newPassword, newSalt);

    const result = await execute<{ affectedRows: number }>(AuthQueries.resetPassword, [
        encryptedNewPassword,
        newSalt,
        userID,
    ]);

    return result.affectedRows > 0;
};

/**
 * Generate new salt and password for own user account
 */
export const changeOwnPassword = async (user: IUser['username'], currentPassword: IUser['password'], newPassword: IUser['password']) => {
    // Check if the current password is correct
    const authenticated = await authenticate({ username: user, password: currentPassword });
    if (!authenticated) {
        return false
    }

    const newSalt = generateSalt();
    const encryptedNewPassword = encrypt(newPassword, newSalt);
    const result = await execute<{ affectedRows: number }>(AuthQueries.changePassword, [
        encryptedNewPassword,
        newSalt,
        user
    ]);

    return result.affectedRows > 0;
};

export const grantPrivilege = async (userID: IUser['id'], privilege: ACCESS | string) => {
    try {
        const privilegeID = await execute<[{ id: number }]>(AuthQueries.getPrivilegeId, [privilege]);
        const result = await execute<{ affectedRows: number }>(AuthQueries.grantPrivilege, [userID, privilegeID[0].id]);
        return result.affectedRows > 0 ? "yes" : "no";

    } catch (error) {
        // User tried to add duplicate privilege
        if (error.errno === 1062) {
            return "duplicate";
        }
        // tslint:disable:no-console
        console.error(error);
        return "error";
    }
};

export const grantPrivileges = async (userID: IUser['id'], privileges: IUser['privileges']): Promise<{ granted: string[], notGranted: string[], duplicates: string[] }> => {
    const notGranted: string[] = [];
    const granted: string[] = [];
    const duplicates: string[] = [];

    for (const privilege of privileges) {
        const status = await grantPrivilege(userID, privilege)

        if (status === 'duplicate') {
            duplicates.push(privilege);
        }

        if (status === 'yes')
            granted.push(privilege);

        if (status === 'no')
            notGranted.push(privilege);
    }

    return { granted, notGranted, duplicates };
};

export const revokePrivilege = async (userID: IUser['id'], privilege: ACCESS | string) => {
    const privilegeID = await execute<[{ id: number }]>(AuthQueries.getPrivilegeId, [privilege]);
    const result = await execute<{ affectedRows: number }>(AuthQueries.revokePrivilege, [userID, privilegeID[0].id]);
    return result.affectedRows > 0;
};

export const revokePrivileges = async (userID: IUser['id'], privileges: IUser['privileges']): Promise<{ revoked: string[], notRevoked: string[] }> => {
    const revoked: string[] = [];
    const notRevoked: string[] = [];

    for (const privilege of privileges) {
        const status = await revokePrivilege(userID, privilege);
        if (status) {
            revoked.push(privilege);
        }
        else {
            notRevoked.push(privilege);
        }
    }

    return { revoked, notRevoked };
};

export const deleteUser = async (userID: IUser['id']) => {
    const result = await execute<{ affectedRows: number }>(AuthQueries.deleteUser, [userID]);
    return result.affectedRows > 0;
};