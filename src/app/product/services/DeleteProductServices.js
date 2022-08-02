import 'express-async-errors';
import Product from '../model/Product';
import AppError from '../../../middleware/errors/AppError';

class DeleteProductServices {
  async execute(product_id) {
    const product = await Product.findByPk(product_id);

    if (!product) {
      throw new AppError('Product not found!');
    } else {
      await product.destroy();
      throw new AppError('Deleted Product!');
    }
  }
}

export default new DeleteProductServices();
