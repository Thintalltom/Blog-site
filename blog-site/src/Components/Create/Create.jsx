import React, { useState, useEffect, useContext } from "react";
import { db, storage } from "../../Firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";
import { userContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
//this is the component that deals with creating of personal post
const Create = () => {
  //create a state to handle the input
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [img, setImg] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate()
  //handling the upload of image
  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    const imageRef = ref(storage, `images/${v4()}`);

    const uploadTask = uploadBytesResumable(imageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setUploadProgress(progress);
        // You can set this progress to your state or display it as needed
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImg(downloadURL);
        });
      }
    );
  };

  //handling the input of title
  const titleFunc = (e) => {
    setTitle(e.target.value);
  };

  //handling the input of post
  const postFunc = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || post === "" || !img) {
      return;
    }
    const postRef = collection(db, "blog");
    //add the title, post and the image url to the database
    addDoc(postRef, { title, post, img })
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
    alert("Posted Successfully");
    setPost("");
    setTitle("");
  };

  const {logOut} = useContext(userContext);
  const handleSignout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-zinc-200 h-[100vh] p-4">
      <button
        className="p-4 bg-slate-500 text-white  rounded "
        onClick={handleSignout}
      >
        Logout{" "}
      </button>
      <div>
        <p className="text-center">Create your own personal post</p>

        <div className=" flex flex-col justify-center items-center p-4">
          <div className="bg-zinc-100 p-4 h-[25rem]">
            <input
              onChange={titleFunc}
              value={title}
              type="text"
              className="w-[500px] border-[0.5px] border-slate-600 rounded p-[5px]"
              placeholder="Name of post"
            />{" "}
            <br />
            <textarea
              onChange={postFunc}
              placeholder="write your thought...."
              value={post}
              className="border-[0.5px] p-4 h-[180px] w-[500px] mt-4"
            />{" "}
            <br />
            <div className="mt-4">
              <label>Upload Image </label> <br />
              <input
                type="file"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
            </div>
            {uploadProgress > 0 && uploadProgress < 100 && (
              <progress value={uploadProgress} max="100" />
            )}
            <div className="flex justify-center items-center">
              <button
                onClick={handleSubmit}
                className="border-[0.5px] border-zinc-400 p-[10px] rounded w-[100px] text-center mx-auto"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
