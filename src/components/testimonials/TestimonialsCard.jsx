/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TestimonialsCard = ({ id, name, review, rating }) => {
  return (
    <>
      <section className="p-12 bg-[#222222] rounded-3xl flex justify-center items-center">
      <div>
      <p className="text-6xl font-serif rotate-180 inline-block">,,</p>
      <p>{review}</p>
      <div className="flex items-center gap-4 mt-8">
        <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center text-black text-3xl">
        {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p>{name}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      </div> 
      </section>
    </>
  );
};

export default TestimonialsCard;
