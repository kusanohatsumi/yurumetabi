import { main } from "@/style/color";
import Image from "next/image";
import Link from "next/link";

export default function Header_main({ params }: { params: string }) {
  return (
    <header
      className="w-full h-24 flex justify-between  items-cente relative"
      style={{ backgroundColor: main }}
    >
      {/* <Image
        alt="方角"
        src="/image/compass.svg"
        width={30}
        height={30}
        className="absolute left-4 top-1/2 -translate-y-1/2"
      /> */}

      <h1 className="w-full flex items-center  text-center ">
        <Link href="/" className="  text-4xl m-auto ">
          Logo
        </Link>
      </h1>
    </header>
  );
}
