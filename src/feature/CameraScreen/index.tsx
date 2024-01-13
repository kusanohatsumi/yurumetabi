"use client";

import { CameraType } from "@/components/Camera/types";
import Image from "next/image";
import { type } from "os";
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

export default function CameraScreen() {
  const camera = useRef<CameraType>(null);
  const [image, setImage] = useState<string | null>(null);
  // console.log(camera.current);

  return (
    <>
      <header>
        <img src="" alt="" />
      </header>
      <main>
        <div>
          <Image
            src="/image/flash.svg"
            alt="フラッシュ"
            width={25}
            height={25}
          />
        </div>
        <section>
          <div className="w-full h-8">
            <Camera
              errorMessages={{
                noCameraAccessible:
                  "No camera device accessible. Please connect your camera or try a different browser.",
                permissionDenied:
                  "Permission denied. Please refresh and give camera permission.",
                switchCamera:
                  "It is not possible to switch camera to different one because there is only one video device accessible.",
                canvas: "Canvas is not supported.",
              }}
              ref={camera}
            />
          </div>
        </section>
        <section>
          <button
            className="CameraBtn"
            onClick={() => {
              if (camera.current) {
                const photo = camera.current.takePhoto();
                setImage(photo);
              }
            }}
          ></button>
          <img src="" alt="" />
          <p>おすすめスポットを共有しましょう</p>
        </section>
        <footer>
          <div className="w-full h-16 bg-slate-200 text-center absolute bottom-0">
            PR
          </div>
        </footer>
      </main>
    </>
  );
}
