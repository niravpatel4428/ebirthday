"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import plus from "../../public/img/plus.svg";
import noti from "../../public/img/noti.svg";
import animae from "../../public/img/animae.jpg";
import search from "../../public/img/search.svg";
import checked from "../../public/img/checked.svg";
import download from "../../public/img/download.svg";
import { Pagination } from "../components/Pagination";
import more from "../../public/img/more.svg";
import DashboardLayout from "../Layouts/DashboardLayout";

const Invoices = () => {
  const [selected, setSelected] = useState([]);
  // Handle select/deselect all
  const toggleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(data.map((_, index) => index));
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
      {/* header */}
      <div className="p-[24px_16px_19px] md:p-[20px] max-md:border-t border-[#E2E8F0] flex items-center justify-between">
        <p className="font-onest font-medium text-black text-base lg:text-lg capiatalize">
          invoices
        </p>
        <div className="flex flex-row gap-[13px]">
          <Link
            href="/"
            className="bg-orange rounded-[42px] p-[9px_14px_9px_11px] text-white text-xs md:text-sm !leading-none font-onest font-bold inline-flex justify-center items-center gap-[5px] hover:bg-orange/70 transition-all duration-500"
          >
            <Image
              src={plus}
              alt="icon"
              className="object-contain size-[18px] md:size-6"
            />
            <span>Create New Wish</span>
          </Link>
          <div className="size-10 lg:size-10 rounded-full border border-slate hidden lg:flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={noti}
              alt="icon"
              className="object-contain size-[22px] rounded-full"
            />
          </div>
          <div className="size-10 lg:size-10 rounded-full border border-slate hidden lg:flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={animae}
              alt="icon"
              className="object-contain size-fit md:size-[44px] rounded-full"
            />
          </div>
        </div>
      </div>
      {/* invoices */}
      <div className="relative bg-white border-[#E2E8F0]">
        {/* Search part */}
        <div className="p-[22px_16px] md:p-[25px_23px] flex items-center justify-between ">
          <div>
            <h4 className="text-black font-onest text-base font-bold mb-1">
              All invoices
            </h4>
            <p className="font-onest text-sm text-[#64748B]">
              You have currently{" "}
              <span className="font-bold text-black">345</span> invoices
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
          <button className="border border-[#E2E8F0] outline-none cursor-pointer rounded-full size-[46px] flex lg:hidden justify-center items-center">
            <Image src={search} alt="icon" className="size-5" />
          </button>
        </div>
        {/* Table Data >= Desktop */}
        <div className="w-full mx-auto hidden lg:block">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-300 bg-gray-100 px-4 py-2 font-medium text-gray-700">
            <div className="w-[20%] pr-1 flex flex-row items-center gap-2 ">
              <label className="flex items-center cursor-pointer h-[22px] w-[22px] overflow-hidden relative">
                <input
                  type="checkbox"
                  className="peer h-[22px] w-[22px] cursor-pointer rounded-md appearance-none border border-[#475569] checked:bg-[#475569] checked:border-[#475569]"
                  id="check1"
                  onChange={toggleSelectAll}
                  checked={selected.length === data.length}
                />
                <span className="absolute text-white opacity-0 rounded-md peer-checked:opacity-100 h-[18px] w-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src={checked} alt="checked" />
                </span>
              </label>
              <span className="text-[#1E293B] text-sm font-onest font-semibold">
                Invoice #
              </span>
            </div>
            <div className="w-[25%] pr-1">
              <span className="text-[#1E293B] text-sm font-onest font-semibold">
                Created Domain
              </span>
            </div>
            <div className="w-[20%] pr-1">
              <span className="text-[#1E293B] text-sm font-onest font-semibold">
                Date
              </span>
            </div>
            <div className="w-[12%] pr-1">
              <span className="text-[#1E293B] text-sm font-onest font-semibold">
                Price
              </span>
            </div>
            <div className="w-[15%] pr-1">
              <span className="text-[#1E293B] text-sm font-onest font-semibold">
                Status
              </span>
            </div>
            <div className="w-[7%] pr-1 text-start">
              <span className="text-[#1E293B] text-sm font-onest font-semibold">
                Actions
              </span>
            </div>
          </div>

          {/* Data Rows */}
          {data.map((invoice, index) => (
            <div
              key={invoice.id}
              className="flex justify-between items-center border-b border-gray-200 px-4 py-3"
            >
              <div className="w-[20%] pr-1 flex flex-row items-center gap-2 ">
                <label className="flex items-center cursor-pointer h-[22px] w-[22px] overflow-hidden relative">
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
                <span className="text-[#1E293B] text-sm font-onest font-normal line-clamp-1">
                  {invoice.name}
                </span>
              </div>
              <div className="w-[25%] pr-1 text-blue-500 underline cursor-pointer">
                <Link
                  href={invoice.domain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5990E9] text-sm font-onest font-normal underline line-clamp-1"
                >
                  {invoice.domain}
                </Link>
              </div>
              <div className="w-[20%] pr-1">
                <span className="text-[#1E293B] font-onest text-sm font-normal line-clamp-1">
                  {invoice.date}
                </span>
              </div>
              <div className="w-[12%] pr-1 overflow-hidden">
                <span className="text-[#1E293B] font-onest text-sm font-normal line-clamp-1">
                  {invoice.price}
                </span>
              </div>
              <div className="w-[15%] pr-1">
                <span className="p-[6px_21px] text-[#16A34A] text-xs/[90%] font-onest font-bold  bg-[#DCFCE7] rounded-[30px]">
                  {invoice.status}
                </span>
              </div>
              <div className="w-[7%] pr-1 flex justify-start">
                <button className="border border-[#CBD5E1] bg-transparent size-10 flex justify-center items-center rounded-[10px] hover:bg-[#CBD5E1]">
                  <Image src={download} alt="icon" className="size-[22px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Table Data >= Mobile */}
        <div className="flex lg:hidden flex-col gap-[15px] px-4 mb-[30px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="border border-[#E2E8F0] rounded-[10px] p-[15px]"
            >
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
                    Active{" "}
                  </span>
                </div>
                <div>
                  <button className="size-7 flex justify-center items-center md:size-[37px] rounded-[5px] border border-[#CBD5E1] hover:bg-[#CBD5E1]">
                    <Image
                      src={more}
                      alt="icon"
                      className="object-contain size-4"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap flex-row justify-between gap-4 mt-[17px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[#64748B] text-xs/[90%] font-semibold font-onest">
                    Invoice #
                  </p>
                  <span className="text-[#0F172A] text-sm font-normal font-onest">
                    Sohaib Rumi
                  </span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[#64748B] text-xs/[90%] font-semibold font-onest">
                    Created Domain
                  </p>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-[#5990E9] text-sm font-onest font-normal underline line-clamp-1"
                  >
                    https://happy-bithday.com
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap flex-row justify-between gap-4 mt-[17px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[#64748B] text-xs/[90%] font-semibold font-onest">
                    Date
                  </p>
                  <span className="text-[#0F172A] text-sm font-normal font-onest">
                    2024-11-11 12:13:43
                  </span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[#64748B] text-xs/[90%] font-semibold font-onest">
                    Price
                  </p>
                  <span className="text-[#0F172A] text-sm font-normal font-onest">
                    $3.30
                  </span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[#64748B] text-xs/[90%] font-semibold font-onest">
                    Actions
                  </p>
                  <button className="p-[6px_10px] rounded-[40px] bg-[#F1F5F9] hover:bg-[#d7e0e9ae] text-[#0F172A] text-xs font-onest font-normal flex flex-row items-center gap-[10px]">
                    Download PDF
                    <span>
                      <Image src={download} alt="icon" className="siz-[14px]" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <Pagination />
      </div>
    </DashboardLayout>
  );
};

export default Invoices;

const data = [
  {
    id: 1,
    name: "Sohaib Rumi",
    domain: "https://happy-birthday.com",
    date: "2024-11-11 12:13:43",
    price: "$3.30",
    status: "Paid",
  },
  {
    id: 2,
    name: "Sohaib Rumi",
    domain: "https://happy-birthday.com",
    date: "2024-11-11 12:13:43",
    price: "$3.30",
    status: "Paid",
  },
  {
    id: 3,
    name: "Sohaib Rumi",
    domain: "https://happy-birthday.com",
    date: "2024-11-11 12:13:43",
    price: "$3.30",
    status: "Paid",
  },
  {
    id: 4,
    name: "Sohaib Rumi",
    domain: "https://happy-birthday.com",
    date: "2024-11-11 12:13:43",
    price: "$3.30",
    status: "Paid",
  },
  {
    id: 5,
    name: "Sohaib Rumi",
    domain: "https://happy-birthday.com",
    date: "2024-11-11 12:13:43",
    price: "$3.30",
    status: "Paid",
  },
  {
    id: 6,
    name: "Sohaib Rumi",
    domain: "https://happy-birthday.com",
    date: "2024-11-11 12:13:43",
    price: "$3.30",
    status: "Paid",
  },
  {
    id: 7,
    name: "Sohaib Rumi",
    domain: "https://happy-birthday.com",
    date: "2024-11-11 12:13:43",
    price: "$3.30",
    status: "Paid",
  },
  {
    id: 8,
    name: "Sohaib Rumi",
    domain: "https://happy-birthday.com",
    date: "2024-11-11 12:13:43",
    price: "$3.30",
    status: "Paid",
  },
];
