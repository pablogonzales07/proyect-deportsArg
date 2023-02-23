import "./FootballNews.css"

const FootballNews = ( { footballNews } ) => {
  return (
    <div className="footballCardsList">
        {
          footballNews.map(newFootball => {
            return(
                    <div className="footballCardStyle">
                      <img src={newFootball.img} alt="" />
                      <div className="cardFootballText">
                        <h2> { newFootball.title } </h2>
                        <p> { newFootball.description } </p>
                      </div>
                    </div>
            )
          })

        }
    </div>
  )
}

export default FootballNews