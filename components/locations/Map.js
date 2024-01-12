import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const Map = () => {
    
    let mapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const mapStyles = {        
        height: "50vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: 41.3851, lng: 2.1734
      }

  return (
    <div>
      <h1>Locations</h1>
      <LoadScript googleMapsApiKey={`AIzaSyBO-sm2K0fwQ-kU7y3gSDoDdt1moBhgenE`}>
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={13}
           center={defaultCenter}
         />
       </LoadScript>
    </div>
  );
}

export default Map;