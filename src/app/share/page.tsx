"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import "@/app/share/styli.css"
import CategoryBtn from "@/feature/CategoryBtn"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db, storage } from "@/firebase/firebase"
import { getDownloadURL, ref } from "firebase/storage";


export default function share(){
    const [selectedCategory, setSelectedCategory] = useState("");
    const [emotion, setEmotion] = useState("");
    const[title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const categories = ['飲食店', '雑貨屋', '服屋', '街並み', '絶景', '有名な観光地', 'その他'];
    const emotions = ['面白い','可愛い','かっこいい','おしゃれ','落ち着く','レトロ','その他'];

    useEffect(() => {
        const fetchImage = async () => {
        const counterRef = doc(db, 'counters', 'shareCount');
        const counterSnap = await getDoc(counterRef);
        let shareCount = counterSnap.exists() ? counterSnap.data().count : 1;
        const storageRef = ref(storage, `shareImg${shareCount}`);
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
        };
    
        fetchImage();  // fetchImage関数を呼び出します
      }, []);  // 依存配列が空なので、このuseEffectフックはコンポーネントがマウントされたときに一度だけ実行されます
    
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        // FireStoreのデータベースからカウントの参照を取得します
        const counterRef = doc(db, 'counters', 'shareCount');
        // カウントのドキュメントを取得します
        const counterSnap = await getDoc(counterRef);
        // カウントのドキュメントが存在する場合はその値を取得し、存在しない場合は1を設定します
        let shareCount = counterSnap.exists() ? counterSnap.data().count : 1;
        // 'share'コレクション内に新しいドキュメントの参照を作成します
        const userDocumentRef = doc(db, 'share', `share${shareCount}`);
        // 新しいドキュメントを作成し、そのドキュメントにデータを保存します
        const documentRef = await setDoc(userDocumentRef, {
            title:title,
            selectedCategory:selectedCategory,
            emotion:emotion,
        });

        // カウントをインクリメントします    
        shareCount++;
        // カウントの新しい値をデータベースに保存します
        await setDoc(counterRef, { count: shareCount });

        window.location.href = "/share/PhotoConfirmation";
    };



    return(
        <div id="body">
            <section className="photoTaken">
                {imageUrl ? (
                    <Image src={imageUrl} alt="Uploaded"  width={386} height={300}/>
                ):(
                    <div style={{widows:'100%', height:'300px', backgroundColor:'#9A9792'}} ></div>
                )}
            </section>
            <section className="main">
                <div className="box">
                    <div className="title">
                        <p>この写真はどこの写真ですか？</p>
                        <input type="text" placeholder="写真のタイトルを入力してください" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="category">
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
                    </div>
                    <div className="confirmationBtn">
                        <button onClick={handleSubmit}>確認</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
