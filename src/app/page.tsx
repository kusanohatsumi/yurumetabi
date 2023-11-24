import Image from "next/image";
import { doc, getDoc, setDoc, query, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { log } from "console";

export default async function Home() {
  const docRef = collection(db, "sunahara");
  const docSnap = await getDocs(docRef);

  // const q = query(doc(db, "sunahara"));
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  let data = docSnap;
  // console.log(data);
  data.forEach((doc) => {
    console.log(doc.id, doc.data());
  })

  // console.log(data.state);

  await setDoc(doc(db, "sunahara", "new"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
  await setDoc(doc(db, "sunahara", "new2"), {
    name: "San Francisco",
    state: "CA",
    country: "USA"
  });
  await setDoc(doc(db, "sunahara", "new3"), {
    name: "Washington, D.C.",
    state: null,
    country: "USA"
  });
  await setDoc(doc(db, "sunahara", "new4"), {
    name: "Tokyo",
    state: null,
    country: "Japan"
  });

  return (
    <>
      <h1>Hello World</h1>
      {data.forEach((doc) => {
        <div>
          <p>aaaaa</p>
          <p>{doc.id}</p>
          <p className="country">国{doc.data().country}</p>
          <p className="state">州{doc.data().state}</p>
          <p className="name">市{doc.data().name}</p>
        </div>
      })
      }
    </>
  );
}
