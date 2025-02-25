"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/sidebar-logo.png";
import fl from "../../public/img/fl.png";
import cake from "../../public/img/cake.svg";
import invoice from "../../public/img/invoice.svg";
import userline from "../../public/img/userline.svg";
import support from "../../public/img/support.svg";
import help from "../../public/img/help.svg";

const Sidebar = ({ isCollapsed }) => {
  const router = usePathname();

  return (
    <>
      {/* Left side part / Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 w-full max-w-[237px] h-screen max-lg:border-r max-lg:border-[#E2E8F0]  bg-[#F6F6F9] transition-transform duration-300 z-50 lg:translate-x-0 ${
          isCollapsed ? "translate-x-0" : "-translate-x-full"
        } lg:block`}
      >
        <div className="max-lg:pb-24">
          <Link href="/" className="mb-[38px] hidden lg:inline-block px-5">
            <Image src={logo} alt="icon" className="w-[98px] h-[88px]" />
          </Link>
        </div>
        <h4 className="text-[#64748B] uppercase text-xs font-onest font-bold mb-[21px] px-5">
          General
        </h4>
        <div
          className={`pl-[10px] flex flex-col gap-1 pb-12 mb-12 border-b border-[#CBD5E1] `}
        >
          <Link
            href="/wishes"
            className={`flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px] ${
              router === "/wishes" || router === "/newWish"
                ? "!bg-white !border-[#CBD5E1] !text-black "
                : ""
            }`}
          >
            <Image src={cake} alt="icon" className="size-5" />
            <p
              className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                router === "/wishes" ? "!text-black" : ""
              }`}
            >
              Birthday Wishes
            </p>
          </Link>
          <Link
            href="/profile"
            className={`flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px]  ${
              router === "/profile"
                ? "!bg-white !border-[#CBD5E1] !text-black "
                : ""
            }`}
          >
            <Image src={userline} alt="icon" className="size-5" />
            <p
              className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                router === "/profile" ? "!text-black" : ""
              }`}
            >
              My Profile
            </p>
          </Link>
          <Link
            href="/invoices"
            className={`flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:text-black hover:bg-white hover:border-[#CBD5E1] px-[10px] ${
              router === "/invoices"
                ? "!bg-white !border-[#CBD5E1] !text-black "
                : ""
            }`}
          >
            <Image src={invoice} alt="icon" className="size-5" />
            <p
              className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                router === "/invoices" ? "!text-black" : ""
              }`}
            >
              Invoices
            </p>
          </Link>
        </div>
        <h4 className="text-[#64748B] uppercase text-xs font-onest font-bold mb-[21px] px-5">
          Support
        </h4>
        <div className="pl-[10px] flex flex-col gap-1">
          <Link
            href="/support"
            className={`flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px] ${
              router === "/support"
                ? "!bg-white !border-[#CBD5E1] !text-black "
                : ""
            }`}
          >
            <Image src={support} alt="icon" className="size-5" />
            <p
              className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                router === "/support" ? "!text-black" : ""
              }`}
            >
              Support
            </p>
          </Link>
          <Link
            href="/support"
            className="flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px]"
          >
            <Image src={help} alt="icon" className="size-5" />
            <p
              className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                router === "/support" ? "!text-black" : ""
              }`}
            >
              Help
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
