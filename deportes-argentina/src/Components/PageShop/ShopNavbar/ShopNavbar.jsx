import { useState } from "react";
import { Link } from "react-router-dom"
import "./ShopNavbar.css"

const ShopNavbar = () => {

    const [active, setActive] = useState("navShopMenu");
    const [toggleIcon, setToggleIcon ] = useState("navToggler");
  
    
    const navToggle = () => {
      active === "navMenu" 
        ? setActive("navMenu navActive") 
        : setActive("navMenu")
  
      toggleIcon === "navToggler"
       ? setToggleIcon("navToggler toggle")
       : setToggleIcon("navToggler")
    }

  return (
    <nav className="navShopStyle">         
            <Link to="/" className='navShopBrand'>
                <img src="https://www.afa.com.ar/img/site/dbc1eb9bc6c809f0c19b4ca3c38854bc.png" alt="" />
            </Link>
            <ul className={ active }>
                <li className="navShopItem">
                    <Link to="/" className='navShopLink'>HOME</Link>
                </li>
                <li className="navShopItem">
                    <Link to="/shop" className='navShopLink'>INICIO</Link>
                </li>
                <li className="navShopItem">
                    <Link  to="/shop/futbol" className='navShopLink'>FUTBOL</Link>
                </li>
                <li className="navShopItem">
                    <Link to="/shop/basket" className='navShopLink'>BASKET</Link>
                </li>
                <li className="navShopItem">
                    <Link to="/shop/handball" className='navShopLink'>HANDBALL</Link>
                </li>
                <li className="navShopItem">
                    <Link to="/shop/rugby" className='navShopLink'>RUGBY</Link>
                </li>
                <li className="navShopItem">
                    <Link to="/shop/voley" className='navShopLink'>VOLEY</Link>
                </li>
                <li className="navShopItem">
                    <Link to="/shop/hockey" className='navShopLink'>HOCKEY</Link>
                </li>
            </ul>
            <div onClick={ navToggle } className={ toggleIcon }>
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
                <div className="lineThree"></div>
            </div>          
    </nav>
  )
}

export default ShopNavbar