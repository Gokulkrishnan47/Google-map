import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 0,
  lng: 0,
};

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  console.log(currentLocation);

  useEffect(() => {
    // Get the current location using the Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyB52sGaZzq_ux42IfCqRWbRgNVJltg5L5o">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation || center}
        zoom={10}
      >
        {/* Add any additional components, markers, etc., as needed */}
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
