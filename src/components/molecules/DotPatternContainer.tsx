"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

const DotPatternContainer = () => {
  return (
    <DotPattern
      className={cn(
        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
      )}
    />
  );
};

export default DotPatternContainer;
