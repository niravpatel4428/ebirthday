import React from "react";
import Image from "next/image";
import card1 from "@/public/img/card1.svg";
import card2 from "@/public/img/card2.svg";
import card3 from "@/public/img/card3.svg";
import works from "@/public/img/works-top.svg";
const Steps = () => {
  return (
    <div className="relative pt-[94px] pb-[115px]">
      <div className="container">
        <div className="text-center  mb-[50px]">
          <p className="relative mx-auto w-fit font-onest uppercase text-orange text-sm leading-[178.571%] font-semibold mb-[6px] pt-4 pr-[25px]">
            How it works
            <Image
              src={works}
              alt="img"
              className="w-[24px] absolute top-0 right-0"
            />
          </p>
          <h2 className="text-blue text-[32px] md:text-4xl lg:text-[42px] xl:text-[45px] font-fredoka font-semibold">
            How to Celebrate in <br /> 3 Easy Steps
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:place-content-center mx-auto gap-5">
          <div className="w-full sm:w-[80%] lg:w-full lg:col-span-4 rounded-[20px] mx-auto shadow-faq">
            <div className="rounded-[20px] w-full relative overflow-hidden after:bg-[#F3C9D8] after:absolute after:bottom-0 after:left-0 after:right-0 after:content-[''] after:w-full after:h-[160px] after:z-[-1] flex flex-col justify-between">
              <div className="p-5 pb-0">
                <div className="flex flex-row justify-between mb-6">
                  <div className="w-[80%]">
                    <h2 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-[6px]">
                      Create Your Birthday Page
                    </h2>
                    <p className="font-onest text-blue/60 text-sm lg:text-base font-normal tracking-[-0.16px] leading-[141%]">
                      Log in, add the birthday name, message, photo, and choose
                      a design.
                    </p>
                  </div>
                  <div className="w-[20%] text-end">
                    <span className="text-blue/10 text-[38px] font-bold font-onest tracking-[-0.38px]">
                      #1
                    </span>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="-mb-2 mx-auto relative z-20 bg-white shadow-faq size-[120px] rounded-[20px] p-3">
                  <Image
                    src={card1}
                    alt="img"
                    className="object-contain size-24"
                  />
                </div>
                <div className="pt-[25px] overflow-hidden px-10">
                  {/* <div className="bg-[#F3C9D8] pt-[25px] overflow-hidden px-10"> */}
                  <form>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Birthday name"
                      className="p-[13px_16px] shadow-input outline-none w-full bg-white rounded-xl text-black/70 font-outfit font-normal text-sm mb-3"
                    />
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Add your message"
                      className="p-[13px_16px] shadow-input outline-none min-h-[87px] w-full bg-white rounded-xl text-black/70 font-outfit font-normal text-sm -mb-4"
                    ></textarea>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[80%] lg:w-full lg:col-span-4 rounded-[20px] mx-auto shadow-faq">
            <div className="rounded-[20px] w-full relative overflow-hidden h-full after:bg-[#FEF3CD] after:absolute after:bottom-0 after:left-0 after:right-0 after:content-[''] after:w-full after:h-[160px] after:z-[-1] flex flex-col justify-between">
              <div className="p-5 pb-0">
                <div className="flex flex-row justify-between mb-6">
                  <div className="w-[80%]">
                    <h2 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-[6px]">
                      Invite Your Loved Ones
                    </h2>
                    <p className="font-onest text-blue/60 text-sm lg:text-base font-normal tracking-[-0.16px] leading-[141%]">
                      Share the link so friends can leave digital cards and
                      wishes.
                    </p>
                  </div>
                  <div className="w-[20%] text-end">
                    <span className="text-blue/10 text-[38px] font-bold font-onest tracking-[-0.38px]">
                      #2
                    </span>
                  </div>
                </div>
              </div>
              <div className="pb-6">
                <div className="-mb-2 mx-auto relative z-20 bg-white shadow-faq size-[120px] rounded-[20px] p-3">
                  <Image
                    src={card2}
                    alt="img"
                    className="object-contain size-20"
                  />
                </div>
                {/* <div className="bg-[#FEF3CD] h-full pt-[25px] overflow-hidden px-10"> */}
                <div className="h-full pt-[25px] overflow-hidden px-10">
                  <form>
                    <input
                      type="text"
                      name="name"
                      readOnly
                      id="name"
                      value="https://happy-ebirthday.com/Amanda jones"
                      className="p-[13px_16px] shadow-input w-full disabled outline-none bg-white rounded-xl text-black/70 font-outfit font-normal text-sm mb-3"
                    />
                  </form>
                  <div className="flex justify-center">
                    <button className="bg-orange rounded-xl text-white text-base font-semibold font-outfit p-[10px_57px] hover:bg-transparent hover:border-orange hover:text-orange transition-all duration-500">
                      Share Page
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[80%] lg:w-full lg:col-span-4 rounded-[20px] mx-auto shadow-faq">
            <div className="rounded-[20px] w-full relative h-full overflow-hidden after:bg-[#CCE9F0] after:absolute after:bottom-0 after:left-0 after:right-0 after:content-[''] after:w-full after:h-[160px] after:z-[-1] flex flex-col justify-between">
              <div className="p-5 pb-0">
                <div className="flex flex-row justify-between mb-6">
                  <div className="w-[80%]">
                    <h2 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-[6px]">
                      Celebrate Together
                    </h2>
                    <p className="font-onest text-blue/60 text-sm lg:text-base font-normal tracking-[-0.16px] leading-[141%]">
                      Enjoy the messages and save the page as a keepsake.
                    </p>
                  </div>
                  <div className="w-[20%] text-end">
                    <span className="text-blue/10 text-[38px] font-bold font-onest tracking-[-0.38px]">
                      #3
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-7 mx-auto relative z-20 bg-white shadow-faq w-[212px] lg:w-[220px] rounded-[20px] p-3">
                <div className="rounded-2xl bg-[#F3F5F6] p-[35px_55px] lg:p-[37px_58px]">
                  <Image
                    src={card3}
                    alt="img"
                    className="object-contain size-20"
                  />
                </div>
                <button className="bg-orange w-full text-center mt-[10px] rounded-xl text-white text-base font-semibold font-outfit p-[10px_20px] hover:bg-transparent hover:border-orange hover:text-orange transition-all duration-500">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
