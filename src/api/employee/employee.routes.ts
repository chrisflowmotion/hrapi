import { Router } from 'express';
import * as Controller from './employee.controller'
import { ACCESS, authorize } from '../middlewares/auth.middleware';

const router = Router();

router.route('/all').get(authorize([ACCESS.EMPLOYEES_ALL]), Controller.getAllEmployees);

// C.R.U.D single Employee
router.route('/:id').get(authorize([ACCESS.EMPLOYEES_GET]), Controller.getEmployee);
router.route('/:id').put(authorize([ACCESS.EMPLOYEES_UPDATE]), Controller.updateEmployee);
router.route('/').post(authorize([ACCESS.EMPLOYEES_NEW]), Controller.newEmployee);
router.route('/:id').delete(authorize([ACCESS.EMPLOYEES_DELETE]), Controller.deleteEmployee);


export default router;