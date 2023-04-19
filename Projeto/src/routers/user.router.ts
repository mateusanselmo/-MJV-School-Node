import { Request, Response, Router} from 'express';
import UserService from '../services/user.service';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
    try {
        const token = await UserService.login(req.body.username, req.body.password);
        res.status(200).send({ token });
    } catch (error: any){
        res.status(401).send({message: error});
    }
});

router.post('/create:token', async (req: Request, res: Response) => {
    await UserService.create(req.body, req.params.token);
    res.status(201).send({ message: "User criado com sucesso!" });
});

router.delete('/remove:token', async (req: Request, res: Response) => {
    await UserService.remove(req.body.username, req.params.token);
    res.status(201).send({ message: "User removido com sucesso!" });
});

export default router;