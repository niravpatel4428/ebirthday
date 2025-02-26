import React from "react";
import Link from "next/link";
import Image from "next/image";
import LandingLayout from "../../Layouts/LandingLayout ";
import privacy from "../../../public/img/privacy.svg";
import bannerLeft from "../../../public/img/banner-start-blue.svg";
import bannerLoop from "../../../public/img/banner-loop.svg";
import bannerPink from "../../../public/img/banner-start-pink.svg";
const Privacypolicy = () => {
  return (
    <>
      <LandingLayout>
        <div className="relative max-md:p-[0_0_80px_0] max-lg:p-[0_0_130px_0] p-[0px_0px_160px_0]">
          <div className="relative bg-[#F4F4F5] pt-20 pb-8 md:pb-16">
            <div className="relative z-10">
              <div className="container">
                <h1 className="text-blue text-[32px] md:text-4xl lg:text-[42px] xl:text-[45px] font-fredoka font-semibold mb-5 md:mb-7">
                  Privacy Policy
                </h1>
                <p className="text-blue/70 text-base lg:text-[18px] font-onest font-medium leading-[155%] mb-6 md:mb-8">
                  At{" "}
                  <Link
                    href="happy-ebirthday.com"
                    target="_blank"
                    className="text-sky hover:text-orange hover:underline"
                  >
                    happy-ebirthday.com
                  </Link>
                  , we are committed to protecting your privacy and ensuring
                  that your personal information is handled responsibly. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your information when you visit our website. By
                  using our services, you consent to the data practices
                  described in this policy.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 md:-bottom-9 left-0 right-0">
              <Image src={privacy} alt="img" className="" />
            </div>
            <Image
              src={bannerLeft}
              alt="bannerLeft"
              className="object-contain w-[40px] absolute top-4 left-[7.5%] animate-float"
            />
            <Image
              src={bannerLoop}
              alt="bannerLoop"
              className="object-contain w-[102px] absolute top-8 right-[11.5%] animate-rotate"
            />
            <Image
              src={bannerPink}
              alt="bannerPink"
              className="object-contain w-[66px] absolute bottom-2 right-[8%] md:right-[24.5%] animate-pulse-custom "
            />
          </div>

          <div className="relative pt-14 md:pt-28">
            <div className="container">
              {privacyData.map((section, index) => (
                <div key={index}>
                  <h2 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-3">
                    {section.heading}
                  </h2>
                  {section.isList ? (
                    // If this section is a list, render it with a custom design
                    <ul className="list-disc pl-6 text-blue/70 text-base lg:text-[18px] font-onest font-medium leading-[155%] mb-6 md:mb-8">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="mb-4">
                          {section.isInfoSection ? (
                            <div className="flex flex-col space-y-2">
                              <p className="font-semibold text-blue">
                                {item.split(":")[0]}
                              </p>
                              <p className="text-blue/70">
                                {item.split(":")[1]}
                              </p>
                            </div>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-blue/70 text-base lg:text-[18px] font-onest font-medium leading-[155%] mb-6 md:mb-8">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </LandingLayout>
    </>
  );
};

export default Privacypolicy;
const privacyData = [
  {
    heading: "Information We Collect",
    content: [
      "Personal Information: When you create an account or use our services, we may collect personal information such as your name, email address, and payment information.",
      "Non-Personal Information: We may also collect non-personal information about your interactions with our website, including IP address, browser type, and usage patterns.",
    ],
    isList: true,
    isInfoSection: true, 

  },
  {
    heading: "How We Use Your Information",
    content: [
      "To Provide Services: We use your information to create and manage your account, process payments, and provide customer support.",
      "To Improve Our Services: We may use your information to analyze usage patterns and enhance the functionality of our website.",
      "To Communicate with You: We may send you updates, promotional materials, and other information related to our services. You can opt out of receiving these communications at any time.",
    ],
    isList: true,
    isInfoSection: true, 
  },
  {
    heading: "Disclosure of Your Information",
    content: [
      "Third-Party Service Providers: We may share your information with third-party service providers who assist us in delivering our services, such as payment processors and hosting providers. These parties are obligated to protect your information and may only use it for the purposes specified by us.",
      "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
    ],
    isList: true,
    isInfoSection: true, 

  },
  {
    heading: "Data Security",
    content: [
      "We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.",
    ],
    isList: false,
  },
  {
    heading: "Your Rights",
    content: [
      "Depending on your location, you may have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided below.",
    ],
    isList: false,
  },
  {
    heading: "Cookies and Tracking Technologies",
    content: [
      "Our website may use cookies and similar tracking technologies to enhance your experience. You can choose to accept or decline cookies through your browser settings. However, declining cookies may prevent you from taking full advantage of the website.",
    ],
    isList: false,
  },
  {
    heading: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of the services after any modifications to the Privacy Policy will constitute your acknowledgment of the changes and your consent to abide by and be bound by the modified policy.",
    ],
    isList: false,
  },
  {
    heading: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at ",
      <Link
        href="mailto:support@happy-ebirthday.com"
        className="text-sky hover:text-orange hover:underline"
      >
        support@happy-ebirthday.com
      </Link>,
    ],
    isList: false,
  },
];
