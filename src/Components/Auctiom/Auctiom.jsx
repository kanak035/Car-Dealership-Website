// // import React from 'react'
// // import './Auctiom.scss'
// // import { BsArrowLeftShort } from "react-icons/bs";
// // import { BsArrowRightShort } from "react-icons/bs";
// // import car1 from '../../Assest/mercedes.jpg'
// // import car2 from '../../Assest/audi.jpg'
// // import car3 from '../../Assest/lambo.avif'
// // import car4 from '../../Assest/buggati.jpg'

// // const Auctiom = () => {
// //   return (
// //     <div>
// //       <div className='auction section'>
// //       <div className='secContainer container'>
// //         <div className="secHeading flex">
// //           <h3 className='secTitle'>
// //             Active Auctions
// //           </h3>
// //           <div className="navBtns flex">
// //           <BsArrowLeftShort className='icon leftIcon'/>
// //           <BsArrowRightShort className='icon rightIcon'/>
// //           </div>
// //         </div>
// //         <div className="carContainer grid">
// //             <div className="singleCar grid singleCarActive">
// //                 <div className="imgDiv">
// //                     <img src={car1} alt="Car Image" />
// //                 </div>
// //                 <h5 className='carTitle'>
// //                     Used 2019 Audi s4 Premium Plus
// //                 </h5>
// //                 <span className='miles'>
// //                     11457 Miles
// //                 </span>
// //                 <span className='AWD'>
// //                     AWD 4-Cylinder Turbo
// //                 </span>
// //                 <div className="price_buyBtn flex">
// //                     <span className="price">
// //                         $41,000
// //                     </span>
// //                     <span className="buyBtn">
// //                         Buy Now
// //                     </span>
// //                 </div>
// //             </div>
// //             <div className="singleCar grid singleCarActive ">
// //                 <div className="imgDiv">
// //                     <img src={car1} alt="Car Image" />
// //                 </div>
// //                 <h5 className='carTitle'>
// //                     Used 2019 Audi s4 Premium Plus
// //                 </h5>
// //                 <span className='miles'>
// //                     11457 Miles
// //                 </span>
// //                 <span className='AWD'>
// //                     AWD 4-Cylinder Turbo
// //                 </span>
// //                 <div className="price_buyBtn flex">
// //                     <span className="price">
// //                         $41,000
// //                     </span>
// //                     <span className="buyBtn">
// //                         Buy Now
// //                     </span>
// //                 </div>
// //             </div>
// //             <div className="singleCar grid singleCarActive">
// //                 <div className="imgDiv">
// //                     <img src={car1} alt="Car Image" />
// //                 </div>
// //                 <h5 className='carTitle'>
// //                     Used 2019 Audi s4 Premium Plus
// //                 </h5>
// //                 <span className='miles'>
// //                     11457 Miles
// //                 </span>
// //                 <span className='AWD'>
// //                     AWD 4-Cylinder Turbo
// //                 </span>
// //                 <div className="price_buyBtn flex">
// //                     <span className="price">
// //                         $41,000
// //                     </span>
// //                     <span className="buyBtn">
// //                         Buy Now
// //                     </span>
// //                 </div>
// //             </div>
// //             <div className="singleCar grid singleCarActive">
// //                 <div className="imgDiv">
// //                     <img src={car2} alt="Car Image" />
// //                 </div>
// //                 <h5 className='carTitle'>
// //                     Used 2019 Audi s4 Premium Plus
// //                 </h5>
// //                 <span className='miles'>
// //                     11457 Miles
// //                 </span>
// //                 <span className='AWD'>
// //                     AWD 4-Cylinder Turbo
// //                 </span>
// //                 <div className="price_buyBtn flex">
// //                     <span className="price">
// //                         $41,000
// //                     </span>
// //                     <span className="buyBtn">
// //                         Buy Now
// //                     </span>
// //                 </div>
// //             </div>
// //             <div className="singleCar grid singleCarActive">
// //                 <div className="imgDiv">
// //                     <img src={car3} alt="Car Image" />
// //                 </div>
// //                 <h5 className='carTitle'>
// //                     Used 2019 Audi s4 Premium Plus
// //                 </h5>
// //                 <span className='miles'>
// //                     11457 Miles
// //                 </span>
// //                 <span className='AWD'>
// //                     AWD 4-Cylinder Turbo
// //                 </span>
// //                 <div className="price_buyBtn flex">
// //                     <span className="price">
// //                         $41,000
// //                     </span>
// //                     <span className="buyBtn">
// //                         Buy Now
// //                     </span>
// //                 </div>
// //             </div>
// //             <div className="singleCar grid singleCarActive">
// //                 <div className="imgDiv">
// //                     <img src={car4} alt="Car Image" />
// //                 </div>
// //                 <h5 className='carTitle'>
// //                     Used 2019 Audi s4 Premium Plus
// //                 </h5>
// //                 <span className='miles'>
// //                     11457 Miles
// //                 </span>
// //                 <span className='AWD'>
// //                     AWD 4-Cylinder Turbo
// //                 </span>
// //                 <div className="price_buyBtn flex">
// //                     <span className="price">
// //                         $41,000
// //                     </span>
// //                     <span className="buyBtn">
// //                         Buy Now
// //                     </span>
// //                 </div>
// //             </div> 
// //         </div>
// //         <div>
        
// //         <div>
        
// //         </div>
// //         </div>
// //       </div>
// //     </div>
// //     </div>
// //   )
// // }

// // export default Auctiom

// import React from 'react';
// import './Auctiom.scss';
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
// import car1 from '../../Assest/mercedes.jpg';
// import car2 from '../../Assest/audi.jpg';
// import car3 from '../../Assest/lambo.avif';
// import car4 from '../../Assest/buggati.jpg';

// const Auctiom = () => {
//   const scrollContainerRef = React.useRef(null);

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollLeft -= 300; // Adjust as needed
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollLeft += 300; // Adjust as needed
//     }
//   };

//   return (
//     <div className='auction section'>
//       <div className='secContainer container'>
//         <div className='secHeading flex'>
//           <h3 className='secTitle'>Active Auctions</h3>
//           <div className='navBtns flex'>
//             <BsArrowLeftShort className='icon leftIcon' onClick={scrollLeft} />
//             <BsArrowRightShort className='icon rightIcon' onClick={scrollRight} />
//           </div>
//         </div>
//         <div className='carContainer' ref={scrollContainerRef}>
//           <div className='singleCar grid singleCarActive'>
//             <div className='imgDiv'>
//               <img src={car1} alt='Car Image' />
//             </div>
//             <h5 className='carTitle'>Used 2019 Audi s4 Premium Plus</h5>
//             <span className='miles'>11457 Miles</span>
//             <span className='AWD'>AWD 4-Cylinder Turbo</span>
//             <div className='price_buyBtn flex'>
//               <span className='price'>$41,000</span>
//               <span className='buyBtn'>Buy Now</span>
//             </div>
//           </div>
//           <div className='singleCar grid singleCarActive'>
//             <div className='imgDiv'>
//               <img src={car2} alt='Car Image' />
//             </div>
//             <h5 className='carTitle'>Used 2019 Audi s4 Premium Plus</h5>
//             <span className='miles'>11457 Miles</span>
//             <span className='AWD'>AWD 4-Cylinder Turbo</span>
//             <div className='price_buyBtn flex'>
//               <span className='price'>$41,000</span>
//               <span className='buyBtn'>Buy Now</span>
//             </div>
//           </div>
//           <div className='singleCar grid singleCarActive'>
//             <div className='imgDiv'>
//               <img src={car3} alt='Car Image' />
//             </div>
//             <h5 className='carTitle'>Used 2019 Audi s4 Premium Plus</h5>
//             <span className='miles'>11457 Miles</span>
//             <span className='AWD'>AWD 4-Cylinder Turbo</span>
//             <div className='price_buyBtn flex'>
//               <span className='price'>$41,000</span>
//               <span className='buyBtn'>Buy Now</span>
//             </div>
//           </div>
//           <div className='singleCar grid singleCarActive'>
//             <div className='imgDiv'>
//               <img src={car4} alt='Car Image' />
//             </div>
//             <h5 className='carTitle'>Used 2019 Audi s4 Premium Plus</h5>
//             <span className='miles'>11457 Miles</span>
//             <span className='AWD'>AWD 4-Cylinder Turbo</span>
//             <div className='price_buyBtn flex'>
//               <span className='price'>$41,000</span>
//               <span className='buyBtn'>Buy Now</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auctiom;
import React from 'react'
import './Auctiom.scss'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import car1 from '../../Assest/mercedes.jpg'
import car2 from '../../Assest/audi.jpg'
import car3 from '../../Assest/lambo.avif'
import car4 from '../../Assest/buggati.jpg'
import {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Auctiom = () => {
    
        useEffect(()=>{
          Aos.init(
            {
              duration:2000
            }
          )
        },[])
      
  return (
    <div>
      <div className='auction section'>
      <div className='secContainer container'>
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className='secTitle'>
            Active Auctions
          </h3>
          <div className="navBtns flex">
          <BsArrowLeftShort className='icon leftIcon'/>
          <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>
        <div className="carContainer grid">
            <div data-aos='fade-up' className="singleCar grid singleCarActive">
                <div className="imgDiv">
                    <img src={car1} alt="Car Image" />
                </div>
                <h5 className='carTitle'>
                    Used 2019 Audi s4 Premium Plus
                </h5>
                <span className='miles'>
                    11457 Miles
                </span>
                <span className='AWD'>
                    AWD 4-Cylinder Turbo
                </span>
                <div className="price_buyBtn flex">
                    <span className="price">
                        $41,000
                    </span>
                    <span className="buyBtn">
                        Buy Now
                    </span>
                </div>
            </div>
            <div data-aos='fade-up' className="singleCar grid singleCarActive ">
                <div className="imgDiv">
                    <img src={car1} alt="Car Image" />
                </div>
                <h5 className='carTitle'>
                    Used 2019 Audi s4 Premium Plus
                </h5>
                <span className='miles'>
                    11457 Miles
                </span>
                <span className='AWD'>
                    AWD 4-Cylinder Turbo
                </span>
                <div className="price_buyBtn flex">
                    <span className="price">
                        $41,000
                    </span>
                    <span className="buyBtn">
                        Buy Now
                    </span>
                </div>
            </div>
            <div data-aos='fade-up' className="singleCar grid singleCarActive">
                <div className="imgDiv">
                    <img src={car1} alt="Car Image" />
                </div>
                <h5 className='carTitle'>
                    Used 2019 Audi s4 Premium Plus
                </h5>
                <span className='miles'>
                    11457 Miles
                </span>
                <span className='AWD'>
                    AWD 4-Cylinder Turbo
                </span>
                <div className="price_buyBtn flex">
                    <span className="price">
                        $41,000
                    </span>
                    <span className="buyBtn">
                        Buy Now
                    </span>
                </div>
            </div>
        </div>
        <div className='carContainer2 grid'>
        <div data-aos='fade-up' className="singleCar grid singleCarActive">
                <div className="imgDiv">
                    <img src={car2} alt="Car Image" />
                </div>
                <h5 className='carTitle'>
                    Used 2019 Audi s4 Premium Plus
                </h5>
                <span className='miles'>
                    11457 Miles
                </span>
                <span className='AWD'>
                    AWD 4-Cylinder Turbo
                </span>
                <div className="price_buyBtn flex">
                    <span className="price">
                        $41,000
                    </span>
                    <span className="buyBtn">
                        Buy Now
                    </span>
                </div>
            </div>
            <div data-aos='fade-up' className="singleCar grid singleCarActive">
                <div className="imgDiv">
                    <img src={car3} alt="Car Image" />
                </div>
                <h5 className='carTitle'>
                    Used 2019 Audi s4 Premium Plus
                </h5>
                <span className='miles'>
                    11457 Miles
                </span>
                <span className='AWD'>
                    AWD 4-Cylinder Turbo
                </span>
                <div className="price_buyBtn flex">
                    <span className="price">
                        $41,000
                    </span>
                    <span className="buyBtn">
                        Buy Now
                    </span>
                </div>
            </div>
            <div data-aos='fade-up' className="singleCar grid singleCarActive">
                <div className="imgDiv">
                    <img src={car4} alt="Car Image" />
                </div>
                <h5 className='carTitle'>
                    Used 2019 Audi s4 Premium Plus
                </h5>
                <span className='miles'>
                    11457 Miles
                </span>
                <span className='AWD'>
                    AWD 4-Cylinder Turbo
                </span>
                <div className="price_buyBtn flex">
                    <span className="price">
                        $41,000
                    </span>
                    <span className="buyBtn">
                        Buy Now
                    </span>
                </div>
            </div> 
        </div>
        <div>
        
        <div>
        
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Auctiom