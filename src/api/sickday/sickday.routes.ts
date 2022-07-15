import { Router } from 'express';
import * as Controller from './sickday.controller';
import { ACCESS, authorize } from '../middlewares/auth.middleware';

const router = Router();

router
  .route('/all')
  .get(authorize([ACCESS.SICK_DAYS_ALL]), Controller.getAllSickDays);

// C.R.U.D single requests
router
  .route('/get')
  .get(authorize([ACCESS.SICK_DAYS_GET]), Controller.getSickDay);
router
  .route('/get/employee')
  .get(
    authorize([ACCESS.SICK_DAYS_GET_EMPLOYEE]),
    Controller.getEmployeeSickDays
  );

router
  .route('/update')
  .put(authorize([ACCESS.SICK_DAYS_UPDATE]), Controller.updateSickDay);

router
  .route('/new')
  .post(authorize([ACCESS.SICK_DAYS_NEW]), Controller.newSickDay);

router
  .route('/delete')
  .delete(authorize([ACCESS.SICK_DAYS_DELETE]), Controller.deleteSickDay);

router.route('/own').get(Controller.getOwnSickDays);

export default router;
