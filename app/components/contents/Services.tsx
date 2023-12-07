import Image from "next/image";

export default function Services(){
    return(
<div className={""}>
             <Image src={"/images/img_1.png"} alt={"office"} width={0}
                       height={0}
                       sizes="100vw"
                       style={{ width: '100%', height: 'auto' }}/>
</div>
    )
}