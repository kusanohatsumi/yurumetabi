import PR from "@/feature/PR";
import Header_main from "@/feature/header";
import BackToMypage from "@/feature/mypage/button/backtomypage";
import { background } from "@/style/color";
import Link from "next/link";

export default function confirmPage() {
  return (
    <>
      <main style={mainWrap}>
        {/* <Header_main params="main" /> */}
        <p style={confirmText}>削除が完了しました。</p>
        <div style={toMypage}>
          <Link href="/mypage">
            <BackToMypage />
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

const confirmText = {
  height: "40%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  fontSize: "24px",
  marginBottom: "60px",
};

const toMypage = {
  paddingLeft: "26px",
};
