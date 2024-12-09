import Image from "next/image";
import image6 from "@/app/Logo Icon.png";
import image7 from "@/app/Social Media/Group 44.png";
import image8 from "@/app/Social Media/Group 46.png";
import image9 from "@/app/Social Media/Group 47.png";
import image10 from "@/app/Social Media/Group 48.png";
import image11 from "@/app/Social Media/Group 50.png";
import image29 from "@/app/Footer.png";
import image30 from "@/app/footer1.png";
import image31 from "@/app/footer2.png"

export default function Footer() {
    return (
        <div>

            <div className="flex flex-row h-[343px] w-screen mx-[4%] px-[10%] gap-24 pt-28">

                <div className="w-[350px] h-[198px] flex flex-col gap-2 justify-start">
                    <div className="flex flex-row justify-start items-start gap-2  ">
                        <Image className="h-[23.34px] w-[40px] flex-row gap-2 justify-start" src={image6} height={31} width={40} alt=""></Image>
                        <p className="flex flex-row justify-start">Comforty</p>
                    </div>
                    <br />
                    <div className="flex justify-start h-[72px] flex-row w-[350px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat similique minus qui odit dolor provident facilis
                    </div>
                    <br />
                    <div className="flex flex-row justify-start h-[38px] w-[206px] items-center ">
                        <Image className="flex items-center" src={image7} alt="" height={38} width={38} ></Image>
                        <Image className="flex items-center" src={image8} alt="" height={38} width={38} ></Image>
                        <Image className="flex items-center" src={image9} alt="" height={38} width={38} ></Image>
                        <Image className="flex items-center" src={image10} alt="" height={38} width={38} ></Image>
                        <Image className="flex items-center" src={image11} alt="" height={38} width={38} ></Image>

                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <p className="text-gray-400 pb-4">CATEGORY</p>
                    <br />
                    <br />
                    <button title="btn2">Sofa</button>
                    <button title="btn3">Armchair</button>
                    <button title="btn4">Wing Chair</button>
                    <button title="btn5" className="text-headerButton"><u>Desk Chair</u></button>
                    <button title="btn6">Woden Chair</button>
                    <button title="btn7">Park Bench</button>    
                </div>

                <div className="flex flex-col items-start">
                    <p className="text-gray-400 pb-4">SUPPORT</p>
                    <br />
                    <br />
                    <button title="btn8">Help & Support</button>
                    <button title="btn9">Terms & Conditions</button>
                    <button title="btn10">Privacy Policy</button>
                    <button title="btn11">Help</button>
                </div>

                <div className="w-[424px] h-[46px] items-start">
                    <p className="text-gray-400 pb-4">NEWSLETTER</p>
                    <input type="text" width={285} height={48} className="border-gray-700 rounded-md h-[48px] w-[285px] p-5" placeholder="Your Email"/>
                    <button title="btn12" className="bg-buttonColor text-white w-[127px] h-[48px] gap-6 rounded-md">Subscribe</button>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At neque perferendis repellendus molestiae voluptates, numquam ea velit, tempore assumenda</p>
                </div>
            </div>
            <div className="flex flex-row h-[75px] w-screen px-[10%] justify-center">
                <Image src={image29} height={75} alt="" width={1920} >

                </Image>
            </div>

        </div>
    )
}