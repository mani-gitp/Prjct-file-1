/* eslint-disable no-unused-vars */
import React from "react";
import CardText from "./utility/CardText";
import CourseImg from "../../assets/banner2.png";

const courseData = {
  subtitle: "AI",
  title: "MASTER CHATGPT: TRANSFORM YOUR LIFE WITH AI CHATBOTS",
  description:
    "Artificial Intelligence is changing the world. Learn to use the power of ChatGPT at its full potential to level up your productivity at work, school and at home. Discover the basics of machine learning and prompt engineering.",
  benefits: [
    "Find your niche based on your passion and skills.",
    "Learn to ideate, script, film, and edit videos.",
    "Understand the secret to getting lakhs of followers.",
    "Discover ways to earn money as a creator.",
  ],
  link: "#",
};
const CourseCard2 = () => {
  return (
    <>
      <section className="py-12">
      <div className="container bg-[#0e0e0f] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <img src={CourseImg} alt="" className="object-cover h-full w-full"/>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#0e0e0f] from-1% to-transparent to-10%">

            </div>
          </div>
          <div className="p-12 py-16 flex flex-col justify-center">
            <CardText courseData={courseData}/>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseCard2;
