import { mypage_text } from "@/style/color";
import Image from "next/image";

export default function BackToMypage() {
    return (<>
        <button style={backMypage}>
            <Image src="/image/back.svg" alt="" width={21} height={21} />
            マイページへ
        </button>
    </>)
}

const backMypage = {
    width: "124px",
    height: "20px",
    display: "flex",
    justifyContent: "space-between",
    color: mypage_text,
    fontSize: "16px",
}