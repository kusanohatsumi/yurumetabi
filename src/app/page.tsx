"use client";
import Image from "next/image";
import { doc, getDoc , setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import React, { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleClick = async (e:any) => {
    e.preventDefault();
    console.log("click");

    const docRef = doc(db, "koudai", "new");
    const docSnap = await getDoc(docRef);

    await setDoc(doc(db, "koudai", "new"), {
      name: inputValue, // テキスト入力フィールドの値をFirebaseに保存
      state: "CA",
      country: "USA"
    });
  };

  return (
    <>
      <div className="w-full h-screen">
        <h1>Hello World</h1>
          <form action="">
            <input type="text" name="name" className="text"
              onChange={(e) => setInputValue(e.target.value)}/>
            <br />
            <button className="btn" type="submit"
              onClick={handleClick} // 送信ボタンがクリックされたときにhandleClick関数を呼び出す
            >送信</button>
          </form>
      </div>
    </>
  );
}
