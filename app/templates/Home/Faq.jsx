"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import arrowUP from "../../../public/img/arrowUP.svg";

export default function Faq() {
  const faqData = [
    {
      question: "How do I create a birthday page?",
      id: "01",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Can I make my page private?",
      id: "02",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "What payment options do you accept?",
      id: "03",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Question that is frequently asked?",
      id: "04",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const refs = useRef([]);

  useEffect(() => {
    setHeights(refs.current.map((ref) => (ref ? ref.scrollHeight : 0)));
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative pt-[30px] lg:pt-[60px] pb-[212px]">
      <div className="container !max-w-[1012px]">
        <div className="relative z-10">
          <div className="text-center">
            <p className="text-orange font-onest text-sm leading-[178.571%] font-semibold mb-1">
              FAQ’s
            </p>
            <h5 className="text-blue text-[32px] md:text-4xl lg:text-[42px] xl:text-[45px] font-fredoka font-semibold">
              {" "}
              People often ask these questions{" "}
            </h5>
          </div>
          <div className="mt-6 lg:mt-9">
            <div className="relative w-full mx-auto">
              {faqData.map((faq, index) => (
                <div
                  className={` w-full block relative rounded-[16px] p-[31px_20px] md:p-[35px_28px] xl:p-[35px_44px] mb-5 shadow-faq ${
                    openIndex === index ? "" : ""
                  } last:mb-0`}
                  key={index}
                >
                  <div
                    className="relative cursor-pointer flex items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-outfit text-blue text-base lg:text-xl font-medium mr-4">
                      {faq.id}.
                    </span>
                    <h4 className="font-outfit text-blue text-base lg:text-xl font-medium w-[90%]">
                      {faq.question}
                    </h4>
                    <span
                      className={`transition-transform duration-500 ml-auto`}
                    >
                      <Image
                        src={arrowUP}
                        alt="toggle icon"
                        className={`${
                          openIndex === index ? "rotate-0" : "rotate-180"
                        } w-[20px] h-[20px]`}
                      />
                    </span>
                  </div>
                  <div
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      openIndex === index
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                    style={{
                      maxHeight:
                        openIndex === index ? `${heights[index]}px` : "0px",
                    }}
                  >
                    <div className="mt-[15px] pl-[43px]">
                      <p className="text-blue/70 font-normal font-outfit text-sm lg:text-base tracking-[-0.14px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
