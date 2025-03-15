import mysql from "mysql2/promise";

async function connectDB() {
    return await mysql.createConnection({
        "password":"",
        "host":"localhost",
        "user":"root",
        "port":3306, // port do banco de dados
        "database":"cinetec2024"
    })
}

export default {connectDB}; // exportando a função "connectDB"