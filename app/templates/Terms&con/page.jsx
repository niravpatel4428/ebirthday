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

const Terms = () => {
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
              Our Terms of <span className="text-sky">Use</span>
            </h1>
            <p className="text-[#334155] text-sm md:text-base font-onest font-normal">
              By accessing and using our services, you agree to comply with the
              following terms and conditions.
            </p>
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
            <p className="uppercase font-onest font-bold text-[#64748B] text-sm mb-5 md:mb-[30px]">
              Updated AUGUST 30, 2024
            </p>

            <div className="mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-xl xl:text-[22px] font-medium tracking-[-0.22px] mb-[13px] block">
                Acceptance of Terms
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                By using our website, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Use and any
                future modifications.{" "}
              </p>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block">
                <strong className="text-[#0F172A] font-onest text-sm lg:text-base tracking-[-0.16px]">
                  User Accounts:
                </strong>{" "}
                You are responsible for maintaining the confidentiality of your
                account information and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                use of your account or any other breach of security.
              </p>
            </div>
            <div className="mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-[13px] block">
                Content Ownership
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                All content created on the platform, including but not limited
                to birthday pages, messages, and cards, remains the property of
                the respective users. However, by submitting content, you grant
                us a non-exclusive, royalty-free license to use, display, and
                distribute such content for the purpose of providing our
                services.
              </p>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block">
                <strong className="text-[#0F172A] font-onest text-base tracking-[-0.16px]">
                  Acceptable Use:
                </strong>{" "}
                You agree to use our services only for lawful purposes and in a
                manner that does not infringe the rights of, or restrict the use
                and enjoyment of, the services by any third party.
              </p>
            </div>
            <div className="mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-[13px] block">
                Limitation of Liability
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                All content created on the platform, including but not limited
                to birthday pages, messages, and cards, remains the property of
                the respective users. However, by submitting content, you grant
                us a non-exclusive, royalty-free license to use, display, and
                distribute such content for the purpose of providing our
                services.
              </p>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block">
                <strong className="text-[#0F172A] font-onest text-base tracking-[-0.16px]">
                  Acceptable Use:
                </strong>{" "}
                You agree to use our services only for lawful purposes and in a
                manner that does not infringe the rights of, or restrict the use
                and enjoyment of, the services by any third party.
              </p>
            </div>
            <div className="mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-[13px] block">
                Limitation of Liability
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                Our website is provided on an{" "}
                <strong className="text-blue">"as is"</strong> basis. We do not
                warrant that the services will be uninterrupted, secure, or
                error-free. To the fullest extent permitted by law, we disclaim
                all warranties and liabilities for any damages resulting from
                your use of our services.
              </p>
            </div>
            <div className="mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-[13px] block">
                Changes to Terms
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                We reserve the right to modify these Terms of Use at any time.
                Changes will be effective immediately upon posting on our
                website. Your continued use of the services after changes have
                been made constitutes your acceptance of the new Terms of Use.
              </p>
            </div>
            <div className="mb-12">
              <strong className="text-blue font-fredoka text-lg md:text-[22px] font-medium tracking-[-0.22px] mb-[13px] block">
                Governing Law
              </strong>
              <p className="text-[#475569] font-onest text-sm lg:text-base font-normal tracking-[-0.16pxs] block  mb-2 lg:mb-3">
                These Terms of Use are governed by the laws of the jurisdiction
                in which we operate, without regard to its conflict of law
                principles. If you have any questions about these Terms of Use,
                please contact us for clarification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Terms;
