import React from "react";
import Layout from "../components/common/Layout";
import ContactForm from "../components/booking/ContactForm";
import styles from "../styles/Home.module.css";
import CateringCard from "../components/booking/CateringCard";
import { CSSTransition } from 'react-transition-group';
import useOnScreenPersist from "../hooks/useOnScreenPersist"; 

import {
    seafood001,
    sides001,
    wings001,
    catering001
} from '/public/images';

import {
    meats,
    seafood,
    sides,
    sistaKimsKitchen
} from '../components/constants';


export default function Booking() {

  /**
   * useOnScreen Hook
   * This custom React hook is used to determine whether a component is currently visible within the viewport.
   * In this example, the `useOnScreen` hook is used in a `MyComponent` component. The `ref` returned by the hook is attached to the `section` element. The `isVisible` boolean is used to conditionally render the text 'Component is visible' when the `section` element is in the viewport.
   */

  const [refSec1, isVisibleSec1] = useOnScreenPersist();
  const [refSec2, isVisibleSec2] = useOnScreenPersist();
  const [refSec3, isVisibleSec3] = useOnScreenPersist();
  const [refSec4, isVisibleSec4] = useOnScreenPersist();
  
    return (
        <Layout>
            <main>
                
                <section ref={refSec1} className={`pt-10 ${styles['booking-header']}`}>
                    <CSSTransition
                        in={isVisibleSec1}
                        timeout={2000}
                        classNames="fade-up"
                        mountOnEnter
                    >
                        <div className={`${styles['booking-header-content']}`}>
                            <h1>Booking</h1>
                            <p>Let {sistaKimsKitchen} Cater Your Next Event!</p>
                        </div>
                    </CSSTransition>
                </section>

                <section ref={refSec2} className={`pt-10 ${styles['booking-hero']}`}>
                    <CSSTransition
                        in={isVisibleSec2}
                        timeout={2000}
                        classNames="fade-up"
                        mountOnEnter
                    >
                        <div className={`${styles['booking-hero-content']}`}>
                            <CateringCard img={wings001} title={`Meats`} txt={meats}/>
                            <CateringCard img={seafood001} title={`Seafood`} txt={seafood}/>
                            <CateringCard img={sides001} title={`Sides`} txt={sides}/>
                        </div>
                    </CSSTransition>
                </section>

                <section ref={refSec3} className={`pt-10`}>
                    <CSSTransition
                        in={isVisibleSec3}
                        timeout={2000}
                        classNames="fade-up"
                        mountOnEnter
                    >
                        <div className={`${styles['booking-contact-form']}`}>
                            <ContactForm />
                        </div>
                    </CSSTransition>
                </section>

                <section ref={refSec4}>
                    <CSSTransition
                        in={isVisibleSec4}
                        timeout={2000}
                        classNames="fade-up"
                        mountOnEnter
                    >
                        <div className={`${styles['booking-contactus']}`}>
                            <h1>Contact Us</h1>
                            <p>Phone: (702) 848 -7333 or (702) 462-5790</p>
                            <p>Email: Sistakimskitchenlv@gmail.com</p>
                        </div>
                    </CSSTransition>
                </section>
            </main>
        </Layout>
    )
}