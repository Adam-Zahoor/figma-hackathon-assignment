import Image from "next/image";
import image1 from "@/app/check 1.png";
import image2 from "@/app/Vector.png";
import image3 from "@/app/alert-circle 1.png";
import image4 from "@/app/Logo Icon.png";
import image5 from "@/app/Cart.png";


export default function Header() {
    return (
        <div>

            <nav className="flex flex-row bg-header items-center h-11 px-[14%]">
                <div className="flex items-center w-1/2 justify-start gap-3 text-white">
                    <Image src={image1} alt="" width={10.7} height={4} ></Image>
                    Free Shipping On All Orders Over $50
                </div>

                <div className="text-white justify-end items-center px-[14%] flex flex-row w-1/2 gap-8">
                    <button title="x" className="size-15 flex flex-row items-center gap-2">Eng <Image className="h-[3.5px] w-[7px]" src={image2} height={3.5} width={7} alt=""></Image></button>
                    
                    <button>Faqs</button>
                    
                    <button title="y" className="text-white size-15 gap-2 flex flex-row ">
                        <Image className="h-[16px] w-[16px]" src={image3} alt=""></Image>Need Help
                    </button>
                </div>
            </nav>
            <div className="flex w-screen h-[64px] mx-[14%]">
                <div className="flex flex-row items-center w-1/2 justify-start gap-2">
                <   Image className="flex flex-row h-[23.33px] w-[28.67px]" src={image4} alt="" height={23.33} width={28.67}></Image>
                    <button title="xx" className="text-xl items-center">Comforty</button>
                </div>
                <div className="flex items-center flex-row justify-end px-[14%] mx-[14%] w-1/2 ">
                    <button title="btn1"><Image src={image5} alt="" height={44} width={120} className="h-[44px] w-[120px]-"></Image></button>
                </div>
            </div>
            <div className="flex w-screen mx-[14%] h-[74px]">
                <div className="flex flex-row justify-start w-1/2 gap-3">
                    <button title="button1" className="text-headerButton ">Home</button>
                    <button title="button2">Shop</button>
                    <button title="button3">Product</button>
                    <button title="button4">Pages</button>
                    <button title="button5">About</button>
                </div>
                <div className="flex items-center flex-roww-1/2 justify-end mx-[10%]">
                    <span><p>Contact: (808) 555-0111</p></span>
                </div>
            </div>

        </div>
    )
}