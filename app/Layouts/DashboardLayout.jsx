"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";
import MobileHeader from "../components/MobileHeader";
import Sidebar from "../components/Sidebar";
const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const router = usePathname();
  return (
    <>
      <div className="max-md:p-[0_0_80px_0] max-lg:p-[0_0_130px_0] p-[10px_10px_160px_0] bg-[#F6F6F9] flex flex-row">
        {/* Left side part / Sidebar */}
        <Sidebar isCollapsed={isCollapsed} />
        {/* right side part */}
        <section className="w-full lg:rounded-[15px] block lg:border border-[#E2E8F0] bg-white overflow-y-auto">
          <MobileHeader setIsCollapsed={setIsCollapsed} />
          {children}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;

{
  /* <div className="w-full max-w-[237px] block p-[6px_0px] max-lg:hidden">
          <Link href="/" className="mb-[38px] inline-block px-5">
            <Image src={logo} alt="icon" className="w-[98px] h-[88px]" />
          </Link>
          <h4 className="text-[#64748B] uppercase text-xs font-onest font-bold mb-[21px] px-5">
            General
          </h4>
          <div className={`pl-[10px] flex flex-col gap-1 pb-12 mb-12 border-b border-[#CBD5E1] `}>
            <Link
              href="/wishes"
              className={`flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px] ${
                router === '/wishes' || router === '/newWish' ? "!bg-white !border-[#CBD5E1] !text-black" : ""
              }`}
            >
              <Image src={cake} alt="icon" className="size-5" />
              <p
                className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                  router === '/wishes' ? "!text-black" : ""
                }`}
              >
                Birthday Wishes
              </p>
            </Link>
            <Link
              href="/profile"
              className={`flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px]  ${
                router === '/profile' ? "!bg-white !border-[#CBD5E1] !text-black" : ""
              }`}
            >
              <Image src={userline} alt="icon" className="size-5" />
              <p className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                  router === '/profile' ? "!text-black" : ""
                }`}>
                My Profile
              </p>
            </Link>
            <Link
              href="/invoices"
              className={`flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:text-black hover:bg-white hover:border-[#CBD5E1] px-[10px] ${
                router === '/invoices' ? "!bg-white !border-[#CBD5E1] !text-black" : ""
              }`}
            >
              <Image src={invoice} alt="icon" className="size-5" />
              <p className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                  router === '/invoices' ? "!text-black" : ""
                }`}>
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
                router === '/support' ? "!bg-white !border-[#CBD5E1] !text-black" : ""
              }`}
            >
              <Image src={support} alt="icon" className="size-5" />
              <p className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                  router === '/support' ? "!text-black" : ""
                }`}>
                Support
              </p>
            </Link>
            <Link
              href="/support" className="flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px]">
              <Image src={help} alt="icon" className="size-5" />
              <p className={`text-[#475569] text-sm font-onest font-normal group-hover:text-black ${
                  router === '/support' ? "!text-black" : ""
                }`}>
                Help
              </p>
            </Link>
          </div>
        </div> */
}
