import { main, sub } from "@/style/color";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div
      className="w-full flex gap-14 justify-center items-end text-xs h-16 rounded-t-lg absolute bottom-0"
      style={{ backgroundColor: sub }}
    >
      <Link
        className="h-full flex flex-col justify-center items-center relative after:content-['share'] after:absolute after:bottom-1 after:text-2xl after:text-white"
        href="/#"
      >
        <Image
          alt="カメラアイコン"
          src="/image/camera.svg"
          width={34}
          height={34}
          className="m-1"
        />
      </Link>
      <Link
        className="w-24 h-24 rounded-full relative flex  items-center flex-col justify-center text-center shadow-sm  shadow-slate-700  before:content-[''] after:content-['seach'] after:absolute after:bottom-1 after:text-2xl after:text-white"
        style={{ backgroundColor: sub }}
        href="/#"
      >
        <Image
          alt="検索"
          src="/image/search.svg"
          width={42}
          height={42}
          className="m-1"
        />
      </Link>
      <Link
        className="h-full flex flex-col justify-center items-center relative after:content-['account'] after:absolute after:bottom-1 after:text-2xl after:text-white"
        href="/#"
      >
        <Image
          alt="人のシルエットアイコン"
          src="/image/account.svg"
          width={34}
          height={34}
          className="m-1"
        />
      </Link>
    </div>
  );
}
