import express from "express";
import service from "../services/directorService.js";

const route = express.Router();

route.post("/", async (request, response) => {
    const {nomeDoDiretor, Nacio, dataDeNasc, sexo} = request.body;
    
    if(nomeDoAtor.length > 45) {
        return response.status(400).send({"message": "Máximo de caracteres atingido"});
    }
    else if(Nacio.length > 45) {
        return response.status(400).send({"message": "Máximo de caracteres atingido"});
    }
    else if(dataDeNasc === "" || dataDeNasc.trim() === "") { //colocar em todos, é necessário fazer essa condição no frontend e no backend
        return response.status(400).send({"message": "Os campos da data de nascimento estão incorretos"});
    }

    await service.createActor(nomeDoDiretor, Nacio, dataDeNasc, sexo);
    return response.status(201).send({"message": "Ator cadastrado com sucesso!"})
});
route.put('/:iddiretor', async (request, response) => {
    const {nomeDoDiretor, Nacio, dataDeNasc, sexo} = request.body;
    const {iddiretor} = request.params;

    if(nomeDoAtor.length > 45) {
        return response.status(400).send({"message": "Máximo de caracteres atingido"});
    }
    else if(Nacio.length > 45) {
        return response.status(400).send({"message": "Máximo de caracteres atingido"});
    }
    else if(dataDeNasc === "" || dataDeNasc.trim() === "") {
        return response.status(400).send({"message": "Os campos da data de nascimento estão incorretos"});
    }
    await service.updateDirector(nomeDoDiretor, Nacio, dataDeNasc, sexo,iddiretor);
    return response.status(200).send({"message": "Diretor atualizado com sucesso!"})
});

export default route; // utilizar os dados deste arquivo em outros arquivos