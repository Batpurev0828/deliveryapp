"use client"
import { Ubuntu } from "next/font/google"
import { User, ShoppingCart, Search, ChevronRight, Star } from "lucide-react"
import FoodTag from "@/components/FoodTag"
import RestaurantBanner from "@/components/RestaurantBanner"
import { useRouter } from "next/navigation"
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})


export default function Home() {
  const router = useRouter()
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
        <div className="h-12 w-12 bg-[#181C2E] rounded-full ml-auto flex justify-center items-center cursor-pointer" onClick={() => router.push("/main/cart")}>
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
        <ChevronRight className="text-deftext" />
      </div>
      <div className="min-w-full w-fit space-x-2 flex mt-5">
        <FoodTag text={"All"} image={"https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?resize=768,574"}/>
        <FoodTag text={"Hot Dog"} image={"https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Mexican-Style-Hot-Dogs.jpg"}/>
        <FoodTag text={"Burger"} image={"https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"}/>
      </div>
      <div className="w-full h-fit flex mt-8 items-center">
        <p className="text-[#31343D] text-xl">Recommended</p>
        <p className="text-base text-[#676767] ml-auto">See All</p>
        <ChevronRight className="text-deftext" />
      </div>
      <RestaurantBanner title={"Better Burger"} rating={"4.7"} tag={"Burger - Soda - Meals"} image={"https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/a59ad38c-b188-4205-8fd8-049a97a80f3d.jpg"}/>
      <RestaurantBanner title={"Zochin Cafe"} rating={"4.7"} tag={"Buuz - Mongolian Foods"} image={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/6d/75/c6/caption.jpg?w=900&h=500&s=1"}/>
      <RestaurantBanner title={"KFC"} rating={"4.7"} tag={"Fried Chicken - Nuggets - Burger"} image={"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_610,q_75,w_910/v1/crm/yorkcountysc/KFC2_586e866e-5056-a36a-0bd0b2e6bd520e04.png"} />
      <RestaurantBanner title={"Yoshinoya"} rating={"4.7"} tag={"Japanese - Ramen - Broth"} image={"https://www.yoshinoya.com/assets/images/multilingual/thum01.jpg"}/>
      <RestaurantBanner title={"Cup Chicken"} rating={"4.7"} tag={"French Fries - Chicken - Tofu"} image={"https://curatedkitchenware.com/cdn/shop/articles/20221124144532-3-cup-chicken-1.png?v=1669327840"}/>

    </div>
  )
}