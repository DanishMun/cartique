import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"; // Import the CartContext
// This component represents the cart icon in the navigation bar. It uses the ShoppingIcon SVG and displays the number of items in the cart.
// The CartContext is used to manage the state of the cart, including whether it is open or closed and the number of items in it.

const CartIconComponent = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext); // Access the cart state from context
  // Function to toggle the cart open/closed

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen); // Toggle the cart state
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIconComponent;
