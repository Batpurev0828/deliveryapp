import { Ubuntu } from "next/font/google"
const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
})

export default function FoodTag({ text }) {
    return (
        <div className={`${ubuntu.className} h-[60px] w-fit shrink-0 py-2 pl-2 pr-3 flex justify-center items-center shadow rounded-full space-x-3`}>
            <div className="h-[44px] w-[44px] bg-icon rounded-full"></div>
            <p className="text-sm font-bold text-[#32343E]">{text}</p>
        </div>
    )
}