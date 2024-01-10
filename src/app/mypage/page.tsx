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
import { background, categoryTitle, history_wrap, mypage_text } from "@/style/color";
import Header from "@/feature/header/header";
import MarketingLayout from "../(header)/layout";
import Header_main from "@/feature/header";
import PR from "@/feature/PR";



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
        <main style={mainWrap}>
            <Header_main params="main" />
            <div style={mypageTitle}>
                <TitleStyle />
                <h1 style={accountName}>アカウント名</h1>
                <h2>年齢</h2>
                <h2>性別</h2>
            </div>

            <div style={signDate}>
                <p style={accountDate}>アカウント登録日</p>
                <Setting />
            </div>

            <div style={shareWrap}>
                <ShareHistory />
                <p style={shareText}>タップすると画像全体をみることができます</p>
            </div>

            <div>
                <div style={historyTitle}>
                    <p style={titleText}>撮影写真</p>
                    <p style={titleText}>写真タイトル</p>
                    <p style={titleText}>カテゴリー</p>
                </div>
                <div style={historyWrap}>
                </div>
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

            {/* <div className="list">
                    <Link href="/mypage/item01">01</Link>
                    <Link href="/mypage/item02">02</Link>
                    <Link href="/mypage/item03">03</Link>
                </div> */}

            <PR />
        </main>
    </>)
}

const mainWrap = {
    width: "100%",
    height: "100%",
    backgroundColor: background,
}

const mypageTitle = {
    width: "320px",
    margin: "0 auto",
    padding: "8% 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const accountName = {
    fontFamily: "Kosugi Maru",
    fontSize: "24px",
}

const accountDate = {
    color: mypage_text,
}

const signDate = {
    width: "320px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
}

const shareWrap = {
    width: "320px",
    margin: "44px auto 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const shareText = {
    fontSize: "10px",
    color: mypage_text,
}

const historyTitle = {
    width: "100%",
    height: "30px",
    padding: "0 60px",
    border: "1px solid #F3F3F3",
    backgroundColor: categoryTitle,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
}

const titleText = {
    color: mypage_text,
}

const historyWrap = {
    width: "100%",
    height: "320px",
    backgroundColor: history_wrap,
    border: "1px solid #F3F3F3",
}