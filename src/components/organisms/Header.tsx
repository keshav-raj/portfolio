"use client";
import React from "react";
import ThemeSwitch from "@/components/molecules/ThemeSwitch";
import HeaderTabs from "@/components/molecules/HeaderTabs";
import ShimmerButton from "@/components/magicui/shimmer-button";

const Header = () => {
  const DownloadResume = () => {
    typeof window !== "undefined" &&
      window.open(
        "https://drive.google.com/file/d/1V_Ke_0raKtEKVnvv1d9acffao15js28C/view?usp=sharing",
        "__blank"
      );
  };
  return (
    <header className='items-center'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <ThemeSwitch />
        </div>
        <div className='hidden md:flex md:gap-x-12 lg:flex lg:gap-x-12'>
          <HeaderTabs />
        </div>
        <div className='lg:flex lg:flex-1 lg:justify-end'>
          <ShimmerButton onClick={DownloadResume}>
            <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white '>
              Resume
            </span>
          </ShimmerButton>
        </div>
      </nav>
      <div className='lg:hidden md:hidden sm:flex sm:gap-x-12 justify-center'>
        <HeaderTabs />
      </div>
    </header>
  );
};
export default Header;
