import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function Ideas() {
  const SubmitLink = () => {
    window.open("https://forms.gle/ucPMcgmtFXk7zdhN7", "_blank");
  };

  return (
    <div>
      {/* Header */}

      <div className="">
        <Nav />
      </div>

      <div className="container  justify-center p-6 mx-auto sm:py-12 sm:px-48 lg:py-20 lg:flex-row sm:text-center">
        <h1 className="text-black mt-24 max-sm:text-center">
          <span className=" font-semibold sm:text-3xl max-sm:text-2xl">
            Make Your Video Colorfull With
            <span className="text-orange-400"> Collos</span>
            <span className="text-orange-300">sentials</span>
          </span>
        </h1>
        <p className="tracking-normal sm:text-base max-sm:mt-2 font-light max-sm:px-5 max-sm:text-xs mx-64 mt-5 text-slate-600">
          offering video results that create an atmosphere and convey emotions
          that match the client's wishes and the message in the video.
        </p>

        <div className="mt-5">
          <button
            onClick={SubmitLink}
            className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-full py-3 px-7 text-white text-sm"
          >
            order →
          </button>
        </div>
      </div>

      <div className="flex  justify-center">
        <img
          src="/assets/banner.jpg"
          className="w-[800px] h-[500px] rounded-3xl"
          alt=""
        />
      </div>

      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col text-center shadow py-20 rounded-lg   mt-10 mx-20">
          <div className="font-semibold text-3xl text-orange-500">
            Enhance Your Videos Instantly
          </div>
          <div className="text-base mt-5 mx-20">
            Give your videos a unique style by adjusting and enhancing their
            colors. With Collosentials' color grading service, you can make your
            footage more vibrant or create a muted, cinematic feel. Customize
            the color tones until your video reaches the perfect aesthetic—no
            advanced editing skills required! The best part? You can achieve all
            of this quickly and effortlessly
          </div>
        </div>
      </ScrollAnimation>

      <div>
        <div className=" bg-white sm:mt-16">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 sm:px-40 lg:py-20 lg:flex-row lg:justify-between">
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="flex flex-col justify-center text-black  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="max-sm:text-xl max-sm:mt-10 text-black font-medium sm:text-3xl  max-sm:hidden -mt-5">
                  Why Must <span className="text-orange-400">Collos</span>
                  <span className="text-orange-300">sentials ? </span>
                </h1>
                <table className="mt-2">
                  <tbody>
                    <tr className="font-extralight items-start text-base ">
                      <td className="mb-6 pr-3 sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                        <img src="/assets/1.svg" className="w-40" alt="" />
                      </td>
                      <td className="pl-3 pt-6 ">
                        <span className="font-medium tracking-wide sm:text-lg">
                          Professional Grade Visuals
                        </span>
                        <br />
                        <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                          Our expert colorists utilize industry-standard tools
                          to enhance the visual aesthetics of your content,
                          ensuring cinematic quality that captivates audiences.
                        </span>
                      </td>
                    </tr>

                    <tr className="font-extralight  items-start text-base ">
                      <td className="mb-6 pr-3  sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                        <img src="/assets/2.svg" alt="" />
                      </td>
                      <td className="pl-3 pt-6">
                        {" "}
                        <span className="font-medium tracking-wide sm:text-lg">
                          {" "}
                          Tailored to Your Style
                        </span>
                        <br />{" "}
                        <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                          We customize the color grading process to match your
                          vision and branding, creating unique and memorable
                          visuals that stand out in any medium.
                        </span>
                      </td>
                    </tr>
                    <tr className="font-extralight  items-start text-base ">
                      <td className="mb-6 pr-3 sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                        <img src="/assets/3.svg" alt="" />
                      </td>
                      <td className="pl-3 pt-6">
                        {" "}
                        <span className="font-medium tracking-wide sm:text-lg">
                          {" "}
                          Fast Turnaround with Premium Quality
                        </span>
                        <br />
                        <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                          {" "}
                          At Collosentials, we deliver high-quality results
                          efficiently, ensuring your project meets deadlines
                          without compromising on excellence.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight">
              <div className="max-sm:hidden flex items-center justify-center  mt-8 lg:mt-20 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  className="w-[500px] h-[500px] sm:hidden lg:flex sm:-mt-14 rounded-3xl"
                  src="/assets/banner2.jpg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <ScrollAnimation animateIn="fadeIn">
        <div className=" bg-gray-100 sm:mt-5">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 sm:px-40 lg:py-20 lg:flex-row lg:justify-between">
            <div className="max-sm:hidden flex items-center justify-center  mt-8 lg:mt-20 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                className="w-[600px] h-[500px] sm:hidden lg:flex sm:-mt-14 rounded-3xl"
                src="/assets/banner3.png"
              />
            </div>

            <div className="flex flex-col justify-center text-slate-800  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="max-sm:text-xl max-sm:mt-10 text-black font-semibold leading-none sm:text-4xl tracking-wide  max-sm:hidden">
                What We <span className="text-orange-400">Offer ?</span>
              </h1>
              <table className="mt-2">
                <tbody>
                  <tr className="font-extralight items-start text-base ">
                    <td className=" pr-3 sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                      <img src="/assets/4.png" alt="" />
                    </td>
                    <td className="pl-3 pt-6 ">
                      <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                        Transform your footage into a captivating visual
                        experience by enhancing color tones, contrast, and mood
                        to match your creative vision.
                      </span>
                    </td>
                  </tr>

                  <tr className="font-extralight  items-start text-base ">
                    <td className="mb-6 pr-3  sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                      <img src="/assets/5.png" className="w-20" alt="" />
                    </td>
                    <td className="pl-3 pt-6">
                      <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                        Our expert team works closely with you to achieve the
                        perfect balance of colors, ensuring that your video
                        reflects your brand’s unique style and message.
                      </span>
                    </td>
                  </tr>
                  <tr className="font-extralight  items-start text-base ">
                    <td className="mb-6 pr-3 sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                      <img src="/assets/6.png" alt="" />
                    </td>
                    <td className="pl-3 pt-6">
                      <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                        {" "}
                        We deliver high-quality color grading with quick
                        turnaround times, making sure your project stays on
                        schedule without compromising on excellence.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-center mt-10">
                <button className="bg-gradient-to-r from-orange-600 to-orange-400 text-black font-semibold py-3 px-20 rounded-full max-sm:text-xs">
                  Get Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="border-black border-b-2 rounded-full my-3 w-20 mx-auto   max-sm:mt-8 sm:mt-20 "></div>

      <h1 className="flex sm:mb-4 sm:text-3xl font-normal sm:mt-5 justify-center text-center text-black max-sm:text-xl">
        How To Use us?
      </h1>

      <ScrollAnimation animateIn="fadeIn">
        <div className="bg-gray-50 pb-12 pt-5 mx-40">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Upload Your Photo/Video */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="mb-4">
                  <div className="bg-white p-4 rounded-md">
                    <img
                      src="assets/card1.webp"
                      alt="Upload"
                      className="mx-auto w-24"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Upload Your Video
                </h3>
                <p className="text-xs text-slate-700 font-light">
                  Open Your Google Drive. Then, click the Upload button to
                  upload your files. Alternatively, drag and drop your image or
                  video file directly.
                </p>
              </div>

              {/* Card 2: Auto Color the Photo/Video */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="mb-4">
                  <div className="bg-white p-4 rounded-md">
                    <img
                      src="assets/card2.webp"
                      alt="Upload"
                      className="mx-auto w-24"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fill Our Form</h3>
                <p className="text-xs text-slate-700 font-light">
                  Open the Link Form on our Web. And then, you can fill the form
                </p>
              </div>

              {/* Card 3: Preview and Download */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="mb-4">
                  <div className="bg-white p-4 rounded-md">
                    <img
                      src="assets/card3.webp"
                      alt="Upload"
                      className="mx-auto w-24"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Done</h3>
                <p className="text-xs text-slate-700 font-light">
                  Wait Our Confirmation Via Wa/Gmail. Always check your Wa/Gmail
                  Recently
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
