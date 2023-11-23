import NavBar from "./components/Navbar"
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
const App = () => {
  return(
    <div className="parents">
      <NavBar></NavBar>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  )
};

export default App;
