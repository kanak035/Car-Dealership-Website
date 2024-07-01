// import React, { useState} from 'react'
// import './Navbar.scss'
// import logo from '../../Assest/logo.png' 
// import {IoIosCloseCircle} from 'react-icons/io'
// import {TbGridDots} from 'react-icons/tb'

// const Navbar = () => {
//     const [navbar,setNavbar] = useState('navbar')
// const showNavbar = ()=>{
//     setNavbar('navbar showNavbar')
// }

// const removeNavbar = ()=>{
//     setNavbar('navbar')
// }
// //function to add a background to the navbar when we scroll a certain height on the window
// const [header,setHeader] = useState('header')
// const addbg = () =>{
//     if(window.scrollY >= 20){
//         setHeader('header addbg')
//     }
// }
// window.addEventListener('scroll',addbg)

//   return (
//       <div className={header}>
//         <div className="logDiv">
//             <img src={logo} alt="Logo Image" className='logo'/>
//         </div>
//         <div className={navbar}>
//             <ul className='menu'>
//                 <li onClick={removeNavbar} className="listItem">
//                     <a href="/" className='link'>Used cars</a>
//                 </li>
//                 <li onClick={removeNavbar} className="listItem">
//                     <a href="/" className='link'>New cars</a>
//                 </li>
//                 <li onClick={removeNavbar} className="listItem">
//                     <a href="/" className='link'>Auction</a>
//                 </li>
//                 <li onClick={removeNavbar} className="listItem">
//                     <a href="/" className='link'>Sell</a>
//                 </li>
//             </ul>
//             <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar}/>
//         </div>
//         <div className="signUp flex">
//             <div className="text">Sign Up</div>
//             <TbGridDots className ='icon toggleNavbarIcon' onClick={showNavbar}/>
//         </div>
//       </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../Assest/logo.png';
import { IoIosCloseCircle } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';
import SignUpPage from './SignUpPage'; // Import your sign-up page component

const Navbar = () => {
  const [navbar, setNavbar] = useState('navbar');
  const [showSignUp, setShowSignUp] = useState(false);
  const [header, setHeader] = useState('header');

  const showNavbar = () => {
    setNavbar('navbar showNavbar');
  };

  const removeNavbar = () => {
    setNavbar('navbar');
  };

  const addbg = () => {
    if (window.scrollY >= 20) {
      setHeader('header addbg');
    }
  };
  window.addEventListener('scroll', addbg);

  const openSignUp = () => {
    setShowSignUp(true);
  };

  const closeSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <div className={header}>
      <div className="logDiv">
        <img src={logo} alt="Logo Image" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Used cars
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              New cars
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Auction
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Sell
            </a>
          </li>
        </ul>
        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <div className="signUp flex">
        <div className="text" onClick={openSignUp}>
          Sign Up
        </div>
        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>

      {/* Sign Up Page */}
      {showSignUp && <SignUpPage closeSignUp={closeSignUp} />}
    </div>
  );
};

export default Navbar;
