import { useContext } from "react";
import { CatagoriesContext } from "../../contexts/catagories.context"; // Import the ProductsContext

import "./catagories-preview.styles.scss";
import CategoryPreview from "../../components/catagory-preview/catagory-preview.component";
const CatagoriesPreview = () => {
  const { catagoriesMap } = useContext(CatagoriesContext); // Access the products from context
  return (
    <>
      {Object.keys(catagoriesMap).map((title) => {
        const products = catagoriesMap[title]; // Get the products for each category
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CatagoriesPreview;
