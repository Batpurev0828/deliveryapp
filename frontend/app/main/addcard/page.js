"use client"
import { Ubuntu } from "next/font/google"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import InputBox from "@/components/Input"
import Button from "@/components/Button"
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export default function Home() {
  const router = useRouter();
  return (
    <div className={`${ubuntu.className} min-h-screen h-fit w-screen flex flex-col px-6 py-[52px] bg-white`}>
      <div className="h-fit w-full flex space-x-4 items-center mb-5">
        <button className="h-12 w-12 flex justify-center items-center bg-icon rounded-full cursor-pointer" onClick={() => router.back()}>
          <X className="w-6 h-6 text-black" />
        </button>
        <p className="text-[17px] text-black">Add Card</p>
      </div>
      <InputBox title={"NAME"} block={false}/>
      <div className="h-6"></div>
      <InputBox title={"CARD NUMBER"} block={false}/>
      <div className="h-6"></div>
      <div className="flex space-x-4 w-full h-fit">
        <div className="w-1/2 h-fit">
          <InputBox title={"EXPIRY DATE"} block={false}/>
        </div>
        <div className="w-1/2 h-fit">
          <InputBox title={"CVV"} block={false}/>
        </div>
      </div>
      <div className="mt-auto"></div>
      <Button text={"ADD"} nav={"/main/payment"} />
    </div>
  )
}