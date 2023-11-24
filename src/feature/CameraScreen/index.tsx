"use client";

import { CameraType } from "@/components/Camera/types";
import Image from "next/image";
import { type } from "os";
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import "@/feature/CameraScreen/style.css"

export default function CameraScreen() {
    const camera = useRef<CameraType>(null);
    const [image, setImage] = useState<string | null>(null);
    console.log(camera.current);

    return (
    <>
    <div className="flash">
        <Image
            src="/image/flash.svg"
            alt="フラッシュ"
            width={24}
            height={24}
        />
    </div>
    <section>
        <div >
            <div className="Camera">
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
        </div>
    </section>
    <section className="footer">
        <div>
            <button
                className="CameraBtn"
                onClick={() => {
                if (camera.current) {
                    const photo = camera.current.takePhoto();
                    setImage(photo);
                }
                }}>
            </button>
            <Image
                src="/image/Replacement.svg"
                alt="前後入れ替え"
                width={24}
                height={24}
            />
        </div>
        <p>おすすめスポットを共有しましょう</p>
    </section>
    </>
);
}
