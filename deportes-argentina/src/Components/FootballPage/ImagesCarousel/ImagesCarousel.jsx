import { motion } from "framer-motion"
import "./ImagesCarousel.css"

const ImagesCarousel = ( { images } ) => {
  return (
    <>
       <motion.div key={ images.id } className="sliderFootballItem">
            <img src={ images.img } alt="" />
       </motion.div>
    </>
  )
}

export default ImagesCarousel