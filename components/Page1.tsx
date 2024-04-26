import React from 'react'
import { Button } from './ui/button'

function Page1() {
  return (
    
        
      <div className="mx-20 my-7 flex flex-col items-center gap-16">
        <h1 className="text-6xl font-bold">Discover World You Know</h1>

        <div className="flex flex-row justify-between gap-5">
          {/* Image */}
          <img
            src="/hero.jpg"
            className="w-[60%] h-96 object-cover rounded-3xl "
          />

          <div className="flex flex-col w-[40%] gap-6">
            <p className="text-wrap">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium sapiente, maxime culpa incidunt at, fuga rerum
              repellendus suscipit minus accusamus blanditiis commodi nam
              doloremque dolore eveniet ducimus vel iure. Consequuntur
              aspernatur quaerat ipsum recusandae?
            </p>

            <div className="flex gap-5">
              <Button className="bg-orange-500 text-white hover:bg-orange-500 gap-2">
                Get you <span className="text-black ">-30%</span>
              </Button>
              <Button className="bg-orange-100 text-black hover:bg-orange-100">
                Explore More
              </Button>
            </div>

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
      </div>

  )
}

export default Page1