import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease, increase, removeItem } from '../features/cart/cartSlice';

const BasketItem = ({id, img, title, price, amount}) => {
    const dispatch = useDispatch();
  return (
    <div>
      <div className="Cart-Items">
             <div className="image-box">
                 <img src={img} style={{ height: 120 }} />
             </div>
            <div className="about">
                 <h1 className="title">{title}</h1>
                 <h3 className="subtitle">-</h3>
            </div>
            <div className="counter">
            <div className="btn" onClick={()=> {dispatch(increase(id))}}>+</div>
             <div className="count">{amount}</div>
              <div className="btn" onClick={()=> {
                if (amount === 1){
                    dispatch(removeItem(id));
                    return;
                } dispatch(decrease(id));
              }}>-</div>
            </div>
            <div className="prices">
             <div className="amount">${price}</div>
             <div className="remove" ><u onClick={() => {dispatch(removeItem(id))}}>Remove</u></div>
            </div>
         </div>
    </div>
  )
}

export default BasketItem
