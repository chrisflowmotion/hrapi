export const SickDayQueries = {
    getAllSickDays: `SELECT * FROM sickdays`,

    getEmployeeSickDays: `SELECT * FROM sickdays WHERE employee = ?`,

    getSickDay: `SELECT * FROM sickdays WHERE id = ?`,

    addSickDay: `INSERT INTO sickdays (start_date, end_date, days_used, reason, employee) values (?,?,?,?,?)`,

    deleteSickDay: `DELETE FROM sickdays WHERE id = ?`
};