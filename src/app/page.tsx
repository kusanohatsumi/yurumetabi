import CameraScreen from "@/feature/CameraScreen";
import CategoryBtn from "@/feature/CategoryBtn";
import Header_main from "@/feature/header";
import Menu from "@/feature/menu";
import Category from "@/feature/mypage/category";
import Mypage from "@/feature/mypage/category";
import TitleStyle from "@/feature/mypage/titleStyle";
import PhotoConfirmation from "@/feature/PhotoConfirmation";

import PR from "@/feature/PR";

export default function Home() {
  return (
    <>
      <Header_main params="main" />
      <main>
        <CategoryBtn />
        ここに地図を描画する
        {/* <Category /> */}
        <TitleStyle />
        {/* <CameraScreen /> */}
        <Menu />
      </main>
      <PR />
    </>
  );
}
