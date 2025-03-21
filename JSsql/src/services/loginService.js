import database from '../repository/mysql.js';

async function login(email, password) {
    const sql = 'SELECT * FROM tbl_usuario WHERE email=? AND senha=?;';
    const dataLogin = [email, password];

    const conn = await database.connectDB();
    const [rows] = await conn.query(sql, dataLogin);
    conn.end();
    return rows;
}
async function checkEmail(email) {
    const sql = 'SELECT * FROM tbl_usuario WHERE email = ?';

    const conn = await database.connectDB();
    const [rows] = await conn.query(sql, email);
    conn.end();
    return rows;
}
async function changePassword(email, newPassword) {
    const sql = 'UPDATE tbl_usuario SET senha = ? WHERE email = ?';
    const dataNewPass = [newPassword, email];

    const conn = await database.connectDB();
    await conn.query(sql, dataNewPass);
    conn.end();
}


export default {checkEmail, changePassword,login}

//export default {login}