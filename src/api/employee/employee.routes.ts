import { Router } from 'express';
import { getEmployee, getEmployees } from './employee.controller'

const router = Router();
router.route('/').get(getEmployees);
router.route('/:id').get(getEmployee);

export default router;