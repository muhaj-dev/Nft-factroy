'use client'

import { useState } from 'react'
import Button from "@/common/Button";
import SideBar from "@/common/navs/side/SideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Apply from "./apply/page";
import NavTools from "@/common/navs/NavTools";
import { AiOutlineMenu } from "react-icons/ai";


const LaunchPad = () => {
  const [Open, setOpen] = useState(true)

  const menuNav = () => {
    setOpen(!Open);
  };
  return (
    <div className="flex flex-row gap-10  min-h-screen">
      <div className="w-[12rem] h-screen">
      <div className="cursor-pointer" onClick={menuNav}>
          <AiOutlineMenu className="tablet_l:hidden flex h-7 w-7 items-center" />
        </div>
        <SideBar />
      </div>
      <div className="mr-auto w-[80%] py-10">
        {/* <div className=" text-white"> */}
          <NavTools title="Launchpad" isMenu={true} />
        {/* </div> */}
        <Apply />
      </div>
    </div>
  );
};

export default LaunchPad;
