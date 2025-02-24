import Link from "next/link";
import React from "react";
import Image from "next/image";
import plus from "@/public/img/plus.svg";
import noti from "@/public/img/noti.svg";
import notedown from "@/public/img/notedown.svg";
import animae from "@/public/img/animae.jpg";
import animae1 from "@/public/img/animae-big.jpg";
import success from "@/public/img/mail-green.png";
import cancle from "@/public/img/mail-cancle-red.png";
import cross from "@/public/img/cross.svg";
import connect from "@/public/img/connect.svg";
import logo from "@/public/img/mobile-center.png";
const Varified = () => {
  return (
    <div>
    {/* <div className="relative md:rounded-[15px] border border-salte"> */}
      <div className="flex justify-between md:hidden py-2">
        <div className="size-10"></div>
        <div className="w-[65px] h-[58px]">
          <Image src={logo} alt="img" className="object-contain" />
        </div>
        <div className="flex flex-row items-center gap-[7px]">
          <div className="size-10 md:size-[49px] rounded-full border border-slate flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={noti}
              alt="icon"
              className="object-contain size-[22px] rounded-full"
            />
          </div>
          <div className="size-10 md:size-[49px] rounded-full border border-slate flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={animae}
              alt="icon"
              className="object-contain size-fit md:size-[44px] rounded-full"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="p-[24px_16px_19px] md:p-[20px] max-md:border-y border-[#E2E8F0] flex items-center justify-between">
          <p className="font-onest font-medium text-black text-base lg:text-lg capiatalize">
            My Profile
          </p>
          <div className="flex flex-row gap-[13px]">
            <Link
              href="/"
              className="bg-orange rounded-[42px] p-[9px_14px_9px_11px] text-white text-sm !leading-none font-onest font-bold inline-flex items-center gap-[5px] hover:bg-orange/70 transition-all duration-500"
            >
              <Image src={plus} alt="icon" className="object-contain size-6" />
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
        <div className="bg-slate p-[9px_16px] md:p-[10px_12px_10px_2 2px] font-onest flex justify-between items-center gap-5">
          <div className="flex flex-row items-center gap-[13px] ">
            <Image src={success} alt="icon" className="object-contain size-8" />
            <div>
              <p className="text-black text-sm font-semibold !leading-tight">
                Email has been verified
              </p>
              <span className="text-black/80 text-xs font-normal !leading-tight">
                Your account is now unlocked to create wishes
              </span>
            </div>
          </div>
          <Image
            src={cross}
            alt="icon"
            className="object-contain size-[18px] cursor-pointer"
          />
        </div>
        {/* profile picture */}
        <div className="relative p-[20px_16px_0] md:p-[26px_30px_0]">
          <h4 className="font-onest font-semibold text-[#64748B] text-sm uppercase mb-4">
            Profile picture
          </h4>
          <div className="relative flex flex-row  items-end gap-4">
            <Image
              src={animae1}
              alt="img"
              className="object-cover size-[138px]"
            />
            <div>
              <div className="bg-[#F1F5F9] border w-fit border-slate rounded-[10px] p-[12px_14px] flex flex-row gap-[6px]">
                <Image
                  src={notedown}
                  alt="img"
                  className="object-contain w-[17px] h-[17px]"
                />
                <p className="text-black text-sm font-medium font-onest">
                  Change Picture
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="relative  p-[25px_16px] md:p-[40px_30px_35px_30px]">
          <h4 className="font-onest font-semibold text-[#64748B] text-sm uppercase mb-4">
            Information
          </h4>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Name"
                className="text-[#1E293B] text-sm font-bold font-onest"
              >
                Name
              </label>
              <input
                type="text"
                plceholder="Usman Zafar"
                className="text-[#64748B] text-sm md:text-base font-normal font-onest rounded-[10px] bg-white p-[15px_20px] md:p-[15px_25px] border border-[#E2E8F0] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 date-main">
              <label
                htmlFor="Name"
                className="text-[#1E293B] text-sm font-bold font-onest"
              >
                Date of birth
              </label>
              <input
                type="date"
                plceholder=""
                className="text-[#64748B] text-sm md:text-base font-normal font-onest rounded-[10px] bg-white p-[15px_20px] md:p-[15px_25px] border border-[#E2E8F0] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Name"
                className="text-[#1E293B] text-sm font-bold font-onest"
              >
                Email
              </label>
              <input
                type="email"
                plceholder="demo@gmail.com"
                className="text-[#64748B] placeholder:text-[#64748B] text-sm md:text-base font-normal font-onest rounded-[10px] bg-white p-[15px_20px] md:p-[15px_25px] border border-[#E2E8F0] outline-none"
              />
            </div>
          </form>
        </div>
        {/* Optional information */}
        <div className="border-y  border-[#E2E8F0] p-[25px_16px] md:p-[35px_30px]">
          <h4 className="font-onest font-semibold text-[#64748B] text-sm uppercase mb-4">
            Optional information
          </h4>
          <div className="flex flex-col  md:flex-row justify-between gap-3">
            <div className="">
              <h6 className="text-[#1E293B] text-base font-onest font-bold mb-[7px]">
                Google
              </h6>
              <p className="text-[#475569] font-onest text-sm font-normal mt-[7px]">
                Sign in with Facebook and discover your trusted connections to
                buyers
              </p>
            </div>
            <div>
              <button className="bg-[#F1F5F9] rounded-[10px] p-[12px_18px] flex flex-row gap-[6px] font-onest text-sm font-bold text-[#4188F9] hover:bg-[#4188F9] hover:text-[#F1F5F9] transition-all duration-500 group">
                Connect{" "}
                <Image
                  src={connect}
                  alt="connect"
                  className="object-contain size-[19px] group-hover:contrast-[12.5 ]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="relative border-y border-[#E2E8F0] p-[25px_16px_44px] md:p-[35px_30px]">
          <h4 className="font-onest font-semibold text-[#64748B] text-sm uppercase !leading-none mb-5">
            Delete this account
          </h4>
          <p className="font-onest font-bold text-base text-[#1E293B] mb-3">
            Are you sure you want to delete your account?
          </p>
          <button className="p-[16px_18px] md:p-[20px_25px] bg-[#FEF2F2] rounded-[10px] font-onest text-sm font-bold !leading-none text-[#EF4444] hover:bg-[#EF4444] hover:text-white transition-all duration-500">
            Yes, Delete my account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Varified;
