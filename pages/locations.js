import React, { useRef } from "react";
import Map from "../components/locations/Map"
import Layout from "../components/common/Layout"
import styles from '../styles/Home.module.css';

export default function Locations() {
    const mapRef = useRef(); // passed down as a prop to the Map component

    const handleZoom = () => {
        const map = mapRef.current;

        if(map) {
            const sistaKims = {
                lat:36.14097012229575, lng:-115.14272735936078
            }
            map.setCenter(sistaKims);
            map.setZoom(18)

        }
    }

    return (
        <Layout>
            <main>
                <section>
                    <div className={`${styles['location-drawer']}`}>
                        <div className={`${styles['drawer-persistent']}`}>
                            <h1 className={`${styles['drawer-persistent-title']}`}>
                                locations
                            </h1>
                            <div className={`${styles['location-drawer-location']}`}>
                                <div className={`${styles['location-drawer-location-title']}`}>
                                    <h2>location 1</h2>
                                </div>
                                <div className={`${styles['location-drawer-location-address']}`}>
                                    <p>1234 Address Street</p>
                                    <p>City, State, Zip</p>
                                </div>
                                <button onClick={handleZoom}>Zoom</button>
                            </div>
                        </div>
                        <Map mapReff={mapRef} height="78" width="100"/>
                    </div>
                </section>
            </main>
        </Layout>
    )
}