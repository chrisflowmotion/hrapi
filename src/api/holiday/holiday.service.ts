import { execute } from "../utils/mysql.connector";
import { HolidayQueries } from "./holiday.queries";
import { IHolidayRequest } from "./holiday.model";

export const getAllHolidayRequests = async () => {
    return execute<IHolidayRequest[]>(HolidayQueries.getAllHolidayRequests, []);
};

export const getHolidayRequest = async (id: IHolidayRequest['id']) => {
    return execute<IHolidayRequest>(HolidayQueries.getHolidayRequest, [id]);
};

export const getEmployeeHolidayRequests = async (id: IHolidayRequest['id']) => {
    return execute<IHolidayRequest[]>(HolidayQueries.getEmployeeHolidayRequests, [id]);
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

export const updateHolidayRequest = async (holidayRequest: IHolidayRequest) => {
    const result = await execute<{ affectedRows: number }>(HolidayQueries.updateHolidayRequest, [
        holidayRequest.name,
        holidayRequest.start_date,
        holidayRequest.end_date,
        holidayRequest.status,
        holidayRequest.days_used,
        holidayRequest.employee,
        holidayRequest.id
    ]);
    return result.affectedRows > 0;
};

export const approveHolidayRequest = async (id: IHolidayRequest['id']) => {
    const result = await execute<{ affectedRows: number }>(HolidayQueries.approveHolidayRequest, [id]);
    return result.affectedRows > 0;
};

export const rejectHolidayRequest = async (id: IHolidayRequest['id']) => {
    const result = await execute<{ affectedRows: number }>(HolidayQueries.rejectHolidayRequest, [id]);
    return result.affectedRows > 0;
};

export const deleteHolidayRequest = async (id: IHolidayRequest['id']) => {
    const result = await execute<{ affectedRows: number }>(HolidayQueries.deleteHolidayRequest, [id]);
    return result.affectedRows > 0;
};
