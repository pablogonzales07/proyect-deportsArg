import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import OfertsContainer from './Components/containers/IndexContainers/OfertsContainer/OfertsContainer'
import Header from './Components/Header/Header'
import IndexBoxPresent from './Components/IndexBoxPresent/IndexBoxPresent'
import './App.css'
import IndexButtonsRegist from './Components/IndexButtonsRegist/IndexButtonsRegist'
import NewsContainer from './Components/containers/IndexContainers/NewsContainer/NewsContainer'
import Footer from './Components/Footer/Footer'



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <> <Header /> <IndexBoxPresent /> <OfertsContainer /> <IndexButtonsRegist /> <NewsContainer /> <Footer /> </> }/>
          <Route path="*" element= { <Navigate to="/"/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
