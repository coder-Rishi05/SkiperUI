import React from "react";
import { SkiperCard } from "../ui/skiper-card";
import BadgeButton from "../ui/badge-button";
import img1 from "../../../public/card/img1.jpg";
import img2 from "../../../public/card/img2.jpg";
import img3 from "../../../public/card/img3.jpg";
import img4 from "../../../public/card/img4.jpg";
import img7 from "../../../public/card/img7.jpg";
import { cn } from "@/lib/utils";

const Special = () => {
  return (
    <div className="" > 
      <div className="my-20 ">
        <div className="w-[61.5%] mx-auto">
          <BadgeButton />
          <SkiperCard
            step1img1Class={cn(
              "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
              "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
              "md:group-hover:translate-y-2"
            )}
            step1img2Class={cn(
              "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
              "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
              "md:group-hover:-translate-y-6 "
            )}
            step2img1Class={cn(
              "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
              "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
              "md:group-hover:translate-y-2"
            )}
            step2img2Class={cn(
              "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
              "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
              "md:group-hover:-translate-y-6"
            )}
            step3imgClass={cn(
              "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
              "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
            )}
            step4imgClass={cn(
              "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
              "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
            )}
            description="Make your app 🤌"
            bgClass="lg:bg-gradient-to-tr"
            title="Tailwind + Framer + React
"
            description="Everything you need to ship"
            image={{
              step1light1: img1,
              step1light2: img2,
              step2light1: img3,
              step2light2: img1,
              step3light: img4,
              step4light: img7,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Special;
