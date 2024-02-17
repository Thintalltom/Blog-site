import React, { useState, useEffect } from 'react';
import { auth } from '../../Firebase/firebaseConfig';

const Blog = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleLogout}>Logout</button>
          {/* Your upload form component goes here */}
          <UploadForm />
        </div>
      ) : (
        <p>Please log in to upload images.</p>
      )}
      {/* Your blog content rendering goes here */}
    </div>
  );
};

export default Blog;
