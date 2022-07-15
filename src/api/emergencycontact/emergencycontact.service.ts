import { execute } from '../utils/mysql.connector';
import { EmergencyContactQueries } from './emergencycontact.queries';
import {
  IEmergencyContact,
  IUpdateEmergencyContact,
} from './emergencycontact.model';
import { IEmployee } from '../employee/employee.model';

export const getEmergencyContact = async (id: IEmergencyContact['id']) => {
  return execute<IEmployee>(EmergencyContactQueries.getEmergencyContact, [id]);
};

export const getEmergencyContactByEmployeeID = async (id: IEmployee['id']) => {
  return await execute<IEmergencyContact>(
    EmergencyContactQueries.getEmployeeEmergencyContact,
    [id]
  );
};

export const newEmergencyContact = async (
  emergencycontact: IEmergencyContact
) => {
  const result = await execute<{ affectedRows: number }>(
    EmergencyContactQueries.addEmergencyContact,
    [
      emergencycontact.forename,
      emergencycontact.middle_name,
      emergencycontact.surname,
      emergencycontact.email,
      emergencycontact.phone,
      emergencycontact.address_line_1,
      emergencycontact.address_line_2,
      emergencycontact.address_line_3,
      emergencycontact.address_city,
      emergencycontact.address_postcode,
    ]
  );

  return result.affectedRows > 0;
};

/**
 * Due to the fact the user can decide which fields they wish to update
 * we need to dynamically build this query instead of having it stored in employee.queries.ts
 */
export const updateEmergencyContact = async (
  emergencycontact: IUpdateEmergencyContact
) => {
  let query = 'UPDATE emergencycontacts SET ';
  const params = [];

  if (emergencycontact.forename) {
    query += ' emergencycontacts.forename = ?,';
    params.push(emergencycontact.forename);
  }

  if (emergencycontact.middle_name) {
    query += ' emergencycontacts.middlename = ?,';
    params.push(emergencycontact.middle_name);
  }

  if (emergencycontact.surname) {
    query += ' emergencycontacts.surname = ?,';
    params.push(emergencycontact.surname);
  }

  if (emergencycontact.email) {
    query += ' emergencycontacts.email = ?,';
    params.push(emergencycontact.email);
  }

  if (emergencycontact.phone) {
    query += ' emergencycontacts.phone = ?,';
    params.push(emergencycontact.phone);
  }

  if (emergencycontact.address_line_1) {
    query += ' emergencycontacts.address_line_1 = ?,';
    params.push(emergencycontact.address_line_1);
  }

  if (emergencycontact.address_line_2) {
    query += ' emergencycontacts.address_line_2 = ?,';
    params.push(emergencycontact.address_line_2);
  }

  if (emergencycontact.address_line_3) {
    query += ' emergencycontacts.address_line_3 = ?,';
    params.push(emergencycontact.address_line_3);
  }

  if (emergencycontact.address_city) {
    query += ' emergencycontacts.address_city = ?,';
    params.push(emergencycontact.address_city);
  }

  if (emergencycontact.address_postcode) {
    query += ' emergencycontacts.address_postcode = ?,';
    params.push(emergencycontact.address_postcode);
  }

  // Get rid of the last comma
  query = query.substring(0, query.length - 1);

  query += ' WHERE emergencycontacts.id = ?';
  params.push(emergencycontact.id);

  const result = await execute<{ affectedRows: number }>(query, params);
  return result.affectedRows > 0;
};

export const deleteEmergencyContact = async (id: IEmergencyContact['id']) => {
  const result = await execute<{ affectedRows: number }>(
    EmergencyContactQueries.deleteEmergencyContact,
    [id]
  );
  return result.affectedRows > 0;
};
