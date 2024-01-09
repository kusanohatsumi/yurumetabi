"use client"
import { collection, where, getDocs, query, doc } from "firebase/firestore"
import { db } from "@/firebase/firebase"
import { useEffect, } from "react";
import GetDoc from "@/feature/mypage/userItem";

import Image from "next/image";
import { Underdog } from "next/font/google";
import Link from "next/link";
import TitleStyle from "@/feature/mypage/titleStyle";
import ShareHistory from "@/feature/mypage/button/historyBtn";
import Setting from "@/feature/mypage/button/setting";
import PostDelete from "@/feature/mypage/button/postDelete";
import BackWard from "@/feature/mypage/button/backward";
import Back from "@/feature/mypage/button/back";
import ConfirmBtn from "@/feature/mypage/button/confirm";
import BackToMypage from "@/feature/mypage/button/backtomypage";

export default async function mypage() {
    //複数のデータを取得
    // const hoge = "hoge";
    // const [state, setState] = useState(undefined);
    // const item: any = [];
    // useEffect(() => {
    //     const q = query(collection(db, "user"));
    //     const querySnapshot = getDocs(q);
    //     querySnapshot.then((docs) => {
    //         docs.docs.map((doc) => {
    //             item.push(doc.data());
    //         });
    //         setState(item);
    //     }, [hoge]);
    // })

    // 元々のデータ
    // const docRef = doc(db, "user", "@user01");
    // const docSnap = await getDoc(docRef);
    // const userData = docSnap.data()
    // console.log(userData);
    // const q = query(collection(db, "item"));
    // const querySnapshot = await getDocs(q);

    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, doc.data());
    // })

    return (<>
        <div>
            <TitleStyle />
            <h1>アカウント名</h1>
            <h2>年齢　性別</h2>
        </div>
        <p>アカウント登録日</p>
        <Setting />
        <div>
            <ShareHistory />
            <p>タップすると画像全体をみることができます</p>
        </div>
        <div>
            <p>撮影写真</p>
            <p>写真タイトル</p>
            <p>カテゴリー</p>
        </div>

        {/* {userData === undefined ? (
            console.log("データがありません")
        ) : (
            <div>
                <p>画像：{userData.item01.img.alt}, {userData.item01.img.src}</p>
                <p>タイトル：{userData.item01.title}</p>
                <p>カテゴリー：{userData.item01.tag.place}</p>
            </div>
        )} */}
        {/* {querySnapshot.map((doc: any) => {
            <div>
                <p>画像：{userData..img.alt}, {userData.item01.img.src}</p>
                <p>タイトル：{userData.item01.title}</p>
                <p>カテゴリー：{userData.item01.tag.place}</p>
            </div>
        })}
        <GetDoc /> */}

        <div className="list">
            <Link href="/mypage/item01">01</Link>
            <Link href="/mypage/item02">02</Link>
            <Link href="/mypage/item03">03</Link>
        </div>
    </>)
}

