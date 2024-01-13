"use client";

import CameraScreen from "@/feature/CameraScreen";
import CategoryBtn from "@/feature/CategoryBtn";
import Map from "@/feature/googlemap";
import GoogleMap from "@/feature/googlemap";
import Header_main from "@/feature/header";
import Menu from "@/feature/menu";
import Category from "@/feature/mypage/category";
import Mypage from "@/feature/mypage/category";
import TitleStyle from "@/feature/mypage/titleStyle";
import PhotoConfirmation from "@/feature/PhotoConfirmation";
import PhotoTaken from "@/feature/PhotoTaken";

import PR from "@/feature/PR";

export default function Home() {
  return (
    <>
      <main>
        <Map />
      </main>
    </>
  );
}
