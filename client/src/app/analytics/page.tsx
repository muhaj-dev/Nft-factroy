"use client";

import { useState } from "react";
import React from "react";
import SideBar from "@/common/navs/side/SideNavigation";
import { AiOutlineMenu } from "react-icons/ai";
import NavTools from "@/common/navs/NavTools";

const Analytics: React.FC = () => {
  const [Open, setOpen] = useState(true);

  const menuNav = () => {
    setOpen(!Open);
  };


  return (
    <div className="flex flex-row gap-10  min-h-screen">
      <div
        className={
          Open
            ? "w-[11rem] laptop:w-[15rem] h-screen"
            : "relative w-[.4rem] h-screen"
        }
      >
        {Open ? (
          <SideBar menuNav={menuNav} />
        ) : (
          <div className="absolute top-8 cursor-pointer" onClick={menuNav}>
            <AiOutlineMenu className="h-6 w-6 items-center" />
          </div>
        )}
      </div>
      <div className={Open ? "mr-auto w-[70%] py-10" : "w-[100%] py-10 "}>
          <NavTools title="Analytics" isMenu={true} />
        </div>
      </div>
    // </div>
  );
};

export default Analytics;
