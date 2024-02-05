import React, { useState } from 'react';
import { db, storage } from '../../Firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

const Create = () => {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [image, setImage] = useState(null); // State to hold the selected image file

  const titleFunc = (e) => {
    setTitle(e.target.value);
  };

  const postFunc = (e) => {
    setPost(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === '' || post === '' || !image) {
      return;
    }

    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);

      // Get the download URL for the image
      const imageUrl = await storageRef.getDownloadURL();

      // Add post details to Firestore
      const postRef = collection(db, 'blog');
      await addDoc(postRef, { title, post, imageUrl });

      // Clear form fields
      setTitle('');
      setPost('');
      setImage(null);

      alert('Post submitted successfully!');
    } catch (error) {
      console.log(error.message);
      alert('An error occurred while submitting the post.');
    }
  };


  return (
  )
           