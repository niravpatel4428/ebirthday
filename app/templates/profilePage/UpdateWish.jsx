"use client";
import { useState } from "react";
import Image from "next/image";
import plus from "@/public/img/plus.svg";
import noti from "@/public/img/noti.svg";
import animae from "@/public/img/animae.jpg";
import usergroup from "@/public/img/usergroup.svg";
import shield from "@/public/img/shield.svg";
import checkOrange from "@/public/img/checkOrange.svg";
import search from "@/public/img/search.svg";
import card from "@/public/img/card-birthday.jpg";
import Link from "next/link";

const UpdateWish = () => {
  const [selected, setSelected] = useState("public");
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
          <li className="relative font-onest font-medium text-[#94A3B8] text-sm md:text-base capiatalize after:absolute after:-right-5 after:top-1/2 after:-translate-y-1/2 after:content-['/'] after:color-[#94A3B8]">Birthday  Wishes</li>
          <li className="relative font-onest font-medium text-[#94A3B8] text-sm md:text-base capiatalize after:absolute after:-right-5 after:top-1/2 after:-translate-y-1/2 after:content-['/'] after:color-[#94A3B8]">Wish</li>
          <li className="relative font-onest font-medium text-black text-sm md:text-base capiatalize after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:content-['/'] after:color-[#94A3B8] last:after:hidden">Update Wish</li>
        </ul>
        
        <div className="flex flex-row gap-[13px]">
          <Link
            href="/"
            className="bg-orange max-md:size-10 max-md:p-0 max-md:justify-center rounded-[42px] p-[9px_14px_9px_11px] text-white text-xs md:text-sm !leading-none font-onest font-bold inline-flex items-center gap-[5px] hover:bg-orange/70 transition-all duration-500"
          >
            <Image src={plus} alt="icon" className="object-contain size-[18px] md:size-6" />
            <span className="max-md:hidden">Birthday  Wishes</span>
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
      <div className="relative bg-white border border-[#E2E8F0] max-md:border-x-0 max-md:border-b-0 md:rounded-[15px] p-[24px_16px_44px] md:p-[20px_20px_52px]">
        <div className="flex flex-col gap-5 md:gap-[25px]">
          {/* Birthday celebrant */}
          <div className="flex flex-col gap-2 w-full  ">
            <p className="text-[#1E293B] text-sm font-onest font-bold">
              Birthday celebrant
            </p>
            <input
              type="text"
              placeholder="Onemore"
              className="border border-[#E2E8F0] rounded-[10px] p-[18px_17px] md:p-[18px_25px] outline-none font-onest text-[#64748] text-sm font-normal"
            />
          </div>

          {/* Public / Private Domain Option */}
          <div>
            <p className="text-[#1E293B] text-sm font-onest font-bold">
              Can make public wishes
            </p>
            <div className="grid md:grid-cols-2 gap-[14px] mt-4">
              <div
                className={`flex justify-between items-center gap-3 p-[14px_17px] border rounded-lg cursor-pointer transition-all ${
                  selected === "private"
                    ? "border-[#ED6F4D]"
                    : "border-[#E2E8F0]"
                }`}
                onClick={() => setSelected("private")}
              >
                <div className="flex flex-row items-center gap-3">
                  <Image src={shield} alt="shield" className="size-6" />
                  <div>
                    <h3 className="font-semibold font-onest text-sm text-[#18181B]">
                      Private domain only
                    </h3>
                    <p className="text-sm text-[#64748B] font-onest font-normal">
                      Only users having private domain URL would be able to make
                      wishes
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full border border-[#CBD5E1] checked:bg-slate-800 checked:border-none"
                      id="check-custom-icon"
                      checked={selected === "private"}
                      readOnly
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6">
                      <Image src={checkOrange} alt="icon" className="w-full" />
                    </span>
                  </label>
                </div>
              </div>
              <div
                className={`flex justify-between items-center gap-3 p-[14px_17px] border rounded-lg cursor-pointer transition-all ${
                  selected === "public"
                    ? "border-[#ED6F4D]"
                    : "border-[#E2E8F0]"
                }`}
                onClick={() => setSelected("public")}
              >
                <div className="flex flex-row items-center gap-3">
                  <Image src={usergroup} alt="shield" className="size-6" />
                  <div className="flex-1">
                    <h3 className="font-semibold font-onest text-sm text-[#18181B]">
                      Public domain
                    </h3>
                    <p className="text-sm text-[#64748B] font-onest font-normal">
                      All users having public domain would be able to make
                      wishes
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full border border-[#CBD5E1] checked:bg-slate-800 checked:border-none"
                      id="check-custom-icon"
                      checked={selected === "public"}
                      readOnly
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6">
                      <Image src={checkOrange} alt="icon" className="w-full" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Choose Template */}
          <div>
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
          </div>

          {/* Extra wish */}
          <div>
            <p className="text-[#1E293B] text-sm font-onest font-bold mb-2">
              Extra wish
            </p>
            <div className="w-full">
              <textarea
                name="extrawish"
                id="extrawish"
                placeholder="Please enter the extra wish message, maximum 500 characters"
                maxLength={500}
                className="p-[19px_25px] w-full border border-[#E2E8F0] rounded-[10px]"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-row flex-wrap-reverse justify-end gap-[14px]">
            <button className="p-[13px_37px] rounded-[50px] bg-[#E2E8F0] hover:bg-[#e2e8f0aa] text-black text-base font-normal transition-all max-md:w-full max-md:max-w-[127px] w-fit">
              Cancel
            </button>
            <button className="p-[13px_37px] bg-orange hover:bg-orange/70 rounded-[50px] text-white text-base font-normal transition-all max-md:w-full max-md:max-w-[256px] w-fit">
              Update Wish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateWish;
