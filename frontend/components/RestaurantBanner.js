import { Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function RestaurantBanner({title, rating, tag, image}) {
    const router = useRouter()
    return (
        <div className="h-fit w-full flex flex-col cursor-pointer" onClick={() => router.push("/main/restaurant")}>
            {/* <div className="h-[137px] w-full bg-icon rounded-[10px] mt-5"></div> */}
            <img src={image} className="h-[137px] w-full rounded-[10px] mt-5 object-cover"/>
            <div className="w-full h-fit mt-2 flex items-center">
                <p className="text-xl text-[#181C2E]">{title}</p>
                <Star className="text-[#FFB800] h-4 w-4 ml-auto" />
                <p className="font-bold text-base text-[#181C2E]">{rating}</p>
            </div>
            <p className="text-sm text-deftext mt-1.5">{tag}</p>
        </div>
    )
}