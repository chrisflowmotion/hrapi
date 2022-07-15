//todo fix queries to use proper table structure
export const EmergencyContactQueries = {
  getEmergencyContact: `SELECT * FROM emergencycontacts WHERE id = ?`,
  getEmployeeEmergencyContact: `SELECT * FROM emergencycontacts `,
  deleteEmergencyContact: `DELETE FROM emergencycontacts where id = ?`,
  addEmergencyContact: `INSERT INTO emergencycontacts (forename, middlename, surname, email, phone, address_line_1, address_line_2, address_line_3, address_city, address_postcode ) values( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
};
