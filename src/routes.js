import { Router } from 'express';
import productRouter from '../src/app/product/routes/productRoutes';

const routes = new Router();

routes.use('/products', productRouter);

export default routes;
