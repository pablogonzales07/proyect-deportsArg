import { AiFillBell, AiTwotoneCrown } from "react-icons/ai";
import { GrAccessibility, GrArticle, GrCoatCheck, GrMonitor } from "react-icons/gr";
import Ofert from "../Ofert/Ofert";
import "./OfertsContainer.css"




const ofertsHome = [
  { id: 1, title: "Partidos en vivo", description: "Logueandote desde nuestra web vas a poder seguir todos los partidos que quieras", img: <GrMonitor/> },
  { id: 2, title: "Info de ultimo momento", description: "Enterate las ultimas noticias del seleccionado argentino en todos los deportes", img: <GrArticle/> },
  { id: 3, title: "Tiendas actualizadas", description: "Contamos con toda la variedad en indumentaria deportiva de nuestra seleccion en todos los deportes", img: <GrCoatCheck /> },
  { id: 4, title: "Leyendas", description: "Vas a poder informarte de todas las leyendas que vistieron nuestra amada camiseta", img: <AiTwotoneCrown /> },
  { id: 5, title: "Notificacion de partido", description: "Regsitrandote vas a poder seleccionar el deporte que mas te guste y enterarte cuando juega", img: <AiFillBell /> },
  { id: 6, title: "Salas de usuarios", description: "Vas a poder ingresar a salas donde miles de usuarios comparten informacion de nuestra seleccion", img: <GrAccessibility/> },

]

const OfertsContainer = () => {
  return (
    <section className="ofertBoxContainer">
        <h2>¿Que ofrecemos?</h2>
        <div className="ofertsContainerStyle">
          <Ofert oferts = { ofertsHome } />
        </div>

    </section>
  )
}

export default OfertsContainer