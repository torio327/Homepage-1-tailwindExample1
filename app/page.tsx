import Link from "next/link";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import NewsList from "@/app/components/NewsList/NewsList";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BusinessIcon from '@mui/icons-material/Business';
import Services from "@/app/components/contents/Services";
import Step from "@/app/components//Step";
import List from "@/app/components/List";
import Contact from "@/app/components/Contact";
export default function Home() {
  return (
  <div className={'m-0 p-0 overflow-hidden'}>
    <Header/>
    <div className="screen">
      <div className="flex justify-center items-center relative">
        <Image src={'/images/office1.jpg'} alt={'pic1'} width={600} height={200}
               className={"w-screen h-90vh object-cover"}/>
        <strong className={'absolute text-white text-7xl flex justify-center items-center  opacity-70'}>
          環境開発で社会を変える
        </strong>
        <strong className={'absolute text-white text-9xl  bottom-0 flex justify-center '}>
          Welcome to
        </strong>
      </div>
      <strong className="flex justify-center  text-9xl">
        Company
      </strong>
    </div>
    <div className="my-40 flex items-center justify-center flex-col text-3xl">
      <p>テキストテキストテキストテキストテキスト</p>
      <p>テキストテキストテキストテキストテキスト</p>
      <p>テキストテキストテキストテキストテキスト</p>
    </div>
    <div className="news">
      <h1 className="border-b-2 border-blue-500 text-6xl mx-3 w-48">NEWS</h1>
      <NewsList/>
    </div>
    <div className="services ">
      <h1 className={'border-b-2 border-blue-500 text-6xl mx-3 w-64'}>Services</h1>
      <h2 className={'text-4xl mx-10 my-5'}>事業内容</h2>
      <div className=" w-screen h-screen my-12 relative">
          <div className="text-center  z-10 text-3xl">海外事業部の活動</div>
        <Image src={"/images/img.png"} alt={"office"} width={0}
               height={0}
               sizes="100vw"
               style={{ width: '100%', height: 'auto' }}/>
          </div>
    </div>
    <Services/>
   <Step/>
    <List/>
    <div className="contact">
      <h1 className="border-b-2 border-blue-500 text-6xl mx-3 w-56 mb-3">Contact</h1>
      <Contact/>
    </div>

  </div>
  )
}
