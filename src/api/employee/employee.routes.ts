import { Router } from 'express';
import * as Controller from './employee.controller'

const router = Router();

router.route('/all').get(Controller.getAllEmployees);

// C.R.U.D single Employee
router.route('/:id').get(Controller.getEmployee);
router.route('/:id').put(Controller.updateEmployee);
router.route('/').post(Controller.newEmployee);
router.route('/:id').delete(Controller.deleteEmployee);

// Add / remove manager
router.route('/makeManager/:id').put(Controller.makeManager);
router.route('/removeManager/:id').put(Controller.removeManager);

export default router;