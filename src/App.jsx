import React from 'react'
import ReactDom from 'react-dom';
import './App.css'
import Auctiom from './Components/Auctiom/Auctiom'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Review from './Components/Review/Review'
import Search from './Components/Search/Search'
import Sellers from './Components/Sellers/Sellers'
import Trend from './Components/Trend/Trend'
const App = () => {
  return (
    <div>
      <div className='title'>
        <Navbar/>
        <Home/>
        <Search/>        
        <Trend/>
        <Sellers/>
        <Auctiom/>
        <Review/>
        <Footer/>

      </div>
    </div>
  )
}

export default App
