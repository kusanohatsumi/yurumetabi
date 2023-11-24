
 import CameraScreen from "@/feature/CameraScreen";
import Header_main from "@/feature/header";
import Menu from "@/feature/menu";
import PR from "@/feature/PR";

export default function Home() {
  return (
    <>
      <Header_main params="main" />
      <main>
        ここに地図を描画する
        <CameraScreen />
        <Menu />
      </main>
      <PR />
    </>
  );
}
