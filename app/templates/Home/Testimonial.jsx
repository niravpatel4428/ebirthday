"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import slidersvg from "../../../public/img/slidersvg.svg";
import whiteShape from "../../../public/img/whiteShape.svg";
const Testimonial = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: true,
    centerPadding: "175px",
    slidesToShow: 3,
    swipeToSlide: true,
    speed: 1200,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 3,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          centerPadding: "180px",
          centerMode: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerPadding: "35px",
        },
      },
      {
        breakpoint: 429,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div className="relative pt-9 md:pt-2 pb-[10px] lg:pb-[60px]">
      <div className="absolute -top-4 md:top-[-53px] left-0 right-0">
        <Image src={whiteShape} alt="shape" className="w-full" />
      </div>

      <div className="relative z-10 text-center mb-[34px] lg:mb-[60px]">
        <p className="text-orange text-sm uppercase font-onest leading-[178.571%] font-semibold mb-[6px]">
          Testimonials
        </p>
        <h4 className="text-blue text-[32px] md:text-4xl lg:text-[42px] xl:text-[45px] font-fredoka font-semibold !leading-tight">
          How we help people <br /> celebrate
        </h4>
      </div>

      <div className="slider-container relative z-10 pb-24 overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              className="border border-[#050d3b1a] rounded-[15px] p-5 slick-inner h-full min-h-full !flex flex-col justify-between "
              key={testimonial.id}
            >
              <div className="slide-top">
                <Image
                  src={testimonial.avatar}
                  alt="icon"
                  width={32}
                  height={32}
                  className="object-contain w-8 h-8 mb-[18px] t-quote"
                />
                <p className="text-blue text-[18px] font-onest font-medium leading-[155%] t-detail">
                  {testimonial.testimonial}
                </p>
              </div>
              <div className="mt-6">
                <p className="text-blue text-base font-onest font-semibold mb-1 t-name">
                  {testimonial.name}
                </p>
                <span className="text-blue text-sm font-onest font-normal mb-[11px] block t-role">
                  {testimonial.role}
                </span>
                <div className="flex flex-row gap-[2px] t-stars">
                  <Image
                    src={testimonial.ratingImage}
                    alt="icon"
                    width={18}
                    height={18}
                    className="size-[18px]"
                  />
                  <Image
                    src={testimonial.ratingImage}
                    alt="icon"
                    width={18}
                    height={18}
                    className="size-[18px]"
                  />
                  <Image
                    src={testimonial.ratingImage}
                    alt="icon"
                    width={18}
                    height={18}
                    className="size-[18px]"
                  />
                  <Image
                    src={testimonial.ratingImage}
                    alt="icon"
                    width={18}
                    height={18}
                    className="size-[18px]"
                  />
                  <Image
                    src={testimonial.ratingImage}
                    alt="icon"
                    width={18}
                    height={18}
                    className="size-[18px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* </div> */}
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} size-[44px] lg:!size-16 slick-prev !top-full !left-1/2 !-translate-x-1/2 group transition-all duration-500`}
      onClick={onClick}
    >
      <div className="size-[44px] lg:!size-16 !border !border-black !rounded-full !flex !justify-center !items-center max-[767px]:-ml-8 -ml-10 mt-8 group-hover:bg-orange group-hover:!border-orange">
        <Image
          src={slidersvg}
          alt="icon"
          className="object-contain w-8 group-hover:invert"
        />
      </div>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} size-[44px] lg:!size-16 slick-next !top-full !left-1/2 !-translate-x-1/2 group transition-all duration-500`}
      onClick={onClick}
    >
      <div className="size-[44px] lg:!size-16 !border !border-black !rounded-full !flex !justify-center !items-center rotate-180 max-[767px]:ml-6  ml-10 mt-8 group-hover:bg-orange group-hover:!border-orange">
        <Image
          src={slidersvg}
          alt="icon"
          className="object-contain w-8 group-hover:invert"
        />
      </div>
    </div>
  );
};

export default Testimonial;

const testimonials = [
  {
    id: 1,
    name: "Usman Zafar",
    role: "Customer",
    testimonial:
      "Lorem ipsum dolor sit consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqu anostrud exercitation.",
    avatar: "/img/sliderTop.svg",
    ratingImage: "/img/star.svg",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Customer",
    testimonial: "Consectetur adipiscing elit sed do eiusmod tempor",
    avatar: "/img/sliderTop.svg",
    ratingImage: "/img/star.svg",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Customer",
    testimonial:
      "Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat dolo ",
    avatar: "/img/sliderTop.svg",
    ratingImage: "/img/star.svg",
  },
  {
    id: 4,
    name: "Ali Khan",
    role: "Customer",
    testimonial:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar: "/img/sliderTop.svg",
    ratingImage: "/img/star.svg",
  },
  {
    id: 5,
    name: "Ali Khan",
    role: "Customer",
    testimonial:
      "Duis aute irure dolo reprehenderit in voluptate velit esse cillu dolore eu fugiat nulla pariatur. Excepteur sint occaecat ",
    avatar: "/img/sliderTop.svg",
    ratingImage: "/img/star.svg",
  },
  {
    id: 6,
    name: "Jane Smith",
    role: "Customer",
    testimonial:
      "Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat dolo ",
    avatar: "/img/sliderTop.svg",
    ratingImage: "/img/star.svg",
  },
  {
    id: 7,
    name: "Ali Khan",
    role: "Customer",
    testimonial:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar: "/img/sliderTop.svg",
    ratingImage: "/img/star.svg",
  },
  {
    id: 8,
    name: "Ali Khan",
    role: "Customer",
    testimonial:
      "Duis aute irure dolo reprehenderit in voluptate velit esse cillu dolore eu fugiat nulla pariatur. Excepteur sint occaecat ",
    avatar: "/img/sliderTop.svg",
    ratingImage: "/img/star.svg",
  },
];
