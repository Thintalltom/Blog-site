import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Context/Context";

const Login = () => {
  const { login } = useContext(userContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [logpassword, setLogPassword] = useState("");
  const [logemail, setLogEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('')

  const logpasswordFunc = (e) => {
    setLogPassword(e.target.value);
  };
  const logemailFunc = (e) => {
    setLogEmail(e.target.value);
  };
const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true); // Set loading to true when clicked
    await login(logemail, logpassword).then(() => {
      navigate('/')
    }).catch((err) => {
     console.log(err.message)
      setLoginError(err.message)
      console.log(loginError)
    }).finally(() => {
      setLoading(false)
    })
  };
  const showFunction = (e) => {
    setShow(!show);
  };

  return (
    <div>
      <div >
        <p className="text-center">Login Account</p>
        <div className="flex justify-center mt-4">
        <div className="leading-[50px]">
        {loginError && ( // Render the error message if loginError state is not empty
            <p className="text-red-500 text-center">{loginError}</p>
          )}
          <label>Email</label> <br />
          <input
            type="email"
            onChange={logemailFunc}
            value={logemail}
            className="border-[0.5px] p-[2px] border-slate-500 rounded w-[500px]"
          />{" "}
          <br />
          <label>Password</label> <br />
          <div className="flex flex-row-reverse border-[0.5px] p-[5px] border-slate-500 rounded w-[500px]">
            <p className=" cursor-pointer" onClick={showFunction}>
              {show ? "show" : "hide"}
            </p>
            <input
              type={show ? "password" : "text"}
              onChange={logpasswordFunc}
              value={logpassword}
              className="w-[480px] "
            />{" "}
            <br />
          </div>
          <div className="flex justify-center items-center mt-4">
          <button
              className="border-[0.5px] w-[100px] rounded"
              onClick={handleLogin}
              disabled={loading} // Disable the button when loading
            >
              {loading ? "Loading..." : "Login"} {/* Button text */}
            </button>
           
          </div>
          <p className="text-center text-sm mt-[10px] ">Create account <Link to='/signup' className="text-blue-500">Signup</Link></p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;