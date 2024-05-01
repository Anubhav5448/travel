import {
  Book,
  Briefcase,
  Building,
  CookingPot,
  Hospital,
  PartyPopper,
  Plane,
} from "lucide-react";
import React from "react";

function Page4() {
  return (
    <div className="w-full h-[90vh] flex lg:flex-row flex-col-reverse items-center justify-center mt-10">
      <div className="flex flex-col  justify-center items-center gap-5 lg:w-[60%] w-full h-[80vh] ">
        <div className="flex flex-row relative justify-around gap-5">
          <div className="flex  justify-center items-center flex-col lg:w-32  lg:h-32 w-20 h-20 bg-[#f6f4f0] rounded-xl  ">
            
            <Building size={30} />
            <h1 className=" relative top-4 lg:text-lg text-xs text-center font-semibold ">Hotel</h1>
            <h2 className="relative bottom-20 right-10 hidden lg:inline text-blue-200 font-bold">
              01
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col lg:w-32  lg:h-32 w-20 h-20 bg-[#f6f4f0] rounded-xl  ">
            <Plane size={30} />
            <h1 className="text-xs text-center relative top-4 lg:text-lg font-semibold ">Travel</h1>
            <h2 className="relative bottom-20 right-10 hidden lg:inline  text-blue-200 font-bold">
              02
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col lg:w-32  lg:h-32 w-20 h-20 bg-[#f6f4f0] rounded-xl  ">
            <CookingPot size={30} />
            <h1 className="text-xs text-center relative top-4 lg:text-lg font-semibold ">Food</h1>
            <h2 className="relative bottom-20 right-10 hidden lg:inline  text-blue-200 font-bold">
              03
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col lg:w-32  lg:h-32 w-20 h-20 bg-[#f6f4f0] rounded-xl  ">
            <Hospital size={30} />
            <h1 className="text-xs text-center relative top-4 lg:text-lg font-semibold ">
              Health Care
            </h1>
            <h2 className="relative bottom-20 right-10 hidden lg:inline  text-blue-200 font-bold">
              04
            </h2>
          </div>
        </div>
        <div className="flex flex-row justify-around gap-5">
          <div className="flex  justify-center items-center flex-col lg:w-32  lg:h-32 w-20 h-20 bg-[#f6f4f0] rounded-xl  ">
            <Briefcase size={30} />
            <h1 className="text-xs text-center relative top-4 lg:text-lg font-semibold ">Business</h1>
            <h2 className="relative bottom-20 right-10 hidden lg:inline  text-blue-200 font-bold">
              05
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col lg:w-32  lg:h-32 w-20 h-20 bg-[#f6f4f0] rounded-xl  ">
            <Book size={30} />
            <h1 className="text-xs text-center relative top-4 lg:text-lg font-semibold ">
              Education
            </h1>
            <h2 className="relative bottom-20 right-10 hidden lg:inline  text-blue-200 font-bold">
              06
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col lg:w-32  lg:h-32 w-20 h-20 bg-[#f6f4f0] rounded-xl  ">
            <PartyPopper size={30} />
            <h1 className="text-xs text-center relative top-4 lg:text-lg font-semibold ">Wedding</h1>
            <h2 className="relative bottom-20 right-10 hidden lg:inline  text-blue-200 font-bold">
              07
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col lg:w-32  lg:h-32 w-20 h-20 bg-orange-500  rounded-xl  ">
            <h1 className="text-xs text-center text-white lg:text-xl font-semisemibold">View More</h1>
          </div>
        </div>
      </div>

      <div className="lg:w-[30%] w-full text-center h-96 flex flex-col justify-around items-center ">
        <h1 className="lg:text-6xl text-3xl font-bold">We can Help you with</h1>

        <div className="relative  flex flex-col justify-center items-center rounded-2xl bg-[#f6f4f0] lg:w-full w-[90%] h-44">
          <div className="flex flex-row  gap-6 justify-around">
            <div>
              <h2 className="font-semibold text-3xl">9K+</h2>
              <h1 className=" text-lg">Total Listings</h1>
            </div>
            <div>
              <h2 className="font-semibold text-3xl">9K+</h2>
              <h1 className=" text-lg">Total Listings</h1>
            </div>
            <div>
              <h2 className="font-semibold text-3xl">9K+</h2>
              <h1 className=" text-lg">Total Listings</h1>
            </div>
          </div>

          <img
            src="/mini.jpg"
            alt="mini"
            className="object-fill w-[90%] h-20 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Page4;
