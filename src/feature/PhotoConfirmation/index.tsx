"use client"

import "@/feature/PhotoConfirmation/styli.css"
import CategoryBtn from "../CategoryBtn"
import { useRouter } from "next/router"


export default function PhotoConfirmation(){
    const router = useRouter()
    const {category, emotion, title} = router.query


    return(
        <>
            <div className="box">
                <div className="title">
                    <p>この写真はどこの写真ですか</p>
                    <p className="value">{title}</p>
                </div>
                <div className="category">
                    <p>この場所のカテゴリーを選択してください</p>
                    <div>{category}</div>
                    <div>{emotion}</div>
                </div>
                <div className="shareBtn">
                    <p><a href="#">共有</a></p>
                </div>
            </div>
        </>
    )
}