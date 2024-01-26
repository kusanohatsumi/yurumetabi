"use client";

import { main, sub } from "@/style/color";
import Image from "next/image";
import Link from "next/link";
import "@/feature/menu/style.css";
import { db, storage } from "@/firebase/firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { doc, getDoc,} from "firebase/firestore";
import { useState } from "react";



export default function Menu() {
// 以下の3つのステートを初期化します
const [loading, setLoading] = useState(false);  // ファイルのアップロードが進行中かどうかを示すステート
const [isUpLaded, setIsUpLaded] = useState(false);  // ファイルのアップロードが完了したかどうかを示すステート
const [progress, setProgress] = useState(0);  // アップロードの進行状況（パーセンテージ）を保持するステート

// handleSubmit関数は、ファイルのアップロードを処理します
const handleSubmit = async (e:any) => {
  // FireStoreのデータベースからカウントの参照を取得します
  const counterRef = doc(db, 'counters', 'shareCount');
  const counterSnap = await getDoc(counterRef);
  // カウントのドキュメントが存在する場合はその値を取得し、存在しない場合は1を設定します
  let shareCount = counterSnap.exists() ? counterSnap.data().count : 1;

  // 選択されたファイルを取得します
  const file = e.target.files[0];
  // Firebase Storageへの参照を作成します
  const storageRef = ref(storage, `shareImg${shareCount}`);
  // ファイルをFirebase Storageにアップロードします
  const uploadImage = uploadBytesResumable(storageRef, file);

  // アップロードの進行状況を監視します
  uploadImage.on(
    "state_changed",
    (snapshotEqual) => {
      // アップロードが開始されたら、loadingステートをtrueに設定します
      setLoading(true);
      // アップロードの進行状況（パーセンテージ）を計算します
      const progress = (snapshotEqual.bytesTransferred / snapshotEqual.totalBytes) * 100;
      // 進行状況をステートに保存します
      setProgress(progress);
    },
    (error) => {
      // エラーが発生した場合は、エラーメッセージをコンソールに出力します
      console.log(error);
    },
    () => {
      // アップロードが完了したら、loadingステートをfalseに、isUploadedステートをtrueに設定します
      setLoading(false);
      setIsUpLaded(true);
      // アップロードが完了したら、"/share"ページにリダイレクトします
      window.location.href = "/share";
    }
  )
}

  return (
    <>
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <p className="percent">{Math.round(progress)}%</p>  {/* 進行状況を数値で表示 */}
            <progress value={progress} max="100" />  {/* 進行状況を表示するためのゲージ */}
            <p className="upload">アップロード中・・・・</p>
          </div>
        </div>
      )}
      {isUpLaded && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <p className="percent">アップロード完了</p>
          </div>
        </div>
      )}
      {!loading && !isUpLaded && (
        <div
          className="w-full flex gap-14 justify-center items-end text-xs h-16 absolute bottom-16 rounded-t-lg"
          style={{ backgroundColor: sub }}
        >
          <section className="h-full flex flex-col justify-center items-center relative after:content-['share'] after:absolute after:bottom-1 after:text-2xl after:text-white">
            <div>
              <label htmlFor="s" className="shareBtn">
                <input id="s" type="file" capture="environment" accept=".jpeg, .jpg, .png, .gif" onChange={handleSubmit} />
              </label>
            </div>
          </section>
          <Link
            className="w-24 h-24 rounded-full relative flex  items-center flex-col justify-center text-center shadow-sm  shadow-slate-700  before:content-[''] after:content-['seach'] after:absolute after:bottom-1 after:text-2xl after:text-white"
            style={{ backgroundColor: sub }}
            href="/#"
          >
            <Image
              alt="検索"
              src="/image/search.svg"
              width={42}
              height={42}
              className="m-1"
            />
          </Link>
          <Link
            className="h-full flex flex-col justify-center items-center relative after:content-['mypage'] after:absolute after:bottom-1 after:text-2xl after:text-white"
            href="/#"
          >
              <Image
                alt="人のシルエットアイコン"
                src="/image/account.svg"
                width={34}
                height={34}
                className="m-1"
              />
          </Link>
        </div>
      )}
    </>
  );
}
