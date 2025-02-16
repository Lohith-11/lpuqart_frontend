import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/verse/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">User Profile</h1>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default UserProfile;