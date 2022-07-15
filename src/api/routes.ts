import { Router } from 'express';
import EmployeeRoutes from './employee/employee.routes';
import HolidayRoutes from './holiday/holiday.routes';
import SickDayRoutes from './sickday/sickday.routes';
import AuthRoutes from './auth/auth.routes';
import EmergenctContactRoutes from './emergencycontact/emergencycontact.routes';

const router = Router();
router.use('/employee', EmployeeRoutes);
router.use('/emergencycontact', EmergenctContactRoutes);
router.use('/holiday', HolidayRoutes);
router.use('/sickday', SickDayRoutes);
router.use('/auth/', AuthRoutes);

export default router;
