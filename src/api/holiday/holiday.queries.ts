import { Status } from "./holiday.model";

export const HolidayQueries = {
    getAllHolidayRequests: `SELECT * FROM holidayrequests`,

    getEmployeeHolidayRequests: `SELECT * FROM holidayrequests WHERE employee = ?`,

    getHolidayRequest: `SELECT * FROM holidayrequests WHERE id = ?`,

    addHolidayRequest: `INSERT INTO holidayrequests (name, start_date, end_date, Status, days_used, employee)
    values(?, ?, ?, '${Status.pending}', ?, ?)`,

    deleteHolidayRequest: `DELETE FROM holidayrequests WHERE id = ?`,

    approveHolidayRequest: `UPDATE holidayrequests SET status = '${Status.accepted}' WHERE id = ?`,

    rejectHolidayRequest: `UPDATE holidayrequests SET status = '${Status.rejected}' WHERE id = ?`
};