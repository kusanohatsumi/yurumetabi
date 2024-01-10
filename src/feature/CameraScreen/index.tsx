"use client";

import { CameraType } from "@/components/Camera/types";
import React, { useState, useRef } from "react";
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

import "@/feature/CameraScreen/style.css"

export default function CameraScreen() {

    return (
    <>
        <section className="Camera">
            <div>
                <input type="file" capture="user" onChange={() => {window.location.href='/share';}} accept=".jpg, .png, .gif"/>
            </div>
        </section>
        <section className="footer">
            <p>おすすめスポットを共有しましょう</p>
        </section>
    </>
);

}
