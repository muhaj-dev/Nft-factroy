"use client";

import { useState } from "react";
import Button from "@/common/Button";
import SideBar from "@/common/navs/side/SideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Apply from "./apply/page";
import NavTools from "@/common/navs/NavTools";
import { AiOutlineMenu } from "react-icons/ai";

const LaunchPad = () => {
  const [Open, setOpen] = useState(true);

  const menuNav = () => {
    setOpen(!Open);
  };
  return (
    <div className="flex flex-row gap-10  min-h-screen">
      <div className={Open ? "w-[11rem] laptop:w-[15rem] h-screen" : "relative w-[1rem] h-screen"}>
       
        {Open ? (
          <SideBar menuNav={menuNav} />
        ) : (
          <div className="absolute top-8 cursor-pointer" onClick={menuNav}>
            <AiOutlineMenu className="h-6 w-6 items-center" />
          </div>
        )}
      </div>
      <div className={Open ? "mr-auto w-[70%] py-10" : "w-[100%] py-10 "}>
        <NavTools title="Launchpad" isMenu={true} />
        <Apply />
      </div>
    </div>
  );
};

export default LaunchPad;
