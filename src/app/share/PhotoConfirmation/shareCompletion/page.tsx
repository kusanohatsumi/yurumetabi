"use client"

import PR from "@/feature/PR";
import Header_main from "@/feature/header";
import  "@/app/share/PhotoConfirmation/shareCompletion/style.css"
import Image from "next/image"
import Album from "@/feature/album";



export default function shareCompletion() {
    return(
    <>
        <section className="main">
            <div className="back">
                <Image src="/image/arrow.svg" alt="矢印" width={20} height={20} />
                <p><a href="/">地図に戻る</a></p>
            </div>
                <Album/>
            <p>共有が完了しました。</p>
        </section>
    </>
    )
}