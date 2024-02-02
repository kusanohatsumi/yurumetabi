import PR from "@/feature/PR";
import Header_main from "@/feature/header";
import Back from "@/feature/mypage/button/back";
import PostDelete from "@/feature/mypage/button/postDelete";
import { background } from "@/style/color";
import { main } from "@/style/color 2";
import Link from "next/link";
import { Router } from "next/router";

export default async function MyPageZoom() {
  return (
    <>
      <main style={mainWrap}>
        {/* <Header_main params="main" /> */}
        {/*中崎町の町並み*/}
        <div style={btnWrap}>
          <Link href="/mypage">
            <Back />
          </Link>
          <Link href="/mypage/postDelete">
            <PostDelete />
          </Link>
        </div>
        {/* <PR /> */}
      </main>
    </>
  );
}

const mainWrap = {
  width: "100%",
  height: "100%",
  backgroundColor: background,
};

const btnWrap = {
  padding: "0 20px",
  marginTop: "44px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
