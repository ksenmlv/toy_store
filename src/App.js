function App() {
  return (
    <div className="wrapper">

      <header>
        {/* левая часть заголовка*/}
        <div className='headerLeft'>  
          <img width={40} height={40} src="/img/logo_header.png" />
          <div>
            <h3>BEARBRICKS FROM KSENIA</h3>
            <p>The best rare toys store</p>
          </div>
        </div>

        {/* правая часть заголовка */}
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/basket.svg" />
            <span>10$</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
        
      </header>


      {/* основная часть страницы - карточки товаров */}
      <div className="content">
        <h1>All toys</h1>

        <div className="toys">
          <div className="card">
            <img src="/img/toys/bearbrick1.png" alt="bearbrick_1" width={200} height={200}/>
            <p>Bearbrick & Sesame Street 'Cookie Monster Costume' </p>
            <div className="cardBottom">
              <div className="cardBottom2">
                <span>Price:</span>
                <b> 317$</b>
              </div>
              <button className="button">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/toys/bearbrick2.png" alt="bearbrick_2" width={200} height={200}/>
            <p>Bearbrick & Despicable Me 'Kevin Minion' </p>
            <div className="cardBottom">
              <div className="cardBottom2">
                <span>Price:</span>
                <b> 299$</b>
              </div>
              <button className="button">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/toys/bearbrick3.png" alt="bearbrick_3" width={200} height={200}/>
            <p>Bearbrick FCReal Bristol & COCA-COLA</p>
            <div className="cardBottom">
              <div className="cardBottom2">
                <span>Price:</span>
                <b> 272$</b>
              </div>
              <button className="button">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/toys/bearbrick4.png" alt="bearbrick_4" width={200} height={200}/>
            <p>Bearbrick & Dark Knight The Joker</p>
            <div className="cardBottom">
              <div className="cardBottom2">
                <span>Price:</span>
                <b> 127$</b>
              </div>
              <button className="button">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/toys/bearbrick5.png" alt="bearbrick_5" width={200} height={200}/>
            <p>Bearbrick Squid Game Two-Toned Collectible Statue</p>
            <div className="cardBottom">
              <div className="cardBottom2">
                <span>Price:</span>
                <b> 158$</b>
              </div>
              <button className="button">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/toys/bearbrick6.png" alt="bearbrick_6" width={200} height={200}/>
            <p>Bearbrick & Care Bears 'Cheer Bear Costume'</p>
            <div className="cardBottom">
              <div className="cardBottom2">
                <span>Price:</span>
                <b> 121$</b>
              </div>
              <button className="button">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/toys/bearbrick7.png" alt="bearbrick_7" width={200} height={200}/>
            <p>Bearbrick & Marvel 'Iron Mark'</p>
            <div className="cardBottom">
              <div className="cardBottom2">
                <span>Price:</span>
                <b> 320$</b>
              </div>
              <button className="button">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/toys/bearbrick8.png" alt="bearbrick_8" width={200} height={200}/>
            <p>Bearbrick & BAPE & Comme Des Garcons 'Camo Shark'</p>
            <div className="cardBottom">
              <div className="cardBottom2">
                <span>Price:</span>
                <b> 285$</b>
              </div>
              <button className="button">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/toys/bearbrick9.png" alt="bearbrick_9" width={200} height={200}/>
            <p>Bearbrick Bape & 'Alpha Camo Shark'</p>
            <div className="cardBottom">
              <div className="cardBottom2">
                <span>Price:</span>
                <b> 270$</b>
              </div>
              <button className="button">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>
          


        </div>

      </div>
    </div>
  );
}

export default App;   //возможность использовать эту функцию в других файлах
