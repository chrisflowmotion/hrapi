import { Router } from 'express';
import * as Controller from './auth.controller';
import { ACCESS, authorize } from '../middlewares/auth.middleware';

const router = Router();

// Get all user accounts
router.route('/all').get(authorize([ACCESS.USERS_ALL]), Controller.getAllUsers);

// Create a new user
router.route('/').post(authorize([ACCESS.USERS_NEW]), Controller.newUser);

// Delete a user account
router.route('/').delete(authorize([ACCESS.USERS_DELETE]), Controller.deleteUser);

// Reset password for any user account
router.route('/resetPassword').put(authorize([ACCESS.USERS_RESET_PASSWORD]), Controller.resetPassword);

// Update password for own user account
router.route('/changePassword').put(authorize([ACCESS.USERS_CHANGE_OWN_PASSWORD]), Controller.changeOwnPassword);

// Grant privileges to a user account
router.route('/grantPrivileges').post(authorize([ACCESS.USERS_GRANT_PRIVILEGES]), Controller.grantPrivileges);

// Revoke privileges from a user account
router.route('/revokePrivileges').delete(authorize([ACCESS.USERS_REVOKE_PRIVILEGES]), Controller.revokePrivileges);

router.route('/login').post(Controller.authenticateUser);

export default router;