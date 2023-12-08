"use client";

import { useState } from "react"
import "@/feature/PhotoTaken/styli.css"
import CategoryBtn from "../CategoryBtn"
import Link from "next/link"

export default function PhotoTaken() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [emotion, setEmotion] =useState("");

    const categories = ['飲食店', '雑貨屋', '服屋', '街並み', '絶景', '有名な観光地', 'その他'];
    const emotions = ['面白い','可愛い','かっこいい','おしゃれ','落ち着く','レトロ','その他']

    return(
        <>
            <div className="box">
                <section className="title">
                    <p>この写真はどこの写真ですか？</p>
                    <input type="text" placeholder="写真のタイトルを入力してください"/>
                </section>
                <section className="category">
                    <p>この場所のカテゴリーを選択してください</p>
                    <div className="place">
                        {categories.map((category, index) => (
                        <CategoryBtn
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        selected={selectedCategory === category} // selectedプロパティを追加します。
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
                    <p><Link href="#">確認</Link></p>
                </section>
            </div>
        </>
    )
};
