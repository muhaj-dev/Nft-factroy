import { orbitron, poppins } from "@/fonts/fonts";
import Button from "@/common/Button";
import React from "react";

interface GetStartedProps {
  nextPage: () => void;
}

const Onboarding: React.FC<GetStartedProps> = ({ nextPage }) => {
  return (
    <div
      className={`w-[96%] tablet_l:w-[95%] mt-4 ${poppins.className} `}
    >
        <div>
            
        </div>
      <h3 className={`${orbitron.className} text-3xl mb-3`}>
      Launchpad Project Application
      </h3>
      <p className="mb-10 text-white w-[100%] laptop:w-[90%]">
        Turn your digital products/services into unique NFTs with just a few
        clicks. Choose your preferred blockchain, set the supply, and define
        rarity to create captivating digital assets.
      </p>
      <div className=" w-full">
        <Button
          className="bg-gradient-linear px-14 py-3 rounded-md"
          handleClick={nextPage}
        >
          Apply
        </Button>
        {/* <Button
          className="px-14 py-3 text-white"
          as="link"
          href="/guide"
          style={{
            border: "2px solid transparent",
            borderImage: "linear-gradient(to right, #702D6C, #FFC72C) 1",
          }}
        >
          Guide
        </Button> */}
      </div>
    </div>
  );
};

export default Onboarding;
