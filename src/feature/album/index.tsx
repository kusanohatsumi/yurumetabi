
import "@/feature/album/style.css"
import Image from "next/image"

export default function Album() {
    return(
        <>
            <section className="album">
                <div className="albumMain">
                    <div className="photograph"></div>
                    <h2>中崎町の街並み</h2>
                    <p>カテゴリー</p>
                    <div className="category">
                        <p>街並み</p>
                        <p>レトロ</p>
                    </div>
                </div>
            </section>
        </>
    )
}