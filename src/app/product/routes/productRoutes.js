import { Router } from 'express';
import ProductController from '../controller/ProductController';

const productRouter = Router();

productRouter.post('/new', ProductController.store);
productRouter.get('/:product_id', ProductController.show);
productRouter.put('/up/:product_id', ProductController.update);
productRouter.delete('/out/:product_id', ProductController.delete);

export default productRouter;
