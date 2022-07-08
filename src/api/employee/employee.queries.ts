export const EmployeeQueries = {
    getAllEmployees: `SELECT employees.id, employees.forename, employees.middlename, employees.surname, employees.email, employees.phone, employees.address_line_1, employees.address_line_2, employees.address_line_3, employees.address_city, employees.address_postcode, employees.holiday_allowance FROM employees`,

    getEmployee: `SELECT employees.forename, employees.middlename, employees.surname, employees.email, employees.phone, employees.address_line_1, employees.address_line_2, employees.address_line_3, employees.address_city, employees.address_postcode, employees.holiday_allowance FROM employees WHERE employees.id = ?`,

    addEmployee: `INSERT INTO hr_app.employees (forename, middlename, surname, email, phone, address_line_1, address_line_2, address_line_3, address_city, address_postcode, holiday_allowance) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

    getEmergencyContact: `SELECT * FROM emergencycontacts WHERE `,

    deleteEmployee: `DELETE FROM hr_app.employees WHERE id = ?`,
};