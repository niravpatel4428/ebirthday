import React from "react";
import LandingLayout from "../Layouts/LandingLayout ";
import Link from "next/link";
import Privacypolicy from "../templates/Privacypolicy/page";

const Privacy = () => {
  return (
    // <LandingLayout>
    //   <div className="relative max-md:p-[40_0_80px_0] max-lg:p-[40_0_130px_0] p-[40px_0px_160px_0]">
    //     <div className="relative bg-[#F4F4F5] py-20">
    //       <h1 className="text-blue text-[32px] md:text-4xl lg:text-[42px] xl:text-[45px] font-fredoka font-semibold">
    //         Privacy Policy
    //       </h1>
    //     </div>

    //     <div className="relative">
    //       <div className="absolute -top-5 md:-top-9 left-0 right-0"></div>
    //     <div className="container">
    //       <p className="text-blue/70 text-[18px] font-onest font-medium leading-[155%] mb-8">
    //         At{" "}
    //         <Link
    //           href="happy-ebirthday.com"
    //           target="_blank"
    //           className="text-sky hover:text-orange hover:underline"
    //         >
    //           happy-ebirthday.com
    //         </Link>
    //         , we are committed to protecting your privacy and ensuring that your
    //         personal information is handled responsibly. This Privacy Policy
    //         outlines how we collect, use, disclose, and safeguard your
    //         information when you visit our website. By using our services, you
    //         consent to the data practices described in this policy.
    //       </p>

    //       <h2 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-3">
    //         Information We Collect
    //       </h2>

    //       <p className="text-blue/70 text-[18px] font-onest font-medium leading-[155%] mb-8">
    //         Personal Information: When you create an account or use our
    //         services, we may collect personal information such as your name,
    //         email address, and payment information. Non-Personal Information: We
    //         may also collect non-personal information about your interactions
    //         with our website, including IP address, browser type, and usage
    //         patterns.
    //       </p>

    //       <h3 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-3">
    //         How We Use Your Information
    //       </h3>

    //       <p className="text-blue/70 text-[18px] font-onest font-medium leading-[155%] mb-8">
    //         To Provide Services: We use your information to create and manage
    //         your account, process payments, and provide customer support. To
    //         Improve Our Services: We may use your information to analyze usage
    //         patterns and enhance the functionality of our website. To
    //         Communicate with You: We may send you updates, promotional
    //         materials, and other information related to our services. You can
    //         opt out of receiving these communications at any time.
    //       </p>

    //       <h4 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-3">
    //         Disclosure of Your Information
    //       </h4>

    //       <p className="text-blue/70 text-[18px] font-onest font-medium leading-[155%] mb-8">
    //         Third-Party Service Providers: We may share your information with
    //         third-party service providers who assist us in delivering our
    //         services, such as payment processors and hosting providers. These
    //         parties are obligated to protect your information and may only use
    //         it for the purposes specified by us. Legal Requirements: We may
    //         disclose your information if required to do so by law or in response
    //         to valid requests by public authorities (e.g., a court or government
    //         agency).
    //       </p>

    //       <h5 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-3">
    //         Data Security
    //       </h5>

    //       <p className="text-blue/70 text-[18px] font-onest font-medium leading-[155%] mb-8">
    //         We implement reasonable security measures to protect your personal
    //         information from unauthorized access, use, or disclosure. However,
    //         no method of transmission over the internet or method of electronic
    //         storage is 100% secure. Therefore, we cannot guarantee its absolute
    //         security.
    //       </p>

    //       <h6 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-3">
    //         Your Rights
    //       </h6>

    //       <p className="text-blue/70 text-[18px] font-onest font-medium leading-[155%] mb-8">
    //         Depending on your location, you may have the right to access,
    //         correct, or delete your personal information. If you wish to
    //         exercise these rights, please contact us using the information
    //         provided below.
    //       </p>

    //       <h6 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-3">
    //         Cookies and Tracking Technologies
    //       </h6>

    //       <p className="text-blue/70 text-[18px] font-onest font-medium leading-[155%] mb-8">
    //         Our website may use cookies and similar tracking technologies to
    //         enhance your experience. You can choose to accept or decline cookies
    //         through your browser settings. However, declining cookies may
    //         prevent you from taking full advantage of the website.
    //       </p>

    //       <h6 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-3">
    //         Changes to This Privacy Policy
    //       </h6>

    //       <p className="text-blue/70 text-[18px] font-onest font-medium leading-[155%] mb-8">
    //         We may update this Privacy Policy from time to time. We will notify
    //         you of any changes by posting the new Privacy Policy on our website.
    //         Your continued use of the services after any modifications to the
    //         Privacy Policy will constitute your acknowledgment of the changes
    //         and your consent to abide by and be bound by the modified policy.
    //       </p>

    //       <h6 className="font-fredoka font-semibold text-xl lg:text-2xl tracking-[-0.24px] text-blue mb-3">
    //         Contact Us
    //       </h6>

    //       <p className="text-blue/70 text-[18px] font-onest font-medium leading-[155%] mb-8">
    //         If you have any questions about this Privacy Policy or our data
    //         practices, please contact us at{" "}
    //         <Link
    //           href="mailto:support@happy-ebirthday.com"
    //           className="text-sky hover:text-orange hover:underline"
    //         >
    //           support@happy-ebirthday.com
    //         </Link>
    //         .
    //       </p>
    //     </div>
    //     </div>
    //   </div>
    // </LandingLayout>
    <>
      <Privacypolicy />
    </>
  );
};

export default Privacy;
