import React, { createContext, useState } from "react";
import PRODUCTS from "../components/products";

export const ShopContext=createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for (let index = 1; index < PRODUCTS.length+1; index++) {
        cart[index]=0
    }
    return cart
}
export const ShopContextProvider=(props)=>{
       
    const [cartItems,setCartItems]=useState(getDefaultCart)

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            console.log("item",item);
            if(cartItems[item]>0){
                let itemInfo=PRODUCTS.find((product)=>product.id===Number(item))
                totalAmount+=cartItems[item]*itemInfo.price
            }
        }   
        return totalAmount
    }
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }   
    const updateCartItemCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }
    console.log(cartItems);
    const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}