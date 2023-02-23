import FootballPLayersCards from "../FootballPlayersCards/FootbalPLayersCards"
import "./FootballTeamStrikers.css"

const FootballTeamStrikers = ( { position } ) => {

  return (
    <div className="strikersCard">
        {position.map( striker => <FootballPLayersCards player={ striker }  /> )}
    </div>
  )
}

export default FootballTeamStrikers