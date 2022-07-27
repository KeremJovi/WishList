import 'express-async-errors';
import Product from '../model/Product';
import AppError from '../../../middleware/errors/AppError';

class CreateProductServices {
  async execute(product) {
    const thisExists = await Product.findOne({
      where: { title: product.title },
    });
    if (thisExists) {
      throw new AppError('This title already exists!');
    }

    const result = await Product.create(product);
    return result;
  }
}

export default new CreateProductServices();
