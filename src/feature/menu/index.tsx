import { main, sub } from "@/style/color";
import Image from "next/image";
import Link from "next/link";

export default function Menu(props: any) {
  const active = props.fn;
  const state = props.state;
  const Search = props.Search;

  return (
    <div
      className="w-full flex gap-14 justify-center items-end text-xs h-16 rounded-t-lg absolute bottom-0"
      style={{ backgroundColor: "#F4DCB3" }}
    >
      <Link
        className="h-full flex flex-col justify-center items-center relative after:content-['share'] after:absolute after:bottom-1 after:text-2xl after:text-white"
        href="/#"
      >
        <Image
          alt="カメラアイコン"
          src="/image/camera.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="m-1 w-8 h-auto"
        />
      </Link>

      <button
        className={`w-24 h-24 rounded-full m-2 relative flex  items-center flex-col justify-center text-center  shadow-sm  shadow-slate-700  before:content-[''] ${
          state
            ? "after:content-['ここをタップ'] after:text-sm "
            : "after:content-['seach']"
        }  after:absolute after:bottom-1 after:text-2xl after:text-white`}
        style={
          state ? { backgroundColor: "#B89A71" } : { backgroundColor: sub }
        }
        onClick={() => {
          active(true), Search(false);
        }}
      >
        <Image
          alt="検索"
          src="/image/search.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="m-1 w-10 h-auto"
        />
      </button>

      <Link
        className="h-full flex flex-col justify-center items-center relative after:content-['account'] after:absolute after:bottom-1 after:text-2xl after:text-white"
        href="/#"
      >
        <Image
          alt="人のシルエットアイコン"
          src="/image/account.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="m-1 w-8 h-auto"
        />
      </Link>
    </div>
  );
}
