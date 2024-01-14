import React from "react";
import { CiImageOn, CiLink  } from "react-icons/ci";
const Mainbody = () => {
  return (
    <div className=" h-[100vh] bg-zinc-200 ">
      <div className="grid justify-items-center  ">
        <div className="border-[0.5px] border-slate-500 justify-center flex gap-[20px]  h-[3rem] p-[5px] items-center w-[40rem] mt-[20px] bg-white">
            <input type="text" className="bg-zinc-200 w-[30rem] p-[5px] rounded focus:outline-none " placeholder="Create Post" /> 
            <CiImageOn className="text-2xl cursor-pointer" />
            <CiLink className="text-2xl cursor-pointer" /> 
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
