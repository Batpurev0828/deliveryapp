"use client"
import { Ubuntu } from "next/font/google"
import { ChevronLeft, Plus, Minus } from "lucide-react"
import { useRouter } from "next/navigation"
import Button from "@/components/Button"
import CartItem from "@/components/CartItem"

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function Home() {
  const router = useRouter()
  return (
    <div className={`${ubuntu.className} bg-[#160F29] min-h-screen h-fit w-full flex flex-col px-6 py-[52px] pb-[240px]`}> {/* Added bottom padding to accommodate fixed footer */}
      <div className="w-full h-fit flex items-center">
        <button className="h-12 w-12 bg-[#45414e] rounded-full flex items-center justify-center cursor-pointer" onClick={() => router.back()}>
          <ChevronLeft size={24} className="text-white" />
        </button>
        <p className="text-xl text-white ml-4 text-[17px]">Cart</p>
        <p className="ml-auto text-sm text-primary">EDIT ITEMS</p>
      </div>
      <div className="flex flex-col w-full h-fit mt-5 space-y-8">
        <CartItem title={"Chicken Burger"} price={"$40"} image={"https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"}/>
        <CartItem title={"Beef Burger"} price={"$40"} image={"https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg?im=AspectCrop=(16,9);"}/>
        <CartItem title={"Cheese Burger"} price={"$40"} image={"https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"}/>
        <CartItem title={"Normal Burger"} price={"$40"} image={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"}/>
        <CartItem title={"Hamburger"} price={"$40"} image={"https://www.certifiedangusbeef.com/_next/image?url=https%3A%2F%2Fappetizing-cactus-7139e93734.media.strapiapp.com%2FClassic_Smashed_Burger_111c4bfdb7.jpeg&w=1920&q=75"}/>
        <CartItem title={"Whopper Burger"} price={"$40"} image={"https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg?im=AspectCrop=(16,9);"}/>
        <CartItem title={"Bacon Burger"} price={"$40"} image={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"}/>
        <CartItem title={"Beef Burger"} price={"$40"} image={"https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg?im=AspectCrop=(16,9);"}/>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-[184px] bg-icon rounded-t-3xl p-6">
        <div className="h-fit w-fit flex items-center">
          <p className="text-deftext text-sm">TOTAL: </p>
          <p className="text-[#181C2E] text-[30px] ml-2">$800 </p>
        </div>
        <div className="h-6"></div>
        <Button text={"PLACE ORDER"} nav={"/main/payment"} />
      </div>
    </div>
  )
}
