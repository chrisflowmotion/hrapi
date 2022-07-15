import { execute } from '../utils/mysql.connector';
import { SickDayQueries } from './sickday.queries';
import { ISickDay, IUpdateSickDay } from './sickday.model';
import { IEmployee } from '../employee/employee.model';

export const getAllSickDays = async () => {
  return await execute<ISickDay[]>(SickDayQueries.getAllSickDays, []);
};

export const getSickDay = async (sickDayID: ISickDay['id']) => {
  return await execute<ISickDay>(SickDayQueries.getSickDay, [sickDayID]);
};

export const getEmployeeSickDays = async (employeeID: IEmployee['id']) => {
  return await execute<ISickDay[]>(SickDayQueries.getEmployeeSickDays, [
    employeeID,
  ]);
};

export const newSickDay = async (sickDay: ISickDay) => {
  const result = await execute<{ affectedRows: number }>(
    SickDayQueries.addSickDay,
    [
      sickDay.start_date,
      sickDay.end_date,
      sickDay.days_used,
      sickDay.reason,
      sickDay.employee,
    ]
  );

  return result.affectedRows > 0;
};

export const deleteSickDay = async (sickDayID: ISickDay['id']) => {
  const result = await execute<{ affectedRows: number }>(
    SickDayQueries.deleteSickDay,
    [sickDayID]
  );
  return result.affectedRows > 0;
};

export const updateSickDay = async (sickDay: IUpdateSickDay) => {
  let query = 'UPDATE sickdays SET ';
  const params = [];

  if (sickDay.start_date) {
    query += ' sickdays.start_date = ?,';
    params.push(sickDay.start_date);
  }

  if (sickDay.end_date) {
    query += ' sickdays.end_date = ?,';
    params.push(sickDay.end_date);
  }

  if (sickDay.reason) {
    query += ' sickdays.reason = ?,';
    params.push(sickDay.reason);
  }

  if (sickDay.days_used) {
    query += ' sickdays.days_used = ?,';
    params.push(sickDay.days_used);
  }

  // Get rid of the last comma
  query = query.substring(0, query.length - 1);

  query += ' WHERE sickdays.id = ?';
  params.push(sickDay.id);

  const result = await execute<{ affectedRows: number }>(query, params);
  return result.affectedRows > 0;
};
