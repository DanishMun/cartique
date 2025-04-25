import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context"; // Import the UserContext
import { signOutUser } from "../../utils/firebase.utils"; // Import the signOutUser function
import CartIconComponent from "../../components/cart-icon/cart-icon.component"; // Import the CartIconComponent
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context"; // Import the CartContext
// Import the CartContext
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext); // Access the current user from context
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null); // Clear the current user in context
  };
  const { isCartOpen } = useContext(CartContext); // Access the cart items from context
  console.log("Current User:", currentUser); // Debugging log
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIconComponent />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
