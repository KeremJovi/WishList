import { Router } from 'express';
import ProductController from '../controller/ProductController';

const productRouter = Router();

productRouter.post('/new', ProductController.store);
//productRouter.get('/find', ProductController.index);

export default productRouter;
