import React from "react";
import Link from "next/link";
import Image from "next/image";
import LandingLayout from "../../Layouts/LandingLayout ";
import privacy from "../../../public/img/privacy.svg";
import bannerLeft from "../../../public/img/banner-start-blue.svg";
import bannerLoop from "../../../public/img/banner-loop.svg";
import bannerPink from "../../../public/img/banner-start-pink.svg";
import bannerOrange from "../../../public/img/banner-start-orange.svg";
import works from "../../../public/img/works-top.svg";

const RefundPage = () => {
  return (
    <LandingLayout>
      <div className="relative bg-[#F4F4F5] pt-16 md:pt-20 pb-10 md:pb-24">
        <div className="relative z-10">
          <div className="container text-center">
            <p className="relative mx-auto w-fit font-onest uppercase text-orange text-xs md:text-sm leading-[178.571%] font-semibold pt-4 pr-[25px]">
              Welcome to our website!
              <Image
                src={works}
                alt="img"
                className="w-[24px] absolute top-0 right-0"
              />
            </p>
            <h1 className="text-blue text-[38px] lg:text-[42px] xl:text-[45px] font-fredoka font-semibold mb-5 md:mb-7">
              Refund Policy
            </h1>
            {/* <p className="text-[#334155] text-sm md:text-base font-onest font-normal">
              we strive to provide you with a satisfactory experience when using
              our services. However, if you find that you are not completely
              satisfied with your purchase, please review our refund policy
              below:
            </p> */}
          </div>
        </div>
        <div className="absolute -bottom-5 md:-bottom-9 left-0 right-0">
          <Image src={privacy} alt="img" className="w-full" />
        </div>
        <Image
          src={bannerLeft}
          alt="bannerLeft"
          className="object-contain w-[40px] absolute top-4 left-[7.5%] animate-float"
        />
        <Image
          src={bannerLoop}
          alt="bannerLeft"
          className="object-contain w-[102px] absolute top-12 left-[3%] animate-float max-md:hidden"
        />
        <Image
          src={bannerOrange}
          alt="bannerLoop"
          className="object-contain w-6 absolute top-5 md:top-8 right-[5%] md:right-[11.5%] animate-rotate"
        />
        <Image
          src={bannerPink}
          alt="bannerPink"
          className="object-contain w-[66px] absolute top-[60px] right-[4%] animate-pulse-custom max-md:hidden"
        />
      </div>
      <div className="relative mt-24 md:pt-20 pb-28">
        <div className="container">
          <div className="w-full max-w-[867px] mx-auto">
            <div className="mb-5 md:mb-7 lg:mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-2 md:mb-[13px] block">
                General Refund Policy
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                We offer a 7-day money-back guarantee on all purchases. If you
                are not satisfied with your birthday page or service, you may
                request a refund within 7 days of your purchase date. However,
                to maintain the integrity of our service, refunds will only be
                granted if the service has not been fully utilized (e.g., the
                birthday page has not been actively shared or used to collect
                birthday wishes).
              </p>
            </div>
            <div className="mb-5 md:mb-7 lg:mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-2 md:mb-[13px] block">
                Eligibility for Refunds
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                To be eligible for a refund, you must provide proof of purchase
                (e.g., receipt or order confirmation). The request for a refund
                must be made within 7 days of the initial purchase.
              </p>
            </div>
            <div className="mb-5 md:mb-7 lg:mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-2 md:mb-[13px] block">
                How to Request a Refund
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                To initiate a refund, please contact our customer support team
                at{" "}
                <Link
                  href="mailto:support@happy-ebirthday.com"
                  className="text-sky hover:text-orange hover:underline"
                >
                  support@happy-ebirthday.com
                </Link>{" "}
                with your order details and the reason for your request. Our
                team will review your request and, if approved, process the
                refund to the original payment method used during the purchase.
              </p>
            </div>
            <div className="mb-5 md:mb-7 lg:mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-2 md:mb-[13px] block">
                Exceptions
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                Refunds will not be issued for services that have been fully
                completed or for any user-generated content that has been
                published on the website. If the refund request is made after
                the 7-day period, it will not be eligible for a refund.
              </p>
            </div>
            <div className="mb-5 md:mb-7 lg:mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-2 md:mb-[13px] block">
                Processing Time
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                Once your refund request is approved, the processing time for
                refunds may take up to 7-10 business days to reflect in your
                account, depending on your bank or payment provider.
              </p>
            </div>
            <div className="mb-5 md:mb-7 lg:mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-2 md:mb-[13px] block">
                Contact Us
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                If you have any questions about our refund policy or need
                assistance, please do not hesitate to reach out to our customer
                support team at{" "}
                <Link
                  href="mailto:support@happy-ebirthday.com"
                  className="text-sky hover:text-orange hover:underline"
                >
                  support@happy-ebirthday.com
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default RefundPage;
