"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import plus from "../../public/img/plus.svg";
import noti from "../../public/img/noti.svg";
import animae from "../../public/img/animae.jpg";
import search from "../../public/img/search.svg";
import more from "../../public/img/more.svg";
import checked from "../../public/img/checked.svg";
import { Pagination } from "../components/Pagination";
import DashboardLayout from "../Layouts/DashboardLayout";
const wishes = () => {
  const [selected, setSelected] = useState([]);
  const wishes = new Array(8).fill({
    name: "Sohaib Rumi",
    domain: "https://happy-birthday.com",
    status: "Active",
  });

  // Handle select/deselect all
  const toggleSelectAll = () => {
    if (selected.length === wishes.length) {
      setSelected([]);
    } else {
      setSelected(wishes.map((_, index) => index));
    }
  };

  // Handle individual checkbox toggle
  const toggleSelect = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <DashboardLayout>
      <div className="lg:p-5">
        {/* header */}
        <div className="p-[20px_16px_19px] lg:px-[20px] max-lg:border-t  border-[#E2E8F0] flex items-center justify-between">
          <p className="font-onest font-medium text-black text-base lg:text-lg capiatalize">
            Birthday Wishes
          </p>
          <div className="flex flex-row gap-[13px]">
            <Link
              href="/newWish"
              className="bg-orange rounded-[42px] p-[9px_14px_9px_11px] text-white text-xs md:text-sm !leading-none font-onest font-bold inline-flex items-center gap-[5px] hover:bg-orange/70 transition-all duration-500"
            >
              <Image
                src={plus}
                alt="icon"
                className="object-contain size-[18px] md:size-6"
              />
              Create New Wish
            </Link>
            <div className="size-10 md:size-[49px] rounded-full border border-slate hidden lg:flex justify-center items-center hover:bg-slate transition-all duration-500">
              <Image
                src={noti}
                alt="icon"
                className="object-contain size-[22px] rounded-full"
              />
            </div>
            <div className="size-10 md:size-[49px] rounded-full border border-slate hidden lg:flex justify-center items-center hover:bg-slate transition-all duration-500">
              <Image
                src={animae}
                alt="icon"
                className="object-contain size-fit md:size-[44px] rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="border-t lg:border border-[#E2E8F0] lg:rounded-[10px]">
          {/* Search part */}
          <div className="p-[22px_16px] md:p-[25px_23px] flex items-center justify-between">
            <div>
              <h4 className="text-black font-onest text-base font-bold mb-1">
                All wishes
              </h4>
              <p className="font-onest text-sm text-[#64748B]">
                You have currently{" "}
                <span className="font-bold text-black">345</span> wishes
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
          {/* table part */}
          {/* Mobile-view */}
          <div className="flex lg:hidden flex-col gap-[17px] px-4 mb-[30px]">
            {wishes.map((wish, index) => (
              <div
                key={index}
                className="border border-[#E2E8F0] rounded-[10px] p-[15px]"
              >
                <div className="flex flex-col gap-[17px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-[9px]">
                      <label className="flex items-center cursor-pointer h-[18px] w-[18px] overflow-hidden relative mx-auto">
                        <input
                          type="checkbox"
                          className="peer h-[18px] w-[18px] cursor-pointer rounded-md appearance-none border border-[#475569] checked:bg-[#475569] checked:border-[#475569]"
                          onChange={() => toggleSelect(index)}
                          checked={selected.includes(index)}
                        />
                        <span className="absolute text-white opacity-0 rounded-md peer-checked:opacity-100 h-[18px] w-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <Image src={checked} alt="checked" />
                        </span>
                      </label>
                      <span className="p-[10px_10px] text-[#16A34A] bg-[#DCFCE7] rounded-[30px] font-onest text-xs font-bold !leading-[8px]">
                        {wish.status}
                      </span>
                    </div>
                    <div>
                      <button className="size-7 flex justify-center items-center md:size-[37px] rounded-[10px] border border-[#CBD5E1] hover:bg-[#CBD5E1]">
                        <Image
                          src={more}
                          alt="icon"
                          className="object-contain size-4"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="flex flex-col gap-[7px]">
                      <span className="text-[#1E293B] font-onest text-xs md:text-sm font-semibold">
                        Celebrant Name
                      </span>
                      <p className=" text-[#1E293B] text-sm font-onest font-normal">
                        {wish.name}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <span className="text-[#1E293B] font-onest text-sm font-semibold">
                        Domain Name
                      </span>
                      <Link
                        href={wish.domain}
                        className="text-[#5990E9] text-sm font-onest font-normal !leading-tight underline-offset-1 underline line-clamp-1"
                        target="_blank"
                      >
                        {wish.domain}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Tablet/Desktop > 768 */}
          <div className="hidden lg:block">
            <table className="w-full table-auto ">
              <thead className="bg-[#F1F5F9]">
                <tr className="text-left text-gray-600 text-sm">
                  <th className="w-[8%] xl:w-[5%] py-4 px-2 border-r border-[#E2E8F0] text-center">
                    <label className="flex items-center cursor-pointer h-[22px] w-[22px] overflow-hidden relative mx-auto">
                      <input
                        type="checkbox"
                        className="peer h-[22px] w-[22px] cursor-pointer rounded-md appearance-none border border-[#475569] checked:bg-[#475569] checked:border-[#475569]"
                        id="check1"
                        onChange={toggleSelectAll}
                        checked={selected.length === wishes.length}
                      />
                      <span className="absolute text-white opacity-0 rounded-md peer-checked:opacity-100 h-[18px] w-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image src={checked} alt="checked" />
                      </span>
                    </label>
                  </th>
                  <th className="w-[23%] xl:w-[20%] py-4 px-2 border-r border-[#E2E8F0] text-[#1E293B] font-onest text-sm font-semibold">
                    Celebrant Name
                  </th>
                  <th className="w-[40%] py-4 px-2 border-r border-[#E2E8F0] text-[#1E293B] font-onest text-sm font-semibold text-center">
                    Domain Name
                  </th>
                  <th className="w-[20%] xl:w-[25%] py-4 px-2 border-r border-[#E2E8F0] text-[#1E293B] font-onest text-sm font-semibold text-center">
                    Status
                  </th>
                  <th className="w-[10%] py-4 px-2 border-r  text-[#1E293B] font-onest text-sm font-semibold text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishes.map((wish, index) => (
                  <tr
                    key={index}
                    className="border-t text-gray-700 text-sm pt-2 last:border-b last:border-[#E2E8F0]"
                  >
                    <td className="p-[18px_8px] border-r border-[#E2E8F0] text-center">
                      <label className="flex items-center cursor-pointer h-[22px] w-[22px] overflow-hidden relative mx-auto">
                        <input
                          type="checkbox"
                          className="peer h-[22px] w-[22px] cursor-pointer rounded-md appearance-none border border-[#475569] checked:bg-[#475569] checked:border-[#475569]"
                          onChange={() => toggleSelect(index)}
                          checked={selected.includes(index)}
                        />
                        <span className="absolute text-white opacity-0 rounded-md peer-checked:opacity-100 h-[18px] w-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <Image src={checked} alt="checked" />
                        </span>
                      </label>
                    </td>
                    <td className="p-[18px_8px] border-r border-[#E2E8F0] text-[#1E293B] text-sm font-onest font-normal line-clamp-1">
                      {wish.name}
                    </td>
                    <td className="p-[18px_8px] border-r border-[#E2E8F0] text-center">
                      <Link
                        href={wish.domain}
                        className="text-[#5990E9] w-fit mx-auto text-sm font-onest font-normal !leading-tight underline-offset-1 underline line-clamp-1"
                        target="_blank"
                      >
                        {wish.domain}
                      </Link>
                    </td>
                    <td className="p-[18px_8px] border-r border-[#E2E8F0] text-center">
                      <span className="p-[6px_15px] text-[#16A34A] bg-[#DCFCE7] rounded-[30px] font-onest text-xs font-bold !leading-[8px]">
                        {wish.status}
                      </span>
                    </td>
                    <td className="p-[18px_8px] border-r border-[#E2E8F0] text-center">
                      <button className="flex justify-center items-center mx-auto size-[37px] rounded-[10px] border border-[#CBD5E1] hover:bg-[#CBD5E1]">
                        <Image
                          src={more}
                          alt="icon"
                          className="object-contain size-[22px]"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default wishes;
