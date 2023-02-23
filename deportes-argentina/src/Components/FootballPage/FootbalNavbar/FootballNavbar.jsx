import { useState } from "react";
import { Link } from "react-router-dom"
import "./FootballNavbar.css"

const FootballNavbar = () => {

    const [active, setActive] = useState("navMenuFootball");
    const [toggleIcon, setToggleIcon ] = useState("navToggler");
  
    
    const navToggle = () => {
      active === "navSportMenu" 
        ? setActive("navMenuFootball navActive") 
        : setActive("navMenuFootball")
  
      toggleIcon === "navToggler"
       ? setToggleIcon("navToggler toggle")
       : setToggleIcon("navToggler")
    }

  return (
    <nav className="navStyleFootball">         
        <Link to="/" className='navBrandFootball'>
            <img src="https://www.afa.com.ar/img/site/dbc1eb9bc6c809f0c19b4ca3c38854bc.png" alt="" />
        </Link>
        <ul className={ active }>
            <li className="navItemFootball">
                <Link to="/" className='navLinkFootball'>HOME</Link>
            </li>
            <li className="navItemFootball">
                <Link to="/sports-pages/Football" className='navLinkFootball'>INICIO</Link>
            </li>
            <li className="navItemFootball">
                <Link  to="/sports-pages/Football/team" className='navLinkFootball'>PLANTEL</Link>
            </li>
            <li className="navItemFootball">
                <Link className='navLinkFootball'>LEYENDAS</Link>
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

export default FootballNavbar