import "./catagory.styles.scss";
import { useParams } from "react-router-dom"; // Import useParams to access route parameters
import { useContext, useState, useEffect } from "react";
import { CatagoriesContext } from "../../contexts/catagories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Catagory = () => {
  const { catagory } = useParams(); // Get the category from the URL parameters
  const { catagoriesMap } = useContext(CatagoriesContext);
  console.log("Categories Map:", catagoriesMap);
  console.log("Category from URL:", catagory);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      const categoryProducts = catagoriesMap[catagory]; // Get the products for the selected category
      setProducts(categoryProducts); // Set the products state with the fetched products
    };
    fetchProducts();
  }, [catagoriesMap, catagory]);
  // Access the categories from context
  return (
    <>
      <h2 className="category-title">{catagory.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />; // Render the ProductCard component for each product
          })}
      </div>
    </>
  );
};

export default Catagory;
