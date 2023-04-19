import { Router} from 'express';
import healthRouter from './health.router';
import userRouter from './user.router';
import supplierRouter from './supplier.router';
import productRouter from './product.router';

const router = Router();

router.use('/check', healthRouter);
router.use('/user', userRouter);
router.use('/supplier', supplierRouter);
router.use('/product', productRouter);

export default router;