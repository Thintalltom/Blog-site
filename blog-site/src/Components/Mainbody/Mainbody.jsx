import React, {useState, useEffect} from "react";
import { CiImageOn, CiLink  } from "react-icons/ci";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'
import { Link } from "react-router-dom";

const Mainbody = () => {
  const [poste, setPoste] = useState([])
  useEffect(() => {
    getPost()
  }, [])

  //this function is to add data
  //collection is used to reference the database
  const getPost = () => {
    const postRef = collection(db, 'blog')
    //getDocs is used to get items 
    getDocs(postRef).then(response => {
      const post = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
      setPoste(post)
    }).catch(error => console.log(error.message))
  }
  //get the post from the poste
  useEffect (() => {
    console.log(poste)
  },[poste])

  return (
    <div className=" h-[100vh] bg-zinc-200 ">
      <div className="grid justify-items-center  ">
        <div className="border-[0.5px] border-slate-500 justify-center flex gap-[20px]  h-[3rem] p-[5px] items-center w-[40rem] mt-[20px] bg-white">
           <Link to='/create'><input type="text" className="bg-zinc-200 w-[30rem] p-[5px] rounded focus:outline-none " placeholder="Create Post" /> </Link> 
            <CiImageOn className="text-2xl cursor-pointer" />
            <CiLink className="text-2xl cursor-pointer" /> 
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
