

import CameraScreen from "@/feature/CameraScreen";
import CategoryBtn from "@/feature/CategoryBtn";
import Header_main from "@/feature/header";
import Menu from "@/feature/menu";
import PhotoConfirmation from "@/feature/PhotoConfirmation";
import PhotoTaken from "@/feature/PhotoTaken";

import PR from "@/feature/PR";

export default function Home() {
  return (
    <>
      <Header_main params="main" />
      <main>

        <PhotoTaken/>

        ここに地図を描画する
        {/* <TitleStyle></TitleStyle> */}
        {/* <CameraScreen /> */}
        <Menu />

      </main>
      <PR />
    </>
  );
}
