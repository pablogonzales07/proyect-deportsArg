import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./SportsNavbar.css"

const SportsNavbar = () => {

    const [active, setActive] = useState("navSportMenu");
    const [toggleIcon, setToggleIcon ] = useState("navToggler");
  
    
    const navToggle = () => {
      active === "navSportMenu" 
        ? setActive("navSportMenu navActive") 
        : setActive("navSportMenu")
  
      toggleIcon === "navToggler"
       ? setToggleIcon("navToggler toggle")
       : setToggleIcon("navToggler")
    }

  return (
            <nav className="navSportStyle">         
                <Link to="/" className='navSportBrand'>
                    <img src="https://www.afa.com.ar/img/site/dbc1eb9bc6c809f0c19b4ca3c38854bc.png" alt="" />
                </Link>
                <ul className={ active }>
                    <li className="navSportItem">
                        <Link to="/" className='navSportLink'>INICIO</Link>
                    </li>
                    <li className="navSportItem">
                        <Link  to="/sports" className='navSportLink'>DEPORTES</Link>
                    </li>
                    <li className="navSportItem">
                        <Link className='navSportLink'>MI CUENTA</Link>
                    </li>
                    <li className="navSportItem">
                        <Link className='navSportLink'>NOSOTROS</Link>
                    </li>
                    <li className="navSportItem">
                        <Link className='navSportLink'>🛒</Link>
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

export default SportsNavbar