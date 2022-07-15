import { Router } from 'express';
import * as Controller from './emergencycontact.controller';
import { ACCESS, authorize } from '../middlewares/auth.middleware';

const router = Router();

router
  .route('/new')
  .post(
    authorize([ACCESS.EMERGENCY_CONTACT_NEW]),
    Controller.newEmergencyContact
  );

router
  .route('/get')
  .get(
    authorize([ACCESS.EMERGENCY_CONTACT_GET]),
    Controller.getEmergencyContact
  );

router
  .route('/employee/get')
  .get(
    authorize([ACCESS.EMERGENCY_CONTACT_GET]),
    Controller.getEmergencyContact
  );

router
  .route('/update')
  .put(
    authorize([ACCESS.EMERGENCY_CONTACT_UPDATE]),
    Controller.updateEmergencyContact
  );

router.route('/own').get(Controller.getOwnEmergencyContact);
router.route('/own').put(Controller.updateEmergencyContact);

export default router;
