import { execute } from "../utils/mysql.connector";
import { EmployeeQueries } from "./employee.queries";
import { IEmployee, IUpdateEmployee } from "./employee.model";

export const getAllEmployees = async () => {
    return execute<IEmployee[]>(EmployeeQueries.getAllEmployees, []);
};

export const getEmployee = async (id: IEmployee['id']) => {
    return execute<IEmployee>(EmployeeQueries.getEmployee, [id]);
};

export const newEmployee = async (employee: IEmployee) => {
    const result = await execute<{ affectedRows: number }>(EmployeeQueries.addEmployee, [
        employee.forename,
        employee.middle_name,
        employee.surname,
        employee.email,
        employee.phone,
        employee.address_line_1,
        employee.address_line_2,
        employee.address_line_3,
        employee.address_city,
        employee.address_postcode,
        employee.holiday_allowance
    ]);

    return result.affectedRows > 0;
};

/**
 * Due to the fact the user can decide which fields they wish to update
 * we need to dynamically build this query instead of having it stored in employee.queries.ts
 */
export const updateEmployee = async (employee: IUpdateEmployee) => {
    let query = 'UPDATE employees SET ';
    const params = [];


    if (employee.forename) {
        query += ' employees.forename = ?,'
        params.push(employee.forename);
    };

    if (employee.middle_name) {
        query += ' employees.middlename = ?,'
        params.push(employee.middle_name);
    };

    if (employee.surname) {
        query += ' employees.surname = ?,'
        params.push(employee.surname);
    };

    if (employee.email) {
        query += ' employees.email = ?,'
        params.push(employee.email);
    };

    if (employee.phone) {
        query += ' employees.phone = ?,'
        params.push(employee.phone);
    };

    if (employee.address_line_1) {
        query += ' employees.address_line_1 = ?,'
        params.push(employee.address_line_1);
    };

    if (employee.address_line_2) {
        query += ' employees.address_line_2 = ?,'
        params.push(employee.address_line_2);
    };

    if (employee.address_line_3) {
        query += ' employees.address_line_3 = ?,'
        params.push(employee.address_line_3);
    };

    if (employee.address_city) {
        query += ' employees.address_city = ?,'
        params.push(employee.address_city);
    };

    if (employee.address_postcode) {
        query += ' employees.address_postcode = ?,'
        params.push(employee.address_postcode);
    };

    if (employee.holiday_allowance) {
        query += ' employees.holiday_allowance = ?,'
        params.push(employee.holiday_allowance);
    };

    // Get rid of the last comma
    query = query.substring(0, query.length - 1);

    query += ' WHERE employees.id = ?';
    params.push(employee.id);

    const result = await execute<{ affectedRows: number }>(query, params);
    return result.affectedRows > 0;
};

export const deleteEmployee = async (id: IEmployee['id']) => {
    const result = await execute<{ affectedRows: number }>(EmployeeQueries.deleteEmployee, [id]);
    return result.affectedRows > 0;
};