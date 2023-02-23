import DividingLane from "../../DividingLane/DividingLane"
import FootballCarousel from "../FootballCarousel/FootballCarousel"
import FootballHeader from "../FootballHeader/FootballHeader"
import FootballNewsContainer from "../FootballNewsContainer/FootballNewsContainer"
import "./FootballContainer.css"

const FootballContainer = () => {
  return (
    <>
        <FootballHeader />
        <FootballNewsContainer />
        <DividingLane />
        <FootballCarousel />
    </>
  )
}

export default FootballContainer