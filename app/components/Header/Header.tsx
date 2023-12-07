import Link from "next/link";

export default function Header() {
    return(
        <>
            <header className={"flex "}>
                <div className="">
                    <h1 className="font-bold text-4xl m-8">logo</h1>
                </div>
                <nav className={"absolute my-8 top-0 right-20"}>
                    <ul className={"flex "}>
                        <li className={"mx-20 text-blue-500 hover:border-b-2 border-red-500 transition duration-500"}><Link href={'/'} className={""}>Top</Link> </li>
                        <li className={"mx-20 text-blue-500 hover:border-b-2 border-red-500 transition duration-500"}><Link href={'/News'} >News</Link> </li>
                        <li className={"mx-20 text-blue-500 hover:border-b-2 border-red-500 transition duration-500"}>Services</li>
                        <li className={"mx-20 text-blue-500 hover:border-b-2 border-red-500 transition duration-500"}>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}