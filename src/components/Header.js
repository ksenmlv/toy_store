function Header(props) {
    return(
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
            <li onClick={props.onClickCard}>
                <img width={18} height={18} src="/img/basket.svg" />
                <span>10$</span>
            </li>
            <li>
                <img width={18} height={18} src="/img/user.svg" />
            </li>
            </ul>
        
      </header>
    )
}


export default Header;