
import "@/feature/PhotoConfirmation/styli.css"
import CategoryBtn from "../CategoryBtn"


export default function PhotoConfirmation(){
    return(
        <>
            <div className="box">
                <div className="title">
                    <p>この写真はどこの写真ですか</p>
                    <p className="value">決定したタイトル</p>
                </div>
                <div className="category">
                    <p>この場所のカテゴリーを選択してください</p>
                    <div></div>
                    <div></div>
                </div>
                <div className="shareBtn">
                    <p><a href="#">共有</a></p>
                </div>
            </div>
        </>
    )
}