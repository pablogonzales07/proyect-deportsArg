import { useState } from "react";
import { Link } from "react-router-dom"
import "./ShopDetailNavbar.css"

const ShopDetailNavbar = () => {

    const [active, setActive] = useState("navDetailMenu");
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
    <nav className="navDetailStyle">         
            <Link to="/" className='navDetailBrand'>
                <img src="https://www.afa.com.ar/img/site/dbc1eb9bc6c809f0c19b4ca3c38854bc.png" alt="" />
            </Link>
            <ul className={ active }>
                <li className="navDetailItem">
                    <Link to="/" className='navDetailLink'>INICIO</Link>
                </li>
                <li className="navDetailItem">
                    <Link className='navDetailLink'>MI CUENTA</Link>
                </li>
                <li className="navDetailItem">
                    <Link to="/shop" className='navDetailLink'>TIENDA</Link>
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

export default ShopDetailNavbar