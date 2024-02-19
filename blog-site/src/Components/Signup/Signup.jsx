import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context/Context";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signUpError, setSignUpError] = useState(null);
  const [info, setInfo] = useState({});
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [userNameError, setUsernameError] = useState("");

  const { signUp } = useContext(userContext);

  const showFunction = (e) => {
    setShow(!show);
  };
  

 // const nameFunc = (e) => {
   // setName(e.target.value);
 // };
  //const userFunc = (e) => {
   // setUserName(e.target.value);
    //if (userName.length >= 4) {
   //   setUsernameError("");
   // } else {
      // You can display an error message or handle the case in a way suitable for your application
   //   setUsernameError("username should not be less than 4 characters");
  //  }
 // };
  const passwordFunc = (e) => {
    setPassword(e.target.value);
  };
  const emailFunc = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when clicked
    await signUp(email, password)
      .then(() => {
        navigate('/login')
        setInfo({
            email: email,
            password: password
          });
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message)
      }).finally(() => {
        setLoading(false); // Set loading back to false regardless of success or failure
      });
   
  };
  return (
    <div className=" h-screen p-4">
      <p className="text-center">FILL IN YOUR DETAILS</p>
      <div className="flex justify-center mt-4">
        <div className="leading-[50px]">
        {signUpError && ( // Render the error message if loginError state is not empty
            <p className="text-red-500 text-center">{signUpError}</p>
          )}
          <label>Email</label> <br />
          <input
            type="email"
            onChange={emailFunc}
            value={email}
            className="border-[0.5px] border-slate-500 rounded w-[500px]"
          />{" "}
          <br />
          <label>Password</label> <br />
          <div className="flex flex-row-reverse border-[0.5px] p-[5px] border-slate-500 rounded w-[500px]">
            <p className=" cursor-pointer" onClick={showFunction}>
              {show ? "show" : "hide"}
            </p>
            <input
              type={show ? "password" : "text"}
              onChange={passwordFunc}
              value={password}
              className="w-[480px] "
            />{" "}
            <br />
          </div>
          <div className="flex justify-center items-center mt-4">
          <button
              className="border-[0.5px] w-[100px] rounded"
              onClick={handleSignup}
              disabled={loading} // Disable the button when loading
            >
              {loading ? "Loading..." : "Sign Up"} {/* Button text */}
            </button>
          </div>
          <p className="text-center text-sm mt-[10px]">Existing user? <Link to='/login' className="text-blue-500">Login</Link></p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
