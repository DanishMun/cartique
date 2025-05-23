import { Link } from "react-router-dom";
import "./catagory-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4) // Show only the first 4 products
          .map((product) => {
            return <ProductCard key={product.id} product={product} />; // Render the ProductCard component for each product
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
