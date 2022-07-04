import { execute } from "../utils/mysql.connector";
import { EmployeeQueries } from "./employee.queries";
import { IEmployee } from "./employee.model";

export const getAllEmployees = async () => {
    return execute<IEmployee[]>(EmployeeQueries.getAllEmployees, []);
};

export const getEmployee = async (id: IEmployee['id']) => {
    return execute<IEmployee>(EmployeeQueries.getEmployee, [id]);
};

export const newEmployee = async (employee: IEmployee) => {
    const result = await execute<{ affectedRows: number }>(EmployeeQueries.addEmployee, [
        false, // Do not create new managers by default.
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

export const updateEmployee = async (employee: IEmployee) => {
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
        employee.holiday_allowance,
        employee.id
    ]);
    return result.affectedRows > 0;
};

export const makeManager = async (id: IEmployee['id']) => {
    const result = await execute<{ affectedRows: number }>(EmployeeQueries.makeManager, [id]);
    return result.affectedRows > 0;
};

export const removeManager = async (id: IEmployee['id']) => {
    const result = await execute<{ affectedRows: number }>(EmployeeQueries.removeManager, [id]);
    return result.affectedRows > 0;
};

export const deleteEmployee = async (id: IEmployee['id']) => {
    const result = await execute<{ affectedRows: number }>(EmployeeQueries.deleteEmployee, [id]);
    return result.affectedRows > 0;
};