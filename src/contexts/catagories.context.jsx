import SHOP_DATA from "../shop-data.js";
import { createContext, useState } from "react";
import { useEffect } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase.utils.js";
export const CatagoriesContext = createContext({
  catagoriesMap: {},
});

export const CatagoriesProvider = ({ children }) => {
  const [catagoriesMap, setCatagoriesMap] = useState({}); // Initialize the products state as an empty object
  // Empty dependency array means this effect runs once on mount
  // Set the products state with the imported SHOP_DATA
  useEffect(() => {
    addCollectionAndDocuments("catagories", SHOP_DATA); // Uncomment this line to add products to Firestore
    // Set the products state with the imported SHOP_DATA
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      const catagoryMap = await getCategoriesAndDocuments();
      console.log(catagoryMap, "check products"); // Log the fetched products to the console
      setCatagoriesMap(catagoryMap); // Set the products state with the fetched products
    };
    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount
  // Empty dependency array means this effect runs once on mount
  const value = { catagoriesMap }; // Create a value object to pass to the context provider

  return (
    <CatagoriesContext.Provider value={value}>
      {children}
    </CatagoriesContext.Provider>
  );
};
