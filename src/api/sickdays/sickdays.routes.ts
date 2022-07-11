import { Router } from 'express';
import * as Controller from './sickdays.controller';

const router = Router();

router.route('/all').get(Controller.getAllSickDays);

// C.R.U.D single requests
router.route('/get').get(Controller.getSickDay);
router.route('/get/employee').get(Controller.getEmployeeSickDays);
router.route('/update').put(Controller.updateSickDay);
router.route('/new').post(Controller.newSickDay);
router.route('/delete').delete(Controller.deleteSickDay);

export default router;