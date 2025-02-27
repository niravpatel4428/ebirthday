import Link from "next/link";
import Image from "next/image";
import plus from "../../public/img/plus.svg";
import noti from "../../public/img/noti.svg";
import animae from "../../public/img/animae.jpg";
import card from "../../public/img/card-birthday.jpg";
import copy from "../../public/img/copy.svg";
import more from "../../public/img/more.svg";
import { Pagination } from "../components/Pagination";
import search from "../../public/img/search.svg";
import DashboardLayout from "../Layouts/DashboardLayout";

const BirthdayWish = () => {
  return (
    <DashboardLayout>
      {/* header */}
      <div className="p-[24px_16px_19px] md:p-[20px] max-md:border-t max-md:border-b border-[#E2E8F0] flex items-center justify-between">
        <p className="font-onest font-medium text-black text-base lg:text-lg capiatalize">
          Birthday Wishes
        </p>
        <div className="flex flex-row gap-[13px]">
          <Link
            href="/newwish"
            className="bg-orange rounded-[42px] p-[9px_14px_9px_11px] text-white text-xs md:text-sm !leading-none font-onest font-bold inline-flex items-center gap-[5px] hover:bg-orange/70 transition-all duration-500"
          >
            <Image
              src={plus}
              alt="icon"
              className="object-contain size-[18px] md:size-6"
            />
            <span>Create New Wish</span>
          </Link>
          <div className="size-10 lg:size-[49px] rounded-full border border-slate hidden lg:flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={noti}
              alt="icon"
              className="object-contain size-[22px] rounded-full"
            />
          </div>
          <div className="size-10 lg:size-[49px] rounded-full border border-slate hidden lg:flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={animae}
              alt="icon"
              className="object-contain size-fit md:size-[44px] rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Search part */}
      <div className="p-[22px_16px] lg:p-[25px_23px] flex items-center justify-between">
        <div>
          <h4 className="text-black font-onest text-base font-bold mb-1">
            All wishes
          </h4>
          <p className="font-onest text-sm text-[#64748B]">
            You have currently <span className="font-bold text-black">345</span>{" "}
            wishes
          </p>
        </div>
        <div className="w-full max-w-[380px] relative max-lg:hidden">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search wishes..."
            className="p-4 pl-12 w-full border border-[#E2E8F0] rounded-[32px] text-sm text-[#0F172A] font-normal font-onest outline-none"
          />
          <Image
            src={search}
            alt="img"
            className="size-5 absolute top-1/2 -translate-y-1/2 left-4"
          />
        </div>
        <div className="border border-[#E2E8F0] outline-none cursor-pointer rounded-full size-[46px] flex lg:hidden justify-center items-center">
          <Image src={search} alt="icon" className="size-5" />
        </div>
      </div>
      {/* cards */}
      <div className="relative md:px-4 lg:px-[23px]">
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
        <Pagination />
      </div>
    </DashboardLayout>
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
    status: "Active",
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
    status: "Active",
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
