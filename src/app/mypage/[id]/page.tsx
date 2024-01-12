import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, } from "react";

export type Item = {
    img: { src: string; alt: string };
    tag: { place: string; category: string };
    title: string;
};

// export default async function blogItem({ params }: { params: { id: string } }) {
//     console.log(params.id); // blog1 , blog02 などがとれる
// return (<>
//     <div>id:</div>
// </>)
// }

export default function MyPageItem({ params }: { params: { id: string } }) {
    const param = params.id;
    const [state, setState] = useState<Item>();
    useEffect(() => {
        const docRef = doc(db, "user", "@user01");
        const docSnap = getDoc(docRef);
        docSnap.then((doc) => {
            if (doc.exists()) {
                setState(doc.data()[param]);
            }
        });
    }, [param]);

    return (
        <>
            {state != undefined ? (
                <div>
                    <div>id:</div>
                    <div>{state.title}</div>
                    <div>{state.tag.category}</div>
                    <div>{state.tag.place}</div>
                </div>
            ) : (
                console.log("loading...")
            )}
        </>
    );
}


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
