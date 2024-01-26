import { db } from "@/firebase/firebase";
import { category_co, confirm } from "@/style/color";
import { DocumentData, deleteDoc, doc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import Link from "next/link";
import { useState } from "react";

export default function ConfirmBtn({ params }: { params: any }, props: any) {
  const id = params.no;
  console.log(props);

  const [showConfirmBtnWrap, setShowConfirmBtnWrap] = useState(true);
  const storage = getStorage();

  function deleteImg() {
    const desertRef = ref(storage, `shareImg${Number(id[5])}`);
    // ファイルを削除する
    deleteObject(desertRef)
      .then(() => {
        // ファイルの削除に成功しました
      })
      .catch((error) => {
        // ファイルの削除中にエラーが発生しました
      });
  }
  // const [shares, setShares] = useState<DocumentData[]>([]);
  return (
    <>
      <Link href="/mypage/confirm">
        <button
          style={confirmBtn}
          onClick={async () =>
            await deleteDoc(doc(db, "share", props.paramItem))
          }
        >
          YES
        </button>
      </Link>
      <button style={confirmBtn} onClick={() => props.no(false)}>
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
