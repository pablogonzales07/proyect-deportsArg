import "./Deports.css"

const Deports = ( { allDeports } ) => {
  return (
    <>

         {
            allDeports.map(deport => {
                return(
                    <div className="cartDeport">
                        <b> { deport.img } </b>
                        <h3> {deport.name} </h3>
                    </div>
                )

            }
                
                )
         }

       
    </>
  )
}

export default Deports