import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const LocationMap = () => {
  const [latitude, setLatitude] = useState(11.358734);
  const [longitude, setLongitude] = useState(77.703324);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const handleSubmit1 = (e) => {
    setLatitude(Number(e.target.value));
  };
  const handleSubmit2 = (e) => {
    setLongitude(Number(e.target.value));
  };

  return (
    <div>
      <h1>Google map</h1>
      <input type="number" value={latitude} onChange={handleSubmit1} />
      <input type="number" value={longitude} onChange={handleSubmit2} />
      <LoadScript googleMapsApiKey="AIzaSyB52sGaZzq_ux42IfCqRWbRgNVJltg5L5o">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={20}
          //   onLoad={onLoad}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocationMap;
