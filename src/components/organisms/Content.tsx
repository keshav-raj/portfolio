"use client";
import React from "react";
import CardWrapper from "@/components/molecules/CardWrapper";
import SparklesText from "@/components/magicui/sparkles-text";
import TypingAnimation from "@/components/magicui/typing-animation";
import ImageSlider from "@/components/molecules/ImageSlider";
import BentoGridWrapper from "@/components/molecules/BentoGridWrapper";
import SkillCard from "@/components/molecules/SkillCard";
import ExperienceCard from "@/components/molecules/ExperienceCard";
import ProjectCard from "@/components/molecules/ProjectCard";
import SocialBanners from "@/components/molecules/SocialBanners";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import SkillSection from "@/components/molecules/SkillSection";
import { useSearchParams } from "next/navigation";

const Content = () => {
  const searchParams = useSearchParams();
  const keyParam: any = searchParams.get("viewKey");

  const [selectedFilter, setSelectedFilter] = React.useState<string>(
    keyParam || "all"
  );

  const itemBySlug: any = {
    all: [
      "aboutMe",
      "imageSlider",
      "skillCard",
      "experienceCard",
      "introVideo",
      "skillSection",
      "codeExecutionProject",
      "webSeoProject",
      "analyticsProject",
      "reactNativePerformanceProject",
      "socialBannerInstagram",
      "socialBannerGithub",
      "socialBannerLinkedIn",
      "socialBannerTwitter",
    ],
    about: [
      "aboutMe",
      "imageSlider",
      "skillCard",
      "experienceCard",
      "introVideo",
      "skillSection",
    ],
    projects: [
      "codeExecutionProject",
      "webSeoProject",
      "analyticsProject",
      "reactNativePerformanceProject",
    ],
    social: [
      "socialBannerInstagram",
      "socialBannerGithub",
      "socialBannerLinkedIn",
      "socialBannerTwitter",
    ],
  };
  React.useEffect(() => {
    if (keyParam) {
      setSelectedFilter(keyParam);
    }
  }, [keyParam]);

  const ItemDetails = {
    aboutMe: {
      className: "col-span-2",
      header: (
        <CardWrapper classNames='relative h-full '>
          <SparklesText
            className='text-center text-2xl md:text-4xl lg:text-4xl '
            text='Keshav Raj'
          />
          <div className='h-10' />

          <TypingAnimation
            duration={30}
            className='h-full text-1xl text-black dark:text-white'
            text='Full-Stack Developer with 5.6 years of experience, specializing in architecture, performance optimization, and rapid new stack learning. Proven ability to lead and manage products, driving development from concept to deployment. Expert bug fixer with extensive knowledge in RoR, MySQL, and AWS. Adept at wearing multiple hats to deliver impactful solutions in dynamic startup environments.'
          />
        </CardWrapper>
      ),
    },
    imageSlider: {
      className: "col-span-2 md:col-span-1",
      header: (
        <CardWrapper classNames='relative'>
          <ImageSlider
            items={[
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihY7oEQTXK74Yd_O6JHN3oKtyWnybmU6MTfLRBHMjJwIaUp87alQW2nThXreSUXk0Eas9w5q-BdAYhNf0UZKCEXgDCaMmRIrZxk=s1600-rw-v1",
              "https://lh3.googleusercontent.com/drive-viewer/AKGpihavc3cpq6pKBaiRMCJCE4f8I7DSgsCMvAqoMfyrzc7uiC8ZlCUHM6Pp_22Zo81o6f9BtEfUEZx1uKekcZEqMCwcF-5rG7uGtNI=s1600-rw-v1",
            ]}
          />
        </CardWrapper>
      ),
    },
    skillCard: {
      className: "col-span-2 md:col-span-1 row-span-2 ",
      header: (
        <CardWrapper classNames='relative'>
          <SkillCard />
        </CardWrapper>
      ),
    },
    experienceCard: {
      className: "row-span-2 col-span-2  md:col-span-1",
      header: (
        <CardWrapper classNames='relative'>
          <ExperienceCard />
        </CardWrapper>
      ),
    },
    introVideo: {
      className: "row-span-2 col-span-2 md:col-span-3 lg:col-span-2",
      header: (
        <CardWrapper classNames='relative h-full' bodyClassName=''>
          <div className=' flex justify-center items-center w-full h-full'>
            <iframe
              style={{ aspectRatio: "16/9", width: "100%" }}
              src='https://www.youtube.com/embed/P2yPST7dwDE?si=7DBtH1wb0ISBE9bv'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </CardWrapper>
      ),
    },
    skillSection: {
      className: "row-span-2 lg:row-span-1 col-span-2 lg:col-span-1",
      header: (
        <CardWrapper classNames='relative h-full' bodyClassName=''>
          <SkillSection />
        </CardWrapper>
      ),
    },
    codeExecutionProject: {
      className: " col-span-2 md:col-span-1",
      header: (
        <CardWrapper classNames='relative h-full' bodyClassName=''>
          <ProjectCard
            title={"Code Execution "}
            technology={"Piston | Monaco"}
            image={"/project1.png"}
            challenge={
              "How can we help students easily prepare for Data Structures and Algorithms (DSA)?"
            }
            solution={
              "To address this challenge, I developed an interactive platform using Piston and Monaco, where teachers can teach DSA concepts with hands-on practice. Each concept is paired with quizzes that include code execution support, allowing students to practice as many times as needed. Additionally, teachers can create their own version of LeetCode-style questions for students to practice specific patterns, ensuring thorough understanding and preparation."
            }
          />
        </CardWrapper>
      ),
    },
    webSeoProject: {
      className: " col-span-2 md:col-span-1",
      header: (
        <CardWrapper classNames='relative h-full' bodyClassName=''>
          <ProjectCard
            title={"Boosting Visibility and Speed"}
            technology={"Next.js"}
            image={"/project2.png"}
            challenge={
              "How can I ensure our tech courses stand out in the vast ocean of Google search results?"
            }
            solution={
              "To tackle this challenge, I leveraged Next.js for server-side rendering (SSR) to significantly enhance SEO. By doing so, our courses became more discoverable on Google search lists. I also provided fully customized branding options for teachers, helping them create unique, identifiable content. Additionally, I optimized images using an image proxy to convert them into the WebP format, improving loading speeds and overall performance."
            }
          />
        </CardWrapper>
      ),
    },
    analyticsProject: {
      className: " col-span-2 md:col-span-1",
      header: (
        <CardWrapper classNames='relative h-full' bodyClassName=''>
          <ProjectCard
            title={"Insight-Driven Success"}
            technology={"Java script"}
            image={"/project3.png"}
            challenge={
              "How can I monitor platform usage and identify where users drop off during the checkout process?"
            }
            solution={
              "To address this challenge, I developed a comprehensive analytics framework using JavaScript. This framework captures every user action and the time spent on each activity, reporting this data to the backend with detailed insights. This granular level of tracking allowed us to pinpoint the exact drop-off points in the checkout process and make informed decisions to improve user experience and conversion rates."
            }
          />
        </CardWrapper>
      ),
    },
    reactNativePerformanceProject: {
      className: " col-span-2 md:col-span-1",
      header: (
        <CardWrapper classNames='relative h-full' bodyClassName=''>
          <ProjectCard
            title={"React Native performance"}
            technology={"React Native"}
            image={"/project4.png"}
            challenge={
              "How can I enhance the performance of a feature-rich app for students, especially when average JS and UI frame rates dropped below 30fps, causing thread locks and sluggishness?"
            }
            solution={`To improve performance, I implemented code splitting to load only the essential starting pages initially. Then, I optimized the rendering of lists by integrating Shopify's Awesome List library, which gave a slight boost in performance. To further enhance efficiency, I built a common library on top of Shopify's solution and applied it across the app, addressing the rendering issue comprehensively.\n However, the app's cold start time remained an issue at 8 seconds. Through debugging, I discovered that the initial parsing of a large JSON file by the Eva Kitten UI library was causing the delay. By adding specific configurations to Babel, I reduced the cold start time to 1 second. Consequently, both UI and JS frame rates improved significantly, now consistently above 50fps, providing a smoother and faster user experience.`}
          />
        </CardWrapper>
      ),
    },
    socialBannerInstagram: {
      className: "row-span-1 col-span-2  md:col-span-1",
      header: (
        <CardWrapper classNames='relative h-full' bodyClassName='p-0 m-0'>
          <SocialBanners
            link='https://www.instagram.com/keshav___raj/'
            backgroundColor={`radial-gradient(
      circle farthest-corner at 35% 90%,
      #fec564,
      transparent 50%
    ),
    radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
    radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 20% -50%,
      #5258cf,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 60% -20%,
      #893dc2,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
    linear-gradient(
      #6559ca,
      #bc318f 30%,
      #e33f5f 50%,
      #f77638 70%,
      #fec66d 100%
    )`}
            iconComponent={() => (
              <LogoInstagram height='64px' width='64px' color={"#fff"} />
            )}
          />
        </CardWrapper>
      ),
    },
    socialBannerGithub: {
      className: "row-span-1 col-span-2 md:col-span-2 lg:col-span-3",
      header: (
        <CardWrapper classNames='relative h-full' bodyClassName='p-0 m-0'>
          <SocialBanners
            link='https://github.com/keshav-raj'
            backgroundColor={"#171515"}
            iconComponent={() => (
              <LogoGithub height='64px' width='64px' color={"#fff"} />
            )}
          />
        </CardWrapper>
      ),
    },
    socialBannerLinkedIn: {
      className: "row-span-1 col-span-2 md:col-span-2 lg:col-span-3",
      header: (
        <CardWrapper classNames='relative h-full' bodyClassName='p-0 m-0'>
          <SocialBanners
            link='https://www.linkedin.com/in/keshav-raj/'
            backgroundColor={"#5285ce"}
            iconComponent={() => (
              <LogoLinkedin height='64px' width='64px' color={"#fff"} />
            )}
          />
        </CardWrapper>
      ),
    },
    socialBannerTwitter: {
      className: "row-span-1 col-span-2  md:col-span-1",

      header: (
        <CardWrapper classNames='relative h-full' bodyClassName='p-0 m-0'>
          <SocialBanners
            link='https://x.com/keshavk724'
            backgroundColor={"#a5e0ff"}
            iconComponent={() => (
              <LogoTwitter height='64px' width='64px' color={"#fff"} />
            )}
          />
        </CardWrapper>
      ),
    },
  };

  return (
    <div className='container'>
      <BentoGridWrapper
        features={itemBySlug[selectedFilter]}
        ItemDetails={ItemDetails}
      />
    </div>
  );
};

export default Content;
