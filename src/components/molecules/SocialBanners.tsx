"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import ArrowRightIcon from "@heroicons/react/16/solid/ArrowRightIcon";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { LogoInstagram } from "react-ionicons";

type Props = {
  iconComponent: Function;
  backgroundColor: string;
  link: string;
};

const SocialBanners = ({ iconComponent, backgroundColor, link }: Props) => {
  const onClick = () => {
    typeof window !== "undefined" && window.open(link, "__blank");
  };
  return (
    <div
      onClick={onClick}
      className='w-full h-full relative flex justify-center items-center p-0 m-0'
      style={{
        background: backgroundColor,
      }}
    >
      {iconComponent()}
      <div className='absolute bottom-2 right-2 md:bottom-5 md:right-5'>
        <ShimmerButton className='shadow-2xl'>
          <span className='test whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
            <ArrowRightIcon height={12} width={12} color='#fff' />
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
};

export default SocialBanners;
