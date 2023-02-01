import "./Ofert.css"

const Ofert = ( { oferts } ) => {
    
 
  return (

    <>  
       {
          oferts.map(ofert => 
                            <div className="boxOfert" key={ ofert.id }>
                              <b>{ ofert.img }</b>
                              <div className="boxOfertText">
                                <h3> { ofert.title } </h3>
                                <p> { ofert.description } </p>
                              </div>
                            </div>         
          )
       }
    

    </>
  )
}

export default Ofert