import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import styles from '../../styles/Home.module.css';
import { CloseIcon } from "../Icons";
const Map = ({height='50', heightUnits='vh', width='100', widthUnits='%'}) => {

  const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

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

  useEffect(() => {
    if(mapRef.current) {
      // Force a re-render of the Google Map component
      mapRef.current.forceUpdate();
    }

  }, []);

  // This useEffect is used to style the Google Map InfoWindow
  // The InfoWindow is rendered outside of the React component tree, so it cannot be styled using CSS
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          const infoWindowWrapper01 = document.querySelector('.gm-style .gm-style-iw-c');
          const infoWindowWrapper02 = document.querySelector('.gm-style-iw-d');
          const closeButton = document.querySelector('.gm-ui-hover-effect');
          if (infoWindowWrapper01) {
            Object.assign(infoWindowWrapper01.style, {
              padding: 0,
            });
          }
          if (infoWindowWrapper02) {
            Object.assign(infoWindowWrapper02.style, {
              padding: 0,
              overflow: 'hidden', // removes mystery padding
            });
          }
          if(closeButton) {
            Object.assign(closeButton.style, {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '5px',
            });
            // remove the span element from the close button
            const span = closeButton.querySelector('span');
            if(span) {
              closeButton.removeChild(span);
            }
            // Render the CloseIcon component to the closeButton
            ReactDOM.render(<CloseIcon />, closeButton);
          }
        }
      });
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);

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
      <h1>Locations</h1>
      <LoadScript googleMapsApiKey={mapsApiKey}>
         <GoogleMap
         ref={mapRef}
           mapContainerStyle={mapStyles}
           zoom={13}
           center={sistaKims}
           onLoad={handleMapLoad}
           options={mapOptions}
         >
          {infoOpen && (
            <InfoWindow
              position={sistaKims}
              onCloseClick={() => setInfoOpen(false)}
              options={{ pixelOffset: new window.google.maps.Size(0, -130) }} // Adjust as needed
            >
              <div className={`${styles['map-info']}`}>
                <h2 className={`${styles['map-info-header']}`}>Sista Kim's Kitchen</h2>
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
            </InfoWindow>
          )

          }
         </GoogleMap>
       </LoadScript>
    </div>
  );
}

export default Map;