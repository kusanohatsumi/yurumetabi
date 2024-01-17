import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 34.70637893676758,
  lng: 135.5035400390625,
};

const Input = () => {
  const [destination, setDestination] = useState("");
  const [response, setResponse] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleInputChange = (event: any) => {
    setDestination(event.target.value);
  };

  const handleSearch = () => {
    // input の値から目的地を更新
    const request: google.maps.DirectionsRequest = {
      origin: center, // 現在地を仮定
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    // DirectionsService を使ってルート検索を行う
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(request, (result, status) => {
      if (status === "OK") {
        setResponse(result);
        // 目的地の座標をマーカーにセット
        setMarkerPosition({
          lat: result.routes[0].legs[0].end_location.lat(),
          lng: result.routes[0].legs[0].end_location.lng(),
        });
      } else {
        console.error("ルート検索でエラーが発生しました", status);
      }
    });
  };

  return (
    <div>
      <input type="text" value={destination} onChange={handleInputChange} />
      <button onClick={handleSearch}>検索</button>

      <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GMAPS_API_KEY}`}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* マーカーの追加 */}
          <Marker
            position={{ lat: 34.70637893676758, lng: 135.5035400390625 }}
          />

          {/* 検索結果の目的地に対するマーカー */}
          {markerPosition && <Marker position={markerPosition} />}

          {/* ルートの表示 */}
          {response && <DirectionsRenderer directions={response} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Input;
