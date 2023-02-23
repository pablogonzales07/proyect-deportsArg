import "./FootballChampionship.css"

const FootballChampionship = ( { titlesFootball } ) => {
  return (
    <div>
        <h3>Titulos Oficiales</h3>

        <div>
            {
                titlesFootball.map( title => {
                    return(
                        <div className="titlesFootballContainer"> 
                            <figure>
                                <img src={ title.img } alt="" />
                                <div className="capa">
                                    <h4> { title.title } </h4>
                                    <p> { title.description } </p>
                                </div>
                            </figure>
                        </div>
                    )
                } )
            }
        </div>

    </div>
  )
}

export default FootballChampionship