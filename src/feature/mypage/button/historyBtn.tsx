import { sub, share_btn } from "@/style/color"

export default function ShareHistory() {
    return (<>
        <button style={shareHistoryBtn}>
            <a href="#" style={shareHistoryBtnA}>シェア履歴</a>
        </button>
    </>)
}

const shareHistoryBtn = {
    border: "1px solid #F3F3F3",
    borderRadius: "8px",
    backgroundColor: sub,
    padding: "0 12px",
}

const shareHistoryBtnA = {
    disPlay: "block",
    fontSize: "14px",
    color: share_btn,
    textAlign: "center",
    // fontFamily: ""Kosugi Maru",sans-serif",
    lineHeight: "20px",
    letterSpacing: "-0.5px",
}