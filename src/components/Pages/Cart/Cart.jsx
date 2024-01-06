import React, { useContext } from "react";
import PRODUCTS from "../../products";
import { ShopContext } from '../../../context/Shop-context'
import { CartItem } from "./Cart-item";
import "./cart.css"
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const {cartItems,getTotalCartAmount}=useContext(ShopContext)
  const totalAmount=getTotalCartAmount()
  const navigate=useNavigate()
  return (

    <div className="cart">
      <div>
        <h1>Alis veris sebeti</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product,key)=>{
          if(cartItems[product.id]!==0){
            return <CartItem key={`index-${key}`} data={product}/>
          }
        })}
      </div>

      {totalAmount>0?
      <div className="checkout">
       
        <p>Subtotal : ${totalAmount}</p>
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
        
      </div>
      : <h1>You cart is Empty</h1>}
    </div>

  );
};

export default Cart;
