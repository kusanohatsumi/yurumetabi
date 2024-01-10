
import "@/feature/album/style.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { DocumentData, collection, doc, getDocs } from "firebase/firestore"
import { db } from "@/firebase/firebase"



export default function Album() {
    // 'shares'という名前のstateを作成し、初期値を空の配列に設定します
    const [ shares, setShares ] = useState<DocumentData[]>([]);
    // useEffectフックを使用して、コンポーネントがマウントされた後に実行される処理を定義します
    useEffect(() => {
        // FireStoreのデータベースから'share'コレクションの参照を取得します
        const shareRef = collection(db, 'share');
        // 'share'コレクションのすべてのドキュメントを取得し、それぞれのドキュメントのデータをコンソールに出力します
        getDocs(shareRef).then((QuerySnapshot) => {
            QuerySnapshot.docs.forEach((doc) => console.log(doc.data()));
        });
        // 'share'コレクションのすべてのドキュメントを再度取得し、それぞれのドキュメントのデータとIDを含む新しいオブジェクトを作成します
        // これらの新しいオブジェクトを含む配列を作成し、それを'shares' stateに設定します
        getDocs(shareRef).then((querySnapshot) => {
            const date = querySnapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id}));

            setShares(date);
        });
    // useEffectフックの第二引数に空の配列を渡すことで、このフック内の処理はコンポーネントがマウントされた時に一度だけ実行されます
    },[]);


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