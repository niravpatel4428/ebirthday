import Image from "next/image";
import Link from "next/link";
import plus from "../../public/img/plus.svg";
import noti from "../../public/img/noti.svg";
import animae from "../../public/img/animae.jpg";
import user from "../../public/img/user.svg";
import copy from "../../public/img/copy.svg";
import DashboardLayout from "../Layouts/DashboardLayout";
const Wish = () => {
  return (
    <DashboardLayout>
      {/* header */}
      <div className="p-[24px_16px_19px] md:p-[20px] max-md:border-t border-[#E2E8F0] flex items-center justify-between">
        <ul className="flex flex-row gap-7">
          <li className="relative font-onest font-medium text-[#94A3B8]  text-sm md:text-base capiatalize after:absolute after:-right-5 after:top-1/2 after:-translate-y-1/2 after:content-['/'] after:color-[#94A3B8]">
            Birthday Wishes
          </li>
          <li className="relative font-onest font-medium text-black  text-sm md:text-base capiatalize after:absolute after:-right-5 after:top-1/2 after:-translate-y-1/2 after:content-['/'] after:color-[#94A3B8] last:after:hidden">
            Wish
          </li>
        </ul>
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
          <div className="size-10 md:size-10 rounded-full border border-slate hidden lg:flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={noti}
              alt="icon"
              className="object-contain size-[22px] rounded-full"
            />
          </div>
          <div className="size-10 md:size-10 rounded-full border border-slate hidden lg:flex justify-center items-center hover:bg-slate transition-all duration-500">
            <Image
              src={animae}
              alt="icon"
              className="object-contain size-fit md:size-[44px] rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Wish */}
      <div className="relative bg-white border-[#E2E8F0] border-t lg:border lg:rounded-[15px] p-[24px_16px_44px] md:p-[20px_20px_32px]">
        <div className="flex flex-col justify-between ">
          <div>
            {/* input */}
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 mb-9">
              <div className="flex flex-col gap-2 w-full max-w-[859px]">
                <p className="text-[#1E293B] text-sm font-onest font-bold">
                  Birthday celebrant
                </p>
                <input
                  type="text"
                  placeholder="Enter the name of the person who celebrates birthday"
                  className="border border-[#E2E8F0] rounded-[10px] p-[18px_17px] md:p-[18px_25px] outline-none font-onest text-[#64748] text-sm font-normal"
                />
              </div>
              {/* check box */}
              <div className="flex flex-row justify-between items-center gap-3 lg:pt-8">
                <p className="text-black text-sm font-normal font-onest">
                  Make Active
                </p>
                <div className="relative inline-block w-[54px] h-7">
                  <input
                    id="switch-component"
                    type="checkbox"
                    className="peer appearance-none w-[54px] h-7 bg-slate rounded-full checked:bg-[#4188F9] cursor-pointer transition-colors duration-300"
                  />
                  <label
                    htmlFor="switch-component"
                    className="absolute top-0 left-0 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                  ></label>
                </div>
              </div>
            </div>
            {/* Updatess */}
            <div className="block">
              <p className="text-[#64748B] font-onest text-base font-bold uppercase mb-6 md:mb-4">
                Updates
              </p>
              <div className="flex flex-row items-center gap-[5px]">
                <Image src={user} alt="user" />
                <p className="text-base text-[#1E293B] font-onest font-bold">
                  Celebrant
                </p>
              </div>
              <p className="text-[#1E293B] block text-lg font-onest font-normal mt-3">
                Onemore
              </p>
              {/* Boxes */}
              <div className="grid lg:grid-cols-2 gap-5 mt-5 md:mt-7">
                <div className="rounded-[10px] border border-[#E2E8F0] p-5">
                  <h6 className="text-[#1E293B] text-base md:text-lg font-onest font-semibold">
                    Public Domain
                  </h6>
                  <div className="flex flex-row justify-between items-center gap-2 mt-5">
                    <div className="w-[85%]">
                      <p className="text-[#334155] text-sm md:text-base font-onest font-normal">
                        https://thisispublicdomain.com
                      </p>
                    </div>
                    <span className="cursor-pointer w-fit">
                      <Image
                        src={copy}
                        alt="copy"
                        className="size-5  cursor-pointer"
                      />
                    </span>
                  </div>
                  <p className="text-[#64748B] text-base md:text-sm font-onest font-normal mt-2">
                    Share this link to View and create wishes
                  </p>
                </div>
                <div className="rounded-[10px] border border-[#E2E8F0] p-5">
                  <h6 className="text-[#1E293B] text-base md:text-lg font-onest font-semibold">
                    Private Domain
                  </h6>
                  <div className="flex flex-row justify-between items-center gap-2 mt-5">
                    <div className="w-[85%]">
                      <p className="text-[#334155] text-sm md:text-base font-onest font-normal">
                        https://thisispublicdomain.com
                      </p>
                    </div>
                    <span className="cursor-pointer w-fit">
                      <Image
                        src={copy}
                        alt="copy"
                        className="size-5 cursor-pointer"
                      />
                    </span>
                  </div>
                  <p className="text-[#64748B] text-xs md:text-sm font-onest font-normal mt-2">
                    Share this link to View and create wishes
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row flex-wrap-reverse justify-end gap-[14px] mt-9">
            <Link href="/wishes">
              <button className="p-[15px_37px] rounded-[50px] bg-[#E2E8F0] hover:bg-[#e2e8f0aa] text-black text-base font-normal transition-all">
                Cancel
              </button>
            </Link>
            <Link href="/updatewish">
              <button className="p-[15px_37px] bg-orange hover:bg-orange/70 rounded-[50px] text-white text-base font-normal transition-all">
                Update Wish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Wish;
