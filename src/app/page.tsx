"use client";
import Map from "@/feature/googlemap";
import Input from "@/feature/googlemap/input";
import MapWithCurrentLocation from "@/feature/googlemap/location";
import MapWithDirections from "@/feature/googlemap/walking";
import Menu from "@/feature/menu";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Home() {
  const destination = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const state = (newState: boolean) => {
    setActive(newState);
  };
  const Search = (newState: boolean) => {
    setSearch(newState);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <div
        className="w-full h-10 rounded absolute text-sm flex items-center justify-center"
        style={{
          backgroundColor: "#E5B65A",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          zIndex: 10,
        }}
      >
        行き先を下部のSerchから設定しよう
      </div>
      <div>
        {/* <Map /> */}
        {/* <Input /> */}
        {/* <MapWithCurrentLocation /> */}
        <MapWithDirections />
        {/* <MapWithDirections /> */}
      </div>

      <div
        className={`flex flex-col items-center justify-around w-full absolute ${
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
        <div className="flex justify-center  gap-7">
          <div className="flex flex-col">aaa</div>
          <div>
            <input
              type="text"
              placeholder="目的地を入力してください"
              className="w-72 h-10 px-2 placeholder-gray-600"
              style={{ backgroundColor: "#E5B65A", outline: "none" }}
            />
          </div>
        </div>
        <button
          className="w-11 border-b-2 border-stone-900 leading-5"
          onClick={() => {
            setSearch(true), setActive(false);
          }}
        >
          検索
        </button>
      </div>
      <Menu fn={state} state={search} serch={Search} />
    </>
  );
}
