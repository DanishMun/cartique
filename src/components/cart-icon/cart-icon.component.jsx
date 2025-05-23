import { CartIconContainer, ItemCount, ShopingIcon } from "./cart-icon.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"; // Import the CartContext
// This component represents the cart icon in the navigation bar. It uses the ShoppingIcon SVG and displays the number of items in the cart.
// The CartContext is used to manage the state of the cart, including whether it is open or closed and the number of items in it.

const CartIconComponent = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext); // Access the cart state from context
  // Function to toggle the cart open/closed

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen); // Toggle the cart state
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShopingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIconComponent;
