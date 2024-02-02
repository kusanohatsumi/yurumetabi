"use client";
import Map from "@/feature/googlemap";
import Input from "@/feature/googlemap/input";
import MapWithCurrentLocation from "@/feature/googlemap/location";
// import GoogleMap from "@/feature/googlemap/map";
import MapWithDirections from "@/feature/googlemap/walking";
import Menu from "@/feature/menu";
import { sub } from "@/style/color";
import {
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const containerStyle = {
    width: "100%",
    height: "calc(100vh - 230px)",
  };
  const mapCenter = {
    lat: 34.70637893676758,
    lng: 135.5035400390625,
  };
  const position = {
    lat: 34.706434,
    lng: 135.503237,
  };

  const oosakajo = {
    lat: 34.68769189496629,
    lng: 135.5259551054194,
  };

  const puraratennma = {
    lat: 34.70727655352114,
    lng: 135.51299919314886,
  };
  const oosakatennmannguu = {
    lat: 34.69645447799954,
    lng: 135.5125168711225,
  };

  const hanakujira = {
    lat: 34.694981266123044,
    lng: 135.48698103220693,
  };

  const baraen = {
    lat: 34.68601998001901,
    lng: 135.49405999048605,
  };

  // 現在地の取得
  const [nowPosition, setNowPosition] =
    // useState<google.maps.LatLngLiteral | null>(null);
    useState<{ lat: number; lng: number }>(position);

  useEffect(() => {
    // ユーザーの現在地を取得
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // setCurrentLocationMarker({ lat: latitude, lng: longitude });
          setNowPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
    }
  }, []);
  const [newNowPosition, seNewtNowPosition] = useState<{
    lat: number;
    lng: number;
  }>(nowPosition);

  // ルート検索
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(
    null
  );
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  // const handleInputChange = (event: any) => {
  //   setDestination(event.target.value);
  // };

  const zoom = 16;

  const [active, setActive] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const state = (newState: boolean) => {
    setActive(newState);
  };
  const Search = (newState: boolean) => {
    setSearch(newState);
  };

  // const [destination, setDestination] = useState("");
  const [destination, setDestination] = useState<{ lat: number; lng: number }>(
    puraratennma
  );

  const [count, setCount] = useState(1);
  const counfFn = (value: number) => {
    setCount(value);
  };

  useEffect(() => {
    if (count === 1) {
      setDestination(puraratennma);
      seNewtNowPosition(nowPosition);
      console.log(count);
      console.log(destination);
      console.log(nowPosition);
    } else if (count === 2) {
      setDestination(baraen);
      seNewtNowPosition(puraratennma);
      console.log(count);
      console.log(destination);
      console.log(nowPosition);
    } else if (count === 3) {
      setDestination(oosakajo);
      seNewtNowPosition(baraen);
      console.log(count);
      console.log(destination);
      console.log(nowPosition);
    }
  }, [count]);

  const handleSearch = () => {
    if (nowPosition) {
      const request: google.maps.DirectionsRequest = {
        origin: newNowPosition, // 現在地を仮定
        destination: destination, // 目的地を仮定
        travelMode: google.maps.TravelMode.DRIVING,
      };
      // input の値から目的地を更新
      // DirectionsService を使ってルート検索を行う
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(request, (result, status) => {
        if (status === "OK" && result) {
          setResponse(result);
          console.log(result);

          const endLocation = result.routes[0]?.legs[0]?.end_location;
          if (endLocation) {
            const marker = new google.maps.Marker({
              position: {
                lat: endLocation.lat(),
                lng: endLocation.lng(),
              },
              label: {
                text: "終点", // ピンのラベルを設定
                color: "white", // ラベルの色
                fontWeight: "bold", // ラベルのフォントウェイト
              },
            });
            // setMarkerPosition({
            //   lat: endLocation.lat(),
            //   lng: endLocation.lng(),
            // });
          } else {
            console.error("ルートの終了地点が見つかりません");
          }
        } else {
          console.error("ルート検索でエラーが発生しました", status);
        }
      });
    }
  };

  const [click, setClick] = useState("");
  const handleChange = (e: any) => {
    setDestination(e.target.value);
  };
  const handleClick = (value: any) => {
    setClick(value); // ここにボタンのrequestを入れる
  };

  // if (response?.routes[0]?.legs[0]?.end_location.lat()) {
  //   const golePosition = {
  //     lat: response?.routes[0]?.legs[0]?.end_location.lat(),
  //     lng: response?.routes[0]?.legs[0]?.end_location.lng(),
  //   };
  //   const lat = response?.routes[0]?.legs[0]?.end_location.lat();
  //   const lng = response?.routes[0]?.legs[0]?.end_location.lng();
  // }

  return (
    <>
      <div
        className="w-full h-10 rounded text-sm flex items-center justify-center"
        style={{
          backgroundColor: "#E5B65A",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          zIndex: 10,
        }}
      >
        行き先を下部のSerchから設定しよう
      </div>
      {/* モーダル */}
      <div
        className={`flex flex-col items-center justify-around w-full absolute duration-200 ease-in-out ${
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
          </div>
          <div>
            <input
              type="text"
              placeholder="目的地を入力してください"
              className="w-72 h-10 px-2 placeholder-gray-600"
              // value={destination}
              // onChange={handleInputChange}
              style={{ backgroundColor: "#E5B65A", outline: "none" }}
            />
          </div>
        </div>
        <button
          className="w-11 border-b-2 border-stone-900 leading-5"
          onClick={() => {
            setSearch(true), setActive(false), handleSearch();
          }}
        >
          検索
        </button>
      </div>

      {/* map */}
      <div>
        <LoadScript
          googleMapsApiKey={`${process.env.NEXT_PUBLIC_GMAPS_API_KEY}`}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={nowPosition || mapCenter}
            zoom={zoom}
          >
            <MarkerF position={nowPosition || position} label={"現在地"} />
            <MarkerF position={oosakajo || position} label={""} />
            <MarkerF position={puraratennma || position} label={""} />
            <MarkerF position={oosakatennmannguu || position} label={""} />
            <MarkerF position={hanakujira || position} label={""} />
            <MarkerF position={baraen || position} label={""} />

            {response && <DirectionsRenderer directions={response} />}
          </GoogleMap>
        </LoadScript>
      </div>

      <Menu
        fn={state}
        state={search}
        serch={Search}
        destination={destination}
        handleClick={handleClick}
        count={count}
        counfFn={counfFn}
      />
    </>
  );
}
