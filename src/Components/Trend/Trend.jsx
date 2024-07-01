import React from 'react'
import './trend.scss'
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import car1 from '../../Assest/image4.png'
import car2 from '../../Assest/download1.png'
import car3 from '../../Assest/download2.png'
import {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Trend = () => {
  
    const Search = () => {
      useEffect(()=>{
        Aos.init(
          {
            duration:2000
          }
        )
      },[])
    }
  
  return (
    <div className='trending section'>
      <div className='secContainer container'>
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className='secTitle'>Trending Near you</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>
        <div className="carContainer">
          <div data-aos='fade-up'  className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className='carTitle'>Used 2019 Audi s4 Premium Plus</h5>
            <span className='miles'>11457 Miles</span>
            <span className='AWD'>AWD 4-Cylinder Turbo</span>
            <div className="price_seller flex">
              <span className="price">$41,000</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          <div data-aos='fade-up'  className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className='carTitle'>G-Vagon</h5>
            <span className='miles'>12357 Miles</span>
            <span className='AWD'>AWD 4-Cylinder Turbo</span>
            <div className="price_seller flex">
              <span className="price">$53,000</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          <div data-aos='fade-up'  className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className='carTitle'>Used 2019 Audi s4 Premium Plus</h5>
            <span className='miles'>11457 Miles</span>
            <span className='AWD'>AWD 4-Cylinder Turbo</span>
            <div className="price_seller flex">
              <span className="price">$63,000</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trend
