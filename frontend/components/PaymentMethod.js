export default function PaymentMethod({ type, image, selected, onClick }) {
  const baseClasses =
    "flex flex-col w-[85px] h-fit items-center cursor-pointer";

  if (selected) {
    return (
      <div className={baseClasses} onClick={onClick}>
        <div className="w-full h-18 bg-white rounded-[10px] p-2 border-2 border-primary">
          <img
            className="w-full h-full object-contain rounded-[10px]"
            src={image}
          />
        </div>
        <p className="text-sm text-[#464E57] mt-1">{type}</p>
      </div>
    );
  } else {
    return (
      <div className={baseClasses} onClick={onClick}>
        <div className="w-full h-18 bg-[#F0F5FA] rounded-[10px] p-2">
          <img
            className="w-full h-full object-contain rounded-[10px]"
            src={image}
          />
        </div>
        <p className="text-sm text-[#464E57] mt-1">{type}</p>
      </div>
    );
  }
}
