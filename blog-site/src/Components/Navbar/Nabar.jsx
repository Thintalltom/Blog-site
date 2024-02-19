import  {useState} from "react";
import { FaHeart, FaRegCircleUser } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Nabar = () => {

  return (
    <div>
      <div className="flex p-4 gap-[20px]  justify-between">
        <div>
          <img src={logo} className="w-[50px]" />
        </div>

        <div className="flex gap-[30px] ">
          <button onClick={() => setPopup(true)}>Sign up</button>
          <button className="border-[0.5px] w-[100px] rounded p-[1.5px] bg-zinc-950 text-white">Login</button>
        </div>

      </div>
    </div>
  );
};

export default Nabar;
