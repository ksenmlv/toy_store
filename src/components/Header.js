import { Link } from 'react-router-dom';

function Header(props) {
    return(
        <header>
            {/* левая часть заголовка*/}  
            <div className='headerLeft'>
                <Link to="/" exact>
                    <img width={40} height={40} src="/img/logo_header.png" />
                </Link>
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
                <Link to="/user">
                    <img width={18} height={18} src="/img/user.svg" />
                </Link>
            </li>
            </ul>
        
      </header>
    )
}


export default Header;