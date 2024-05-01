import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <div className="w-full h-28  flex justify-around items-center ">
      <div className="relative hidden lg:inline-grid h-52 w-52">
        {/* logo */}
        <Image src="/Logo.png" fill objectFit="contain" alt="logo" />
      </div>
      <div className="relative lg:hidden  h-24 w-24">
        {/* logo */}
        <Image src="/logo-sm.png" fill objectFit="contain" alt="logo" />
      </div>



      {/* Center */}
      <div className="w-96 hidden lg:flex justify-between items-center">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Destination</Link>
        <Link href="/">Tour </Link>
        <Link href="/">Blog</Link>
      </div>

      {/* Right */}


     

      <div className="gap-6  hidden lg:flex ">
        <Button className="bg-white text-black hover:bg-white">Login</Button>
        <Button className="hover:bg-black">SignUp</Button>
      </div>
      <Hamburger  />
    </div>
  );
}

export default Header;
