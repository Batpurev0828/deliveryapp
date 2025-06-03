"use client"
import { Ubuntu } from "next/font/google"
import { useRouter } from "next/navigation"
const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
})

export default function Button({ text, nav }) {
    const router = useRouter();
    return (
        <button className="cursor-pointer w-full h-[62px] bg-primary flex justify-center rounded-xl items-center" onClick={() => { if (nav) router.push(nav); else console.log("empty nav")}}>
            <p className={`${ubuntu.className} font-bold text-[14px] text-white`}>{text}</p>
        </button>
    )
}