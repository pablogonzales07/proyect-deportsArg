import FootballPLayersCards from "../FootballPlayersCards/FootbalPLayersCards"
import "./FootballTeamMidfielder.css"

const FootballTeamMidfielder = ( { position } ) => {
  return (
    <div className="midfielderContainer">
        {position.map(midfielder => <FootballPLayersCards player={ midfielder } />)}
    </div>
  )
}

export default FootballTeamMidfielder