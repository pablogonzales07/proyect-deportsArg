import "./FootballPLayersCards.css"

const FootballPLayersCards = ( { player } ) => {
  return (
            <div className="cardContainer">
            <img src={ player.img } alt="" />
            <div className="cardText">
                <h3><b>NOMBRE:</b>{ player.name }</h3>
                <h3><b>NACIMIENTO:</b>{ player.birth }</h3>
                <h3><b>CLUB:</b>{ player.team }</h3>
            </div>
            </div>
  )
}

export default FootballPLayersCards