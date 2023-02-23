import { useParams } from "react-router-dom";
import FootballContainer from "../../FootballPage/FootballContainer/FootballContainer";
import "./SportsPageList.css"

const SportsPageList = () => {

    const { sportName } = useParams();

  return (
    <>
        {
            sportName === "Football" && <FootballContainer />
        }
    </>
  )
}

export default SportsPageList