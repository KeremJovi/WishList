import Product from '../model/Product';
import AppError from '../../../middleware/errors/AppError';

class ShowProductServices {
  async execute(product_id) {
    const findProductId = await Product.findByPk(product_id);

    if (!findProductId) {
      throw new AppError('This product does not exist');
    }
    return findProductId;
  }
}
export default new ShowProductServices();
