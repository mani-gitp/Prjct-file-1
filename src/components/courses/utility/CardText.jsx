/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CardText = ({ courseData }) => {
  const { title, subtitle, description, link, benefits } = courseData;
  return (
    <>
      <section className="py-12">
        <div className="space-y-4">
            <p className="text-sm uppercase bg-white text-black rounded-md inline-block px-2 py-2 font-semibold">{subtitle}</p>
            <p className="text-2xl md:text-3xl font-bold uppercase">{title}</p>
            <p className="text-xs">{description}</p>
            <div>
              <ul className="space-y-2 text-xs list-disc pl-4 list-inside">
                {benefits.map((benefit) => (
                  <li>{benefit}</li>
                ))}
              </ul>
            </div>
            <button className="bg-white text-black uppercase rounded-full px-8 py-2 font-bold">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default CardText;
