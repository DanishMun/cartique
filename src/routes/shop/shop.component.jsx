import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context"; // Import the ProductsContext
import "./shop.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
  const { products } = useContext(ProductsContext); // Access the products from context
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> // Render each product card
      ))}
    </div>
  );
};

export default Shop;
