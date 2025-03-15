import express from "express";
import service from "../services/genreService.js";

const route = express.Router();

route.post("/", async (request, response) => {
    const {genero} = request.body;

    if(genero.length > 45){
        return response.status(400).send({"message": "Máximo de caracteres atingido"});
    }
    await service.createGenre();
    return response.status(201).send({"message": "Genero cadastrado com sucesso"})
});

route.put('/:idgenero', async (request, response) => {
    const {genero} = request.body;
    const {idgenero} = request.params;
    if(genero.length > 45){
        return response.status(400).send({"message": "Máximo de caracteres atingido"});
    }
    
    await service.updateGenre(genero,idgenero);
    return response.status(200).send({"message": "Genero atualizado com sucesso"});
});

export default route; // utilizar os dados deste arquivo em outros arquivos