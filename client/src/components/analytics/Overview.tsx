import React from 'react'
import { orbitron } from "@/fonts/fonts";


const Overview = () => {
  return (
    <div className=' my-14'>
    <div className="mx-auto w-full">
      <h2 className={`${orbitron.className} text-2xl mb-3`}>Overview</h2>
      <div className=" flex flex-wrap gap-auto justify-between px-5">
        <div className="bg-[#130712] rounded-lg border border-opacity-25 border-yellow-400 shadow-lg p-3 w-[47%] tablet_l:w-[30%]">
          <p>Total Sales</p>
          <p>$100,000</p>
          <p>+10%</p>
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default Overview