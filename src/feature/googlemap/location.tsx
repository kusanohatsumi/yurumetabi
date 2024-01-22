import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "73vh",
};

const MapWithCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // ユーザーの現在地を取得
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []); // 空の依存配列を指定して初回のみ実行されるように

  return (
    <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GMAPS_API_KEY}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={15}
      >
        {/* 現在地のマーカーを表示 */}
        {currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithCurrentLocation;
