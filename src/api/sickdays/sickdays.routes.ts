import { Router } from 'express';
import * as Controller from './sickdays.controller';

const router = Router();

router.route('/all').get(Controller.getAllSickDays);

// C.R.U.D single requests
router.route('/:id').get(Controller.getSickDay);
router.route('/employee/:id').get(Controller.getEmployeeSickDays);
router.route('/:id').put(Controller.updateSickDay);
router.route('/').post(Controller.newSickDay);
router.route('/:id').delete(Controller.deleteSickDay);

export default router;