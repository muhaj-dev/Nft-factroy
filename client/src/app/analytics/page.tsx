import React from "react";
import SideBar from "@/common/navs/side/SideNavigation";
import NavTools from "@/common/navs/NavTools";

const Analytics: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <div className=" w-[20dvw] h-screen">
        <SideBar />
      </div>
      <div className="w-[79dvw] px-4 py-10">
        <div className="mx-5">
          <NavTools title="Analytics" isMenu={true} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
