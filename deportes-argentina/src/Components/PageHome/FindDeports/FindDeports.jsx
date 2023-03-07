import { useState } from "react"
import "./FindDeports.css"

const FindDeports = () => {

  const [sportName, setSportName] = useState("")

  const handleSubmit = ( e ) => {
    e.preventDefault();
    alert("Gracias por enviar su respuesta")
     
  }
  

  console.log(sportName);

  return (
    <div className="findDeportContainer">
        <h3>¿No encontras el deporte de tu interes?</h3>
        <p>Por el momento ofrecemos informacion de los deportes que se detallan
            anteriormente. Pedimos disculpas y prometemos seguir complementando deportes
            con el paso del tiempo
        </p>
        <div className="formDeports">
            <h4>Envianos el deporte que quieras que complementemos</h4>
            <form onSubmit={ handleSubmit }>
                <input 
                  className="inputFormDeport" 
                  type="text" 
                  id="sportName" 
                  name="sportName" 
                  placeholder="Ingrese el deporte" 
                  value={ sportName }
                  onChange={ (e) => setSportName(e.target.value) }
                />
                <input className="buttonSendDeport" type="submit" value={ "ENVIAR" }  />
            </form>
        </div>
   
    </div>
  )
}

export default FindDeports