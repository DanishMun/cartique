import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component"; // Import the CartItem component
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
// This component represents the dropdown menu that appears when the cart icon is clicked. It displays the items in the cart and a button to proceed to checkout.
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext); // Access the cart items from context
  const navigate = useNavigate(); // Initialize the navigate function for navigation
  const goToCheckoutHandler = () => {
    navigate("/checkout"); // Navigate to the checkout page when the button is clicked
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <CartItem cartItem={item} />
            {/* Render the CartItem component for each item */}
          </div>
        ))}
      </div>
      <Button buttonType="inverted" onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
