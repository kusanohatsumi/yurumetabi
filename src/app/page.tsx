import PR from "@/feature/PR";
import Header_main from "@/feature/header/header-main";
import Menu from "@/feature/menu";

export default function Home() {
  return (
    <>
      <Header_main />
      <main>
        ここに地図を描画する
        <Menu />
      </main>
      <PR />
    </>
  );
}
