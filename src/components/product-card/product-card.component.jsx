import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"; // Import the CartContext
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product; // Destructure the product object to get name, price, and <imageUrl></imag
  const { addItemToCart } = useContext(CartContext);
  // Access the addItemToCart function from context
  const addItemToCartHandler = () => addItemToCart(product); // Create a handler to add the product to the cart
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemToCartHandler}>
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
