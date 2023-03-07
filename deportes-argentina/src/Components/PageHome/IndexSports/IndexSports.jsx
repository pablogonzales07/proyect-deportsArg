import { IoBasketballOutline } from "react-icons/io5";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { MdOutlineSportsRugby } from "react-icons/md";
import { GiHockey, GiVolleyballBall } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import "./IndexSports.css"
import { useState } from "react";


const IndexSports = () => {
  
  



  return (
    <div className='sportsIndexContainer'>
      <div className="cardSportOne" >
        <b>
          <IoBasketballOutline />
        </b>
      </div>
      <h4>Basket</h4>
      <div className="cardSportTwo">
        <b>
          <BiFootball />
        </b>
      </div>
      <h4>Futbol</h4>     
      <div className="cardSportThree">
        <b>
          <BiTennisBall />
        </b>
      </div>
      <h4>Tenis</h4>
      <div className="cardSportFour">
        <b>
          <MdOutlineSportsRugby />
        </b>
      </div>
      <h4>Rugby</h4>
      <div className="cardSportFive">
        <b>
          <GiHockey />
        </b>
      </div>
      <h4>Hockey</h4>
      <div className="cardSportSix">
        <b>
          <GiVolleyballBall />
        </b>
      </div>
      <h4>Voley</h4>
      <div className="cardSportSeven">
        <b>
          <IoIosFootball />
        </b>
      </div>
      <h4>Handball</h4>
    </div>
  )
}

export default IndexSports