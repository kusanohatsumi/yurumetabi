"use client"

import PR from "@/feature/PR"
import Header_main from "@/feature/header"
import { useRouter,  usePathname, useSearchParams } from "next/navigation"
import "@/app/share/PhotoConfirmation/style.css"






export function Confirmation() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const emotion = searchParams.get('emotion');
    const title = searchParams.get('title');


    async function handleBoth(e:any) {
        e.preventDefault();
        window.location.href = "/share/PhotoConfirmation/shareCompletion";
    }

    return(
        <>
            <section className="photoTaken">

            </section>

            <section>
                <div className="box">
                    <div className="title">
                        <p>この写真はどこの写真ですか</p>
                        <p className="value">{title}</p>
                    </div>
                    <div className="category">
                        <p>この場所のカテゴリーを選択してください</p>
                        <div>
                            <button>{category}</button>
                            <button>{emotion}</button>
                        </div>
                    </div>
                    <div className="shareBtn">
                        <button onClick={handleBoth}>共有</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default function PhotoConfirmation() {
    return(
        <>
            <Header_main params="main"/>
            <main>
                <Confirmation/> 
            </main>
            <PR/>
        </>
    )
}
