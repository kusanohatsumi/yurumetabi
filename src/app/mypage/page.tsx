"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";
// import GetDoc from "@/feature/mypage/userItem";

import Image from "next/image";
import { Underdog } from "next/font/google";
import TitleStyle from "@/feature/mypage/titleStyle";
import ShareHistory from "@/feature/mypage/button/historyBtn";
import Setting from "@/feature/mypage/button/setting";
import PostDelete from "@/feature/mypage/button/postDelete";
import Back from "@/feature/mypage/button/back";
import ConfirmBtn from "@/feature/mypage/button/confirm";
import BackToMypage from "@/feature/mypage/button/backtomypage";
import { background, categoryTitle, category_co, history_wrap, mypage_text } from "@/style/color";
import Header from "@/feature/header/header";
import MarketingLayout from "../(header)/layout";
import Header_main from "@/feature/header";
import PR from "@/feature/PR";
// import "@/app/mypage/"


export default function mypage() {

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

    const hoge = "hoge";
    const [state, setState] = useState(undefined);
    const item: any = [];
    useEffect(() => {
        const q = query(collection(db, "share"));
        const querySnapshot = getDocs(q);
        querySnapshot.then((docs) => {
            docs.docs.map((doc) => {
                item.push(doc.data());
            });
            setState(item);
        });
    }, [hoge]);

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

            {/* データを複数取得 */}
            <div className="list">
                <Link href="/mypage/item01" className="list-item">01</Link>
                <Link href="/mypage/item02" className="list-item">02</Link>
                <Link href="/mypage/item03" className="list-item">03</Link>
            </div>

            <section style={historyWrap}>
                {/* タイトル*/}
                <div style={titleWrap}>
                    <p style={imgText}>撮影写真</p>
                    <p style={imgTitleText}>写真タイトル</p>
                    <p style={categoryText}>カテゴリー</p>
                </div>
                {/* データ */}
                <div style={childWrap}>
                    <div style={historyChild}>
                        <div style={imgWrap}>
                            <Image src="/image/city.svg" alt="" style={img} width={76} height={50} />
                        </div>
                        <p style={imgTitle}>中崎町の町並み</p>
                        <div style={category}>
                            <p>街並み</p>
                            <p>レトロ</p>
                        </div>
                    </div>
                    <div style={historyChild}>
                        <div style={imgWrap}>
                            <Image src="/image/city.svg" alt="" style={img} width={76} height={50} />
                        </div>
                        <p style={imgTitle}>中崎町の町並み</p>
                        <div style={category}>
                            <p>街並み</p>
                            <p>レトロ</p>
                        </div>
                    </div>
                    <div style={historyChild}>
                        <div style={imgWrap}>
                            <Image src="/image/city.svg" alt="" style={img} width={76} height={50} />
                        </div>
                        <p style={imgTitle}>中崎町の町並み</p>
                        <div style={category}>
                            <p>街並み</p>
                            <p>レトロ</p>
                        </div>
                    </div>
                    <div style={historyChild}>
                        <div style={imgWrap}>
                            <Image src="/image/city.svg" alt="" style={img} width={76} height={50} />
                        </div>
                        <p style={imgTitle}>中崎町の町並み</p>
                        <div style={category}>
                            <p>街並み</p>
                            <p>レトロ</p>
                        </div>
                    </div>
                </div>
            </section>
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


            <PR />
        </main >
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


const historyWrap = {
    width: "100%",
    height: "320px",
    backgroundColor: history_wrap,
    border: "1px solid #F3F3F3",
    // display: "grid",
    // gridTemplateColumns: "8% 28% 28% 28% 8%",
    // gridTemplateRows: "30px repeat(3,76px)",
}

const titleWrap = {
    width: "100%",
    height: "30px",
    // border: "1px solid #F3F3F3",
    backgroundColor: categoryTitle,
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    display: "grid",
    gridTemplateColumns: "8% 28% 28% 28% 8%",
    gridTemplateRows: "30px",
    fontSize: "12px",
    color: mypage_text,
}

const imgText = {
    gridColumn: "2/3",
    gridRow: "1/2",
    fontSize: "12px",
    color: mypage_text,
    backgroundColor: categoryTitle,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const imgTitleText = {
    gridColumn: "3/4",
    gridRow: "1/2",
    backgroundColor: categoryTitle,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const categoryText = {
    gridColumn: "4/5",
    gridRow: "1/2",
    backgroundColor: categoryTitle,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}


const childWrap = {
    width: "100%",
    height: "300px",
    overflow: "scroll",
    // border: "1px solid tomato",
}

const historyChild = {
    width: "100%",
    height: "76px",
    display: "grid",
    gridTemplateColumns: "8% 28% 28% 28% 8%",
    gridTemplateRows: "76px",
}

const imgWrap = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "2/3",
    gridRow: "1/2",
    borderBottom: "0.5px solid #F3F3F3",
    // border: "1px solid tomato",
}

const img = {
    border: "1px solid #F3F3F3",
}

const imgTitle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    color: category_co,
    gridColumn: "3/4",
    gridRow: "1/2",
    borderBottom: "0.5px solid #F3F3F3",
    // border: "1px solid tomato",
}

const category = {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    color: category_co,
    gridColumn: "4/5",
    gridRow: "1/2",
    borderBottom: "0.5px solid #F3F3F3",
    // border: "1px solid tomato",
}