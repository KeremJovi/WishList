import Product from '../model/Product';
import 'express-async-errors';
import CreateProductServices from '../services/CreateProductServices';
import ShowProductServices from '../services/ShowProductServices';
import UpdateProductServices from '../services/UpdateProductServices';
import DeleteProductServices from '../services/DeleteProductServices';
import ListProductServices from '../services/ListProductServices';

class ProductController {
  async store(req, res) {
    const product = await CreateProductServices.execute(req.body);

    return res.json(product);
  }

  async show(req, res) {
    const { product_id } = req.params;
    const findProductId = await ShowProductServices.execute(product_id);
    return res.json(findProductId);
  }

  async update(req, res) {
    const { product_id } = req.params;
    const product = req.body;
    const updateProduct = await UpdateProductServices.execute(
      product_id,
      product
    );

    return res.json(updateProduct);
  }

  async delete(req, res) {
    const { product_id } = req.params;
    const deleteProduct = await DeleteProductServices.execute(product_id);
    return res.status(200).json(deleteProduct);
  }

  async list(req, res) {
    const infoProduct = req.query.title;
    console.log('Estou no controller', infoProduct);
    const findProduc = await ListProductServices.execute(infoProduct);

    return res.json(findProduc);
  }
}

export default new ProductController();
