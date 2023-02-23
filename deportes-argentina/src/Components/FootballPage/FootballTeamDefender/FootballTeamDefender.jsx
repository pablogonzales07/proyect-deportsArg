import FootballPLayersCards from "../FootballPlayersCards/FootbalPLayersCards"
import "./FootballTeamDefender.css"

const FootballTeamDefender = ( { position } ) => {
  return (
    <div className="defendersContainer">
         { position.map( defender => <FootballPLayersCards player={ defender } /> ) }
    </div>
  )
}

export default FootballTeamDefender