import Link from "next/link";
import Image from "next/image";
import card from "@/public/img/card-birthday.jpg";
import copy from "@/public/img/copy.svg";
import more from "@/public/img/more.svg";
import { Pagination } from "@/app/components/Pagination";
const BirthdayWish = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[22px] mb-2 md:mb-6">
        {wishes.map((wish, index) => (
          <div
            key={index}
            className="rounded-[10px] overflow-hidden border border-[#E2E8F0]"
          >
            <div className="relative">
              <Image
                src={card}
                alt="icon"
                className="object-cover h-[139px] lg:h-[163px] w-full"
              />
              <div className="border border-[#CBD5E1] bg-white rounded-md size-6 md:size-[30px] flex justify-center items-center absolute top-[10px] right-[10px] z-[1] hover:opacity-70">
                <Image
                  src={more}
                  alt="icon"
                  className="h-3 md:h-[18px] brightness-[0.1]"
                />
              </div>
            </div>
            <div className="p-[11px_12px_14px] md:p-[13px_16px_15px]">
              <button className="p-[7px_8px] md:p-2 md:w-full bg-[#DCFCE7] rounded-[30px] !leading-none font-onest text-xs font-bold text-[#16A34A] mb-[10px] md:mb-[13px] hover:bg-[#16A34A] hover:text-[#DCFCE7] transition-all">
                {wish.status}
              </button>
              <p className="text-[#1E293B] text-sm font-semibold !leading-none font-onest mb-[5px]">
                {wish.name}
              </p>
              <div className="flex flex-row justify-between items-center gap-2 mb-[13px] md:mb-[17px]">
                <Link
                  href="/"
                  className="text-[#5990E9] font-onest text-xs md:text-sm !leading-none font-normal underline w-[85%]"
                >
                  {wish.link}
                </Link>
                <Image
                  src={copy}
                  alt="icon"
                  className="size-4 md:size-5 hover:opacity-70 cursor-pointer"
                />
              </div>
              <span className="text-[#1E293B] font-onest text-sm md:text-base !leading-none font-bold">
                {wish.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Pagination/>
    </div>
  );
};

export default BirthdayWish;
const wishes = [
  {
    name: "Sohaib Rumi",
    link: "https://happy-bithday.com",
    price: "$3.00",
    status: "Active",
  },
  {
    name: "Sohaib Rumi",
    link: "https://happy-bithday.com",
    price: "$5.00",
    status: "Inactive",
  },
  {
    name: "Sohaib Rumi",
    link: "https://happy-bithday.com",
    price: "$4.00",
    status: "Active",
  },
  {
    name: "Sohaib Rumi",
    link: "https://happy-bithday.com",
    price: "$2.50",
    status: "Active",
  },
  {
    name: "Sohaib Rumi",
    link: "https://happy-bithday.com",
    price: "$3.00",
    status: "Active",
  },
  {
    name: "Sohaib Rumi",
    link: "https://happy-bithday.com",
    price: "$5.00",
    status: "Inactive",
  },
  {
    name: "Sohaib Rumi",
    link: "https://happy-bithday.com",
    price: "$4.00",
    status: "Active",
  },
  {
    name: "Sohaib Rumi",
    link: "https://happy-bithday.com",
    price: "$2.50",
    status: "Active",
  },
];
