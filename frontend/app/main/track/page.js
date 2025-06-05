"use client"
import { Ubuntu } from "next/font/google"
import { ChevronLeft, Phone, MessageCircle} from "lucide-react"
import { useRouter } from "next/navigation"

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function Home() {
  const router = useRouter()
  return (
    <div className={`w-screen min-h-screen h-fit flex flex-col bg-white ${ubuntu.className}`}>
      <div className="h-12 w-12 flex justify-center items-center absolute bg-[#212029] rounded-full cursor-pointer top-6 left-6 z-10">
        <ChevronLeft className="w-6 h-6 text-white cursor-pointer" onClick={() => router.push('/main/hero')} />
      </div>
      <img className="w-full object-cover h-[655px]" src="https://help.apple.com/assets/679AC5D89CADD8D46302CC95/679AC5DA359144F3D701ECBB/en_US/104421ee4bb970bc209c5d74c6dbc3c1.png" />
      <div className="w-full h-[574px] bg-white flex flex-col">
        <div className="h-fit w-full flex mx-6 mt-11">
          <div className="h-16 w-16 bg-[#FFBE6D] rounded-[10px]"></div>
          <div className="flex flex-col w-fit h-fit ml-2.5">
            <p className="text-[18px] text-[#181C2E]">Better Burger</p>
            <p className="text-deftext text-sm mt-1.5">Ordered at June 1st, 2025, 19:00</p>
            <p className="text-deftext text-sm font-bold mt-4">4x Burger</p>
          </div>
        </div>
        <p className="font-extrabold text-3xl text-black mt-14 mx-6">117min</p>
        <p className="text-sm text-deftext mx-6">ESTIMATED DELIVERY TIME</p>
        <div className="flex flex-col w-fit h-fit mt-2 mx-6">
          <div className="w-fit h-fit flex items-center mt-7">
            <div className="h-4 w-4 bg-primary rounded-full"></div>
            <p className="text-sm ml-3 text-primary">Order received</p>
          </div>
          <div className="w-fit h-fit flex items-center mt-7">
            <div className="h-4 w-4 bg-primary rounded-full"></div>
            <p className="text-sm ml-3 text-primary">Preparing order</p>
          </div>
          <div className="w-fit h-fit flex items-center mt-7">
            <div className="h-4 w-4 bg-primary rounded-full"></div>
            <p className="text-sm ml-3 text-primary">Order picked up</p>
          </div>
          <div className="w-fit h-fit flex items-center mt-7">
            <div className="h-4 w-4 bg-deftext rounded-full"></div>
            <p className="text-sm ml-3 text-deftext">Delivering</p>
          </div>
        </div>
        <div className="w-full h-[116px] mt-auto border-primary border-2 rounded-t-3xl flex items-center px-9">
          <div className="w-14 h-14 bg-deftext rounded-full"></div>
          <div className="w-fit h-fit flex flex-col ml-3">
            <p className="font-bold text-[#181C2E] text-xl">
              Driver
            </p>
            <p className="text-sm text-deftext">Food Driver</p>
          </div>
          <div className="h-12 w-12 bg-primary flex items-center justify-center rounded-full ml-auto">
            <Phone className="w-6 h-6 text-white"/>
          </div>
          <div className="h-12 w-12 bg-white border-2 border-primary flex items-center justify-center rounded-full ml-2">
            <MessageCircle className="w-6 h-6 text-primary"/>
          </div>
        </div>
      </div>
    </div>
  )
}
