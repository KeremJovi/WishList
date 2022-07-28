import 'express-async-errors';
import Product from '../model/Product';
import AppError from '../../../middleware/errors/AppError';

class UpdateProductServices {
  async execute(product_id, product) {
    const thisExistsProduct = await Product.findByPk(product_id);

    if (thisExistsProduct) {
      const thisTitleExists = await Product.findOne({
        where: { title: product.title },
      });

      if (
        !thisTitleExists ||
        thisTitleExists.title === thisExistsProduct.title
      ) {
        const updateProduct = await thisExistsProduct.update(product);
        return updateProduct;
      }

      if (thisTitleExists) {
        throw new AppError('There is already a product with that title');
      }
    } else {
      throw new AppError('Product not found!');
    }

    return thisExistsProduct;
  }
}

export default new UpdateProductServices();
