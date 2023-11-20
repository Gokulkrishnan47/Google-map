import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const apiKey = "AIzaSyB52sGaZzq_ux42IfCqRWbRgNVJltg5L5o"; // Replace with your actual API key

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 13.0826802, // Default to 0
  lng: 80.2707184, // Default to 0
};

const App = () => {
  const [position, setPosition] = useState(center);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://www.googleapis.com/geolocation/v1/geolocate",
          {
            params: {},
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPosition({ lat: data.location.lat, lng: data.location.lng });
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={15}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
