import React from 'react'
import './Search.scss'
import {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {
  useEffect(()=>{
    Aos.init(
      {
        duration:2000
      }
    )
  },[])
  return (
    <div>
      <div className='search'>
        <div className="secContainer container">
          <h3 data-aos='fade-up' className='title'>
            Which vehicle are you looking for?
          </h3>
          <div className="searchDiv grid">
            <input data-aos='fade-up' type="text" placeholder='text' />
            <input data-aos='fade-up' type="number" placeholder='year' />
            <input data-aos='fade-up' type="text" placeholder='model' />
            <input data-aos='fade-up' type="number" placeholder='price' />
            <button data-aos='fade-up' className='btn primaryBtn flex'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
