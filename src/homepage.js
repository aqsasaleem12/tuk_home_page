import React from "react";

const Homepage = () => {
  return (
    <>
      <div className=" ">
        {/* top-bar */}

        <div className="fixed w-full bg-main top-0   z-30">
          <div className="flex items-center relative  justify-between py-8 max-w-7xl w-full mx-auto ">
            {/* logo */}
            <div className="flex justify-start w-full">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/TukUpdatedLogov3.svg"
                alt="tuk-logo"
              />
            </div>
            {/* menus */}
            <div className=" flex justify-center  w-full  ">
              <ul className="flex gap-12 leading-[14px] justify-center ">
                <li className="text-[#F3F4F6]  cursor-pointer  text-sm">
                  COMPONENTS
                </li>
                <li className="text-[#444E66] cursor-pointer  text-sm">
                  UI KITS
                </li>
                <li className="text-[#444E66] cursor-pointer  text-sm">
                  TEMPLATES
                </li>
                <li className="text-[#444E66] cursor-pointer  text-sm">
                  PRICING
                </li>
              </ul>
            </div>
            {/* buttons */}
            <div className="flex w-full justify-end gap-14">
              <button className="text-[#444E66] text-sm leading-[14px]">
                Login
              </button>
              <button className="text-white text-sm leading-[14px] min-w-[124px]">
                Get started for fee
              </button>
            </div>
            <div className="bgr-light absolute"></div>
          </div>
          <hr className="custom-hr" />
        </div>

      {/* main sec */}
        <div className="main-se ">
          <div className="flex flex-col gap-2 justify-center items-center pt-[180px]">
            <h1 className="text-[64px]  leading-[76px] text-center font-semibold color-gradient heading-f">
              Deliver Better with Tailwind CSS
            </h1>
            <p className="text-[#ABAFB8] text-center max-w-[833px] w-full mx-auto leading-[160%] text-lg font-family">
              Build captivating experiences with accessible, fully responsive,
              drop-in-ready components and fast track your workflow. Subscribe
              and get
              <span className="font-bold ">117 exclusive TUK components </span>
              right in your mail box
            </p>
          </div>
        </div>
        <div className="relative w-full ">
          <video
            className="w-full max-w-[88%] mx-auto h-full max-h-[981px] relative "
            height="100%"
            width="100%"
            src="/vedio/tuk_bg.webm"
            sidedock="0"
            title="0"
            frameBorder="0"
            y
            // allow="autoplay; picture-in-picture"
            autoPlay
            loop
            muted
            type="video/mp4"
            // onEnded={(event) => {
            //   event.target.play();
            // }} // Restart the video when it ends
          ></video>

          <div className=" mx-auto  max-w-[1029px] absolute  inset-0  max-h-[648px]">
            {/*framew0rk-svgs */}
            <div className="flex flex-col gap-6 mt-11">
              <div className="flex justify-center   gap-8">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/taulwind.svg"
                  alt="taulwind"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/angular.svg"
                  alt="angular"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/react.svg"
                  alt="react"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vue.svg"
                  alt="vue"
                />
              </div>
              {/* main-button */}
              <div className="text-center ">
                <button className="max-w-[308px] w-full text-lg  rounded-[7px] py-4 text-white uppercase button leading-[28.8px]">
                  Get started for free
                </button>
              </div>
            </div>
            <div className="border-r border-t border-l border-white/10 !rounded-xl p-1 mt-12 border-around-img">
              <div className="bg border border-white/10">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/comp-png.png"
                  className="mx-auto rounded-xl "
                />
                <div className="grad-Inner"></div>
              </div>
            </div>
          </div>
        </div>

        {/* industry leaders-heading */}
        <div className="flex flex-col gap-5">
          <div className="mt-[15px]">
            <h2 className="text-xs font-light text-[#A9A6A6] text-center ">
              Trusted and used by industry leaders
            </h2>
          </div>
          {/* logos */}
          <div className="flex justify-center gap-10 ">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Yandex.svg" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gforgia.svg" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gohmson.svg" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/clickfunnels.svg" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/MIT.svg" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/inetum.svg" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/apple.svg" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/kentstate.svg" />
          </div>
        </div>

        {/* The Biggest hr */}
        <hr className="custom-hr mt-[112px]" />
        {/* The Biggest Tailwind UI Kit heading */}
        <div className="flex flex-col gap-2 max-w-[1003px] w-full mx-auto">
          <h2 className="text-[64px] font-semi-bold leading-[76p.38x] text-center font-semibold color-gradient mt-[83px] ">
            The Biggest Tailwind UI Kit
          </h2>
          <p className="text-[#ABAFB8] text-center max-w-[504px] w-full mx-auto leading-[160%] text-base font-normal font-family">
            TUK gives developers the functionality to fast track their workflow
            with 3000+ components and 30 templates
          </p>
        </div>
        {/* 4-sided-box */}
        <div className="max-w-[919px] w-full mx-auto   ">
          <div className="relative">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vector_1.svg"
              className="mx-auto"
            />

            <div className="grid grid-cols-2 mx-auto absolute top-0 w-full overflow-hidden">
              {/* 1st-grid */}
              <div className="flex flex-col gap-[7px] justify-center items-center  w-full min-h-[305px] h-full relative overflow-hidden group cursor-pointer">
                <h3 className="text-[22px] font-normal leading-[35.2px] font-family color-gradient-grid  opacity-[0.4] group-hover:opacity-100 transition-all ease-in-out duration-300">
                  Responsive design
                </h3>
                <p className="text-[#B4B4B4]/40 group-hover:text-[#B4B4B4]/100 text-sm max-w-[187px] w-full text-center ">
                  Adaptive design that provides a consistent experience across
                  breakpoints
                </p>
                <div className="light-shadow absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"></div>
              </div>
              {/* 2nd-grid */}
              <div className="flex flex-col gap-[7px] justify-center items-center w-full min-h-[305px] h-full  relative overflow-hidden group cursor-pointer">
                <h3 className="text-[22px] font-normal leading-[35.2px] font-family color-gradient-grid opacity-[0.4] group-hover:opacity-100 transition-all ease-in-out duration-300">
                  Tested components
                </h3>
                <p className="text-[#B4B4B4]/40 group-hover:text-[#B4B4B4]/100 text-sm max-w-[189px] w-full text-center ">
                  Rigorously tested components that meet the highest quality
                  standards.
                </p>
                <div className="light-shadow-tested absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"></div>
              </div>
              {/* 3rd-grid */}
              <div className="flex flex-col gap-[7px] justify-center items-center w-full min-h-[305px] h-full  relative overflow-hidden group cursor-pointer">
                <h3 className="text-[22px] font-normal leading-[35.2px] font-family color-gradient-grid opacity-[0.4] group-hover:opacity-100 transition-all ease-in-out duration-300">
                  Cross browser compatible
                </h3>
                <p className="text-[#B4B4B4]/40 group-hover:text-[#B4B4B4]/100 text-sm max-w-[191px] w-full text-center ">
                  Cross browser compatible components that are consistent
                  throughout the web
                </p>
                <div className="light-shadow absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"></div>
              </div>
              {/* 4th-grid */}
              <div className="flex flex-col gap-[7px] justify-center   items-center w-full min-h-[305px] h-full  relative overflow-hidden group cursor-pointer">
                <h3 className="text-[22px] font-normal leading-[35.2px] font-family color-gradient-grid opacity-[0.4] group-hover:opacity-100 transition-all ease-in-out duration-300">
                  Inclusive & accessible
                </h3>
                <p className="text-[#B4B4B4]/40 group-hover:text-[#B4B4B4]/100 text-sm max-w-[187px] w-full text-center ">
                  Built on the curb-cut effect, WCAG accessibility comes baked
                  in for a truly inclusive experience
                </p>
                <div className="light-shadow-accessible absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"></div>
              </div>
            </div>
            <div className="absolute top-[47.5%] bottom-[50%] w-full ">
              <hr className="custom-hr  rotate-90  " />
              <hr className="custom-hr " />
              <div className="min-h-[61px] max-w-[61px] w-full rounded-full flex items-center justify-center left-[47%] right-[49%] absolute -top-[30px]  circle">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tailwind-vector.svg" />
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Homepage;
