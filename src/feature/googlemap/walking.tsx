import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "542px",
};

const MapWithDirections = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);

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
  }, []); // 空の依存配列を指定して初回のみ実行

  const handleInputChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSearch = () => {
    if (currentLocation && destination) {
      const request = {
        origin: currentLocation,
        destination: destination,
        travelMode: "DRIVING",
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

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };

  return (
    <div className=" flex-1">
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
            <Marker position={destination} label="目的地" title="目的地" />
          )}
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  strokeColor: "#1f66ff", // ルートの色
                },
              }}
              onDirectionsChanged={(newDirections) => {
                // 目的地に到達したかどうかの判定
                const isArrived =
                  newDirections.status === "OK" &&
                  newDirections.routes[0].legs[0].steps.length === 1;

                if (isArrived) {
                  console.log("目的地に到達しました");
                }
              }}
            />
          )}
          {/* 各ステップの Marker と InfoWindow */}
          {directions &&
            directions.routes[0].legs[0].steps.map((step, index) => (
              <React.Fragment key={index}>
                <Marker
                  position={step.end_location}
                  label={`${index + 1}`} // 1から始まる番号をラベルに表示
                  onClick={() => handleStepClick(index)}
                />
                {selectedStep === index && (
                  <InfoWindow
                    position={step.end_location}
                    onCloseClick={() => setSelectedStep(null)}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: step.html_instructions,
                      }}
                    />
                  </InfoWindow>
                )}
              </React.Fragment>
            ))}
        </GoogleMap>
      </LoadScript>
      {/* <div className="w-full h-40 bg-slate-100 p-2">
        <input type="text" value={destination} onChange={handleInputChange} />
        <button onClick={handleSearch}>検索</button>
      </div> */}
    </div>
  );
};

export default MapWithDirections;
