import { Router } from 'express';
import EmployeeRoutes from './employee/employee.routes';

const router = Router();
router.use('/employee', EmployeeRoutes);

export default router;