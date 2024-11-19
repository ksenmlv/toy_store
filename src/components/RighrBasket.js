import { useState } from "react";

function RightBasket({onClose, onRemove, items=[]}) {
    
    
    
    return (
        <div className="overlay">
          <div className="rightSide">
            <h2>Cart  <img onClick={onClose} src="/img/cancel_active.svg" alt="button of cancel" className="btn_close_basket"/></h2>

            {/* пустая корзина */}
            {items.length===0 && <div className="emptyCart">
                <img className="cart" src="/img/empty_basket.svg" alt="empty basket"/>
                <h2>Cart empty☹️</h2>
                <p>*add at least 1 product to place an order</p>
                <button onClick={onClose}>
                    <img src="/img/arrow_left.svg" alt="arrow" />
                    Go back
                </button>
            </div>}

            {/* товары в корзине */}
            {items.map((item) => (
                <div key={item.id} className="items">
                    <div className="cardItem">
                        <img src={item.imageUrl} alt="bearbrick" className="img_toy"/>
                        <div>
                            <p>{item.title}</p>
                            <b>{item.price}$</b>
                        </div>
                        <img onClick={() => onRemove(item.id)} src="/img/cancel_active.svg" alt="button of cancel" className="btn_cancel" />
                    </div>
                </div>
            ))} 
            

            {/* итого и налог с кнопкой*/}
            {items.length!==0 && <ul>
                <li>
                    <span>Tax 10%:</span>
                    <div></div>
                    <b>61.6$</b>
                </li>
                <li>
                    <span>Total</span>
                    <div></div>
                    <b>677.6$</b>
                </li>
                <button className="btn_order">Make an order<img src="/img/arrow_right.svg" alt="arrow" /></button>
            </ul>}            

          </div>
        </div>
    )
}


export default RightBasket;