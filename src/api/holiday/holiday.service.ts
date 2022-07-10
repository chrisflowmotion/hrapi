import { execute } from "../utils/mysql.connector";
import { HolidayQueries } from "./holiday.queries";
import { IHolidayRequest, IUpdateHolidayRequest } from "./holiday.model";
import { IEmployee } from "../employee/employee.model";

export const getAllHolidayRequests = async () => {
    return execute<IHolidayRequest[]>(HolidayQueries.getAllHolidayRequests, []);
};

export const getHolidayRequest = async (requestID: IHolidayRequest['id']) => {
    return execute<IHolidayRequest>(HolidayQueries.getHolidayRequest, [requestID]);
};

export const getEmployeeHolidayRequests = async (employeeID: IEmployee['id']) => {
    return execute<IHolidayRequest[]>(HolidayQueries.getEmployeeHolidayRequests, [employeeID]);
};

export const newHolidayRequest = async (holidayRequest: IHolidayRequest) => {
    const result = await execute<{ affectedRows: number }>(HolidayQueries.addHolidayRequest, [
        holidayRequest.name,
        holidayRequest.start_date,
        holidayRequest.end_date,
        holidayRequest.status,
        holidayRequest.days_used,
        holidayRequest.employee
    ]);
    return result.affectedRows > 0;
};

export const updateHolidayRequest = async (holidayRequest: IUpdateHolidayRequest) => {
    let query = 'UPDATE holidayrequests SET ';
    const params = [];

    if (holidayRequest.name) {
        query += ' holidayrequests.name = ?,'
        params.push(holidayRequest.name);
    };

    if (holidayRequest.start_date) {
        query += ' holidayrequests.start_date = ?,'
        params.push(holidayRequest.start_date);
    };

    if (holidayRequest.end_date) {
        query += ' holidayrequests.end_date = ?,'
        params.push(holidayRequest.end_date);
    };

    if (holidayRequest.end_date) {
        query += ' holidayrequests.end_date = ?,'
        params.push(holidayRequest.end_date);
    };

    if (holidayRequest.days_used) {
        query += ' holidayrequests.days_used = ?,'
        params.push(holidayRequest.days_used);
    };

    // Get rid of the last comma
    query = query.substring(0, query.length - 1);

    query += ' WHERE holidayrequests.id = ?';
    params.push(holidayRequest.id);

    const result = await execute<{ affectedRows: number }>(query, params);
    return result.affectedRows > 0;
};

export const approveHolidayRequest = async (requestID: IHolidayRequest['id']) => {
    const result = await execute<{ affectedRows: number }>(HolidayQueries.approveHolidayRequest, [requestID]);
    return result.affectedRows > 0;
};

export const rejectHolidayRequest = async (requestID: IHolidayRequest['id']) => {
    const result = await execute<{ affectedRows: number }>(HolidayQueries.rejectHolidayRequest, [requestID]);
    return result.affectedRows > 0;
};

export const deleteHolidayRequest = async (requestID: IHolidayRequest['id']) => {
    const result = await execute<{ affectedRows: number }>(HolidayQueries.deleteHolidayRequest, [requestID]);
    return result.affectedRows > 0;
};
