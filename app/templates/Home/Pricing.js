"use client";
import { useState } from "react";
import Image from "next/image";
import bg from "@/public/img/price-bg.svg";
import bgm from "@/public/img/price-bg-mobile.svg";

const Pricing = () => {
  const [currentPlan, setCurrentPlan] = useState(plans.annual);
  const handlePlanToggle = (planType) => {
    if (planType === "monthly") {
      setCurrentPlan(plans.monthly);
    } else {
      setCurrentPlan(plans.annual);
    }
  };
  const [currentBundlePlan, setCurrentBundlePlan] = useState(
    plansBundle.annual
  );
  const handleBundlePlanToggle = (planType) => {
    if (planType === "monthly") {
      setCurrentBundlePlan(plansBundle.monthly);
    } else {
      setCurrentBundlePlan(plansBundle.annual);
    }
  };
  return (
    <div className="relative bg-[#CBE8F0] pt-[60px] pb-11 md:pb-[160px]">
      <div className="absolute -top-5 md:-top-9 left-0 right-0">
      <Image src={bg} alt="image" className="w-full h-full object-cover hidden min-h-52 md:block" />
      <Image src={bgm} alt="image" className="w-full h-full  object-cover block md:hidden" />
      </div>
      <div className="container">
        <div className="relative z-10">
          <div className="text-center mb-[50px] md:mb-[62px]">
            <h3 className="text-blue text-[32px] md:text-4xl lg:text-[42px] xl:text-[45px] font-fredoka font-semibold mb-[13px]">
              Simple Pricing
            </h3>
            <p className="text-blue font-onest text-[15px] md:text-base font-normal leading-[168.75%]  max-md:w-[80%]  mx-auto">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="w-full max-w-[846px] mx-auto">
            <div className="bg-white rounded-[20px] relative grid grid-cols-12 md:gap-5 mb-5">
              <div className="col-span-full md:col-span-6">
                <div className="p-[25px] h-full flex flex-col justify-between gap-[17px]">
                  <div className="block">
                    <h3 className="font-fredoka font-semibold text-xl md:text-[26px] xl:text-[32px] text-blue mb-2">
                      Basic
                    </h3>
                    <p className="text-blue/80 font-onest text-sm md:text-base font-normal mb-6">
                      $3 for 1 celebration
                    </p>
                    <div className="bg-[#F5F5F5] rounded-[48px] p-[5px] w-fit flex flex-row gap-[5px]">
                      <button
                        className={`text-[#525252] font-onest text-sm font-normal p-[8px_18px] rounded-[35px] hover:bg-orange hover:text-white transition-all duration-500 leading-none ${
                          currentPlan === plans.monthly
                            ? "!bg-orange !text-white"
                            : ""
                        }`}
                        onClick={() => handlePlanToggle("monthly")}
                      >
                        Monthly
                      </button>
                      <button
                        className={`text-[#525252] font-onest text-sm font-normal p-[8px_18px] rounded-[35px] hover:bg-orange hover:text-white transition-all duration-500 leading-none ${
                          currentPlan === plans.annual
                            ? "!bg-orange !text-white"
                            : ""
                        }`}
                        onClick={() => handlePlanToggle("annual")}
                      >
                        Annually
                      </button>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-blue font-fredoka text-[32px] font-semibold">
                      ${currentPlan.price}
                      <span className="text-blue font-onest text-sm font-normal">
                        {currentPlan.billingPeriod}
                      </span>
                    </p>
                    <p className="text-blue font-onest text-sm font-normal mt-[14px]">
                      Billed{" "}
                      {currentPlan.billingPeriod === "/month"
                        ? "Monthly"
                        : "Annually"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full md:col-span-6 border-t md:border-l border-dashed border-blue/10">
                <div className="p-[28px_27px_30px] md:p-[19px_39px_19px_39px] lg:p-[19px_45px_19px_39px] xl:p-[19px_79px_19px_39px]">
                  <p className="uppercase text-sm font-onest font-bold text-[#64748B] mb-4">
                    Features
                  </p>
                  <ul className="flex flex-col gap-4 mb-9">
                    {currentPlan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="pl-8 relative font-onest text-base font-normal text-black after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-[url('/img/arrowli.svg')] after:bg-no-repeat after:size-6"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-orange hover:bg-transparent hover:text-orange border border-orange p-[16px] font-onest text-sm leading-[90%] text-white font-bold rounded-[10px] w-full">
                    Create a Page
                  </button>
                </div>
              </div>
              <div className="absolute -top-5 left-auto right-[22px] md:left-[149px]">
                <p className="bg-[#0494B8] block w-fit p-[8px_14px] rounded-[40px] text-sm text-white font-onest leading-normal font-bold border-[3px] border-white">
                  Recommended
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] relative grid grid-cols-12 md:gap-5 mb-5">
              <div className="col-span-full md:col-span-6">
                <div className="p-[25px] h-full flex flex-col justify-between gap-[17px]">
                  <div className="block">
                    <h3 className="font-fredoka font-semibold text-xl md:text-[26px] xl:text-[32px] text-blue mb-2">
                      Bundle
                    </h3>
                    <p className="text-blue/80 font-onest text-sm md:text-base font-normal mb-6">
                      $10 for 5 celebration
                    </p>
                    <div className="bg-[#F5F5F5] rounded-[48px] p-[5px] w-fit flex flex-row gap-[5px]">
                      <button
                        className={`text-[#525252] font-onest text-sm font-normal p-[8px_18px] rounded-[35px] hover:bg-orange hover:text-white transition-all duration-500 leading-none ${
                          currentBundlePlan === plansBundle.monthly
                            ? "!bg-orange !text-white"
                            : ""
                        }`}
                        onClick={() => handleBundlePlanToggle("monthly")}
                      >
                        Monthly
                      </button>
                      <button
                        className={`text-[#525252] font-onest text-sm font-normal p-[8px_18px] rounded-[35px] hover:bg-orange hover:text-white transition-all duration-500 leading-none ${
                          currentBundlePlan === plansBundle.annual
                            ? "!bg-orange !text-white"
                            : ""
                        }`}
                        onClick={() => handleBundlePlanToggle("annual")}
                      >
                        Annually
                      </button>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-blue font-fredoka text-[32px] font-semibold">
                      ${currentBundlePlan.price}
                      <span className="text-blue font-onest text-sm font-normal">
                        {currentBundlePlan.billingPeriod}
                      </span>
                    </p>
                    <p className="text-blue font-onest text-sm font-normal mt-[14px]">
                      Billed{" "}
                      {currentBundlePlan.billingPeriod === "/month"
                        ? "Monthly"
                        : "Annually"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full md:col-span-6 border-t md:border-l border-dashed border-blue/10">
                <div className="p-[28px_27px_30px] md:p-[19px_39px_19px_39px] lg:p-[19px_45px_19px_39px] xl:p-[19px_79px_19px_39px]">
                  <p className="uppercase text-sm font-onest font-bold text-[#64748B] mb-4">
                    Features
                  </p>
                  <ul className="flex flex-col gap-4 mb-9">
                    {currentBundlePlan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="pl-8 relative font-onest text-base font-normal text-black after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-[url('/img/arrowli.svg')] after:bg-no-repeat after:size-6"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-orange hover:bg-transparent hover:text-orange border border-orange p-[16px] font-onest text-sm leading-[90%] text-white font-bold rounded-[10px] w-full">
                    Create a Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const plans = {
  monthly: {
    price: 149,
    billingPeriod: "/month",
    features: [
      "Velit esse cillum dolore",
      "Deserunt mollit anim id est laborum",
      "Tempor incididunt",
      "Cillum dolore eu fugiat nulla",
      "Deserunt mollit cupidatat anim",
      "Commodo consequat",
    ],
  },
  annual: {
    price: 149,
    billingPeriod: "/year",
    features: [
      "Velit esse cillum dolore",
      "Deserunt mollit anim id est laborum",
      "Tempor incididunt",
      "Cillum dolore eu fugiat nulla",
      "Deserunt mollit cupidatat anim",
      "Commodo consequat",
    ],
  },
};
const plansBundle = {
  monthly: {
    price: 249,
    billingPeriod: "/month",
    features: [
      "Nostrud exercitation",
      "Cillum dolore",
      "Occaecat cupidatat",
      "Velit esse cillum dolore",
      "Deserunt mollit anim id est laborum",
      "Tempor incididunt",
      "Cillum dolore eu fugiat nulla",
      "Deserunt mollit cupidatat anim",
      "Commodo consequat",
    ],
  },
  annual: {
    price: 249,
    billingPeriod: "/year",
    features: [
      "Velit esse cillum dolore",
      "Cillum dolore",
      "Occaecat cupidatat",
      "Velit esse cillum dolore",
      "Deserunt mollit anim id est laborum",
      "Tempor incididunt",
      "Cillum dolore eu fugiat nulla",
      "Deserunt mollit cupidatat anim",
      "Commodo consequat",
    ],
  },
};
