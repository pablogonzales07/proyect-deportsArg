import FootballTeamDefender from "../FootballTeamDefender/FootballTeamDefender";
import FootballTeamDt from "../FootballTeamDt/FootballTeamDt";
import FootballTeamGoalkeeper from "../FootballTeamGoalkeeper/FootballTeamGoalkeeper"
import FootballTeamMidfielder from "../FootballTeamMidfielder/FootballTeamMidfielder";
import FootballTeamStrikers from "../FootballTeamStrikers/FootballTeamStrikers";
import "./FootballTeamPlayersList.css"

const FootballTeamPlayersList = ( { team } ) => {

  const goalkeeper = team.filter(player => player.position === "arquero");
  const defenders = team.filter(player => player.position === "defensor");
  const midfielder = team.filter(player => player.position === "mediocampista")
  const strikers = team.filter(player => player.position === "delantero");
  const technical = team.filter(player => player.position === "entrenador");


console.log(technical);
  return (
    <section className="teamPlayersContainer">
      <article className="dtTeamStyle">
        <h2>Arqueros</h2>
        <FootballTeamGoalkeeper team={ goalkeeper } />
      </article>
      <article>
        <h2>Defensores</h2>
        <FootballTeamDefender position= { defenders } />
      </article>
      <article>
        <h2>Mediocampistas</h2>
        <FootballTeamMidfielder position= { midfielder }/>
      </article>
      <article>
        <h2>Delanteros</h2>
        <FootballTeamStrikers position={ strikers }/>
      </article>
      <article>
        <h2>Director Tecnico</h2>
        <FootballTeamDt position={ technical } />
      </article>

 
    </section>
  )
}

export default FootballTeamPlayersList