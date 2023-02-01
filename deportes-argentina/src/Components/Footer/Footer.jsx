import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im'
import "./Footer.css"


const Footer = () => {
  return (
    <>
       <footer className="footerContainer">
        <div className="groupOne">
            <div className="box">
                <figure>
                    <a href="#">
                        <img src="/assets/logoDos.png" alt="" />
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>NUESTRO OBJETIVO</h2>
                 <p>
                    Nuestro objetivo es pdoer informar todos aquello ajeno al deporte de nuestra amada seleccion, ya que 
                    no siempre sabemos cuando estamos disputando un torneo importante o ni siquiera cuando juega la seleccion 
                    en un deporte que no es de mucho interes general
                 </p>
            </div>
            <div className="box">
                <h2>NUESTRAS REDES</h2>
                 <div className="networksFooter">
                    <a href="https://www.twitter.com/sanlorenzo" target={"_blank"}>
                        <ImTwitter/>
                    </a>
                    <a href="https://www.facebook.com/sanlorenzo" target={"_blank"}>
                        <ImFacebook2 />
                    </a>
                    <a href="https://www.instagram.com/sanlorenzo" target={"_blank"}>
                        <ImInstagram />
                    </a>
                    <a href="https://www.youtube.com/@sanlorenzo" target={"_blank"}>
                        <ImYoutube/>
                    </a>                   
                 </div>
            </div>
        </div>

        <div className="groupTwo">
            <small>&copy; 2023 <b>DEPORTES-ARG</b> - Todos los derechos reservados</small>
        </div>

       </footer>

    </>
  )
}

export default Footer