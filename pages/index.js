import React, {useState, useEffect} from 'react';
import Layout from '../components/common/Layout';
import HeroSlider from '../components/Landing/HeroSlider';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import TrackVisibility from 'react-on-screen';
import { useMediaQuery } from 'react-responsive';
import { 
  loremIpsum01,
  sistaKimsKitchen 
} from '../components/constants';

import {
  pastrami001, 
  shrimp_poboy001,
  brand_orange_shape_001,
  brand_purple_shape_001
} from '../public/images';
import styles from '../styles/Home.module.css';

export default function Home() {

  // Initialize a new state variable `inProp` with a default value of `false`.
  // `inProp` will be used to toggle the enter/exit states of the CSSTransition component.
  // `inProp` will be used to prevent duplicate rendering when used with the `mountOnEnter` property.
  const [inProp, setInProp] = useState(false);

  /**
   * `sec_1_visible` is a state variable in React, which is initially set to `false`.
   * This state variable is used to control the visibility of a section (presumably "section 1") in the component.
   */
  const [sec_1_visible, setSec_1_visible] = useState(false);
  
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
          <section className=' mt-10' >
            <TrackVisibility partialVisibility once>
              {({isVisible}) => {
                if(isVisible && !sec_1_visible) {
                  setSec_1_visible(true);
                }
                return(
                  <CSSTransition
                    in={sec_1_visible}
                    timeout={2000}
                    classNames="fade-left"
                    mountOnEnter
                  >
                    <div className='flex flex-wrap'>
                      <div className={`w-full flex ${styles['sec-left-orange']} ${isLargeScreen && styles['sec-left-orange-bg']} ${!isLargeScreen? 'flex-col' : ''}`}>
                        <div className={`${!isLargeScreen && 'flex items-center justify-around pl-4 pr-4'}`}>
                          <Image src={pastrami001} alt="section image" className={`${isLargeScreen? `${styles['sec-left-img']}`: ' w-full'}`} />  
                        </div>
                        {/* <div style={{minHeight: '625px'}} className={`lg:ml-4 text-center flex flex-col items-center justify-center pl-4 pr-4 pb-4 ${!isLargeScreen && styles['sec-left-orange-bg']} ${!isLargeScreen && 'mt-10'}`}> */}
                        <div style={{minHeight: `${isLargeScreen? '625px' : ''}`}} className={`lg:ml-4 text-center flex flex-col items-center lg:justify-center pl-4 pr-4 pb-4 ${!isLargeScreen && 'mt-10'}`}>
                          <h2 className='text-3xl font-bold'>{sistaKimsKitchen}</h2>
                          <p className='text-xl'>{loremIpsum01}</p>
                        </div>
                      </div>
                    </div>
                  </CSSTransition>
                );
              }}
            </TrackVisibility>
          </section>
        </main>
      </Layout>  

  )
}
