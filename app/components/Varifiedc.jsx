import React from "react";
import Image from "next/image";
import success from "../../public/img/mail-green.png";
import cross from "../../public/img/cross.svg";

export const Varifiedc = () => {
  return (
    <>
      {/* Email has been verified */}
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
    </>
  );
};
