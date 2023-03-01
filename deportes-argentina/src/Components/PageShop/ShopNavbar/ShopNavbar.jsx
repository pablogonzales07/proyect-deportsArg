import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { filterProducts } from "../../../actions/productsAction";
import { FILTER_PRODUCTS } from "../../../types";
import "./ShopNavbar.css"

const ShopNavbar = () => {

    const [active, setActive] = useState("navShopMenu");
    const [toggleIcon, setToggleIcon ] = useState("navToggler");
    const dispatch = useDispatch();

  
    
    const navToggle = () => {
      active === "navMenu" 
        ? setActive("navMenu navActive") 
        : setActive("navMenu")
  
      toggleIcon === "navToggler"
       ? setToggleIcon("navToggler toggle")
       : setToggleIcon("navToggler")
    }

    const onItemClick = (e) => {
        const valueLink = e.target.innerHTML.toLowerCase()
        dispatch( filterProducts( { value: valueLink, filterType: "sport"  } ) )
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
                    <a className='navShopLink' onClick={ onItemClick }>INICIO</a>
                </li>
                <li className="navShopItem">
                    <a className='navShopLink' onClick={ onItemClick }>FUTBOL</a>
                </li>
                <li className="navShopItem">
                    <a  className='navShopLink' onClick={ onItemClick }>BASKET</a>
                </li>
                <li className="navShopItem">
                    <a className='navShopLink' onClick={ onItemClick }>HANDBALL</a>
                </li>
                <li className="navShopItem">
                    <a  className='navShopLink' onClick={ onItemClick }>RUGBY</a>
                </li>
                <li className="navShopItem">
                    <a className='navShopLink' onClick={ onItemClick }>VOLEY</a>
                </li>
                <li className="navShopItem">
                    <a  className='navShopLink' onClick={ onItemClick }>HOCKEY</a>
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