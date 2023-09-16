import Button from "@/common/Button";
import SideBar from "@/common/navs/side/SideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Apply from "./apply/page";
import NavTools from "@/common/navs/NavTools";

const LaunchPad = () => {
  return (
    <div className="flex flex-row gap-10 justify-start min-h-screen">
      <div className=" bg-red-500 w-[12rem] h-screen">
        <SideBar />
      </div>
      <div className="mr-auto w-[80%] bg-green-600 py-10">
        {/* <div className=" text-white"> */}
          <NavTools title="Launchpad" isMenu={true} />
        {/* </div> */}
        {/* <Apply /> */}
      </div>
    </div>
  );
};

export default LaunchPad;
