import Sports from "../Sports/Sports"
import "./SportsList.css"


const sportsListImages = 

[
    {id:1, title: "Football", img:"https://statics.forbesargentina.com/2022/12/crop/63a1aa07f3f5c__822x822.webp"}, 
    {id:2, title: "Basketball", img:"https://fotos.perfil.com/2022/07/04/trim/720/410/campazzo-1381470.jpg"},
    {id:3, title: "Handball", img:"https://aadeporte.com.ar/wp-content/uploads/2018/05/IMG_20180528_133616.jpg"},
    {id:4, title: "Tenis", img:"https://www.clarin.com/img/2022/08/15/diego-schwartzman-vencio-a-aslan___jDFiALSNe_2000x1500__1.jpg"},
    {id:5, title: "Rugby", img:"https://resizer.glanacion.com/resizer/ijbxneqMYFx-VynJsyHNa5IIGMY=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/XL42MCUT2ZCIDHNTLOTL2JRGUA.jpg"},
    {id:6, title: "Hockey", img:"https://www.lavoz.com.ar/resizer/UsJsjCTapGT-MOZMxgRtnALA2ZQ=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MKPRM5D5HRGKTGEWUQS3FG2ERY.jpg"}, 
    {id:7, title: "Voley", img:"https://media.tycsports.com/files/2021/07/28/312338/voley-argentina_1440x810_wmk.jpg"} 
]

const SportsList = () => {

  return (

                <div className="sportsCardsContainer">

                    {
                        sportsListImages.map( sport => <Sports sport={ sport } /> )
                    }
                
                    
                </div>
  )
}

export default SportsList