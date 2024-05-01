import { Album, LampCeiling, Map, Navigation } from "lucide-react";
import React from "react";

function Page3() {
  return (
    <div className="flex flex-col  lg:flex-row w-[90%] h-[110vh] p-16 justify-center bg-[#f6f4f0]">
      <div className="flex flex-col lg:w-[50%] w-full  justify-around items-center gap-10 ">
        <h1 className="lg:font-bold font-semibold lg:text-4xl text-2xl  text-left lg:text-wrap ">
          What are our Advantages compared to others{" "}
        </h1>
        <p className="text-lg font-medium text-wrap">
          We strive for excellence in all we do and ensure customer satisfaction
          every step of the way.
        </p>

        <div className="bg-white w-80 lg:w-[30rem] h-32 flex flex-row justify-around items-center text-center rounded-xl ">
          <div>
            <h1 className="font-semibold text-xl">2.5K+</h1>
            <p className="font-medium text-lg">Tour Guides</p>
          </div>
          <div>
            <h1 className="font-semibold text-xl">300</h1>
            <p className="font-medium text-lg">Visited Place</p>
          </div>
          <div>
            <h1 className="font-semibold text-xl">15+</h1>
            <p className="font-medium text-lg">New Place Add</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:justify-around lg:w-[50%] mt-10 lg:mt-0  items-center w-full lg:items-start ">
        <div className="flex flex-row gap-20 justify-between">
          <div className="gap-3 flex flex-col  relative  lg:w-fit ">
            <Map className="text-yellow-400" />
            <h1 className="font-semibold text-sm lg:text-xl">Lot of Choices</h1>
            <p className="lg:text-base lg:font-light text-xs   text-wrap">
              Discover captivating destinations to create memorable stories on
              your journey.
            </p>
          </div>
          <div className=" relative lg:w-fit  gap-3 flex flex-col   ">
            <Album className="text-blue-400" />
           <div className="relative flex flex-col gap-3">
           <h1 className="font-semibold text-sm lg:text-xl">Easy Booking</h1>
           <p className="lg:text-base lg:font-light text-xs   text-wrap">
              Expert guides to unveil the wonders of the world and enhance your
              exploration.
            </p>
           </div>
          </div>
        </div>

        <div className="flex flex-row gap-20 justify-between">
        <div className=" relative lg:w-fit  gap-3 flex flex-col  ">
            <Navigation className="text-red-400" />
            <h1 className="font-semibold text-sm lg:text-xl">Best Tour Guide</h1>
           <p className="lg:text-base lg:font-light text-xs   text-wrap">
              Expert guides to unveil the wonders of the world and enhance your
              exploration.
            </p>
          </div>{" "}
          <div className="gap-3 relative lg:w-fit flex flex-col ">
            <LampCeiling className="text-orange-400" />
            <h1 className="font-semibold text-sm lg:text-xl">Accomodation</h1>
           <p className="lg:text-base lg:font-light text-xs   text-wrap">
              There are many choices of interesting places to make a story in
              your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
