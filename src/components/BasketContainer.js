import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import "./Basket.css"
import BasketItem from './BasketItem';

const BasketContainer = () => {
  const dispatch = useDispatch();
  const {cartItems, total, amount} = useSelector((store) => store.cart);

  if (amount < 1){
    return <section className='empty'>
      <header className='empty-header'>
        <h2>You basket is currently empty</h2>
      </header>
    </section>
  }
  

  return (
    <div className='body'>
        <div className="Cart-Container">
        <div className="Header">
             <h3 className="Heading">Shopping Cart</h3> 
             <h5 className="Action" onClick={() =>{dispatch(openModal())}}>Remove all</h5>
        </div>
        {cartItems.map(item => <BasketItem key={item.id} {...item}/> )}        
       <hr/>
        <div className="checkout">
           <div className="total"><div>
             <div className="Subtotal">Sub-Total</div>
              <div className="items">{amount} items</div>
               </div>
                <div className="total-amount">${total.toFixed(2)}</div>
                 </div>
                  <button className="button">Checkout</button> </div>
        </div>
        
        
    </div>
  )
}

export default BasketContainer;
