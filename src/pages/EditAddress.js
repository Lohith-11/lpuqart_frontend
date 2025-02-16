import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/EditAddress.css';

const EditAddress = () => {
  const { userId } = useParams();
  const [address, setAddress] = useState('');

  const handleAddressChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/verse/users/${userId}`, { address });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Edit Address</h1>
      <form onSubmit={handleAddressChange}>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn">Save</button>
      </form>
    </div>
  );
};

export default EditAddress;