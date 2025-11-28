import React from 'react';

const TrustComp = () => {
  return (
    <div className="bg-[#edeafb] flex flex-col py-4 items-center gap-7 px-3 lg:flex-row lg:px-28 lg:py-14">
      <div className=" mx-7 font-bold flex gap-1 lg:flex-col lg:font-medium lg:mx-5 lg:mr-14">
        {' '}
        <h1 className="text-2xl lg:text-lg">Trusted by</h1>
        <h1 className="text-2xl lg:text-lg">Top Companies</h1>
      </div>

      <div className="grid  grid-cols-2 gap-7 my-2 md:grid-cols-4 lg:grid-cols-5">
        <span className="">
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/elements/brand-img5.png"
            alt="microsoft"
            className="w-full"
          />
        </span>
        <span>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/elements/brand-img1.png"
            alt="airbnb"
          />
        </span>
        <span>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/elements/brand-img2.png"
            alt="amazon"
          />
        </span>
        <span>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/elements/brand-img3.png"
            alt="fedEx"
          />
        </span>
        <span>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/elements/brand-img4.png"
            alt="google"
          />
        </span>
      </div>
    </div>
  );
};

export default TrustComp;
