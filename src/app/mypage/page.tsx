"use client";
// import GetDoc from "@/feature/mypage/userItem";
import { useEffect, useState } from "react";
import {
  collection,
  DocumentData,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db, storage } from "@/firebase/firebase";
import { getStorage, ref } from "firebase/storage";

import Image from "next/image";
import { Share, Underdog } from "next/font/google";
import TitleStyle from "@/feature/mypage/titleStyle";
import ShareHistory from "@/feature/mypage/button/shareHistoryTitle";
import Setting from "@/feature/mypage/button/setting";
import PostDelete from "@/feature/mypage/button/postDelete";
import Back from "@/feature/mypage/button/back";
import ConfirmBtn from "@/feature/mypage/button/confirm";
import BackToMypage from "@/feature/mypage/button/backtomypage";
import {
  background,
  categoryTitle,
  category_co,
  history_wrap,
  mypage_text,
} from "@/style/color";
import Header from "@/feature/header/header";
// import MarketingLayout from "../(header)/layout";
import Header_main from "@/feature/header";
import PR from "@/feature/PR";
import { getDownloadURL } from "firebase/storage";
import Link from "next/link";
// import "@/app/mypage/"

export default function mypage() {
  const [shares, setShares] = useState<DocumentData[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchShares = async () => {
      const shareRef = collection(db, `share`);
      const snapshot = await getDocs(shareRef);
      const sharesData = snapshot.docs.map((doc) => doc.data());
      console.log(sharesData);
      setShares(sharesData);

      const urls = await Promise.all(
        sharesData.map(async (_, index) => {
          const storage = getStorage();
          const storageRef = ref(storage, `shareImg${index + 1}`);
          const url = await getDownloadURL(storageRef);
          return url;
        })
      );
      setImageUrls(urls);
    };
    fetchShares();
  }, []);

  return (
    <>
      <main style={mainWrap}>
        {/* <Header_main params="main" /> */}
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

        <section style={historyWrap}>
          {/* タイトル*/}
          <div style={titleWrap}>
            <p style={imgText}>撮影写真</p>
            <p style={imgTitleText}>写真タイトル</p>
            <p style={categoryText}>カテゴリー</p>
          </div>
          {/* データ */}
          <div style={childWrap}>
            {shares.map((share, index) => {
              return (
                <Link href={`/mypage/share${index + 1}`}>
                  <div key={index} style={historyChild}>
                    <div style={imgWrap}>
                      {imageUrls[index] ? (
                        <Image
                          src={imageUrls[index]}
                          alt="Uploaded"
                          width={76}
                          height={50}
                          style={img}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    <p style={imgTitle}>{share.title}</p>
                    <div style={category}>
                      <p>{share.selectedCategory}</p>
                      <p>{share.emotion}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
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

        {/* <PR /> */}
      </main>
    </>
  );
}

const mainWrap = {
  width: "100%",
  height: "100%",
  backgroundColor: background,
};

const mypageTitle = {
  width: "320px",
  margin: "0 auto",
  padding: "8% 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const accountName = {
  fontFamily: "Kosugi Maru",
  fontSize: "24px",
};

const accountDate = {
  color: mypage_text,
};

const signDate = {
  width: "320px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
};

const shareWrap = {
  width: "320px",
  margin: "44px auto 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const shareText = {
  fontSize: "10px",
  color: mypage_text,
};

const historyWrap = {
  width: "100%",
  height: "320px",
  backgroundColor: history_wrap,
  border: "1px solid #F3F3F3",
  // display: "grid",
  // gridTemplateColumns: "8% 28% 28% 28% 8%",
  // gridTemplateRows: "30px repeat(3,76px)",
};

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
};

const imgText = {
  gridColumn: "2/3",
  gridRow: "1/2",
  fontSize: "12px",
  color: mypage_text,
  backgroundColor: categoryTitle,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imgTitleText = {
  gridColumn: "3/4",
  gridRow: "1/2",
  backgroundColor: categoryTitle,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const categoryText = {
  gridColumn: "4/5",
  gridRow: "1/2",
  backgroundColor: categoryTitle,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const childWrap = {
  width: "100%",
  height: "300px",
  paddingBottom: "50px",
  overflow: "scroll",
  // border: "1px solid tomato",
};

const historyChild = {
  width: "100%",
  height: "76px",
  display: "grid",
  gridTemplateColumns: "8% 28% 28% 28% 8%",
  gridTemplateRows: "76px",
};

const imgWrap = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gridColumn: "2/3",
  gridRow: "1/2",
  borderBottom: "0.5px solid #F3F3F3",
};

const img = {
  border: "1px solid #F3F3F3",
  width: "76px",
  height: "50px",
  objectFit: "cover",
};

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
};

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
};
