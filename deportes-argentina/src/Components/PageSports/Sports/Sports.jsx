import { Link } from 'react-router-dom'
import "./Sports.css"

const Sports = ( { sport } ) => {
  return (

    <div  key={ sport.id } className="sportStyleContainer">
        <img src={ sport.img } alt="" />
        <div className="sportCardText">
            <h3> { sport.title } </h3>
            <Link to={`/sports-pages/${ sport.title }`}>
              <button>SELECCIONAR</button>
            </Link>
        </div>
    </div>
  )
}

export default Sports