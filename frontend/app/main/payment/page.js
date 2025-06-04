"use client"
import { Ubuntu } from "next/font/google"
import { useRouter } from "next/navigation"
import { ChevronLeft, Plus } from "lucide-react"
import PaymentMethod from "@/components/PaymentMethod"
import { useState } from "react"

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function Home() {
  const router = useRouter()
  const [method, setMethod] = useState("Visa");
  return (
    <div className={`min-h-screen h-fit w-screen flex flex-col px-6 py-14 bg-white ${ubuntu.className}`}>
      <div className="flex h-fit w-full items-center" onClick={() => router.back()} >
        <button className="w-12 h-12 bg-icon cursor-pointer rounded-full flex justify-center items-center">
          <ChevronLeft className="text-black w-6 h-6" />
        </button>
        <p className="text-[17px] text-[#181C2E] ml-4">Payment</p>
      </div>
      <div className="shrink-0 flex h-fit w-fit mt-[28px] space-x-4">
        <PaymentMethod type={"Cash"} onClick={() => setMethod("Cash")} selected={method === "Cash"} image={"https://download.logo.wine/logo/Cash_App/Cash_App-Logo.wine.png"} />
        <PaymentMethod type={"Visa"} onClick={() => setMethod("Visa")} selected={method === "Visa"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png"} />
        <PaymentMethod type={"MasterCard"} onClick={() => setMethod("MasterCard")} selected={method === "MasterCard"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"} />
        <PaymentMethod type={"PayPal"} onClick={() => setMethod("PayPal")} selected={method === "PayPal"} image={"https://brandlogos.net/wp-content/uploads/2021/11/paypal-logo.png"} />
      </div>
      {method === "Cash" ? (
        <div className="mt-6">
          <p className="text-[17px] text-[#181C2E]">Payment in cash is unavailable at the moment...</p>
        </div>
      ) : (
        <div className="flex flex-col w-full h-fit mt-[26px]">
          <div className="w-full h-fit flex flex-col bg-[#F4F5F7] rounded-[10px] px-5 pt-4 pb-[22px]">
            <p className="text-[#31343D] text-base font-bold">Soymbo's card</p>
            <div className="flex h-fit w-full mt-2">
              <p className="text-base text-deftext">*************</p>
              <p className="text-base text-[#31343D] ml-[5px]">436</p>
            </div>
          </div>
          <div className="mt-4 w-full h-fit flex flex-col bg-[#F4F5F7] rounded-[10px] px-5 pt-4 pb-[22px]">
            <p className="text-[#31343D] text-base font-bold">Chinguun's card</p>
            <div className="flex h-fit w-full mt-2">
              <p className="text-base text-deftext">*************</p>
              <p className="text-base text-[#31343D] ml-[5px]">436</p>
            </div>
          </div>
        </div>
      )}

      <button
        className="w-full h-[62px] bg-white border-2 text-primary border-primary rounded-[10px] mt-4 flex justify-center items-center hover:bg-primary hover:text-white transition-colors duration-300"

      >
        <div className="h-fit w-fit flex">
          <Plus className="w-5 h-5 mr-2" />
          <p className="text-sm font-bold">ADD NEW</p>
        </div>
      </button>
      
    </div>
  )
}
