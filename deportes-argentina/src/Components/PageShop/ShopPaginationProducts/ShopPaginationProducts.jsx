import "./ShopPaginationProducts.css"

const ShopPaginationProducts = ( { totalPosts, postsPerPage, setCurrentPage, currentPage  } ) => {

  const pages = []

  for( let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ) {
    pages.push(i)
  }
  return (
    <div className="paginationProductsItems">
        {pages.map( (page,index) =>{
          return <button key={index} onClick={ () => setCurrentPage(page) } className={ page == currentPage ? "active" : "" } > { page } </button>
          }
          )
        }
    </div>
  )
}

export default ShopPaginationProducts
