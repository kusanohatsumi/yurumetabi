import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function MyPageItem({ params }: { params: { id: any } }) {
    const param = params.id


    const docRef = doc(db, "user", "@user01");
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data();
    if (docSnap === undefined) {
        console.log("no");
    }
    else {
        // const userItem = userData.id;
        if (userData === undefined) {
            console.log("noo");
            console.log(userData.param);
        } else {
            console.log(userData.param);


        }
    }

    return (<>
        <div>id:</div>
    </>)
}