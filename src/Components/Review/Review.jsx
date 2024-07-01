import React from 'react'
import './Review.scss'

import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

import car1 from '../../Assest/cadillac2.jpg'
import car2 from '../../Assest/car2.jpg'
import car3 from '../../Assest/car3.jpg'
import user1 from '../../Assest/nelson.jpg'
import user2 from '../../Assest/user2.webp'
import user3 from '../../Assest/user3.jpg'

import {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Review = () => {
  useEffect(()=>{
    Aos.init(
      {
        duration:2000
      }
    )
  },[])
  return (
      <div className='review section'>
        <div className='secContainer container'>
          <div data-aos='fade-up' className='secHeading flex '>
            <h3 className='secTitle'>
              Recent Reviews
            </h3>
            <div className="navBtns flex">
              <BsArrowLeftShort className='icon leftIcon'/>
              <BsArrowRightShort className='icon rightIcon'/>
            </div>
          </div>
          <div className="reviewConatiner grid">
            <div data-aos='fade-up' className="singleReview grid ">
              <div className="imgDiv">
                <img src={car1} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className='desc'>
                Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
              </span>
              <div className="reviewerdiv flex">
                <div className="leftdiv flex">
                  <div className="reviewerImage">
                    <img src={user1} alt="reviewerImage" />
                  </div>
                  <div className="aboutReviewer">
                    <span className='name'>
                      Jakline Nelson
                    </span>
                    <p>chief Editor</p>
                  </div>
                </div>
                <div className="rightdiv flex">
                  <AiFillStar className='icon'/>
                  <blockquote>4.84</blockquote>
                </div>
              </div>
            </div>
            <div data-aos='fade-up' className="singleReview grid ">
              <div className="imgDiv">
                <img src={car2} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className='desc'>
                Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
              </span>
              <div className="reviewerdiv flex">
                <div className="leftdiv flex">
                  <div className="reviewerImage">
                    <img src={user2} alt="reviewerImage" />
                  </div>
                  <div className="aboutReviewer">
                    <span className='name'>
                      Nicole webb
                    </span>
                    <p>Manager Atlantis</p>
                  </div>
                </div>
                <div className="rightdiv flex">
                  <AiFillStar className='icon'/>
                  <blockquote>4.84</blockquote>
                </div>
              </div>
            </div>
            <div data-aos='fade-up' className="singleReview grid ">
              <div className="imgDiv">
                <img src={car3} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className='desc'>
                Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
              </span>
              <div className="reviewerdiv flex">
                <div className="leftdiv flex">
                  <div className="reviewerImage">
                    <img src={user3} alt="reviewerImage" />
                  </div>
                  <div className="aboutReviewer">
                    <span className='name'>
                      Isratech
                    </span>
                    <p>YT Admin</p>
                  </div>
                </div>
                <div className="rightdiv flex">
                  <AiFillStar className='icon'/>
                  <blockquote>4.84</blockquote>
                </div>
              </div>
            </div>
            <div data-aos='fade-up' className="singleReview grid ">
              <div className="imgDiv">
                <img src={car1} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className='desc'>
                Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
              </span>
              <div className="reviewerdiv flex">
                <div className="leftdiv flex">
                  <div className="reviewerImage">
                    <img src={user1} alt="reviewerImage" />
                  </div>
                  <div className="aboutReviewer">
                    <span className='name'>
                      Jakline Nelson
                    </span>
                    <p>chief Editor</p>
                  </div>
                </div>
                <div className="rightdiv flex">
                  <AiFillStar className='icon'/>
                  <blockquote>4.84</blockquote>
                </div>
              </div>
            </div>
            <div data-aos='fade-up' className="singleReview grid ">
              <div className="imgDiv">
                <img src={car2} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className='desc'>
                Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
              </span>
              <div className="reviewerdiv flex">
                <div className="leftdiv flex">
                  <div className="reviewerImage">
                    <img src={user2} alt="reviewerImage" />
                  </div>
                  <div className="aboutReviewer">
                    <span className='name'>
                      Nicole webb
                    </span>
                    <p>Manager Atlantis</p>
                  </div>
                </div>
                <div className="rightdiv flex">
                  <AiFillStar className='icon'/>
                  <blockquote>4.84</blockquote>
                </div>
              </div>
            </div>
            <div data-aos='fade-up' className="singleReview grid ">
              <div className="imgDiv">
                <img src={car3} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className='desc'>
                Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
              </span>
              <div className="reviewerdiv flex">
                <div className="leftdiv flex">
                  <div className="reviewerImage">
                    <img src={user3} alt="reviewerImage" />
                  </div>
                  <div className="aboutReviewer">
                    <span className='name'>
                      Isratech
                    </span>
                    <p>YT Admin</p>
                  </div>
                </div>
                <div className="rightdiv flex">
                  <AiFillStar className='icon'/>
                  <blockquote>4.84</blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Review
