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
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  //this function is to add data
  //collection is used to reference the database
  const getPost = () => {
    const postRef = collection(db, 'blog')
    //getDocs is used to get items 
    getDocs(postRef).then(response => {
      const post = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
      setPoste(post)
      setLoading(false);
    }).catch(error =>{ console.log(error.message);  setLoading(false);})
  }
  //get the post from the poste
  useEffect (() => {
    console.log(poste)
  },[poste])

  return (
    <div>
      <div className="grid justify-items-center  ">
        <div className="border-[0.5px] border-slate-500 justify-center flex gap-[20px]  h-[3rem] p-[5px] items-center w-[40rem] mt-[20px] bg-white">
           <Link to='/create'><input type="text" className="bg-zinc-200 w-[30rem] p-[5px] rounded focus:outline-none " placeholder="Create Post" /> </Link> 
            <CiImageOn className="text-2xl cursor-pointer" />
            <CiLink className="text-2xl cursor-pointer" /> 
        </div>

        {loading ? ( // Show loading message or spinner while loading
          <div className="flex justify-center items-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-3 gap-[10rem]">
            {poste.map((post, index) => (
              <div key={index} className=" p-4 mt-[20px] rounded">
                <img src={post.data.img} className="w-[200px] mx-auto rounded h-[100px]" alt="post-image" />
                <p className="font-extrabold">{post.data.title}</p>
                <p className="font-extralight">{post.data.post}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mainbody;
