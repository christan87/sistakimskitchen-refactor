import React, { useRef, useState, useImperativeHandle } from "react";
import { GoogleMap, OverlayView } from '@react-google-maps/api';
import styles from '../../styles/Home.module.css';
import { CloseIcon } from "../Icons";
import { sistaKimsKitchen } from '../constants';

const Map = ({parentMapRef, height='50', heightUnits='vh', width='100', widthUnits='%'}) => {

  const mapStyles = {        
    height: `${height}${heightUnits}`,
    width: `${width}${widthUnits}`
  };

  // Map Dark Theme Styles
  const mapOptions = {
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  };

  // The Lat and Long for Sista Kim's Kitchen
  const sistaKims = {
     lat:36.14097012229575, lng:-115.14272735936078
  }

  const mapRef = useRef();
  const markerRef = useRef();
  const [infoOpen, setInfoOpen] = useState(false);


    // Initialize your map here using mapRef

    useImperativeHandle(parentMapRef, () => ({
      zoomToLocation: (location, zoomLevel) => {
        const map = mapRef.current;
        if (map) {
          map.setCenter(location);
          map.setZoom(zoomLevel);
        }
      },
    }));

  const handleMapLoad = (map) => {
    mapRef.current = map;
    markerRef.current = new window.google.maps.Marker({
      position: sistaKims,
      map: mapRef.current,
      icon: {
        url: '/images/map/mapPin.png', // URL of your custom marker image
        scaledSize: new window.google.maps.Size(80, 130), // size of the icon
      }
    });
    markerRef.current.addListener("click", () => {
      setInfoOpen(true);
    });
  };

  return (
    <div>
         <GoogleMap
         ref={mapRef}
           mapContainerStyle={mapStyles}
           zoom={13}
           center={sistaKims}
           onLoad={handleMapLoad}
           options={mapOptions}
         >

          {infoOpen && (
            // <InfoWindow> replaced with OverlayView
            <OverlayView
              position={sistaKims}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              options={{ pixelOffset: new window.google.maps.Size(0, -130) }}
            >
              <div className={`${styles['map-info']}`}>
                <button className={`${styles['map-info-close']}`} onClick={() => setInfoOpen(false)}><CloseIcon/></button>
                <h2 className={`${styles['map-info-header']}`}>{sistaKimsKitchen}</h2>
                <div className={`${styles['map-info-text']}`}>
                  <p>900 Liberace Ave Suite D-112,</p>
                  <p>Las Vegas, NV 89109</p>
                </div>

                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=Sista+Kim's+Kitchen`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles['map-info-link']}`}
                >
                  View on Google Maps
                </a>
              </div>
              </OverlayView>
            // </InfoWindow>
          )

          }
         </GoogleMap>

    </div>
  );
}

export default Map;