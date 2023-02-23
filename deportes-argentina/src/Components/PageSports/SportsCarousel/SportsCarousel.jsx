import { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import "./SportsCarousel.css"

const SportsCarousel = ( { images } ) => {

   const [currentImage, setCurrentImage] = useState(0);

   const countSportCarousel = images.length;

   if(!Array.isArray( images ) || countSportCarousel === 0) return;

   const nextImage = () => {
    setCurrentImage(
        currentImage === countSportCarousel - 1 ? 0 : currentImage + 1
    )
   }

   const previusImage = () => {
    setCurrentImage(
        currentImage === 0 ? countSportCarousel - 1 : currentImage - 1
    )
   }



  return (
    <div className="sportCarouselContainer">

        <button onClick={ previusImage }>
            <BsFillArrowLeftCircleFill />
        </button>

        {
            images.map( ( image, index) => { 
                return (
                    <div key={ index } className={ currentImage === index ? "carousel active" : "carousel" } >
                        {
                            currentImage === index && <img src={ image } alt="imagenes de carousel" />

                        }
                        
                    </div>
                 );
            

                
        
           } ) 
           
        }

        <button onClick={ nextImage }>
            <BsFillArrowRightCircleFill />
        </button>
    </div>
  )
}

export default SportsCarousel