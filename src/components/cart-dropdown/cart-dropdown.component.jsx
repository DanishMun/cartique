import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component"; // Import the CartItem component
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext); // Access the cart items from context
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
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
