import React from 'react'
import PRODUCTS from "../../products"
import Product from './Product'
import "./shop.css"
const Shop = () => {
  return (
    <div className="shop">  
      <div className="shopTitle">
        <h1>Huseyn Shopping Center</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product,key)=>(
          <Product data={product} key={`index-${key}`}/>
        ))}
      </div>
    </div>
  )
}

export default Shop