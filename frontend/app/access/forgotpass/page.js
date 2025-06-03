"use client"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Ubuntu } from "next/font/google"
import Button from "@/components/Button"
import InputBox from "@/components/Input"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export default function Home() {
  const router = useRouter();
  return (
    <div className={`h-screen w-screen bg-white px-6 py-20 ${ubuntu.className} flex flex-col text-deftext`}>
      <ChevronLeft className="cursor-pointer text-deftext" onClick={() => { router.back() }} />
      <p className="font-bold text-3xl mt-3">FORGOT PASSWORD</p>
      <p className="text-base mt-2">Please enter your email</p>
      <div className="mt-18"></div>
      <InputBox title={"EMAIL"} block={false} />
      <div className="h-6"></div>
      <Button text={"SEND CODE"} nav={"/access/forgotverify"}/>
    </div>
  )
}