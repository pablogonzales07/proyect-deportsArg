import DividingLane from "../DividingLane/DividingLane"
import "./IndexButtonsRegist.css"

const IndexButtonsRegist = () => {

  return (

    <>
        <DividingLane />
        <div className="indexBoxLoggin">
            <h2>Registrate y obtene beneficios</h2>
            <div className="indexButtons">
                <button>Inicia Sesion</button>
                <button>Registrate</button>
            </div>
        </div>
        <DividingLane />
    </>
  )
}

export default IndexButtonsRegist