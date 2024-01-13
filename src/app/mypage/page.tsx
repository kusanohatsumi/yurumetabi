"use client";
import { collection, where, getDocs, query, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useEffect } from "react";
import GetDoc from "@/feature/mypage/userItem";

import Image from "next/image";
import { Underdog } from "next/font/google";
import Link from "next/link";
import TitleStyle from "@/feature/mypage/titleStyle";
import ShareHistory from "@/feature/mypage/button/historyBtn";
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
import MarketingLayout from "../(header)/layout";
import Header_main from "@/feature/header";
import PR from "@/feature/PR";

export default async function mypage() {
  return (
    <>
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
        <div style={historyTitle}>
          <p style={titleText}>撮影写真</p>
          <p style={titleText}>写真タイトル</p>
          <p style={titleText}>カテゴリー</p>
        </div>

        <div style={childWrap}>
          <div style={historyChild}>
            <Image
              src="/image/city.svg"
              alt=""
              width={76}
              height={50}
              style={img}
            />
            <p style={imgTitle}>中崎町の町並み</p>
            <div style={category}>
              <p>街並み</p>
              <p>レトロ</p>
            </div>
          </div>
          <div style={historyChild}>
            <Image
              src="/image/city.svg"
              alt=""
              width={76}
              height={50}
              style={img}
            />
            <p style={imgTitle}>中崎町の町並み</p>
            <div style={category}>
              <p>街並み</p>
              <p>レトロ</p>
            </div>
          </div>
          <div style={historyChild}>
            <Image
              src="/image/city.svg"
              alt=""
              width={76}
              height={50}
              style={img}
            />
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

      {/* <div className="list">
                    <Link href="/mypage/item01">01</Link>
                    <Link href="/mypage/item02">02</Link>
                    <Link href="/mypage/item03">03</Link>
                </div> */}
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

const titleText = {
  color: mypage_text,
};

const historyWrap = {
  width: "100%",
  height: "320px",
  backgroundColor: history_wrap,
  border: "1px solid #F3F3F3",
};

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
};

const childWrap = {
  // display: "grid",
  // gridTemplateColumns: "110px 100px 110px",
  // gridTemplateRows: "76px 76px 76px",
  // justifyItems: "center",
  // gridTemplateAreas: "img imgTitle category",
  // gridTemplateAreas: '"img imgTitle category" "img imgTitle category" "img imgTitle category"',
  width: "320px",
  border: "1px solid tomato",
};

const historyChild = {
  width: "320px",
  height: "76px",
  margin: "0 auto",
  borderBottom: "0.5px solid #F3F3F3",
  color: category_co,
  display: "flex",
  justifyContent: "space-around",
};

const img = {
  // gridAreas: "img",
  // border: "1px solid tomato",
  // gridColumn: "1/2",
  // gridRow: "1/2",
};

const imgTitle = {
  // gridAreas: "imgTitle",
  fontSize: "12px",
  // border: "1px solid tomato",
  // gridColumn: "2/3",
  // gridRow: "1/2",
};

const category = {
  // gridAreas: "category",
  fontSize: "12px",
  // border: "1px solid tomato",
  // gridColumn: "3/4",
  // gridRow: "1/2",
};
