import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import TrustComp from '../components/TrustComp';

const HeroSection = () => {
  return (
    <>
      <section className="h-full lg:h-fit bg-[#f3f0f5]">
        <div className=" bg-gradient-to-br from-[#e8c8e8]  via-white  to-[#ded4f4] overflow-x-hidden lg:h-[780px] relative">
          <div className=" absolute top-24 md:top-24 lg:top-32 lg:left-0">
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/elements/elements1.png"
              alt="elements1"
            />
          </div>
          <div className="mx-3 md:mx-10">
            <div className="mt-20 mb-5 lg:grid lg:grid-cols-2 lg:gap-36 lg:relative lg:mt-14">
              <div className="main-text-area flex flex-col gap-6 mt-14 md:mb-7 lg:mt-36 lg:overflow-visible lg:w-[700px] lg:ml-20">
                <h5 className="flex items-center gap-1 bg-[#e6d3f3cd] opacity-80 text-[#7207b9] w-fit py-1 px-2 rounded-md">
                  <img
                    src="https://seoc-html-v2.vercel.app/assets/img/icons/logo-icons.svg"
                    alt="logo-icon"
                  />
                  Top #1 SEO & Marketing Agency
                </h5>
                <div className="text-3xl font-bold flex flex-col gap-2 md:text-6xl lg:text-6xl z-10">
                  <h1>Elevate Your</h1>
                  <h1>Brand With Expert</h1>
                  <h1>SEO & Digital</h1>
                  <h1>Marketing</h1>
                </div>

                <div className="flex flex-col gap-7">
                  <p className="w-full  text-gray-500 lg:w-[500px]">
                    Welcome to SEOC where we specialize in revolutionizing your
                    online presence through expert SEO and digital marketing
                    solutions.
                  </p>
                  <div className="flex flex-col gap-4 mr-auto md:flex-row ">
                    <div className="flex items-center gap-2 bg-[#7207b9] rounded-full px-2 py-3  cursor-pointer w-fit ">
                      <h1 className="text-white text-xl font-bold capitalize pl-2 ">
                        Start Ranking Now
                      </h1>
                      <ArrowUpRight className="text-[#7207b9] bg-white rounded-full w-8 h-8 " />
                    </div>
                    <div className="flex items-center gap-2  border-2 border-[#7207b9] text-[#7207b9] rounded-full px-2 py-2  cursor-pointer w-fit btn-contact">
                      <h1 className=" text-xl capitalize pl-2   ">
                        Contact Now
                      </h1>
                      <ArrowUpRight className="bg-[#7207b9] text-white  rounded-full w-8 h-8  " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-img-area h-full lg:h-fit mt-3">
                <div className="relative">
                  <div className="img1 absolute top-5 md:top-7 md:left-24 lg:-right-24 z-10">
                    {' '}
                    <img
                      src="https://seoc-html-v2.vercel.app/assets/img/all-images/header-img1.png"
                      alt="header-img"
                      className="w-[407px] h-[542px] md:w-[487px] md:h-[672px] lg:w-[480px] lg:h-[672px]"
                    />
                  </div>
                  <div className="img2 absolute top-28 md:top-7 md:right-2 lg:-right-5 ">
                    {' '}
                    <img
                      src="https://seoc-html-v2.vercel.app/assets/img/bg/header-imgbg.png"
                      alt="header-imgbg"
                      className="w-[390px] h-[390px] md:w-[634px] md:h-[634px] lg:w-[604px] lg:h-[604px] "
                    />
                  </div>
                  <div className="icon-area absolute top-5 md:top-12 md:left-10 ">
                    <img
                      src="https://seoc-html-v2.vercel.app/assets/img/icons/sound-icons1.svg"
                      alt="sound-icon"
                      className="w-[139px] h-[126px]"
                    />
                  </div>
                  <div className="absolute -right-4 top-10 md:top-72 md:-right-14 z-10 lg:-right-24">
                    <img
                      src="https://seoc-html-v2.vercel.app/assets/img/icons/lite-icons1.svg"
                      alt="lite-icon"
                      className="w-99px] h-[111px]"
                    />
                  </div>
                  <div className="hidden md:block md:absolute md:-bottom-[710px] md:-left-[75px]">
                    <img
                      src="https://seoc-html-v2.vercel.app/assets/img/all-images/header-author-img1.png"
                      alt="header-author-img1"
                      className="w-[240px] h-[223px]"
                    />
                  </div>
                  <div className="hidden md:block md:absolute md:top-0 md:-right-10 lg:-right-16 lg:-top-3">
                    <img
                      src="https://seoc-html-v2.vercel.app/assets/img/all-images/header-author-img2.png"
                      alt="header-author-img2"
                      className="w-[171px] h-[104px]"
                    />
                  </div>
                  <div className="hidden md:block md:absolute md:top-[420px] md:-left-2">
                    <img
                      src="https://seoc-html-v2.vercel.app/assets/img/elements/elements3.png"
                      alt="elsements3"
                      className="w-[157px] h-[145px]"
                    />
                  </div>
                  <div className="hidden md:block md:absolute md:top-10 md:right-28 lg:right-24 lg:top-7">
                    <img
                      src="https://seoc-html-v2.vercel.app/assets/img/elements/elements2.png"
                      alt="elements2"
                      className="w-[81px] h-[100px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustComp />
    </>
  );
};

export default HeroSection;
