import database from '../repository/mysql.js';

async function createDirector(nomeDoDiretor, Nacio, dataDeNasc, sexo) {
    const sql = "INSERT INTO tbl_diretor(nome_diretor,nacionalidade,dt_nascimento,sexo) VALUES(?,?,?,?)";
    const infoDirector = [nomeDoDiretor,Nacio,dataDeNasc,sexo];
    const conn = await database.connectDB();
    await conn.query(sql, infoDirector);
    conn.end();
}

async function updateDirector(nomeDoDiretor,Nacio,dataDeNasc,sexo,iddiretor) {
    const sql = "UPDATE tbl_diretor SET nome_diretor = ?, nacionalidade = ?, dt_nascimento = ?, sexo = ? WHERE id_diretor = ?";

    const infoDirector = [nomeDoDiretor,Nacio,dataDeNasc,sexo,iddiretor]

    const conn = await database.connectDB();
    await conn.query(sql, infoDirector);
    conn.end();
}

export default {createDirector, updateDirector};