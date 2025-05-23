import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // Check if the item already exists in the cart
  if (existingCartItem) {
    // If it exists, update the <quantity>

    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increment the quantity of the existing item
        : cartItem
    );
  }
  // If the item does not exist, add it to the cart with a quantity of 1
  return [...cartItems, { ...productToAdd, quantity: 1 }]; // This function adds an item to the cart
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // Check if the item already exists in the cart
  if (existingCartItem.quantity === 1) {
    // If the quantity is 1, remove the item from the cart
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // If the quantity is greater than 1, decrement the quantity of the item
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 } // Decrement the quantity of the existing item
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToRemove) => {
  // This function clears an item from the cart
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id); // Remove the item from the cart
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  addItemToCart: () => null,
  cartCount: 0,
  setCartCount: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  cartTotal: 0,
  setCartTotal: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0); // Initialize cartTotal state

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount); // Update the cart count whenever cartItems change
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal); // Update the cart count whenever cartItems change
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  }; // Create a value object to pass to the context provider

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
// This code defines a CartContext and CartProvider for managing the state of a shopping cart in a React application. The CartContext provides a way to share the cart's open/closed state across components, and the CartProvider wraps around the application to provide this context to its children. The initial state of the cart is set to closed (false).
