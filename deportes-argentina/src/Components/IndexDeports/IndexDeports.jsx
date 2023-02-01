import { IoBasketballOutline } from "react-icons/io5";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { MdOutlineSportsRugby } from "react-icons/md";
import { GiHockey, GiVolleyballBall } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";



import Deports from "../Deports/Deports";




const allDeports = 
[
    { id : 1, name: "Basketball", img: <IoBasketballOutline /> },
    { id : 2, name: "Football", img: <BiFootball /> },
    { id : 3, name: "Voleyball", img: <GiVolleyballBall /> },
    { id : 4, name: "Handball", img: <IoIosFootball /> },
    { id : 5, name: "Tenis", img: <BiTennisBall /> },
    { id : 6, name: "Hockey", img: <GiHockey /> },
    { id : 7, name: "Rugby", img: <MdOutlineSportsRugby /> },



]

const IndexDeports = () => {

  return (
    <div className='deportsCartsContainer'>

      <Deports  allDeports={ allDeports }/>

    </div>
  )
}

export default IndexDeports