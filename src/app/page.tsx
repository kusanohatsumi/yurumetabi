"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export function click(e: any) {
  console.log(e.target);
}

export default async function Home() {
  const docRef = doc(db, "sample", "newItem");
  const docSnap = await getDoc(docRef);
  // console.log(docSnap.data());

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   console.log("No such document!");
  // }

  await setDoc(doc(db, "sample", "newItem"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  });

  let AA = "aaa";
  return <main></main>;
}
