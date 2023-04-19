import { Request, Response, Router} from 'express';
import ProductService from '../services/product.service';
import { loginMiddleware } from '../middlewares/login.middleware';
const router = Router();

router.get('/', loginMiddleware, async (req: Request, res: Response) => {
    const products = await ProductService.getAll();
    res.send(products);
});

router.get('/:id', loginMiddleware, async (req: Request, res: Response) => {
    const product = await ProductService.getById(Number(req.params.id.split(':')[1]));
    if(!product) return res.status(400).send({ message: "Produto não encontrado!" });
    res.send(product);
});

router.post('/', loginMiddleware, async (req: Request, res: Response) => {
    await ProductService.create(req.body);
    res.status(201).send({ message: "Produto adicionado com sucesso!" });
});

router.put('/:id', loginMiddleware, async (req: Request, res: Response) => {
    try{
        await ProductService.update(Number(req.params.id.split(':')[1]), req.body);
        res.status(200).send({ message: "Produto atualizado com sucesso!" });
    } catch(error: any){
        res.status(400).send({message:error.message})
    }
});

router.delete('/remove/:id', loginMiddleware, async (req: Request, res: Response) => {
    try{
        await ProductService.remove(Number(req.params.id.split(':')[1]));
        res.status(200).send({ message: "Produto removido com sucesso!" });
    } catch(error: any){
        res.status(400).send({message:error.message})
    }
});


export default router;