import React from "react";
import { Button } from "./ui/button";

function Page2() {
  return (
    <div className="flex w-full flex-col items-center my-28 gap-10">
      <h1 className="lg:text-6xl text-2xl font-semibold">Find Popular Destinations</h1>
      <h4 className="text-center lg:text-lg text-wrap font-semibold">
        Take a look at our most rated popular visiting tourist spots. <br /> Our
        most popular place for foreign tourists.
      </h4>

      <div className="flex items-center  lg:flex-row flex-col gap-14 justify-around w-full ">
        <div className="w-80 h-96 bg-[#f6f4f0] flex flex-col gap-3 p-1 rounded-xl hover:shadow-xl ">
          <img src="/river.jpg" alt="" className="rounded-lg object-cover " />

          <h1 className="text-xl font-semibold">Rishikesh</h1>
          <h4 className="text-lg font-medium">River Rafting, Shivpuri</h4>

          <div className="flex justify-between">
            <h4>
              {" "}
              <span className="text-xl font-bold"> ₹500</span> /Person{" "}
            </h4>

            <Button className="bg-white text-orange-500 outline outline-orange-500 hover:bg-orange-500 hover:text-white mr-10">
              {" "}
              Book{" "}
            </Button>
          </div>
        </div>
        <div className="w-80 h-96 bg-[#f6f4f0] flex flex-col gap-3 p-1 rounded-xl">
          <img src="/river.jpg" alt="" className="rounded-lg object-cover " />

          <h1 className="text-xl font-semibold">Rishikesh</h1>
          <h4 className="text-lg font-medium">River Rafting, Shivpuri</h4>

          <div className="flex justify-between">
            <h4>
              {" "}
              <span className="text-xl font-bold"> ₹500</span> /Person{" "}
            </h4>

            <Button className="bg-white text-orange-500 outline outline-orange-500 hover:bg-orange-500 hover:text-white mr-10 ">
              {" "}
              Book{" "}
            </Button>
          </div>
        </div>
        <div className="w-80 h-96 bg-[#f6f4f0] flex flex-col gap-3 p-1 rounded-xl">
          <img src="/river.jpg" alt="" className="rounded-lg object-cover " />

          <h1 className="text-xl font-semibold">Rishikesh</h1>
          <h4 className="text-lg font-medium">River Rafting, Shivpuri</h4>

          <div className="flex justify-between">
            <h4>
              {" "}
              <span className="text-xl font-bold"> ₹500</span> /Person{" "}
            </h4>

            <Button className="bg-white text-orange-500 outline outline-orange-500 hover:bg-orange-500 hover:text-white mr-10">
              {" "}
              Book{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
