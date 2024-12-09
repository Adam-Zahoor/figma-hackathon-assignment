import Image from "next/image";
import image12 from "@/app/Product Image.png";
import image13 from "@/app/midLogos/zapier.png";
import image14 from "@/app/midLogos/pipedrive.png";
import image15 from "@/app/midLogos/CIBbank.png";
import image16 from "@/app/midLogos/z.png";
import image17 from "@/app/midLogos/BurntToast.png";
import image18 from "@/app/midLogos/PandaDoc.png";
import image19 from "@/app/midLogos/Mox.png";
import image20 from "@/app/Products/pic1.png";
import image21 from "@/app/Products/pic 2.png";
import image22 from "@/app/Products/pic 3.png";
import image23 from "@/app/Products/pic 4.png";
import image24 from "@/app/Products/cart.png";
import image25 from "@/app/Top Categories/Image (1).png";
import image26 from "@/app/Top Categories/Image (3).png";
import image27 from "@/app/Top Categories/Image.png";
import image28 from "@/app/Top Categories/wooden chiar.png"
import image30 from "@/app/Top Categories/Info.png";
import image31 from "@/app/Top Categories/Info (1).png";
import image32 from "@/app/img/01.png";
import image33 from "@/app/img/20.png";
import image34 from "@/app/img/Explore new and popular styles.png";
import image35 from "@/app/img/card (1).png";
import image36 from "@/app/img/item-category 1.png";
import image37 from "@/app/lastdiv/Cloth.png";
import image38 from "@/app/lastdiv/Orange.png";
import image39 from "@/app/lastdiv/Our Products.png";
import image40 from "@/app/lastdiv/Products (1).png";
import image41 from "@/app/lastdiv/Products (2).png";
import image42 from "@/app/lastdiv/Products (3).png";
import image43 from "@/app/lastdiv/Products (4).png";
import image44 from "@/app/lastdiv/Products (5).png";

export default function Body() {
    return (
        <div>

            <div className="flex flex-row items-center w-[1400px] h-[850px] bg-firstBlock align  px-[3%] mx-[14%] m-6">
                
                <div className="flex flex-col pl-[20px] align-middle">
                    <p className="h-[14px] w-[177px] text-lg pb-10 flex">WELCOME TO CHAIRY</p>
                    <br />
                    <br />
                    <p className="w-[557px] h-[198px] text-5xl pt-6 pb-10 "><b>Best Furniture Collection For Your Interior.</b></p>
                    <br />
                    <br />
                    <br />
                    <button title="btn13" className="bg-buttonColor w-[171px] h-[52px] rounded-lg text-white mt-4">Shop Now</button>
                </div>
                <Image src={image12} height={584} alt="" width={434}></Image>
            </div>
            <br />
            <br />
            <div className="flex h-[139px] w-[1400px] items-center mx-[14%] gap-32 flex-wrap ">
                <button title="btn15" ><Image src={image13} height={87} alt="" width={85}></Image></button>
                <button title="btn16" ><Image src={image14} height={107} alt="" width={109}></Image></button>
                <button title="btn17" ><Image src={image15} height={139} alt="" width={135}></Image></button>
                <button title="btn18" ><Image src={image16} height={65} alt="" width={63}></Image></button>
                <button title="btn19" ><Image src={image17} height={101} alt="" width={98}></Image></button>
                <button title="btn20" ><Image src={image18} height={115} alt="" width={113}></Image></button>
                <button title="btn21" ><Image src={image19} height={87} alt="" width={84}></Image></button>
            </div>
            <br />
            <br />
            <p className="font-semibold w-[286px] h-[35px] text-3xl mx-[14%]">Featured Products</p>
            <br />
            <br />

            <div className="flex flex-row w-[1400px] h-[481px] mx-[14%] gap-12 flex-wrap">
                
            <div className="h-[377px] w-[312px] flex-col flex-wrap">
                <div className=""> 
                    <Image className="h-[312px] w-[312px]" src={image20} alt="" height={312} width={312}></Image>
                </div>
                
                <div className="flex flex-row pt-5 w-[312px] justify-between">
                    <span className="flex flex-col w-[256px] h-[21px]">
                        <p className="text-headerButton text-3xl">Library Stool Chair</p>
                        <p className="font-semibold text-3xl">$20</p>
                    </span>

                    <span className="w-[44px] h-[44px] flex justify-end">
                        <button title="btn25"> <Image src={image24} height={44} alt="" width={44}></Image> </button>
                    </span>
                </div>
            </div>

            <div className="h-[377px] w-[312px] flex flex-row flex-wrap">
                <div> 
                    <Image className="h-[312px] w-[312px]" src={image21} alt="" height={312} width={312}></Image>
                </div>
                
                <div className="flex flex-row justify-between pt-5">
                    <span className="flex flex-col h-[] w-[312px]">
                        <p className="text-headerButton text-2xl">Library Stool Chair</p>
                        <p className="font-semibold text-3xl">$20</p>
                    </span>

                    <span>
                        <button title="btn25"> <Image src={image24} height={44} alt="" width={44}></Image> </button>
                    </span>
                </div>
            </div>

            <div className="h-[377px] w-[312px] flex flex-col flex-wrap">
                <div> 
                    <Image className="h-[312px] w-[312px]" src={image22} alt="" height={312} width={312}></Image>
                </div>
                
                <div className="flex flex-row pt-5 w-[312px] justify-between">
                    <span className="flex flex-col w-[256px] h-[21px]">
                        <p className="text-headerButton text-2xl">Library Stool Chair</p>
                        <p className="font-semibold text-3xl">$20</p>
                    </span>

                    <span className="w-[44px] h-[44px] flex justify-end">
                        <button title="btn25"> <Image src={image24} height={44} alt="" width={44}></Image> </button>
                    </span>
                </div>
            </div>

            <div className="h-[377px] w-[312px] flex flex-col flex-wrap">
                <div> 
                    <Image className="h-[312px] w-[312px]" src={image23} alt="" height={312} width={312}></Image>
                </div>
                
                <div className="flex flex-row pt-5 w-[312px] justify-between">
                    <span className="flex flex-col w-[256px] h-[21px]">
                        <p className="text-headerButton text-2xl">Library Stool Chair</p>
                        <p className="font-semibold text-3xl">$20</p>
                    </span>

                    <span className="w-[44px] h-[44px] flex justify-end">
                        <button title="btn25"> <Image src={image24} height={44} alt="" width={44}></Image> </button>
                    </span>
                </div>
            </div>

            </div>
            <br />
            <br />
            <p className="font-semibold w-[286px] h-[35px] text-3xl mx-[14%]">Top Categories</p>
            <br />
            <br />
            <div className="flex flex-row mx-[14%] flex-wrap pb-5 w-screen gap-10 sm:text-lg md:xl xl:text-2xl">
                <div className="h-[424px] w-[424px] flex-wrap">
                    <div>
                        <Image src={image27} alt="" height={424} width={424}></Image>
                    </div>
                    <div>
                        <Image className="h-[85px] w-[424px]" src={image28} alt="" height={424} width={424}></Image>
                    </div>
                </div>
                <div className="h-[424px] w-[424px] flex-wrap">
                    <div>
                        <Image src={image25} alt="" height={424} width={424}></Image>
                    </div>
                    <div>
                        <Image className="h-[85px] w-[424px]" src={image30} alt="" height={424} width={424}></Image>
                    </div>
                </div>
                <div className="h-[424px] w-[424px] flex-wrap">
                    <div>
                        <Image src={image26} alt="" height={424} width={424}></Image>
                    </div>
                    <div>
                        <Image className="h-[85px] w-[424px]" src={image31} alt="" height={424} width={424}></Image>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />

            <div className=" flex mx-[15%] w-[1400px h-[648px] pt-20 gap-7">
                <div className="flex py-12">
                    <Image src={image34} className="h-[560px] w-[30px]" alt=""></Image>
                </div>
                <div className="flex">
                    <Image className="w-[648px] h-[648px]" src={image36} alt=""></Image>
                </div>
                <div>
                    <div className="flex gap-7">
                        <Image src={image32} className="h-[312px] w-[312px]"  alt=""></Image>
                        <Image src={image33} className="h-[312px] w-[312px]" alt=""></Image>
                    </div>
                    <div className="flex gap-7 pt-6">
                        <Image src={image35} className="h-[312px] w-[312px]" alt=""></Image>
                        <Image src={image33} className="h-[312px] w-[312px]" alt=""></Image>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="w-[1400px] h-[919px] pt-24 mx-[14%]">
                <div className="flex justify-center">
                    <Image className="h-[28px] justify-center w-[205px]" alt="" src={image39}></Image>
                </div>
                <br />
                <br />
                <div className="flex flex-row pt-10 gap-6 justify-center">
                    <Image className="h-[377px] w-[312px]" src={image44} alt="" ></Image>
                    <Image className="h-[377px] w-[312px]" src={image40} alt=""></Image>
                    <Image className="h-[377px] w-[312px]" src={image38} alt=""></Image>
                    <Image className="h-[377px] w-[312px]" src={image41} alt=""></Image>
                </div>
                <div className="flex flex-row gap-6 justify-center pt-4">
                    <Image className="h-[377px] w-[312px]" src={image42} alt="" ></Image>
                    <Image className="h-[377px] w-[312px]" src={image37} alt=""></Image>
                    <Image className="h-[377px] w-[312px]" src={image43} alt=""></Image>
                    <Image className="h-[377px] w-[312px]" src={image44} alt=""></Image>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>

    )
}