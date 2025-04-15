/* eslint-disable no-unused-vars */
import React from "react";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import BodyGrains from "../../assets/body-grains.png";

const bgGrainy = {
  backgroundImage: `url(${BodyGrains})`,
  backgroundRepeat: "repeat",
};

const FocusOn = () => {
  return (
    <>
      <section style={bgGrainy}>
        <div className="container py-12 md:py-24">
         {/*           title section */}
         <p className="text-3xl md:text-5xl font-bold text-center uppercase">Lorem ipsum dolor sit amet </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
              <div className="flex flex-wrap xl:flex-nowrap justify-between gap-6">
                <p className="text-4xl font-bold pr-5">Lorem ipsum dolor sit amet.</p>
                <div className="bg-white text-black h-24 flex-shrink-0 w-24 flex justify-center items-center rounded-3xl">
                  <IoChatboxEllipsesSharp className="text-5xl"/>
                </div>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi excepturi maiores.</p>
            </div>
            <div className="space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
              <div className="flex flex-wrap xl:flex-nowrap justify-between gap-6">
                <p className="text-4xl font-bold pr-5">Lorem ipsum dolor sit amet.</p>
                <div className="bg-white text-black h-24 flex-shrink-0 w-24 flex justify-center items-center rounded-3xl">
                  <IoChatboxEllipsesSharp className="text-5xl"/>
                </div>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi excepturi maiores.</p>
            </div>
            <div className="space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
              <div className="flex flex-wrap xl:flex-nowrap justify-between gap-6">
                <p className="text-4xl font-bold pr-5">Lorem ipsum dolor sit amet.</p>
                <div className="bg-white text-black h-24 flex-shrink-0 w-24 flex justify-center items-center rounded-3xl">
                  <IoChatboxEllipsesSharp className="text-5xl"/>
                </div>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi excepturi maiores.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
              <div className="flex flex-wrap xl:flex-nowrap justify-between gap-6">
                <p className="text-4xl font-bold pr-5">Lorem ipsum dolor sit amet.</p>
                <div className="bg-white text-black h-24 flex-shrink-0 w-24 flex justify-center items-center rounded-3xl">
                  <IoChatboxEllipsesSharp className="text-5xl"/>
                </div>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi excepturi maiores.</p>
            </div>
            <div className="space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
              <div className="flex flex-wrap xl:flex-nowrap justify-between gap-6">
                <p className="text-4xl font-bold pr-5">Lorem ipsum dolor sit amet.</p>
                <div className="bg-white text-black h-24 flex-shrink-0 w-24 flex justify-center items-center rounded-3xl">
                  <IoChatboxEllipsesSharp className="text-5xl"/>
                </div>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi excepturi maiores.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FocusOn;
