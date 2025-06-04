"use client"
import { Ubuntu } from "next/font/google"
import { ChevronLeft } from "lucide-react"
import FoodBanner from "@/components/FoodBanner"
import Tag from "@/components/Tag"
import { useRouter } from "next/navigation"

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function Home() {
  const router = useRouter()
  return (
    <div className={`${ubuntu.className} bg-white min-h-screen h-fit w-full flex flex-col`}>
      <div className="relative w-full h-[321px]">
        <img
          src="https://nomoneynotime.com.au/uploads/recipes/shutterstock_257496871-1.jpg"
          className="w-full h-full object-cover rounded-b-3xl" />
        <button className="absolute top-[52px] left-[28px] bg-white bg-opacity-70 p-2 rounded-full cursor-pointer" onClick={() => router.back()}>
          <ChevronLeft size={24} className="text-black" />
        </button>
      </div>
      <div className="p-6 h-full w-full">
        <p className="text-xl text-[#181C2E] font-bold">Better Burger</p>
        <p className="text-sm text-deftext mt-2">Better Burger serves burgers and stuff. Plus soda. It’s probably good, idk. Never really tried it. Just some sample filler texts etc yada yada.</p>
        <div className="h-fit w-fit flex mt-8 space-x-3">
          <Tag text="Burgers" selected={true} />
          <Tag text="Sandwich" selected={false} />
          <Tag text="Pizza" selected={false} />
        </div>
        <p className="text-[#181C2E] text-xl mt-8">Burgers (4)</p>
        <div className="h-fit w-full grid grid-cols-2 grid-rows-2 gap-x-[21px] gap-y-4 mt-4">
          <FoodBanner title={"Chicken Burger"} price={"40$"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREj4DxOqKpRE6xq3SjofilczXo-B63oGzg6w&s"} />
          <FoodBanner title={"Beef Burger"} price={"40$"} image={"https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg?im=AspectCrop=(16,9);"}/>
          <FoodBanner title={"Normal Burger"} price={"40$"} image={"https://www.certifiedangusbeef.com/_next/image?url=https%3A%2F%2Fappetizing-cactus-7139e93734.media.strapiapp.com%2FClassic_Smashed_Burger_111c4bfdb7.jpeg&w=1920&q=75"} />
          <FoodBanner title={"Vegan Burger"} price={"40$"} image={"https://nomoneynotime.com.au/uploads/recipes/shutterstock_257496871-1.jpg"}/>
        </div>
      </div>
    </div>
  )
}
