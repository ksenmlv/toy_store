function RightBasket() {
    return (
        <div style={{display: 'none'}} className="overlay">
          <div className="rightSide">
            <h2>Basket  <img src="/img/cancel_active.svg" alt="button of cancel" className="btn_cancel"/></h2>

            {/* товары в корзине */}
            <div className="items">
                <div className="cardItem">
                <img src="img/toys/bearbrick1.png" alt="bearbrick_1" className="img_toy"/>
                <div>
                    <p>Bearbrick & Sesame Street 'Cookie Monster Costume'</p>
                    <b>317$</b>
                </div>
                <img src="/img/cancel_active.svg" alt="button of cancel" className="btn_cancel"/>
                </div>

                <div className="cardItem">
                <img src="img/toys/bearbrick2.png" alt="bearbrick_2" className="img_toy"/>
                <div>
                    <p>Bearbrick & Despicable Me 'Kevin Minion'</p>
                    <b>299$</b>
                </div>
                <img src="/img/cancel_active.svg" alt="button of cancel" className="btn_cancel"/>
                </div>
            </div>

            {/* итого и налог с кнопкой*/}
            <ul>
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
                <button className="btn_order">Make an order<img src="/img/arrow.svg" alt="arrow" /></button>
            </ul>
                        
          </div>
        </div>
    )
}


export default RightBasket;