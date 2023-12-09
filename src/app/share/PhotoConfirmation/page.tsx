"use client"

import PR from "@/feature/PR"
import Header_main from "@/feature/header"
import { useRouter,  usePathname, useSearchParams } from "next/navigation"
import "@/app/share/PhotoConfirmation/style.css"
export default function PhotoConfirmation() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const emotion = searchParams.get('emotion');
    const title = searchParams.get('title');





    return(
        <>
            <Header_main params="main"/>
            <section className="photoTaken">

            </section>

            <main>
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
                        <p><a href="#">共有</a></p>
                    </div>
                </div>
            </main>
            <PR/>
        </>
    )
}
