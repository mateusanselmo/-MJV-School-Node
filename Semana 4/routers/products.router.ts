import { Request, Response, Router } from 'express';
import productsService from '../services/products.service';

const router = Router();

const products = productsService.getAll();

router.get('/', (req: Request, res: Response) => {
    res.send(products);
});

router.post('/', (req: Request, res: Response) => {
    productsService.create(req.body);
    res.status(201).send({ message: "Produto adicionado com sucesso!" });
});

router.put('/:id', (req: Request, res: Response) => {
    try{
        productsService.update(Number(req.params.id), req.body);
        res.status(200).send({ message: "Produto atualizado com sucesso!" });
    } catch(error: any){
        res.status(400).send({message:error.message})
    }
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    try{
        productsService.remove(Number(req.params.id), req.body);
        res.status(200).send({ message: "Produto removido com sucesso!" });
    } catch(error: any){
        res.status(400).send({message:error.message})
    }
});

export default router;