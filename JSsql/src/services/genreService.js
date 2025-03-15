import database from '../repository/mysql.js';

async function createGenre(genero) {
    const sql = "INSERT INTO tbl_genero() VALUES(?)";
    const infoGenre = [genero];
    const conn = await database.connectDB();
    await conn.query(sql, infoGenre);
    conn.end();
}

async function updateGenre(genero,idgenero) {
    const sql = "UPDATE tbl_genero SET genero = ? WHERE id_genero = ?";

    const infoGenre = [genero,idgenero]

    const conn = await database.connectDB();
    await conn.query();
    conn.end();
}

export default {createGenre, updateGenre};