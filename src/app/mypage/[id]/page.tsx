"use client";

import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
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
