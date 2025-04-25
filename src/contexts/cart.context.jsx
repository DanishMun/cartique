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
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  addItemToCart: () => null,
  cartCount: 0,
  setCartCount: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount); // Update the cart count whenever cartItems change
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  }; // Create a value object to pass to the context provider

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
// This code defines a CartContext and CartProvider for managing the state of a shopping cart in a React application. The CartContext provides a way to share the cart's open/closed state across components, and the CartProvider wraps around the application to provide this context to its children. The initial state of the cart is set to closed (false).
