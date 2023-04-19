import { Request, Response, Router} from 'express';
import SupplierService from '../services/supplier.service';
import { loginMiddleware } from '../middlewares/login.middleware';

const router = Router();

router.get('/', loginMiddleware, async (req: Request, res: Response) => {
    const suppliers = await SupplierService.getAll();
    res.send(suppliers);
});

router.get('/:cnpj', loginMiddleware, async (req: Request, res: Response) => {
    const supplier = await SupplierService.getCNPJ(req.params.cnpj.split(':')[1]);
    if(!supplier) return res.status(400).send({ message: "Supplier não encontrado!" });
    res.status(200).send({ supplier });
});

router.post('/', loginMiddleware, async (req: Request, res: Response) => {
    await SupplierService.create(req.body);
    res.status(201).send({ message: "Supplier criado com sucesso!" });
});

router.delete('/remove/:cnpj', loginMiddleware, async (req: Request, res: Response) => {
    try{
        await SupplierService.remove(req.params.cnpj.split(':')[1]);
        res.status(200).send({ message: "Supplier encontrado com sucesso!" });
    } catch(error: any){
        res.status(400).send({ message: error.message });
    }
});

router.put('/:cnpj', loginMiddleware, async (req: Request, res: Response) => {
    try{
        await SupplierService.update(req.params.cnpj.split(':')[1], req.body);
        res.status(200).send({ message: "Supplier atualizado com sucesso!" });
    } catch(error: any){
        res.status(400).send({ message: error.message });
    }
});

router.get('/product/:productId', loginMiddleware, async (req: Request, res: Response) => {
    const productId = Number(req.params.productId.split(':')[1]);
    const product = await SupplierService.getProduct(productId);
    const supplier = await SupplierService.getSupplierByProductId(productId);
    const msg = `Supplier: ${supplier?.company},\n Product: ${product?.name}`;
    res.status(200).send({ message: msg});
});

export default router;