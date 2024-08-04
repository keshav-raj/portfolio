"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

type Props = {
  features: Array<string>;
  ItemDetails: any;
};
const BentoGridWrapper = ({ features, ItemDetails }: Props) => {
  return (
    <BentoGrid className='max-w-12xl mx-auto'>
      {features.map((item) => {
        const data = ItemDetails[item];
        return (
          <BentoGridItem
            key={item}
            title={data.title}
            description={data.description}
            header={data.header}
            icon={data.icon}
            className={!data.className ? "" : data.className}
            showMeta={!!data.showMeta}
          />
        );
      })}
    </BentoGrid>
  );
};

export default BentoGridWrapper;
