import cartsDAO from "./dao/mongo/cart.services.js";
import productsDAO from "./dao/mongo/products.services.js";

import cartRepository from "./repository/cart.repository.js";
import productRepository from "./repository/products.repository.js";

const cartDao = new cartsDAO();
const productDao = new productsDAO();

export const cartService = new cartRepository(cartDao);
export const productService = new productRepository(productDao);
