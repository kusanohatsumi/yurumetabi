import { category_co, confirm } from "@/style/color"

export default function ConfirmBtn() {
    return (<>
        <button style={confirmBtn}>YES</button>
        <button style={confirmBtn}>NO</button>
    </>)
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
}
