import { Ubuntu } from "next/font/google"
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export default function InputBox({ title, block, content }) {
    return (
        <>
            <p className={`text-[13px] ${ubuntu.className} text-[#31343D]`}>{title}</p>
            {block === false ?
                <input className="text-deftext w-full h-[62px] mt-[9px] bg-[#F0F5FA] rounded-xl px-4 flex items-center"/> :
                <div className="text-deftext w-full h-[62px] mt-[9px] bg-[#F0F5FA] rounded-xl px-4 flex items-center">{content}</div>}
        </>
    )
}