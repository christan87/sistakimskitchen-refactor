import React, {useState, useEffect} from 'react';
import Layout from '../components/common/Layout';
import HeroSlider from '../components/Landing/HeroSlider';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import TrackVisibility from 'react-on-screen';
import { useMediaQuery } from 'react-responsive';

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
   * `isLargeScreen` is a boolean that is `true` if the screen width is 1024px or larger, and `false` otherwise.
   *  This boolean is used to determine if the section should be rendered as a large section or a small section.
   */
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  // In this case, useEffect is used to update the `inProp` state to `true` after the component mounts.
  useEffect(() => {
    setInProp(true);
  },[]);

  return (

      <Layout>
        <main>
          <section id='hero'>
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

          <section className=' mt-10'>
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
                    <div className='flex flex-wrap text-slate-50'>
                      <div className={`w-full flex ${isLargeScreen? styles['sec-left-orange-lg'] : styles['sec-left-orange']}`}>
                        <div>
                          <Image src={pastrami001} width={500}/>    
                        </div>
                        <div className='sec-text-left-oragnge'>
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
