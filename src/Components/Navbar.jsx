import Logo from "@/assets/svgs/Logo";
import React from "react";
import Link from "next/link";
import GmailIcn from "@/assets/svgs/Gmail-Icn";

const Navbar = () => {
  return (
    <div className="w-full h-[112px] flex items-center justify-center font-Bricolage">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-20">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-[34px]">
            <Link href="#" className="text-lg font-medium">
              About Us
            </Link>
            <Link href="#" className="text-lg font-medium">
              Our Services
            </Link>
            <Link href="#" className="text-lg font-medium">
              Our Project
            </Link>
            <Link href="#" className="text-lg font-medium">
              Team Case Study
            </Link>
          </div>
        </div>
        <Link
          href="#"
          className="text-lg font-medium flex items-center justify-center gap-3 bg-[#F5F5F5] rounded-full py-4 px-[30px] active:scale-95"
        >
          <GmailIcn /> <h4 className="text-center">ourteam@gmail.com</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
