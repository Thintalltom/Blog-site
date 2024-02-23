import { useState, useContext } from "react";
import logo from "../../assets/logo.png";
import { userContext } from "../Context/Context";
import { Link } from "react-router-dom";
const Nabar = () => {
  const { user, logOut } = useContext(userContext);

  const handleSignout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <div>
      <div className="flex p-4 gap-[20px]  justify-between">
        <div>
          <img src={logo} className="w-[50px]" />
        </div>
        {user ? (
          <div>
          <button className="border-slate-400 border-[0.5px] rounded w-[100px] h-[50px] " onClick={handleSignout}>Log out</button>
          <p className="text-sm">welcome, {user.email}</p>
       </div>
        ) : (
          <div className="flex gap-[30px] ">
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
            <Link to="/login">
              <button className="border-[0.5px] w-[100px] rounded p-[1.5px] bg-zinc-950 text-white">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Nabar;
