import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

  const [active, setActive] = useState("navMenu");
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
    <>
        <nav className="navStyle">         
                <Link to="/" className='navBrand'>
                    <img src="https://www.afa.com.ar/img/site/dbc1eb9bc6c809f0c19b4ca3c38854bc.png" alt="" />
                </Link>
                <ul className={ active }>
                    <li className="navItem">
                        <Link className='navLink'>INICIO</Link>
                    </li>
                    <li className="navItem">
                        <Link className='navLink'>DEPORTES</Link>
                    </li>
                    <li className="navItem">
                        <Link className='navLink'>MI CUENTA</Link>
                    </li>
                    <li className="navItem">
                        <Link className='navLink'>NOSOTROS</Link>
                    </li>
                </ul>
                <div onClick={ navToggle } className={ toggleIcon }>
                    <div className="lineOne"></div>
                    <div className="lineTwo"></div>
                    <div className="lineThree"></div>
                </div>          
        </nav>

    </>
  )
}

export default Navbar