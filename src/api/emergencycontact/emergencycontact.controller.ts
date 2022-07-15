// tslint:disable:no-console
import { Response, RequestHandler } from 'express';
import * as model from './emergencycontact.model';
import * as EmergencyContactService from './emergencycontact.service';
import { getEmployeeIDByUserID } from '../employee/employee.service';
import { getTokenUserId } from '../utils/jwt.utils';
import { EmergencyContactQueries } from './emergencycontact.queries';

// @ts-ignore
export const getOwnEmergencyContact: RequestHandler = async (
  req: model.IGetEmergencyContactReq,
  res: Response
) => {
  try {
    const myID = getTokenUserId(req.headers.authorization);
    if (myID && typeof myID === 'number') {
      const empID = await getEmployeeIDByUserID(myID);
      const emergencycontact =
        await EmergencyContactService.getEmergencyContactByEmployeeID(
          empID[0].id
        );
      res.status(200).json({ emergencycontact });
      return;
    }
    res.status(200).json({ message: 'Could not get ID from auth token' });
  } catch (error) {
    console.error(
      '[emergencycontact.controller][getOwnProfile][Error] ',
      error
    );
    res.status(500).json({
      message: 'There was an error fetching your profile',
    });
  }
};

// @ts-ignore
export const updateOwnEmergencyContact: RequestHandler = async (
  req: model.IUpdateEmergencyContactReq,
  res: Response
) => {
  try {
    // @ts-ignore
    const myID = getTokenUserId(req.headers.authorization);
    if (myID && typeof myID === 'number') {
      // @ts-ignore
      req.body.id = myID;
      // @ts-ignore
      const result = await EmergencyContactService.updateemergencycontact(
        req.body
      );
      res.status(200).json({ result });
      return;
    }
    res.status(200).json({ message: 'Could not get ID from auth token' });
  } catch (error) {
    console.error(
      '[emergencycontact.controller][updateOwnEmergencyContact][Error] ',
      error
    );
    res.status(500).json({
      message: 'There was an error updating your emergency contact',
    });
  }
};

// @ts-ignore
export const getEmergencyContact: RequestHandler = async (
  req: model.IGetEmergencyContactReq,
  res: Response
) => {
  try {
    const emergencycontact = await EmergencyContactService.getEmergencyContact(
      req.body.contactID
    );
    res.status(200).json({ emergencycontact });
  } catch (error) {
    console.error(
      '[emergencycontact.controller][getEmergencyContact][Error] ',
      error
    );
    res.status(500).json({
      message:
        'There was an error fetching emergencycontact' +
        req.body.contactID +
        '.',
    });
  }
};

// @ts-ignore
export const getEmployeeEmergencyContact: RequestHandler = async (
  req: model.IGetEmployeeEmergencyContactReq,
  res: Response
) => {
  try {
    const emergencycontact =
      await EmergencyContactService.getEmergencyContactByEmployeeID(
        req.body.employeeID
      );
    res.status(200).json({ emergencycontact });
  } catch (error) {
    console.error(
      '[emergencycontact.controller][getEmergencyContact][Error] ',
      error
    );
    res.status(500).json({
      message:
        'There was an error fetching emergencycontact' +
        req.body.employeeID +
        '.',
    });
  }
};

export const newEmergencyContact: RequestHandler = async (
  req: model.IAddEmergencyContactReq,
  res: Response
) => {
  try {
    const result = await EmergencyContactService.newEmergencyContact(req.body);
    res.status(200).json({ result });
  } catch (error) {
    console.error(
      '[emergencycontact.controller][newEmergencyContact][Error] ',
      error
    );
    res.status(500).json({
      message: 'There was an error adding a new emergencycontact.',
    });
  }
};

// @ts-ignore
export const updateEmergencyContact: RequestHandler = async (
  req: model.IUpdateEmergencyContactReq,
  res: Response
) => {
  try {
    const result = await EmergencyContactService.updateEmergencyContact(
      req.body
    );
    res.status(200).json({ result });
  } catch (error) {
    console.error(
      '[emergencycontact.controller][updateEmergencyContact][Error] ',
      error
    );
    res.status(500).json({
      message:
        'There was an error updating emergencycontact ' + req.body.id + '.',
    });
  }
};

// @ts-ignore
export const deleteEmergencyContact: RequestHandler = async (
  req: model.IDeleteEmergencyContactReq,
  res: Response
) => {
  try {
    const result = await EmergencyContactService.deleteEmergencyContact(
      req.body.contactID
    );
    res.status(200).json({ result });
  } catch (error) {
    console.error(
      '[emergencycontact.controller][deleteEmergencyContact][Error] ',
      error
    );
    res.status(500).json({
      message:
        'There was an error deleting emergencycontact ' +
        req.body.contactID +
        '.',
    });
  }
};
