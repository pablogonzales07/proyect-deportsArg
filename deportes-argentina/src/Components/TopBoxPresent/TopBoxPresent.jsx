import { Link } from "react-router-dom"
import "./TopBoxPresent.css"


const TopBoxPresent = () => {
  return (
    <div className="topBoxStyle">
        <h3> tu seleccion NUESTRA seleccion</h3>
        <div className="buttonsTopBox">
            <Link>
                <button>Registrate</button>
            </Link>
            <Link>
                <button >Inicia Sesion</button>
            </Link>
            <Link>
                  <h3>🛒</h3>
            </Link>
        </div>

    </div>
  )
}

export default TopBoxPresent