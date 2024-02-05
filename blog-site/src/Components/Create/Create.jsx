import React, { useState, useEffect } from 'react'
import { db, storage } from '../../Firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid'
//this is the component that deals with creating of personal post
const Create = () => {
  //create a state to handle the input 
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')
  const [img, setImg] = useState(null)

  //handling the upload of image
  const uploadImage = (e) => {
    //create an image ref referencing the storage attribute from firebase
    console.log(e.target.files[0])
    const imageRef = ref(storage, `images/${v4()}`);
    uploadBytes(imageRef,e.target.files[0]).then(data => {
      console.log(data, 'img')
      //this is to get the url of the image 
      getDownloadURL(data.ref).then(val =>{
        setImg(val)
        console.log(val)
      })
    })
  } 

  
  //handling the input of title 
  const titleFunc = (e) => {
    setTitle(e.target.value)
  }

  //handling the input of post
  const postFunc = (e) => {
    setPost(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title === '' || post === '' || !img ) {
      return
    }
    const postRef = collection(db, 'blog' )
    //add the title, post and the image url to the database 
    addDoc(postRef, {title ,post, img}).then(response => {
      console.log(response.id)
     
    }).catch(error => {
      console.log(error.message)
    })
    alert('Posted Successfully')
    setPost('');
    setTitle('');
  
  }
  return (
    <div className='bg-zinc-200 h-[100vh] p-4'>
      <div>
        <p className='text-center'>Create your own personal post</p>

        <div className=' flex flex-col justify-center items-center p-4'>
          <div className='bg-zinc-100 p-4 h-[25rem]'>
            <input onChange={titleFunc} value={title} type='text' className='w-[500px] border-[0.5px] border-slate-600 rounded p-[5px]' placeholder='Name of post' /> <br />
            <textarea onChange={postFunc} placeholder='write your thought....' value={post} className='border-[0.5px] p-4 h-[180px] w-[500px] mt-4' /> <br />
            <div className='mt-4'>
            <label >Upload Image </label> <br  />
            <input type='file' onChange={(e) => {
              uploadImage(e)
            }} />
            </div>
            
            <div className='flex justify-center items-center'>
              <button onClick={handleSubmit} className='border-[0.5px] border-zinc-400 p-[10px] rounded w-[100px] text-center mx-auto'>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create