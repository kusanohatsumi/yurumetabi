import { mypage_text } from "@/style/color";
import Image from "next/image";

export default function Back() {
  return (
    <>
      <button style={back}>
        <Image src="/image/back.svg" alt="" width={21} height={21} />
        戻る
      </button>
    </>
  );
}

const back = {
  width: "64px",
  height: "20px",
  display: "flex",
  justifyContent: "space-between",
  color: mypage_text,
  fontSize: "16px",
};
