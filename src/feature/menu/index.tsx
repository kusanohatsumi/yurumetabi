"use client";
import { main, sub } from "@/style/color";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu(props: any) {
  const active = props.fn;
  const state = props.state;
  const Search = props.Search;

  const center = {
    lat: 34.70637893676758,
    lng: 135.5035400390625,
  };

  // const request: google.maps.DirectionsRequest = {
  //   origin: center, // 現在地を仮定
  //   destination: props.destination,
  //   travelMode: google.maps.TravelMode.DRIVING,
  // };

  const [action, setAction] = useState(false);

  return (
    <>
      {state === true && action === true ? (
        <div className="w-full  absolute bottom-20">
          <figure className="flex justify-center gap-2 w-full h-full">
            <Image
              src="/image/map-cancel.png"
              alt="中断"
              width={0}
              height={0}
              sizes="120vw"
              className="w-14 h-auto duration-300"
              style={action ? { opacity: 1 } : { opacity: 0 }}
              onClick={() => {
                console.log("click cancel");
              }}
            />
            <Image
              src="/image/map-goal.png"
              alt="到着"
              width={0}
              height={0}
              sizes="120vw"
              className="w-14 h-auto -translate-y-7 duration-300"
              onClick={() => {
                props.counfFn(props.count + 1);
                setAction(false);
              }}
            />
            <Image
              src="/image/map-mypin.png"
              alt="マイピン"
              sizes="120vw"
              width={0}
              height={0}
              className="w-14 h-auto duration-300"
              onClick={() => {
                console.log("click mypin");
              }}
            />
          </figure>
        </div>
      ) : (
        <div className="w-full  absolute bottom-20">
          <figure className="flex justify-center gap-2 w-full h-full">
            <Image
              src="/image/map-cancel.png"
              alt="中断"
              width={0}
              height={0}
              sizes="120vw"
              className="w-14 h-auto duration-300"
              style={{ transform: "translateX(50px) translateY(50px)" }}
              onClick={() => {
                console.log("click cancel");
              }}
            />
            <Image
              src="/image/map-goal.png"
              alt="到着"
              width={0}
              height={0}
              sizes="120vw"
              className="w-14 h-auto -translate-y-7 duration-300"
              style={{ transform: " translateY(50px)" }}
            />
            <Image
              src="/image/map-mypin.png"
              alt="マイピン"
              sizes="120vw"
              width={0}
              height={0}
              className="w-14 h-auto duration-300"
              style={{ transform: "translateX(-50px) translateY(50px)" }}
              onClick={() => {
                console.log("click mypin");
              }}
            />
          </figure>
        </div>
      )}

      <div
        className="w-full flex gap-14 justify-center items-end text-xs h-16 rounded-t-lg absolute bottom-0"
        style={{ backgroundColor: "#F4DCB3" }}
      >
        <Link
          className="h-full flex flex-col justify-center items-center relative after:content-['share'] after:absolute after:bottom-1 after:text-2xl after:text-white"
          href="/#"
        >
          <Image
            alt="カメラアイコン"
            src="/image/camera.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="m-1 w-8 h-auto"
          />
        </Link>

        <button
          className={`w-24 h-24 rounded-full m-2 relative flex  items-center flex-col justify-center text-center  shadow-sm  shadow-slate-700  before:content-[''] ${
            state
              ? "after:content-['ここをタップ'] after:text-sm "
              : "after:content-['seach']"
          }  after:absolute after:bottom-1 after:text-2xl after:text-white`}
          style={
            state ? { backgroundColor: "#B89A71" } : { backgroundColor: sub }
          }
          onClick={() => {
            if (state === false) {
              active(true);
            } else {
              active(false);
              setAction(!action);
              console.log("click");
            }
          }}
        >
          <Image
            alt="検索"
            src="/image/search.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="m-1 w-10 h-auto"
          />
        </button>

        <Link
          className="h-full flex flex-col justify-center items-center relative after:content-['account'] after:absolute after:bottom-1 after:text-2xl after:text-white"
          href="/#"
        >
          <Image
            alt="人のシルエットアイコン"
            src="/image/account.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="m-1 w-8 h-auto"
          />
        </Link>
      </div>
    </>
  );
}
