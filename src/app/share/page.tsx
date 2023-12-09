"use client"

import Header_main from "@/feature/header"
import { useState } from "react"
import "@/app/share/styli.css"
import CategoryBtn from "@/feature/CategoryBtn"
import Link from "next/link"
import PR from "@/feature/PR"

export default function share(){
    const [selectedCategory, setSelectedCategory] = useState("");
    const [emotion, setEmotion] = useState("");
    const[title, setTitle] = useState("");

    const categories = ['飲食店', '雑貨屋', '服屋', '街並み', '絶景', '有名な観光地', 'その他'];
    const emotions = ['面白い','可愛い','かっこいい','おしゃれ','落ち着く','レトロ','その他']

    return(
        <div id="body">
            <Header_main params="main"/>
            <section className="photoTaken">

            </section>

            <main>
                <div className="box">
                    <section className="title">
                        <p>この写真はどこの写真ですか？</p>
                        <input type="text" placeholder="写真のタイトルを入力してください" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </section>
                    <section className="category">
                        <p>この場所のカテゴリーを選択してください</p>
                        <div className="place">
                            {categories.map((category, index) => (
                            <CategoryBtn
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            selected={selectedCategory === category}
                            >
                            {category}
                            </CategoryBtn>
                            ))}                    
                        </div>
                        <div className="emotions">
                            {emotions.map((category, index) => (
                                <CategoryBtn
                                key={index} onClick={() => setEmotion(category)}
                                selected={emotion === category}
                            >
                                {category}
                            </CategoryBtn>
                            ))}
                        </div>
                    </section>
                    <section className="confirmationBtn">
                        <p><Link href={`/share/PhotoConfirmation?category=${selectedCategory}&emotion=${emotion}&title=${title}`}>確認</Link></p>
                    </section>
                </div>
            </main>
            <PR/>
        </div>
    )
}
