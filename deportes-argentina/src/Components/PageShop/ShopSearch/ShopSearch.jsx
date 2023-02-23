import { CiSearch } from "react-icons/ci";
import "./ShopSearch.css"

const ShopSearch = () => {
  return (
    <div className="boxSearchConteiner">
        <div className="boxSearchTitle">
            <span>
                <h5>Buscar</h5>
            </span>
        </div>
        <div className="boxSearchForm">
            <form action="">
                <input type="text" placeholder="¿Que Estas Buscando?" />
                <button>
                    <CiSearch className="iconSearch"/>
                </button>
            </form>
        </div>
    </div>
  )
}

export default ShopSearch