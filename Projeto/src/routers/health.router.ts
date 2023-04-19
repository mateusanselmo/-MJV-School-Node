import { Request, Response, Router} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const healthCheck = { message: 'Aplicação funcionando com sucesso!'};
    res.send(healthCheck);
});

export default router;