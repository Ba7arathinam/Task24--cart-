import React from 'react'
import { Button } from 'react-bootstrap'
import './Card.css';

const Cart1=(props)=> {
    const card=props.card

    let total =0;
    for(let i=0;i < card.length;i++) {
        const product=card[i];
        total = total + Number(product.price);

    }

    let shipping = 0;
    if(total >500){
      shipping=0;
     }
    else if(total >200){
        shipping=5;
    }else if(total >140){
        shipping=12.99;
    }

const tax = (total/10).toFixed(2);
const grandTotal = (total + shipping +Number(tax))
  return (
    <div className='summary-box shadow-sm'>
        <h5 className='summary-title'>CART</h5><hr/>
        <h6>Items Ordered: {card.length}</h6>
        <h6>Product Price: {total}</h6>
        <h5><small>Shipping Cost :${shipping}</small></h5>
        <h5><small>Tax + vat:${tax}</small></h5>
        <h5>Total Price:${grandTotal}</h5>
        <Button variant='success mt-2'>Product to checkout</Button>
    </div>
  )
}

export default Cart1