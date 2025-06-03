"use client"
import { useRouter } from "next/navigation"
import { ChevronLeft, UserPen } from "lucide-react"
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
      <ChevronLeft className="text-deftext cursor-pointer" />
      <p className="font-bold text-3xl mt-3">NEW PASSWORD</p>
      <p className="text-base mt-2">Enter new password</p>
      <div className="mt-18"></div>
      <InputBox title={"PASSWORD"} block={false} />
      <div className="mt-6"></div>
      <InputBox title={"RETYPE PASSWORD"} block={false} />
      <div className="mt-6"></div>
      <Button text={"VERIFY"} nav={"/"}/>
    </div>
  )
}