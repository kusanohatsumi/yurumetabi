import CameraScreen from "@/feature/CameraScreen";
import CategoryBtn from "@/feature/CategoryBtn";
import Header_main from "@/feature/header";
import Menu from "@/feature/menu";
import TitleStyle from "@/feature/mypage/titleStyle";
import PhotoConfirmation from "@/feature/PhotoConfirmation";

import PR from "@/feature/PR";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <main>
        <p className="inline-block">aaaa111</p>
        <CategoryBtn />
        ここに地図を描画する
        <TitleStyle />
        {/* <CameraScreen /> */}
      </main>
    </>
  );
}

const main = {
  width: "inline-block",
};
