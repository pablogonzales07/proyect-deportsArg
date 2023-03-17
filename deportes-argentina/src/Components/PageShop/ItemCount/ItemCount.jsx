import { useState } from "react"
import "./ItemCount.css"

const ItemCount = (  { stock=7, initial=1} ) => {

  const [ count, setCount ] = useState(initial)

  const add = () => {
    if(count < stock){
      setCount( count + 1 )
    }
  }

  const subtract = () => {
    if(count > initial) {
      setCount( count - 1 )
    }
  }


  return (
    <div className="countDetailConteiner">
      <div className="buttonsDetailConteiner">
        <button onClick={ subtract }> - </button>   
        <label >{ count }</label> 
        <button onClick={ add }> + </button>
      </div>
    </div>
  )
}

export default ItemCount