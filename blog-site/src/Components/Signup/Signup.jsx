import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context/Context";
const Signup = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState({});
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [userNameError, setUsernameError] = useState("");

  const { signUp } = useContext(userContext);

  const showFunction = (e) => {
    setShow(!show);
  };
  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    setImage(imageFile);
  };

  const nameFunc = (e) => {
    setName(e.target.value);
  };
  const userFunc = (e) => {
    setUserName(e.target.value);
    if (userName.length >= 4) {
      setUsernameError("");
    } else {
      // You can display an error message or handle the case in a way suitable for your application
      setUsernameError("username should not be less than 4 characters");
    }
  };
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
            password: password,
            username: userName,
            name: name,
            image: image,
          });
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false); // Set loading back to false regardless of success or failure
      });
   
  };
  return (
    <div className=" h-screen p-4">
      <p className="text-center">FILL IN YOUR DETAILS</p>
      <div className="flex justify-center mt-4">
        <div className="leading-[50px]">
          <label>Full Name</label> <br />
          <input
            type="text"
            onChange={nameFunc}
            value={name}
            className="border-[0.5px] border-slate-500 rounded w-[500px]"
          />{" "}
          <br />
          <label>Profile Picture</label> <br />
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />{" "}
          <br />
          <label>UserName</label> <br />
          <p className="text-red-500">{userNameError}</p>
          <input
            type="text"
            onChange={userFunc}
            value={userName}
            className="border-[0.5px] border-slate-500 rounded w-[500px]"
          />{" "}
          <br />
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
        </div>
      </div>
    </div>
  );
};
export default Signup;
