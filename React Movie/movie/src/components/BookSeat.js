import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';

const BookSeat = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { name, email, mobile, movieId: id } });
  };

  return (
    <div className="book-seat">
      <h1>Book Seat for Movie {id}</h1>
      <form onSubmit={handleSubmit}>
        <div className='bs'>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        </div>
        
        <div className='bs'>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        
        <div className='bs'>
          <label>Mobile:</label>
          <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} maxLength={10} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookSeat;