import { Router } from 'express';
import EmployeeRoutes from './employee/employee.routes';
import HolidayReoutes from './holiday/holiday.routes';

const router = Router();
router.use('/employee', EmployeeRoutes);
router.use('/holiday', HolidayReoutes);

export default router;