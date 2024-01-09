import { mypage_text } from "@/style/color";
import BackWard from "./backward";

export default function Back() {
    return (<>
        <button style={back}>
            <BackWard />戻る
        </button>
    </>)
}

const back = {
    color: mypage_text,
    textAlign: "center",
    // fontFamily: Kosugi Maru,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "-0.5px",
}