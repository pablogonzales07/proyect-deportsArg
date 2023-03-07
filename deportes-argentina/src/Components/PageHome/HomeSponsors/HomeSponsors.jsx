import "./HomeSponsors.css"

const HomeSponsors = ( { sponsors } ) => {
  return (
    <div className="sponsorsBoxStyle">
        <img src={ sponsors.img } alt="" />

    </div>
  )
}

export default HomeSponsors