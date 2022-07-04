import { Router } from 'express';
import * as Controller from './holiday.controller'

const router = Router();

router.route('/all').get(Controller.getAllHolidayRequests);

// C.R.U.D single requests
router.route('/:id').get(Controller.getHolidayRequest);
router.route('/employee/:id').get(Controller.getEmployeeHolidayRequests);
router.route('/:id').put(Controller.updateHolidayRequest);
router.route('/').post(Controller.newHolidayRequest);
router.route('/:id').delete(Controller.deleteHolidayRequest);

// approve / reject requests
router.route('/approve/:id').put(Controller.approveHolidayRequest);
router.route('/reject/:id').put(Controller.rejectHolidayRequest);

export default router;