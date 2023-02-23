import React, { useEffect, useState } from 'react'
import JsonData from "./data.json"
import Product from './Product';
import Cart1 from './Cart1';
const  Cart=()=> {
   const [product,setProduct]=useState([]);
   const [card,setCard]=useState([])

   useEffect(()=>{
    setProduct(JsonData)
   },[])
   const addProduct=(product)=>{
    // alert("added to cart")
    const newCard=[...card,product]
    setCard(newCard)
   }
  return (
    <div className='container-fluid d-flex'>
        <div className='col-lg-9 product-area border-right'>
            {
                product.map(pd => <Product product={pd} addProduct={addProduct}/>)
            }
        </div>
        <div className='col-lg-3 card-area'>
           <Cart1 card={card}></Cart1>
        </div>
    </div>
  )
}

export default Cart