import { category_co, confirm } from "@/style/color";
import Link from "next/link";

export default function ConfirmBtn() {
  return (
    <>
      <Link href="/mypage/confirm">
        <button style={confirmBtn}>YES</button>
      </Link>
      <Link href="/mypage/zoom">
        <button style={confirmBtn}>NO</button>
      </Link>
    </>
  );
}

const confirmBtn = {
  display: "inline-block",
  width: "104px",
  height: "40px",
  margin: "0 16px",
  borderRadius: "20px",
  backgroundColor: confirm,
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  color: category_co,
  fontSize: "24px",
  fontFamily: "Inter",
};
