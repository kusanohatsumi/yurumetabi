"use client"
import { db } from "@/firebase/firebase"
import { doc, getDoc } from "firebase/firestore"

export default async function GetDoc() {
    const docRef = doc(db, "user", "@user01");
    const docSnap = await getDoc(docRef);
    console.log(docSnap);

    return (<>

    </>)
}