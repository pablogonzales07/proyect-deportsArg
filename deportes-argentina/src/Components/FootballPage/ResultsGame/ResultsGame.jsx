import "./ResultsGame.css"

const ResultsGame = ( { teamOne, teamTwo, resultOne, resultTwo, logoOne, logoTwo }) => {
  return (
    <div className="boxResultStyle">
        <div className="teamOneStyle">
            <div className="textTeamOne"> 
                <h5> { teamOne } </h5>  
                <img src={ logoOne } alt="" />
            </div>
        </div>
        <div className="resultsNumbers">
            <b> { resultOne } </b>
            <b> { resultTwo } </b>

        </div>
        <div className="teamTwoStyle">
            <div className="textTeamTwo">
                <h5> { teamTwo } </h5>
                <img src={ logoTwo } alt="" />         
            </div>
        </div>
    </div>
  )
}

export default ResultsGame