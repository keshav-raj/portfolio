"use client";
import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/components/atoms/MoonIcon";
import { SunIcon } from "@/components/atoms/SunIcon";

const ThemeSwitch = () => {
  const localColorValue =
    typeof window !== "undefined" && window.localStorage.getItem("isDarkMode");
  const isDarkModeDisabled = localColorValue === "false";
  const isDarkModeEnabled =
    localColorValue === "true" || localColorValue === null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initThemeFunction = () => {
    const element = document.getElementById("rootElementItem");
    if (element) {
      if (isDarkModeDisabled) {
        element.classList.remove("dark");
        element.classList.add("light");
      } else {
        element.classList.remove("light");
        element.classList.add("dark");
      }
    }
  };
  React.useEffect(() => {
    initThemeFunction();
  }, [initThemeFunction]);
  return (
    <Switch
      onChange={(e) => {
        const isDarkModeSelected = e.target.checked;
        typeof window !== "undefined" &&
          window.localStorage.setItem(
            "isDarkMode",
            isDarkModeSelected ? "true" : "false"
          );
        const element = document.getElementById("rootElementItem");
        if (element) {
          if (!isDarkModeSelected) {
            element.classList.remove("dark");
            element.classList.add("light");
          } else {
            element.classList.remove("light");
            element.classList.add("dark");
          }
        }
      }}
      defaultSelected={isDarkModeEnabled}
      size='lg'
      color='secondary'
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
};

export default ThemeSwitch;
