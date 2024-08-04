"use client";

import React from "react";

import LearningPathItem from "@/components/atoms/LearningPathItem";

const SkillCard = () => {
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      <p className='text-2xl'>What I know?</p>
      <div className='h-10' />

      <LearningPathItem
        icon='/react.png'
        title='React + Next.js'
        description='Strategic Code Design Expert'
      />
      <LearningPathItem
        icon='/rn.png'
        title='React Native'
        description='Mastermind of System Architecture'
      />
      <LearningPathItem
        icon='/aws.png'
        title='AWS cloud services'
        description='Seasoned Leader in Development'
      />
      <LearningPathItem
        icon='/ror.png'
        title='Ruby On Rails'
        description='Guardian of Production Stability'
      />
      <LearningPathItem
        icon='/mysql.png'
        title='Mysql'
        description='Experienced Senior Software Developer'
      />
      <LearningPathItem
        icon='/ai.png'
        title='AI and ML'
        description='Passionate About Continuous Learning'
      />
    </div>
  );
};

export default SkillCard;
