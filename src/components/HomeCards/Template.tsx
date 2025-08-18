import React from "react";
import BadgeButton from "../ui/badge-button";
import MinimalCard from "../ui/minimal-card";

const Template = () => {
  return (
    <div>
      <div className="w-[50%]  shadow bg-white rounded-3xl  my-10 p-2 mx-auto  ">
        <div className=" h-full rounded-3xl bg-[#f4f4f4] shadow my-10 p-8     mx-auto  ">
          <BadgeButton />
          <div className="flex justify-between items-center ">
            <MinimalCard > 

                <video src="https://d2glbkh3xawr9t.cloudfront.net/gxuri.mp4" autoPlay muted  />
            </MinimalCard>
            <MinimalCard > 

                <video src="https://d2glbkh3xawr9t.cloudfront.net/gxuri.mp4" autoPlay muted  />
            </MinimalCard>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
