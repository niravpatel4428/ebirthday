import React from "react";
import Image from "next/image";
import search from "@/public/img/search.svg";
import warning from "@/public/img/warning.svg";
import card from "@/public/img/card-birthday.jpg";

const NewWish = () => {
  const cards = [
    { name: "Name goes here", status: "Selected" },
    { name: "Name goes here", status: "" },
    { name: "Name goes here", status: "" },
    { name: "Name goes here", status: "" },
    { name: "Name goes here", status: "" },
  ];

  return (
    <div className="relative p-[24px_16px_44px_16px] md:p-[20px_16px_30px_20px]">
      <div className="flex flex-col gap-2 mb-5">
        <label
          htmlFor="celebration"
          className="text-[#1E293B] text-sm font-onest font-bold"
        >
          Birthday celebrant
        </label>
        <input
          type="text"
          name="ceebartion"
          id="celebration"
          placeholder="Enter the name of the person who celebrates birthday"
          className="text-[#64748B] font-onest text-sm font-normal p-[17px_25px] rounded-[10px] border border-[#E2E8F0] outline-none"
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label
          htmlFor="subdomain"
          className="text-[#1E293B] text-sm font-onest font-bold"
        >
          Subdomain Name
        </label>
        <input
          type="text"
          name="subdomain"
          id="subdomain"
          placeholder="https://subdomain.happy-ebirthday.com"
          className="text-[#64748B] font-onest text-sm font-normal p-[17px_25px] rounded-[10px] border border-[#E2E8F0] outline-none"
        />
      </div>
      <div className="flex flex-row justify-between items-end md:items-center gap-2">
        <div className="flex flex-col gap-2">
          <span className="text-[#1E293B] text-sm font-onest font-bold">
            Choose Template
          </span>
          <div className="flex flex-row gap-[10px]">
            <span className="p-3 md:p-[12px_14px] border border-[#E2E8F0] text-[#1E293B] text-xs font-normal font-onest !leading-[80%] hover:bg-[#E2E8F0] rounded-[40px] transition-all">
              For Him
            </span>
            <span className="p-3 md:p-[12px_14px] border border-[#E2E8F0] text-[#1E293B] text-xs font-normal font-onest !leading-[80%] hover:bg-[#E2E8F0] rounded-[40px] transition-all">
              For Her
            </span>
            <span className="p-3 md:p-[12px_14px] border border-[#E2E8F0] text-[#1E293B] text-xs font-normal font-onest !leading-[80%] hover:bg-[#E2E8F0] rounded-[40px] transition-all">
              For Children's
            </span>
          </div>
        </div>
        <div className="w-full max-w-[46px] md:max-w-[417px] relative border border-[#E2E8F0] rounded-[32px] max-md:size-[46px] max-md:flex max-md:justify-center max-md:items-center">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search wishes..."
            className="py-[14px] pl-12 pr-4 w-full text-sm text-[#0F172A] font-normal font-onest !leading-[85%] rounded-[32px] outline-none max-md:hidden"
          />
          <Image
            src={search}
            alt="img"
            className="size-5 relative  md:absolute md:top-1/2 md:-translate-y-1/2 md:left-4"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-4 md:mt-5">
        {cards.map((cardData, index) => (
          <div key={index} className="flex flex-col relative">
            <div className="relative w-full max-w-[188px] md:max-w-[214px] h-[196px] md:h-[225px]">
              <Image
                src={card}
                alt="icon"
                className="object-cover h-full w-full rounded-[10px]"
              />
              {cardData.status.length > 1 ? (
                <span className="absolute top-[10px] left-[10px] font-onest font-bold text-xs text-black !leading-[85%] bg-white rounded-[40px]  p-[9px] md:p-[11px_9px]">
                  {cardData.status}
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="textbase font-onest font-semibold capitalize text-[#1e1e1e] mt-3">
              {cardData.name}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[528px]">
        <div className="bg-[#FFFBEB] rounded-[10px] p-[10px_13px] flex gap-[9px] items-center mt-6">
          <Image src={warning} alt="icon" className="size-[22px]" />
          <p className="text-sm font-normal font-onest text-[#451A03]">
            You can not change the domain after purchase, please choose
            carefully.
          </p>
        </div>

        <div className="mt-8">
          <h6 className="text-[#1E293B] text-sm font-onest font-bold">
            Order Summary
          </h6>
          <div className="flex justify-between mt-[22px]">
            <div>
              <p className="text-[#64748B] text-sm font-onest font-bold !leading-none mb-[7px]">
                Domain Name
              </p>
              <span className="text-[#1E293B] font-onest text-lg font-medium">
                Please enter
              </span>
            </div>
            <div>
              <p className="text-[#64748B] text-sm font-onest font-bold !leading-none mb-[7px]">
                Order Price
              </p>
              <span className="text-[#1E293B] font-onest text-lg font-medium">
                $3.00
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-[14px] mt-8 md:mt-16 xl:mt-[99px]">
        <button className="bg-[#E2E8F0] hover:bg-[#e2e8f0b7] p-[15px_37px] rounded-[50px] text-black font-onest text-base font-bold">
          Cancel
        </button>
        <button className="bg-orange hover:bg-orange/70 text-white p-[15px_37px] rounded-[50px] font-onest text-base font-bold">
          Make a Wish
        </button>
      </div>
    </div>
  );
};

export default NewWish;
