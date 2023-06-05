import React from "react";

const Homepage = () => {
  return (
    <>
      <div className=" ">
        {/* top-bar */}

        <div className="fixed w-full bg-main top-0 colo-gradient py-5 z-30">
          <div className="flex items-center relative  justify-between max-w-7xl w-full mx-auto">
            {/* logo */}
            <div>
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/TukUpdatedLogov3.svg"
                alt="tuk-logo"
              />
            </div>
            {/* menus */}
            <div>
              <ul className="flex text-sm gap-5 leading-[14px]">
                <li className="text-[#F3F4F6]  cursor-pointer">COMPONENTS</li>
                <li className="text-[#444E66] cursor-pointer">UI KITS</li>
                <li className="text-[#444E66] cursor-pointer">TEMPLATES</li>
                <li className="text-[#444E66] cursor-pointer">PRICING</li>
              </ul>
            </div>
            {/* buttons */}
            <div className="flex gap-14">
              <button className="text-[#444E66] text-sm leading-[14px]">
                Login
              </button>
              <button className="text-white text-sm leading-[14px]">
                Get started for fee
              </button>
            </div>
            <div className="bgr-light absolute w-[400px] h-[200px] left-[40%] right-[50%]"></div>
          </div>
        </div>

        {/* main sec */}
        <div className="main-se ">
          <div className="flex flex-col gap-2 justify-center items-center pt-[200px]">
            <h1 className="text-[64px] font-semi-bold leading-[76px] text-center font-semibold color-gradient">
              Deliver Better with Tailwind CSS
            </h1>
            <p className="text-[#ABAFB8] text-center max-w-[833px] w-full mx-auto leading-[160%] text-lg">
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
            className="w-full h-full max-h-[981px] relative "
            height="100%"
            width="100%"
            src="/vedio/animation.mp4"
            sidedock="0"
            title="0"
            frameBorder="0"y
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
              <div className="text-center">
                <button className="max-w-[308px] w-full text-lg  rounded-[7px] py-4 text-white uppercase button leading-[28.8px]">
                  Get started for free
                </button>
              </div>
            </div>
            <div className="border border-white/10 !rounded-xl p-1 mt-12">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/TukHeroImgv3.png"
                className="mx-auto rounded-xl"
              />
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
          <div className="flex justify-center gap-10">
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
      </div>
    </>
  );
};

export default Homepage;
