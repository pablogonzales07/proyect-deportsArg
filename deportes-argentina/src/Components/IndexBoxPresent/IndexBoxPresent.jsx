import { Link } from 'react-router-dom'
import "./IndexBoxPresent.css"

const IndexBoxPresent = () => {

  return (

    <div className='presentBox'>
        <div className='presentContainer'>
                <img src="http://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/03/28/15537958388822.jpg" alt="" className='presentImage' />
                <div className='presentText'>
                    <h3>Segui a la seleccion en el deporte que mas te guste</h3>
                    <p>Toda la informacion de los deportes de nuestra amada seleccion se encuentran en este sitio. Solo clickea en el deporte a tu gusto y enterate de todo</p> 
                    <Link className='presentButton'>
                        <span className='spanOne'></span>
                        <span className='spanTwo'></span>
                        <span className='spanThree'></span>
                        <span className='spanFour'></span>
                        A POR ELLO
                    </Link>
                </div>
        </div>
    </div>
    
  )
}

export default IndexBoxPresent