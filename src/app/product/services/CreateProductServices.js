import Product from '../model/Product';

class CreateProductServices {
  async execute(product) {
    try {
      const result = await Product.create(product);
      return result;
    } catch (error) {}
  }
}

export default new CreateProductServices();
