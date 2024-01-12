
import "@/feature/album/style.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { DocumentData, collection, setDoc, doc, getDocs, getDoc, deleteDoc } from "firebase/firestore"
import { db } from "@/firebase/firebase"



export default function Album() {
    // 'shares'という名前のstateを作成し、初期値を空の配列に設定します
    const [ shares, setShares ] = useState<DocumentData[]>([]);
    // useEffectフックを使用して、コンポーネントがマウントされた後に実行される処理を定義します
    useEffect(() => {
        // 'counters'コレクションの'shareCount'ドキュメントの参照を取得します
        const counterRef = doc(db, 'counters', 'shareCount');
    // 'shareCount'ドキュメントのデータを取得します
    getDoc(counterRef).then((docSnapshot) => {
        if (docSnapshot.exists()) {
            // 'shareCount'ドキュメントのデータを取得します
            const data = docSnapshot.data();
            console.log(data); // ドキュメントのデータをログに出力します
            const count = data.count;
            console.log(typeof count); 
            // 'shareCount'が数値であることを確認します
            if (typeof count === 'number') {
                const decrementedShareCount = count - 1;
                // 'share'コレクションの参照を取得します
                const shareRef = collection(db, 'share');
                // 'share'コレクションから特定のドキュメントを取得します
                const specificShareRef = doc(shareRef, `share${decrementedShareCount}`);
                // 特定のドキュメントのデータを取得します
                getDoc(specificShareRef).then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        // ドキュメントのデータを取得し、それを'shares' stateに設定します
                        const data = docSnapshot.data();
                        setShares([data]);
                    } else {
                        // ドキュメントが存在しない場合、エラーメッセージをログに出力します
                        console.log(`share${decrementedShareCount} ドキュメントは存在しません`);
                    }
                });
            } else {
                // 'shareCount'が数値でない場合、エラーメッセージをログに出力します
                console.log("'shareCount'は数値ではありません");
                console.log(typeof shares); // 'shares'の型をログに出力します
                console.log(typeof data.shareCount); // 'shareCount'プロパティの型をログに出力します                
            }
        } else {
            // 'shareCount'ドキュメントが存在しない場合、エラーメッセージをログに出力します
            console.log("'shareCount' ドキュメントは存在しません");
        }
    });
    }, []);


    return(
        <>
            <section className="album">
                <div className="albumMain">
                    <div className="photograph"></div>
                    {shares.map((share) => (
                        <h2 className="value" key={share.id}>{share.title}</h2>
                    ))}
                    <p>カテゴリー</p>
                    <div className="category">
                        {shares.map((share) => (
                            <p className="value" key={share.id}>{share.selectedCategory}</p>
                        ))}
                        {shares.map((share) => (
                            <p className="value" key={share.id}>{share.emotion}</p>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}