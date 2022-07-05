export const SickDayQueries = {
    getAllSickDays: `SELECT * FROM hr_app.sickdays`,

    getEmployeeSickDays: `SELECT * FROM hr_app.sickdays WHERE employee = ?`,

    getSickDay: `SELECT * FROM hr_app.sickdays WHERE id = ?`,

    addSickDay: `INSERT INTO hr_app.sickdays (start_date, end_date, days_used, reason, employee) values (?,?,?,?,?)`,

    updateSickDay: `UPDATE hr_app.sickdays SET start_date = ?, end_date = ? , days_used = ?, reason = ? WHERE id = ?`,

    deleteSickDay: `DELETE FROM hr_app.sickdays WHERE id = ?`
};