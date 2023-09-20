"use client";
import React, { useState } from "react";
import { orbitron } from "@/fonts/fonts";
import Button from "@/common/Button";
import Image from "next/image";

interface GetStartedProps {
  cancel: () => void;
//   nextPage: () => void;
}

export const Transproces: React.FC<GetStartedProps> = ({ cancel }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [subcom, setSubcom] = useState(false);

  const closeComfimSubmit = () => {
    setSubcom(!subcom);
  };


  const submitsucces = () => {
    // nextPage()
    setSubcom(!subcom);
  };


  return (
    <>
      {subcom ? (
        <div className="fixed  flex h-[100dvh] left-0 top-0 l w-[100dvw]">
          <div
            onClick={closeComfimSubmit}
            className="absolute h-[100dvh] left-0 top-0 l w-[100dvw]  bg-[#1B0A1A]  bg-opacity-60"
          />
          <div className="relative z-30 w-[95%] py-32 rounded-2xl shadow-lg mx-auto mt-32 h-fit laptop_l:w-[1000px] bg-[#130712] ">
            <Image
              width={15}
              height={15}
              onClick={cancel}
              className="absolute top-6 right-7 cursor-pointer"
              src="/images/close.svg"
              alt="checked"
            />
            <h2
              className={`${orbitron.className} text-center text-white text-3xl mb-3`}
            >
              Transaction processing...
            </h2>
            <p className="text-center text-xl w-[90%] mx-auto mt-2">
            Your transaction is been published, please exercise patience!
            </p>
            <p className="text-center w-fit mx-auto text-primary flex justify-center gap-2 items-center text-lg tablet_l:w-[550px] mt-6 ">
            View On Explorer
            <Image
              width={15}
              height={15}
              onClick={cancel}
              className=" cursor-pointer"
              src="/images/explora.svg"
              alt="checked"
            />
            </p>           
          </div>
        </div>
      ) : (
        <div className="fixed  flex h-[100dvh] left-0 top-0 l w-[100dvw]">
          <div
            onClick={closeComfimSubmit}
            className="absolute h-[100dvh] left-0 top-0 l w-[100dvw]  bg-[#1B0A1A]  bg-opacity-60"
          />
          <div className="relative z-30 w-[95%] py-32 rounded-2xl shadow-lg mx-auto mt-32 h-fit laptop_l:w-[1000px] bg-[#130712] ">
            <Image
              width={15}
              height={15}
              onClick={cancel}
              className="absolute top-6 right-7 cursor-pointer"
              src="/images/close.svg"
              alt="checked"
            />
            <h2
              className={`${orbitron.className} text-center text-white text-3xl mb-3`}
            >
              Congratulations It’s Yours!  
            </h2>
            <p className="text-center text-xl w-[90%] mx-auto mt-2">
            Your mint is confirmed - you officially own a West cravings Nft
            </p>
            <p className="text-center w-fit mx-auto text-primary flex justify-center gap-2 items-center text-lg tablet_l:w-[550px] mt-6 ">
            View On Explorer
            <Image
              width={15}
              height={15}
              onClick={cancel}
              className=" cursor-pointer"
              src="/images/explora.svg"
              alt="checked"
            />
            </p>           
          <div className="flex justify-center my-6">
              <Button
                handleClick={submitsucces}
              className={`${orbitron.className} bg-gradient-linear px-6 mb-5 py-3`}
              >
                <p> Redeem NFT</p>
              </Button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};