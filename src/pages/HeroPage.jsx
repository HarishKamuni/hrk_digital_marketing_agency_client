import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import React from 'react';

const HeroPage = () => {
  return (
    <section className="bg-[#f3f0f5] relative h-fit overflow-x-hidden">
      <div className="my-10 mx-15 ">
        <div className="main-herosection flex justify-center">
          <div className="main-text-area flex flex-col gap-6 mt-32 ml-5">
            <h5 className="flex items-center gap-1 bg-[#e6d3f3cd] opacity-80 text-[#7207b9] w-fit py-1 px-2 rounded-md">
              <img
                src="https://seoc-html-v2.vercel.app/assets/img/icons/logo-icons.svg"
                alt="logo-icon"
              />
              Top #1 SEO & Marketing Agency
            </h5>
            <div className="text-6xl font-bold flex flex-col gap-3 ">
              <h1>Elevate Your</h1>
              <h1>Brand With Expert</h1>
              <h1>SEO & Digital</h1>
              <h1>Marketing</h1>
            </div>

            <div className="flex flex-col gap-7">
              <p className="w-[550px] text-gray-500">
                Welcome to SEOC where we specialize in revolutionizing your
                online presence through expert SEO and digital marketing
                solutions.
              </p>
              <div className="flex gap-4 mr-auto">
                <div className="flex items-center gap-2 bg-[#7207b9] rounded-full px-1 py-1 lg:py-2 lg:px-2 cursor-pointer w-fit ">
                  <h1 className="text-white text-sm capitalize pl-2 lg:text-xl lg:pl-2">
                    Start Ranking Now
                  </h1>
                  <ArrowUpRight className="text-[#7207b9] bg-white rounded-full w-4 h-4 lg:w-7 lg:h-7" />
                </div>
                <div className="flex items-center gap-2  border-2 border-[#7207b9] text-[#7207b9] rounded-full px-1 py-1 lg:py-2 lg:px-2 cursor-pointer w-fit btn-contact">
                  <h1 className=" text-sm capitalize pl-2 lg:text-xl lg:pl-2  ">
                    Contact Now
                  </h1>
                  <ArrowUpRight className="bg-[#7207b9] text-white  rounded-full w-4 h-4 lg:w-7 lg:h-7 " />
                </div>
              </div>
            </div>
          </div>
          <div className="main-img-area  h-[675px] w-1/2">
            <div className="img1 absolute top-20 right-3">
              {' '}
              <img
                src="https://seoc-html-v2.vercel.app/assets/img/all-images/header-img1.png"
                alt="header-img"
                className="w-[487px] h-[672px]"
              />
            </div>
            <div className="img2 absolute top-20 right-3">
              {' '}
              <img
                src="https://seoc-html-v2.vercel.app/assets/img/bg/header-imgbg.png"
                alt="header-imgbg"
                className="w-[550px] h-[550px]"
              />
            </div>
            <div className="icon-area">
              <img
                src="https://seoc-html-v2.vercel.app/assets/img/icons/sound-icons1.svg"
                alt="sound-icon"
                className="absolute top-28 right-[425px] "
              />
              <img
                src="https://seoc-html-v2.vercel.app/assets/img/icons/lite-icons1.svg"
                alt="lite-icon"
                className="absolute bottom-64 -right-12 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
