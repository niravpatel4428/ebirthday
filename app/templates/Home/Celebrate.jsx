import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import celebrateBG from "@/public/img/celebrateBG.svg";
const Celebrate = () => {
  return (
    <div className="relative pt-[83px] pb-[187px] mt-[30px] md:mt-[0px] bg-[#FBF0CA]">
        {/* <div className="absolute top-[-53px] left-0 ring-0 w-full min-h-28">
            <Image src={celebrateBG} alt="shape" className="w-full h-full min-h-12 md:min-h-28" />
        </div> */}
        <div className="container">
            <div className="relative text-center z-10">
            <h3 className="font-fredoka font-semibold text-[32px] md:text-[40px] lg:text-[44px] xl:text-[55px] text-black w-full max-w-[770px] mx-auto">Make Every Celebration Count, No Matter Where You Are</h3>
            <div className="mt-[30px]">
                <Link href="/" className="p-[16px_21px] font-outfit text-white text-base font-semibold bg-orange border border-transparent rounded-2xl hover:bg-transparent hover:border-orange hover:text-orange transition-all duration-500">Create Your Page Now</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Celebrate;
