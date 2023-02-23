import FootballPLayersCards from "../FootballPlayersCards/FootbalPLayersCards"
import "./FootballTeamDt.css"

const FootballTeamDt = ( { position } ) => {
  return (
    <div className="dtCard">
        {position.map ( dt => <FootballPLayersCards player={ dt } /> ) }
    </div>
  )
}

export default FootballTeamDt