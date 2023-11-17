import { main, searchBtn } from "@/style/color";
import Image from "next/image";

export default function Menu() {
  return (
    <div
      className="w-full flex justify-center items-end text-xs h-16 absolute bottom-16 "
      style={{ backgroundColor: main }}
    >
      <a
        className="flex  items-center flex-col justify-center text-center  flex-1 "
        href="/#"
      >
        <Image
          alt="現在地"
          src="/image/now.svg"
          width={30}
          height={30}
          className="m-1"
        />
        <p> 現在地</p>
      </a>
      <a
        className="w-24 h-24  rounded-full  flex  items-center flex-col justify-center text-center   before:content-[''] "
        style={{ backgroundColor: searchBtn }}
        href="/#"
      >
        <Image
          alt="検索"
          src="/image/search.svg"
          width={42}
          height={42}
          className="m-1"
        />
      </a>
      <a
        className="flex  items-center flex-col justify-center text-center  flex-1 "
        href="/#"
      >
        <Image
          alt="スケジュール"
          src="/image/schedule.svg"
          width={30}
          height={30}
          className="m-1"
        />
        <p> スケジュール</p>
      </a>
    </div>
  );
}
