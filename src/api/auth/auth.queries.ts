export const AuthQueries = {
    getAllUsers: `SELECT users.id, users.username, GROUP_CONCAT(privileges.privilege SEPARATOR ',') privileges FROM users
                    INNER JOIN userprivileges ON users.id = userprivileges.user
                    INNER JOIN PRIVILEGES ON PRIVILEGES.id = userprivileges.privilege`,

    addUser: `INSERT INTO users (username, password, salt) values(?,?,?)`,

    deleteUser: `DELETE FROM users WHERE user.id = ?`,

    resetPassword: `UPDATE users SET users.password = ?, users.salt = ? WHERE users.id = ?`,

    changePassword: `UPDATE users SET users.password = ?, users.salt = ? WHERE users.username = ?`,

    getPassword: `SELECT users.id, users.password, users.salt from users where username = ?`,

    getPrivileges: `SELECT GROUP_CONCAT(privileges.privilege SEPARATOR ',') privileges FROM users
                    INNER JOIN userprivileges ON users.id = userprivileges.user
                    INNER JOIN PRIVILEGES ON PRIVILEGES.id = userprivileges.privilege`,

    grantPrivilege: `INSERT INTO userprivileges (user, privilege) values(?, ?)`,

    getPrivilegeId: `SELECT privileges.id FROM privileges WHERE privileges.privilege = ?`,

    revokePrivilege: `DELETE FROM userprivileges WHERE userprivileges.user = ? AND userprivileges.privilege = ?`,
};