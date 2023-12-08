"use client"
import { db } from "@/firebase/firebase"
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore"

import GetDoc from "@/feature/mypage/userItem";
import Image from "next/image";
import { Underdog } from "next/font/google";
import Link from "next/link";

export default async function myPage() {
    const docRef = doc(db, "user", "@user01");
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()
    // console.log(userData);
    const q = query(collection(db, "item"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
    })

    return (<>
        <Image alt="aaa" src="/image/" width={64} height={64} />
        <h1>アカウント名</h1>
        <h2>年齢　性別</h2>
        <p>アカウント登録日</p>
        {/* setting */}
        {/* シェア機能 */}
        <p>タップすると画像全体をみることができます</p>
        <div>
            <p>撮影写真</p>
            <p>写真タイトル</p>
            <p>カテゴリー</p>
        </div>

        {userData === undefined ? (
            console.log("データがありません")
        ) : (
            <div>
                <p>画像：{userData.item01.img.alt}, {userData.item01.img.src}</p>
                <p>タイトル：{userData.item01.title}</p>
                <p>カテゴリー：{userData.item01.tag.place}</p>
            </div>
        )}
        {/* {querySnapshot.map((doc: any) => {
            <div>
                <p>画像：{userData..img.alt}, {userData.item01.img.src}</p>
                <p>タイトル：{userData.item01.title}</p>
                <p>カテゴリー：{userData.item01.tag.place}</p>
            </div>
        })} */}
        {/* <GetDoc /> */}
        <Link href="/mypage/item01">01</Link>
        <Link href="/mypage/item02">02</Link>
        <Link href="/mypage/item03">03</Link>
    </>)
}

