import { remove } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
// import {AiTwotoneDelete} from "react-icons/fa"
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const CartItem = ({item,index}) => {
  const {cart}=useSelector((state)=>state)
  const dispatch=useDispatch();
    const removecart=()=>{
      dispatch(remove(item.id));
      toast.success("Item removed successfully")
    }
  return(
    <div>
      <img src={item.image} alt="" />
      <div className="title">
        <h1>{item.title}</h1>
      </div>
      <div className="description">
        <p>{item.description}</p>
      </div>
      <div className="price">
        <p>{item.price}</p>
      </div>
      <button onClick={removecart}>Remove from Cart</button>
    </div>
  )
};

export default CartItem;
