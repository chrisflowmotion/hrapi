import { Router } from 'express';
import EmployeeRoutes from './employee/employee.routes';
import HolidayRoutes from './holiday/holiday.routes';
import SickDayRoutes from './sickdays/sickdays.routes';
import AuthRoutes from './auth/auth.routes';

const router = Router();
router.use('/employee', EmployeeRoutes);
router.use('/holiday', HolidayRoutes);
router.use('/sickday', SickDayRoutes);
router.use('/auth/', AuthRoutes);

export default router;