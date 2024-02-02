import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import Image from "next/image";
import { sub } from "@/style/color";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 34.70637893676758,
  lng: 135.5035400390625,
};

const Input = (props: any) => {
  const [destination, setDestination] = useState("");
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(
    null
  );
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [currentLocation, setCurrentLocation] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [currentLocationMarker, setCurrentLocationMarker] =
    useState<google.maps.LatLngLiteral | null>(null);

  // menu
  const [active, setActive] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const handleInputChange = (event: any) => {
    setDestination(event.target.value);
  };

  // ---
  const handleSearch = () => {
    const request: google.maps.DirectionsRequest = {
      origin: center, // 現在地を仮定
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };
    // input の値から目的地を更新

    // DirectionsService を使ってルート検索を行う
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(request, (result, status) => {
      if (status === "OK" && result) {
        setResponse(result);
        const endLocation = result.routes[0]?.legs[0]?.end_location;
        if (endLocation) {
          setMarkerPosition({
            lat: endLocation.lat(),
            lng: endLocation.lng(),
          });
        } else {
          console.error("ルートの終了地点が見つかりません");
        }
      } else {
        console.error("ルート検索でエラーが発生しました", status);
      }
    });
  };
  // ---

  useEffect(() => {
    // ユーザーの現在地を取得
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocationMarker({ lat: latitude, lng: longitude });
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="relative">
      <div className="pt-10">
        {/* <input type="text" value={destination} onChange={handleInputChange} />
        <button onClick={handleSearch}>検索</button> */}
        <LoadScript
          id="map"
          googleMapsApiKey={`${process.env.NEXT_PUBLIC_GMAPS_API_KEY}`}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* マーカーの追加
          <Marker
            position={{ lat: 34.70637893676758, lng: 135.5035400390625 }}
          /> */}
            {/* 現在地のマーカーを表示 */}
            {currentLocationMarker && (
              <Marker position={currentLocationMarker} />
            )}

            {/* 検索結果の目的地に対するマーカー */}
            {markerPosition && <Marker position={markerPosition} />}

            {/* ルートの表示 */}
            {response && <DirectionsRenderer directions={response} />}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* menu */}
      <div
        className={`flex flex-col items-center justify-around w-full absolute translate-y-full duration-200 ease-in-out ${
          active ? "bottom-0" : "-bottom-60"
        }  z-20 h-60 rounded-3xl map-menu`}
      >
        <button
          onClick={() => {
            setActive(!active);
          }}
        >
          <Image
            src="/image/map-arrow.svg"
            alt="上矢印"
            width={0}
            height={0}
            sizes="100vw"
            className="w-4 h-auto "
          />
        </button>
        <div className="text-xs text-center">
          目的地まで遠回りして
          <br />
          自分だけの新たな名所を見つけましょう
        </div>
        <div className="flex justify-center items-center  gap-7">
          <div className="flex flex-col items-center gap-2">
            {/* icon */}
            <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
            <div>
              <Image
                src="/image/menu-dotted.png"
                alt="ピンのアイコン"
                width={0}
                height={0}
                sizes="100vw"
                className="w-1 h-auto"
              />
            </div>
            <div>
              <Image
                src="/image/menu-pin.svg"
                alt="ピンのアイコン"
                width={0}
                height={0}
                sizes="100vw"
                className="w-4 h-auto"
              />
            </div>
            {/* --- */}
          </div>
          <div>
            <input
              type="text"
              placeholder="目的地を入力してください"
              className="w-72 h-10 px-2 placeholder-gray-600"
              value={destination}
              onChange={handleInputChange}
              style={{ backgroundColor: "#E5B65A", outline: "none" }}
            />
          </div>
        </div>
        <button
          className="w-11 border-b-2 border-stone-900 leading-5"
          onClick={() => {
            setSearch(true), setActive(false), handleSearch;
          }}
        >
          検索
        </button>
      </div>
    </div>
  );
};

export default Input;
