import Image from "next/image";

export default function BackWard() {
    return (<>
        <button>
            <a href="">
                <Image src="/image/back.svg" alt="" width={21} height={21} />
            </a>
        </button>
    </>)
}