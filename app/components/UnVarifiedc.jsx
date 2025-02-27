import React from "react";
import Image from "next/image";
import cancle from "../../public/img/mail-cancle-red.png";
import cross from "../../public/img/cross.svg";
import Link from "next/link";

export const UnVarifiedc = () => {
  return (
    <>
      <div className="bg-slate p-[9px_16px] md:p-[10px_12px_10px_2 2px] font-onest flex justify-between items-center gap-5">
        <div className="flex flex-row items-center gap-[13px] ">
          <Image src={cancle} alt="icon" className="object-contain size-8" />
          <div>
            <p className="text-black text-sm font-semibold !leading-tight">
              Email not verified
            </p>
            <span className="text-black/80 text-xs font-normal !leading-tight">
              Your account is not verified and now is locked to create wishes.{" "}
              <Link href="/" className="font-bold !leading-none underline">
                Click here to verify
              </Link>
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
