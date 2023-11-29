
import CameraScreen from "@/feature/CameraScreen";
import Header_main from "@/feature/header";
import Menu from "@/feature/menu";
import PhotoTaken from "@/feature/PhotoTaken";
import PR from "@/feature/PR";

export default function Home() {
  return (
    <>
      <Header_main params="main" />
      <main>
        <PhotoTaken />
      </main>
      <PR />
    </>
  );
}
