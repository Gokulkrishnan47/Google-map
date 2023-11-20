import React from "react";
import axios from "axios";

const API_endpoint = `https://api.openweathermap.org/data/3.0/onecall?`;
const API_key = `d2cef0c50434b3762e17c2adf7615c04`;
// const a=https://openweathermap.org/api/one-call-3
const App = () => {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&log=${longitude}&exclude=hourly,daily&appid=${API_key}`;
    console.log(finalAPIEndPoint);
    axios.get(finalAPIEndPoint).then((response) => {
      console.log(response.data);
    });
  }, []);
  return <div>App</div>;
};

export default App;
