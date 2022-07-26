import CreateProduct from '../services/CreateProductServices';
//import ShowProduct from '../services/ShowProductServices';

class ProductController {
  async store(req, res) {
    const product = await CreateProduct.execute(req.body);

    return res.json(product);
  }

  // async show(req, res) {
  //   const { id } = req.params;
  //   const findProduct = await ShowProduct.execute();
  //   return res.json(findProduct);
  // }
}

export default new ProductController();
