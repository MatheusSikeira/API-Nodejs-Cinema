import database from '../repository/mysql.js';

async function createActor(nomeDoAtor, sexo, dataDeNasc) {
    const sql = "INSERT INTO tbl_ator(nome_ator, sexo, dt_nascimento) VALUES(?,?,?)";
    const infoActor = [nomeDoAtor, sexo, dataDeNasc];
    const conn = await database.connectDB();
    await conn.query(sql, infoActor);
    conn.end();
}

async function updateActor(nomeDoAtor, sexo, dataDeNasc,idator) {
    const sql = "UPDATE tbl_ator SET nome_ator = ?, sexo = ?, dt_nascimento = ? WHERE id_ator = ?";

    const infoActor = [nomeDoAtor, sexo, dataDeNasc,idator]

    const conn = await database.connectDB();
    await conn.query(sql, infoActor);
    conn.end();
}

export default {createActor, updateActor};