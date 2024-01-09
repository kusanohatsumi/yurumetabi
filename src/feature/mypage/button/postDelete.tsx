import { delete_text } from "@/style/color";
import Image from "next/image";

export default function PostDelete() {
    return (<>
        <button>
            <a href="#" style={postDelete}>
                <Image src="/image/trush.svg" alt="" width={32} height={32} style={trush} />投稿を削除する
            </a>
        </button>
    </>)
}

const postDelete = {
    display: "flex",
    color: delete_text,
    verticalAlign: "middle",
}

const trush = {
    verticalAlign: "middle",
}