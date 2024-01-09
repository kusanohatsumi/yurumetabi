import Image from "next/image";

export default function myPage() {
    return (<>
        <Image alt="" src="public/image/" width={64} height={64} />
        <h1>アカウント名</h1>
        <h2>年齢　性別</h2>
        <p>アカウント登録日</p>
        {/* setting */}
        {/* シェア機能 */}
        <p>タップすると画像全体をみることができます</p>
        <div>
            <p>撮影写真</p>
            <p>写真タイトル</p>
            <p>カテゴリー</p>
        </div>
    </>)
}