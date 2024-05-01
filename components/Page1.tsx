import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Page1() {
  return (
    <div className="mx-20 my-7 flex flex-col items-center gap-16">
      <h1 className="lg:text-6xl font-bold text-3xl text-center ">
        Discover World You Know
      </h1>

      <div className="flex lg:flex-row flex-col justify-between gap-5">
        {/* Image */}
        <div className="lg:w-[50rem] lg:h-96 w-80 h-40 relative  ">
          <Image
            src="/hero.jpg"
            alt="heor"
            fill
            className="rounded-3xl "
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col lg:w-[40%] w-full gap-6">
          <p className="text-wrap">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium sapiente, maxime culpa incidunt at, fuga rerum
            repellendus suscipit minus accusamus blanditiis commodi nam
            doloremque dolore eveniet ducimus vel iure. Consequuntur aspernatur
            quaerat ipsum recusandae?
          </p>

          <div className="flex gap-5">
            <Button className="bg-orange-500 text-white hover:bg-orange-500 gap-2">
              Get you <span className="text-black ">-30%</span>
            </Button>
            <Button className="bg-orange-100 text-black hover:bg-orange-100">
              Explore More
            </Button>
          </div>

          <div className="relative  flex flex-col justify-center items-center rounded-2xl bg-[#f6f4f0] w-full h-52 lg:h-44">
            <div className="flex flex-row  gap-6 justify-around">
              <div className="flex flex-col text-center">
                <h2 className="font-semibold text-3xl">9K+</h2>
                <h1 className=" text-lg">Total Listings</h1>
              </div>
              <div className="flex flex-col text-center">
                <h2 className="font-semibold text-3xl">9K+</h2>
                <h1 className=" text-lg">Total Listings</h1>
              </div>
              <div className="flex flex-col text-center">
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
    </div>
  );
}

export default Page1;
