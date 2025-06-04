import { Plus } from "lucide-react";

export default function FoodBanner({ title, price, image }) {
    return (
        <div className="w-[153px] h-fit shadow rounded-[25px] py-4 px-3 flex flex-col">
            <img src={image} alt={title} className="w-full h-[61px] object-cover rounded-xl ml-1 shrink-0" />
            <p className="text-[15px] font-bold text-[#31343D] mt-4">{title}</p>
            <p className="text-[13px] text-[#646982] mt-1.5">Better Burger</p>
            <div className="h-fit w-full flex items-center">
                <p className="text-[#181C2E] text-base font-bold">{price}</p>
                <div className="ml-auto h-8 w-8 bg-[#160F29] rounded-full flex items-center justify-center">
                    <Plus className="h-4 w-4 text-white" />
                </div>
            </div>
        </div>
    );
}