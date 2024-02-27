// import { findCarts, createCart, getCartById, addProductCart, updateProductQuantity, deleteProductFromCart, updateCartWithProducts, deleteAllProductsFromCart } from "../services/dao/mongo/cart.services.js";

import { cartService } from "../services/service.js";

export const getCartsController = async (req, res) => {
    try {
      const carts = await cartService.findCarts();
      res.status(200).json({ carts: carts });
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
};
  
export const createCartController = async (req, res) => {
    try {
        const cart = await cartService.createCart(req.body);
        res.json({
            cart,
            message: "Cart created"
        })
    }
    catch(error) {
        console.log(error);
        res.json({
            error,
            message: "Error"
        });
    }
};
  
export const getCartByIdController = async (req, res) => {
    const { cid } = req.params;

    try {
        const cartSelected = await cartService.getCartById(cid);
        res.status(200).json({ cartSelected: cartSelected });
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
};

export const updateCartController = async (req, res) => {
    const { cid } = req.params;
    const { products } = req.body;
  
    try {
      const result = await cartService.updateCartWithProducts(cid, products);
      res.json({
        result,
        message: "Cart updated"
        })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const deleteCartByCartIdController = async (req, res) => {
    const { cid } = req.params;
  
    try {
      const result = await cartService.deleteAllProductsFromCart(cid);
      res.json({
        result,
        message: "Products deleted"
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const addProductByCartIdController = async (req, res) => {
    const { cid, pid } = req.params;
    try {
        const result = await cartService.addProductCart(cid, pid);
        res.json({
            result,
            message: "Product added"
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateQuantityProductController = async (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    try {
    const result = await cartService.updateProductQuantity(cid, pid, quantity);
    res.json({
        result,
        message: "Product updated"
    });
    } catch (error) {
     res.status(500).json({ error: error.message });
    } 
};

export const deleteProductByCartIdController = async (req, res) => {
    const { cid, pid } = req.params;
    try {
      const result = await cartService.deleteProductFromCart(cid, pid);
      res.json({
        result,
        message: "Product deleted"
    });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};