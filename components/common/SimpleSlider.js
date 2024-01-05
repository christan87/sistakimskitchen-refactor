import React, { Component } from "react";
import Image from "next/image";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Home.module.css";
import Slider from "react-slick";
import {
    storefront,
    burger001,
    drink001,
    fish001,
    friedwings001,
    nachofries,
    ribs001
} from '../../public/images/hero';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
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
                backgroundColor: 'var(--brand-neonpurple)',
                width: 'fit-content',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
            }}
          > {dots} 
          </ul>
        </div>
      )
    };
    return (
      <div>
        <Slider {...settings} id="mySlider">
          <div className={`${styles["slider-img"]}`}>
            <Image src={storefront} alt="Slide 1" layout='fill' objectFit='cover'/>
          </div>
          <div className={`${styles["slider-img"]}`}>
          <Image src={burger001} alt="Slide 1" layout='fill' objectFit='cover'/>
          </div>
          <div className={`${styles["slider-img"]}`}>
          <Image src={ribs001} alt="Slide 1" layout='fill' objectFit='cover'/>
          </div>
          <div className={`${styles["slider-img"]}`}>
          <Image src={fish001} alt="Slide 1" layout='fill' objectFit='cover'/>
          </div>
        </Slider>
      </div>
    );
  }
}