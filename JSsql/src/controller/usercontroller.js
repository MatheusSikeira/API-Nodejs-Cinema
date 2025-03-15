import express, { request, response } from "express";
import service from "../services/userService.js";

const route = express.Router();

route.get("/", async(request, response) => {
    console.log("teste");
    const users = await service.listUser();
    console.log("teste2",users)
    if(users.length < 1){
        return response.status(204).end();
    }
    return response.status(200).send({"message": users});
});

route.get("/:tipo", async (request, response) => {
    const {tipo} = request.params;

    const users = await service.listUserByType(tipo);

    return response.status(200).send({"message": users});
});

route.post("/", async (request, response) => {
    const {name, email, password, typeUser} = request.body;

    if(password.lenght <= 5) {
        return response.status(400).send({"message": "A senha deve conter no minimo 6 caracteres!"});
    }
    else if(typeUser.toUpperCase() != "Administrador".toUpperCase() && typeUser.toUpperCase() != "Comum".toUpperCase()) {
        return response.status(400).send({"message": "O tipo de usúario deve ser 'Administrador' ou 'Comum'."})
    }
    await service.createUser(name, email, password, typeUser);
    return response.status(201).send({"message": "Usuário cadastrado com sucesso!"})
});

route.put('/:idUser', async (request, response) => {
    const {name, email, password, typeUser} = request.body;
    const {idUser} = request.params;

    if(password.lenght <= 5) {
        return response.status(400).send({"message": "A senha deve conter no minimo 6 caracteres!"});
    }
    else if(typeUser.toUpperCase() != "Administrador".toUpperCase() && typeUser.toUpperCase() != "Comum".toUpperCase()) {
        return response.status(400).send({"message": "O tipo de usúario deve ser 'Administrador' ou 'Comum'."})
    }
    await service.updateUser(name, email, password, typeUser, idUser);

    return response.status(200).send({"message": "Dados atualizados com sucesso"});

});

route.delete("/:idUser", async(request, response) => {
    const {idUser} = request.params;

    await service.deleteUser(idUser);
    
    return response.status(200).send({"message": "Usuário excluido com sucesso"});
});

export default route; // utilizar os dados deste arquivo em outros arquivos