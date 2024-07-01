import React from 'react'
import './Footer.scss'
import {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init(
      {
        duration:2000
      }
    )
  },[])
  return (
    <div>
      <div className='footer'>
        <div className="footerContainer container">
          <div className="footerMenuDiv grid">
            <div data-aos='fade-up' className="singleGrid">
              <span className="footerTitle">
                About
              </span>
              <ul className="footerUl grid">
                <li className="footerLi">
                  How it works
                </li>
                <li className="footerLi">
                  Careers
                </li>
                <li className="footerLi">
                  Affliates
                </li>
                <li className="footerLi">
                  Media
                </li>
              </ul>
            </div>
            <div  data-aos='fade-up' className="singleGrid">
              <span className="footerTitle">
                Become Sellers
              </span>
              <ul className="footerUl grid">
                <li className="footerLi">
                 Add Vehicles
                </li>
                <li className="footerLi">
                  Resourse Centre
                </li>
                <li className="footerLi">
                  Bonds 
                </li>
                <li className="footerLi">
                  Release Dates
                </li>
              </ul>
            </div>
            <div data-aos='fade-up' className="singleGrid">
              <span className="footerTitle">
                Community
              </span>
              <ul className="footerUl grid">
                <li className="footerLi">
                  Recommendations
                </li>
                <li className="footerLi">
                  Gift Cards
                </li>
                <li className="footerLi">
                  Top Ups 
                </li>
                <li className="footerLi">
                  Selling
                </li>
              </ul>
            </div>
            <div data-aos='fade-up' className="singleGrid">
              <span className="footerTitle">
               Booking Support
              </span>
              <ul className="footerUl grid">
                <li className="footerLi">
                  Updates for covid-19
                </li>
                <li className="footerLi">
                  Help Centre
                </li>
                <li className="footerLi">
                  Garages
                </li>
                <li className="footerLi">
                  Trust & Safety 
                </li>
              </ul>
            </div>
          </div>
          <div data-aos='fade-up' className="lowerSection grid">
            <p>2024 All Right Reserved </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer 
