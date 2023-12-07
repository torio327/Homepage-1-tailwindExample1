import Image from "next/image";

export default function Step(){
    return(
        <>
        <div className="relative p-[50px] w-screen  h-[2800px] bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <div className="relative ">
                <Image src={"/images/office1.jpg"} alt={"office1"} width={800} height={450}
                       className={"absolute rounded-[30px]"}/>
                <div className="absolute w-[500px] h-[300px] top-[300px] rounded-[30px] bg-white right-[50px]">
                    <div className="relative text-center">
                        <span className="text-5xl text-blue-500">01</span>
                            <h1 className="mt-3 text-3xl">募集</h1>
                        <div className="mt-[50px]">
                            <p className={"my-[20px]"}>はがき、またはスマートフォンから応募</p>
                            <p>募集要項は特設サイトにアクセス</p>
                        </div>
                            </div>
                </div>
            </div>
            <div className="relative py-[50px] top-[600px]">
                <Image src={"/images/office5.jpg"} alt={"office1"} width={800} height={450}
                       className={"absolute right-[50px] rounded-[30px]"}/>
                <div className="absolute w-[500px] h-[300px] top-[400px] bg-white rounded-[30px]">
                    <div className="relative text-center">
                        <span className="text-5xl text-blue-500">02</span>
                        <h1 className="mt-3 text-3xl">受講</h1>
                        <div className="mt-[50px]">
                            <p className={"my-[20px]"}>環境、社会、ガバナンスとの関係を学ぶ</p>
                            <p>ビジネスとESG投資について学ぶ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative py-[50px] top-[1200px] ">
                <Image src={"/images/office6.jpg"} alt={"office1"} width={800} height={450}
                       className={"absolute rounded-[30px]"}/>
                <div className="absolute w-[500px] h-[300px] top-[400px] bg-white right-[50px] rounded-[30px]">
                    <div className="relative text-center">
                        <span className="text-5xl text-blue-500">03</span>
                        <h1 className="mt-3 text-3xl">復習</h1>
                        <div className="mt-[50px]">
                            <p className={"my-[20px]"}>講義の要点を確認</p>
                            <p>実行方法などを考える</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative py-[50px] top-[1800px] mb-9">
                <Image src={"/images/office4.jpg"} alt={"office1"} width={800} height={450}
                       className={"absolute right-[50px] rounded-[30px]"}/>
                <div className="absolute w-[500px] h-[300px] top-[400px] bg-white rounded-[30px]">
                    <div className="relative text-center">
                        <span className="text-5xl text-blue-500">04</span>
                        <h1 className="mt-3 text-3xl">実行</h1>
                        <div className="mt-[50px]">
                            <p className={"my-[20px]"}>講義の知識を活かして、実践する</p>
                            <p>実践を通した学び</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}