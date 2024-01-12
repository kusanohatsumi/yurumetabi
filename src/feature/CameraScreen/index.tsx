"use client";

import { CameraType } from "@/components/Camera/types";
import React, { useState, useRef } from "react";
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import "@/feature/CameraScreen/style.css"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db, storage } from "@/firebase/firebase";
import { ref,uploadString, getDownloadURL } from "firebase/storage";



export default function CameraScreen() {
    const [ photograph, usePhotograph ] = useState("");
    
    const handleSubmit = async (photograph: string) => {
        // FireStoreのデータベースからカウントの参照を取得します
        const counterRef = doc(db, 'counters', 'shareCount');
        // カウントのドキュメントを取得します
        const counterSnap = await getDoc(counterRef);
        // カウントのドキュメントが存在する場合はその値を取得し、存在しない場合は1を設定します
        let shareCount = counterSnap.exists() ? counterSnap.data().count : 1;
        // 'share'コレクション内に新しいドキュメントの参照を作成します
        const userDocumentRef = doc(db, 'share', `photograph${shareCount}`);
    
        // 画像をCloud Storageにアップロードします
        const imageRef = ref(storage, `images/photograph${shareCount}`);
        await uploadString(imageRef, photograph, 'data_url');  // uploadString関数を使用して画像をアップロードします
        const imageUrl = await getDownloadURL(imageRef);  // getDownloadURL関数を使用してダウンロードURLを取得します
    
        // 新しいドキュメントを作成し、そのドキュメントに画像のURLを保存します
        const documentRef = await setDoc(userDocumentRef, {
            photograph: imageUrl
        });
    
        window.location.href = "/share";
    };
        
    const handleFileChange = (e:any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                usePhotograph(reader.result);
                handleSubmit(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };
        
    return (
    <>
        <section className="Camera">
            <div>
                <input type="file" capture="user" onChange={handleFileChange} accept=".jpg, .png, .gif"/>
            </div>
        </section>
        <section className="footer">
            <p>おすすめスポットを共有しましょう</p>
        </section>
    </>
);
}
