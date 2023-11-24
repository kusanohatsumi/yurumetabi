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
    <section className="Camera">
        <div>
            <input type="file" capture="environment" />
        </div>
    </section>
    <section className="footer">
        <p>おすすめスポットを共有しましょう</p>
    </section>
    </>
);
}
