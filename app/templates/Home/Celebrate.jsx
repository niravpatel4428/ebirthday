import React from "react";
import Image from "next/image";
import Link from "next/link";
import celebrateBG from "../../../public/img/celebrateBG.svg";
import cele1 from "../../../public/img/cele1.svg";
import cele2 from "../../../public/img/cele2.svg";
const Celebrate = () => {
  return (
    <div className="relative pt-[120px] pb-[155px] md:pt-[96px] md:pb-[187px] bg-[#FBF0CA]">
      <div className="absolute -top-5 md:top-[-53px] left-0 right-0 w-full">
            <Image src={celebrateBG} alt="shape" className="w-full h-full" />
        </div>
      <div className="container">
        <div className="relative text-center z-10">
          <h3 className="font-fredoka font-semibold text-[32px] md:text-[40px] lg:text-[44px] xl:text-[55px] text-black w-full max-w-[344px] sm:max-w-[410px] md:max-w-[610px] lg:max-w-[650px] xl:max-w-[770px] mx-auto">
            Make Every Celebration Count, No Matter Where You Are
          </h3>
          <div className="mt-[30px]">
            <Link
              href="/signup"
              className="p-[16px_21px] font-outfit text-white text-base font-semibold bg-orange border border-transparent rounded-2xl hover:bg-transparent hover:border-orange hover:text-orange transition-all duration-500"
            >
              Create Your Page Now
            </Link>
          </div>
        </div>
      </div>

      <Image
        src={cele1}
        alt="icon"
        className="object-contain w-[53px] md:w-[101px] xl:w-[101px] absolute max-md:bottom-10 md:top-[49%] left-[4%] md:left-[5%] animate-rotate"
      />
      <Image
        src={cele2}
        alt="icon"
        className="object-contain w-[66px] md:w-[101px] xl:w-[126px] absolute top-[44px] md:top-[17%] right-[4%] md:right-[9%] animate-rotate"
      />
    </div>
  );
};

export default Celebrate;
