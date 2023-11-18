import { main } from "@/style/color";
import Image from "next/image";
import Link from "next/link";

export default function Header_main({ params }: { params: string }) {
  return (
    <header
      className="w-full h-24 flex justify-between  items-cente"
      style={{ backgroundColor: main }}
    >
      <h1 className="w-full flex items-center  text-center ">
        <Link href="/" className="  text-4xl m-auto ">
          Logo
        </Link>
      </h1>
    </header>
  );
}
