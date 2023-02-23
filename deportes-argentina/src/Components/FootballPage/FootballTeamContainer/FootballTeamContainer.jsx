import { useEffect, useState } from "react"
import { promisePlayersTeam } from "../../helpers/promisePlayersTeam"
import FootballHeader from "../FootballHeader/FootballHeader"
import FootballTeamPlayersList from "../FootballTeamPLayersList/FootballTeamPlayersList"
import "./FootballTeamContainer.css"






const FootballTeamContainer = () => {

  const [team, setTeam] = useState( [] );

   useEffect ( () => {
      promisePlayersTeam()
      .then(data => setTeam(data))
      .catch(err => console.log(err))
   }, []);

 

  return (
    <>
        <FootballHeader />
        <FootballTeamPlayersList team={ team } />


    </>
  )
}

export default FootballTeamContainer