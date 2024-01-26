import PR from "@/feature/PR";
import Header_main from "@/feature/header";
import ConfirmBtn from "@/feature/mypage/button/confirm";
import PostDelete from "@/feature/mypage/button/postDelete";
import WarningImage from "@/feature/mypage/button/warning";
import { background, confirm, delete_wrap, warning_text } from "@/style/color";
import { DocumentData } from "firebase/firestore";
import { Warning } from "postcss";
import { useState } from "react";

export default function ConfirmBtnWrap(props: any) {
  console.log(props.fn);
  // const [isVisible, setIsVisible] = useState(true);

  // if (!isVisible) {
  //   return null;
  // }

  return (
    <>
      <main style={mainWrap}>
        {/* <Header_main params="main" /> */}
        {/* 中崎町の町並み */}
        <section style={deleteWrap}>
          <div style={deleteTitle}>
            <WarningImage />
            注意
            <WarningImage />
          </div>
          <p style={subText}>１度削除したデータは復元できません。</p>
          <p style={mainText}>本当に削除しますか?</p>
          <div style={conBtn}>
            <ConfirmBtn no={props.fn} paramItem={props.param} />
          </div>
        </section>
        {/* <PR /> */}
      </main>
    </>
  );
}

const mainWrap = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: " translate(-50%,-50%)",
};

const deleteWrap = {
  width: "320px",
  height: "192px",
  backgroundColor: delete_wrap,
  borderRadius: "10px",
  border: "5px solid #E5B65A",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  margin: "0 auto",
  padding: "14px 0",
};

const deleteTitle = {
  height: "38px",
  display: "flex",
  justifyContent: "center",
  fontSize: "24px",
  color: warning_text,
};

const subText = {
  fontSize: "10px",
  textAlign: "center",
  color: warning_text,
};

const mainText = {
  fontSize: "24px",
  color: confirm,
  padding: "10px 0 14px",
  textAlign: "center",
};

const conBtn = {
  display: "flex",
  justifyContent: "center",
};
