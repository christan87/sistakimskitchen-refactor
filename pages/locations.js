import React, { useRef } from "react";
import Map from "../components/locations/Map"
import Layout from "../components/common/Layout"
import styles from '../styles/Home.module.css';
import {
    sistaKimsKitchen,
    sistaKimsStreetAddress,
    sistaKimsCityStateZip,
    sistaKimsStreet,
    googleMaps
} from '../components/constants';

export default function Locations() {
    const mapRef = useRef(); // passed down as a prop to the Map component

    const handleZoom = () => {
        const map = mapRef.current;

        if(map) {
            const sistaKims = {
                lat:36.14097012229575, lng:-115.14272735936078
            }
            mapRef.current.zoomToLocation(sistaKims, 18);

        }
    }

    return (
        <Layout>
            <main>
                <section>
                    <div className={`flex flex-col md:flex-row ${styles['location']}`}>
                        <div className={`${styles['drawer-persistent']}`}>
                            <h1 className={`${styles['drawer-persistent-title']}`}>
                                {sistaKimsStreet}
                            </h1>
                            <div className={`${styles['location-drawer-location']}`}>
                                <div className={`${styles['location-drawer-location-title']}`}>
                                    <h2>{sistaKimsKitchen}</h2>
                                </div>
                                <div className={`${styles['location-drawer-location-address']}`}>
                                    <a href={googleMaps}>
                                        <p>{sistaKimsStreetAddress}</p>
                                        <p>{sistaKimsCityStateZip}</p>
                                    </a>
                                </div>
                                <div className={`${styles['location-drawer-location-hours']}`}>
                                    <h2>Open Monday - Saturday</h2>
                                    <h2>Closed Sunday</h2>
                                    <p>11AM - 5PM Tue - Wed</p>
                                    <p>11AM - 9PM Thur - Mon</p>
                                    <h2>Hours might differ on Holidays</h2>
                                </div>
                                <div className="w-full flex justify-center">
                                    <button className={`${styles['location-drawer-location-zoom-btn']}`} onClick={handleZoom}>View On Map</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className={`${styles['location-map-container']}`}>
                            <Map parentMapRef={mapRef} height="80" width="100"/>
                        </div>
                        
                    </div>
                </section>
            </main>
        </Layout>
    )
}