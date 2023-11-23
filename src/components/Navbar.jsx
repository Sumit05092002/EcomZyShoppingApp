import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return(
    <div className="navigation">
      <div className="logo">
       <NavLink to="/">logo</NavLink> 
      </div>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart"><FaShoppingCart></FaShoppingCart></NavLink>
        </ul>
      </nav>
    </div>
  )
};

export default Navbar;
