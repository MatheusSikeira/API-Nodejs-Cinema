import express from "express";
import service from "../services/actorService.js";

const route = express.Router();

route.post("/", async (request, response) => {
    const {nomeDoAtor, sexo, dataDeNasc} = request.body; 

    if(nomeDoAtor.length > 45) {
        return response.status(400).send({"message": "Máximo de caracteres atingido"});
    }

    else if(sexo.ToUpperCase() != "M" || sexo.ToUpperCase() != "F"){
        return response.status(400).send({"message": "O sexo do ator está incorreto"})
    }
    await service.createActor(nomeDoAtor,sexo,dataDeNasc);
    return response.status(201).send({"message": "Ator cadastrado com sucesso!"})
});

route.put('/:idator', async (request, response) => {
    const {nomeDoAtor, sexo, dataDeNasc} = request.body;
    const {idator} = request.params;
    
    if(nomeDoAtor.length > 45) {
        return response.status(400).send({"message": "Máximo de caracteres atingido"});
    }

    else if(sexo.ToUpperCase() != "M" || sexo.ToUpperCase() != "F"){
        return response.status(400).send({"message": "O sexo do ator está incorreto"})
    }
    await service.updateActor(nomeDoAtor,sexo,dataDeNasc,idator);
    return response.status(200).send({"message": "Ator cadastrado com sucesso!"})
});
    export default route;