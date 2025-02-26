import Image from "next/image";
import arrow from "../../public/img/p-arrow-left.svg";
export const Pagination = () => {
  return (
    <>
      {/* Pagination */}
      <div className="p-[22px] flex items-center justify-center md:justify-end space-x-[6px]">
        <button className="bg-[#F1F5F9] max-[390px]:size-7 size-[38px] flex justify-center items-center rounded-full group hover:bg-orange hover:text-white transition-all">
          <Image
            src={arrow}
            alt="arrow"
            className="size-5 group-hover:invert"
          />
        </button>
        <button className="text-[#0C0C0D] font-onest text-sm font-normal max-[390px]:size-7 size-[38px] flex justify-center items-center bg-[#F1F5F9] rounded-full hover:bg-orange hover:text-white transition-all">
          {" "}
          1{" "}
        </button>
        <button className="text-[#0C0C0D] font-onest text-sm font-normal max-[390px]:size-7 size-[38px] flex justify-center items-center bg-[#F1F5F9] rounded-full hover:bg-orange hover:text-white transition-all">
          2
        </button>
        <button className="text-[#0C0C0D] font-onest text-sm font-normal max-[390px]:size-7 size-[38px] flex justify-center items-center bg-[#F1F5F9] rounded-full hover:bg-orange hover:text-white transition-all">
          3
        </button>
        <button className="text-[#0C0C0D] font-onest text-sm font-normal max-[390px]:size-7 size-[38px] flex justify-center items-center bg-[#F1F5F9] rounded-full hover:bg-orange hover:text-white transition-all">
          4
        </button>
        <div className="max-[390px]:size-7 size-[38px]  flex justify-center items-center rounded-full group hover:bg-orange">
          <button className="text-[#0C0C0D] font-onest h-fit  flex justify-center items-center group-hover: transition-all">
            ....
          </button>
        </div>
        <button className="text-[#0C0C0D] font-onest text-sm font-normal max-[390px]:size-7 size-[38px] flex justify-center items-center bg-[#F1F5F9] rounded-full hover:bg-orange hover:text-white transition-all">
          12
        </button>
        <button className="bg-[#F1F5F9] max-[390px]:size-7 size-[38px] flex justify-center items-center rounded-full group hover:bg-orange hover:text-white transition-all">
          <Image
            src={arrow}
            alt="arrow"
            className="size-5 hover:invert rotate-180"
          />
        </button>
      </div>
    </>
  );
};
