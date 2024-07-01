import React, { useState } from 'react';
import { useEffect} from "react";
import './Home.scss';
import './TestDriveForm.scss';
import homeImage from '../../Assest/lambo2.jpg';
import { IoIosCloseCircle } from 'react-icons/io';



// Aos setup
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleTestDriveClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(()=>{
    Aos.init(
      {
        duration:2000
      }
    )
  },[])

  return (
    <div>
      <div className='home'>
        <div className="secContainer">
          <div data-aos='fade-up' className="homeText">
            <span  className="homeSpan">
              Meet your new car
            </span>
            <h1 className='homeTitle'>
              Lamborghini Veneno
            </h1>
            <div className="btns flex">
              <button data-aos='fade-right' className="btn">More Details</button>
              <button data-aos='fade-left' className="btn primaryBtn" onClick={handleTestDriveClick}>Test Drive</button>
            </div>
          </div>
          <div data-aos='fade-down-right' className="homeImage">
            <img src={homeImage} alt="Home Image" />
          </div>
        </div>
      </div>
      {showForm && <TestDriveForm onClose={handleCloseForm} />}
    </div>
  );
};

const TestDriveForm = ({ onClose }) => {
  return (
    <div className="formContainer">
      <div className="formHeader">
        <h2>Test Drive Form</h2>
        <IoIosCloseCircle className="closeIcon" onClick={onClose} />
      </div>
      <form>
        <label>
          Full Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" />
        </label>
        <label>
          Preferred Date:
          <input type="date" name="date" />
        </label>
        <label>
          Preferred Time:
          <input type="time" name="time" />
        </label>
        <label>
          Address:
          <textarea name="address"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
