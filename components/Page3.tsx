import { Album, LampCeiling, Map, Navigation } from "lucide-react";
import React from "react";

function Page3() {
  return (
    <div className="flex flex-row w-[90%] h-[90vh] p-20 bg-[#f6f4f0]">
      <div className="flex flex-col w-[50%] justify-around ">
        <h1 className="font-bold text-4xl text-wrap">
          What are our Advantages compared to others{" "}
        </h1>
        <p className="text-lg font-medium text-wrap">
          We strive for excellence in all we do and ensure customer satisfaction
          every step of the way.
        </p>

        <div className="bg-white w-[30rem] h-32 flex flex-row justify-around items-center rounded-xl ">
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

      <div className="flex flex-col justify-around w-[50%]">
        <div className="flex flex-row justify-between">
          <div className="gap-3 flex flex-col">

            <Map className="text-yellow-400"/>
            <h1 className="font-semibold text-xl">Lot of Choices</h1>
            <p className="text-normal font-light">
              Discover captivating destinations to create memorable stories on
              your journey.
            </p>
          </div>
          <div className="gap-3 flex flex-col">
            <Album className="text-blue-400" />
            <h1 className="font-semibold text-xl">Easy Booking</h1>
            <p className="text-normal font-light">
             Expert guides to unveil the wonders of the world and enhance your exploration.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="gap-3 flex flex-col">
            <Navigation className="text-red-400"/>
            <h1 className="font-semibold text-xl">Best Tour Guide</h1>
            <p className="text-normal font-light">
            Expert guides to unveil the wonders of the world and enhance your exploration.
            </p>
          </div>{" "}
          <div className="gap-3 flex flex-col">
            <LampCeiling className="text-orange-400"/>
            <h1 className="font-semibold text-xl">Accomodation</h1>
            <p className="text-normal font-light">
             There are many choices of interesting places to make a story in your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
