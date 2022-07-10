import { Status } from "./holiday.model";

export const HolidayQueries = {
    getAllHolidayRequests: `SELECT * FROM hr_app.holidayrequests`,

    getEmployeeHolidayRequests: `SELECT * FROM hr_app.holidayrequests WHERE employee = ?`,

    getHolidayRequest: `SELECT * FROM hr_app.holidayrequests WHERE id = ?`,

    addHolidayRequest: `INSERT INTO hr_app.holidayrequests (name, start_date, end_date, Status, days_used, employee)
    values(?, ?, ?, ?, ?, ?)`,

    deleteHolidayRequest: `DELETE FROM hr_app.holidayrequests WHERE id = ?`,

    approveHolidayRequest: `UPDATE hr_app.holidayrequests SET status = '${Status.accepted}' WHERE id = ?`,

    rejectHolidayRequest: `UPDATE hr_app.holidayrequests SET status = '${Status.rejected}' WHERE id = ?`
};