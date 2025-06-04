export default function Tag({ text, selected }) {
    if (!selected) {
        return (
            <div className="h-fit w-fit px-5 py-3.5 bg-white border-2 border-[#ECECEC] rounded-full">
                <p className="text-[#181C2E] text-base">{text}</p>
            </div>
        )
    } else {
        return (
            <div className="h-fit w-fit px-5 py-3.5 bg-[#160F29] rounded-full">
                <p className="text-white text-base">{text}</p>
            </div>
        )
    }
}