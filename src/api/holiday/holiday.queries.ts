import { Status } from './holiday.model';

export const HolidayQueries = {
  getAllHolidayRequests: `SELECT * FROM holidayrequests`,

  getEmployeeHolidayRequests: `SELECT * FROM holidayrequests WHERE employee = ?`,

  getEmployeeHolidayRequestsByUserID: `SELECT requests.* FROM holidayrequests AS requests
	INNER JOIN employees AS emp
	ON requests.employee = emp.id AND emp.acc = ?`,

  getUserHolidayRequests: `SELECT GROUP_CONCAT(requests.id SEPARATOR ',') ids FROM holidayrequests AS requests
	INNER JOIN employees AS emp
	ON requests.employee = emp.id AND emp.acc = ?`,

  getHolidayRequest: `SELECT * FROM holidayrequests WHERE id = ?`,

  addHolidayRequest: `INSERT INTO holidayrequests (name, start_date, end_date, Status, days_used, employee)
    values(?, ?, ?, '${Status.pending}', ?, ?)`,

  deleteHolidayRequest: `DELETE FROM holidayrequests WHERE id = ?`,

  approveHolidayRequest: `UPDATE holidayrequests SET status = '${Status.accepted}' WHERE id = ?`,

  rejectHolidayRequest: `UPDATE holidayrequests SET status = '${Status.rejected}' WHERE id = ?`,
};
