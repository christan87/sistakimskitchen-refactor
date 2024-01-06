import React, {useState, useEffect} from 'react';
import Layout from '../components/common/Layout';
import HeroSlider from '../components/Landing/HeroSlider';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import TrackVisibility from 'react-on-screen';
import {
  pastrami001, 
  shrimp_poboy001,
  brand_orange_shape_001,
  brand_purple_shape_001
} from '../public/images';
import styles from '../styles/Home.module.css';

export default function Home() {
  const tests = [
    "Test", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7", "Test8", "Test9", "Test10",
    "Test", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7", "Test8", "Test9", "Test10"
  ];

  // Initialize a new state variable `inProp` with a default value of `false`.
  // `inProp` will be used to toggle the enter/exit states of the CSSTransition component.
  // `inProp` will be used to prevent duplicate rendering when used with the `mountOnEnter` property.
  const [inProp, setInProp] = useState(false);
  const [sec_1_visible, setSec_1_visible] = useState(false);

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
                      <div className={`w-full flex ${styles['sec-left-orange']}`}>
                        <div>
                          <Image src={pastrami001} width={500}/>    
                        </div>
                        <div>
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
