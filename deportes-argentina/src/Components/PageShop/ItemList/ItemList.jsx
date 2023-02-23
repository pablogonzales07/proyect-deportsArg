import "./ItemList.css"
import List from '../List/List'

const ItemList = ( { products } ) => {
  return (

    <div className='cardsConteiner'>
           {
             products.map(product => <List key={ product.id } product={ product }/> )
           }
    </div>
  )
}

export default ItemList