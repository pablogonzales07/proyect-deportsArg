import FootballPLayersCards from "../FootballPlayersCards/FootbalPLayersCards"
import "./FootballTeamGoalkeeper.css"

const FootballTeamGoalkeeper = ( { team } ) => {
  

  return (
    <div className="boxGoalkeeperContainer">
      {
        team.map (goalkeeper => <FootballPLayersCards player={ goalkeeper } />)
      }
    </div>
  )
}

export default FootballTeamGoalkeeper