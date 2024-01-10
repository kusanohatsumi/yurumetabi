import PR from "@/feature/PR";
import Back from "@/feature/mypage/button/back";
import PostDelete from "@/feature/mypage/button/postDelete";
import { main } from "@/style/color 2";

export default async function MyPageZoom() {
    return (<>
        <main style={mainWrap}>
            <div>
            </div>
            <Back />
            <PostDelete />
            <PR />
        </main>
    </>)
}

const mainWrap = {
    backgroundColor: main,
}
