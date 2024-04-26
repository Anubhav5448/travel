import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="w-full h-24  flex justify-around items-center ">
      {/* logo */}
      <Image src="/Logo.png" width={250} height={36} alt="logo" />


      {/* Center */}
      <div className="w-96 flex justify-between items-center">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Destination</Link>
        <Link href="/">Tour </Link>
        <Link href="/">Blog</Link>
      </div>

      {/* Right */}

      <div className="gap-6 flex">
        <Button className="bg-white text-black hover:bg-white">Login</Button>
        <Button className="hover:bg-black">SignUp</Button>
      </div>
    </div>
  );
}

export default Header;
