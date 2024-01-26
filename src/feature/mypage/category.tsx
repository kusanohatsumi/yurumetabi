import { category_bg } from "@/style/color"
import { category_co } from "@/style/color";

export default function Category() {
    return (<>
        <p style={category}>町並み</p>
        <p style={category}>レトロ</p>
        {/* <p style={category}>有名な観光地</p> */}
    </>)
}

const category = {
    display: "inline-block",
    padding: "0 8px",
    border: "0.5px solid #FEFEFE",
    borderRadius: "16px",
    boxShadow: "0px 2px 4px 0px #3F3F3F",
    backgroundColor: category_bg,
    color: category_co,
    fontSize: "12px",
}