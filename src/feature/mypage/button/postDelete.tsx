import { delete_text } from "@/style/color";
import Image from "next/image";
import Link from "next/link";

export default function PostDelete(props: any) {
  return (
    <>
      <button style={postDelete} onClick={() => props.props(true)}>
        {/* <Link href="#" style={postDelete}> */}
        <Image
          src="/image/trush.svg"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={trash}
        />
        投稿を削除する
        {/* </Link> */}
      </button>
    </>
  );
}

const postDelete = {
  height: "32px",
  display: "flex",
  alignItems: "center",
  color: delete_text,
};

const trash = {
  width: "32px",
  height: "32px",
};
