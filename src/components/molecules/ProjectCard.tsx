"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CardWrapper from "@/components/molecules/CardWrapper";

type Props = {
  title: string;
  technology: string;
  image: string;
  challenge: string;
  solution: string;
};
const ProjectCard = ({
  title,
  technology,
  image,
  challenge,
  solution,
}: Props) => {
  const [open, setOpen] = useState(false);
  const localColorValue =
    typeof window !== "undefined" && window.localStorage.getItem("isDarkMode");
  const isDarkModeEnabled =
    localColorValue === "true" || localColorValue === null;
  const dialogTheme = isDarkModeEnabled ? "dark" : "light";

  return (
    <>
      <Card
        className='py-4 dark:bg-black light:bg-white'
        isPressable
        onPress={() => {
          setOpen(true);
        }}
      >
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <h4 className='font-bold text-large'>{title}</h4>
          <small className='text-default-500'>{technology}</small>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <Image
            alt='Card background'
            className='object-cover rounded-xl'
            src={image}
            width={270}
          />
        </CardBody>
      </Card>
      <Dialog
        open={open}
        onClose={setOpen}
        className={`${dialogTheme} relative z-10`}
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block'
        />

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
            <DialogPanel
              transition
              className='flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl'
            >
              <CardWrapper classNames=' w-full h-full'>
                <button
                  type='button'
                  onClick={() => setOpen(false)}
                  className='absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'
                >
                  <span className='sr-only'>Close</span>
                  <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                </button>
                <div className=' p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto'>
                  <div className='mb-4'>
                    <div>
                      <Image
                        style={{ aspectRatio: "16/9", width: "100%" }}
                        alt='Card background'
                        className='object-cover rounded-xl'
                        src={image}
                      />
                    </div>
                    <div className='h-10' />
                    <h3 className=' text-xl font-semibold mb-2'>
                      The Challenge
                    </h3>
                    <p className='italic'>{challenge}</p>
                  </div>

                  <div className='mb-4'>
                    <h3 className='text-xl font-semibold mb-2'>
                      Solution Approach
                    </h3>
                    <p className='italic'>{solution}</p>
                  </div>
                </div>
              </CardWrapper>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProjectCard;
