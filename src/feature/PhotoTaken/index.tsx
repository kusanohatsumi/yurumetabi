import "@/feature/PhotoTaken/styli.css"

export default function PhotoTaken() {
    return(
        <>
            <div className="box">
                <section className="title">
                    <p>この写真はどこの写真ですか？</p>
                    <input type="text" placeholder="写真のタイトルを入力してください"/>
                </section>
                <section className="category">
                    <p>この場所のカテゴリーを選択してください</p>
                    <div className="place"></div>
                    <div></div>
                </section>
                <section className="confirmationBtn">
                    <p><a href="#">確認</a></p>
                </section>
            </div>
        </>
    )
};