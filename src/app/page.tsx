import Image from "next/image";

export default function Home() {
  return (
    <>
      ここにGoogleMapを描画
      <div className="w-full box-border py-10 flex flex-col items-center h-96 absolute z-50 bottom-16 rounded-tr-3xl bg-slate-100 after:content-['']">
        <p className="text-xs my-4 text-center">
          目的地まで遠回りして自分だけの新たな名所を見つけましょう
        </p>
        <div className="w-full">
          <div className="flex items-center border-b-2 pr-6 ">
            <div className="w-7 h-12 m-5 bg-slate-400"></div>
            <div className="flex-1">
              <input
                className="w-full px-3 box-border h-8 my-2 rounded text-xs  bg-slate-500"
                placeholder="出発地を入力してください"
              />
              <input
                className="w-full px-3 box-border h-8 my-2 rounded text-xs  bg-slate-500"
                placeholder="目的地を入力してください"
              />
            </div>
          </div>
          <div className="flex items-center border-b-2 ">
            {/* icon */}
            <div className="w-7 h-auto m-5 ">
              <img
                className=" m-auto"
                alt="時計"
                src="https://placehold.jp/20x20.png"
              />
            </div>
            {/* contents */}
            <div className="flex-1  flex items-center">
              <input
                type="time"
                className="w-24 h-10 text-center box-border my-2 rounded text-xs  bg-slate-500"
              />
              <p className="m-4">~</p>
              <input
                type="time"
                className="w-24 h-10 text-center box-border my-2 rounded text-xs  bg-slate-500"
              />
            </div>
          </div>
          <div className="flex items-center border-b-2 ">
            {/*  icon */}
            <div className="w-7 h-auto m-5 ">
              <img
                className=" m-auto"
                alt="時計"
                src="https://placehold.jp/20x20.png"
              />
            </div>
            {/* contents */}
            <div className=" flex items-end">
              <input
                className="w-48 h-8 px-3 box-border rounded text-xs  bg-slate-500"
                placeholder="旅行費用を入力してください"
              />
              <p className="w-auto text-xs mx-2 ">円まで</p>
            </div>
          </div>
        </div>
        <button className=" w-10 h-5 text-sm border-b-2 border-b-stone-500">
          検索
        </button>
      </div>
    </>
  );
}
