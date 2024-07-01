import React from 'react'
import './Sellers.scss'
//imported images
import sellerImage1 from '../../Assest/emblem_001.jpg'
import sellerImage2 from '../../Assest/download3.jpg'
import sellerImage3 from '../../Assest/download4.png'
import sellerImage4 from '../../Assest/images23.jpg'
import {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'



const Sellers = () => {
  
    useEffect(()=>{
      Aos.init(
        {
          duration:2000
        }
      )
    },[])
  
  return (
    <div>
      <div className='sellers section'>
        <div className="secContainer container">
          <div data-aos='fade-up' className="secHeading grid">
            <h3 className='secTitle'>
              Explore top sellers in town
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos nisi officiis aliquam consequatur quaerat temporibus nam ullam veritatis dolorum.</p>
          </div>
          <div className="sellersContainer grid">
            <div data-aos='fade-up' className="singleSeller flex">
              <div className="imgDiv flex">
                <img src={sellerImage1} alt="" className='img'/>
              </div>
              <span className='info'>
                <h4 className='name'>
                  Toyota
                </h4>
                <p>from $40,000</p>
              </span>
            </div>
            <div data-aos='fade-up' className="singleSeller flex">
              <div className="imgDiv flex">
                <img src={sellerImage2} alt="" className='img'/>
              </div>
              <span className='info'>
                <h4 className='name'>
                  Mercedes Benz
                </h4>
                <p>from $60,000</p>
              </span>
            </div>
            <div data-aos='fade-up' className="singleSeller flex">
              <div className="imgDiv flex">
                <img src={sellerImage3} alt="" className='img'/>
              </div>
              <span className='info'>
                <h4 className='name'>
                  Volkswagen
                </h4>
                <p>from $35,000</p>
              </span>
            </div>
            <div data-aos='fade-up' className="singleSeller flex">
              <div className="imgDiv flex">
                <img src={sellerImage4} alt="" className='img'/> 
              </div>
              <span className='info'>
                <h4 className='name'>
                  Hyundai
                </h4>
                <p>from $23,000</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sellers
