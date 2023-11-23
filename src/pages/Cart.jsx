import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";
const Cart = () => {
  const[amount,totalAmount]=useState(0);
  const {cart}=useSelector((state)=>state)
  console.log(cart);
  useEffect(()=>{
    totalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]);
  return(
    <div>
      {
        cart.length>0?(<div>
          {
            cart.map((item,index)=>{
              return <CartItem key={item.id} item={item} index={item.index}></CartItem>
            })

          }
          <div>
            Your Cart
          </div>
          <div>Summary</div>
          <p>
            <span>TotalItems:{cart.length}</span>
          </p>
          <div>
            <p>
              Total Amount:{}
              <button>CheckOut Now</button>
            </p>
          </div>
        </div>):(<div>
          <h1>Your cart is empty</h1>
          <Link to="/">Shop Now</Link>
          </div>)
      }
    </div>
  )
};
export default Cart;
