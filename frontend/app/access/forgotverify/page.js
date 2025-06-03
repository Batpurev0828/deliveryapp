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
      <p className="font-bold text-3xl mt-3">VERIFICATION</p>
      <p className="text-base mt-2">We have sent a code to your email</p>
      <div className="mt-18"></div>
      <InputBox title={"CODE"} block={false} />
      <div className="h-6"></div>
      <Button text={"VERIFY"} nav={"/access/newpass"}/>
    </div>
  )
}