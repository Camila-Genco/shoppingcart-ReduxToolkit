import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal, setCartItems } from '../features/cart/cartSlice';
import BasketContainer from './BasketContainer'
import Modal from './Modal'
import Navbar from './Navbar'
import { useEffect } from 'react';

const api = "https://course-api.com/react-useReducer-cart-project";

const Basket = () => {
    const {cartItems} = useSelector(store => store.cart);
    const {isOpen} = useSelector(store => store.modal);
    const dispatch = useDispatch();

  useEffect(() => {
      (async () =>{
        const response = await fetch(api);
        const data = await response.json();
        dispatch(setCartItems(data))
      }
      )()
    }, [])

    useEffect(() => {
        dispatch(calculateTotal());
      }, [cartItems, dispatch])
    
  return (
    <div>
        {isOpen && <Modal/> }
        <Navbar/>
        <BasketContainer/>
    </div>
  )
}

export default Basket
