import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
import Link from "next/link";

import Layout from '../components/common/Layout';
import HeroSlider from '../components/Landing/HeroSlider';
import ScrollingReviews from '../components/Landing/ScrollingReviews';
import Review from '../components/Landing/Review';

import useOnScreenPersist from '../hooks/useOnScreenPersist';

import { 
  pastramiCombo,
  shrimpPoBoiCombo,
  sistaKimsKitchen,
  googleReviews,
  orderOnlineLink
} from '../components/constants';

import {
  pastrami001, 
  shrimp_poboy001,
} from '../public/images';

import reviews from '../components/constants/reviews';

import styles from '../styles/Home.module.css';

export default function Home() {

  // Initialize a new state variable `inProp` with a default value of `false`.
  // `inProp` will be used to toggle the enter/exit states of the CSSTransition component.
  // `inProp` will be used to prevent duplicate rendering when used with the `mountOnEnter` property.
  // `inProp` should be used for any components that are visible at page load to prevent all component using useonScreenPersist from rendering at page load.
  const [inProp, setInProp] = useState(false);
  
  /**
   * `windowSize` is a state variable in React, which is initially set to `undefined`.
   * This state variable is used to control the width of a section to account for sizing on smaller screens.
   */
  const [windowSize, setWindowSize] = useState({width:undefined, heigth:undefined});

  /**
   * `isLargeScreen` is a boolean that is `true` if the screen width is 1024px or larger, and `false` otherwise.
   *  This boolean is used to determine if the section should be rendered as a large section or a small section.
   */
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  /**
   * useOnScreen Hook
   * This custom React hook is used to determine whether a component is currently visible within the viewport.
   * In this example, the `useOnScreen` hook is used in a `MyComponent` component. The `ref` returned by the hook is attached to the `section` element. The `isVisible` boolean is used to conditionally render the text 'Component is visible' when the `section` element is in the viewport.
   */
  const [refSec1, isVisibleSec1] = useOnScreenPersist();
  const [refSec2, isVisibleSec2] = useOnScreenPersist();
  const [refSec3, isVisibleSec3] = useOnScreenPersist();

  // In this case, useEffect is used to update the `inProp` state to `true` after the component mounts.
  useEffect(() => {
    setInProp(true);
  },[]);

  // In this case, useEffect is used to update the `windowSize` state to the window width and height after resize.
  useEffect(() => {
    function handleResize() {
      setWindowSize({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  },[])

  return (

      <Layout>
        <main>
          <section id='hero' >
            <CSSTransition
              in={inProp}
              appear={true}
              timeout={2000}
              classNames="fade-up"
              mountOnEnter
            >
              <HeroSlider />
            </CSSTransition>
          </section>


          {/* ================ Section 01 ================ */}
          {/* 
            The section uses padding instead of margin so that the CSSTransition can render 
            using mt-10 would stop the user from being able to scroll to the top of the section and prevent it from rendering
          */}
          <section ref={refSec1} className='pt-10' >
            <CSSTransition
              in={isVisibleSec1}
              timeout={2000}
              classNames="fade-left"
              mountOnEnter
            >
              <div className='flex flex-wrap'>
                {/* This conditional ensures that the content will not render until in view */}
                { isVisibleSec1 &&
                  <div className={`w-full flex ${isLargeScreen && styles['sec-gradient-bg-overlay']} sec-gradient-bg-overlay ${!isLargeScreen? 'flex-col' : ''}`}>
                    <div className={`${!isLargeScreen && 'flex items-center justify-around pl-4 pr-4'}`}>
                      <Image style={{maxWidth: '640px'}} width={640} height={0} src={pastrami001} alt="Pastrami Combo With Chili Cheese Fries" className={`${isLargeScreen? `${styles['sec-left-img']}`: ' w-full'}`} />  
                    </div>
                    {/* <div style={{minHeight: '625px'}} className={`lg:ml-4 text-center flex flex-col items-center justify-center pl-4 pr-4 pb-4 ${!isLargeScreen && styles['sec-left-orange-bg']} ${!isLargeScreen && 'mt-10'}`}> */}
                    <div style={{minHeight: `${isLargeScreen? '625px' : ''}`, width: `fit-content`}} className={`lg:ml-4 lg:pl-4 lg:pr-10 lg:pb-4 lg:justify-center flex flex-col items-center  ${styles['sec-text']} ${!isLargeScreen && styles['sec-gradient-bg']} ${!isLargeScreen && 'mt-10 px-5 py-5'}`}>
                      <h2 className={`text-3xl font-bold mb-4 ${styles['sec-header']}`}>{sistaKimsKitchen}</h2>
                      <p className='text-xl text-center'>{pastramiCombo}</p>
                      <Link href={orderOnlineLink} className={`${styles['sec-btn']}`} >Order Now</Link>
                    </div>
                  </div>
                }
              </div>
            </CSSTransition>
          </section>

          {/* ================ Section 02 ================ */}
          <section ref={refSec2} className='pt-10'>
            <CSSTransition
              in={isVisibleSec2}
              timeout={2000}
              classNames="fade-right"
              mountOnEnter
            >
              <div  className='flex flex-wrap flex-row-reverse'>
                {/* This conditional ensures that the content will not render until in view */}
                { isVisibleSec2 &&
                  <div className={`w-full flex flex-row ${isLargeScreen && styles['sec-gradient-bg-overlay']} ${!isLargeScreen? 'flex-col' : ''}`}>
                    {/* <div style={{minHeight: '625px'}} className={`lg:mr-4 text-center flex flex-col items-center justify-center pl-4 pr-4 pb-4 ${!isLargeScreen && styles['sec-right-purple-bg']} ${!isLargeScreen && 'mt-10'}`}> */}
                    <div style={{minHeight: `${isLargeScreen? '625px' : ''}`, width: `fit-content`}} className={`lg:mr-4 lg:pl-10 lg:pr-4 lg:pb-4 lg:justify-center flex flex-col items-center ${styles['sec-text']} ${!isLargeScreen && styles['sec-gradient-bg']} ${!isLargeScreen && 'mt-10 order-2 px-5 py-5'}`}>
                      <h2 className={`text-3xl font-bold mb-4 ${styles['sec-header']}`}>{sistaKimsKitchen}</h2>
                      <p className='text-xl text-center'>{shrimpPoBoiCombo}</p>
                      <Link href={orderOnlineLink} className={`${styles['sec-btn']}`} >Order Now</Link>
                    </div>
                    <div className={`${!isLargeScreen && 'flex items-center justify-around pl-4 pr-4 order-1'}`}>
                      <Image style={{maxWidth: '640px'}} width={640} height={0} src={shrimp_poboy001} alt="Shrimp Po’boy Combo With Fries" className={`${isLargeScreen? `${styles['sec-right-img']}`: ' w-full'}`} />  
                    </div>
                  </div>
                }
              </div>
            </CSSTransition>
          </section>

          {/* ================ Section 03 ================ */}
          <section ref={refSec3} className='pt-10'>
            <CSSTransition
                in={isVisibleSec3}
                timeout={2000}
                classNames="fade-up"
                mountOnEnter
            >
              <div className={`overflow-hidden`}>
                <div className={`${styles['review-google']}`} >
                  <Link href={googleReviews} className={`${styles['review-google-link']}`} >Leave Us a Review!</Link>
                </div>
                <ScrollingReviews>
                  <Review review={reviews[0]} />
                  <Review review={reviews[1]} />
                  <Review review={reviews[2]} />
                  <Review review={reviews[3]} />
                </ScrollingReviews>
              </div>

            </CSSTransition>
          </section>
        </main>
      </Layout>  

  )
}
