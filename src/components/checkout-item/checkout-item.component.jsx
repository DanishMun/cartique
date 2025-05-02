import "./checkout-item.styles.scss";
import { useContext } from "react"; // Import the useContext hook from React
import { CartContext } from "../../contexts/cart.context"; // Import the CartContext

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem; // Destructure the cartItem object to get the properties we need
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext); // Get the addItemToCart and removeItemFromCart functions from the CartContext

  const cartClearHandler = () => clearItemFromCart(cartItem); // Call the clearItemFromCart function with the cartItem as an argument
  const addItemHandler = () => addItemToCart(cartItem); // Call the addItemToCart function with the cartItem as an argument
  const removeItemHandler = () => removeItemFromCart(cartItem); // Call the removeItemFromCart function with the cartItem as an argument
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} /> {/* Display the product image */}
      </div>
      <span className="name">{name}</span> {/* Display the product name */}
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>{" "}
        {/* Decrement quantity */}
        <span className="value">{quantity}</span> {/* Display the quantity */}
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>{" "}
        {/* Increment quantity */}
      </span>
      <span className="price">{price}</span> {/* Display the product price */}
      <div className="remove-button" onClick={cartClearHandler}>
        &#10005;
      </div>{" "}
      {/* Remove item from cart */}
    </div>
  );
};

export default CheckoutItem; // Export the CheckoutItem component for use in other files
