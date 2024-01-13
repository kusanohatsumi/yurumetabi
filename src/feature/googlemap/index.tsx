import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "86vh",
};

const center = {
  lat: 34.70637893676758,
  lng: 135.5035400390625,
};

const zoom = 13;

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GMAPS_API_KEY}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;
