"use client"
import { Ubuntu } from "next/font/google"
import { User, ShoppingCart, Search, ChevronRight } from "lucide-react"
import FoodTag from "@/components/FoodTag"
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})


export default function Home() {
  return (
    <div className={`min-h-screen h-fit w-screen px-6 py-[54px] flex flex-col bg-white ${ubuntu.className}`}>
      <div className="w-full h-12 flex items-center">
        <div className="h-12 w-12 rounded-full bg-icon flex items-center justify-center">
          <User className="text-black" />
        </div>
        <div className="h-12 w-fit flex flex-col justify-center ml-4">
          <p className="font-bold text-primary text-xs">DELIVERY LOCATION</p>
          <p className="text-subtext text-sm">Sample Delivery Location</p>
        </div>
        <div className="h-12 w-12 bg-[#181C2E] rounded-full ml-auto flex justify-center items-center">
          <ShoppingCart className="text-white" />
        </div>
      </div>
      <p className="font-bold text-xl text-primary mt-5">Explore</p>
      <div className="relative w-full mt-4">
        <input
          type="text"
          placeholder="Explore something else..."
          className="text-subtext h-[62px] w-full bg-[#CCCDCF] rounded-xl pl-4 pr-4 py-[23px] text-sm"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
      </div>
      <div className="w-full h-fit flex mt-8 items-center">
        <p className="text-[#31343D] text-xl">Categories</p>
        <p className="text-base text-[#676767] ml-auto">See All</p>
        <ChevronRight className="text-deftext"/>
      </div>
      <div className="min-w-full w-fit space-x-2 flex mt-5">
        <FoodTag text={"All"}/>
        <FoodTag text={"Hot Dog"}/>
        <FoodTag text={"Burger"}/>
      </div>
      <div className="w-full h-fit flex mt-8 items-center">
        <p className="text-[#31343D] text-xl">Recommended</p>
        <p className="text-base text-[#676767] ml-auto">See All</p>
        <ChevronRight className="text-deftext"/>
      </div>
    </div>
  )
}