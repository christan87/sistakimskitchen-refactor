import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Home.module.css";
import Slider from "react-slick";
import { FacebookIcon, InstagramIcon } from "../Icons";
import {
    storefront,
    burger001,
    fish001,
    ribs001
} from '../../public/images/hero';

import {
  sliderBlurb01,
  sliderBlurb02,
  sliderBlurb03,
  sliderBlurb04,
  sliderBlurb04Aside
} from '../constants';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState();
    
    useEffect(() => {
      setCurrentSlide(0);
    },[]);

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 12000, // Change this to your desired speed
      appendDots: dots => (
        <div
          style={{ 
            position: "absolute",
            bottom: "6px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul 
            style={{ 
                margin: "0px", 
                // backgroundColor: 'var(--brand-neonpurple)',
                backgroundColor: 'black',
                width: 'fit-content',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
            }}
          > {dots} 
          </ul>
        </div>
      ),
      beforeChange: (current, next) => setCurrentSlide(next),
      customPaging: i => (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            // backgroundColor: 'var(--brand-neonorange)',
            // backgroundColor: 'white',
            backgroundColor: currentSlide === i ? 'var(--brand-neonorange)' : 'var(--brand-neonpurple)',
            border: `2px solid ${currentSlide === i ? 'var(--brand-neonorange)' : 'var(--brand-neonpurple)'}`,
            outline: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.8s ease, border 0.8s ease',
          }}
        >
        </div>
      )
    };
    return (
      <div>
        <Slider {...settings} id="mySlider">
          <div className={`${styles["slider-img"]}`}>
            <div className={`${styles['slider-img-overlay']}`}/>
            <Image src={storefront} alt="Slide 1 Watermelon Drink" layout='fill' objectFit='cover' objectPosition='50% 50%'/>
            <div className={`${styles["slider-img-content"]}`}>
              <h1>{sliderBlurb01}</h1>
              <Link href={`/menu`}>Menu</Link>
            </div>
          </div>
          <div className={`${styles["slider-img"]}`}>
            <div className={`${styles['slider-img-overlay']}`}/>
            <Image src={burger001} alt="Slide 2 Cheese Burger" layout='fill' objectFit='cover' objectPosition='50% 30%'/>
            <div className={`${styles["slider-img-content"]}`}>
              <h1>{sliderBlurb02}</h1>
              <Link href={`/locations`}>Locations</Link>
            </div>
          </div>
          <div className={`${styles["slider-img"]}`}>
            <div className={`${styles['slider-img-overlay']}`}/>
            <Image src={ribs001} alt="Slide 3 Ribs" layout='fill' objectFit='cover' objectPosition='50% 50%'/>
            <div className={`${styles["slider-img-content"]}`}>
              <h1>{sliderBlurb03}</h1>
              <Link href={`/booking`}>Booking</Link>
            </div>
          </div>
          <div className={`${styles["slider-img"]}`}>
            <div className={`${styles['slider-img-overlay']}`}/>
            <Image src={fish001} alt="Slide 4 Catfish Combo With Yams and Mac and Cheese" layout='fill' objectFit='cover' objectPosition='50% 50%'/>
            <div className={`${styles["slider-img-content"]}`}>
              <h1>{sliderBlurb04}</h1>
              <Link href={`/booking#bottom`}>Contact Us</Link>
              <h2>{sliderBlurb04Aside}</h2>
              <div className={`${styles['slider-img-content-socials']}`}>
                <Link href="https://www.instagram.com/sistakimskitchen/"><InstagramIcon color='white' width='30' height='30'className='nav-link-icon'/></Link>
                <Link href="https://www.facebook.com/Sistakimskitchen/"><FacebookIcon color='white' width='30' height='30' className='nav-link-icon'/></Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

export default HeroSlider;