const Product = require('../models/product');

class ProductViewModel {
  async getAllProducts() {
    try {
      const products = await Product.find();
      return { success: true, data: products };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  async getProductById(productId) {
    try {
      console.log('Searching for product with ID:', productId);
      const product = await Product.findById(productId);
      console.log('Retrieved product:', product);
      if (!product) {
        console.log('Product not found');
        return { success: false, message: 'Product not found' };
      }
      return { success: true, data: product };
    } catch (error) {
      console.log('Error retrieving product:', error.message);
      return { success: false, message: error.message };
    }
  }
  

  async createProduct(productData) {
    try {
      const product = await Product.create(productData);
      return { success: true, message: 'Product added successfully', data: product };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async updateProduct(productId, productData) {
    try {
      const product = await Product.findByIdAndUpdate(productId, productData, { new: true });
      if (!product) {
        return { success: false, message: 'Product not found' };
      }
      return { success: true, message: 'Product updated successfully', data: product };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async deleteProduct(productId) {
    try {
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return { success: false, message: 'Product not found' };
      }
      return { success: true, message: 'Product deleted successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

module.exports = new ProductViewModel();
