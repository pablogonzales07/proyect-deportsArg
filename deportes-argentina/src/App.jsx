import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import FootballTeamContainer from './Components/FootballPage/FootballTeamContainer/FootballTeamContainer'
import Footer from './Components/Footer/Footer'
import Header from './Components/PageHome/Header/Header'
import IndexBoxPresent from './Components/PageHome/IndexBoxPresent/IndexBoxPresent'
import IndexButtonsRegist from './Components/PageHome/IndexButtonsRegist/IndexButtonsRegist'
import NewsContainer from './Components/PageHome/NewsContainer/NewsContainer'
import OfertsContainer from './Components/PageHome/OfertsContainer/OfertsContainer'
import ItemListConteiner from './Components/PageShop/ItemListConteiner/ItemListConteiner'
import SportsHeader from './Components/PageSports/SportsHeader/SportsHeader'
import SportsList from './Components/PageSports/SportsList/SportsList'
import SportsPageList from './Components/PageSports/SportsPageList/SportsPageList'
import TopBoxPresent from './Components/TopBoxPresent/TopBoxPresent'
import store from './Store'






function App() {
  


  
  return (
    <>
      <BrowserRouter>
        <Provider store={ store }>             
            <TopBoxPresent />
            <Routes>
              <Route path='/' element={ <> <Header /> <IndexBoxPresent /> <OfertsContainer /> <IndexButtonsRegist /> <NewsContainer />  </> }/>
              <Route path="/sports" element={ <> <SportsHeader /> <SportsList /> </> } />
              <Route path='/sports-pages/:sportName' element={ <> <SportsPageList /> </> } />
              <Route path='/sports-pages/football/team' element={ <FootballTeamContainer /> } />
              <Route path='/shop' element={ <ItemListConteiner /> } />
              <Route path='/shop/:category/' element={ <ItemListConteiner /> } />
              <Route path='/shop/football/:filter' element={ < ItemListConteiner /> } />
              <Route path="*" element= { <Navigate to="/"/> } />
              <Route path=''/>
            </Routes>
            <Footer />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
