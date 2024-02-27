export default class cartRepository {
    constructor(dao) {
      this.dao = dao;
    }
  
    createCart = async (cart) => {
      return await this.dao.createCart(cart);
    };
  
    getCartByCartId = async (id) => {
      try {
        return await this.dao.getCartByCartId(id);
      } catch (error) {
        throw new Error(error.message);
      }
    };
  
    addProductCart = async (cartId, productId) => {
      try {
        return await this.dao.addProductCart(cartId, productId);
      } catch (error) {
        throw new Error(error.message);
      }
    };
  
    deleteAllProductsFromCart = async (cartId) => {
      try {
        return await this.dao.deleteAllProductsFromCart(cartId);
      } catch (error) {
        throw new Error(error.message);
      }
    };
  
    updateCartWithProducts = async (cartId, newProducts) => {
      try {
        return await this.dao.updateCartWithProducts(cartId, newProducts);
      } catch (error) {
        throw new Error(error.message);
      }
    };
  
    updateProductQuantity = async (cartId, productId, newQuantity) => {
      try {
        return await this.dao.updateProductQuantity(cartId, productId, newQuantity);
      } catch (error) {
        throw new Error(error.message);
      }
    };
  
    deleteProductFromCart = async (cartId, productId) => {
      try {
        return await this.dao.deleteProductFromCart(cartId, productId);
      } catch (error) {
        throw new Error(error.message);
      }
    };
}