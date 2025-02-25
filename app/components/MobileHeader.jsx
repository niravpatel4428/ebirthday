"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import plus from "../../public/img/plus.svg";
import logo from "../../public/img/sidebar-logo.png";
import noti from "../../public/img/noti.svg";
import animae from "../../public/img/animae.jpg";
const MobileHeader = ({ setIsCollapsed }) => {
  const [isCollapsed, setLocalCollapsed] = useState(false);

  const toggleCollapse = () => {
    setLocalCollapsed(!isCollapsed);
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="realtive lg:hidden py-2 px-4">
      <div className="relative flex justify-between items-center h-[66px] gap-5">
        <div>
          <button
            className="size-10 hover:opacity-75 relative z-[99] lg:hidden flex justify-center items-center ml-auto border-2 border-orange rounded-full"
            id="navbar-toggle"
            onClick={toggleCollapse}
          >
            <div className="w-fit">
              <span
                className={`${
                  isCollapsed
                    ? "rotate-45 top-[0.10rem] duration-500"
                    : "duration-500"
                } relative w-[14px] h-[2px] rounded-md bg-orange block max-[390px]:mb-[0.20rem] mb-1`}
              ></span>
              <span
                className={`${
                  isCollapsed ? "hidden" : "duration-500"
                } relative w-[7px] h-[2px] rounded-md bg-orange block mb-1`}
              ></span>
              <span
                className={`${
                  isCollapsed
                    ? "-rotate-45 -top-[0.25rem] duration-500"
                    : "duration-500"
                } relative w-[14px] h-[2px] rounded-md bg-orange block`}
              ></span>
            </div>
          </button>
        </div>

        <div className="w-[65px] h-[58px] absolute top-[5px] left-1/2 -translate-x-1/2">
          <Image src={logo} alt="icon" className="w-full h-full" />
        </div>

        <div className="flex gap-2 ">
          <Link href="/profile" className="size-10 rounded-full border border-slate flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={noti}
              alt="icon"
              className="object-contain size-[22px] rounded-full"
            />
          </Link>
          <Link href="/profile" className="size-10 rounded-full border border-slate flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={animae}
              alt="icon"
              className="object-contain w-full h-full rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
