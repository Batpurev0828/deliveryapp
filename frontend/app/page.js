import { ChevronLeft, icons } from "lucide-react"
import { Ubuntu } from "next/font/google"
import Button from "@/components/Button"
import InputBox from "@/components/Input"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export default function Home() {
  return (
    <div className={`h-screen w-screen bg-white px-6 py-20 ${ubuntu.className} flex flex-col text-deftext`}>
      <ChevronLeft className="text-deftext" />
      <p className="font-bold text-3xl mt-3">LOG IN</p>
      <p className="text-base mt-2">Please sign into your existing account</p>
      <div className="mt-18"></div>
      <InputBox title={"EMAIL"} block={false} />
      <div className="mt-6"></div>
      <InputBox title={"PASSWORD"} block={false} />
      <div className="flex h-5 w-full mt-6 justify-between items-center mb-8">
        <div className="flex">
          <input type="checkbox" className="h-5 w-5 border-brcolor border-2 rounded-[5px]" />
          <p className="ml-2.5 text-[13px]">Remember Me</p>
        </div>
        <p className="text-[13px] text-primary">Forgot Password</p>
      </div>
      <Button text={"LOG IN"}/>
      <div className="w-full flex justify-center items-center space-x-[14px] mt-8">
        <p className="text-base text-deftext">Don't have an account?</p>
        <p className="font-bold text-base text-primary">SIGN UP</p>
      </div>
    </div>
  )
}