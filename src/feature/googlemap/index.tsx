import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "542px",
};

const center = {
  lat: 34.70637893676758,
  lng: 135.5035400390625,
};

const zoom = 10;
const destination = "34.971815986373706, 138.38883008534174";

const Map = () => {
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  const handleLoad = () => {
    setGoogleMapsLoaded(true);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GMAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = handleLoad;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (googleMapsLoaded) {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();

      const map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: zoom,
      });
      directionsRenderer.setMap(map);

      const request = {
        origin: "34.70637893676758, 135.5035400390625",
        destination: destination,
        waypoints: [
          { location: "35.17120698951248, 136.88157625490663", stopover: true },
          { location: "34.70434730697902, 137.73446967423465", stopover: true },
        ],
        travelMode: "DRIVING",
      };

      directionsService.route(request, (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);
        } else {
          console.error(
            `Directions API の呼び出しでエラーが発生しました: ${status}`
          );
        }
      });
    }
  }, [googleMapsLoaded]);

  return (
    <>
      {/* <div id="map" style={{ width: "100%", height: "86vh" }}></div> */}
      <div id="map" style={{ width: "100%", height: "73vh" }}>
        {googleMapsLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
          >
            {/* マーカーの追加 */}
            <Marker
              position={{ lat: 34.70637893676758, lng: 135.5035400390625 }}
            />
          </GoogleMap>
        )}
      </div>
    </>
  );
};

export default Map;
