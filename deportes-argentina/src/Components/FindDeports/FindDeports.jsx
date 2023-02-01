import "./FindDeports.css"

const FindDeports = () => {
  return (
    <div className="findDeportContainer">
        <h3>¿No encontras el deporte de tu interes?</h3>
        <p>Por el momento ofrecemos informacion de los deportes que se detallan
            anteriormente. Pedimos disculpas y prometemos seguir complementando deportes
            con el paso del tiempo
        </p>
        <div className="formDeports">
            <h4>Envianos el deporte que quieras que complementemos</h4>
            <form action="">
                <input className="inputFormDeport" type="text" name="text" placeholder="Ingrese el deporte" />
                <input className="buttonSendDeport" type="submit" value={ "ENVIAR" }/>
            </form>
        </div>
   
    </div>
  )
}

export default FindDeports