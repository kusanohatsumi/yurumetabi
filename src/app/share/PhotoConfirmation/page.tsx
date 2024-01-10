"use client"

import PR from "@/feature/PR"
import Header_main from "@/feature/header"
import "@/app/share/PhotoConfirmation/style.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { DocumentData, collection,setDoc, doc, getDocs, getDoc, deleteDoc } from "firebase/firestore"
import { db } from "@/firebase/firebase"




export default function PhotoConfirmation() {
    // 'shares'という名前のstateを作成し、初期値を空の配列に設定します
    const [ shares, setShares ] = useState<DocumentData[]>([]);
    // useEffectフックを使用して、コンポーネントがマウントされた後に実行される処理を定義します
    useEffect(() => {
        // FireStoreのデータベースから'share'コレクションの参照を取得します
        const shareRef = collection(db, 'share');
        // 'share'コレクションのすべてのドキュメントを再度取得し、それぞれのドキュメントのデータとIDを含む新しいオブジェクトを作成します
        // これらの新しいオブジェクトを含む配列を作成し、それを'shares' stateに設定します
        getDocs(shareRef).then((querySnapshot) => {
            const date = querySnapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id}));

            setShares(date);
        });
        // useEffectフックの第二引数に空の配列を渡すことで、このフック内の処理はコンポーネントがマウントされた時に一度だけ実行されます
    },[]);


    async function bakBoth(e:any) {
        e.preventDefault();
        // FireStoreのデータベースからカウントの参照を取得します
        const counterRef = doc(db, 'counters', 'shareCount');
        // カウントのドキュメントを取得します
        let counterSnap = await getDoc(counterRef);
        // カウントのドキュメントが存在する場合はその値を取得し、存在しない場合は1を設定します
        let shareCount = counterSnap.exists() ? counterSnap.data().count : 1;
        // カウントの値が1の場合、カウントのドキュメントを削除します
        if (shareCount === 1) {
            await deleteDoc(counterRef);
            console.log("'shareCount' document has been deleted.");
        } else if (shareCount > 1) {
            // カウントの値が1より大きい場合、カウントをデクリメントします
            shareCount--;
            await setDoc(counterRef, { count: shareCount });
            // 対応するドキュメントを削除します
            const userDocumentRef = doc(db, 'share', `share${shareCount}`);
            await deleteDoc(userDocumentRef);
        }               
        window.location.href = "/share";
    }

    async function handleBoth(e:any) {
        e.preventDefault();

        window.location.href = "/share/PhotoConfirmation/shareCompletion";
    }

    
    return(
        <>
            <Header_main params="main"/>
            <div className="back">
                <Image src="/image/arrow.svg" alt="矢印" width={20} height={20} />
                <button onClick={bakBoth}>入力画面へ戻る</button>
            </div>
            <section className="photoTaken">
            </section>
            <main>
                <section>
                    <div className="box">
                        <div className="title">
                            <p>この写真はどこの写真ですか</p>
                            {shares.map((share) => (
                                <p className="value" key={share.id}>{share.title}</p>
                            ))}
                        </div>
                        <div className="category">
                            <p>この場所のカテゴリーを選択してください</p>
                            <div>
                            {shares.map((share) => (
                                <button className="value" key={share.id}>{share.selectedCategory}</button>
                            ))}
                            {shares.map((share) => (
                                <button className="value" key={share.id}>{share.emotion}</button>
                            ))}
                            </div>
                        </div>
                        <div className="shareBtn">
                            <button onClick={handleBoth}>共有</button>
                        </div>
                    </div>
                </section>
            </main>
            <PR/>
        </>
    )
}
