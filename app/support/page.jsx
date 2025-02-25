"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardLayout from "../Layouts/DashboardLayout";
import plus from "../../public/img/plus.svg";
import noti from "../../public/img/noti.svg";
import animae from "../../public/img/animae.jpg";
import mail from "../../public/img/mail-orange.svg";
import phone from "../../public/img/phone-orange.svg";
import address from "../../public/img/address-orange.svg";
import arrow from "../../public/img/select-arrow-down.svg";
import mailsmall from "../../public/img/mail-small.svg";
import facebooksmall from "../../public/img/facebook-small.svg";
import instagram from "../../public/img/instagram.svg";
import tictok from "../../public/img/tictok.svg";
import youtube from "../../public/img/youtube.svg";
import vpn from "../../public/img/vpn.svg";

const Support = () => {
  const socialMediaLinks = [
    { src: mailsmall, alt: "Mail", href: "/" },
    { src: facebooksmall, alt: "Facebook", href: "/" },
    { src: instagram, alt: "Instagram", href: "/" },
    { src: tictok, alt: "TikTok", href: "/" },
    { src: youtube, alt: "YouTube", href: "/" },
    { src: vpn, alt: "VPN", href: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select an option");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <DashboardLayout>
      {/* header */}
      <div className="p-[24px_16px_19px] md:p-[20px] max-md:border-t border-[#E2E8F0] flex items-center justify-between">
        <p className="font-onest font-medium text-black text-base lg:text-lg capiatalize">
          Support
        </p>
        <div className="flex flex-row gap-[13px]">
          <Link
            href="/newWish"
            className="bg-orange rounded-[42px] p-[9px_14px_9px_11px] text-white text-xs md:text-sm !leading-none font-onest font-bold inline-flex justify-center items-center gap-[5px] hover:bg-orange/70 transition-all duration-500"
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
      {/* Support */}
      <div className="relative p-[20px_16px_44px] md:p-5 bg-white  lg:rounded-[10px]">
        <div className="grid lg:grid-cols-2 gap-[30px] md:gap-5 xl:gap-[163px]">
          <div className="w-full">
            <h6 className="font-onest text-black font-bold text-xl/none mb-5 md:mb-8">
              Support
            </h6>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="problem"
                  className="text-[#1E293B] font-onest text-sm font-bold"
                >
                  Select problem
                </label>
                <div className="relative inline-block text-start">
                  {/* Button to trigger dropdown */}
                  <button
                    className="w-full border border-[#E2E8F0] rounded-[10px] outline-none p-[18px_35px_18px_25px] cursor-pointer text-[#64748B] font-onest text-sm font-normal text-start relative"
                    onClick={toggleDropdown}
                  >
                    {selectedItem}
                    <span className="ml-2 absolute right-3 top-1/2 -translate-y-1/2">
                      <Image
                        src={arrow}
                        alt="icon"
                        className={`${isOpen && "rotate-180"} w-6 h-6`}
                      />
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <ul className="absolute left-0 right-0 py-2 h-32 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg">
                      <li
                        className="cursor-pointer hover:bg-gray-200 text-[#64748B] font-onest text-sm font-normal px-2 py-1"
                        onClick={() => handleSelect("Option 1")}
                      >
                        Option 1
                      </li>
                      <li
                        className="cursor-pointer hover:bg-gray-200 text-[#64748B] font-onest text-sm font-normal px-2 py-1"
                        onClick={() => handleSelect("Option 2")}
                      >
                        Option 2
                      </li>
                      <li
                        className="cursor-pointer hover:bg-gray-200 text-[#64748B] font-onest text-sm font-normal px-2 py-1"
                        onClick={() => handleSelect("Option 3")}
                      >
                        Option 3
                      </li>
                      <li
                        className="cursor-pointer hover:bg-gray-200 text-[#64748B] font-onest text-sm font-normal px-2 py-1"
                        onClick={() => handleSelect("Option 4")}
                      >
                        Option 4
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="title"
                  className="text-[#1E293B] font-onest text-sm font-bold"
                >
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Please enter the message title"
                  className="p-[18px_25px] border border-[#E2E8F0] text-[#64748B] font-onest text-sm font-normal rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="description"
                  className="text-[#1E293B] font-onest text-sm font-bold"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="10"
                  placeholder="Please enter the message description"
                  className="p-[18px_25px] border border-[#E2E8F0] text-[#64748B] font-onest text-sm font-normal rounded-[10px]"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button className="p-[15px_37px] bg-orange hover:bg-orange/70 transition-all rounded-[50px] font-onest text-white text-base font-bold w-[222px]">
                Submit
              </button>
            </div>
          </div>
          <div className="w-full lg:pt-20">
            <div className="flex flex-col gap-[18px]">
              <div className="rounded-[14px] bg-[#F7F7F9] p-4 lg:p-[19px_21px]">
                <div className="flex flex-row gap-3">
                  <div className="bg-white rounded-full flex justify-center items-center size-[51px]">
                    <Image src={mail} alt="icon" className="w-[22px]" />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <span className="text-[#0E2222] font-onest text-base md:text-lg/none font-bold">
                      Email Address
                    </span>
                    <Link
                      href="mailto:am.domain@gmail.com"
                      className="inline-block text-[#05123CCC] text-sm md:text-base font-onest font-normal leading-[141%] hover:underline"
                    >
                      am.domain@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] bg-[#F7F7F9] p-4 lg:p-[19px_21px]">
                <div className="flex flex-row gap-3">
                  <div className="bg-white rounded-full flex justify-center items-center size-[51px]">
                    <Image src={phone} alt="icon" className="w-[22px]" />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <span className="text-[#0E2222] font-onest text-base md:text-lg/none font-bold">
                      Contact Number
                    </span>
                    <Link
                      href="tel:+01 (234) 567 890"
                      className="inline-block text-[#05123CCC] text-sm md:text-base font-onest font-normal leading-[141%] hover:underline"
                    >
                      +01 (234) 567 890
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] bg-[#F7F7F9] p-4 lg:p-[19px_21px]">
                <div className="flex flex-row gap-3">
                  <div className="bg-white rounded-full flex justify-center items-center size-[51px]">
                    <Image src={address} alt="icon" className="w-[22px]" />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <span className="text-[#0E2222] font-onest text-base md:text-lg/none font-bold">
                      Contact Number
                    </span>
                    <p className="inline-block text-[#05123CCC] text-sm md:text-base font-onest font-normal leading-[141%]">
                      Grönkulla 1, 598 73 Some Place
                    </p>
                  </div>
                </div>
              </div>
              <ul className="bg-[#F7F7F9] max-[429px]:rounded-[20px] rounded-[40px] md:rounded-[20px] xl:rounded-[74px] flex flex-wrap flex-row gap-3 p-[15px] w-fit">
                {socialMediaLinks.map((social, index) => (
                  <li
                    key={index}
                    className="bg-white hover:bg-[#F6F6F9] border border-transparent hover:border-[#FFF] rounded-[50px] size-[50px] flex justify-center items-center"
                  >
                    <Link href={social.href} className="inline-block">
                      <Image
                        src={social.src}
                        alt="icon"
                        className="size-[22px]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Support;
