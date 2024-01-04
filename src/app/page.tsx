"use client";
import React, { useEffect, useRef } from "react";
import CameraScreen from "@/feature/CameraScreen";
import Header_main from "@/feature/header";
import Menu from "@/feature/menu";
import PR from "@/feature/PR";

export default function Home() {
  const camera = useRef(null);

  return (
    <>
      <Header_main params="main" />
      <main>
        <input
          type="text"
          onBlur={(e) => {
            // console.log(e.target.value);
          }}
        />
        <input
          ref={camera}
          type="file"
          accept=".jpg, .png, .gif"
          capture="environment"
          onBlur={(e) => {
            // console.log(e.target);
          }}
        />
        ここに地図を描画する
        {/* <CameraScreen /> */}
        <Menu />
      </main>
      <PR />
    </>
  );
}
