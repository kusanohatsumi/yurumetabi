import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
};

interface Location {
  lat: number;
  lng: number;
}

const MapWithDirections: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [destination, setDestination] = useState<string>("");
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
  };

  const handleSearch = () => {
    if (currentLocation && destination) {
      const request: google.maps.DirectionsRequest = {
        origin: currentLocation,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      // DirectionsService を使用してルート検索を行う
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(request, (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error(
            "Directions API の呼び出しでエラーが発生しました:",
            status
          );
        }
      });
    }
  };

  return (
    <div>
      <input type="text" value={destination} onChange={handleInputChange} />
      <button onClick={handleSearch}>検索</button>

      <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GMAPS_API_KEY}`}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentLocation}
          zoom={15}
        >
          {/* 現在地の Marker */}
          {currentLocation && (
            <Marker position={currentLocation} label="現在地" />
          )}

          {/* 目的地の Marker */}
          {destination && (
            <Marker
              position={{ lat: 0, lng: 0 }}
              label="目的地"
              title="目的地"
            />
          )}

          {/* ルートの表示 */}
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  strokeColor: "#1f66ff", // ルートの色
                  icons: [
                    {
                      icon: {
                        path: window.google.maps.SymbolPath
                          .FORWARD_CLOSED_ARROW,
                      },
                      offset: "100%", // 矢印の位置（ルート全体で100%）
                      repeat: "50px", // 矢印の表示間隔
                    },
                  ],
                },
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapWithDirections;
