import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import CatagoriesPreview from "../catagories-preview/catagories-preview";
import Catagory from "../catagory/catagory.component";
const Shop = () => {
  return (
    <div className="shop-container">
      <Routes>
        <Route index element={<CatagoriesPreview />} />
        <Route path=":catagory" element={<Catagory />} />
      </Routes>
    </div>
  );
};

export default Shop;
