"use client";

import { db, storage } from "@/firebase/firebase";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// export type Item = {
//   img: { src: string; alt: string };
//   tag: { place: string; category: string };
//   title: string;
// };

// export default async function blogItem({ params }: { params: { id: string } }) {
//     console.log(params.id); // blog1 , blog02 などがとれる
// return (<>
//     <div>id:</div>
// </>)
// }

// export default function MyPageItem({ params }: { params: { id: string } }) {
//     const param = params.id;
//     const [state, setState] = useState<Item>();
//     useEffect(() => {
//         const docRef = doc(db, "user", "@user01");
//         const docSnap = getDoc(docRef);
//         docSnap.then((doc) => {
//             if (doc.exists()) {
//                 setState(doc.data()[param]);
//             }
//         });
//     }, [param]);

//     return (
//         <>
//             {state != undefined ? (
//                 <div>
//                     <div>id:</div>
//                     <div>{state.title}</div>
//                     <div>{state.tag.category}</div>
//                     <div>{state.tag.place}</div>
//                 </div>
//             ) : (
//                 console.log("loading...")
//             )}
//         </>
//     );
// }

// export default async function MyPageItem({ params }: { params: { id: any } }) {
//     const param = params.id
// const docRef = doc(db, "user", "@user01");
// const docSnap = await getDoc(docRef);
// const userData = docSnap.data();

// if (docSnap === undefined) {
//     console.log("no");
// }
// else {
//     // const userItem = userData.id;
//     if (userData === undefined) {
//         console.log("noo");
//         console.log(userData.param);
//     } else {
//         console.log(userData.param);

//     }
// }

// console.log(params.id);
// return (<>
//     <div>id:</div>
// </>)
// }

// export type Item = {
//   emotion: string;
//   selectedCategory: string;
//   title: string;
// };

// export default async function blogItem({ params }: { params: { id: string } }) {
//     console.log(params.id);
//     return ();
// }

// export default function mypage({ params }: { params: { id: string } }) {
//   const param = params.id;
//   const [state, setState] = useState<DocumentData[]>();
//   useEffect(() => {
//     const docRef = doc(db, "share", "share01");
//     console.log(docRef);
//     const docSnap = getDoc(docRef);
//     docSnap.then((doc) => {
//       if (doc.exists()) {
//         setState(doc.data()[param]);
//       }
//     });
//   }, [param]);

//   return (
//     <>
//       {state != undefined ? (
//         <div>
//           <p>aaa</p>
//           {/* <div>{state.emotion}</div>
//           <div>{state.selectedCategory}</div>
//           <div>{state.title}</div> */}
//         </div>
//       ) : (
//         console.log("loading...")
//       )}
//     </>
//   );
//   //   return (
//   //     <>
//   //       <section>
//   //         <div>
//   //           <div>
//   //             {imageUrl ? (
//   //               <Image src={imageUrl} alt="Uploaded" width={386} height={300} />
//   //             ) : (
//   //               <></>
//   //             )}
//   //           </div>
//   //           {shares.map((share) => (
//   //             <h2 className="value" key={share.id}>
//   //               {share.title}
//   //             </h2>
//   //           ))}
//   //           <p>カテゴリー</p>
//   //           <div className="category">
//   //             {shares.map((share) => (
//   //               <p className="value" key={share.id}>
//   //                 {share.selectedCategory}
//   //               </p>
//   //             ))}
//   //             {shares.map((share) => (
//   //               <p className="value" key={share.id}>
//   //                 {share.emotion}
//   //               </p>
//   //             ))}
//   //           </div>
//   //         </div>
//   //       </section>
//   //     </>
//   //   );
// }

export type Item = {
  emotion: string;
  selectedCategory: string;
  title: string;
};

export default function shareZoom({ params }: { params: any }) {
  const id = params.id;
  const words = id.split("");
  console.log(id[5], Number(id[5]));

  const [shares, setShares] = useState<DocumentData[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  //   const router = useRouter();
  //   const { id } = router.query;
  //   const [share, setShare] = useState(null);
  //   const [imageUrl, setImageUrl] = useState("");
  //   useEffect(() => {
  //     const fetchShare = async () => {
  //       const shareRef = doc(db, `share`, id);
  //       const shareSnap = await getDoc(shareRef);
  //       if (shareSnap.exists()) {
  //         setShare(shareSnap.data());
  //       }
  //       const storage = getStorage();
  //       const storageRef = ref(storage, `shareImg${id}`);
  //       const url = await getDownloadURL(storageRef);
  //       setImageUrl(url);
  //     };
  //     if (id) {
  //       fetchShare();
  //     }
  //   }, [id]);
  const [data, setData] = useState<Item>();

  useEffect(() => {
    const fetchShares = async () => {
      //   const shareRef = collection(db, `share`, `share1`);
      const shareRef = doc(db, "share", id);
      const snapshot = await getDoc(shareRef);
      //   console.log(snapshot.data().title);
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

      //   const sharesData = snapshot.docs.map((doc) => doc.data());
      //   console.log(sharesData);
      //   setShares(sharesData);

      //   const urls = await Promise.all(
      //     sharesData.map(async (_, index) => {
      //       const storage = getStorage();
      //       const storageRef = ref(storage, `shareImg${index + 1}`);
      //       const url = await getDownloadURL(storageRef);
      //       return url;
      //     })
      //   );
      //   setImageUrls(urls);
    };
    fetchShares();
  }, []);

  //   return (
  //     <div>
  //       {share && (
  //         <>
  //           <h1>{share.title}</h1>
  //           <p>{share.selectedCategory}</p>
  //           <p>{share.emotion}</p>
  //           {imageUrl && (
  //             <Image src={imageUrl} alt="Uploaded" width={76} height={50} />
  //           )}
  //         </>
  //       )}
  //     </div>
  //   );

  return (
    <>
      {data === undefined ? <div>データなし</div> : <div>{data.title}</div>}
      {imageUrls === undefined ? (
        <div>データなし</div>
      ) : (
        <div>
          <Image src={`${imageUrls}`} alt="写真" width={100} height={70} />
        </div>
      )}

      {/* {shares.map((share, index) => {
        return (
          <div key={index}>
            <div>
              {imageUrls[index] ? (
                <Image
                  src={imageUrls[index]}
                  alt="Uploaded"
                  width={76}
                  height={50}
                  // style={img}
                />
              ) : (
                <></>
              )}
            </div>
            <p>{share.title}</p>
            <div>
              <p>{share.selectedCategory}</p>
              <p>{share.emotion}</p>
            </div>
          </div>
        );
      })} */}
    </>
  );
}
