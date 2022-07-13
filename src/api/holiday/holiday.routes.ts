import { Router } from 'express';
import * as Controller from './holiday.controller';
import { ACCESS, authorize } from '../middlewares/auth.middleware';

const router = Router();

router
  .route('/all')
  .get(authorize([ACCESS.HOLIDAYS_ALL]), Controller.getAllHolidayRequests);

// C.R.U.D single requests
router
  .route('/get')
  .get(authorize([ACCESS.HOLIDAYS_GET_REQUEST]), Controller.getHolidayRequest);

router
  .route('/get/employee')
  .get(
    authorize([ACCESS.HOLIDAYS_GET_EMPLOYEE_REQUESTS]),
    Controller.getEmployeeHolidayRequests
  );

router
  .route('/update')
  .put(
    authorize([ACCESS.HOLIDAYS_UPDATE_REQUEST]),
    Controller.updateHolidayRequest
  );

router
  .route('/new')
  .post(authorize([ACCESS.HOLIDAYS_NEW_REQUEST]), Controller.newHolidayRequest);

router
  .route('/delete')
  .delete(
    authorize([ACCESS.HOLIDAYS_DELETE_REQUEST]),
    Controller.deleteHolidayRequest
  );

// approve / reject requests
router
  .route('/approve')
  .put(
    authorize([ACCESS.HOLIDAYS_APPROVE_REQUEST]),
    Controller.approveHolidayRequest
  );

router
  .route('/reject')
  .put(
    authorize([ACCESS.HOLIDAYS_REJECT_REQUEST]),
    Controller.rejectHolidayRequest
  );

router.route('/own').get(Controller.getOwnHolidayRequests);
router.route('/own').put(Controller.updateOwnRequests);

export default router;
