import React from "react";
import { Image } from "@nextui-org/image";

type Props = {
  icon: string;
  title: string;
  description: string;
  centerImage?: boolean;
  titleClassName?: string;
  descClassName?: string;
};
const LearningPathItem = ({
  icon,
  title,
  description,
  centerImage = true,
  titleClassName,
  descClassName,
}: Props) => {
  return (
    <div className={`flex w-full pb-2 items-center`}>
      <div className='p-1 m-2 bg-white rounded-md h-[38px] flex justify-center items-center'>
        <Image
          width={24}
          height={24}
          className='object-cover'
          src={icon}
          alt={title}
        />
      </div>
      <div>
        <p className={titleClassName || "font-semibold"}>{title}</p>

        <p className={descClassName || "text-xs"}>{description}</p>
      </div>
    </div>
  );
};

export default LearningPathItem;
