"use client";

import Back from "@/feature/mypage/button/back";
import PostDelete from "@/feature/mypage/button/postDelete";
import { db, storage } from "@/firebase/firebase";
import { background } from "@/style/color";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "@/feature/album/style.css";
import ConfirmBtn from "@/feature/mypage/button/confirm";
import ConfirmBtnWrap from "@/feature/mypage/button/cofirmBtn";

export type Item = {
  emotion: string;
  selectedCategory: string;
  title: string;
};

export default function shareZoom({ params }: { params: any }) {
  const id = params.id;
  const words = id.split("");

  const [shares, setShares] = useState<DocumentData[]>([]);
  const [imageUrls, setImageUrls] = useState<string>("");
  const [data, setData] = useState<DocumentData>();

  const [state, setState] = useState(false);
  console.log(state);
  const State = (value: any) => {
    setState(value);
  };
  useEffect(() => {
    const fetchShares = async () => {
      const shareRef = doc(db, "share", id);
      const snapshot = await getDoc(shareRef);
      if (snapshot.data() === undefined) {
        console.log("no");
      } else {
        setData(snapshot.data());
      }

      // Firebase Storageから画像のURLを取得します
      const storageRef = ref(storage, `shareImg${Number(id[5])}`);
      const url = await getDownloadURL(storageRef);
      //   // 取得したURLをステートに保存します
      setImageUrls(url);
    };
    fetchShares();
  }, []);

  return (
    <>
      <div
        style={
          state === true
            ? {
                ...mainWrap,
                position: "relative",
                top: "0",
                left: "0",
              }
            : mainWrap
        }
      >
        {imageUrls && <Album data={data} image={imageUrls} />}
        {/* {data === undefined ? <div>データなし</div> : <div>{data.title}</div>} */}
        {imageUrls === undefined ? (
          <div>データなし</div>
        ) : (
          <>
            {/* <div>
              <Image src={`${imageUrls}`} alt="写真" width={100} height={70} />
            </div> */}
            <div style={btnWrap}>
              <Link href="/mypage">
                <Back />
              </Link>
              {state === false ? (
                <PostDelete props={State} />
              ) : (
                <ConfirmBtnWrap fn={State} param={id} />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

const mainWrap = {
  width: "100%",
  height: "100%",
  backgroundColor: background,
  paddingTop: "24px",
};

const btnWrap = {
  padding: "20px 20px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

// const conBtn = {
//   border: "1px solid tomato",
//   // position: "absolute",
//   // top: "50%",
//   // left: "50%",
//   // transform: " translate(-50%,-50%)",
// };

export function Album(props: any) {
  // console.log(props);

  return (
    <>
      {props.data && (
        <section className="album">
          <div className="albumMain">
            <div className="photograph flex justify-center">
              {" "}
              <Image
                src={`${props.image}`}
                alt="写真"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "100%" }}
              />
            </div>
            <h2 className="value">{props.data.title}</h2>
            <p>カテゴリー</p>
            <div className="category">
              <p className="value">{props.data.selectedCategory}</p>
              <p className="value">{props.data.emotion}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
