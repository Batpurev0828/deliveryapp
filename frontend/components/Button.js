import { Ubuntu } from "next/font/google"
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export default function Button({text}) {
    return(
        <button className="w-full h-[62px] bg-primary flex justify-center rounded-xl items-center">
            <p className={`${ubuntu.className} font-bold text-[14px] text-white`}>{text}</p>
        </button>
    )
}