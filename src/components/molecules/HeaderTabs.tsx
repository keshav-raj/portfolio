"use client";
import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { Tabs, Tab } from "@nextui-org/react";

const HeaderTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const keyParam = searchParams.get("viewKey");
  const createQueryString = React.useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      <Tabs
        radius='full'
        selectedKey={keyParam || "all"}
        onSelectionChange={(selectedKeyItem) => {
          router.push(
            pathname + "?" + createQueryString("viewKey", selectedKeyItem)
          );
        }}
      >
        <Tab key='all' title='All' />
        <Tab key='about' title='About' />
        <Tab key='projects' title='Projects' />
        <Tab key='social' title='Social' />
      </Tabs>
    </div>
  );
};

export default HeaderTabs;
