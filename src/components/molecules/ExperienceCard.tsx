"use client";

import React from "react";

import LearningPathItem from "@/components/atoms/LearningPathItem";

const ExperienceCard = () => {
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      <div className=' w-full'>
        <p className='text-xl font-bold '>Lead Full Stack Developer</p>
        <p className='text-xs font-semibold '>Learnyst 2019 - present</p>
      </div>

      <LearningPathItem
        titleClassName='font-bold text-sm'
        descClassName='font-semibold text-xs'
        centerImage={false}
        icon='/performance.png'
        title='SEO & Performance Optimization'
        description='Enhanced web app speed 10x with high SEO.'
      />
      <LearningPathItem
        titleClassName='font-bold text-sm'
        descClassName='font-semibold text-xs'
        centerImage={false}
        icon='/rnperformance.png'
        title='Native Performance Optimization'
        description='Improved performance from 60% to over 90%.'
      />
      <LearningPathItem
        titleClassName='font-bold text-sm'
        descClassName='font-semibold text-xs'
        centerImage={false}
        icon='/aws.png'
        title='Highly Scalable Service'
        description='Scaled app to handle 4 million users.'
      />
      <LearningPathItem
        titleClassName='font-bold text-sm'
        descClassName='font-semibold text-xs'
        centerImage={false}
        icon='/analytics.png'
        title='Analytics Insights'
        description='Developed in-house tool processing 100M records/day.'
      />
      <LearningPathItem
        titleClassName='font-bold text-sm'
        descClassName='font-semibold text-xs'
        centerImage={false}
        icon='/award.png'
        title='Special Recognition'
        description='Three-time Employee of the Year award.'
      />
      <LearningPathItem
        titleClassName='font-bold text-sm'
        descClassName='font-semibold text-xs'
        centerImage={false}
        icon='/lead.png'
        title='Leadership & Ownership'
        description='Led team and project with full ownership.'
      />
    </div>
  );
};

export default ExperienceCard;
