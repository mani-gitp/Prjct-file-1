/* eslint-disable no-unused-vars */
// import React from "react";
// import BgImage from "../../assets/hero-bg.png";
// import HeroImg from "../../assets/hero.png";
// import learners from "../../assets/learners.png";
// import Navbar from "../navbar/Navbar";

// const bgStyle = {
//   backgroundImage: `url(${BgImage})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// };

// const Hero = () => {
//   return (
//     <>
//       <section style={bgStyle} className="pt-3">
//         {/* Navbar section */}
//         <div className="container">
//           <div className="fixed top-3 left-0 w-full z-[999999]">
//             <Navbar />
//           </div>
//         </div>
//         <div className="container min-h-[700px] grid grid-cols-1 md:grid-cols-2">
//           {/* Text content section */}
//           <div></div>
//           {/* Hero Image section */}
//           <div></div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;
import React from "react";
import BgImage from "../../assets/hero-bg.png";
import HeroImg from "../../assets/hero.png";
import learners from "../../assets/learners.png";
import Navbar from "../navbar/Navbar";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <>
      <section style={bgStyle} className="pt-3">
        {/* Navbar section */}
        <div className="container">
          <div className="fixed top-3 left-0 w-full z-[999999]">
            <Navbar />
          </div>
        </div>
        <div className="container min-h-[700px] grid grid-cols-1 md:grid-cols-2">
          {/* Text content section */}
          <div className="flex flex-col justify-center h-full gap-5">
            <h1 className="uppercase text-3xl md:text-4xl font-extrabold">Lorem, ipsum dolor.</h1>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatibus maxime! Numquam quod facilis cum, necessitatibus nobis voluptate? Amet dignissimos assumenda mollitia corrupti?</p>
            <div>
              <button className="bg-white text-red-500 px-16 py-2 rounded-full uppercase font-bold">Explore Courses</button>
            </div>
            <div className="flex items-center gap-4">
              <img src={learners} alt="" className="max-w-[120px]"/>
              <div className="opacity-50">
                <p>10000+</p>
                <p className="text-xs">Happy Learnes</p>
              </div>
              <div>
                <p className="text-sm">4.9+ (600+ Rating)</p>
                <div>
                ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
            
          </div>
          {/* Hero Image section */}
          <div className="flex justify-center items-end">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;