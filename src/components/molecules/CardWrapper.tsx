import React from "react";
import { Card, CardBody } from "@nextui-org/react";

const CardWrapper = ({
  children,
  classNames,
  bodyClassName,
}: {
  children: React.ReactNode;
  classNames: string;
  bodyClassName?: string;
}) => {
  return (
    <Card
      className={`row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black  bg-white  justify-between flex flex-col  ${classNames}`}
    >
      <CardBody className={` ${bodyClassName || ""}`}>{children}</CardBody>
    </Card>
  );
};

export default CardWrapper;
