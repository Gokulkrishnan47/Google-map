import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../Styles/googlemap.css";

const LocationMap = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [map, setMap] = useState({
    latitudes: 11.358734,
    longitudes: 77.703324,
  });

  const containerStyle = {
    width: "100%",
    height: "350px",
  };

  const center = {
    lat: map.latitudes,
    lng: map.longitudes,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMap({ latitudes: latitude, longitudes: longitude });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="form_parent">
        <h1 className="heading_map">Find Your Location</h1>
        <div className="sec_parent_div">
          <input
            type="text"
            className="gmap_input"
            placeholder="Enter Latitude"
            onChange={(e) => setLatitude(Number(e.target.value))}
          />
          <input
            type="text"
            className="gmap_input"
            placeholder="Enter Longitude"
            onChange={(e) => setLongitude(Number(e.target.value))}
          />
          <button type="submit" className="submit_button">
            Submit
          </button>
        </div>
      </form>
      <div className="googlemap_div">
        <LoadScript googleMapsApiKey="AIzaSyB52sGaZzq_ux42IfCqRWbRgNVJltg5L5o">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
          >
            <Marker position={{ lat: map.latitudes, lng: map.longitudes }} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default LocationMap;
