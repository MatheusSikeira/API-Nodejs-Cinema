import express from "express";
import service from '../services/loginService.js';
import { generatePassword } from '../helpers/loginActions.js';
import { generateToken } from '../helpers/userfeatures.js';

const router = express.Router();

router.post('/', async (req, res) =>  {
    const {email, password} = req.body;

    try{
        const users = await service.login(email, password);
        const token =  generateToken();

        if(users.length > 0) {
            res.status(200).send({message: token});
        } else {
            res.status(401).send({message: 'Login incorreto'});
        }
    } catch(err) {
        res.status(500).send({message: `Houve um erro no banco de dados. ${err}`});
    }
});

router.post('/reset', async (req, res) => {
    const {email} = req.body;
    try{
        const user = await service.checkEmail(email);

        if(user.length > 0){
            const newPassword = generatePassword();
            await service.changePassword(email, newPassword);
            res.status(200).send({message: `Nova senha: ${newPassword}`});
        } else {
            res.status(404).send({message: 'Usuario não encontrado'});
        }

        }   catch(err) {
            res.status(500).send({message: `Houve um erro no banco de dados. ${err}`});
        }
    });
export default router;