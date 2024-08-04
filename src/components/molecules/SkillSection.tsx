"use client";
import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "mysql",
  "python",
  "monogdb",
];
const SkillSection = () => {
  return (
    <div className='relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 pt-1'>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default SkillSection;
