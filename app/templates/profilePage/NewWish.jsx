import React from "react";
import Image from "next/image";
import Link from "next/link";
import plus from "@/public/img/plus.svg";
import noti from "@/public/img/noti.svg";
import animae from "@/public/img/animae.jpg";
import search from "@/public/img/search.svg";
import warning from "@/public/img/warning.svg";
import card from "@/public/img/card-birthday.jpg";

const NewWish = () => {
  const cards = [
    { name: "Name goes here", img: card, status: "Selected" },
    { name: "Name goes here", img: card, status: "" },
    { name: "Name goes here", img: card, status: "" },
    { name: "Name goes here", img: card, status: "" },
    { name: "Name goes here", img: card, status: "" },
  ];

  return (
    <>
      {/* header */}
      <div className="p-[24px_16px_19px] md:p-[20px] max-md:border-t border-[#E2E8F0] flex items-center justify-between">
        <ul className="flex flex-row gap-7">
          <li className="relative font-onest font-medium text-[#94A3B8] text-sm md:text-base capiatalize after:absolute after:-right-5 after:top-1/2 after:-translate-y-1/2 after:content-['/'] after:color-[#94A3B8]">
            Birthday Wishes
          </li>
          <li className="relative font-onest font-medium text-black text-sm md:text-base capiatalize after:absolute after:-right-5 after:top-1/2 after:-translate-y-1/2 after:content-['/'] after:color-[#94A3B8] last:after:hidden">
            New Wish
          </li>
        </ul>
        <div className="flex flex-row gap-[13px]">
          <Link
            href="/"
            className="bg-orange rounded-[42px] p-[9px_14px_9px_11px] text-white text-xs md:text-sm !leading-none font-onest font-bold inline-flex items-center gap-[5px] hover:bg-orange/70 transition-all duration-500"
          >
            <Image
              src={plus}
              alt="icon"
              className="object-contain size-[18px] md:size-6"
            />
            Create New Wish
          </Link>
          <div className="size-10 md:size-[49px] rounded-full border border-slate hidden md:flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={noti}
              alt="icon"
              className="object-contain size-[22px] rounded-full"
            />
          </div>
          <div className="size-10 md:size-[49px] rounded-full border border-slate hidden md:flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={animae}
              alt="icon"
              className="object-contain size-fit md:size-[44px] rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="relative p-[24px_16px_44px_16px] md:p-[20px_16px_30px_20px] border-t md:border border-[#E2E8F0]">
        {/* Birthday celebrant */}
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
        {/* Subdomain Name */}
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
        {/* Choose Template */}
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
              <div className="relative w-full h-[196px] md:h-[225px]">
                {/* <div className="relative w-full max-w-[188px] md:max-w-[214px] h-[196px] md:h-[225px]"> */}
                <Image
                  src={cardData.img}
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
              <p className="text-sm md:text-base font-onest font-semibold capitalize text-[#1e1e1e] mt-3">
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

          {/* Order Summary */}
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
        <div className="flex flex-row flex-wrap-reverse justify-end gap-[14px] mt-8 md:mt-16 xl:mt-[99px]">
          <button className="bg-[#E2E8F0] hover:bg-[#e2e8f0b7] p-[13px_37px] rounded-[50px] text-black font-onest text-base font-bold  max-md:w-full max-md:max-w-[127px] w-fit">
            Cancel
          </button>
          <button className="bg-orange hover:bg-orange/70 text-white p-[13px_37px] rounded-[50px] font-onest text-base font-bold  max-md:w-full max-md:max-w-[256px] w-fit">
            Make a Wish
          </button>
        </div>
      </div>
    </>
  );
};

export default NewWish;
