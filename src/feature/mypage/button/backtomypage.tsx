import { mypage_text } from "@/style/color";
import BackWard from "./backward";

export default function BackToMypage() {
    return (<>
        <button style={backmypage}>
            <BackWard /> マイページへ
        </button>
    </>)
}

const backmypage = {
    color: mypage_text,
    // fontFamily: "Kosugi Maru",
    fontSize: "16px",
}