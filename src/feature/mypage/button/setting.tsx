import Image from "next/image";

export default function Setting() {
    return (<>
        <button>
            <a href="">
                <Image src="/image/setting.svg" alt="" width={52} height={48} />
            </a>
        </button>
    </>)
}