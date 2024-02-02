import { main } from "@/style/color";
import Image from "next/image";
import Link from "next/link";

export default function Header_main({ params }: { params: string }) {
  return (
    <header
      className="w-full h-16 flex justify-between  items-cente relative"
      style={{ backgroundColor: main }}
    >
      <h1 className="w-full flex items-center  text-center ">
        <Link href="/" className="  text-4xl m-auto ">
          <Image
            src="/image/logo.svg"
            alt="LOGO"
            width={0}
            height={0}
            sizes="100vw"
            className="w-36 h-auto"
            priority={true}
          />
        </Link>
      </h1>
    </header>
  );
}
