/* eslint-disable no-unused-vars */
import React from "react";
import CardText from "./utility/CardText";
import CourseImg from "../../assets/banner3.png";

const courseData = {
  subtitle: "Content Creation",
  title: "How to do a Million Things All At Once",
  description:
    "Become a Master of Time Management and Productivity. Learn from me as I teach you how to plan your day, track your time, achieve your goals and live your dream life!",
  benefits: [
    "Practical tips to manage your time and boost productivity",
    "Assignments to help you practice what you learn",
    "Balance your life and spend time on the things you love.",
  ],
  link: "#",
};
const CourseCard = () => {
  return (
    <>
      <section className="py-12">
        <div className="container bg-[#0e0e0f] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 py-16 flex flex-col justify-center">
            <CardText courseData={courseData}/>
          </div>
          <div className="relative">
            <img src={CourseImg} alt="" className="h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0e0e0f] from-1% to-transparent to-10%">

            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseCard;
