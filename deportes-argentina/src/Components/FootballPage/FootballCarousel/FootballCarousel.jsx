import ImagesCarousel from "../ImagesCarousel/ImagesCarousel";
import { motion } from "framer-motion"
import "./FootballCarousel.css"


const carouselImagesFootball = 

[
   {id:1, img:"https://www.lavoz.com.ar/resizer/j_njVADIK59mxFC-mroHMRCyvuw=/1023x740/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/LP3BDVKP65B7XDQJWSFJNXLIG4.jpg"},
   {id:2, img:"https://images.clarin.com/2022/12/10/lautaro-martinez-de-argentina-celebra___K8OmW2S9L_0x750__2.jpg#1671222218589"},
   {id:3, img:"https://www.infobae.com/new-resizer/W8RyVw8COgY8TlJHe8WjylMioQM=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/VV5KQB7UC37RLZ6GLL5L7H2VCI.jpg"},
   {id:4, img:"https://viapais.com.ar/resizer/JgbJepD1p-KL2bcHFlqEhfR016w=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MFMH7NBU6JEK5KS2HMTFTI3ASI.jpg"},
   {id:5, img:"https://www.noticiasdebariloche.com.ar/wp-content/uploads/2022/12/AP22337740087686-1.jpg"},
   {id:6, img:"https://bolavip.com/__export/1669744052346/sites/bolavip/img/2022/11/29/lionel-messi-argentina-vs-polonia-mundial-qatar-2022_crop1669744051051.jpg_1624932088.jpg"},
   {id:7, img:"https://media.primicias.ec/2022/12/18145851/final-1-1024x574.jpg"},
   {id:8, img:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4KWJPGQX4WGMLDGA5WDJWVSPMY.jpg"},
   {id:9, img:"https://img2.rtve.es/v/6760536?w=1600&preview=1671485011618.jpg"},
   {id:10, img:"https://media.ambito.com/p/1f92f285ecd991f82778001baa204561/adjuntos/239/imagenes/040/366/0040366889/lionel-messi.jpg"},

];



const FootballCarousel = () => {

  return (

    <motion.div className="sliderFootballContainer" >
        <h2>Revivi las mejores imagenes del mundial</h2>
        <motion.div className="sliderFootball" drag="x" dragConstraints={ { right:0, left:-5000 } }>

            {
                carouselImagesFootball.map(image => <ImagesCarousel images={ image } /> )
            }

        </motion.div>

    </motion.div>
  )
}

export default FootballCarousel