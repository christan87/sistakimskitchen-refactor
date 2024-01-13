import '../styles/globals.css'
import { LoadScript } from '@react-google-maps/api';
const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

function MyApp({ Component, pageProps }) {
  return (
    <LoadScript
      googleMapsApiKey={mapsApiKey}
    >
      <Component {...pageProps} />
    </LoadScript>
  );
}

export default MyApp
