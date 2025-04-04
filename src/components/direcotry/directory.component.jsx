import CatagoryItem from "../catagory-item/catagory.component";
import "./directory.styles.scss";
const Directory = ({ catagories }) => {
  return (
    //  Directory component renders a list of category items
    <div className="directory-container">
      {catagories.map((catagory) => (
        <CatagoryItem key={catagory.id} catagory={catagory} />
      ))}
    </div>
  );
};
export default Directory;
