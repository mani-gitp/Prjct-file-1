/* eslint-disable no-unused-vars */
import React from "react";
import Dhruv1 from "../../assets/dhruv1.png";
import Dhruv2 from "../../assets/dhruv2.png";
import Dhruv3 from "../../assets/dhruv3.jpeg";
import { GoVerified } from "react-icons/go";

const CardData = [
  {
    id: 1,
    channelName: "Dhruv Rathee",
    handle: "dhruvrathee",
    subscribers: "12M+",
    videos: "540+",
    link: "#",
    image: Dhruv1,
  },
  {
    id: 2,
    channelName: "Dhruv Rathee Vlogs",
    handle: "DhruvRatheeVlogs",
    subscribers: "12M+",
    videos: "540+",
    link: "#",
    image: Dhruv2,
  },
  {
    id: 3,
    channelName: "Dhruv Rathee Shorts",
    handle: "DRshorts",
    subscribers: "12M+",
    videos: "540+",
    link: "#",
    image: Dhruv3,
  },
];
const MyWork = () => {
  return (
    <>
      <section>
        <div className="container py-12 md:py-24">
          <h1 className="uppercase text-3xl md:text-5xl font-bold text-center mb-12">My work</h1>

          {/* card section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CardData.map((card) => {
              return (
                <div className="p-4 rounded-3xl md:p-8 bg-[#1b1b1b]" key={card.id}>
                  <img src={card.image} alt={card.channelName} className="w-full rounded-2xl" />
                  <div className="flex flex-col justify-between h-[300px]">
                    <div className="text-center pt-7 space-y-3">
                      <p className="text-4xl md:text-5xl font-bold">{card.channelName}<span className="inline-block pl-4">
                        <GoVerified className="text-[24px] text-green-500" /></span></p>
                      <p className="text-lg md:text-xl text-gray-400">@{card.handle}</p>
                      <div className="flex justify-center gap-4">
                        <p className="text-lg md:text-xl text-gray-400">{card.subscribers} Subscribers</p>
                        <p className="text-lg md:text-xl text-gray-400">{card.videos} Videos</p>
                      </div>
                    </div>
                    <div className="">
                      <button className="inline-block uppercase border w-full py-4 border-white text-white  rounded-full px-8">View Channel</button>
                    </div>
                  </div>
                </div>

              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default MyWork;
