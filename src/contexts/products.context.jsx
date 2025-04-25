import PRODUCTS from "../shop-data.json";
import { createContext, useState } from "react";
import { useEffect } from "react";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  // Empty dependency array means this effect runs once on mount
  // Set the products state with the imported SHOP_DATA

  const value = { products }; // Create a value object to pass to the context provider

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
