import { main, searchBtn } from "@/style/color";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="w-full h-24 flex justify-between  items-cente"
      style={{ backgroundColor: main }}
    >
      <a
        style={{ borderRight: "1px solid #333" }}
        className="border-r text-center flex justify-around box-border p-3 items-center flex-1 "
        href="/"
      >
        <Image
          alt="シェア"
          src="/image/camera.svg"
          width={35}
          height={35}
          className="m-2"
        />
        <p>share</p>
      </a>
      <a
        style={{ borderRight: "1px solid #333" }}
        className="border-r text-center flex justify-around box-border p-3 items-center flex-1"
        href="/about"
      >
        <Image
          alt="遠回り"
          src="/image/root.svg"
          width={35}
          height={35}
          className="m-2"
        />
        <p>detour</p>
      </a>
      <a
        className=" text-center flex justify-around box-border p-3 items-center flex-1"
        href="/about"
      >
        <Image
          alt="方向"
          src="/image/direction.svg"
          width={35}
          height={35}
          className="m-2"
        />
      </a>
    </header>
  );
}
