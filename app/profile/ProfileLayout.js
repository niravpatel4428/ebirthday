import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/sidebar-logo.png";
import fl from "@/public/img/fl.png";
import cake from "@/public/img/cake.svg";
import invoice from "@/public/img/invoice.svg";
import userline from "@/public/img/userline.svg";
import support from "@/public/img/support.svg";
import help from "@/public/img/help.svg";
import Footer from "../components/Footer";
const ProfileLayout = ({ children }) => {
  return (
    <>
      <div className="p-[10px_10px_148px_0] bg-[#F6F6F9] flex flex-row">
        <div className="w-full max-w-[237px] block p-[6px_0px] max-lg:hidden">
          <Link href="/" className="mb-[38px] inline-block px-5">
            <Image src={logo} alt="icon" className="w-[98px] h-[88px]" />
          </Link>

          <h4 className="text-[#64748B] uppercase text-xs font-onest font-bold mb-[21px] px-5">
            General
          </h4>
          <div className="pl-[10px] flex flex-col gap-1 pb-12 mb-12 border-b border-[#CBD5E1]">
            <div className="flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px]">
              <Image src={cake} alt="icon" className="size-5" />
              <p className="text-[#475569] text-sm font-onest font-normal group-hover:text-black">
                Birthday Wishes
              </p>
            </div>
            <div className="flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px]">
              <Image src={userline} alt="icon" className="size-5" />
              <p className="text-[#475569] text-sm font-onest font-normal group-hover:text-black">
                My Profile
              </p>
            </div>
            <div className="flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:text-black hover:bg-white hover:border-[#CBD5E1] px-[10px]">
              <Image src={invoice} alt="icon" className="size-5" />
              <p className="text-[#475569] text-sm font-onest font-normal group-hover:text-black">
                Invoices
              </p>
            </div>
          </div>
          <h4 className="text-[#64748B] uppercase text-xs font-onest font-bold mb-[21px] px-5">
            Support
          </h4>
          <div className="pl-[10px] flex flex-col gap-1">
            <div className="flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px]">
              <Image src={support} alt="icon" className="size-5" />
              <p className="text-[#475569] text-sm font-onest font-normal group-hover:text-black">
                Support
              </p>
            </div>
            <div className="flex flex-row items-center w-full max-w-[199px] gap-[7px] py-2 border border-transparent rounded-lg group hover:bg-white hover:border-[#CBD5E1] px-[10px]">
              <Image src={help} alt="icon" className="size-5" />
              <p className="text-[#475569] text-sm font-onest font-normal group-hover:text-black">
                Help
              </p>
            </div>
          </div>
        </div>
        <section className="w-full md:rounded-[15px] block border border-[#E2E8F0] bg-white">
          {children}
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default ProfileLayout;
