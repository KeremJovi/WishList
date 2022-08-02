import Product from '../model/Product';
import AppError from '../../../middleware/errors/AppError';
const { Op } = require('sequelize');

class ListProductServices {
  async execute(infoProduct) {
    console.log('estou no services', infoProduct);
    const findProduc = await Product.findAll({
      where: {
        title: {
          [Op.iLike]: `%${infoProduct}%`,
        },
      },
    });
    if (findProduc.length === 0) {
      const findAllProduct = await Product.findAll();
      return findAllProduct;
    }
    return findProduc;
  }
}

export default new ListProductServices();
