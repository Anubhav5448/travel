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
    <div className="w-full h-[100vh] flex justify-center mt-20 ">
      <div className="flex flex-col justify-center items-center gap-5 w-[60%] h-96 ">
        <div className="flex flex-row justify-around gap-5">
          <div className="flex  justify-center items-center flex-col w-32  h-32  bg-[#f6f4f0] rounded-xl  ">
            <Building size={30} />
            <h1 className=" relative top-4 text-lg font-semibold ">Hotel</h1>
            <h2 className="relative bottom-20 right-10 text-blue-200 font-bold">
              01
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col w-32  h-32  bg-[#f6f4f0] rounded-xl  ">
            <Plane size={30} />
            <h1 className=" relative top-4 text-lg font-semibold ">Travel</h1>
            <h2 className="relative bottom-20 right-10 text-blue-200 font-bold">
              02
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col w-32  h-32  bg-[#f6f4f0] rounded-xl  ">
            <CookingPot size={30} />
            <h1 className=" relative top-4 text-lg font-semibold ">Food</h1>
            <h2 className="relative bottom-20 right-10 text-blue-200 font-bold">
              03
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col w-32  h-32  bg-[#f6f4f0] rounded-xl  ">
            <Hospital size={30} />
            <h1 className=" relative top-4 text-lg font-semibold ">Health Care</h1>
            <h2 className="relative bottom-20 right-10 text-blue-200 font-bold">
              04
            </h2>
          </div>
        </div>
        <div className="flex flex-row justify-around gap-5">
          <div className="flex  justify-center items-center flex-col w-32  h-32  bg-[#f6f4f0] rounded-xl  ">
            <Briefcase size={30} />
            <h1 className=" relative top-4 text-lg font-semibold ">Business</h1>
            <h2 className="relative bottom-20 right-10 text-blue-200 font-bold">
              05
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col w-32  h-32  bg-[#f6f4f0] rounded-xl  ">
            <Book size={30} />
            <h1 className=" relative top-4 text-lg font-semibold ">Education</h1>
            <h2 className="relative bottom-20 right-10 text-blue-200 font-bold">
              06
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col w-32  h-32  bg-[#f6f4f0] rounded-xl  ">
            <PartyPopper size={30} />
            <h1 className=" relative top-4 text-lg font-semibold ">Wedding</h1>
            <h2 className="relative bottom-20 right-10 text-blue-200 font-bold">
              07
            </h2>
          </div>
          <div className="flex  justify-center items-center flex-col w-32  h-32  bg-orange-500  rounded-xl  ">
            <h1 className="text-white text-xl font-semisemibold">View More</h1>
          </div>
        </div>
      </div>

      <div className="w-[30%] h-96 flex flex-col justify-around ">
        <h1 className="text-6xl font-bold">We can Help you with</h1>

        <div className="relative  flex flex-col justify-center items-center rounded-2xl bg-[#f6f4f0] w-full h-44">
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
