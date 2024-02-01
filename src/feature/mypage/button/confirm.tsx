import { db } from "@/firebase/firebase";
import { category_co, confirm } from "@/style/color";
import { DocumentData, deleteDoc, doc, getDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function ConfirmBtn(params: any, props: any) {
  // const id = params.id;

  // const words = id.split("");
  // console.log(words[2]);

  // console.log(props);

  // useEffect(() => {
  //   const getData = async () => {
  //     const shareRef = doc(db, "share", props.paramItem);
  //     const snapshot = await getDoc(shareRef);
  //     if (snapshot.data() !== undefined) {
  //       console.log(snapshot.data());
  //     }
  //     // Firebase Storageから画像のURLを取得します
  //     // const storageRef = ref(storage, `shareImg${Number(words[5])}`);
  //     // const url = await getDownloadURL(storageRef);
  //     // //   // 取得したURLをステートに保存します
  //     // setImageUrls(url);
  //   };
  //   getData();
  // }, []);

  const [state, setState] = useState(false);
  const [showConfirmBtnWrap, setShowConfirmBtnWrap] = useState(true);
  const storage = getStorage();
  // const [shares, setShares] = useState<DocumentData[]>([]);

  const desertRef = ref(storage, `shareImg${Number}`);
  // const desertRef = ref(storage, `shareImg,${Number(props.paramItem)}`);

  return (
    <>
      <Link href="/mypage/confirm">
        {/* <button
          style={confirmBtn}
          onClick={async () =>
            await deleteDoc(doc(db, "share", props.paramItem))
          }
        > */}
        <button
          style={confirmBtn}
          onClick={async () => {
            try {
              await deleteObject(desertRef);
              await deleteDoc(doc(db, "share", props.paramItem));
              // ファイルが正常に削除されました
            } catch (error) {
              // エラーが発生しました
            }
          }}
        >
          YES
        </button>
      </Link>
      <button style={confirmBtn} onClick={() => props.no(false)}>
        {/* <button
        style={confirmBtn}
        onClick={() => {
          props.no(false);
        }}
      > */}
        NO
      </button>
    </>
  );
}

const confirmBtn = {
  display: "inline-block",
  width: "104px",
  height: "40px",
  margin: "0 16px",
  borderRadius: "20px",
  backgroundColor: confirm,
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  color: category_co,
  fontSize: "24px",
  fontFamily: "Inter",
};
