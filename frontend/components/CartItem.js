"use client"
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
export default function CartItem({ title, price, image}) {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="w-full h-[117px] flex">
            <img src={image} alt={title} className="w-[132px] h-[117px] rounded-xl object-cover" />
            <div className="flex flex-col h-[117px] w-[126px] ml-6">
                <p className="text-[18px]">{title}</p>
                <p className="font-bold text-[20px] mt-auto">{price}</p>
                <div className="flex h-fit w-fit space-x-4 mt-3 items-center">
                    <div className="h-[22px] w-[22px] bg-[#45414e] rounded-full flex justify-center items-center cursor-pointer" onClick={() => {setQuantity(quantity - 1)}}><Minus className="text-white w-4 h-4" /></div>
                    <p className="font-bold text-base">{quantity}</p>
                    <div className="h-[22px] w-[22px] bg-[#45414e] rounded-full flex justify-center items-center cursor-pointer" onClick={() => {setQuantity(quantity + 1)}}><Plus className="text-white w-4 h-4" /></div>
                </div>
            </div>
        </div>
    )
}