"use client";

import "@/app/share/PhotoConfirmation/style.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  setDoc,
  doc,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db, storage } from "@/firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";

import PR from "@/feature/PR";
import Header_main from "@/feature/header";
import "@/app/share/PhotoConfirmation/style.css";

export default function PhotoConfirmation() {
  // 'shares'という名前のstateを作成し、初期値を空の配列に設定します
  const [shares, setShares] = useState<DocumentData[]>([]);
  const [imageUrl, setImageUrl] = useState("");

  // useEffectフックを使用して、コンポーネントがマウントされた後に実行される処理を定義します
  useEffect(() => {
    // 'counters'コレクションの'shareCount'ドキュメントの参照を取得します
    const counterRef = doc(db, "counters", "shareCount");
    // 'shareCount'ドキュメントのデータを取得します
    getDoc(counterRef).then(async (docSnapshot) => {
      if (docSnapshot.exists()) {
        // 'shareCount'ドキュメントのデータを取得します
        const data = docSnapshot.data();
        console.log(data); // ドキュメントのデータをログに出力します
        const count = data.count;
        console.log(typeof count);
        // 'shareCount'が数値であることを確認します
        if (typeof count === "number") {
          const decrementedShareCount = count - 1;
          // 'share'コレクションの参照を取得します
          const shareRef = collection(db, "share");
          // 'share'コレクションから特定のドキュメントを取得します
          const specificShareRef = doc(
            shareRef,
            `share${decrementedShareCount}`
          );
          // 特定のドキュメントのデータを取得します
          const docSnapshot = await getDoc(specificShareRef);
          if (docSnapshot.exists()) {
            // ドキュメントのデータを取得し、それを'shares' stateに設定します
            const data = docSnapshot.data();
            setShares([data]);
          } else {
            // ドキュメントが存在しない場合、エラーメッセージをログに出力します
            console.log(
              `share${decrementedShareCount} ドキュメントは存在しません`
            );
          }
          // Firebase Storageから画像のURLを取得します
          const storageRef = ref(storage, `shareImg${decrementedShareCount}`);
          const url = await getDownloadURL(storageRef);
          // 取得したURLをステートに保存します
          setImageUrl(url);
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
  }, []); // 依存配列が空なので、このuseEffectフックはコンポーネントがマウントされたときに一度だけ実行されます

  async function bakBoth(e: any) {
    e.preventDefault();
    // FireStoreのデータベースからカウントの参照を取得します
    const counterRef = doc(db, "counters", "shareCount");
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
      const userDocumentRef = doc(db, "share", `share${shareCount}`);
      await deleteDoc(userDocumentRef);
    }
    window.location.href = "/share";
  }

  async function handleBoth(e: any) {
    e.preventDefault();

    window.location.href = "/share/PhotoConfirmation/shareCompletion";
  }

  return (
    <>
      <div className="back">
        <Image src="/image/arrow.svg" alt="矢印" width={20} height={20} />
        <button onClick={bakBoth}>入力画面へ戻る</button>
      </div>
      <section className="photoTaken">
        {imageUrl ? (
          <Image src={imageUrl} alt="Uploaded" width={386} height={300} />
        ) : (
          <></>
        )}
      </section>
      <section>
        <section className="main">
          <div className="box">
            <div className="title">
              <p>この写真はどこの写真ですか</p>
              {shares.map((share) => (
                <p className="value" key={share.id}>
                  {share.title}
                </p>
              ))}
            </div>
            <div className="category">
              <p>この場所のカテゴリーを選択してください</p>
              <div>
                {shares.map((share) => (
                  <button className="value" key={share.id}>
                    {share.selectedCategory}
                  </button>
                ))}
                {shares.map((share) => (
                  <button className="value" key={share.id}>
                    {share.emotion}
                  </button>
                ))}
              </div>
            </div>
            <section className="shareButton">
              <button onClick={handleBoth}>共有</button>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}
