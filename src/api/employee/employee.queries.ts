export const EmployeeQueries = {
    getAllEmployees: `SELECT * FROM hr_app.employees`,

    getEmployee: `SELECT * FROM hr_app.employees WHERE id = ?`,

    addEmployee: `INSERT INTO hr_app.employees (forename, middlename, surname, email, phone, address_line_1, address_line_2, address_line_3, address_city, address_postcode, holiday_allowance)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

    updateEmployee: `UPDATE hr_app.employees SET forename = ?, middlename = ?, surname = ?, email = ?, phone = ?, address_line_1 = ?, address_line_2 = ?, address_line_3 = ?, address_city = ?, address_postcode = ?, holiday_allowance = ?
    WHERE id = ?`,

    deleteEmployee: `DELETE FROM hr_app.employees WHERE id = ?`,
};