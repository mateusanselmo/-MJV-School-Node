import { Request, Response, Router } from 'express';
import productsService from '../services/products.service';

const router = Router();


router.get('/', async (req: Request, res: Response) => {
    const products = await productsService.getAll();
    res.send(products);
});

router.get('/:id', async (req: Request, res: Response) => {
    const product = await productsService.getById(Number(req.params.id));
    if(!product) return res.status(400).send({ message: "Produto não encontrado!" });
    res.send(product);
});

router.post('/', async (req: Request, res: Response) => {
    await productsService.create(req.body);
    res.status(201).send({ message: "Produto adicionado com sucesso!" });
});

router.put('/:id', async (req: Request, res: Response) => {
    try{
        await productsService.update(Number(req.params.id), req.body);
        res.status(200).send({ message: "Produto atualizado com sucesso!" });
    } catch(error: any){
        res.status(400).send({message:error.message})
    }
});

router.delete('/remove/:id', async (req: Request, res: Response) => {
    try{
        await productsService.remove(Number(req.params.id));
        res.status(200).send({ message: "Produto removido com sucesso!" });
    } catch(error: any){
        res.status(400).send({message:error.message})
    }
});

export default router;