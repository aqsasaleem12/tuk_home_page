import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (event.clientX <= 1536 && event.clientY <= 375) {
        console.log(event);
        const { clientX, clientY } = event;
        setLeft(clientX);
        setTop(clientY);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const handleMouseOver = (event) => {
    let iteration = 0;
    clearInterval(interval);

    const interval = setInterval(() => {
      const value = event.target.dataset.value;
      const updatedText = value
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return value[index];
          }
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");

      setText(updatedText);

      if (iteration >= value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <div className=" ">
      {/* top-bar */}
      <section className="top-bar">
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
      </section>

      {/* main sec */}
      <section area-aria-label="Deliver-Better-with-Tailwind-CSS">
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
      </section>
      <section area-aria-label="vedio-sec">
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
      </section>
      {/* The Biggest hr */}
      <hr className="custom-hr mt-[112px]" />
      {/* The Biggest Tailwind UI Kit heading */}
      <section area-aria-label="t Tailwind UI Kit">
        <div className="flex flex-col gap-2 max-w-[1003px] w-full mx-auto">
          <h2 className="text-[64px] font-semi-bold leading-[76.38px] text-center font-semibold color-gradient mt-[83px] ">
            The Biggest Tailwind UI Kit
          </h2>
          <p className="text-[#ABAFB8] text-center max-w-[504px] w-full mx-auto leading-[160%] text-base font-normal font-family">
            TUK gives developers the functionality to fast track their workflow
            with 3000+ components and 30 templates
          </p>
        </div>
        {/* 4-sided-box */}
        <div className="max-w-[919px] w-full mx-auto  mt-[122px] ">
          <div className="relative">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vector_1.svg"
              className="mx-auto"
            />

            <div className="grid grid-cols-2 mx-auto absolute top-0 w-full overflow-hidden">
              {/* 1st-grid */}
              <div className="flex flex-col gap-[7px] justify-center items-center  w-full min-h-[305px] h-full relative overflow-hidden group ">
                <h3 className="text-[22px] font-normal leading-[35.2px] font-family color-gradient-grid  opacity-[0.4] group-hover:opacity-100 transition-all ease-in-out duration-700">
                  Responsive design
                </h3>
                <p className="text-[#B4B4B4]/40 group-hover:text-[#B4B4B4]/100 text-sm max-w-[187px] w-full text-center transition-all ease-in-out duration-700">
                  Adaptive design that provides a consistent experience across
                  breakpoints
                </p>
                <div className="light-shadow absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700"></div>
              </div>
              {/* 2nd-grid */}
              <div className="flex flex-col gap-[7px] justify-center items-center w-full min-h-[305px] h-full  relative overflow-hidden group ">
                <h3 className="text-[22px] font-normal leading-[35.2px] font-family color-gradient-grid opacity-[0.4] group-hover:opacity-100 transition-all ease-in-out duration-700">
                  Tested components
                </h3>
                <p className="text-[#B4B4B4]/40 group-hover:text-[#B4B4B4]/100 text-sm max-w-[189px] w-full text-center transition-all ease-in-out duration-700">
                  Rigorously tested components that meet the highest quality
                  standards.
                </p>
                <div className="light-shadow-tested absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700"></div>
              </div>
              {/* 3rd-grid */}
              <div className="flex flex-col gap-[7px] justify-center items-center w-full min-h-[305px] h-full  relative overflow-hidden group ">
                <h3 className="text-[22px] font-normal leading-[35.2px] font-family color-gradient-grid opacity-[0.4] group-hover:opacity-100 transition-all ease-in-out duration-700">
                  Cross browser compatible
                </h3>
                <p className="text-[#B4B4B4]/40 group-hover:text-[#B4B4B4]/100 text-sm max-w-[191px] w-full text-center transition-all ease-in-out duration-700">
                  Cross browser compatible components that are consistent
                  throughout the web
                </p>
                <div className="light-shadow-Cross absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700"></div>
              </div>
              {/* 4th-grid */}
              <div className="flex flex-col gap-[7px] justify-center   items-center w-full min-h-[305px] h-full  relative overflow-hidden group ">
                <h3 className="text-[22px] font-normal leading-[35.2px] font-family color-gradient-grid opacity-[0.4] group-hover:opacity-100 transition-all ease-in-out duration-700">
                  Inclusive & accessible
                </h3>
                <p className="text-[#B4B4B4]/40 group-hover:text-[#B4B4B4]/100 text-sm max-w-[187px] w-full text-center transition-all ease-in-out duration-700 ">
                  Built on the curb-cut effect, WCAG accessibility comes baked
                  in for a truly inclusive experience
                </p>
                <div className="light-shadow-accessible absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700"></div>
              </div>
            </div>
            <div className="absolute top-[47.5%] bottom-[50%] w-full ">
              <hr className="custom-hr-grid  rotate-90  " />
              <hr className="custom-hr-grid " />
              <div className="min-h-[61px] max-w-[61px] w-full rounded-full flex items-center justify-center left-[47%] right-[49%] absolute -top-[30px]  circle">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tailwind-vector.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* biggest-kit */}
      <section area-aria-label=" biggest-kit">
        <div className="max-w-[1694px] mx-auto w-full">
          <h2 className="text-[64px] font-semi-bold leading-[76.38px] text-center font-semibold color-gradient mt-[83px] ">
            The Biggest Tailwind UI Kit
          </h2>
          {/* box1 */}
          <div className="relative max-w-[96%] mx-auto w-full">
            <video
              className="w-full max-w-[1694px%] mx-auto h-full max-h-[952px] relative "
              height="100%"
              width="100%"
              src="/vedio/V2.webm"
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

            <div className="absolute top-0 w-full video-grad-v2">
              <div className="flex  flex-col gap-8">
                <div className="flex justify-center   gap-[34px] mt-[75px]">
                  <div className=" web-app-kits  gradient  rounded-md pt-16 px-6 pb-6  relative">
                    <div className=" w-full   h-full">
                      <div className="flex flex-col gap-[10px] justify-center text-center ">
                        <p className="text-4xl color-gradient font-semibold">
                          Web App Kits
                        </p>
                        <p className="text-[#ABAFB8] text-base">
                          Layouts, Navigations, Forms, Tables, Content Blocks
                          and more...
                        </p>
                      </div>
                      <div className="flex gap-[27px]">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/boxed_layout.svg" />
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar_layout.svg" />
                      </div>
                    </div>
                    {/* <div className="gradient max-w-[766px] w-full min-h-[391px] top-[2%] absolute"></div> */}
                  </div>
                  {/* numbers */}
                  <div className="flex flex-col gradient web-app-kits justify-center text-center  max-w-[480px] w-full  ">
                    <div className="heading">
                      <h3 className="text-[96px] text-gradient font-bold ">
                        47,433
                      </h3>
                      <p className="text-[#ABAFB8] ">Happy Devs</p>
                    </div>
                  </div>
                </div>
                {/* 3 boxes */}
                <div className="flex gap-[34px] justify-center mt-8">
                  <div className="flex flex-col gradient2 web-app-kits gap-[10px] justify-center text-center  max-w-[404px] w-full  rounded-md py-11">
                    <p className="text-4xl color-gradient leading-[45px] font-semibold">
                      Marketing Kits
                    </p>
                    <p className="text-[#ABAFB8] text-base">
                      Hero, Blog, Content, Footer and more...
                    </p>
                    <div>
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero1.svg"
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gradient2  web-app-kits gap-[58px]  text-center  max-w-[404px] w-full  rounded-md py-11">
                    <div className="flexx-1">
                      <p className="text-[64px] font-semibold color-gradient text-gradient-3000 leading-[76.38px]">
                        3000+
                      </p>
                      <p className="text-[#ABAFB8] text-base">
                        Hand Crafted Components
                      </p>
                    </div>
                    <div className="flexx-1">
                      <p className="text-[64px] font-semibold color-gradient text-gradient-3000 ">
                        30+
                      </p>
                      <p className="text-[#ABAFB8] text-base">
                        Production Ready Templates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] justify-center text-center gradient2 web-app-kits max-w-[404px] w-full  rounded-md py-11">
                    <p className="text-4xl color-gradient font-semibold leading-[42.96px]">
                      E-commerce Kits
                    </p>
                    <p className="text-[#ABAFB8] text-base">
                      Products, Checkouts, Carts, and more...
                    </p>
                    <div>
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero1.svg"
                        className="mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Over 47000+ happy developers */}
      <section area-aria-label="Over-47000+ ">
        <div className="Over 47000+ happy developers mt-[291px]">
          <h4 className="text-[64px] font-semi-bold leading-[76.38px] text-center font-semibold color-gradient  ">
            Over 47000+ happy developers
          </h4>
          {/* jeo parkins */}
          <div className="relative ">
            <div className="flex justify-center gap-[42px] mt-[57px] z-30">
              <div className="max-w-[619px] w-full  px-6 py-6 happy-devs-grad">
                <p className="text-[#ffff]/40 max-w-[531px] w-full min-h-[88px]">
                  Absolutely love this kit guys, you've done an incredible job
                  and it's saved me countless hours in getting my V1 out Keep up
                  the amazing work!
                </p>
                <div className="flex  gap-6 mt-[42px] items-center">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/photo.png" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[#757575]">Joe Perkins</p>
                    <p className="text-gray-600">
                      Founder - Landscape Ventures
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="max-w-[619px] w-full  px-6 py-6 happy-devs-grad">
                <p className="text-[#ffff]/40 max-w-[531px] w-full  min-h-[120px]">
                  I use TUK almost daily - from quick copy-paste solutions for
                  prototyping, to inspiration in my own designs. The prebuilt
                  components allow for rapid prototyping, saving me hours in
                  pixel perfect design time. Efficient, clean cut, and allround
                  badass!
                </p>
                <div className="flex  gap-6 mt-[10px] items-center">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/photo.png" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[#757575]">Joe Perkins</p>
                    <p className="text-gray-600">
                      Founder - Landscape Ventures
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* jeo parkins */}
            <div className="flex justify-center gap-[42px] mt-[42px]">
              <div className="max-w-[619px] w-full px-6 py-6  happy-devs-grad3  ">
                <p className="text-[#ffff]/40 max-w-[531px] w-full">
                  I've been using TUK to completely map out entire layouts, but
                  also as a inspiration and as a building block. Taking the
                  ready made designs and hacking them down into what works for
                  me. Having a template and a building block has radically cut
                  down my time to get to where I want with my layouts!
                </p>
                <div className="flex  gap-6 mt-[42px] items-center">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/photo.png" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[#757575]">Joe Perkins</p>
                    <p className="text-gray-600">
                      Founder - Landscape Ventures
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="max-w-[619px] min-h-[234px] w-full  px-6 py-6 happy-devs-grad4 ">
                <p className="text-[#ffff]/40 max-w-[531px]F">
                  When I bought TUK Tailwind, I thought I would have to be a
                  sort of beta tester given the price point. However I kid you
                  not it is FLAWLESS and so is their support. EVERYTHING you
                  would ever want is in here and each component is crafted to
                  the highest design-standard - including responsiveness.
                </p>
                <div className="flex  gap-6 mt-[42px] items-center">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/photo.png" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[#757575]">Joe Perkins</p>
                    <p className="text-gray-600">
                      Founder - Landscape Ventures
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="blob"
              style={{
                position: "absolute",
                left: `${left}px`,
                top: `${top}px`,
              }}
              className="  max-w-[262px] min-h-[262px] z-0 w-full absolute left-[43%] top-[12%] "
            ></div>
            {/*  */}
          </div>
        </div>
      </section>
      {/*  */}
      <section area-aria-label="last-sec ">
        <div className="mt-[178px]  ">
          <h4 className="text-[48px] font-semi-bold leading-[76p.38x] text-center font-semibold color-gradient">
            30 TailwindCSS Templates
          </h4>
          <div className="relative -z-30">
            <div className="relative blue-green-gradient max-w-[1597px] w-full mx-auto  mt-[112px]">
              <div className="drkbg absolute"></div>
            </div>
            <div className="absolute inset-0 top-6">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/templates.png"
                className="mx-auto"
              />
            </div>
            <div className="absolute inset-x-0 top-[69%] w-full ">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/round-grad.png"
                className="mx-auto"
              />
            </div>
            <div className="bg-[#030014]  max-w-[1687px] min-h-[158px] inset-x-0 -bottom-[66%] absolute mx-auto w-full"></div>
          </div>
        </div>
      </section>
      {/*  footer*/}
      <section area-aria-label="footer" className="z-30">
        {/* logo */}
        <div className="flex flex-col gap-12 mt-[390px] ">
          <div className="max-w-[1216px] w-full mx-auto">
            <div className="flex justify-between">
              <div className="max-w-[320px] w-full">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/TukUpdatedLogov3.svg"
                  alt="tuk-logo"
                />
              </div>
              {/* menu */}
              <div className="flex max-w-[832px]  justify-evenly  w-full gap-8 ">
              
              
                <ul className="flex flex-col gap-4 max-w-[256px] w-full">
                 
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  FAQ
                  </li>
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Documentation
                  </li>
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Blog
                  </li>
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Changelog
                  </li>
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Pricing
                  </li>
                
                </ul>
                <ul className="flex flex-col gap-4 max-w-[256px] w-full">
                 
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Components
                  </li>
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  UI Kits
                  </li>
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Templates
                  </li>
                  
                  
                 
                </ul>

                <ul className="flex flex-col gap-4 max-w-[256px] w-full">
                  
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Contact us
                  </li>
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Privacy policy
                  </li>
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Terms of service
                  </li>
                  <li class="text-base font-medium hover:text-gray-500 cursor-pointer leading-none text-gray-300">
                  Become an affiliate
                  </li>
                 
                </ul>
              </div>
            </div>
            {/* social */}
          </div>
          <div className="bg-[#111827]">
            <div className="flex justify-between items-center max-w-[1216px] w-full mx-auto py-[32px] ">
              <div className="">
                <p className="text-gray-300">
                  © 2077 Untitled UI. All rights reserved.
                </p>
              </div>
              {/* icons */}
              <div className="flex gap-6">
                <svg
                  className="cursor-pointer"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                    fill="#9CA3AF"
                  />
                </svg>

                <svg
                  className="cursor-pointer"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_153_288)">
                    <path
                      d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                      fill="#9CA3AF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_153_288">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  className="cursor-pointer"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_153_291)">
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="#9CA3AF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_153_291">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  className="cursor-pointer"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_153_293)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
                      fill="#9CA3AF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_153_293">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
