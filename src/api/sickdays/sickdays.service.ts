import { execute } from "../utils/mysql.connector";
import { SickDayQueries } from "./sickdays.queries";
import { ISickDay } from "./sickdays.model";

export const getAllSickDays = async () => {
    return await execute<ISickDay[]>(SickDayQueries.getAllSickDays, []);
};

export const getSickDay = async (id: ISickDay['id']) => {
    return await execute<ISickDay>(SickDayQueries.getSickDay, [id]);
};

export const getEmployeeSickDays = async (id: ISickDay['employee']) => {
    return await execute<ISickDay[]>(SickDayQueries.getEmployeeSickDays, [id]);
};

export const newSickDay = async (sickDay: ISickDay) => {
    const result = await execute<{ affectedRows: number }>(SickDayQueries.addSickDay, [
        sickDay.start_date,
        sickDay.end_date,
        sickDay.days_used,
        sickDay.reason,
        sickDay.employee
    ]);

    return result.affectedRows > 0;
};

export const deleteSickDay = async (id: ISickDay['id']) => {
    const result = await execute<{ affectedRows: number }>(SickDayQueries.deleteSickDay, [id]);
    return result.affectedRows > 0;
};

export const updateSickDay = async (sickDay: ISickDay) => {
    const result = await execute<{ affectedRows: number }>(SickDayQueries.updateSickDay, [
        sickDay.start_date,
        sickDay.end_date,
        sickDay.days_used,
        sickDay.reason,
        sickDay.employee
    ]);

    return result.affectedRows > 0;
};