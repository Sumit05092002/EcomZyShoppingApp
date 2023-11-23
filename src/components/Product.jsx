import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/cartSlice";
const Product = ({post}) => {
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const removeItem=()=>{
    dispatch(remove(post.id))
    toast.success("Item removed successfully");
  }

  const addItem=()=>{
    dispatch(add(post));
    toast.success("Item added successfully");
  }
  return (<div>
    <div className="title">
      {post.title}
    </div>
    <div className="description">
      {post.description}
    </div>
    <div className="image">
      <img src={post.image} alt="" />
    </div>
    <div className="price">
      {post.price}
    </div>
    <div>
      {
        cart.some((p) => p.id == post.id) ?(<button onClick={removeItem}>Remove Item</button>): (<button onClick={addItem}>Add to Cart</button>)
      }
    </div>
  </div>);
};

export default Product;


