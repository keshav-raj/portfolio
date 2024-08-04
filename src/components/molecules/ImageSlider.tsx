"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import { Image } from "@nextui-org/image";

const ImageSlider = ({ items }: { items: Array<string> }) => {
  return (
    <div className='h-full w-full'>
      <Fade
        cssClass='h-full w-full align-center'
        arrows={false}
        duration={3000}
        transitionDuration={1000}
      >
        {(items || []).map((imageSrc, index) => {
          return (
            <div
              key={`${index}_img`}
              className='flex items-center justify-center'
            >
              <Image
                key={`${index}_img`}
                width={250}
                height={250}
                alt='Keshav Raj'
                className='object-cover'
                src={imageSrc}
              />
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default ImageSlider;
